import { StyleSheet, Text, View } from 'react-native'
import {React,useState} from 'react'
import { listGen } from '../../../../utility/list_generator'

const Barchart = () => {
 const [data,setData]=useState([{title:'b1',per:'35%'},{title:'b2',per:'65%'},{title:'b3',per:'85%'},
    {title:'b4',per:'55%'},{title:'b5',per:'90%'},
 ])
  return (
    <View style={{alignItems:'center',marginTop:30}}>

      <View style={styles.main}>
       {
        data.map((item,index)=>(
            <View key={index} style={[styles.bar,{height:item.per}]}>
                 <Text style={{fontSize:10,textAlign:'center'}}>{item.per}</Text>
                <Text style={[styles.txt]}>{item.title}</Text>
               
            </View>
        ))
       }
      {
        listGen(0,10).map((item)=>{
            return <Text key={item} style={{width:'100%',borderBottomWidth:1,position:'absolute',bottom:`${item*10}%`,zIndex:-1,
            textAlign:'right',
            left:5,borderColor:'blue'}}>{item*10}%</Text>
        })
      }
      </View>

    </View>
  )
}

export default Barchart

const styles = StyleSheet.create({
    main: {
      height: 200,
      width: '85%',
      backgroundColor: '#ccc',
     alignItems:'flex-end',
     paddingHorizontal:10,
     flexDirection:'row',
     gap:10,
     borderRadius:10,
     
    },
    bar:{
        height: 100,
        width: 30,
        backgroundColor: '#fff',
        justifyContent:'flex-end',
        borderWidth:1

      },
    txt:{
        color:'#fff',
        fontSize:15,
        textAlign:'center',
    
        backgroundColor:'#999'
    }
})