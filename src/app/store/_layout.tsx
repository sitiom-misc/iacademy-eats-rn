import { Stack } from "expo-router";
import { Appbar } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

function Navbar({ navigation, back }: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="The pick for today!" />
    </Appbar.Header>
  );
}

export default function StoreLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => <Navbar {...props} />,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
