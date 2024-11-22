import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {
  let vijnathi = new TenthStudent();
  vijnathi.telMarks=95;
  vijnathi.hinMarks=82;
  vijnathi.engMarks=76;
  vijnathi.matMarks=96;
  vijnathi.sciMarks=91;
  vijnathi.socMarks=70;

  vijnathi.calculateResult();
  vijnathi.calculateTotal();
  console.log(TenthStudent.passMarks);
  console.log(TenthStudent.aboutTenth());

  let fruits = ["apple","banana","grapes","orange","pomogranate","mango"];
  let vegetables = ["carrot","cucumber","beetroot","potato","onion"];


  return (
    <div className="App">
    <h1>Static, Array methods</h1>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(fruits);
      console.log(fruits.length);
    }}>Array.length</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(fruits);
      console.log(fruits.at(3));
    }}>Array.at</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(fruits.toString());
    }}>Array.tostring</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(fruits.join("-"));
    }}>Array.join</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(vegetables.pop());
      console.log(vegetables);
    }}>Array.pop</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(vegetables.push("Bitter Guard"));
      console.log(vegetables);
    }}>Array.push</button>


    <button type="button" onClick={()=>{
      console.clear();
      console.log(vegetables.shift());
      console.log(vegetables);
    }}>Array.shift</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(vegetables.unshift());
      console.log(vegetables);
    }}>Array.unshift</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(fruits.splice(2,2));
      console.log(fruits)
    }}>Array.splice</button>

    <button type="button" onClick={()=>{
      console.clear();
      console.log(fruits.concat(vegetables));
    }}>Array.concat</button>

    </div>
  );
}

export default App;
