import { useState } from "react";
import reactLogo from "./assets/invoice.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import InvoiceForm from "./components/InvoiceForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm />
      </Container>
    </div>
  );
}

export default App;
