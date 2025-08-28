// import CustomDrawerContent from "@/components/CustomDrawer";
import { Stack } from "expo-router"; // Import Stack
import { StyleSheet } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
	return (
		// <GestureHandlerRootView style={{ flex: 1 }}>
		<Stack screenOptions={{ headerShown: false }}>
			{/* Use Stack as the root navigator */}
			<Stack.Screen
				name="Intro" // Name of the Intro screen
				options={{
					headerShown: false, // Hide header for Intro screen
				}}
			/>
			<Stack.Screen
				name="auth/Login" // Name of the Login screen
				options={{
					headerShown: false, // Hide header for Login screen
				}}
			/>
			<Stack.Screen
				name="(tabs)" // This will be the main app content (tabs and drawer)
				options={{
					headerShown: false, // Hide header for the main app content
				}}
			/>
			<Stack.Screen
				name="(no-tab)" // This will be the main app content (tabs and drawer)
				options={{
					headerShown: false, // Hide header for the main app content
				}}
			/>
		</Stack>
		// </GestureHandlerRootView>
	);
}

// Fichier séparé: app/(tabs)/_layout.tsx
// export function TabsLayout() {
// 	return (
// 		<Tabs
// 			screenOptions={{
// 				tabBarActiveTintColor: "#FF6B6B",
// 				tabBarInactiveTintColor: "gray",
// 				headerLeft: () => <DrawerToggleButton tintColor="#FF6B6B" />,
// 			}}
// 		>
// 			<Tabs.Screen
// 				name="home"
// 				options={{
// 					title: "Accueil",
// 					tabBarIcon: ({ color, size }) => (
// 						<Ionicons name="home" size={size} color={color} />
// 					),
// 				}}
// 			/>
// 			<Tabs.Screen
// 				name="profile"
// 				options={{
// 					title: "Profil",
// 					tabBarIcon: ({ color, size }) => (
// 						<Ionicons name="person" size={size} color={color} />
// 					),
// 				}}
// 			/>
// 			<Tabs.Screen
// 				name="settings"
// 				options={{
// 					title: "Paramètres",
// 					tabBarIcon: ({ color, size }) => (
// 						<Ionicons name="settings" size={size} color={color} />
// 					),
// 				}}
// 			/>
// 		</Tabs>
// 	);
// }

const styles = StyleSheet.create({
	drawerContainer: {
		flex: 1,
		backgroundColor: "#FFF",
	},
	drawerHeader: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#EEE",
		alignItems: "center",
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginBottom: 10,
	},
	username: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
	},
	email: {
		fontSize: 14,
		color: "#777",
	},
	menuItem: {
		marginVertical: 5,
	},
	menuLabel: {
		fontSize: 16,
		marginLeft: -15,
	},
});
