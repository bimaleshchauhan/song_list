import React from 'react';

class Popup extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id:props.data.id,
            song_name:props.data.song_name,
            album_name:props.data.album_name, 
            lyric_text:props.data.lyric_text,
        }
    }
    save = (e) =>{
       e.preventDefault();
       console.log("stat", this.state)
       if(this.state.id){
        this.props.updateSong(this.state)
       }
       else{
        this.props.savedetail(this.state)
       }
       
    }
    handleChangeA=(event)=>{
        this.setState({song_name: event.target.value});
    }
    handleChangeB=(event)=>{
        this.setState({album_name: event.target.value});
    }
    handleChangeC=(event)=>{
        this.setState({lyric_text: event.target.value});
    }
    render(){
        return(
            <div className="popup-outer">
                <div className="popup">
                    <form onSubmit={this.save}>
                    <div className="textbox">
                        <label>Song Name</label>
                        <input type="text" name="song_name" value={this.state.song_name} onChange={this.handleChangeA} />
                    </div>
                    <div className="textbox">
                        <label>Album Name</label>
                        <input type="text" name="album_name" value={this.state.album_name} onChange={this.handleChangeB} />
                    </div>
                    <div className="textbox">
                        <label>Lyric</label>
                        <input type="text" name="lyric" value={this.state.lyric_text} onChange={this.handleChangeC} />
                    </div>
                    <div className="add-btn btn text-center">
                        <input type="submit" value={this.props.name}  />
                    </div>
                    </form>
                </div>
                <div className="overloap"></div>
            </div>
            
        )
    }
}
export default Popup;