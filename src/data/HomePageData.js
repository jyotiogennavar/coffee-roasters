// data.js
import GranEspresso from "../assets/home/desktop/image-gran-espresso.png";
import Planalto from "../assets/home/desktop/image-planalto.png";
import Piccollo from "../assets/home/desktop/image-piccollo.png";
import Danche from "../assets/home/desktop/image-danche.png";

import IconCoffee from "../assets/home/desktop/icon-coffee-bean.svg";
import IconGift from "../assets/home/desktop/icon-gift.svg";
import IconTruck from "../assets/home/desktop/icon-truck.svg";



export const getCoffeeData = () => {
  return [
    {
      name: "Gran Espresso",
      description:
        "Light and flavorful blend with cocoa and black pepper for an intense experience",
      image: GranEspresso,
    },
    {
      name: "Planalto",
      description:
        "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
      image: Planalto,
    },
    {
      name: "Piccollo",
      description:
        "Mild and smooth blend featuring notes of toasted almond and dried cherry",
      image: Piccollo,
    },
    {
      name: "Danche",
      description:
        "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      image: Danche,
    },
  ];
};

export const getFeaturesData = () => {
  return [
    {
      key: 1,
      title: "Best quality",
      description:
        "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
      icon: IconCoffee,
    },
    {
      key: 2,
      title: "Exclusive benefits",
      description:
        "Special offers and swag when you subscribe, including 30% off your first shipment.",
      icon: IconGift,
    },
    {
      key: 3,
      title: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
      icon: IconTruck,
    },
  ];
};

export const getSubscriptionSteps = () => {
  return [
    {
      stepNumber: "01",
      title: "Pick your coffee",
      description: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
      stepNumber: "02",
      title: "Choose the frequency",
      description: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
      stepNumber: "03",
      title: "Receive and enjoy!",
      description: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    }
  ]
}
