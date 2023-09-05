import { View, ViewStyle } from "react-native";
import { Button, Card } from "react-native-paper";
import * as MailComposer from "expo-mail-composer";
import { Menu } from "@/types/concessionaire";

type Props = {
  item: Menu;
  email: string;
  style?: ViewStyle;
};

function CardItem({ item, email, style }: Props) {
  return (
    <Card
      contentStyle={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
      }}
      style={style}
    >
      <Card.Cover
        source={item.image}
        style={{ width: "45%", aspectRatio: 1 }}
      />
      <View style={{ flex: 1 }}>
        <Card.Title
          title={item.name}
          titleVariant="titleMedium"
          titleStyle={{ lineHeight: 20 }}
          titleNumberOfLines={5}
          subtitle={Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
          }).format(item.price)}
          subtitleVariant="bodySmall"
        />
        <Card.Actions>
          <Button
            onPress={async () =>
              await MailComposer.composeAsync({
                recipients: [email],
                subject: `Order for ${item.name}`,
                body: `I would like to order ${
                  item.name
                } for ${Intl.NumberFormat("en-PH", {
                  style: "currency",
                  currency: "PHP",
                }).format(item.price)}.`,
              })
            }
            style={{ flex: 1 }}
          >
            Order now
          </Button>
        </Card.Actions>
      </View>
    </Card>
  );
}

export default CardItem;
