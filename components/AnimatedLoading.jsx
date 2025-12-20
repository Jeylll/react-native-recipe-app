// components/AnimatedLoading.jsx
import { View, Text, Image } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence
} from "react-native-reanimated";

const AnimatedLoading = () => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    scale.value = withRepeat(
        withSequence(
            withTiming(1.1, { duration: 800 }),
            withTiming(1, { duration: 800 })
        ),
        -1, // Infinite repeats
        true
    );

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            opacity: opacity.value
        };
    });

    return (
        <View className="flex-1 bg-[#f7f6d3] justify-center items-center">
            <Animated.View style={animatedStyle} className="items-center">
                <Image
                    source={require('@/assets/images/logo.png')}
                    className="w-32 h-32"
                    resizeMode="contain"
                />
                <Text className="text-2xl font-bold text-gray-800 mt-4">
                    Recipe Finder
                </Text>
            </Animated.View>

            <View className="mt-8">
                <Text className="text-gray-600 text-center">
                    Preparing your culinary journey...
                </Text>
            </View>

            {/* Loading dots animation */}
            <View className="flex-row mt-6">
                {[0, 1, 2].map((i) => (
                    <Animated.View
                        key={i}
                        className="w-3 h-3 bg-blue-500 rounded-full mx-1"
                        style={{
                            opacity: withRepeat(
                                withSequence(
                                    withTiming(0.3, { duration: 500 }),
                                    withTiming(1, { duration: 500 })
                                ),
                                -1,
                                false
                            )
                        }}
                    />
                ))}
            </View>
        </View>
    );
};

export default AnimatedLoading;