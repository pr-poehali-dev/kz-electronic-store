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
    id: "tablets",
    name: "Планшеты",
    icon: "Tablet",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600",
  },
  {
    id: "tvs",
    name: "Телевизоры",
    icon: "Tv",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",
  },
  {
    id: "audio",
    name: "Аудиотехника",
    icon: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: "wearables",
    name: "Умные часы",
    icon: "Watch",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
  },
  {
    id: "gaming",
    name: "Игровые консоли",
    icon: "Gamepad2",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600",
  },
  {
    id: "cameras",
    name: "Фототехника",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600",
  },
  {
    id: "accessories",
    name: "Аксессуары",
    icon: "Plug",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
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
    id: "p13",
    name: "Google Pixel 8 Pro",
    category: "smartphones",
    price: 459990,
    description:
      "Чип Google Tensor G3, экран Super Actua 6.7″, ИИ-обработка фото и 7 лет обновлений.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
    badge: "Новинка",
  },
  {
    id: "p14",
    name: "OnePlus 12 256GB",
    category: "smartphones",
    price: 389990,
    oldPrice: 429990,
    description:
      "Snapdragon 8 Gen 3, экран 6.82″ ProXDR, зарядка 100 Вт, камера Hasselblad.",
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800",
  },
  {
    id: "p15",
    name: "Honor Magic 6 Pro",
    category: "smartphones",
    price: 429990,
    description:
      "Камера 180 Мп, защита от падений, ИИ-помощник MagicOS 8.0 и аккумулятор 5600 мА·ч.",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
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
    id: "p16",
    name: "MacBook Pro 14 M3 Pro",
    category: "laptops",
    price: 1199990,
    description:
      "Дисплей Liquid Retina XDR, чип M3 Pro, 18 ГБ памяти, 22 часа работы. Для профессионалов.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    popular: true,
    badge: "Pro",
  },
  {
    id: "p17",
    name: "Dell XPS 15 OLED",
    category: "laptops",
    price: 949990,
    oldPrice: 1099990,
    description:
      "OLED-дисплей 3.5K, Intel Core i7, 32 ГБ ОЗУ, RTX 4050. Премиум для дизайнеров.",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",
  },
  {
    id: "p18",
    name: "HP Pavilion 15",
    category: "laptops",
    price: 289990,
    description:
      "Универсальный ноутбук с Intel Core i5, 16 ГБ ОЗУ, SSD 512 ГБ. Для дома и офиса.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800",
  },
  {
    id: "p19",
    name: "iPad Pro 11 M4",
    category: "tablets",
    price: 599990,
    description:
      "OLED-дисплей Tandem, чип Apple M4, поддержка Apple Pencil Pro и Magic Keyboard.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800",
    popular: true,
    badge: "Новинка",
  },
  {
    id: "p20",
    name: "iPad Air 11 M2",
    category: "tablets",
    price: 359990,
    oldPrice: 399990,
    description:
      "Экран 11″ Liquid Retina, Apple M2, 128 ГБ. Идеально для творчества и учёбы.",
    image: "https://images.unsplash.com/photo-1585770536735-27993a080586?w=800",
  },
  {
    id: "p21",
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "tablets",
    price: 549990,
    description:
      "AMOLED-дисплей 14.6″, Snapdragon 8 Gen 2, S Pen в комплекте, защита IP68.",
    image: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=800",
  },
  {
    id: "p22",
    name: "Xiaomi Pad 6 Pro",
    category: "tablets",
    price: 219990,
    oldPrice: 249990,
    description:
      "Экран 11″ 144 Гц, Snapdragon 8+ Gen 1, 8 ГБ ОЗУ. Доступный планшет премиум-класса.",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800",
    badge: "−12%",
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
    id: "p23",
    name: 'Samsung Neo QLED 8K 75"',
    category: "tvs",
    price: 1899990,
    description:
      "Mini LED-подсветка, разрешение 8K, ИИ-апскейлинг, частота 144 Гц для гейминга.",
    image: "https://images.unsplash.com/photo-1571415060716-baff5f717862?w=800",
    badge: "Premium",
  },
  {
    id: "p24",
    name: 'Xiaomi TV A2 43"',
    category: "tvs",
    price: 159990,
    oldPrice: 189990,
    description:
      "4K UHD телевизор с Android TV, Dolby Vision и Google Assistant. Доступный смарт-ТВ.",
    image: "https://images.unsplash.com/photo-1539786774582-0707055f1c0a?w=800",
  },
  {
    id: "p10",
    name: "AirPods Pro 2 USB-C",
    category: "audio",
    price: 139990,
    oldPrice: 159990,
    description:
      "Активное шумоподавление, адаптивный звук, режим прозрачности и до 6 часов работы.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800",
    popular: true,
    badge: "Хит",
  },
  {
    id: "p12",
    name: "Sony WH-1000XM5",
    category: "audio",
    price: 189990,
    oldPrice: 219990,
    description:
      "Беспроводные наушники с лучшим в классе шумоподавлением, 30 часов работы и Hi-Res Audio.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
    badge: "−14%",
  },
  {
    id: "p25",
    name: "Bose QuietComfort Ultra",
    category: "audio",
    price: 219990,
    description:
      "Иммерсивный звук, продвинутое шумоподавление, до 24 часов работы и кристальная связь.",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800",
    popular: true,
  },
  {
    id: "p26",
    name: "JBL Charge 5",
    category: "audio",
    price: 79990,
    oldPrice: 94990,
    description:
      "Портативная Bluetooth-колонка с защитой IP67, 20 часов работы и пауэрбанком.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
  },
  {
    id: "p27",
    name: "Marshall Stanmore III",
    category: "audio",
    price: 239990,
    description:
      "Культовая колонка в винтажном стиле с насыщенным звуком, Bluetooth 5.2 и AUX.",
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=800",
  },
  {
    id: "p28",
    name: "Samsung Galaxy Buds 3 Pro",
    category: "audio",
    price: 109990,
    description:
      "Hi-Fi звук 24 бит, ИИ-перевод в реальном времени, активное шумоподавление.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
  },
  {
    id: "p11",
    name: "Apple Watch Series 9 45mm",
    category: "wearables",
    price: 219990,
    description:
      "Чип S9, дисплей до 2000 нит, жест Double Tap, датчики здоровья и ECG.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    popular: true,
  },
  {
    id: "p29",
    name: "Apple Watch Ultra 2",
    category: "wearables",
    price: 389990,
    description:
      "Титановый корпус 49 мм, 36 часов автономности, кнопка действия, для экстремальных приключений.",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800",
    badge: "Pro",
  },
  {
    id: "p30",
    name: "Samsung Galaxy Watch 7",
    category: "wearables",
    price: 169990,
    oldPrice: 189990,
    description:
      "Sapphire Crystal, ИИ Galaxy AI, расширенный мониторинг сна и фитнес-функции.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
  },
  {
    id: "p31",
    name: "Garmin Fenix 7 Sapphire",
    category: "wearables",
    price: 449990,
    description:
      "Часы для атлетов: солнечная зарядка, GPS, карты, мониторинг здоровья 24/7.",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800",
  },
  {
    id: "p32",
    name: "Xiaomi Smart Band 8 Pro",
    category: "wearables",
    price: 39990,
    oldPrice: 49990,
    description:
      "AMOLED 1.74″, GPS, 14 дней работы, 150+ спортивных режимов. Доступный фитнес-трекер.",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800",
    badge: "−20%",
  },
  {
    id: "p33",
    name: "PlayStation 5 Slim",
    category: "gaming",
    price: 269990,
    description:
      "Обновлённая консоль с дисководом, 1 ТБ SSD, поддержка 4K 120 Гц и DualSense.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800",
    popular: true,
    badge: "Хит",
  },
  {
    id: "p34",
    name: "Xbox Series X 1TB",
    category: "gaming",
    price: 259990,
    description:
      "Самая мощная Xbox: 4K 120 кадров, Quick Resume, Game Pass и тысячи игр.",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800",
  },
  {
    id: "p35",
    name: "Nintendo Switch OLED",
    category: "gaming",
    price: 169990,
    oldPrice: 189990,
    description:
      "7-дюймовый OLED-экран, улучшенный звук, 64 ГБ памяти. Идеально для семейных игр.",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800",
  },
  {
    id: "p36",
    name: "Steam Deck OLED 512GB",
    category: "gaming",
    price: 329990,
    description:
      "Портативный ПК для геймеров: HDR OLED-дисплей 7.4″, 90 Гц, AMD APU.",
    image: "https://images.unsplash.com/photo-1640955014216-75201056c829?w=800",
    badge: "Новинка",
  },
  {
    id: "p37",
    name: "Meta Quest 3 128GB",
    category: "gaming",
    price: 299990,
    description:
      "VR-гарнитура нового поколения: смешанная реальность, Snapdragon XR2 Gen 2, 4K-дисплеи.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800",
  },
  {
    id: "p38",
    name: "Sony Alpha A7 IV",
    category: "cameras",
    price: 1199990,
    description:
      "Полнокадровая беззеркалка 33 Мп, видео 4K 60p, 759 точек автофокуса. Для профи.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
    popular: true,
    badge: "Pro",
  },
  {
    id: "p39",
    name: "Canon EOS R6 Mark II",
    category: "cameras",
    price: 1099990,
    oldPrice: 1249990,
    description:
      "24.2 Мп, 40 кадров/с, 6K RAW видео, Dual Pixel CMOS AF II. Универсал для фото и видео.",
    image: "https://images.unsplash.com/photo-1606980564123-7c0bd4f7f1d8?w=800",
  },
  {
    id: "p40",
    name: "Fujifilm X-T5",
    category: "cameras",
    price: 749990,
    description:
      "40 Мп APS-C, ретро-дизайн, 19 имитаций плёнки, 6.2K видео. Любимец стрит-фотографов.",
    image: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=800",
  },
  {
    id: "p41",
    name: "DJI Mini 4 Pro",
    category: "cameras",
    price: 449990,
    description:
      "Компактный дрон до 249 г, 4K HDR видео, всенаправленное обнаружение препятствий.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
    badge: "Новинка",
  },
  {
    id: "p42",
    name: "GoPro HERO 12 Black",
    category: "cameras",
    price: 219990,
    oldPrice: 259990,
    description:
      "5.3K видео, HyperSmooth 6.0, водозащита 10 м, до 70 минут записи в 5.3K30.",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800",
  },
  {
    id: "p43",
    name: "Anker MagGo PowerBank 10K",
    category: "accessories",
    price: 39990,
    description:
      "MagSafe-совместимый пауэрбанк 10000 мА·ч, быстрая зарядка 15 Вт и подставка.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800",
  },
  {
    id: "p44",
    name: "Logitech MX Master 3S",
    category: "accessories",
    price: 49990,
    oldPrice: 59990,
    description:
      "Беспроводная мышь с тихими кликами, сенсором 8000 dpi и переключением между 3 устройствами.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
    popular: true,
  },
  {
    id: "p45",
    name: "Keychron K8 Pro",
    category: "accessories",
    price: 64990,
    description:
      "Беспроводная механическая клавиатура, hot-swap переключатели, RGB и QMK/VIA поддержка.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
  },
  {
    id: "p46",
    name: "Apple Magic Keyboard",
    category: "accessories",
    price: 49990,
    description:
      "Тихие ножничные переключатели, Touch ID, USB-C зарядка и до месяца автономности.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
  },
  {
    id: "p47",
    name: "Samsung T7 Shield 1TB",
    category: "accessories",
    price: 49990,
    oldPrice: 59990,
    description:
      "Прочный портативный SSD: до 1050 МБ/с, защита от падений, IP65 пыле- и водозащита.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800",
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
