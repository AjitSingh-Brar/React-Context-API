import "./App.css";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ items, product }, dispatch] = useStateValue();

  console.log({ items });

  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      items: items + 1,
    });
  };

  const addProduct = () => {
    const prod = { name: "Toy car", price: 25 };

    console.log({ product });
    
    
    dispatch({
      type: "ADD_PRODUCT",
      product: prod,
    });
  };

  return (
    <div className="App">
      <h1>Quantity: {items}</h1>
      <h2>Total Product: {product?.length}</h2>
      <button onClick={addItem}>ADD</button>
      <button onClick={addProduct}>ADD PRODUCT</button>
    </div>
  );
}

export default App;
