import React, { useEffect } from "react";
import "./App.css";
import {FetchData,addSmurfs} from "../actions/getSmurfs"
import { connect } from "react-redux";
import SmurfForm from "./Form"


function App(props){
 useEffect(()=>{
  props.FetchData()
 },[])
    return (
      <div className="App">
        <SmurfForm addSmurfs={props.addSmurfs}/>
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
    return{
      Smurfs:state.smurfs.smurfs,
      AddSmurfs:state.smurfs.smurfs
    }
  }

  const mapDispatchToProps={
    FetchData,
    addSmurfs
  }


export default connect(mapStateToProps,mapDispatchToProps)(App);
