import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(1);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const uploadImageAPIUrl = import.meta.env.VITE_API_URL;

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file || !name || !stock) {
      setMessage("Seluruh data produk wajib diisi");
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("stock", stock);
    console.log(formData.name, formData.stock);

    try {
      const response = await fetch(`${uploadImageAPIUrl}/products`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);
      setMessage(data.message);
    } catch (err) {
      console.log("Error", err.message);
      setMessage("Error upload file");
    }
  };

  return (
    <>
      <h1>Tambahkan Produk Baru</h1>
      <label htmlFor={"name"}>Nama Produk</label>
      <br />
      <input
        id={name}
        type="text"
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor={"stock"}>Stok</label>
      <br />
      <input
        id={stock}
        type="number"
        placeholder="Stok Produk"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor={"file"}>Pilih gambar</label>
      <input id={file} type="file" onChange={handleImageChange} />
      {preview && (
        <img src={preview} alt="Image Preview" style={{ w: 25, h: 25 }} />
      )}
      <button onClick={handleUpload}>Tambah Produk</button>
      {message && <p>{message}</p>}
    </>
  );
}

export default App;
