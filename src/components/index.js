import React from 'react';
import ListItem from "./list";
import AddPopup from "./addPopup"
const list = [
    {
        id: "1",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
    {
        id: "2",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
    {
        id: "3",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
    {
        id: "4",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
    {
        id: "5",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
    {
        id: "6",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
    {
        id: "7",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
    {
        id: "8",
        song_name: "Bekhayali",
        album_name: "Kabir Singh",
        lyric_text: "Bekhayali mein bhi tera hi khayal aaye.."
    },
  ];
  const List = (props) => {
    const deleteSong =(id) =>{
        props.deleteSong(id);
    }   
    return(
    <div>
      {props.list.map(item => (
        <ListItem key={item.id} item={item} deleteSong={deleteSong} editSong={(item) =>props.editSong(item)} />
      ))}
    </div>
    )
};
class Songs extends React.Component {
     constructor(props){
         super(props);
         this.state = { list: list, savepopup:false, updatepopup:false, data:{id: "",song_name: "",album_name: "",lyric_text: ""}}
     }
     deleteSong =(id) =>{
        let { list } = this.state;
        let index =  list.findIndex(item =>{
              return item.id===id
        })
        if(index>=0){
            list.splice(index, 1);
            this.setState({
                list: list
            })
        }         
    }
    editSong=(item)=>{
        this.setState({updatepopup:true})
        
        this.setState({
            data:item
        })
        this.setState({
            btnname:"Update"
        })
    }
    addSong =() =>{
        let data={id: "",song_name: "",album_name: "",lyric_text: ""}
       this.setState({savepopup:true})
       this.setState({
        data:data
    })
       this.setState({
        btnname:"Save"
    })
    }
    saveDetails=(data) =>{
        console.log("save")
        data.id=Date.now()
        list.push(data)
        this.setState({
            list: list
        })
        this.setState({savepopup:false})
    }
    updateSong=(data) =>{
        list.forEach(item =>{
            if(item.id===data.id){
                item.song_name=data.song_name;
                item.album_name=data.album_name
                item.lyric_text=data.lyric_text
            }
      })
      this.setState({updatepopup:false})
      
    }
    render(){
       
        return(
            <div className="songs">
                <div>
                <h2>Song List</h2> 
                </div>
                <div className="add-btn btn">
                <input type="button" value="Add Song" onClick={this.addSong} />
                </div>
                <div className="song-list">
                <div className="list" >
                <div className="song-name"><strong>Song Name</strong></div><div className="album-name"><strong>Album Name</strong></div><div className="lyric"><strong>Lyric</strong> </div>
               <div className="edit btn"></div><div className="delete btn"></div>
                </div>
                <List list={list} deleteSong={this.deleteSong} editSong={this.editSong}  /> 
                </div>
                {
                   this.state.savepopup?<AddPopup data={this.state.data} savedetail={this.saveDetails} name="Save" />:"" 
                }
                {
                   this.state.updatepopup?<AddPopup data={this.state.data} updateSong={this.updateSong} name="Update" />:"" 
                }
            </div>
            
        )                       
    }
}


export default Songs;