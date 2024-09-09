import { ChangeEvent, useState } from "react";
import Main from "../../components/Main";

interface FormDetails {
  name?: string;
  price?: number;
  stock?: number;
  photo?: string;
}

const NewProduct = () => {
  const [details, setDetails] = useState<FormDetails>({});

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
          setDetails({ ...details, photo: reader.result });
        }
      };
    }
  }

  return (
    <Main className="product-management">
      <article>
        <form>
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
            <input required type="file" onChange={(e) => onImageHandler(e)} />
          </div>
          {details.photo && <img src={details.photo} alt="new image" />}
          <button type="submit">Create</button>
        </form>
      </article>
    </Main>
  );
};

export default NewProduct;
export type { FormDetails };
