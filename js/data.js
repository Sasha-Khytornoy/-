const user = {
  name: "Олександр",
  surname: "Хуторний",
  userPhoto: "olex.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "111.jpg", alt: "поїхати на бал" },
    { src: "ps5.jpg", alt: "консоль мрії" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  200,
  294,
  573,
  124,
  2850,
  900,
  1800,
  2100,
  2400,
  2794,
  1940,
  3300,
];

const necessaryExpenses = 567;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "html" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Покращити англійську мову" },
  { month: "Жовтень", skill: "Покращити математику" },
  { month: "Листопад", skill: "Наїстися чіпсів" },
  { month: "Грудень", skill: "Спробувати кальмара" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
