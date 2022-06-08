import { createRoot } from "react-dom/client";
import "./css/styles.css";

import Main from "./pages/Main";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Main />);
