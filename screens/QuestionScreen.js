import React, {useState, useEffect} from 'react';
import {View,Text,Modal,TouchableOpacity,ActivityIndicator, StyleSheet} from 'react-native';
import OptionBox  from '../components/OptionBox';
import ButtonBox  from '../components/ButtonBox';


const QuestionScreen = ({navigation}) => {
    const [arr,setArr] = useState([])
    const [load,setload] = useState(true)
    const [score,setScore] = useState(0);
    const [err,setErr] = useState(true);
    useEffect(() => {
        console.log(navigation.state.params); 
    fetch('https://quizapi.io/api/v1/questions?apiKey=DbWZkUPM4by4T5VTdUrVVeaegZ52DYwW3VJOaGeb&category='+navigation.state.params.topic+'&difficulty='+navigation.state.params.difficulty+'&limit='+navigation.state.params.questions+''
    ).then((response) =>{
        response.json().then(res =>{
            setArr(res)
            setload(false)
        })
    });
    }, []);
    
    const [count,setCount]= useState(0);
    if(load){
        return(
        <Modal
            transparent={true}
            animationType={'none'}
            visible={load}
            onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={load}
                        size="large"
                        color="black"
                        />
                </View>
            </View>
        </Modal>
        )
    }
    else if("error" in arr){
        return(
        <Modal
            transparent={true}
            animationType={'none'}
            visible={err}
            onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.modalBackground}>
                <View style={styles.sorry}>
                    <Text style={{fontSize:24,color:'white'}}>Sorry No Questions Found</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Config')
                        }}
                    >
                        <Text style={styles.start}>Back</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        );
    }
    else if(count<navigation.state.params.questions){
    return(
        <View style={{backgroundColor:"black", flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',}}>
        <View style={styles.bg}>
        <Text style={styles.search}>Question # {count+1}</Text>
        <Text style={styles.question}>{arr[count].question}</Text>
        <OptionBox 
        answers={arr[count].answers} 
        correctAnswers={arr[count].correct_answers} 
        correct={()=>{setScore(score+10)}} 
        count={()=>{setCount(count+1)}}
        number={count}
        no={navigation.state.params.questions}
        />       
        </View>
        </View>
    );
}else{
    return(
    <View style={{backgroundColor:"black", flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around', }}>
        <View style={styles.bg}>
        <Text style={styles.search}>Your Score</Text>
        <View style={styles.container}>
        <View style={styles.box}>
        <Text style={styles.scores}>{score} Points</Text>        
        </View>     
        </View>
        </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#7F00FF",
        borderColor:"rgb(255,255,255)",
        borderWidth:1,
        paddingTop:40,
        paddingBottom:10,
        paddingHorizontal:30,
        marginHorizontal:10,
        marginTop:50,
        borderRadius:40,
        shadowColor: "rgb(255,255,255)",
            shadowOffset: {
            width: 0,
            height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
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
        fontSize:45,
        borderWidth:1,
        borderColor:'#C0C0C0',
        paddingVertical:6,
        width:400,
        fontWeight:'bold',
        textAlign:'center',
        borderRadius:20,
        backgroundColor:'#808080'
    },
    scores:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#C0C0C0',
        paddingVertical:6,
        fontWeight:'bold',
        textAlign:'center',
        borderRadius:20,
        backgroundColor:'#808080'
    },
    question:{
        color:'white',
        fontSize: 18
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'black'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#7F00FF',
        height: 100,
        width: 100,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#C0C0C0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
        sorry: {
        backgroundColor: '#7F00FF',
        borderRadius: 20,
        borderWidth:1,
        borderColor:'#C0C0C0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding:30
    },
   start:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#C0C0C0',
        paddingHorizontal:30,
        paddingVertical:6,
        fontWeight:'bold',
        textAlign:'center',
        borderRadius:20,
        backgroundColor:'#808080',
        marginTop:20
    }
});

export default QuestionScreen;