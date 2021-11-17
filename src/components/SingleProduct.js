import { Card } from "react-bootstrap";
import { CartState } from "../components/context/Context";
import CardImage from "../components/CardContainer/CardImage/CardImage"
import CardTitle from "../components/CardContainer/CardTitle/CardTitle"
import CardSubTitle from "../components/CardContainer/CardSubTitle/CardSubTitle"
import AddCart from "../components/Cart/AddCart"
import RemoveCart from "../components/Cart/RemoveCart"

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <CardImage prod={prod} />
        <Card.Body>
          <CardTitle prod={prod} />
          <CardSubTitle prod={prod} />
          {cart.some((p) => p.id === prod.id) ? (
            <RemoveCart prod={prod} dispatch={dispatch} />
          ) : (
            <AddCart prod={prod} dispatch={dispatch} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
