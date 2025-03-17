import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Icon } from "@ui-kitten/components";

const Header = () => {
  return (
    <Layout style={styles.container}>
      <View>
        <Text category="s2" appearance="hint">
          Assalamualaikum
        </Text>
        <Text category="h5" style={styles.name}>
          Karameena
        </Text>
      </View>
      <Icon name="bell-outline" fill="#000" style={styles.icon} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  name: {
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
