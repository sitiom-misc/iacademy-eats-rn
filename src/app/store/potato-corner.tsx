import ConcessionaireScreen from "@/screens/concessionaire";
import { Concessionaire } from "@/types/concessionaries";

export default function PotatoCornerScreen() {
  return <ConcessionaireScreen data={potatoCorner} />;
}

export const potatoCorner: Concessionaire = {
  name: "Potato Corner",
  image: require("@/assets/images/potato-corner/cover.jpg"),
  description:
    "Welcome to Potato Corner, home of the \"World's Best Flavored French Fries\" since 1992. Our unique take on the classic French fry is quite simple - flavor it so people will savor it. The end result, we took a snack traditionally seen as a side dish and made it a main attraction. That simple concept has seen our brand grow from just a small food cart in a Philippines night market to the international phenomenon that it is today. You can now enjoy Potato Corner's brand of flavored French fries just about anywhere in the world.",
  email: "potato.corner@gmail.com",
  menu: [
    {
      id: 1,
      name: "Barbeque",
      price: 120,
      image: require("@/assets/images/potato-corner/bbq.png"),
    },
    {
      id: 2,
      name: "Chili Barbeque",
      price: 120,
      image: require("@/assets/images/potato-corner/chili_bbq.png"),
    },
    {
      id: 3,
      name: "Cheese",
      price: 120,
      image: require("@/assets/images/potato-corner/cheese.png"),
    },
    {
      id: 4,
      name: "Sour Cream",
      price: 120,
      image: require("@/assets/images/potato-corner/cheese.png"),
    },
  ],
};
