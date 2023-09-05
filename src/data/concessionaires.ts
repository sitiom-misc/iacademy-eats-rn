import { Concessionaire } from "@/types/concessionaire";

export const kitchenCity: Concessionaire = {
  name: "Kitchen City",
  slug: "kitchen-city",
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

export const potatoCorner: Concessionaire = {
  name: "Potato Corner",
  slug: "potato-corner",
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

export const cbtl: Concessionaire = {
  name: "The Coffee Bean & Tea Leaf",
  slug: "cbtl",
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

export default [kitchenCity, potatoCorner, cbtl];
