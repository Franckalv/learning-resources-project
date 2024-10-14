import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const ModifyScreen = () => {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [enlace, setEnlace] = useState("");
  const [imagen, setImagen] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const searchProduct = () => {
    axios
      .get(`https://670a9f16ac6860a6c2ca0765.mockapi.io/api/resources/resources/${id}`)
      .then((response) => {
        const { titulo, descripcion, tipo, enlace, imagen } = response.data;
        setTitulo(titulo);
        setDescripcion(descripcion);
        setTipo(tipo);
        setEnlace(enlace);
        setImagen(imagen);
        setIsEditing(true);
      })
      .catch((error) => console.error(error));
  };

  const modifyProduct = () => {
    axios
      .put(`https://670a9f16ac6860a6c2ca0765.mockapi.io/api/resources/resources/${id}`, { titulo, descripcion, tipo, enlace, imagen })
      .then(() => {
        alert('Resource modified');
        // Reset all states to initial values
        setId("");
        setTitulo("");
        setDescripcion("");
        setTipo("");
        setEnlace("");
        setImagen("");
        setIsEditing(false);
      })
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
      <Button title="Search" onPress={searchProduct} />
      {isEditing && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Resource Title"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Resource Description"
            value={descripcion}
            onChangeText={setDescripcion}
          />
          <TextInput
            style={styles.input}
            placeholder="Resource Type"
            value={tipo}
            onChangeText={setTipo}
          />
          <TextInput
            style={styles.input}
            placeholder="Resource Link"
            value={enlace}
            onChangeText={setEnlace}
          />
          <TextInput
            style={styles.input}
            placeholder="Resource Image URL"
            value={imagen}
            onChangeText={setImagen}
          />
          <Button title="Modify" onPress={modifyProduct} />
        </>
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
});

export default ModifyScreen;