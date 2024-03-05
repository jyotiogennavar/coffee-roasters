import IconUK from "../assets/about/desktop/illustration-uk.svg"
import IconAus from "../assets/about/desktop/illustration-australia.svg"
import IconCan from "../assets/about/desktop/illustration-canada.svg"

export const getCoffeeInfo = () => {
  return {
    aboutUs: {
      title: "About us",
      content: `Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.`,
    },
    commitment: {
      title: "Our commitment",
      content: `We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.`,
    },
    quality: {
      title: "Uncompromising quality",
      content: `Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.`,
    },
  };
};



export const contactInformation = () => {
  return [
    {
      icon: IconUK,
      country: "United Kingdom",
      address: "68 Asfordby Rd, Alcaston, SY6 1YA",
      phone: "+44 1241 918425",
    },
    {
      icon: IconCan,
      country: "Canada",
      address: "1528 Eglinton Avenue, Toronto, Ontario M4P 1A6",
      phone: "+1 416 485 2997",
    },
    {
      icon: IconAus,
      country: "Australia",
      address: "36 Swanston Street, Kewell, Victoria",
      phone: "+61 4 9928 3629",
    },
  ];
};
