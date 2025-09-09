import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const iconsList = {
    lazer: {
        icon: "party-popper",
        bgColor: "#6C63FF",
    },
    alimentação: {
        icon: "silverware-fork-knife",
        bgColor: "#E74C3C"
    },
    saude: {
        icon: "heart-pulse",
        bgColor: "#27AE60"
    },
    transporte: {
        icon: "bus",
        bgColor: "#3498DB"
    },
};

const RenderIconTransaction = ({
    category,
    size = 26,
}) => {
    const iconName = iconsList[category].icon || "dots-horizontal-circle-outline";

    return (
        <View
            style={[styles.iconCategoryContainer, { backgroundColor: iconsList[category].bgColor }]}>
            <MaterialCommunityIcons name={iconName} size={size} />
        </View >
    );
};

export default RenderIconTransaction;

const styles = StyleSheet.create({
    iconCategoryContainer: {
        borderRadius: 35,
        width: 45,
        height: 45,
        margin: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
})