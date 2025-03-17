import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text, Icon } from "@ui-kitten/components";

const WalletCard = () => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={require("../assets/images/bg.jpg")} // Background Gradient
        style={styles.card}
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={styles.balanceContainer}>
          <View>
            <Text category="s2">Saldo</Text>
            <Text category="h5" style={styles.balanceText}>
              IDR 895.500,00
            </Text>
          </View>
          <View style={styles.pointContainer}>
            <Icon name="star" fill="#F6B92B" style={styles.starIcon} />
            <Text category="s1" style={styles.pointText}>
              9.500
            </Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon name="credit-card" fill="#fff" style={styles.menuIcon} />
            </View>
          </View>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon name="swap-outline" fill="#fff" style={styles.menuIcon} />
            </View>
          </View>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon
                name="shopping-bag-outline"
                animation="pulse"
                fill="#fff"
                style={styles.menuIcon}
              />
            </View>
          </View>
          <View style={styles.menuItemContainer}>
            <View style={styles.menuItemWrapper}>
              <Icon
                name="camera-outline"
                animation="pulse"
                fill="#fff"
                style={styles.menuIcon}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    width: "100%",
    height: 200,
    justifyContent: "space-around",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 20,
  },
  balanceText: {
    fontWeight: "bold",
    marginTop: 5,
  },
  pointContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  pointText: {
    fontWeight: "bold",
    color: "#F5A623",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  menuIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#F5A623",
    borderRadius: 100,
  },

  menuItemContainer: {
    alignItems: "center",
  },
  menuItemWrapper: {
    backgroundColor: "#F5A623",
    borderRadius: 100,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
});

export default WalletCard;
