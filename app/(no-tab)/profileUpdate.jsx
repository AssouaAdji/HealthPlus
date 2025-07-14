import { InputCard } from "@/components/InputCard";
import { Colors } from "@/constants/Colors";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";

export default function profileUpdate() {
	return (
		<SafeAreaView edges={["bottom"]}>
			<KeyboardAvoidingView behavior="padding">
                <View style={style.container}>
				<View>
					<InputCard label="Username" />
					<InputCard label="Email Address" />
					<InputCard label="Location" />
					<InputCard label="Birth Date" />
				</View>
				<View>
					<Button label="Save" />
				</View>
			</View>
            </KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	container: {
		backgroundColor: Colors.light.background,
		height: "100%",
		flexDirection: "column",
		justifyContent: "space-between",
	},
});
