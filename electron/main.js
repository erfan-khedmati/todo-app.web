import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import dotEnv from "dotenv";

dotEnv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "./preload.js")
        }
    });

    process.env.MODE === "Development" ? window.loadURL(process.env.APPLICATION_URL) : window.loadFile(path.join(__dirname, "../dist/index.html"));

}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})