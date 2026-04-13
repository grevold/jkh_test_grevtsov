import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { LayoutMain } from "./components/Layouts/LayoutMain/LayoutMain";
import { MainPage } from "./pages/MainPage/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
