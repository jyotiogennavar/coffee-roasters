export const PlanHeroContent = () => {
  return {
    title: "Create a plan",
    content: `Build a subscription plan that best fits your needs. We offer an assortment of the best 
    artisan coffees from around the globe delivered fresh to your door.`,
  };
};

export const PlanContent = () => {
  return [
    {
      num: "01",
      title: "Pick your coffee",
      content: `Select from our evolving range of artisan coffees. Our beans are ethically
sourced and we pay fair prices for them. There's new coffees in all profiles
every month for you to try out.`,
    },
    {
      num: "02",
      title: "Choose the frequency",
      content: `Customize your order frequency, quantity, even your roast style and grind type.
Pause, skip or cancel your subscription with no commitment through our online portal.`,
    },
    {
      num: "03",
      title: "Receive and enjoy!",
      content: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
world-class coffees curated to provide a distinct tasting experience.`,
    },
  ];
};

export const CoffeePreferences = () => {
  return {
    drinkType: {
      question: 'How do you drink your coffee?',
      options: [
        {
          type: 'Capsule',
          description: 'Compatible with Nespresso systems and similar brewers',
        },
        {
          type: 'Filter',
          description: 'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        {
          type: 'Espresso',
          description: 'Dense and finely ground beans for an intense, flavorful experience',
        },
      ],
    },
    coffeeType: {
      question: 'What type of coffee?',
      options: [
        {
          type: 'Single origin',
          description: 'Distinct, high quality coffee from a specific family-owned farm',
        },
        {
          type: 'Decaf',
          description: 'Just like regular coffee, except the caffeine has been removed',
        },
        {
          type: 'Blended',
          description: 'Combination of two or three dark roasted beans of organic coffees',
        },
      ],
    },
    quantity: {
      question: 'How much would you like?',
      options: [
        {
          amount: '250g',
          description: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        {
          amount: '500g',
          description: 'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        {
          amount: '1000g',
          description: 'Perfect for offices and events. Yields about 90 delightful cups.',
        },
      ],
    },
    grindType: {
      question: 'Want us to grind them?',
      options: [
        {
          type: 'Wholebean',
          description: 'Best choice if you cherish the full sensory experience',
        },
        {
          type: 'Filter',
          description: 'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        {
          type: 'Cafetiére',
          description: 'Course ground beans specially suited for french press coffee',
        },
      ],
    },
    deliveryFrequency: {
      question: 'How often should we deliver?',
      options: [
        {
          frequency: 'Every week',
          cost: '$14.00 per shipment. Includes free first-class shipping.',
        },
        {
          frequency: 'Every 2 weeks',
          cost: '$17.25 per shipment. Includes free priority shipping.',
        },
        {
          frequency: 'Every month',
          cost: '$22.50 per shipment. Includes free priority shipping.',
        },
      ],
    },
  };
};
