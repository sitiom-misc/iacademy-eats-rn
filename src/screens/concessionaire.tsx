import { useAppTheme } from "@/lib/Material3ThemeProvider";
import { Concessionaire } from "@/types/concessionaries";
import { View, StyleSheet, ToastAndroid, Image } from "react-native";
import { FAB } from "react-native-paper";

type Props = {
  data: Concessionaire;
};

export default function ConcessionaireScreen({ data }: Props) {
  const theme = useAppTheme();
  return (
    <View style={styles.container}>
      <Image
        source={data.image}
        style={[styles.coverImage, { borderRadius: theme.roundness }]}
      />
      <FAB
        icon="dice-3"
        style={styles.fab}
        onPress={() => ToastAndroid.show("Feeling lucky?", ToastAndroid.SHORT)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  coverImage: {
    height: 200,
    width: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
