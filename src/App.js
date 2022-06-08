import React from "react";
import "./styles.css";
import { ViewportProvider } from "./components/viewport-provider";
import MyComponent from "./components/my-component";

export default function App() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
