import React, {useState, useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';


const ButtonBox = ({number,no}) => {
    if(number==no-1){
            return(
        <Text style={styles.button}>Done</Text>               
    );
}else{
    return(
        <Text style={styles.button}>Next</Text>               
    );
}
}

const styles = StyleSheet.create({
   button:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#C0C0C0',
        paddingVertical:6,
        fontWeight:'bold',
        textAlign:'center',
        borderRadius:20,
        backgroundColor:'#808080',
        marginVertical:20
    }
});

export default ButtonBox;