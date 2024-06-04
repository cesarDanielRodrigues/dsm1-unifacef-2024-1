import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./src/login"



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Tela Inicial" component={TelaInicial} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
