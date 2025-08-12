import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Panel from "./components/Panel/Panel.jsx";
import { NotesContextProvider } from "./store/NotesContext.jsx";

function App() {
    return (
        <NotesContextProvider>
            <main className="dark wrapper">
                <Sidebar />
                <Panel />
            </main>
        </NotesContextProvider>
    );
}

export default App;
