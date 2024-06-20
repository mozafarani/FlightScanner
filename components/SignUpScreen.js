import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ImageBackground,
  Dimensions,
} from "react-native";
import backgroundImage from "../assets/loginImg.webp"; // Ensure this path is correct

const { height } = Dimensions.get("window");

export default function SignUpScreen({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { language } = route.params;

  const handleSignUp = () => {
    if (username && password && password === confirmPassword) {
      alert("Sign Up Successful!");
      navigation.goBack();
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay} />
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            {language === "EN" ? "Sign Up" : "اشتراك"}
          </Text>
          <TextInput
            style={[
              styles.input,
              { textAlign: language === "EN" ? "left" : "right" },
            ]}
            placeholder={language === "EN" ? "Username" : "اسم المستخدم"}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={[
              styles.input,
              { textAlign: language === "EN" ? "left" : "right" },
            ]}
            placeholder={language === "EN" ? "Password" : "كلمة المرور"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={[
              styles.input,
              { textAlign: language === "EN" ? "left" : "right" },
            ]}
            placeholder={
              language === "EN" ? "Confirm Password" : "تأكيد كلمة المرور"
            }
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>
              {language === "EN" ? "Sign Up" : "اشتراك"}
            </Text>
          </TouchableOpacity>
          {/* <Button
            title={language === "EN" ? "Back" : "عودة"}
            onPress={() => navigation.goBack()}
          /> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    opacity: 0.8,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  formContainer: {
    width: "90%",
    backgroundColor: "#ffffffee", // White with slight transparency
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#4A4A4A",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF7F50", // Vibrant orange color
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
