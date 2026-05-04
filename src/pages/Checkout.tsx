import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { formatPrice, kazakhstanCities } from "@/data/products";
import { toast } from "sonner";

const Checkout = () => {
  const { items, total, count, clear } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Алматы",
    address: "",
    delivery: "courier",
    payment: "card",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error("Заполните обязательные поля");
      return;
    }
    const num = "TK-" + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(num);
    setSubmitted(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (items.length === 0 && !submitted) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
          <Link to="/catalog" className="text-brand-blue underline">
            Вернуться в каталог
          </Link>
        </div>
      </Layout>
    );
  }

  if (submitted) {
    return (
      <Layout>
        <div className="container py-16 max-w-xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 text-emerald-600">
            <Icon name="CheckCircle2" size={56} />
          </div>
          <h1 className="font-montserrat font-extrabold text-3xl mb-3">
            Заказ оформлен!
          </h1>
          <p className="text-muted-foreground mb-2">
            Номер заказа: <span className="font-bold text-foreground">{orderNumber}</span>
          </p>
          <p className="text-muted-foreground mb-8">
            Мы свяжемся с вами в течение 15 минут для подтверждения. Спасибо за покупку в TECH.KZ!
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => navigate("/")}
              className="h-12 px-6 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-semibold"
            >
              На главную
            </button>
            <Link
              to="/catalog"
              className="h-12 px-6 rounded-xl bg-brand-gray hover:bg-gray-200 font-semibold flex items-center"
            >
              В каталог
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const inputCls =
    "w-full h-11 px-4 rounded-xl bg-white border border-border outline-none focus:border-brand-blue transition";

  return (
    <Layout>
      <div className="container py-8">
        <nav className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-blue">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/cart" className="hover:text-brand-blue">Корзина</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Оформление</span>
        </nav>

        <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-6">
          Оформление заказа
        </h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <section className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-brand-blue text-white text-sm flex items-center justify-center">1</span>
                Контактные данные
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Имя *</label>
                  <input
                    className={inputCls}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Телефон *</label>
                  <input
                    className={inputCls}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-brand-blue text-white text-sm flex items-center justify-center">2</span>
                Доставка
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Город *</label>
                  <select
                    className={inputCls}
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                  >
                    {kazakhstanCities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Адрес *</label>
                  <input
                    className={inputCls}
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    placeholder="Улица, дом, квартира"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { v: "courier", t: "Курьер", d: "1–3 дня · бесплатно", icon: "Truck" },
                  { v: "pickup", t: "Самовывоз", d: "Сегодня · бесплатно", icon: "Store" },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className={`cursor-pointer rounded-xl border-2 p-4 transition ${
                      form.delivery === opt.v
                        ? "border-brand-blue bg-brand-blue/5"
                        : "border-border hover:border-brand-blue/50"
                    }`}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      checked={form.delivery === opt.v}
                      onChange={() => update("delivery", opt.v)}
                    />
                    <div className="flex items-start gap-3">
                      <Icon name={opt.icon} size={22} className="text-brand-blue shrink-0" />
                      <div>
                        <div className="font-semibold">{opt.t}</div>
                        <div className="text-sm text-muted-foreground">{opt.d}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            <section className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-brand-blue text-white text-sm flex items-center justify-center">3</span>
                Способ оплаты
              </h2>
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {[
                  { v: "card", t: "Картой онлайн", icon: "CreditCard" },
                  { v: "cash", t: "Наличными", icon: "Wallet" },
                  { v: "installment", t: "Рассрочка", icon: "Calendar" },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className={`cursor-pointer rounded-xl border-2 p-4 transition ${
                      form.payment === opt.v
                        ? "border-brand-blue bg-brand-blue/5"
                        : "border-border hover:border-brand-blue/50"
                    }`}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      checked={form.payment === opt.v}
                      onChange={() => update("payment", opt.v)}
                    />
                    <Icon name={opt.icon} size={22} className="text-brand-blue mb-2" />
                    <div className="font-semibold text-sm">{opt.t}</div>
                  </label>
                ))}
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Комментарий к заказу</label>
                <textarea
                  className="w-full p-3 rounded-xl bg-white border border-border outline-none focus:border-brand-blue transition resize-none"
                  rows={3}
                  value={form.comment}
                  onChange={(e) => update("comment", e.target.value)}
                  placeholder="Пожелания или уточнения..."
                />
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-32 self-start bg-white border border-border rounded-2xl p-6 h-fit">
            <h2 className="font-bold text-xl mb-4">Ваш заказ</h2>
            <div className="space-y-3 mb-4 pb-4 border-b border-border max-h-72 overflow-y-auto">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 text-sm">
                  <div className="w-14 h-14 rounded-lg bg-brand-gray overflow-hidden shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="line-clamp-2">{product.name}</div>
                    <div className="text-muted-foreground">
                      {quantity} × {formatPrice(product.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Товары ({count})</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Доставка</span>
                <span className="text-emerald-600 font-semibold">Бесплатно</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline mb-5">
              <span className="font-bold">К оплате</span>
              <span className="font-montserrat font-extrabold text-2xl">
                {formatPrice(total)}
              </span>
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-semibold flex items-center justify-center gap-2 transition"
            >
              <Icon name="Check" size={18} />
              Подтвердить заказ
            </button>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Нажимая кнопку, вы соглашаетесь с условиями обработки данных
            </p>
          </aside>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
