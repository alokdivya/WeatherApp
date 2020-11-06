import React from 'react';
import {Text,View,StyleSheet,ScrollView,Alert,Image,AsyncStorage} from 'react-native';
import MyHeader from './MyHeader';
import { LinearGradient } from 'expo';
import { TextInput,Card,List,Title} from 'react-native-paper';

export default class SearchScreen extends React.Component{
	state={
		info:{
			name:"loading !!",
			temp:"loading !!",
			humidity:"loading",
			desc:"loading"
			icon:"loading"
		}
	}

	async getWeather(){
		Mycity = await AsyncStorage.getItem('mycity')
		if  (!Mycity){
			Mycity = this.prop.navigation.getParam('city','Patna')
		}

		fetch('http://api.openweathermap.org/data/2.5/weather?q=${Mycity}&units=metric&APPID=4185eccf8d2d7e230547bd3d968c9bbb')
		.then(res=>res.json())
		.then(data=>{
			this.setState({
				info:{
					name:data.name,
					temp:data.main.temp,
					humidity:data.main.humidity,
					desc:data.weather[0].description
					icon:data.weather[0].icon
				}
			})
		}).catch(err=>){
			Alert.alert("Error"+err.message+"please connect to internet",[{text:"ok"}])
		}
	}

	componentDidMount(){
		this.getWeather()
	}

	render(){
		if(this.props.navigation.getParam('city')){
			this.getWeather()
		}
		return(
	<View style={styles.container}>
		<MyHeader title="current weather" />
		<Card style={{margin:20}}>
		<LinearGradient
		colors={['#02189','#0575E6']}
		>
		<View style={{padding:20,alignItems:"center"}}>
		<Title style={styles.text}>{this.state.info.name}</Title>
		<Image style={{width:120,height:120}}
		source={{uri:"http://openweathermap.org/img/w/"+this.state.info.icon+".png"}}
		/>
		<Title style={styles.text}> TEMPRETURE :{this.state,info.temp}</Title>
		<Title style={styles.text}> DESCRIPTION :{this.state,info.desc}</Title>
		<Title style={styles.text}> HUMIDITY :{this.state,info.humidity}</Title>
		</View>
		</LinearGradient>
		</Card>
	</View>
		)
	}
}