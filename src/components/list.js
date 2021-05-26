import React from 'react';

class SongList extends React.Component{
    constructor(props){
        super(props);
        
    }
    deleteSong =() =>{
        this.props.deleteSong(this.props.item.id);
      // alert("dsdf")
    }
    editSong=()=>{
        this.props.editSong(this.props.item);
    }
    render(){
        return(
            <div className="list" key={this.props.item.id}>
               <div className="song-name">{this.props.item.song_name}</div><div className="album-name">{this.props.item.album_name}</div><div className="lyric">{this.props.item.lyric_text}</div>
               <div className="edit btn"><input type="button" value="Edit" onClick={this.editSong} /></div><div className="delete btn"><input type="button" value="Delete" onClick={this.deleteSong} /></div>
            </div>
        )
    }
}
export default SongList;