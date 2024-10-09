import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function UserPage() {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={["#92ccdd", "#c7eff0", "#fdc4ec", "#f5d5fd", "#ffc2cb"]}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						fontFamily: "Raleway-Regular",
						fontSize: 36,
						textAlign: "center",
						color: "#9B05F2FF",
						textShadowOffset: { width: 3, height: 5 },
						textShadowRadius: 8,
					}}
				>
					Welcome User
				</Text>
			</LinearGradient>
		</View>
	);
}
