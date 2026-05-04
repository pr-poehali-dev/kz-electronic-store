import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Заполните имя и телефон");
      return;
    }
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время");
    setForm({ name: "", phone: "", message: "" });
  };

  const inputCls =
    "w-full h-11 px-4 rounded-xl bg-white border border-border outline-none focus:border-brand-blue transition";

  return (
    <Layout>
      <div className="container py-8">
        <nav className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-blue">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Контакты</span>
        </nav>

        <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-2">
          Контакты
        </h1>
        <p className="text-muted-foreground mb-8">
          Мы всегда рады помочь — выберите удобный способ связи
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: "Phone",
              title: "Телефон",
              v: "+7 (727) 000-00-00",
              s: "Пн–Вс с 9:00 до 22:00",
              color: "from-blue-500 to-blue-700",
            },
            {
              icon: "Mail",
              title: "Email",
              v: "hello@tech.kz",
              s: "Ответим в течение часа",
              color: "from-orange-500 to-orange-600",
            },
            {
              icon: "MapPin",
              title: "Главный офис",
              v: "Алматы, пр. Достык, 100",
              s: "Ежедневно с 10:00 до 21:00",
              color: "from-purple-500 to-pink-500",
            },
          ].map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl p-6 text-white bg-gradient-to-br ${c.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-3">
                <Icon name={c.icon} size={24} />
              </div>
              <div className="text-sm opacity-80 mb-1">{c.title}</div>
              <div className="font-bold text-xl mb-1">{c.v}</div>
              <div className="text-sm opacity-80">{c.s}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-bold text-2xl mb-2">Напишите нам</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Оставьте заявку и наш специалист свяжется с вами
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Имя *</label>
                <input
                  className={inputCls}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Телефон *</label>
                <input
                  className={inputCls}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Сообщение</label>
                <textarea
                  className="w-full p-3 rounded-xl bg-white border border-border outline-none focus:border-brand-blue transition resize-none"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Опишите ваш вопрос..."
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition"
              >
                <Icon name="Send" size={18} />
                Отправить
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">Реквизиты</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">БИН</span>
                  <span>140840000000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Юр. адрес</span>
                  <span>г. Алматы, пр. Достык, 100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Банк</span>
                  <span>АО "Halyk Bank"</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">Социальные сети</h3>
              <div className="flex gap-3">
                {[
                  { icon: "Instagram", color: "bg-pink-500" },
                  { icon: "Facebook", color: "bg-blue-600" },
                  { icon: "Youtube", color: "bg-red-600" },
                  { icon: "Send", color: "bg-sky-500" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href="#"
                    className={`w-12 h-12 rounded-xl ${s.color} text-white flex items-center justify-center hover:scale-110 transition`}
                  >
                    <Icon name={s.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 bg-brand-gray relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900"
                alt="Карта"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/30 flex items-center justify-center">
                <div className="bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-brand-orange" />
                  <span className="font-semibold">пр. Достык, 100, Алматы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
