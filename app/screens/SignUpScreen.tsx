import React from 'react';
import { useRouter } from 'expo-router';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import InputField from '../../components/InputField';
import Animated, {FadeInUp} from 'react-native-reanimated';

export default function SignUpScreen() {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = () => {
        console.log('Registered in successfully', email, username, password);
    }

    return (
        <View style={styles.wrapper}>
            <ImageBackground
                source={require('../../assets/images/login_bg.jpg')}
                style={styles.bg}
                resizeMode="cover"
            >
                <Animated.View entering={FadeInUp.delay(200).duration(1000)} style={styles.container}>
                    <Text style={styles.title}>Sign Up</Text>

                    <View style={styles.form}>
                        <InputField
                            placeholder="Email"
                            placeholderTextColor="#b0b0b0"
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                        <InputField
                            placeholder="Username"
                            placeholderTextColor="#b0b0b0"
                            onChangeText={(user) => setUsername(user)}
                            value={username}
                        />
                        <InputField
                            placeholder="Password"
                            placeholderTextColor="#b0b0b0"
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
                        <Text style={styles.primaryButtonText}>Sign up</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    bg: { flex: 1, height: '100%', width: '100%' },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    title: { fontSize: 36, color: '#fff', fontWeight: '700', marginBottom: 12 },

    /* form layout */
    form: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 8,
    },

    /* primary button */
    primaryButton: {
        backgroundColor: '#ff87d9',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '50%',
        alignItems: 'center',
        marginBottom: 12,
    },
    primaryButtonText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '700',
    },

    /* link-style button */
    linkButton: {
        paddingVertical: 8,
    },
    linkButtonText: {
        color: '#00000',
        fontSize: 14,
        fontFamily: 'Roboto',
    },
});
