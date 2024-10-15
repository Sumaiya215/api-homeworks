const loadRecipes = async() => {
    const res = await fetch('https://dummyjson.com/recipes');
    const json = await res.json();
    console.log(json.recipes);

}

loadRecipes();