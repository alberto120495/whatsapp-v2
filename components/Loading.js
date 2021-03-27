import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
