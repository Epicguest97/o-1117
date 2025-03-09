
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id?: number;
  name: string;
  price: string;
  image: string;
  equipmentCount?: number;
  rating?: number;
  reviews?: number;
}

const ProductCard = ({ id = 1, name, price, image, equipmentCount }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-primary">{name}</h3>
        <p className="text-accent mt-1">{price}</p>
        {equipmentCount !== undefined && (
          <p className="text-sm text-accent mt-2">
            Part of {equipmentCount} equipment collection
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
