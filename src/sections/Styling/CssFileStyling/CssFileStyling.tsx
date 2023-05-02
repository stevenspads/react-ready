import './Product.css';

type Props = {
  name: string;
  price: number;
};

const Product = ({ name, price }: Props) => {
  return (
    <div className="Product">
      <h1 className="ProductName">{name}</h1>
      <p className="ProductPrice">{price}</p>
    </div>
  );
};

const CssFileStyling = () => {
  return (
    <div className="Example">
      <h3>CSS file styling</h3>
      <Product name="Laptop" price={100} />
    </div>
  );
};

export { CssFileStyling };
