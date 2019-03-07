import * as React from 'react';
import { Button, Container, Content, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Title, Left, Right, Textarea, Form, CardItem,} from 'native-base';
import { Ionicons } from '@expo/vector-icons';


export default class Configuracion extends React.Component {
  constructor(){
    super();
    this.stateSeries = {
    textValue: '0'
    }
    this.stateDuracion = {
    textValue: '00:00'
    }
    this.stateDescanso = {
    textValue: '00:00'
    }
  }
  render() {
    return (
      <React.Fragment>
      <Text style={{ marginTop: 70, fontSize: 50, textAlign: 'center'}}>Configuración</Text>
      
      <Text style={{ marginTop: 30, fontSize: 40, textAlign: 'center'}}>Series</Text>
      <CardItem style={{backgroundColor: '#FCE5B4'}}>
        <Left style={{ marginLeft: 60}}>
          <Button transparent onPress={() => alert("-")}>
            <Title><Ionicons name="md-remove" size={60} color={'cyan'} /></Title>
          </Button>
        </Left>
        <Body style={{ textAlign: 'center', marginLeft: 30}}>
          <Form>
            <Textarea style={{ height: 60,  fontSize: 50, wigth: 100, }} placeholderTextColor={'black'} rowSpan={1} multiline={false} placeholder={this.stateSeries.textValue}/>
          </Form>
        </Body>
        <Right style={{ marginRight: 60}}>  
          <Button transparent onPress={() => alert("+")}>
            <Title><Ionicons name="md-add" size={60} color={'cyan'} /></Title>
          </Button>
        </Right>
      </CardItem>

      <Text style={{ fontSize: 40, textAlign: 'center'}}>Duración</Text>       
      <CardItem style={{backgroundColor: '#FCE5B4'}}>
        <Left style={{ marginLeft: 60, marginHorizontal:-80}}>
          <Button transparent onPress={() => alert("-")}>
            <Title><Ionicons name="md-remove" size={60} color={'cyan'} /></Title>
          </Button>
        </Left>
        <Body style={{ textAlign: 'center'}}>
          <Form>
            <Textarea style={{ height: 60,  fontSize: 50}} placeholderTextColor={'black'} rowSpan={1} placeholder={this.stateDuracion.textValue}/>
          </Form>
        </Body>
        <Right style={{ marginRight: 60, marginHorizontal:-80}}>  
          <Button transparent onPress={() => alert("+")}>
            <Title><Ionicons name="md-add" size={60} color={'cyan'} /></Title>
          </Button>
        </Right>
      </CardItem>

      <Text style={{ fontSize: 40, textAlign: 'center'}}>Descanso</Text>
      <CardItem style={{backgroundColor: '#FCE5B4'}}>
        <Left style={{ marginLeft: 60, marginHorizontal:-80}}>
          <Button transparent onPress={() => alert("-")}>
            <Title><Ionicons name="md-remove" size={60} color={'cyan'} /></Title>
          </Button>
        </Left>
        <Body style={{ textAlign: 'center'}}>
          <Form>
            <Textarea style={{ height: 60,  fontSize: 50}} placeholderTextColor={'black'} rowSpan={1} placeholder={this.stateDescanso.textValue}/>
          </Form>
        </Body>
        <Right style={{ marginRight: 60, marginHorizontal:-80}}>  
          <Button transparent onPress={() => alert("+")}>
            <Title><Ionicons name="md-add" size={60} color={'cyan'} /></Title>
          </Button>
        </Right>
      </CardItem>
      </React.Fragment>
    ); 
  }
}