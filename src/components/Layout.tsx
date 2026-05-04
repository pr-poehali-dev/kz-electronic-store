import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const { count } = useCart();

  const navLink = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? "bg-brand-blue text-white"
        : "text-foreground hover:bg-brand-gray"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
        <div className="bg-brand-dark text-white text-xs">
          <div className="container flex justify-between items-center h-9">
            <span className="opacity-80">Доставка по всему Казахстану</span>
            <div className="hidden md:flex items-center gap-4 opacity-80">
              <span className="flex items-center gap-1">
                <Icon name="Phone" size={12} /> +7 (727) 000-00-00
              </span>
              <span>Пн–Вс 9:00–22:00</span>
            </div>
          </div>
        </div>
        <div className="container flex items-center gap-4 h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center text-white">
              <Icon name="Zap" size={22} />
            </div>
            <div className="font-montserrat font-extrabold text-2xl tracking-tight">
              TECH<span className="text-brand-orange">.KZ</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-4">
            <NavLink to="/" end className={navLink}>
              Главная
            </NavLink>
            <NavLink to="/catalog" className={navLink}>
              Каталог
            </NavLink>
            <NavLink to="/about" className={navLink}>
              О магазине
            </NavLink>
            <NavLink to="/contacts" className={navLink}>
              Контакты
            </NavLink>
          </nav>

          <form
            className="hidden md:flex flex-1 max-w-md mx-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative w-full">
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-10 pr-4 h-11 rounded-xl bg-brand-gray border border-transparent focus:border-brand-blue focus:bg-white outline-none transition"
              />
            </div>
          </form>

          <Link
            to="/cart"
            className="relative ml-auto flex items-center gap-2 px-4 h-11 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-semibold transition"
          >
            <Icon name="ShoppingCart" size={20} />
            <span className="hidden sm:inline">Корзина</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 min-w-6 h-6 px-1 rounded-full bg-brand-dark text-white text-xs flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-brand-dark text-white mt-16">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center">
                <Icon name="Zap" size={20} />
              </div>
              <div className="font-montserrat font-extrabold text-xl">
                TECH<span className="text-brand-orange">.KZ</span>
              </div>
            </div>
            <p className="text-sm opacity-70">
              Электроника №1 в Казахстане. Гарантия, доставка и сервис.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Магазин</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/catalog" className="hover:text-brand-orange">Каталог</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange">О магазине</Link></li>
              <li><Link to="/contacts" className="hover:text-brand-orange">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Категории</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/category/smartphones" className="hover:text-brand-orange">Смартфоны</Link></li>
              <li><Link to="/category/laptops" className="hover:text-brand-orange">Ноутбуки</Link></li>
              <li><Link to="/category/tvs" className="hover:text-brand-orange">Телевизоры</Link></li>
              <li><Link to="/category/accessories" className="hover:text-brand-orange">Аксессуары</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2"><Icon name="Phone" size={14} /> +7 (727) 000-00-00</li>
              <li className="flex items-center gap-2"><Icon name="Mail" size={14} /> hello@tech.kz</li>
              <li className="flex items-center gap-2"><Icon name="MapPin" size={14} /> Алматы, пр. Достык, 100</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs opacity-60">
            <span>© 2026 TECH.KZ — все права защищены</span>
            <span>Сделано в Казахстане</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
