import * as React from 'react';
import { Button, Container, Content, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Title, Left, Right, Textarea, Form, CardItem,} from 'native-base';
import { Ionicons } from '@expo/vector-icons';


export default class header extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Left>
            <Button transparent onPress={() => alert("Deseas salir?")}>
              <Title><Ionicons name="ios-arrow-back" size={60} color={'cyan'} /></Title>
            </Button>
          </Left>
          
          <Body>
            <Title style={{ color:'cyan', fontSize: 50}}> GYM </Title>
          </Body>

          <Right>
            <Button transparent onPress={() => alert("Menu de la app")}>
              <Title><Ionicons name="ios-menu" size={60} color={'cyan'} /></Title>
            </Button>
          </Right>
      </React.Fragment>
    ); 
  }
}