import React from "react";
import Home from "./screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppEntry: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default AppEntry;
