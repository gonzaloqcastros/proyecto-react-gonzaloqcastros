import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../db/firebase-config.js";

const Form = ({ setProducts }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputImage, setInputImage] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();
    const product = {
      title: inputTitle,
      price: inputPrice,
      category: inputCategory,
      description: inputDescription,
      image: inputImage,
    };
    const productsCollectionRef = collection(db, "products");
    await addDoc(productsCollectionRef, product).then(({ id }) => {
      console.log("Documento agregado con ID: ", id);
    });
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setInputTitle("");
    setInputPrice("");
    setInputCategory("");
    setInputDescription("");
    setInputImage("");
  };

  return (
    <form onSubmit={createProduct}>
      <input
        type="text"
        placeholder="titulo"
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setInputDescription(e.target.value)}
        value={inputDescription}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setInputPrice(e.target.value)}
        value={inputPrice}
      />
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setInputCategory(e.target.value)}
        value={inputCategory}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setInputImage(e.target.value)}
        value={inputImage}
      />
      <button type="submit">Crear producto</button>
    </form>
  );
};

export default Form;
