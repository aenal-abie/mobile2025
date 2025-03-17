import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import HomeScreen from "./home_screen";
import BottomNav from "./bottom_nav";

const App = () => {
  return (
    <>
      <Layout style={styles.container}>
        <HomeScreen />
      </Layout>
      <Layout style={styles.bottomNav}>
        <BottomNav />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 16,
  },
  bottomNav: { position: "absolute", bottom: 0, width: "100%" },
});

export default App;
