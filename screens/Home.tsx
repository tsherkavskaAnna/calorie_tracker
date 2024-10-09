import { View, Text, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserPage from "./UserPage";
import DashboardPage from "./Dashboard";
import SettingsPage from "./Settings";

const HomePage = () => {
	return (
		<View>
			<Text>Home page! </Text>
		</View>
	);
};

export default HomePage;
