import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const RecipesCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(recipe)}>
      <Image 
        source={{ uri: recipe.image }} 
        style={styles.image} 
        onError={(e) => console.log(e.nativeEvent.error)}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.shortInfo}>{recipe.shortInfo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    width: "100%",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  shortInfo: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});

export default RecipesCard;
