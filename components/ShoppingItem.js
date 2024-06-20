import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ShoppingItem = ({ item, onToggleBought, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onToggleBought(item.id)}
        style={styles.checkbox}
      >
        <Icon
          name={item.bought ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.bought ? "#28a745" : "gray"}
        />
      </TouchableOpacity>
      <View style={styles.itemDetails}>
        <Text style={[styles.itemText, item.bought && styles.itemBought]}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.deleteButton}
      >
        <Icon name="trash" size={24} color="#ff6347" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  checkbox: {
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
  itemBought: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default ShoppingItem;
