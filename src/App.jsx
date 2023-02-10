import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import {  Route, Routes  } from "react-router-dom";
import Grid from "./components/Grid";
import { db } from "../db/firebase-config.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsCollectionRef = collection(db, "Productos");
  const cartCollectionRef = collection(db, "cart");
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const getCart = async () => {
    const data = await getDocs(cartCollectionRef);
    setCart(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const getProduct = async (id) => {
    const docRef = doc(db, "Productos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const removeFromCart = async (id) => {
    const docRef = doc(db, "cart", id);
    await deleteDoc(docRef);
    const data = await getDocs(cartCollectionRef);
    setCart(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addToCart = async (id) => {
    const docRef = doc(db, "Productos", id);
    const docSnap = await getDoc(docRef);
    const product = docSnap.data();
    await addDoc(cartCollectionRef, product).then(({ id }) => {
      console.log(`Documento con ID ${id} agregado al carrito`);
    });
    setCart([...cart, product]);
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  return (
    <>
        <NavBar products={products} cart={cart} />
        <Container maxW="container.lg">
          <Banner />
          <Routes>
            <Route
              path="/"
              element={
                <Grid
                  loading={loading}
                  products={products}
                  getProduct={getProduct}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                />
              }
            />
            <Route path="/products/:id"
                   element={
                    <ProductCard
                    key={product.id}
                    id={product.id}
                    imagen={product.imagen}
                    nombre={product.nombre}
                    precio={product.precio}
                    descripcion={product.descripcion}
                    type={product.type}
                    getProduct={getProduct}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                } 
                        />
            <Route
              path="/cart"
              element={<Grid loading={loading} products={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </Container>
    </>
  );
}

export default App;