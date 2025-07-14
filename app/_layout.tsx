import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				statusBarStyle: "dark",
			}}
			initialRouteName="Intro"
		>
			<Stack.Screen name="Intro" options={{ headerShown: false }} />
			<Stack.Screen name="auth/Login" options={{ headerShown: false }} />
			<Stack.Screen name="auth/Register" options={{ headerShown: false }} />
			<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
			<Stack.Screen name="(no-tab)" options={{ headerShown: false }} />
		</Stack>
	);
}
