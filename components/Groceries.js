import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ShoppingItem from "./ShoppingItem";

const Groceries = () => {
  const [groceryItem, setGroceryItem] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const addGroceryItem = () => {
    if (groceryItem.trim()) {
      setGroceryList([
        ...groceryList,
        {
          id: Date.now().toString(),
          name: groceryItem,
          bought: false,
        },
      ]);
      setGroceryItem("");
    }
  };

  const toggleBought = (id) => {
    setGroceryList(
      groceryList.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const deleteGroceryItem = (id) => {
    setGroceryList(groceryList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping list</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter grocery item"
          value={groceryItem}
          onChangeText={setGroceryItem}
        />
        <TouchableOpacity style={styles.iconButton} onPress={addGroceryItem}>
          <Icon name="add-circle" size={30} color="#FF7F50" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={groceryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShoppingItem
            item={item}
            onToggleBought={toggleBought}
            onDelete={deleteGroceryItem}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default Groceries;
