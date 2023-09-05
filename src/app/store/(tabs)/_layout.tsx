import { Appbar, Button, Dialog, Portal, Text } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import { Tabs } from "expo-router/tabs";
import MaterialTabBar from "@/components/material-tab-bar";
import { useMaterial3ThemeContext } from "@/lib/Material3ThemeProvider";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { kitchenCity, potatoCorner, cbtl } from "@/data/concessionaires";

function Navbar({
  route,
  options,
  aboutDescription,
}: BottomTabHeaderProps & { aboutDescription?: string }) {
  const title = getHeaderTitle(options, route.name);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Icon icon="information" />
          <Dialog.Title style={styles.dialogTitle}>About</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium" style={styles.dialogContent}>
              {aboutDescription}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Appbar.Header elevated={true}>
        <Appbar.Content title={title} />
        {aboutDescription && (
          <Appbar.Action
            icon="information-outline"
            onPress={() => {
              setVisible(true);
            }}
          />
        )}
      </Appbar.Header>
    </>
  );
}

export default function StoreTabsLayout() {
  const { updateTheme } = useMaterial3ThemeContext();
  return (
    <Tabs
      screenOptions={{
        header: (props) => <Navbar {...props} />,
      }}
      tabBar={(props) => <MaterialTabBar {...props} />}
    >
      <Tabs.Screen
        name="kitchen-city"
        options={{
          headerTitle: "Kitchen City",
          tabBarLabel: "Kitchen City",
          header: (props) => (
            <Navbar {...props} aboutDescription={kitchenCity.description} />
          ),
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name={focused ? "food" : "food-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
        listeners={{
          tabPress: () => {
            updateTheme("#fbc02d");
          },
        }}
      />
      <Tabs.Screen
        name="potato-corner"
        options={{
          headerTitle: "Potato Corner",
          tabBarLabel: "Potato Corner",
          header: (props) => (
            <Navbar {...props} aboutDescription={potatoCorner.description} />
          ),
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name={focused ? "food-takeout-box" : "food-takeout-box-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
        listeners={{
          tabPress: () => {
            updateTheme("#388e3c");
          },
        }}
      />
      <Tabs.Screen
        name="cbtl"
        options={{
          headerTitle: "The Coffee Bean & Tea Leaf",
          tabBarLabel: "CBTL",
          header: (props) => (
            <Navbar {...props} aboutDescription={cbtl.description} />
          ),
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name={focused ? "coffee" : "coffee-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
        listeners={{
          tabPress: () => {
            updateTheme("#663399");
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "justify",
  },
});
