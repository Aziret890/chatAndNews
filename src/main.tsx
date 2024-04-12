import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FireBaseInit from "./firebace/firebse.ts";

FireBaseInit();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
