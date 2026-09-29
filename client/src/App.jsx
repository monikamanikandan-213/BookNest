import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import Home from "./pages/Home";
import Library from "./pages/Library";
import Reader from "./pages/Reader";
import Analytics from "./pages/Analytics";


function Navigation() {

    const location = useLocation();

    if (location.pathname === "/") {
        return null;
    }

    return (
        <nav className="navbar">

            <h2>📚 BookNest</h2>

            <div className="nav-links">

                <Link
                    to="/library"
                    className={
                        location.pathname === "/library"
                            ? "active"
                            : ""
                    }
                >
                    📚 Library
                </Link>

                <Link
                    to="/reader"
                    className={
                        location.pathname === "/reader"
                            ? "active"
                            : ""
                    }
                >
                    📖 Reader
                </Link>

                <Link
                    to="/analytics"
                    className={
                        location.pathname === "/analytics"
                            ? "active"
                            : ""
                    }
                >
                    📊 Analytics
                </Link>

            </div>

        </nav>
    );
}


function App() {

    return (
        <BrowserRouter>

            <Navigation />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/library"
                    element={<Library />}
                />

                <Route
                    path="/reader"
                    element={<Reader />}
                />

                <Route
                    path="/analytics"
                    element={<Analytics />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;