import Header from "./components/header/Header.jsx";
import CheckboxElement from "./components/checkbox/CheckboxElement.jsx";
import TagElement from "./components/tag/TagElement.jsx";
import TitleBox from "./components/input/TitleBox.jsx";
import DescriptionBox from "./components/input/DescriptionBox.jsx";
import Button from "./components/button/Button.jsx";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CheckboxElement/>
      <TagElement/>
      <TitleBox/>
      <DescriptionBox/>
      <Button text="Button"/>
    </div>
  );
}

export default App;
