import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { categories, products } from "@/data/products";

const Index = () => {
  const popular = products.filter((p) => p.popular).slice(0, 8);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-blue-600 to-purple-600 text-white">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-orange/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-purple-400/40 blur-3xl" />
        <div className="container relative py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm font-medium mb-5">
              <Icon name="Sparkles" size={14} /> Чёрная пятница в TECH.KZ
            </span>
            <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl leading-tight mb-5">
              Электроника <br />
              <span className="text-brand-orange">со скидкой до 40%</span>
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-md">
              Тысячи товаров от мировых брендов. Гарантия, доставка по всему
              Казахстану и рассрочка 0-0-12.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="px-6 h-12 rounded-xl bg-brand-orange hover:bg-orange-600 font-semibold flex items-center gap-2 transition"
              >
                Перейти в каталог
                <Icon name="ArrowRight" size={18} />
              </Link>
              <Link
                to="/about"
                className="px-6 h-12 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur font-semibold flex items-center gap-2 transition border border-white/30"
              >
                О магазине
              </Link>
            </div>
          </div>
          <div className="relative animate-scale-in hidden md:block">
            <div className="aspect-square rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-6 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1592286927505-1def25115558?w=900"
                alt="iPhone"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-brand-dark rounded-2xl p-4 shadow-xl">
              <div className="text-xs text-muted-foreground">Цена дня</div>
              <div className="font-montserrat font-extrabold text-2xl">
                649 990 ₸
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-orange rounded-2xl px-4 py-3 shadow-xl">
              <div className="font-montserrat font-extrabold text-xl">−18%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO BANNERS */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white relative overflow-hidden h-44 flex flex-col justify-between">
            <div>
              <div className="font-bold text-lg">Рассрочка 0-0-12</div>
              <div className="opacity-90 text-sm">Без переплат на технику</div>
            </div>
            <Link to="/catalog" className="font-semibold flex items-center gap-1 hover:underline">
              Подробнее <Icon name="ArrowRight" size={14} />
            </Link>
            <Icon name="CreditCard" size={120} className="absolute -right-6 -bottom-6 opacity-20" />
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 text-white relative overflow-hidden h-44 flex flex-col justify-between">
            <div>
              <div className="font-bold text-lg">Бесплатная доставка</div>
              <div className="opacity-90 text-sm">При заказе от 50 000 ₸</div>
            </div>
            <Link to="/catalog" className="font-semibold flex items-center gap-1 hover:underline">
              Купить <Icon name="ArrowRight" size={14} />
            </Link>
            <Icon name="Truck" size={120} className="absolute -right-6 -bottom-6 opacity-20" />
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-6 text-white relative overflow-hidden h-44 flex flex-col justify-between">
            <div>
              <div className="font-bold text-lg">Trade-In</div>
              <div className="opacity-90 text-sm">Сдай старый — получи скидку</div>
            </div>
            <Link to="/catalog" className="font-semibold flex items-center gap-1 hover:underline">
              Оценить <Icon name="ArrowRight" size={14} />
            </Link>
            <Icon name="RefreshCw" size={120} className="absolute -right-6 -bottom-6 opacity-20" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container py-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl">
            Категории
          </h2>
          <Link
            to="/catalog"
            className="text-brand-blue font-semibold hidden md:flex items-center gap-1 hover:underline"
          >
            Все товары <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="group bg-brand-gray rounded-2xl p-5 hover:bg-brand-blue hover:text-white transition-colors relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center mb-3 text-brand-blue group-hover:text-white transition-colors">
                <Icon name={cat.icon} size={24} />
              </div>
              <div className="font-bold text-lg">{cat.name}</div>
              <div className="text-sm opacity-70 mt-1">
                {products.filter((p) => p.category === cat.id).length} товаров
              </div>
              <Icon
                name="ArrowUpRight"
                size={18}
                className="absolute top-4 right-4 opacity-50 group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl">
              Популярные товары
            </h2>
            <p className="text-muted-foreground mt-1">
              Самые желанные модели в этом сезоне
            </p>
          </div>
          <Link
            to="/catalog"
            className="text-brand-blue font-semibold hidden md:flex items-center gap-1 hover:underline"
          >
            Смотреть все <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "Truck", title: "Быстрая доставка", text: "По всему Казахстану за 1–3 дня" },
            { icon: "ShieldCheck", title: "Гарантия 2 года", text: "Официальная на всю технику" },
            { icon: "CreditCard", title: "Удобная оплата", text: "Картой, наличными, рассрочка" },
            { icon: "Headphones", title: "Поддержка 24/7", text: "Всегда на связи с клиентом" },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-white border border-border rounded-2xl p-5 hover:border-brand-blue transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                <Icon name={b.icon} size={22} />
              </div>
              <div className="font-bold mb-1">{b.title}</div>
              <div className="text-sm text-muted-foreground">{b.text}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
