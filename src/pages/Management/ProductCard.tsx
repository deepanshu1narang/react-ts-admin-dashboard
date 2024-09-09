import { Link } from "react-router-dom";
import { OrderItemType } from "../../shared/types";

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <div className="transaction-product-card">
      <img src={photo} alt={name} />
      <Link className="product-link" to={`/products/${_id}`}>
        {name}
      </Link>
      <span>
        ${price} X {quantity} = {price * quantity}
      </span>
    </div>
  );
};

export default ProductCard;
