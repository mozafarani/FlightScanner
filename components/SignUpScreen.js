import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

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
      <Text style={styles.title}>
        {language === "EN" ? "Sign Up" : "اشتراك"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={language === "EN" ? "Username" : "اسم المستخدم"}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={language === "EN" ? "Password" : "كلمة المرور"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
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
      <Button
        title={language === "EN" ? "Back" : "عودة"}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
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
    textAlign: "left",
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#28a745",
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
