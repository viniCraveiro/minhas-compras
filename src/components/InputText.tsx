import { Text, TextInput, TextInputProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type InputType = "text" | "number" | "currency" | "email";

interface GenericInputProps extends TextInputProps {
    label?: string;
    value: string;
    onChangeValue: (value: string) => void;
    type?: InputType;
}

export default function InputText({
    label,
    value,
    onChangeValue,
    type = "text",
    ...rest
}: GenericInputProps) {

    const formatCurrency = (text: string) => {
        const numeric = text.replace(/\D/g, "");
        if (!numeric) return "";

        const float = (parseInt(numeric, 10) / 100).toFixed(2);

        return float
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const handleChange = (text: string) => {
        switch (type) {
            case "number":
                onChangeValue(text.replace(/\D/g, ""));
                break;

            case "currency":
                onChangeValue(formatCurrency(text));
                break;

            case "email":
                onChangeValue(text.trim());
                break;

            default:
                onChangeValue(text);
                break;
        }
    };

    const keyboardType =
        type === "number" || type === "currency"
            ? "numeric"
            : type === "email"
                ? "email-address"
                : "default";

    return (
        <SafeAreaView style={{ width: "100%", marginBottom: 16 }}>
            {label && (
                <Text style={{ marginBottom: 6, fontSize: 16, fontWeight: "600" }}>
                    {label}
                </Text>
            )}

            <TextInput
                {...rest}
                value={value}
                keyboardType={keyboardType}
                onChangeText={handleChange}
                style={{
                    padding: 12,
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    fontSize: 18,
                }}
            />
        </SafeAreaView>
    );
}
