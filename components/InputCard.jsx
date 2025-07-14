import { StyleSheet, Text, TextInput, View } from "react-native";

export const InputCard = ({ label = "Label", placeholder = "Placeholder" }) => {
	return (
		<View style={style.container}>
			<Text style={style.label}>{label}</Text>
			<TextInput placeholder={`Enter your ${label}`}  style={style.input}/>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		width: "90%",
		margin: "auto",
        marginTop:20
	},
    label:{
        fontSize:15,
        fontWeight:"500"
    },
    input:{
        backgroundColor:"#F2F7F2",
        borderRadius:50,
        marginTop:10,
        padding:10
    }
});
