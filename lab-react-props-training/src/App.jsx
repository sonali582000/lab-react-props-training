import "./App.css";
import Card from "./IdCard";
import Greeting from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";

function App() {
  return (
    <>
      <Card
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Card
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="en">World</Greeting>
      <Greeting lang="fr">Francois</Greeting>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </>
  );
}

export default App;
