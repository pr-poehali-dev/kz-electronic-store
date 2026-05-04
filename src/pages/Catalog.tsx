import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { categories, products } from "@/data/products";

const Catalog = () => {
  const [activeCat, setActiveCat] = useState<string>("all");
  const [sort, setSort] = useState<string>("popular");

  const filtered = useMemo(() => {
    let list = activeCat === "all" ? products : products.filter((p) => p.category === activeCat);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "popular") list = [...list].sort((a, b) => Number(b.popular ?? 0) - Number(a.popular ?? 0));
    return list;
  }, [activeCat, sort]);

  return (
    <Layout>
      <div className="container py-8">
        <nav className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-blue">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Каталог</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl">
            Каталог товаров
          </h1>
          <div className="flex items-center gap-3">
            <label className="text-sm text-muted-foreground">Сортировка:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 px-3 rounded-xl bg-white border border-border outline-none focus:border-brand-blue"
            >
              <option value="popular">Популярные</option>
              <option value="price-asc">Сначала дешёвые</option>
              <option value="price-desc">Сначала дорогие</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCat("all")}
            className={`px-4 h-10 rounded-xl font-medium transition ${
              activeCat === "all"
                ? "bg-brand-dark text-white"
                : "bg-brand-gray hover:bg-gray-200"
            }`}
          >
            Все ({products.length})
          </button>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.id).length;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`px-4 h-10 rounded-xl font-medium transition flex items-center gap-2 ${
                  activeCat === c.id
                    ? "bg-brand-blue text-white"
                    : "bg-brand-gray hover:bg-gray-200"
                }`}
              >
                <Icon name={c.icon} size={16} />
                {c.name} ({count})
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Товары не найдены
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Catalog;
