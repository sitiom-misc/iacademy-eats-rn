import ConcessionaireScreen from "@/screens/concessionaire";
import { Concessionaire } from "@/types/concessionaries";

export default function KitchenCityScreen() {
  return <ConcessionaireScreen data={kitchenCity} />;
}

export const kitchenCity: Concessionaire = {
  name: "Kitchen City",
  image: require("@/assets/images/kitchen-city/cover.jpg"),
  description:
    "Discover Kitchen City, the Philippines' top food concessionaire with over 20 years of experience, from small canteens to prestigious venues. We're passionate food enthusiasts, dedicated to making each meal a joyous experience for you!",
  email: "contactus@kitchencity-inc.com",
  menu: [
    {
      id: 1,
      name: "Black Pepper Roast Chicken",
      price: 100,
      image: require("@/assets/images/kitchen-city/beef.png"),
    },
    {
      id: 2,
      name: "Beef Salpicao",
      price: 180,
      image: require("@/assets/images/kitchen-city/chicken.png"),
    },
    {
      id: 3,
      name: "Pork Adobo",
      price: 120,
      image: require("@/assets/images/kitchen-city/pork.png"),
    },
    {
      id: 4,
      name: "Crusted Parmesan Salmon with Lemon Butter",
      price: 200,
      image: require("@/assets/images/kitchen-city/salmon.png"),
    },
  ],
};
