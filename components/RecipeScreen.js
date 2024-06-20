import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import RecipesCard from "./RecipesCard";
import RecipesInfo from "./RecipesInfo";

// Mock AI function to get recipes based on ingredients
const getRecipes = (ingredients) => {
  // This is a mock function. Replace with actual API call.
  return [
    {
      id: "1",
      name: "Spaghetti Carbonara",
      ingredients: "Spaghetti, Eggs, Parmesan Cheese, Pancetta",
      shortInfo: "A classic Italian pasta dish",
      details: "Detailed instructions and ingredients for Spaghetti Carbonara.",
      image: "3zooma.jpg",
    },
    {
      id: "2",
      name: "Chicken Alfredo",
      ingredients: "Chicken, Fettuccine, Alfredo Sauce, Parmesan Cheese",
      shortInfo: "Creamy and delicious",
      details: "Detailed instructions and ingredients for Chicken Alfredo.",
      image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
    },
    {
      id: "3",
      name: "Vegetable Stir Fry",
      ingredients: "Broccoli, Bell Peppers, Carrots, Soy Sauce",
      shortInfo: "A healthy vegetable dish",
      details: "Detailed instructions and ingredients for Vegetable Stir Fry.",
      image: "https://cookieandkate.com/images/2019/04/vegetable-stir-fry-recipe-4-768x1153.jpg",
    },
  ].filter((recipe) =>
    recipe.ingredients.toLowerCase().includes(ingredients.toLowerCase())
  );
};

export default function RecipeScreen() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleGetRecipes = () => {
    const suggestedRecipes = getRecipes(ingredients);
    setRecipes(suggestedRecipes);
  };

  const handleRecipePress = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <ImageBackground
      source={{ uri: "https://path-to-your-background-image.jpg" }}
      style={styles.background}
    >
      <View style={styles.container}>
        {selectedRecipe ? (
          <RecipesInfo recipe={selectedRecipe} />
        ) : (
          <>
            <Text style={styles.title}>Recipes</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter ingredients"
              value={ingredients}
              onChangeText={setIngredients}
            />
            <TouchableOpacity style={styles.button} onPress={handleGetRecipes}>
              <Text style={styles.buttonText}>Get Recipes</Text>
            </TouchableOpacity>
            <FlatList
              data={recipes}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <RecipesCard recipe={item} onPress={handleRecipePress} />
              )}
            />
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
