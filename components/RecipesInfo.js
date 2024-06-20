import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const RecipesInfo = ({ recipe }) => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: recipe.image }} 
        style={styles.image} 
        onError={(e) => console.log(e.nativeEvent.error)}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.details}>{recipe.details}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: "gray",
  },
});

export default RecipesInfo;
