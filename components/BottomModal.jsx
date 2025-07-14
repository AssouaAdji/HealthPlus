import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export const BottomModal = ({ isVisible, close, title, btns }) => {
	return (
		<View style={styles.container}>
			{/* Modal component from react-native-modal */}
			<Modal
				isVisible={isVisible}
				onBackdropPress={() => close()}
				swipeDirection="down"
				onSwipeComplete={() => close()}
				style={styles.modal}
			>
				<View style={styles.modalContent}>
					<View style={styles.dragHandle} />
					<Text style={styles.modalTitle}>{title}</Text>

					{btns.map((btn, index) => (
						<TouchableOpacity style={styles.option} key={index} onPress={btn.onPress}>
							<View style={styles.iconOption}>
								<Ionicons name={btn.icon} size={24} color={btn.color} />
								<Text> {btn.text}</Text>
							</View>
							<Ionicons name="chevron-forward" size={24} />
						</TouchableOpacity>
					))}
					<TouchableOpacity style={styles.closeButton} onPress={() => close()}>
						<Text style={styles.closeButtonText}>Close</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		padding: 15,
		backgroundColor: "#ddd",
		borderRadius: 5,
	},
	modal: {
		justifyContent: "flex-end",
		margin: 0,
	},
	modalContent: {
		backgroundColor: "white",
		padding: 22,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	dragHandle: {
		width: 40,
		height: 5,
		backgroundColor: "#ccc",
		borderRadius: 3,
		alignSelf: "center",
		marginBottom: 15,
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 15,
	},
	closeButton: {
		marginTop: 20,
		padding: 10,
		backgroundColor: Colors.light.primary,
		borderRadius: 5,
		alignItems: "center",
	},
	closeButtonText: {
		color: "white",
		fontWeight: "bold",
	},
	option: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: Colors.light.accent,
		padding: 10,
		borderRadius: 50,
		marginBottom: 10,
	},
	iconOption: {
		flexDirection: "row",
		alignItems: "center",
	},
});
