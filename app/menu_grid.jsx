import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";

const menuItems = [
  { icon: "bar-chart-outline", title: "Pulse" },
  { icon: "globe-outline", title: "Internet" },
  { icon: "phone-outline", title: "Phone" },
  { icon: "droplet-outline", title: "Water" },
  { icon: "flash-outline", title: "Electricity" },
  { icon: "credit-card-outline", title: "Insurance" },
  { icon: "play-circle-outline", title: "Game" },
  { icon: "more-horizontal-outline", title: "More" },
];

const MenuGrid = () => {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <View style={styles.iconContainer}>
            <Icon name={item.icon} fill="#FFD101" style={styles.icon} />
          </View>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  menuItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    height: 55,
    width: 55,
    backgroundColor: "#F7F7F7",
    borderRadius: 120,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default MenuGrid;
