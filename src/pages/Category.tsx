import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { categories, products } from "@/data/products";

const Category = () => {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);
  const items = products.filter((p) => p.category === id);

  if (!category) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Категория не найдена</h1>
          <Link to="/catalog" className="text-brand-blue underline">
            Вернуться в каталог
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
          <Link to="/catalog" className="hover:text-brand-blue">Каталог</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{category.name}</span>
        </nav>

        <div className="rounded-2xl bg-gradient-to-r from-brand-blue to-purple-600 text-white p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-4">
              <Icon name={category.icon} size={28} />
            </div>
            <h1 className="font-montserrat font-extrabold text-3xl md:text-5xl mb-2">
              {category.name}
            </h1>
            <p className="opacity-90">
              {items.length} товар{items.length === 1 ? "" : items.length < 5 ? "а" : "ов"} в наличии
            </p>
          </div>
          <Icon
            name={category.icon}
            size={220}
            className="absolute -right-8 -bottom-8 opacity-15"
          />
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            В этой категории пока нет товаров
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
