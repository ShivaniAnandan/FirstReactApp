import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import "./Styles.css"
function App() {
  return (
    <div>
      <Button btntext="Apple" color="blue" />
      <Button btntext="tomato" color="orange" />
      <Button btntext="Mango" color="yellow">
        <p>Sweetest and most lovable fruit</p>
      </Button>
    </div>
  );
}

export default App;
