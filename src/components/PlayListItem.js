import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    let border ={
      "borderStyle":"solid",
      "borderColor":"black",
      "borderWidth":"1px"
      }

    let songs = this.props.arr.map((song, index)=>{
      return (
      <div className="item">
      <div style={border} key={index}>
      <div className="items"> UserName: {song.userName} </div>
        <br></br>
      <div className="items"> Artist: {song.songArtist}</div>
        <br></br>
      <div className="items"> Title: {song.songTitle}</div>
        <br></br>
      <div className="items"> Notes: {song.songNotes}</div>
    </div>
  </div>
    )
  })

  return(
    <div>
      {songs}
    </div>
  );
  }
}
