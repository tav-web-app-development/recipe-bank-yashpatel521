import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Recipe from "../Component/Recipe";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState({});
  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        console.log("unmounted");
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
  }, []);
  return (
    <>
      <Navbar />
      {recipes.length &&
        recipes.map((data) => <Recipe recipe={data} key={data.id} />)}
      <Footer />
    </>
  );
}

export default App;
