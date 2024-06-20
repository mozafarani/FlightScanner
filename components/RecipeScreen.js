import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

// Mock AI function to get recipes based on ingredients
const getRecipes = (ingredients) => {
  // This is a mock function. Replace with actual API call.
  return [
    {
      id: "1",
      name: "Spaghetti Carbonara",
      ingredients: "Spaghetti, Eggs, Parmesan Cheese, Pancetta",
    },
    {
      id: "2",
      name: "Chicken Alfredo",
      ingredients: "Chicken, Fettuccine, Alfredo Sauce, Parmesan Cheese",
    },
    {
      id: "3",
      name: "Vegetable Stir Fry",
      ingredients: "Broccoli, Bell Peppers, Carrots, Soy Sauce",
    },
  ].filter((recipe) =>
    recipe.ingredients.toLowerCase().includes(ingredients.toLowerCase())
  );
};

export default function RecipeScreen() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleGetRecipes = () => {
    const suggestedRecipes = getRecipes(ingredients);
    setRecipes(suggestedRecipes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Cooking Recipe App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <Button title="Get Recipes" onPress={handleGetRecipes} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipe}>
            <Text style={styles.recipeName}>{item.name}</Text>
            <Text style={styles.recipeIngredients}>{item.ingredients}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  recipe: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  recipeIngredients: {
    fontSize: 14,
    color: "gray",
  },
});
