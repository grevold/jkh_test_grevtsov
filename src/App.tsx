import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { LayoutMain } from "./components/Layouts/LayoutMain/LayoutMain";
import { MainPage } from "./pages/MainPage/MainPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutMain>
              <MainPage />
            </LayoutMain>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
