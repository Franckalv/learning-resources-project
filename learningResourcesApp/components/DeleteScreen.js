import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const DeleteScreen = () => {
  const [id, setId] = useState('');

  const deleteProduct = () => {
    axios
      .delete(`https://670a9f16ac6860a6c2ca0765.mockapi.io/api/resources/resources/${id}`)
      .then(() => alert('Resource deleted'))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Resource ID"
        value={id}
        onChangeText={setId}
      />
      <Button title="Delete" onPress={deleteProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default DeleteScreen;