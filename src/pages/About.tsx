import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <Layout>
      <div className="container py-8">
        <nav className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-blue">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">О магазине</span>
        </nav>

        <section className="rounded-3xl bg-gradient-to-br from-brand-blue via-blue-600 to-purple-600 text-white p-8 md:p-14 mb-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-orange/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-4">
              Мы — TECH.KZ
            </h1>
            <p className="text-lg opacity-90">
              С 2014 года помогаем казахстанцам выбирать лучшую электронику. От смартфонов
              до телевизоров — у нас есть всё для дома, работы и развлечений.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-4 gap-5 mb-12">
          {[
            { v: "10+", t: "лет на рынке" },
            { v: "150 000+", t: "довольных клиентов" },
            { v: "17", t: "городов Казахстана" },
            { v: "24/7", t: "поддержка клиентов" },
          ].map((s) => (
            <div key={s.t} className="bg-white border border-border rounded-2xl p-6 text-center">
              <div className="font-montserrat font-extrabold text-3xl text-brand-blue mb-1">
                {s.v}
              </div>
              <div className="text-sm text-muted-foreground">{s.t}</div>
            </div>
          ))}
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <h2 className="font-montserrat font-extrabold text-3xl mb-4">
              Наша миссия
            </h2>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Делать современные технологии доступными каждому жителю Казахстана.
              Мы верим, что качественная электроника не должна стоить дорого, а сервис —
              быть сложным.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Поэтому мы работаем напрямую с официальными представителями брендов,
              предлагаем рассрочку без переплат и гарантию на каждый товар.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=900"
              alt="Магазин TECH.KZ"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-montserrat font-extrabold text-3xl mb-6 text-center">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "ShieldCheck",
                t: "Только оригинал",
                d: "Все товары — официально, с гарантией производителя",
              },
              {
                icon: "Truck",
                t: "Доставка по РК",
                d: "В Алматы и Астане — на следующий день. По регионам — 2–4 дня",
              },
              {
                icon: "CreditCard",
                t: "Рассрочка 0-0-12",
                d: "Без переплат и скрытых комиссий — вместе с банками-партнёрами",
              },
              {
                icon: "Headphones",
                t: "Сервис 24/7",
                d: "Консультанты помогут выбрать и решить любой вопрос",
              },
              {
                icon: "RefreshCw",
                t: "Возврат 14 дней",
                d: "Если что-то не подошло — вернём деньги без вопросов",
              },
              {
                icon: "Award",
                t: "Программа лояльности",
                d: "Бонусы за каждую покупку и подарки на день рождения",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="bg-white border border-border rounded-2xl p-6 hover:border-brand-blue transition"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                  <Icon name={b.icon} size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-brand-dark text-white p-10 md:p-14 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-4">
            Готовы выбрать новую технику?
          </h2>
          <p className="opacity-80 mb-6 max-w-xl mx-auto">
            Загляните в каталог — там тысячи товаров от мировых брендов с быстрой доставкой
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-brand-orange hover:bg-orange-600 font-semibold transition"
          >
            Перейти в каталог
            <Icon name="ArrowRight" size={18} />
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default About;
