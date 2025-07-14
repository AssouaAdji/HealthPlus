import { HomeNotificationTitle } from "@/components/HomeNotificationTitle";
import { HomeTitle } from "@/components/HomeTitle";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
	Platform,
	StyleSheet,
	TouchableOpacity,
	useColorScheme,
} from "react-native";
const Tabs = createBottomTabNavigator();

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const router = useRouter();
	const [showDrawer, setShowDrawer] = useState(false);
	const toggleDrawerVisibility = () => {
		setShowDrawer(!showDrawer);
		console.log(showDrawer);
	};

	return (
		<>
			<Tabs.Navigator
				screenOptions={{
					tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
					headerLeft: () => (
						<TouchableOpacity
							style={style.menu}
							onPress={toggleDrawerVisibility}
						>
							<Ionicons name="menu" size={25} />
						</TouchableOpacity>
					),
					tabBarStyle: Platform.select({
						ios: {
							// Use a transparent background on iOS to show the blur effect
							position: "absolute",
						},
						default: {},
					}),
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						headerTitle: () => <HomeTitle />,
						headerTitleAlign: "center",
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="home" color={color} size={size} />
						),
						headerRight: () => {
							return <HomeNotificationTitle count={5} />;
						},
					}}
				/>
				<Tabs.Screen
					name="history"
					options={{
						title: "History",
						headerTitleAlign: "center",
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="time" color={color} size={size} />
						),
					}}
				/>
				<Tabs.Screen
					name="account"
					options={{
						title: "Account",
						headerTitleAlign: "center",
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="person" color={color} size={size} />
						),
						headerRight: () => {
							return (
								<TouchableOpacity
									style={style.icon}
									onPress={() => router.push("/(no-tab)/profileUpdate")}
								>
									<Ionicons
										name="pencil"
										color={Colors.light.primary}
										size={24}
									/>
								</TouchableOpacity>
							);
						},
					}}
				/>
			</Tabs.Navigator>
		</>
	);
}
const style = StyleSheet.create({
	menu: {
		marginLeft: 10,
	},
	icon: {
		marginRight: 10,
	},
});
