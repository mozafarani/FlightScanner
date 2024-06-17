import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  I18nManager,
} from "react-native";

export default function LoginScreen({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { language } = route.params;

  useEffect(() => {
    if (language === "AR") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  }, [language]);

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate("Recipe");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp", { language });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {language === "EN" ? "Login" : "تسجيل الدخول"}
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {language === "EN" ? "Login" : "تسجيل الدخول"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={handleSignUp}>
        <Text style={styles.linkButtonText}>
          {language === "EN" ? "Sign Up" : "اشتراك"}
        </Text>
      </TouchableOpacity>
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
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007BFF",
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
  linkButton: {
    marginTop: 10,
  },
  linkButtonText: {
    color: "#007BFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
