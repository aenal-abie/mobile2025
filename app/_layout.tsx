import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { Stack } from "expo-router";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

export default function RootLayout() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={eva.light}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ApplicationProvider>
    </>
  );
}
