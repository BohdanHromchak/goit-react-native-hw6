import { useFonts } from "expo-font";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./Screens/mainScreen/MapScreen";
import CommentsScreen from "./Screens/mainScreen/CommentsScreen";
import Home from "./Screens/mainScreen/Home";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const AuthStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <AuthStack.Screen
          name="Комментарии"
          component={CommentsScreen}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
        <AuthStack.Screen
          name="Карта"
          component={MapScreen}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
