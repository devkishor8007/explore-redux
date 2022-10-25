import { useDispatch, useSelector } from "react-redux";
import { increaseId, decreaseId } from "./store/content/ContentSlice";

function App() {
  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{content.topic}</h1>
      <p>{content.description}</p>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            marginRight: "15px",
            width: "50px",
            height: "40px",
            padding: "8px",
          }}
          onClick={(e) => dispatch(increaseId(e.target.value))}
        >
          +
        </button>
        <h1
          style={{
            padding: "8px",
            width: "50px",
            height: "40px",
          }}
        >
          {content.id}
        </h1>
        <button
          style={{
            padding: "8px",
            width: "50px",
            height: "40px",
          }}
          onClick={(e) => {
            console.log(e.target.value);
            dispatch(decreaseId(e.target.value));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
