import QrCodeImage from "./Images/qr-code.png";
import Qrcode from "./components/Qrcode/Qrcode";
import "./App.scss";

function App() {
  return (
    <section className="app">
      <Qrcode
        src={QrCodeImage}
        alt="Qr Code"
        title="Improve your front-end skills by building projects"
        text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </section>
  );
}

export default App;
