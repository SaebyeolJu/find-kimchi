import { createRoot } from "react-dom/client";
import "./css/styles.css";

import Main from "./pages/Main";
import Game from "./pages/Game";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Game />);
