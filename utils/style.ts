export const getTypeBadgeStyle = (type: string) => {
  let backgroundColor;

  switch (type) {
    case 'shopping':
      backgroundColor = '#FF4500'; // Bright orange-red
      break;
    case 'restaurant':
      backgroundColor = '#8A2BE2'; // Vivid purple
      break;
    case 'bistro':
      backgroundColor = '#D2691E'; // Chocolate brown
      break;
    case 'market':
      backgroundColor = '#1E90FF'; // Dodger blue
      break;
    case 'landmark':
      backgroundColor = '#32CD32'; // Vibrant green
      break;
    default:
      backgroundColor = '#2F2F2F'; // Suave black
      break;
  }

  return {
    backgroundColor,
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: 'bold',
  };
};

export const getTypeIcon = (type: string) => {
  console.log(type, 'THE TYPE');
  switch (type) {
    case 'shopping':
      return 'cart-shopping'; // 🛍️
    case 'restaurant':
      return 'utensils'; // 🍽️
    case 'bistro':
      return 'wine-glass'; // 🍷
    case 'market':
      return 'store'; // 🏪
    case 'landmark':
      return 'landmark'; // 🏛️
    default:
      return 'location'; // 📍
  }
};
