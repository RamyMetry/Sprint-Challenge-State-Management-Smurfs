import React, {useEffect} from "react";
import "./App.css";
import {connect} from "react-redux"
import {fetchSumrfs} from "../actions/getSmurfs"
import {handleSubmit} from "../actions/sendSmurfs"
import AddSmurfs from "./Form"



function App(props){
  useEffect(()=>{
      props.fetchSumrfs()
  },[])

  useEffect(()=>{
    props.handleSubmit()
  },[])
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <AddSmurfs/>
        <div>
          {props.Smurfs.map((character)=>(
            <div key={character.id}>
              <h2>{character.name}</h2>
              <h3>{character.age}</h3>
              <h3>{character.height}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }


function mapStateToProps(state){
  return {
    Smurfs : state.smurfs.smurfs,
    SendSmurfs :state.send.data,
    name:state.send.name,
    age:state.send.age,
    height:state.send.height
   
  }
}
const mapDispatchToProps = {
  fetchSumrfs,
  handleSubmit
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
