import { Layout } from "@ui-kitten/components";
import Header from "./header";
import WalletCard from "./wallet_card";
import Progress from "./progress";
import MenuGrid from "./menu_grid";

const HomeScreen = () => {
  return (
    <>
      <Layout>
        <Header />
      </Layout>
      <Layout>
        <WalletCard />
      </Layout>
      <Layout>
        <Progress />
      </Layout>
      <Layout>
        <MenuGrid />
      </Layout>
    </>
  );
};

export default HomeScreen;
