import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="fr">Mat</Greetings>
      <Random min={5} max={200} />
    </div>
  );
}

export default App;
