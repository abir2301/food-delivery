import React from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchMeals } from "../services/http";
import MealItem from "./MealItem";
export default function Meals() {
  const { isFetching, fetchedData, error } = useFetch(fetchMeals, []);
  return <ul id="meals">
    {fetchedData.map((meal)=>(
        <li key={meal.id}>
            <MealItem meal={meal}/>
        </li>
    ))}
  </ul>;
}
