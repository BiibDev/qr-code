import IQrcode from "./IQrcode";
import "./Qrcode.scss";

function Qrcode(props: IQrcode) {
  const { src, alt, title, text } = props;

  return (
    <div className="qrcode">
      <div className="image">
        <img src={src} alt={alt} />
      </div>
      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Qrcode;
