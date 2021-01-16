import React , {useState,useEffect} from 'react';
import {View, Modal,Alert,TouchableOpacity, Button, Text, StyleSheet, FlatList,Image} from 'react-native';
import ButtonBox from './ButtonBox'
const OptionBox = ({answers, count,correctAnswers,number,correct,no}) => {
    const [pressed,setPressed]=useState(false);
    const [color1,setColor1] = useState("#7F00FF")
    const [color2,setColor2] = useState("#7F00FF")
    const [color3,setColor3] = useState("#7F00FF")
    const [color4,setColor4] = useState("#7F00FF")
    const styles = StyleSheet.create(
    {   box:{
            marginLeft:20,
            paddingRight:20,
            marginVertical: 5,
            borderRightWidth:1,
            borderRightColor:"#C0C0C0"
        },
        header1:{
            color:'white',
            fontSize: 18,
            paddingHorizontal:25,
            paddingVertical:7,
            marginVertical:10,
            borderColor:'grey',
            borderColor:'#C0C0C0',
            borderRadius:42,
            borderWidth:1,
            backgroundColor:color1
        },
        header2:{
            color:'white',
            fontSize: 18,
            paddingHorizontal:25,
            paddingVertical:7,
            marginVertical:10,
            borderColor:'grey',
            borderColor:'#C0C0C0',
            borderRadius:42,
            borderWidth:1,
            backgroundColor:color2
        },
        header3:{
            color:'white',
            fontSize: 18,
            paddingHorizontal:25,
            paddingVertical:7,
            marginVertical:10,
            borderColor:'grey',
            borderColor:'#C0C0C0',
            borderRadius:42,
            borderWidth:1,
            backgroundColor:color3
        },
        header4:{
            color:'white',
            fontSize: 18,
            paddingHorizontal:25,
            paddingVertical:7,
            marginVertical:10,
            borderColor:'grey',
            borderColor:'#C0C0C0',
            borderRadius:42,
            borderWidth:1,
            backgroundColor:color4
        },
            
        }
    );
    return (
        <View>
            <TouchableOpacity
            disabled={pressed}
            onPress={()=>{
                if(correctAnswers.answer_a_correct=="true"){
                    setColor1("green")
                    correct()
                    setPressed(true)
                }else{
                    console.log(correctAnswers.answer_a_correct)
                    setColor1("red")}
                    setPressed(true)
            }
            }
            >
            <Text style={styles.header1}>
                1. {answers.answer_a}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={pressed}
            onPress={()=>{
                if(correctAnswers.answer_b_correct=="true"){
                    setColor2("green")
                    correct()
                    setPressed(true)                
                }else{setColor2("red")}
                    setPressed(true)
            }}
            >
            <Text style={styles.header2}>
                2. {answers.answer_b}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={pressed}
            onPress={()=>{
                if(correctAnswers.answer_c_correct==true){
                    setColor3("green")
                    correct()
                    setPressed(true)
                }else{setColor3("red")}
                    setPressed(true)
            }}
            >
            <Text style={styles.header3}>
                3. {answers.answer_c}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={pressed}
            onPress={()=>{
                if(correctAnswers.answer_d_correct==true){
                    setColor4("green")
                    correct()
                    setPressed(true)
                }else{setColor4("red")}
                    setPressed(true)
            }}
            >
            <Text style={styles.header4}>
                4. {answers.answer_d}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={!pressed}
                onPress={() => {
                    count()
                    setPressed(false)
                    setColor1("#7F00FF")
                    setColor2("#7F00FF")
                    setColor3("#7F00FF")
                    setColor4("#7F00FF")
                }}
            >
                <ButtonBox 
                    number={number}
                    no={no}                
                />        
            </TouchableOpacity>      
        </View>
    );    
}



export default OptionBox;