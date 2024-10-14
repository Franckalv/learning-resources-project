import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import axios from "axios";

const DeleteScreen = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = () => {
    axios
      .get("https://670a9f16ac6860a6c2ca0765.mockapi.io/api/resources/resources")
      .then((response) => setResources(response.data))
      .catch((error) => console.error(error));
  };

  const deleteResource = (id) => {
    axios
      .delete(`https://670a9f16ac6860a6c2ca0765.mockapi.io/api/resources/resources/${id}`)
      .then(() => {
        alert('Resource deleted');
        fetchResources(); // Refresh the list after deletion
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={resources}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteResource(item.id)} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.titulo}</Text>
            <Text style={styles.itemDescription}>{item.descripcion}</Text>
            <Text style={styles.itemType}>Type: {item.tipo}</Text>
            <Text style={styles.itemLink}>Link: {item.enlace}</Text>
            <Image source={{ uri: item.imagen }} style={styles.itemImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
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

export default DeleteScreen;