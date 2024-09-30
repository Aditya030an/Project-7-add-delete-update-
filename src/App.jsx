import "./App.css";
import ListDisplay from "./Components/ListDisplay";
import Form from "./Components/Form.jsx";
import { useSelector } from "react-redux";

function App() {
  const showForm = useSelector((store) => store.healthCareData.showForm);

  return (
    <div className="relative">
      <ListDisplay />
      {showForm ? (
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-lg overflow-hidden">
          <Form />
        </div>
      ) : null}
    </div>
  );
}

export default App;
