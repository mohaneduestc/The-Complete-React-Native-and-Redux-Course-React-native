import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { Card, CardItem, Button } from 'native-base';

class AlbumDetail extends Component {
  
  render() {
      const {album} = this.props;
    return (
      <Card>
          <CardItem>
              <View style={{justifyContent:'center', alignItems:'center',
            marginLeft:10, marginRight:10}}>
                  <Image source={{uri:album.thumbnail_image}} 
                    style={{width:20, height:20, borderRadius:50}}/>
              </View>
              <View style={{justifyContent:'space-around'}}>
                <Text>{album.title}</Text>
                <Text>{album.artist}</Text>
              </View>
          </CardItem>
          <CardItem>
              {/* <Image source={{uri:album.image}} style={{...StyleSheet.absoluteFillObject}}/> */}
          </CardItem>
          <CardItem>
              <Button light onPress={()=>Linking.openURL(album.url)}>
                  <Text>Click Me</Text>
              </Button>
          </CardItem>
          
      </Card>
    );
  }
}

export default AlbumDetail;
