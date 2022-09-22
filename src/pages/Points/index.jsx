import React from 'react'; 

 
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native'; 

import {Feather as Icon} from '@expo/vector-icons'; 

import {useNavigation} from '@react-navigation/native'; 

//Precisa instalar - expo install react-native-maps 


import MapView, { Marker } from 'react-native-maps'; 

export default function Points(){ 

    return( 
      <> 
      <View style={styles.container}> 
          <TouchableOpacity onPress={()=>{}}> 
              <Icon name="arrow-left" size={20} color="#34cb79"/> 
          </TouchableOpacity> 
   
          <Text style={styles.title}>Bem vindo.</Text> 
          <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text> 
   
          <View style={styles.mapContainer}> 
              <MapView style={styles.map} initialRegion={{ 
                  latitude:-23.4460282, 
                  longitude:-46.9172153, 
                  latitudeDelta: 0.014, 
                  longitudeDelta: 0.014 
              }}> 
   
                <Marker onPress={()=>{}} coordinate={{latitude:-23.4460282,longitude:-46.9172153}}> 
                    <View style={styles.mapMarkerContainer}> 
                        <Image style={styles.mapMarkerImage} source={{uri: 'https://f.i.uol.com.br/fotografia/2019/08/16/15659855445d570b082fe09_1565985544_3x2_md.jpg'}}/> 
                        <Text  style={styles.mapMarkerTitle}>Centro Histórico</Text> 
                    </View> 
                </Marker>                
              </MapView> 
          </View> 
   
    
          <View style={styles.itemsContainer}> 
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:20}}> 
                    <TouchableOpacity style={styles.item} onPress={()=>{}}> 
                        <Image width={42} height={42} source={require('../../assets/icones/eletronicos.png')} /> 
                        <Text style={styles.itemTitle}>Baterias</Text> 
                    </TouchableOpacity> 
   
                    <TouchableOpacity style={styles.item} onPress={()=>{}}> 
                        <Image width={42} height={42} source={require('../../assets/icones/lampadas.png')} /> 
                        <Text style={styles.itemTitle}>Eletrônicos</Text> 
                    </TouchableOpacity> 
   
                    <TouchableOpacity style={styles.item} onPress={()=>{}}> 
                        <Image width={42} height={42} source={require('../../assets/icones/oleo.png')} /> 
                        <Text style={styles.itemTitle}>Óleo</Text> 
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.item} onPress={()=>{}}> 
                        <Image width={42} height={42} source={require('../../assets/icones/organicos.png')} /> 
                        <Text style={styles.itemTitle}>Organicos</Text> 
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.item} onPress={()=>{}}> 
                        <Image width={42} height={42} source={require('../../assets/icones/papeis-papelao.png')} />
                        <Text style={styles.itemTitle}>Papelão</Text> 
                    </TouchableOpacity> 
              </ScrollView> 
          </View> 
      </View> 
      </> 
    );    
} 
   
    
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        paddingHorizontal: 32, 
        paddingTop: 20 
      }, 
 
      title: { 
        fontSize: 20, 
        fontFamily: 'Ubuntu_700Bold', 
        marginTop: 24, 
      }, 
 
      description: { 
        color: '#6C6C80', 
        fontSize: 16, 
        marginTop: 4, 
        fontFamily: 'Roboto_400Regular', 
      }, 
 
      mapContainer: { 
        flex: 1, 
        width: '100%', 
        borderRadius: 10, 
        overflow: 'hidden', 
        marginTop: 16, 
      }, 
 
      map: { 
        width: '100%', 
        height: '100%', 
      }, 
 
      mapMarker: { 
        width: 90, 
        height: 80,
      }, 
 
      mapMarkerContainer: { 
        width: 120, 
        height: 70, 
        backgroundColor: '#34CB79', 
        flexDirection: 'column', 
        borderRadius: 8, 
        overflow: 'hidden', 
        alignItems: 'center' 
      }, 
 
      mapMarkerImage: { 
        width: 120, 
        height: 45, 
        resizeMode: 'cover', 
      }, 
 
      mapMarkerTitle: { 
        flex: 1, 
        fontFamily: 'Roboto_400Regular', 
        color: '#FFF', 
        fontSize: 10, 
        lineHeight: 23, 
      }, 
 
      itemsContainer: { 
        flexDirection: 'row', 
        marginTop: 16, 
        marginBottom: 32, 
      }, 
 
      item: { 
        backgroundColor: '#fff', 
        borderWidth: 2, 
        borderColor: '#eee', 
        height: 120, 
        width: 120, 
        borderRadius: 8, 
        paddingHorizontal: 16, 
        paddingTop: 20, 
        paddingBottom: 16, 
        marginRight: 8, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        textAlign: 'center', 
      }, 
 
      selectedItem: { 
        borderColor: '#34CB79', 
        borderWidth: 2, 
      },

      itemTitle: { 
        fontFamily: 'Roboto_400Regular', 
        textAlign: 'center', 
        fontSize: 13, 
      }
}); 