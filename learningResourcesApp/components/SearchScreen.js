import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const searchProduct = () => {
    let url = `https://670a9f16ac6860a6c2ca0765.mockapi.io/api/resources/resources`;

    if (isNaN(query)) {
      // If query is not a number, search by name
      url += `?search=${query}`;
    } else {
      // If query is a number, search by ID
      url += `/${query}`;
    }

    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setResult(response.data[0]);
        } else {
          setResult(response.data);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by ID or Name"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={searchProduct} />
      {result && (
        <View style={styles.resultContainer}>
          <View key={result.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{result.titulo}</Text>
            <Text style={styles.itemName}>{result.id}</Text>
            <Text style={styles.itemDescription}>{result.descripcion}</Text>
            <Text style={styles.itemType}>Type: {result.tipo}</Text>
            <Text style={styles.itemLink}>Link: {result.enlace}</Text>
            <Image source={{ uri: result.imagen }} style={styles.itemImage} />
          </View>
        </View>
      )}
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
  resultContainer: {
    marginTop: 16,
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  itemDescription: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  itemType: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  itemLink: {
    fontSize: 14,
    color: "#1e90ff",
    marginTop: 4,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginTop: 8,
  },
});

export default SearchScreen;