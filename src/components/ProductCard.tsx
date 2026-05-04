import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success("Добавлено в корзину", { description: product.name });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group bg-white rounded-2xl border border-border overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square bg-brand-gray overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-orange text-white">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-montserrat font-extrabold text-lg">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="w-full h-10 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition"
          >
            <Icon name="ShoppingCart" size={16} />
            В корзину
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
