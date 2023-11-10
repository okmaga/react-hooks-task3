import { useHover } from "./useHover";
function App() {
  const { hovered, ref } = useHover();

  return (
    <div
      style={{
        height: "50px",
        width: "500px",
        backgroundColor: hovered ? "lightgreen" : "#ccc",
        textAlign: "center",
        verticalAlign: "center",
        lineHeight: "50px"
      }}
      ref={ref}
    >
      {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
    </div>
  );
}

export default App;
