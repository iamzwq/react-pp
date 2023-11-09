import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "virtual:uno.css";
import "@/styles/reset.css";

const char = `
______    _______  _______  _______  _______         _______  _______  _______ 
|    _ |  |       ||   _   ||       ||       |       |   _   ||       ||       |
|   | ||  |    ___||  |_|  ||       ||_     _| ____  |  |_|  ||    _  ||    _  |
|   |_||_ |   |___ |       ||       |  |   |  |____| |       ||   |_| ||   |_| |
|    __  ||    ___||       ||      _|  |   |         |       ||    ___||    ___|
|   |  | ||   |___ |   _   ||     |_   |   |         |   _   ||   |    |   |    
|___|  |_||_______||__| |__||_______|  |___|         |__| |__||___|    |___| 
`;
console.info(`%c${char}`, "color: #a855f7");

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
