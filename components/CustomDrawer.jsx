import { Drawer } from "expo-router/drawer";
import { Tabs } from "expo-router/tabs";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRef } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
	const router = useRouter();

	const menuItems = [
		{ label: "Accueil", icon: "home", route: "(tabs)/home" },
		{ label: "Profil", icon: "person", route: "(tabs)/profile" },
		{ label: "Paramètres", icon: "settings", route: "(tabs)/settings" },
		{ label: "Déconnexion", icon: "logout", route: "/login" },
	];

	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={styles.drawerContainer}
		>
			<View style={styles.drawerHeader}>
				<Image
					source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
					style={styles.avatar}
				/>
				<Text style={styles.username}>Jean Dupont</Text>
				<Text style={styles.email}>jean.dupont@example.com</Text>
			</View>

			{menuItems.map((item, index) => (
				<DrawerItem
					key={index}
					label={item.label}
					icon={({ color, size }) => (
						<MaterialIcons name={item.icon} size={size} color={color} />
					)}
					onPress={() => router.push(item.route)}
					style={styles.menuItem}
					labelStyle={styles.menuLabel}
				/>
			))}
		</DrawerContentScrollView>
	);
};

export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				drawerContent={(props) => <CustomDrawerContent {...props} />}
				screenOptions={{
					drawerType: "slide",
					drawerStyle: {
						width: "75%",
					},
					headerShown: false,
				}}
			>
				<Drawer.Screen
					name="(tabs)"
					options={{
						drawerLabel: "Menu Principal",
						title: "Menu Principal",
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}

// Fichier séparé: app/(tabs)/_layout.tsx
export function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#FF6B6B",
				tabBarInactiveTintColor: "gray",
				headerLeft: () => <DrawerToggleButton tintColor="#FF6B6B" />,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Accueil",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profil",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Paramètres",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="settings" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}

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
