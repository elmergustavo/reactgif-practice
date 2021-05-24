import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <div className="divTitle">
        <h2 className="app-title animate__animated animate__backInLeft">
          Tavcode
          Buscador de Gifs
        </h2>
        <div className="divSub">
          <a className="app-sub animate__animated animate__backInRight" href="https://elmergustavo.github.io/">
            Elmer Gustavo
          </a>
        </div>
      </div>
      <p className="searchTxt">Busca tus gifs favoritos...</p>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
