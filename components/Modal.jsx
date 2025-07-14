import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export const Modale = ({ isVisible, close, title, content, btns }) => {
	return (
		<View style={styles.container}>
			<Modal
				isVisible={isVisible}
				onBackdropPress={() => close()}
				backdropOpacity={0.5}
				animationIn="fadeIn"
				animationOut="fadeOut"
				style={styles.modal}
			>
				<View style={styles.modalContent}>
					<Text style={styles.modalTitle}>{title}</Text>
					<Text>Close</Text>

					<TouchableOpacity style={styles.closeButton} onPress={() => close()}>
						<Text style={styles.closeButtonText}>Fermer</Text>
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
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
	modalContent: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 25,
		width: "100%",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 15,
	},
	closeButton: {
		marginTop: 20,
		padding: 10,
		backgroundColor: "#2196F3",
		borderRadius: 5,
		alignItems: "center",
		width: "100%",
	},
	closeButtonText: {
		color: "white",
		fontWeight: "bold",
	},
});
