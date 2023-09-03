import { Material3ThemeProvider } from "@/lib/Material3ThemeProvider";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Material3ThemeProvider sourceColor="#fbc02d">
      <Slot />
    </Material3ThemeProvider>
  );
}
