import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import "./App.css";
import Layout from "./components/ui/layout";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
