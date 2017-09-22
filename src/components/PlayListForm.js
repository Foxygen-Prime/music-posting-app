import React, { Component } from 'react';

export default class PlayListForm extends Component {
    constructor(props){
      super(props);

      this.addToList = this.addToList.bind(this)
      this.handleName = this.handleName.bind(this)
      this.handleTitle = this.handleTitle.bind(this)
      this.handleArtist = this.handleArtist.bind(this)
      this.handleNotes = this.handleNotes.bind(this)

      this.state ={
        userName: '',
        songTitle: '',
        songArtist: '',
        songNotes: '',
        }
      }

      handleName(e){
        this.setState({userName:e.target.value})
      }
      handleTitle(e){
        this.setState({songTitle:e.target.value})
      }
      handleArtist(e){
        this.setState({songArtist:e.target.value})
      }
      handleNotes(e){
        this.setState({songNotes:e.target.value})
      }
    addToList = (e) => {
        e.preventDefault()
        this.setState({
          userName: e.target.value,
          songTitle: e.target.value,
          songArtist: e.target.value,
          songNotes: e.target.value
        });

      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }
    render(){
    return (
      <div>
        <form className="form" onSubmit={this.addToList}>
          <label className="formlabel"> User Name: </label>
      <br></br>
        <input className="forminput" type='text' value={this.state.userName} onChange={this.handleName}></input>
       <br></br>
        <label className="formlabel"> Artist Name: </label>
       <br></br>
        <input className="forminput" type='text' value={this.state.songArtist}  onChange={this.handleArtist}></input>
       <br></br>
        <label className="formlabel"> Song Name: </label>
       <br></br>
        <input className="forminput" type='text' value={this.state.songTitle} onChange={this.handleTitle}></input>
       <br></br>
        <label className="formlabel"> Notes: </label>
       <br></br>
        <textarea className="forminput" value={this.state.songNotes} onChange={this.handleNotes}></textarea>
       <br></br>
        <input className="submit" type = 'submit'></input>
        </form>
     </div>
    )
  }
}
