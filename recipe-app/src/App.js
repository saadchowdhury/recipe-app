import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'

import './App.css';

const App = () =>{

  const APP_ID = 'a6db644b';
  const APP_KEY = '6c497d955f5b5beb1a220b2a05d79705';
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

   

  useEffect(() => {
    getrecipes();
  },[query])

  const getrecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className = "App">
      <form  onSubmit ={getSearch} className = "search-form">
        <input className = "search-bar" type="text" value = {search} onChange={updateSearch} ></input>
        <button className = "search-button" type="submit">Search</button>
      </form>
      <div className = "Recipes">
        {recipes.map(rec =>(
          <Recipe 
          key = {rec.recipe.label}
          title = {rec.recipe.label} 
          calories = {rec.recipe.calories}
          image = {rec.recipe.image}
          ingredients = {rec.recipe.ingredients}
          healthLabels = {rec.recipe.healthLabels}
          ></Recipe>
        )
        )}
      </div>
    </div>
  )
}

export default App;
