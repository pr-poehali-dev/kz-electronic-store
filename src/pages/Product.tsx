import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { products, categories, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link to="/catalog" className="text-brand-blue underline">
            Вернуться в каталог
          </Link>
        </div>
      </Layout>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleBuy = () => {
    addItem(product);
    toast.success("Добавлено в корзину", { description: product.name });
  };

  return (
    <Layout>
      <div className="container py-8">
        <nav className="text-sm text-muted-foreground mb-6 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-brand-blue">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/catalog" className="hover:text-brand-blue">Каталог</Link>
          {category && (
            <>
              <Icon name="ChevronRight" size={14} />
              <Link to={`/category/${category.id}`} className="hover:text-brand-blue">
                {category.name}
              </Link>
            </>
          )}
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative bg-brand-gray rounded-3xl overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-5 left-5 px-3 py-1.5 rounded-lg text-sm font-bold bg-brand-orange text-white">
                {product.badge}
              </span>
            )}
          </div>

          <div>
            <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Icon name="Check" size={16} className="text-emerald-600" />
              В наличии · Артикул: {product.id.toUpperCase()}
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 mb-5">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-montserrat font-extrabold text-4xl">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>
              <button
                onClick={handleBuy}
                className="w-full h-14 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-semibold text-lg flex items-center justify-center gap-2 transition mb-3"
              >
                <Icon name="ShoppingCart" size={20} />
                Купить
              </button>
              <Link
                to="/cart"
                className="w-full h-12 rounded-xl bg-brand-gray hover:bg-gray-200 font-semibold flex items-center justify-center gap-2 transition"
              >
                <Icon name="CreditCard" size={18} />
                Перейти в корзину
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 text-sm">
              <div className="bg-brand-gray rounded-xl p-3 text-center">
                <Icon name="Truck" size={20} className="mx-auto mb-1 text-brand-blue" />
                Доставка 1–3 дня
              </div>
              <div className="bg-brand-gray rounded-xl p-3 text-center">
                <Icon name="ShieldCheck" size={20} className="mx-auto mb-1 text-brand-blue" />
                Гарантия 2 года
              </div>
              <div className="bg-brand-gray rounded-xl p-3 text-center">
                <Icon name="RefreshCw" size={20} className="mx-auto mb-1 text-brand-blue" />
                Возврат 14 дней
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-2">Описание</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl mb-6">
              Похожие товары
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Product;
