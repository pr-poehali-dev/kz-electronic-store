export type Category = {
  id: string;
  name: string;
  icon: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  popular?: boolean;
  badge?: string;
};

export const categories: Category[] = [
  {
    id: "smartphones",
    name: "Смартфоны",
    icon: "Smartphone",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
  },
  {
    id: "laptops",
    name: "Ноутбуки",
    icon: "Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    id: "tvs",
    name: "Телевизоры",
    icon: "Tv",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",
  },
  {
    id: "accessories",
    name: "Аксессуары",
    icon: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "iPhone 15 Pro 256GB",
    category: "smartphones",
    price: 649990,
    oldPrice: 729990,
    description:
      "Титановый корпус, чип A17 Pro, профессиональная камера 48 Мп с 3-кратным зумом и поддержкой ProRAW.",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800",
    popular: true,
    badge: "Хит",
  },
  {
    id: "p2",
    name: "Samsung Galaxy S24 Ultra",
    category: "smartphones",
    price: 599990,
    description:
      "Флагман с экраном 6.8″ Dynamic AMOLED 2X, S Pen, ИИ-функциями Galaxy AI и камерой 200 Мп.",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
    popular: true,
    badge: "−10%",
  },
  {
    id: "p3",
    name: "Xiaomi Redmi Note 13 Pro",
    category: "smartphones",
    price: 149990,
    oldPrice: 169990,
    description:
      "Дисплей 120 Гц AMOLED, камера 200 Мп, быстрая зарядка 67 Вт. Лучшее соотношение цена/качество.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  },
  {
    id: "p4",
    name: "MacBook Air 13 M3",
    category: "laptops",
    price: 729990,
    description:
      "Чип Apple M3, 8 ядер CPU, 16 ГБ объединённой памяти, дисплей Liquid Retina и до 18 часов работы.",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800",
    popular: true,
    badge: "Новинка",
  },
  {
    id: "p5",
    name: "ASUS ROG Strix G16",
    category: "laptops",
    price: 849990,
    oldPrice: 949990,
    description:
      "Игровой ноутбук с Intel Core i7-13650HX, RTX 4060, экраном 16″ 165 Гц и продвинутой системой охлаждения.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
    badge: "−10%",
  },
  {
    id: "p6",
    name: "Lenovo IdeaPad Slim 5",
    category: "laptops",
    price: 359990,
    description:
      "Тонкий и лёгкий ноутбук с AMD Ryzen 7, 16 ГБ ОЗУ, SSD 512 ГБ. Идеален для работы и учёбы.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
  },
  {
    id: "p7",
    name: 'LG OLED C3 55"',
    category: "tvs",
    price: 899990,
    oldPrice: 1099990,
    description:
      "OLED-телевизор с процессором α9 Gen6, поддержкой Dolby Vision IQ, 120 Гц и webOS 23.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    popular: true,
    badge: "−18%",
  },
  {
    id: "p8",
    name: 'Samsung QLED Q70C 65"',
    category: "tvs",
    price: 649990,
    description:
      "4K QLED телевизор с Quantum HDR, игровым режимом Motion Xcelerator и Smart Hub.",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800",
  },
  {
    id: "p9",
    name: "Sony Bravia X90L 55″",
    category: "tvs",
    price: 549990,
    description:
      "Full Array LED, процессор Cognitive XR, 120 Гц, идеально для PlayStation 5.",
    image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=800",
  },
  {
    id: "p10",
    name: "AirPods Pro 2 USB-C",
    category: "accessories",
    price: 139990,
    oldPrice: 159990,
    description:
      "Активное шумоподавление, адаптивный звук, режим прозрачности и до 6 часов работы.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800",
    popular: true,
    badge: "Хит",
  },
  {
    id: "p11",
    name: "Apple Watch Series 9 45mm",
    category: "accessories",
    price: 219990,
    description:
      "Чип S9, дисплей до 2000 нит, жест Double Tap, датчики здоровья и ECG.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
  },
  {
    id: "p12",
    name: "Sony WH-1000XM5",
    category: "accessories",
    price: 189990,
    oldPrice: 219990,
    description:
      "Беспроводные наушники с лучшим в классе шумоподавлением, 30 часов работы и Hi-Res Audio.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
    badge: "−14%",
  },
];

export const formatPrice = (price: number): string => {
  return price.toLocaleString("ru-RU") + " ₸";
};

export const kazakhstanCities = [
  "Алматы",
  "Астана",
  "Шымкент",
  "Караганда",
  "Актобе",
  "Тараз",
  "Павлодар",
  "Усть-Каменогорск",
  "Семей",
  "Атырау",
  "Костанай",
  "Кызылорда",
  "Уральск",
  "Петропавловск",
  "Актау",
  "Темиртау",
  "Туркестан",
];
