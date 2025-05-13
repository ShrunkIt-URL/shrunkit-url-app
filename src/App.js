import { CreateLinkPage } from "./contexts/link-management/pages/CreateLinkPage";
import { HeaderPage } from "./layouts/header/pages/HeaderPage";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <CreateLinkPage />
    </div>
  );
}


export default App;
