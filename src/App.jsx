import Header from "./componentes/Header";
import Firstmain from "./componentes/Firstmain";
import Presentation from "./componentes/Presentation";
import Skills from "./componentes/Skills";
import Knowledge from "./componentes/estilização/Knowledge";
import Projects from "./componentes/Projects";

function App() {
  return (
    <>
      <div>
        <Header />
        <Firstmain />
        <Presentation />
        <Skills />
        <Knowledge />
        <Projects />
      </div>
    </>
  );
}

export default App;
