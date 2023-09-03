import ConcessionaireScreen from "@/screens/concessionaire";
import { Concessionaire } from "@/types/concessionaries";

export default function CbtlScreen() {
  return <ConcessionaireScreen data={cbtl} />;
}

export const cbtl: Concessionaire = {
  name: "The Coffee Bean & Tea Leaf",
  image: require("@/assets/images/cbtl/cover.jpg"),
  description:
    "Welcome to The Coffee Bean & Tea Leaf, where passion meets tradition in every cup. Since 1963, we have committed ourselves to curating the finest handcrafted products, taking pride in our journey from seed to cup. Our philosophy, untouched by time, prioritizes delivering you the best possible experience with every sip of coffee or tea. We invite you to join us in our voyage of flavor and discovery, as we continue our legacy of bringing you the perfect blend of quality, craftsmanship, and taste.",
  email: "contact@coffeebean.com",
  menu: [
    {
      id: 1,
      name: "Espresso",
      price: 100,
      image: require("@/assets/images/cbtl/coffee.png"),
    },
    {
      id: 2,
      name: "Double Chocolate Chip",
      price: 150,
      image: require("@/assets/images/cbtl/ice_blend.png"),
    },
    {
      id: 3,
      name: "Lemon Chamomile",
      price: 120,
      image: require("@/assets/images/cbtl/tea.png"),
    },
    {
      id: 4,
      name: "Lightened Iced Vanilla Latte",
      price: 225,
      image: require("@/assets/images/cbtl/livl.jpg"),
    },
  ],
};
