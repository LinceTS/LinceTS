import { Aplication } from "./src/bootstrap/Application";
import { createContext } from './src/bootstrap/AppContext';

const App: Aplication = createContext(3000)
App.startServer();
