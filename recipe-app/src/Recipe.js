import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients,healthLabels})=>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3><p>{calories} Calories</p></h3>
            <ol>
                {healthLabels.map(healthLabel => (
                    <li>{healthLabel}</li>
                ))}
            </ol>
            <img className = {style.image}  src={image} alt="this should be an image"></img>
        </div>
    )
}

export default Recipe;