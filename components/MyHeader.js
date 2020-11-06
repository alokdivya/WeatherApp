import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const MyHeader = ()=>{
	return(
	  <Appbar.Header>
		 <Appbar.Content
		   title="weather app"
		   subtitle="Select city"
		   style={{alignItems:"center"}}
		 />
	  </Appbar.Header>
	)
}

export default MyHeader;