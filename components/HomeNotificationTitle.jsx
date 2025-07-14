import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const HomeNotificationTitle = ({ count }) => {
	const router = useRouter();

	return (
		<TouchableOpacity
			style={style.icon}
			onPress={() => router.push("/(no-tab)/notifications")}
		>
            
			<Ionicons
				name="notifications-outline"
				color={Colors.light.primary}
				size={25}
			/>
            {count && <Text style={style.count}>{count}</Text>}
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	icon: {
		marginRight: 10,
	},
    count:{
        position:"absolute",
        top:-5,
        right:4,
        color:Colors.dark.text,
        fontWeight:"bold",
        backgroundColor:Colors.light.primary,
        width:18,
        height:18,
        borderRadius:15,
        textAlign:"center"
    }
});
