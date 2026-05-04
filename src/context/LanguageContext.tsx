import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "ru" | "kz" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  ru: {
    "nav.home": "Главная",
    "nav.catalog": "Каталог",
    "nav.about": "О магазине",
    "nav.contacts": "Контакты",
    "header.search": "Поиск товаров...",
    "header.cart": "Корзина",
    "header.delivery": "Доставка по всему Казахстану",
    "header.hours": "Пн–Вс 9:00–22:00",
    "hero.badge": "Чёрная пятница в TECH.KZ",
    "hero.title1": "Электроника",
    "hero.title2": "со скидкой до 40%",
    "hero.text": "Тысячи товаров от мировых брендов. Гарантия, доставка по всему Казахстану и рассрочка 0-0-12.",
    "hero.cta1": "Перейти в каталог",
    "hero.cta2": "О магазине",
    "hero.priceLabel": "Цена дня",
    "promo.installment": "Рассрочка 0-0-12",
    "promo.installmentDesc": "Без переплат на технику",
    "promo.delivery": "Бесплатная доставка",
    "promo.deliveryDesc": "При заказе от 50 000 ₸",
    "promo.tradeIn": "Trade-In",
    "promo.tradeInDesc": "Сдай старый — получи скидку",
    "promo.more": "Подробнее",
    "promo.buy": "Купить",
    "promo.evaluate": "Оценить",
    "section.categories": "Категории",
    "section.allProducts": "Все товары",
    "section.popular": "Популярные товары",
    "section.popularSub": "Самые желанные модели в этом сезоне",
    "section.viewAll": "Смотреть все",
    "section.benefits.fast": "Быстрая доставка",
    "section.benefits.fastDesc": "По всему Казахстану за 1–3 дня",
    "section.benefits.warranty": "Гарантия 2 года",
    "section.benefits.warrantyDesc": "Официальная на всю технику",
    "section.benefits.payment": "Удобная оплата",
    "section.benefits.paymentDesc": "Картой, наличными, рассрочка",
    "section.benefits.support": "Поддержка 24/7",
    "section.benefits.supportDesc": "Всегда на связи с клиентом",
    "products.label": "товаров",
    "card.addToCart": "В корзину",
    "card.added": "Добавлено в корзину",
    "catalog.title": "Каталог товаров",
    "catalog.sort": "Сортировка:",
    "catalog.sortPopular": "Популярные",
    "catalog.sortPriceAsc": "Сначала дешёвые",
    "catalog.sortPriceDesc": "Сначала дорогие",
    "catalog.all": "Все",
    "catalog.notFound": "Товары не найдены",
    "cart.empty": "Корзина пуста",
    "cart.emptyDesc": "Добавьте товары из каталога, чтобы оформить заказ",
    "cart.toCatalog": "В каталог",
    "cart.title": "Корзина",
    "cart.clear": "Очистить",
    "cart.total": "Итого",
    "cart.items": "Товары",
    "cart.delivery": "Доставка",
    "cart.free": "Бесплатно",
    "cart.toPay": "К оплате",
    "cart.checkout": "Оформить заказ",
    "cart.continue": "Продолжить покупки",
    "cart.perItem": "за шт.",
    "ai.title": "Ая — ИИ-консультант",
    "ai.subtitle": "Помогу выбрать технику",
    "ai.placeholder": "Напишите ваш вопрос...",
    "ai.send": "Отправить",
    "ai.greeting": "Привет! Я Ая — ваш персональный ИИ-консультант TECH.KZ. Помогу подобрать технику, расскажу о скидках и доставке. О чём хотите узнать?",
    "ai.suggest1": "Подобрать смартфон",
    "ai.suggest2": "Условия рассрочки",
    "ai.suggest3": "Сроки доставки",
    "ai.openChat": "Чат с Аей",
  },
  kz: {
    "nav.home": "Басты бет",
    "nav.catalog": "Каталог",
    "nav.about": "Дүкен туралы",
    "nav.contacts": "Байланыс",
    "header.search": "Тауарларды іздеу...",
    "header.cart": "Себет",
    "header.delivery": "Қазақстан бойынша жеткізу",
    "header.hours": "Дс–Жс 9:00–22:00",
    "hero.badge": "TECH.KZ-те Қара жұма",
    "hero.title1": "Электроника",
    "hero.title2": "40%-ға дейінгі жеңілдік",
    "hero.text": "Әлемдік брендтердің мыңдаған тауарлары. Кепілдік, Қазақстан бойынша жеткізу және 0-0-12 бөліп төлеу.",
    "hero.cta1": "Каталогқа өту",
    "hero.cta2": "Дүкен туралы",
    "hero.priceLabel": "Күн бағасы",
    "promo.installment": "Бөліп төлеу 0-0-12",
    "promo.installmentDesc": "Техникаға үстеме төлемсіз",
    "promo.delivery": "Тегін жеткізу",
    "promo.deliveryDesc": "50 000 ₸-ден жоғары тапсырыстарда",
    "promo.tradeIn": "Trade-In",
    "promo.tradeInDesc": "Ескісін тапсыр — жеңілдік ал",
    "promo.more": "Толығырақ",
    "promo.buy": "Сатып алу",
    "promo.evaluate": "Бағалау",
    "section.categories": "Санаттар",
    "section.allProducts": "Барлық тауарлар",
    "section.popular": "Танымал тауарлар",
    "section.popularSub": "Маусымның ең қалаулы үлгілері",
    "section.viewAll": "Барлығын көру",
    "section.benefits.fast": "Жылдам жеткізу",
    "section.benefits.fastDesc": "ҚР бойынша 1–3 күнде",
    "section.benefits.warranty": "Кепілдік 2 жыл",
    "section.benefits.warrantyDesc": "Барлық техникаға ресми",
    "section.benefits.payment": "Ыңғайлы төлем",
    "section.benefits.paymentDesc": "Карта, қолма-қол, бөліп төлеу",
    "section.benefits.support": "Қолдау 24/7",
    "section.benefits.supportDesc": "Әрқашан клиентпен байланыста",
    "products.label": "тауар",
    "card.addToCart": "Себетке",
    "card.added": "Себетке қосылды",
    "catalog.title": "Тауарлар каталогы",
    "catalog.sort": "Сұрыптау:",
    "catalog.sortPopular": "Танымалдар",
    "catalog.sortPriceAsc": "Алдымен арзандар",
    "catalog.sortPriceDesc": "Алдымен қымбаттар",
    "catalog.all": "Барлығы",
    "catalog.notFound": "Тауарлар табылмады",
    "cart.empty": "Себет бос",
    "cart.emptyDesc": "Тапсырыс беру үшін каталогтан тауарлар қосыңыз",
    "cart.toCatalog": "Каталогқа",
    "cart.title": "Себет",
    "cart.clear": "Тазарту",
    "cart.total": "Барлығы",
    "cart.items": "Тауарлар",
    "cart.delivery": "Жеткізу",
    "cart.free": "Тегін",
    "cart.toPay": "Төленеді",
    "cart.checkout": "Тапсырыс рәсімдеу",
    "cart.continue": "Сатып алуды жалғастыру",
    "cart.perItem": "дана",
    "ai.title": "Ая — ЖИ-кеңесші",
    "ai.subtitle": "Техника таңдауға көмектесемін",
    "ai.placeholder": "Сұрағыңызды жазыңыз...",
    "ai.send": "Жіберу",
    "ai.greeting": "Сәлеметсіз бе! Мен Ая — TECH.KZ жеке ЖИ-кеңесшіңізбін. Техника таңдауға, жеңілдіктер мен жеткізу туралы айтуға көмектесемін. Не туралы білгіңіз келеді?",
    "ai.suggest1": "Смартфон таңдау",
    "ai.suggest2": "Бөліп төлеу шарттары",
    "ai.suggest3": "Жеткізу мерзімдері",
    "ai.openChat": "Аямен сөйлесу",
  },
  en: {
    "nav.home": "Home",
    "nav.catalog": "Catalog",
    "nav.about": "About",
    "nav.contacts": "Contacts",
    "header.search": "Search products...",
    "header.cart": "Cart",
    "header.delivery": "Delivery across Kazakhstan",
    "header.hours": "Mon–Sun 9:00–22:00",
    "hero.badge": "Black Friday at TECH.KZ",
    "hero.title1": "Electronics",
    "hero.title2": "with up to 40% off",
    "hero.text": "Thousands of products from world brands. Warranty, delivery across Kazakhstan and 0-0-12 installment.",
    "hero.cta1": "Go to catalog",
    "hero.cta2": "About store",
    "hero.priceLabel": "Today's price",
    "promo.installment": "Installment 0-0-12",
    "promo.installmentDesc": "No overpayments on tech",
    "promo.delivery": "Free delivery",
    "promo.deliveryDesc": "On orders from 50,000 ₸",
    "promo.tradeIn": "Trade-In",
    "promo.tradeInDesc": "Trade old — get discount",
    "promo.more": "Learn more",
    "promo.buy": "Buy",
    "promo.evaluate": "Evaluate",
    "section.categories": "Categories",
    "section.allProducts": "All products",
    "section.popular": "Popular products",
    "section.popularSub": "Most desired models this season",
    "section.viewAll": "View all",
    "section.benefits.fast": "Fast delivery",
    "section.benefits.fastDesc": "Across Kazakhstan in 1–3 days",
    "section.benefits.warranty": "2-year warranty",
    "section.benefits.warrantyDesc": "Official on all electronics",
    "section.benefits.payment": "Easy payment",
    "section.benefits.paymentDesc": "Card, cash, installment",
    "section.benefits.support": "24/7 support",
    "section.benefits.supportDesc": "Always in touch with customers",
    "products.label": "products",
    "card.addToCart": "Add to cart",
    "card.added": "Added to cart",
    "catalog.title": "Product catalog",
    "catalog.sort": "Sort by:",
    "catalog.sortPopular": "Popular",
    "catalog.sortPriceAsc": "Price: low to high",
    "catalog.sortPriceDesc": "Price: high to low",
    "catalog.all": "All",
    "catalog.notFound": "No products found",
    "cart.empty": "Cart is empty",
    "cart.emptyDesc": "Add products from catalog to place an order",
    "cart.toCatalog": "To catalog",
    "cart.title": "Cart",
    "cart.clear": "Clear",
    "cart.total": "Total",
    "cart.items": "Items",
    "cart.delivery": "Delivery",
    "cart.free": "Free",
    "cart.toPay": "To pay",
    "cart.checkout": "Checkout",
    "cart.continue": "Continue shopping",
    "cart.perItem": "per item",
    "ai.title": "Aya — AI consultant",
    "ai.subtitle": "I'll help you choose tech",
    "ai.placeholder": "Type your question...",
    "ai.send": "Send",
    "ai.greeting": "Hello! I'm Aya — your personal TECH.KZ AI consultant. I'll help you pick electronics, tell about discounts and delivery. What would you like to know?",
    "ai.suggest1": "Pick a smartphone",
    "ai.suggest2": "Installment terms",
    "ai.suggest3": "Delivery times",
    "ai.openChat": "Chat with Aya",
  },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "techkz_lang_v1";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (v && ["ru", "kz", "en"].includes(v)) return v;
    } catch {
      /* noop */
    }
    return "ru";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "kz" ? "kk" : lang;
  }, [lang]);

  const t = (key: string) => translations[lang][key] ?? translations.ru[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const languageLabels: Record<Lang, { code: string; name: string; flag: string }> = {
  ru: { code: "RU", name: "Русский", flag: "🇷🇺" },
  kz: { code: "KZ", name: "Қазақша", flag: "🇰🇿" },
  en: { code: "EN", name: "English", flag: "🇬🇧" },
};
