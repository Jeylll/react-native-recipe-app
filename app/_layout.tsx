import { Stack } from "expo-router";
import './globals.css';
import {UserProvider} from "@/contexts/UserContext";

export default function RootLayout() {
  return (
    <UserProvider>
        <Stack>
          <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
          />

          <Stack.Screen
              name="recipes/[id]"
              options={{ headerShown: false }}
          />
      </Stack>
    </UserProvider>
  )
}
