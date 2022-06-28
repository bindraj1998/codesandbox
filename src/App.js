import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
   const [dat,setdata]=useState(data)
   const [final,setfinal]=useState([dat[0]])
   const [count,setcount]=useState(0)
  const handleclick=()=>{
    // for(var i=0;i<data.length;i++){
    //   console.log(data[0].id)
    // }
    //  setdata(data.id)
    // console.log(dat.length)
    if(count!=dat.length-1){
      setcount(count+1)
    }
    

    
      setfinal([dat[count]]) 
    
// console.log(dat[0])
   
  }
  const handlepre=()=>{
    if(count>0){
      setcount(count-1)
    }
    

    
      setfinal([dat[count]]) 
  }
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      {final.map((el)=>(
        <Slide el={el}/>
      ))}
      {/* {count} */}
      <button data-testid="prev" disabled={count<0} onClick={handlepre}>Prev</button>
      <button data-testid="next" disabled={count>2} onClick={handleclick}>Next</button>
    </div>
  );
}
