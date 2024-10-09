import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

type WelcomePageNavigationProp = StackNavigationProp<
	RootStackParamList,
	"WelcomePage"
>;

type Props = {
	navigation: WelcomePageNavigationProp;
};

const WelcomePage = ({ navigation }: Props) => {
	return (
		<ImageBackground
			source={require("../assets/images/top-view-healthy-food-bowl-with-tomatoes.jpg")}
			className="flex-1 px-6 py-12 justify-between bg-neutral-200"
		>
			<View>
				<SafeAreaView>
					<View
						className="flex-col rounded-3xl py-8 px-2"
						style={{ backgroundColor: "#E0D4CD64" }}
					>
						<Text
							style={{
								fontFamily: "SourceCodePro-Black",
								fontSize: 65,
								lineHeight: 56,
								color: "#6a1b9a",
								textShadowColor: "#E8DAE6A1",
								textShadowOffset: { width: 2, height: 4 },
								textShadowRadius: 6,
								letterSpacing: 1,
								paddingBottom: 4,
								paddingVertical: 12,
							}}
						>
							Calorie
						</Text>

						<Text
							style={{
								paddingHorizontal: 20,
								transform: "translateX(70px)",
								fontSize: 60,
								fontFamily: "SourceCodePro-Black",
								color: "#ff4081",
								textShadowColor: "#E9DBE9FF",
								textShadowOffset: { width: 3, height: 5 },
								textShadowRadius: 8,
							}}
						>
							Tracker
						</Text>
					</View>
				</SafeAreaView>
			</View>
			<View>
				<TouchableOpacity
					className=" bg-green-700 p-6 rounded-2xl"
					activeOpacity={0.8}
				>
					<Text
						onPress={() => navigation.navigate("LoginPage")}
						style={{
							fontFamily: "DMSans-Variable",
							fontSize: 20,
							lineHeight: 28,
							textTransform: "uppercase",
							letterSpacing: -0.02,
							textShadowColor: "#F8F6F6A9",
							color: "white",
							textAlign: "center",
						}}
					>
						Get started
					</Text>
				</TouchableOpacity>
				<Text
					style={{
						padding: 6,
						fontFamily: "Poppins",
						fontSize: 18,
						lineHeight: 32,
						color: "#433067FF",
					}}
				>
					Don't have any account?{"  "}
					<Text
						onPress={() => navigation.navigate("RegisterPage")}
						style={{
							fontFamily: "Poppins",
							color: "#ff1685",
							fontSize: 18,
							lineHeight: 32,
							padding: 6,
							textDecorationLine: "underline",
						}}
					>
						Register
					</Text>
				</Text>
			</View>
		</ImageBackground>
	);
};

export default WelcomePage;
