import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection";
import Counter from "./Components/Counter";

function App() {
  return (
    <section className="App">
      <Header></Header>
      <Counter></Counter>
      <MainSection></MainSection>
      <Footer />
    </section>
  );
}

export default App;
