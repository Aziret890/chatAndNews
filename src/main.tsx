import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FireBaseInit from "./firebace/firebse.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

FireBaseInit();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
