import { Icon, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const Progress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.historyContainer}>
        <Icon name="bar-chart-2-outline" fill="#FFD101" style={styles.icon} />
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text category="h6" style={styles.name}>
          Transaksi Bulanan
        </Text>
        <Text category="s2" style={styles.name}>
          Kenaikan penjualan 25% dari sebelumnya
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 10,
    marginTop: 20,
    height: 80,
    marginBottom: 20,
    backgroundColor: "#125297",
  },
  icon: {
    alignItems: "center",   
    justifyContent: "center",
    width: 32,
    height: 32,
  },
  name: {
    color: "#FFD101",
  },
  historyContainer: {
    height: 55,
    width: 55,
    backgroundColor: "white",
    borderRadius: 120,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
});

export default Progress;
