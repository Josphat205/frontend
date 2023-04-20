import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await axios.get("http://localhost:5000/recipes");
    setRecipes(response.data);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="py-2" />
        <div className="py-12 w-100">
          {recipes.map(recipe =>
            <Link
              key={recipe._id}
              to="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={recipe.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {recipe.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {recipe.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {recipe.ingredients.map(ingredient =>
                    <li>
                      {ingredient}
                    </li>
                  )}
                </p>
              </div>
            </Link>
          )}
        </div>
        <div className="py-2" />
      </div>
    </div>
  );
};

export default home;
