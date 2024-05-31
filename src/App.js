import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1>
        Hello
      </h1>
      <Todos text="eat food"/><Todos text="write essay"/>
      <Todos text="learn react"/>
    </div>
  );
}

export default App;
