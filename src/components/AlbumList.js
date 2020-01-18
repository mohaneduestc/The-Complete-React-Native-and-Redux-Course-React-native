import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state={
    album:[]
  }
componentDidMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res=>this.setState({album:res.data}))
}
renderAlbums=()=>{
  return this.state.album.map((l,i)=> 
  <AlbumDetail key={i} album={l} />
  )
}
  render() { 
    console.log(this.state.album) 
    return (
      <ScrollView  >
            {this.renderAlbums()}
      </ScrollView>
    );
  } 
}

const styles = StyleSheet.create({
    Wrapper:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        elevation:5
    }
})
export default AlbumList;
