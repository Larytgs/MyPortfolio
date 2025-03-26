import Firstmain from "./componentes/Firstmain";
import Presentation from "./componentes/pages/Presentation";
import Skills from "./componentes/pages/Skills";
import Knowledge from "./componentes/pages/Knowledge";
import Projects from "./componentes/pages/Projects";

function App() {
  return (
    <>
      <div>
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
