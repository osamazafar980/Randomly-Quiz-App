import React, {useState, useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import SectionBox  from '../components/OptionBox';

const SearchScreen = ({navigation}) => {
    const [search,setSearch]= useState('');
    return(
        <View style={{backgroundColor:"black", flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',}}>
        <View style={styles.bg}>
        <Text style={styles.search}>RANDOMLY</Text>
        <View style={styles.container}>
        <View style={styles.box}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Config')
                }}
            >
                <Text style={styles.button}>Start</Text>        
            </TouchableOpacity>
        </View>     
        </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#7F00FF",
        borderColor:"rgb(255,255,255)",
        borderWidth:1,
        marginHorizontal:70,
        paddingTop:40,
        paddingBottom:10,
        paddingHorizontal:30,
        borderRadius:40,
        shadowColor: "rgb(255,255,255)",
            shadowOffset: {
            width: 0,
            height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
    }
    ,div:{
        height:200,
    },
    container:{
        marginVertical:30,
    }
    ,search:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center',
        borderBottomWidth:1,
        borderStyle:"dashed",
        borderBottomColor:'#C0C0C0',
        color:"rgb(255,255,255)",
    },
    button:{
        fontSize:35,
        borderWidth:1,
        borderColor:'#C0C0C0',
        paddingVertical:6,
        fontWeight:'bold',
        textAlign:'center',
        borderRadius:20,
        backgroundColor:'#808080'
    },
});

export default SearchScreen;