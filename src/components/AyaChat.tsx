import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { useLanguage, Lang } from "@/context/LanguageContext";
import { products, formatPrice } from "@/data/products";

type Message = {
  id: string;
  role: "user" | "ai";
  text: string;
  suggestions?: string[];
};

const responses: Record<Lang, {
  greeting: string;
  smartphone: string;
  laptop: string;
  tv: string;
  installment: string;
  delivery: string;
  warranty: string;
  payment: string;
  cheap: string;
  premium: string;
  fallback: string;
  bestseller: (name: string, price: string) => string;
}> = {
  ru: {
    greeting: "Рада знакомству! Чем могу помочь?",
    smartphone:
      "Из смартфонов сейчас особенно рекомендую iPhone 15 Pro и Samsung Galaxy S24 Ultra — топ флагманы. Если ищете доступный вариант, обратите внимание на Xiaomi Redmi Note 13 Pro. Какой бюджет рассматриваете?",
    laptop:
      "Для работы советую MacBook Air M3 или Dell XPS 15. Геймерам подойдёт ASUS ROG Strix G16 с RTX 4060. Что планируете делать на ноутбуке?",
    tv:
      "Лучший выбор — LG OLED C3 (сейчас со скидкой 18%). Для гейминга на PS5 идеален Sony Bravia X90L. Какая диагональ нужна?",
    installment:
      "У нас рассрочка 0-0-12 без переплат с банками-партнёрами. Просто выберите этот способ при оформлении заказа. Нужен только паспорт.",
    delivery:
      "Доставка бесплатная по всему Казахстану от 50 000 ₸. По Алматы и Астане — на следующий день, в регионы — 2–4 дня. Работает самовывоз.",
    warranty:
      "На всю технику официальная гарантия от 1 до 3 лет. Возврат в течение 14 дней без вопросов, если товар не подошёл.",
    payment:
      "Принимаем: банковские карты онлайн, наличные при получении, рассрочку 0-0-12 и Apple/Google Pay. Все способы безопасны.",
    cheap:
      "До 200 000 ₸ обратите внимание на Xiaomi Redmi Note 13 Pro, JBL Charge 5 и Xiaomi Smart Band 8 Pro со скидкой 20%.",
    premium:
      "Из премиум: iPhone 15 Pro, MacBook Pro M3 Pro, Samsung Neo QLED 8K и Sony Alpha A7 IV. Доступна рассрочка.",
    fallback:
      "Хороший вопрос! Уточните, пожалуйста, что именно интересует: товар, доставка, оплата или гарантия? Я помогу подобрать.",
    bestseller: (n, p) => `Хит продаж: ${n} — ${p}. Хотите оформить?`,
  },
  kz: {
    greeting: "Танысқаныма қуаныштымын! Қандай көмек керек?",
    smartphone:
      "Смартфондардан қазір iPhone 15 Pro мен Samsung Galaxy S24 Ultra ұсынамын — ең үздік флагмандар. Қолжетімді нұсқа керек болса — Xiaomi Redmi Note 13 Pro-ға назар аударыңыз. Бюджетіңіз қандай?",
    laptop:
      "Жұмыс үшін MacBook Air M3 немесе Dell XPS 15 кеңес беремін. Геймерлерге RTX 4060-пен ASUS ROG Strix G16. Не істеуге жоспарлайсыз?",
    tv:
      "Ең жақсы таңдау — LG OLED C3 (қазір 18% жеңілдікпен). PS5 геймингке Sony Bravia X90L тамаша. Диагональ қандай керек?",
    installment:
      "Бізде серіктес банктермен 0-0-12 бөліп төлеу бар, үстеме төлемсіз. Тапсырыс беру кезінде осы әдісті таңдаңыз. Тек жеке куәлік қажет.",
    delivery:
      "Қазақстан бойынша 50 000 ₸-ден жоғары тапсырыстарға тегін жеткізу. Алматы мен Астанада — келесі күні, өңірлерге — 2–4 күн. Өзіңіз алуға болады.",
    warranty:
      "Барлық техникаға 1-3 жылдық ресми кепілдік. Тауар келмесе — 14 күн ішінде сұрақсыз қайтару.",
    payment:
      "Қабылдаймыз: банк карталары онлайн, қолма-қол қабылдау кезінде, 0-0-12 бөліп төлеу, Apple/Google Pay. Барлығы қауіпсіз.",
    cheap:
      "200 000 ₸-ге дейін Xiaomi Redmi Note 13 Pro, JBL Charge 5 және 20% жеңілдікпен Xiaomi Smart Band 8 Pro-ға назар аударыңыз.",
    premium:
      "Премиумнан: iPhone 15 Pro, MacBook Pro M3 Pro, Samsung Neo QLED 8K және Sony Alpha A7 IV. Бөліп төлеу қолжетімді.",
    fallback:
      "Жақсы сұрақ! Не қызықтыратынын нақтылаңыз: тауар, жеткізу, төлем немесе кепілдік? Мен таңдауға көмектесемін.",
    bestseller: (n, p) => `Сатылым көшбасшысы: ${n} — ${p}. Рәсімдейміз бе?`,
  },
  en: {
    greeting: "Nice to meet you! How can I help?",
    smartphone:
      "Among smartphones, I especially recommend iPhone 15 Pro and Samsung Galaxy S24 Ultra — top flagships. For a budget option, check Xiaomi Redmi Note 13 Pro. What's your budget?",
    laptop:
      "For work I suggest MacBook Air M3 or Dell XPS 15. Gamers will love ASUS ROG Strix G16 with RTX 4060. What do you plan to use it for?",
    tv:
      "Best pick — LG OLED C3 (currently 18% off). For PS5 gaming, Sony Bravia X90L is ideal. What size do you need?",
    installment:
      "We offer 0-0-12 installment with no overpayments through partner banks. Just choose this option at checkout. Only your ID is needed.",
    delivery:
      "Free delivery across Kazakhstan on orders from 50,000 ₸. Almaty & Astana — next day, regions — 2–4 days. Pickup available.",
    warranty:
      "Official 1-3 year warranty on all electronics. 14-day return policy without questions if the product doesn't fit.",
    payment:
      "We accept: bank cards online, cash on delivery, 0-0-12 installment, Apple/Google Pay. All methods are secure.",
    cheap:
      "Under 200,000 ₸ check out Xiaomi Redmi Note 13 Pro, JBL Charge 5 and Xiaomi Smart Band 8 Pro with 20% off.",
    premium:
      "Premium picks: iPhone 15 Pro, MacBook Pro M3 Pro, Samsung Neo QLED 8K and Sony Alpha A7 IV. Installment available.",
    fallback:
      "Great question! Could you clarify: product, delivery, payment or warranty? I'll help you choose.",
    bestseller: (n, p) => `Bestseller: ${n} — ${p}. Want to order?`,
  },
};

