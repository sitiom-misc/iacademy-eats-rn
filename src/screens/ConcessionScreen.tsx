import { useAppTheme } from "@/lib/Material3ThemeProvider";
import { Concessionaire } from "@/types/concessionaire";
import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";
import { AnimatedFAB } from "react-native-paper";
import { router, usePathname } from "expo-router";
import CardItem from "@/components/card-item";

type Props = {
  data: Concessionaire;
};

export default function ConcessionScreen({ data }: Props) {
  const theme = useAppTheme();
  const [isExtended, setIsExtended] = useState(true);
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

          setIsExtended(currentScrollPosition <= 0);
        }}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={data.image}
          style={[styles.coverImage, { borderRadius: theme.roundness }]}
        />
        <View style={styles.itemList}>
          {data.menu.map((item) => (
            <CardItem key={item.id} item={item} email={data.email} />
          ))}
        </View>
      </ScrollView>

      <AnimatedFAB
        icon="dice-3"
        style={styles.fab}
        label="Feeling lucky?"
        onPress={() => {
          const randomItem =
            data.menu[Math.floor(Math.random() * data.menu.length)];
          router.push(`${pathname}/${randomItem.id}`);
        }}
        iconMode="static"
        extended={isExtended}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  scrollContainer: {
    paddingBottom: 56,
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
  itemList: {
    width: "100%",
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
