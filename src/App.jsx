import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>

      <div className="flex justify-between">
    <GreetingCards title={"Happy Birthday"} message={"Wishing you a fantastic day filled with joy"}/>
      <GreetingCards title={"Happy Birthday"} message={"Wishing you a fantastic day filled with joy"}/>
      <GreetingCards title={"Happy Birthday"} message={"Wishing you a fantastic day filled with joy"}/>
      </div>
      
    </div>
  );
};
export default App;
