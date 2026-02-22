import DemoCard from "@/features/DemoCard";
import { setClipboard } from "./utils/setClipboard";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { useEffect, useRef } from "react";
import { fetchNui } from "./utils/fetchNui";

function App() {
  const initialized = useRef(false);

  useNuiEvent("setClipboard", (data: string) => {
    setClipboard(data);
  });

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const timer = setTimeout(() => {
      fetchNui("app:ready").catch(() => {
        console.warn("Failed to notify Lua that app is ready");
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="m-auto container flex items-center h-screen">
      <DemoCard />
    </div>
  );
}

export default App;
