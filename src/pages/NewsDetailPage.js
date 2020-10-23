import React, { Component } from 'react';

import { BackAndroid, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

// External Libraries
import Ionicon from 'react-native-vector-icons/Ionicons';

// Components
import NavBar from './../components/NavBar';
import Counts from './../components/Counts';

var {width, height} = Dimensions.get('window')

BackAndroid.addEventListener('hardwareBackPress', () => {
  _navigator.pop();
  return true;
});

const NewsDetailPage = ({navigator, item}) => {
  const _navigator = navigator;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{height: height - 200}}>
          <Image source={{uri: item.imageUrl, height: 300}}
                 style={styles.image}>
             <View style={styles.innerImage}>
               <Text style={styles.title}>
                 { item.title }
               </Text>
               <Text style={styles.speakerText}>Por { item.speaker }</Text>
             </View>
           </Image>
          <Text style={styles.description}>
           
          </Text>
          <Text style={styles.description}>
           Sem ideia do que por aqui.
          </Text>
          <NavBar
            leftText={Platform.OS === 'ios' ? <Ionicon name='ios-arrow-back' size={32} color={'#eee'} /> : <Ionicon name='md-arrow-back' size={24} color={'#eee'} />}
            onLeftPress={ () => {
              _navigator.pop()
            }}
            containerStyle={{backgroundColor: 'transparent'}}
            colorText='#eee' />

        </ScrollView>
        <Counts item={item} style={{height: 200}} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  innerImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200
  },
  title: {
    margin: 15,
    fontSize: 28,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  speakerText: {
    fontStyle: 'italic',
    color: '#fff',
    marginTop: 5,
    fontSize: 16,
  },
  description: {
    margin: 15,
    marginTop: 7,
    textAlign: 'justify',
  },
  floatFooter: {
    position: 'absolute',
    bottom: 0
  }
})

export default NewsDetailPage;
