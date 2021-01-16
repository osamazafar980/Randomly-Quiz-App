import React, {useState} from 'react';
import {Text, Button, TouchableOpacity, View, StyleSheet} from 'react-native';

const ConfigScreen = ({navigation,  route}) => {
    const [send, setSend]= useState({
        topic:"linux",
        difficulty:"Easy",
        questions:"5"
    })
    const [color,setColor] = useState({
        linux:"green",
        code:'black',
        bash:"black",
        easy:'green',
        medium:"black",
        hard:'black',
        no5:"green",
        no10:'black',
        no20:"black",       
    })
    const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'black'
    },
    box:{
        backgroundColor:"#7F00FF",
        borderColor:"rgb(255,255,255)",
        borderWidth:1,
        padding:30,
        borderRadius:40,
        },
    header:{
        color:'white',
        fontSize:30,
        borderBottomColor:'white',
        borderBottomWidth:1,
        fontWeight:'bold'

    },
    subHeader:{
        fontSize:20,
        color: 'white',
        marginLeft:5,
    },
    linuxButton:{
        fontSize:16,
        color:'white',
        backgroundColor:color.linux,
        padding:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
    bashButton:{
        fontSize:16,
        color:'white',
        backgroundColor:color.bash,
        padding:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
    codeButton:{
        fontSize:16,
        color:'white',
        backgroundColor:color.code,
        padding:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },    
    easyButton:{
        fontSize:16,
        color:'white',
        backgroundColor:color.easy,
        padding:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
    mediumButton:{
        fontSize:16,
        color:'white',
        backgroundColor:color.medium,
        padding:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
    hardButton:{
        fontSize:16,
        color:'white',
        backgroundColor:color.hard,
        padding:10,
        paddingHorizontal:20,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
    no5Button:{
        fontSize:16,
        color:'white',
        backgroundColor:color.no5,
        padding:10,
        paddingHorizontal:30,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
    no10Button:{
        fontSize:16,
        color:'white',
        backgroundColor:color.no10,
        padding:10,
        paddingHorizontal:30,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
    no20Button:{
        fontSize:16,
        color:'white',
        backgroundColor:color.no20,
        padding:10,
        paddingHorizontal:30,
        marginHorizontal:5,
        borderColor:'white',
        borderWidth:1,
        borderRadius:16,
    },
   start:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#C0C0C0',
        paddingVertical:6,
        fontWeight:'bold',
        textAlign:'center',
        borderRadius:20,
        backgroundColor:'#808080',
        marginTop:20
    }

    });
    return(
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.header}>
            Configure Test
            </Text>
            <View style={{marginVertical:10, borderWidth:1,borderColor:'white',padding:10}}>
                <Text style={styles.subHeader}>
                    Topic:
                </Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <TouchableOpacity
                        onPress={()=>{
                            setColor({...color,linux:"green",code:"black",bash:"black"})
                            setSend({...send,topic:"linux"})
                        }} 
                    >
                        <Text style={styles.linuxButton}>
                            Linux
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,linux:"black",code:"green",bash:"black"})
                                setSend({...send,topic:"code"})
                            }}
                    >
                        <Text style={styles.codeButton}>
                            Code
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,linux:"black",code:"black",bash:"green"})
                                setSend({...send,topic:"bash"})
                            }}
                    >
                        <Text style={styles.bashButton}>
                            Bash
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginVertical:10, borderWidth:1,borderColor:'white',padding:10}}>
                <Text style={styles.subHeader}>
                    Difficulty:
                </Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,easy:"green",medium:"black",hard:"black"})
                                setSend({...send,difficulty:"Easy"})
                            }}
                    >
                        <Text style={styles.easyButton}>
                            Easy
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,easy:"black",medium:"green",hard:"black"})
                                setSend({...send,difficulty:"Medium"})
                            }}
                    >
                        <Text style={styles.mediumButton}>
                            Medium
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,easy:"black",medium:"black",hard:"green"})
                                setSend({...send,difficulty:"Hard"})
                            }}
                    >
                        <Text style={styles.hardButton}>
                            Hard
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginVertical:10, borderWidth:1,borderColor:'white',padding:5}}>
                <Text style={styles.subHeader}>
                    Questions:
                </Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,no5:"green",no10:"black",no20:"black"})
                                setSend({...send,questions:"5"})
                            }}
                    >
                        <Text style={styles.no5Button}>
                            5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,no5:"black",no10:"green",no20:"black"})
                                setSend({...send,questions:"10"})
                            }}
                    >
                        <Text style={styles.no10Button}>
                            10
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                                setColor({...color,no5:"black",no10:"black",no20:"green"})
                                setSend({...send,questions:"20"})
                            }}
                    >
                        <Text style={styles.no20Button}>
                            20
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Question', send)
                }}
            >
                <Text style={styles.start}>Start</Text> 
            </TouchableOpacity>
        </View>
    </View>
);
}



export default ConfigScreen;