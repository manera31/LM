import * as React from 'react';
import { Button, Container, Content, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Title, Left, Right, Textarea, Form, CardItem,} from 'native-base';

import {  View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants, Font, Expo } from 'expo';
import { IconFontAwesome5 } from "react-native-vector-icons/FontAwesome5";
import { Card } from 'react-native-paper';
import Configuracion from './components/Configuracion';
import Entrenamiento from './components/entrenamiento';
import Descanso from './components/descanso';
import Cabecera from './components/header';

//md-volume-off
//md-volume-high
//md-play
//md-pause

export default class App extends React.Component {
  render() {
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}> 
        <Header>
          <Cabecera />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: "cyan", marginVertical:-50}}>
          <Tab style={{ backgroundColor:'#FCE5B4'}} heading={<TabHeading style={{ height: 100}}><Text><Ionicons name="md-build" size={60} color={'cyan'} /></Text></TabHeading>}>
            <Configuracion />
          </Tab>

          <Tab style={{ backgroundColor:'#C2FCB4'}} heading={<TabHeading style={{ height: 100}}><Text><Ionicons name="md-fitness" size={60} color={'cyan'} /></Text></TabHeading>}>
            <Entrenamiento />
          </Tab>

          <Tab style={{ backgroundColor:'#EAFF9B'}} heading={<TabHeading style={{ height: 100}}><Text><Ionicons name="md-hand" size={60} color={'cyan'} /></Text></TabHeading>}>
            <Descanso />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}