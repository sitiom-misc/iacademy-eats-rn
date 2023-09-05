import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import Conessionaires from "@/data/concessionaires";
import CardItem from "@/components/card-item";

export default function IdScreen() {
  const { store: storeSlug, id } = useLocalSearchParams<{
    store: string;
    id: string;
  }>();
  const concessionaire = Conessionaires.find((item) => item.slug === storeSlug);
  const item = concessionaire?.menu.find(
    (item) => item.id === parseInt(id ?? "-1")
  );
  return (
    <View style={styles.container}>
      {concessionaire && item && (
        <CardItem
          item={item}
          email={concessionaire?.email}
          style={{ width: "100%", height: 170 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
