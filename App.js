import { useRef, useState } from "react";

const Buttons=function ({musickey,onClick}){
  return(
    <button onClick={onClick}>{musickey}</button>
  )

}

/*const Bmusic=function(){
  let y=useRef(null)
  return(
    
  <audio ref={y} id="bmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>
  )
}
*/
/*function smusic(){
  y.current.play();
}
*/

//i need to comment out code above as ofr useref the ref should be declared inside the component in which i need to use that
//here i declared ref in another component and need to use it in app component which caused some bug , so chnaged code

function App() {
  let q=useRef(null)
  let w=useRef(null)
  let e=useRef(null)
  let a=useRef(null)
  let s=useRef(null)
  let d=useRef(null)
  let z=useRef(null)
  
  let x=useRef(null)
  
  let c=useRef(null)

  //let screen=useRef("")

  const [screen, setScreen] = useState("");
 
  function qmusic(){
    q.current.play();
  
    setScreen("Q"); // Update state, which triggers a re-render
  
    //screen.current="s"
  }

  function wmusic(){
  w.current.play();
  setScreen("W"); 
  }

  function emusic(){
    e.current.play()
    setScreen("E"); ;
    }
    function amusic(){
      a.current.play();
      setScreen("A"); 
      }

      function smusic(){
        s.current.play();
        setScreen("S"); 
      
      }

      function dmusic(){
        d.current.play();
        setScreen("D"); 
      }

      function zmusic(){
        z.current.play();
        setScreen("A"); 
      }

      function xmusic(){
        x.current.play();
        setScreen("X"); 
      }

      function cmusic(){
        c.current.play();
        setScreen("C"); 
      }

      const handleKeyDown = (event) => {
        const pressedKey = event.key; // Ensure case-insensitive comparison
        switch (pressedKey) {
          case "Q":
          case "q":
            qmusic();
            break;
          case "W":
          case "w":
            wmusic();
            break;
            
             case "e":
          case "E":
            emusic();
            break;
            
             case "a":
          case "A":
            amusic();
            break;
            
             case "s":
          case "S":
            smusic();
            break;
            
             case "D":
          case "d":
            dmusic();
            break;
            
             case "z":
          case "Z":
            zmusic();
            break;
            
             case "x":
          case "X":
            xmusic();
            break;
            
             case "C":
          case "c":
            cmusic();
            break;
            
          // ... Add similar cases for other keys (E, A, S, D, Z, X, C)
          default:
            break;
        }
      };
    



  
  return (
    <div id="drum-machine" className="drumApp" onKeyDown={handleKeyDown}>
      <div id="display">
        <h2>{screen}</h2>
        </div>
        
        <audio ref={q} id="smus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

  <audio ref={w} id="wmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

  <audio ref={e} id="wmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>
    
  <audio ref={a} id="wmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

  <audio ref={s} id="wmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

  <audio ref={d} id="wmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

  <audio ref={z} id="zmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

  <audio ref={x} id="xmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

  <audio ref={c} id="cmus" controls>
    <source src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" type="audio/mpeg"/><h4>piano</h4>
  </audio>

      <div id="row1">
      <Buttons className="drum" musickey="Q" onClick={qmusic} />
      <Buttons className="drum" musickey="w" onClick={wmusic}/>
      <Buttons className="drum"  musickey="e" onClick={emusic}/>
      </div>
     
      <div id="row2">
      <Buttons className="drum" musickey="a" onClick={amusic}/>
      <Buttons className="drum" musickey="s" onClick={smusic}/>
      <Buttons className="drum" musickey="d" onClick={dmusic}/>
      </div>
      <div id="row3">
      <Buttons className="drum" musickey="z" onClick={zmusic}/>
      <Buttons className="drum" musickey="x" onClick={xmusic}/>
      <Buttons className="drum" musickey="c" onClick={cmusic}/>
      </div>
      </div>

    

  );
}

export default App;

