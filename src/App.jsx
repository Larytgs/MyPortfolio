import Header from "./componentes/Header";
import Firstmain from "./componentes/pages/Firstmain";
import Presentation from "./componentes/pages/Presentation";
import Skills from "./componentes/Skills";
import Knowledge from "./componentes/pages/Knowledge";
import Projects from "./componentes/pages/Projects";

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
