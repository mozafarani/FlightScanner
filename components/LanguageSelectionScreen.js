import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import backgroundImage from "../assets/main.webp"; // Ensure this path is correct

const { height } = Dimensions.get("window");

export default function LanguageSelectionScreen({ navigation }) {
  const handleLanguageSelection = (language) => {
    navigation.navigate("Login", { language });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        imageStyle={styles.imageStyle}
      />
      <View style={styles.curvedContainer}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Select Language</Text>
          <TouchableOpacity
            style={[styles.button, styles.englishButton]}
            onPress={() => handleLanguageSelection("EN")}
          >
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.arabicButton]}
            onPress={() => handleLanguageSelection("AR")}
          >
            <Text style={styles.buttonText}>العربية</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0", // Soft cream background
  },
  image: {
    width: "100%",
    height: height * 0.6, // Cover more than half of the screen
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  curvedContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  form: {
    width: "90%",
    alignItems: "center",
  },
  formTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4A4A4A", // Dark grey for better readability
  },
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  englishButton: {
    backgroundColor: "#FF7F50", // Green color for English button
  },
  arabicButton: {
    backgroundColor: "#FF7F50", // Red color for Arabic button
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
