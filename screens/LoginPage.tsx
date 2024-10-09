import {
	View,
	Text,
	TextInput,
	ImageBackground,
	Image,
	Alert,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const windowDimensions = Dimensions.get("window");

const LoginPage = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
	const [dimensions, setDimensions] = useState(windowDimensions);

	const emailHandler = (text: string) => setEmail(text);
	const passwordHandler = (text: string) => setPassword(text);

	const onLogin = () => {
		Alert.alert("Credentials", `${email} + ${password}`);
		setIsShowKeyBoard(false);
	};

	useEffect(() => {
		const onChange = ({ window }: any) => {
			setDimensions(window);
		};
		const dimentionsHandler = Dimensions.addEventListener(
			"change",
			onChange
		);

		return () => {
			dimentionsHandler.remove();
		};
	}, []);

	const isLandscape = dimensions.width > dimensions.height;

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ImageBackground
				source={require("../assets/images/modern-healthy-life-composition.jpg")}
				className="flex-1 size-cover bg-neutral-200"
			>
				<View className="grid p-4 justify-start pt-20 gap-4">
					<View className="flex-row justify-start">
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							className="bg-amber-400 p-2 rounded-tr-2xl rounded-bl-2xl"
						>
							<AntDesign
								name="arrowleft"
								size={24}
								color="#9B05F2FF"
							/>
						</TouchableOpacity>
					</View>
					<KeyboardAvoidingView
						behavior={Platform.OS == "ios" ? "padding" : "height"}
					>
						<Text
							style={{
								paddingTop: 40,
								fontFamily: "Poppins-Bold",
								fontWeight: "100",
								fontSize: 32,
								color: "#9B05F2FF",
								textShadowColor: "#F8F6F6A9",
								textAlign: "center",
								textTransform: "uppercase",
								letterSpacing: -0.02,
								textShadowRadius: 1,
								marginBottom: 24,
								lineHeight: 40,
							}}
						>
							Controll your{" "}
							<Text className="underline color-green-600">
								calories{" "}
							</Text>
							with app!
						</Text>

						<TextInput
							placeholder="Email"
							className="border border-violet-600 px-4 py-4 bg-slate-50 rounded-lg color-slate-600 shadow-md shadow-slate-200 mb-4 focus:border-green-600"
							value={email}
							onFocus={() => setIsShowKeyBoard(true)}
							onChangeText={emailHandler}
						/>
						<TextInput
							placeholder="Password"
							secureTextEntry={true}
							className="border border-violet-600 px-4 py-4 bg-slate-50 rounded-lg color-slate-600 shadow-md shadow-slate-200 mb-4 focus:border-green-600"
							value={password}
							onFocus={() => setIsShowKeyBoard(true)}
							onChangeText={passwordHandler}
						/>

						<TouchableOpacity
							activeOpacity={0.8}
							onPress={onLogin}
							className="align-baseline items-center rounded-lg px-4 py-4 bg-violet-500 focus:bg-violet-600 mb-4 hover:bg-violet-600"
						>
							<Text className="color-white">Sign In</Text>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				</View>
				<Text
					className="text-center mb-6"
					style={{
						fontFamily: "Poppins-Semibold",
						fontWeight: "100",
					}}
				>
					OR
				</Text>
				<View className="flex-row justify-center gap-9">
					<TouchableOpacity className="bg-white rounded-xl p-2">
						<Image
							source={require("../assets/logo/social_15707749.png")}
							className="w-14 h-14"
						/>
					</TouchableOpacity>
					<TouchableOpacity className="bg-white rounded-xl p-2">
						<Image
							source={require("../assets/logo/logo_15465679.png")}
							className="w-14 h-14"
						/>
					</TouchableOpacity>
					<TouchableOpacity className="bg-white rounded-xl p-2">
						<Image
							source={require("../assets/logo/facebook_5968764.png")}
							className="w-14 h-14"
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};

export default LoginPage;
