import { ChangeEvent, FormEvent, useState } from "react";
import Main from "../../components/Main";
import { FormDetails } from "./NewProduct";
import Loader from "../../shared/Loader";

const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

interface ProdDetails extends Required<FormDetails> {}

const ProductManagement = () => {
  const [name, setName] = useState<ProdDetails["name"]>("Puma Shoes");
  const [price, setPrice] = useState<ProdDetails["price"]>(2000);
  const [stock, setStock] = useState<ProdDetails["stock"]>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [details, setDetails] = useState<ProdDetails>({
    name,
    price,
    stock,
    photo,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleChange<Property extends keyof FormDetails>(value: FormDetails[Property], property: Property) {
    setDetails({ ...details, [property]: value });
  }

  function onImageHandler(e: ChangeEvent<HTMLInputElement>) {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          //   setPhoto(reader.result);
          setDetails({ ...details, photo: reader.result });
        }
      };
    }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setName(details.name);
      setPrice(details.price);
      setStock(details.stock);
      setPhoto(details.photo);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Main className="product-management">
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <strong>ID - xeghcjtvyun</strong>
            <img src={photo} alt="Product" />
            <p>{name}</p>
            {stock > 0 ? <span className="green">{stock} Available</span> : <span className="red">Not Available</span>}
            <h3>$ {price}</h3>
          </>
        )}
      </section>
      <article>
        <form onSubmit={submitHandler}>
          <h2>New Product</h2>
          <div>
            <label>Name</label>
            <input required type="text" placeholder="Name" value={details.name} onChange={(e) => handleChange(e.target.value, "name")} />
          </div>
          <div>
            <label>Price</label>
            <input required type="number" placeholder="Price" value={details.price} onChange={(e) => handleChange(Number(e.target.value), "price")} />
          </div>
          <div>
            <label>Stock</label>
            <input required type="number" placeholder="Stock" value={details.stock} onChange={(e) => handleChange(Number(e.target.value), "stock")} />
          </div>
          <div>
            <label>Photo</label>
            <input type="file" onChange={(e) => onImageHandler(e)} />
          </div>
          {details.photo && <img src={details.photo} alt="new image" />}
          <button type="submit">Update</button>
        </form>
      </article>
    </Main>
  );
};

export default ProductManagement;
