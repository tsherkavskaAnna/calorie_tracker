import "./global.css";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./screens/LoginPage";
import Welcome from "./screens/Welcome";
import RegisterPage from "./screens/RegisterPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./screens/Home";
import UserPage from "./screens/UserPage";
import DashboardPage from "./screens/Dashboard";
import SettingsPage from "./screens/Settings";
import { Button } from "react-native";

export type RootStackParamList = {
	WelcomePage: undefined;
	LoginPage: undefined;
	RegisterPage: undefined;
};

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

const useRoute = (isAuth: boolean) => {
	if (!isAuth) {
		return (
			<AuthStack.Navigator initialRouteName="HomePage">
				<AuthStack.Screen
					name="Welcome"
					component={Welcome}
					options={{ headerShown: false }}
				/>
				<AuthStack.Screen
					name="RegisterPage"
					component={RegisterPage}
					options={{ headerShown: false }}
				/>
				<AuthStack.Screen
					name="LoginPage"
					component={LoginPage}
					options={{ headerShown: false }}
				/>
			</AuthStack.Navigator>
		);
	}
	return (
		<MainTab.Navigator>
			<MainTab.Screen name="Home" component={UserPage} />
			<MainTab.Screen name="Dashboard" component={DashboardPage} />
			<MainTab.Screen
				name="Settings"
				component={SettingsPage}
				options={{
					title: "Settings",
					headerTitleStyle: {
						fontFamily: "Poppins-Regular",
						fontWeight: "bold",
						fontSize: 20,
					},
					headerRight: () => (
						<Button
							onPress={() => alert("This is a button!")}
							title="+"
							color="black"
						/>
					),
				}}
			/>
		</MainTab.Navigator>
	);
};

export default function App() {
	const routing = useRoute(true);
	const [loaded, error] = useFonts({
		"Roboto-Regulat": require("./assets/fonts/Roboto-Regular.ttf"),
		"Raleway-Regular": require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
		"DMSans-Variable": require("./assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
		"DMSans-Italic": require("./assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf"),
		"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
		"SourceCodePro-Regular": require("./assets/fonts/SourceCodePro-VariableFont_wght.ttf"),
		"SourceCodePro-Bold": require("./assets/fonts/SourceCodePro-Bold.ttf"),
		"SourceCodePro-Black": require("./assets/fonts/SourceCodePro-Black.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return <NavigationContainer>{routing}</NavigationContainer>;
}
