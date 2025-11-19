import { View, Text } from "react-native";
import tw from "twrnc";
import { LineChart } from "react-native-chart-kit";

export default function ChartDashboardScreen() {
    const data = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
            { data: [4.5, 5.2, 4.9] }
        ],
    };

    return (
        <View style={tw`flex-1 bg-gray-100 p-6`}>
            <Text style={tw`text-2xl font-bold text-gray-800 mb-4`}>
                Price History
            </Text>

            <LineChart
                data={data}
                width={350}
                height={220}
                chartConfig={{
                    color: () => "#2563eb",
                    labelColor: () => "#1f2937",
                }}
            />
        </View>
    );
}
