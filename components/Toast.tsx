import React from 'react';
import { Animated, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

type Props = {
    message?: string | null;
    duration?: number;
    onDismiss?: () => void;
};

export default function Toast({ message, duration = 3000, onDismiss }: Props) {
    const opacity = React.useRef(new Animated.Value(0)).current;
    const translateY = React.useRef(new Animated.Value(-12)).current;

    React.useEffect(() => {
        if (!message) return;

        Animated.parallel([
            Animated.timing(opacity, { toValue: 1, duration: 180, useNativeDriver: true }),
            Animated.timing(translateY, { toValue: 0, duration: 180, useNativeDriver: true }),
        ]).start();

        const t = setTimeout(() => {
            Animated.parallel([
                Animated.timing(opacity, { toValue: 0, duration: 160, useNativeDriver: true }),
                Animated.timing(translateY, { toValue: -12, duration: 160, useNativeDriver: true }),
            ]).start(() => onDismiss?.());
        }, duration);

        return () => clearTimeout(t);
    }, [message, duration, onDismiss, opacity, translateY]);

    if (!message) return null;

    return (
        <Animated.View
            pointerEvents="none"
            style={[
                styles.container,
                { opacity, transform: [{ translateY }] },
            ]}
        >
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.select({ ios: 48, android: 40 }),
        alignSelf: 'center',
        maxWidth: width - 40,
        backgroundColor: 'rgba(0,0,0,0.85)',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 8,
        zIndex: 9999,
        elevation: 10, // Android
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    text: { color: '#fff', textAlign: 'center' },
});