const AyaChat = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: "init",
        role: "ai",
        text: t("ai.greeting"),
        suggestions: [t("ai.suggest1"), t("ai.suggest2"), t("ai.suggest3")],
      },
    ]);
  }, [lang, t]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const generateAnswer = (q: string): string => {
    const r = responses[lang];
    const text = q.toLowerCase();

    const has = (...words: string[]) => words.some((w) => text.includes(w));

    if (has("привет", "сәлем", "hello", "hi", "здрав")) return r.greeting;
    if (has("смартфон", "телефон", "айфон", "iphone", "samsung", "phone")) return r.smartphone;
    if (has("ноутбук", "ноут", "laptop", "macbook", "ноутбук")) return r.laptop;
    if (has("телев", "тв", "tv", "oled", "qled")) return r.tv;
    if (has("рассроч", "бөліп", "installment", "кредит", "credit")) return r.installment;
    if (has("доставк", "жеткіз", "delivery", "shipping", "куриер")) return r.delivery;
    if (has("гарант", "кепіл", "warranty", "возврат", "return")) return r.warranty;
    if (has("оплат", "төлем", "payment", "pay", "card", "карт")) return r.payment;
    if (has("дешев", "арзан", "cheap", "бюджет", "budget", "недорог")) return r.cheap;
    if (has("премиум", "дорог", "premium", "топ", "флагман", "expensive")) return r.premium;
    if (has("популяр", "хит", "bestseller", "best")) {
      const top = products.find((p) => p.popular);
      if (top) return r.bestseller(top.name, formatPrice(top.price));
    }
    return r.fallback;
  };

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: `a-${Date.now()}`,
        role: "ai",
        text: generateAnswer(text),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setTyping(false);
    }, 700 + Math.random() * 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 pl-3 pr-5 h-16 rounded-full bg-gradient-to-r from-brand-blue to-purple-600 text-white shadow-2xl hover:shadow-brand-blue/40 transition-all hover:scale-105"
        >
          <div className="relative w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
            <Icon name="Sparkles" size={22} />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-blue" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="font-bold text-sm leading-tight">Ая</div>
            <div className="text-xs opacity-90 leading-tight">{t("ai.openChat")}</div>
          </div>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-in border border-border">
          <div className="bg-gradient-to-r from-brand-blue to-purple-600 text-white p-4 flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
              <Icon name="Sparkles" size={22} />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-brand-blue" />
            </div>
            <div className="flex-1">
              <div className="font-bold flex items-center gap-1.5">
                {t("ai.title").split(" — ")[0]}
                <span className="text-[10px] uppercase tracking-wider bg-white/20 px-1.5 py-0.5 rounded">AI</span>
              </div>
              <div className="text-xs opacity-90">{t("ai.subtitle")}</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center transition"
              aria-label="Close"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-brand-gray/30"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-purple-600 text-white flex items-center justify-center mr-2 shrink-0 mt-1">
                    <Icon name="Sparkles" size={14} />
                  </div>
                )}
                <div className="max-w-[80%]">
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-brand-blue text-white rounded-br-md"
                        : "bg-white border border-border text-foreground rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {m.suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => send(s)}
                          className="px-3 py-1.5 rounded-full bg-white border border-brand-blue/30 text-brand-blue text-xs font-medium hover:bg-brand-blue hover:text-white transition"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-purple-600 text-white flex items-center justify-center mr-2 shrink-0 mt-1">
                  <Icon name="Sparkles" size={14} />
                </div>
                <div className="bg-white border border-border rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-border bg-white flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("ai.placeholder")}
              className="flex-1 h-11 px-4 rounded-xl bg-brand-gray border border-transparent focus:border-brand-blue focus:bg-white outline-none transition text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="w-11 h-11 rounded-xl bg-brand-blue hover:bg-blue-700 disabled:opacity-40 text-white flex items-center justify-center transition shrink-0"
            >
              <Icon name="Send" size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AyaChat;
