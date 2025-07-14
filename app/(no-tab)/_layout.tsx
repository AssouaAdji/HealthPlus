import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="notifications" options={{title:"Notifications",headerTitleAlign:"center"}} />
			<Stack.Screen name="profileUpdate" options={{title:"Update Profile",headerTitleAlign:"center"}} />
			<Stack.Screen name="service" options={{headerTitleAlign:"center"}} />
		</Stack>
	);
}
