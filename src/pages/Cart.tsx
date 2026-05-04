import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

const Cart = () => {
  const { items, updateQuantity, removeItem, total, count, clear } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-20 text-center max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-brand-gray flex items-center justify-center mx-auto mb-5 text-brand-blue">
            <Icon name="ShoppingCart" size={42} />
          </div>
          <h1 className="font-montserrat font-extrabold text-3xl mb-3">
            Корзина пуста
          </h1>
          <p className="text-muted-foreground mb-6">
            Добавьте товары из каталога, чтобы оформить заказ
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-semibold transition"
          >
            <Icon name="ArrowLeft" size={18} />
            В каталог
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <nav className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-blue">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Корзина</span>
        </nav>

        <div className="flex items-center justify-between mb-6">
          <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl">
            Корзина <span className="text-muted-foreground">({count})</span>
          </h1>
          <button
            onClick={clear}
            className="text-sm text-muted-foreground hover:text-destructive flex items-center gap-1"
          >
            <Icon name="Trash2" size={14} />
            Очистить
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="bg-white border border-border rounded-2xl p-4 flex gap-4"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-brand-gray overflow-hidden shrink-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 flex flex-col">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-semibold hover:text-brand-blue line-clamp-2"
                  >
                    {product.name}
                  </Link>
                  <div className="text-sm text-muted-foreground mb-2">
                    {formatPrice(product.price)} за шт.
                  </div>
                  <div className="mt-auto flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center bg-brand-gray rounded-lg">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center hover:text-brand-blue"
                      >
                        <Icon name="Minus" size={16} />
                      </button>
                      <span className="w-10 text-center font-semibold">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center hover:text-brand-blue"
                      >
                        <Icon name="Plus" size={16} />
                      </button>
                    </div>
                    <div className="font-montserrat font-extrabold text-lg">
                      {formatPrice(product.price * quantity)}
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="w-9 h-9 rounded-lg hover:bg-destructive/10 hover:text-destructive flex items-center justify-center"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-32 self-start bg-white border border-border rounded-2xl p-6 h-fit">
            <h2 className="font-bold text-xl mb-4">Итого</h2>
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
            <Link
              to="/checkout"
              className="w-full h-12 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-semibold flex items-center justify-center gap-2 transition"
            >
              Оформить заказ
              <Icon name="ArrowRight" size={18} />
            </Link>
            <Link
              to="/catalog"
              className="mt-2 w-full h-11 rounded-xl bg-brand-gray hover:bg-gray-200 font-semibold flex items-center justify-center gap-2 transition"
            >
              Продолжить покупки
            </Link>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
