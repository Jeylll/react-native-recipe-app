import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import {useUser} from "@/hooks/useUser";

export default function AuthLayout() {

    const { user } = useUser()
    console.log(user);

    return (
        <>
            <StatusBar barStyle="light-content" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: 'transparent' },
                    animation: 'fade',
                }}
            />
        </>
    );
}