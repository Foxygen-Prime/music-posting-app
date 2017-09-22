import React, { Component } from 'react';
import PlayList from './PlayList'
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'


export default class App extends Component {
render(){
return(
  <div className="App">
  <NavBar/>
  <PlayListForm/>
  <PlayList/>
  </div>
    );
  }
}
