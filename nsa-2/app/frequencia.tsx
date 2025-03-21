import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Frequecia() {
    return (
        <View style = {estilos.pagina}>
            <Text style = {estilos.titulo}>Minha Frequecia</Text>

            <View style = {estilos.caixa}>
                <Text style = {estilos.materia}>Matemática</Text>
                <Text style = {estilos.nota}>100% de frequencia</Text>

                <Text style = {estilos.materia}>Português</Text>
                <Text style = {estilos.nota}>80% de frequencia</Text>

                <Text style = {estilos.materia}>História</Text>
                <Text style = {estilos.nota}>70% de frequencia</Text>
            </View>

            <Link href = "/home" asChild>
                <TouchableOpacity style = {estilos.botao}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
            </Link>
  </View>
    )
}

const estilos = StyleSheet.create ({
    pagina: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
    },
    
    titulo: {
        fontSize: 28,
        fontWeight: "bold", 
        marginBottom: 20,
    },
    
    caixa: {
        width: "40%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        alignItems: "center",
    },
    
    materia: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 3,
    },
    
    nota: {
        fontSize: 16,
        marginTop: 5,
    },
    
    botao: {
        backgroundColor: "gray",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
    }
})