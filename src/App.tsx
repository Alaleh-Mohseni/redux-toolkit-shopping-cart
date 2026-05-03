import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { fetchProducts } from "./api/cart";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, [search]);

  async function loadProducts() {
    const data = await fetchProducts(search);
    setProducts(data);
  }

  return (
    <Provider store={store}>
      <Navbar search={search} onSearchChange={setSearch} />
      <ProductList>
        {products.map((item: any) => (
          <div key={item.id}>
            <Product {...item} />
          </div>
        ))}
      </ProductList>
    </Provider>
  );
}

export default App;
