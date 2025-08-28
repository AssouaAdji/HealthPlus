import { HistoryCard } from "@/components/HistoryCard";
import { ScrollView } from "react-native";

const history = () => {
	return (
		<ScrollView>
			<HistoryCard title="You created an account on Health+" />
			<HistoryCard title="You make a Cancerlogy Test" />
			<HistoryCard title="You change your password" />
			<HistoryCard />
			<HistoryCard />
		</ScrollView>
	);
};

export default history;
