import React, { Component } from 'react';
import logo from './netflix.png';
import './App.css';
import db from './services/db'
import { Flex, Box } from 'grid-styled'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      index: 10,
      ml: db.myList,
      rc: db.recommendations
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Netflix</h2>
        </div>
        <h2 className="title" >My List</h2>        
        <Flex wrap align='center'>
          { 
            this.state.ml.length > 1 ? 
            this.state.ml.map((m, key) => 
              <Box p={2} width={[1/3, 1/5, 1/7 ]}>
                <Card 
                  onMouseEnter={ () => this.setState({ index: m.id})}
                  onMouseLeave={ () => this.setState({ index: 10})} >
                  {
                    (this.state.index === m.id) ? 
                    <IconButton 
                      style={{backgroundColor: 'rgba(0,0,0,0.8)', width: 50, height: 70 }} 
                      tooltip="delete" 
                      touch={true}
                      onTouchTap={ async () => {
                        await this.state.rc.push(this.state.ml[key])
                        await this.state.ml.splice(key, 1);
                        this.setState({ index: 10})                      
                      }}
                      className="delete"
                      tooltipPosition="bottom-center"
                      iconStyle={{color: '#fff'}}>
                      <Delete />
                    </IconButton> : null
                  }
                  <CardMedia
                    overlayStyle={{ minHeight: '100%'}}                  
                    overlay={<CardTitle title={m.title} />}>                  
                    <img style={{maxHeight: 300}} src={m.img} alt="" />                  
                  </CardMedia>                            
                </Card>                
              </Box>
            ) : <h4 className="title">No titles on your list.</h4>
          }                                    
        </Flex>
        <h2 className="title">Recommendations</h2>
        <Flex wrap align='center'>
          { 
            this.state.rc.length > 0 ?
              this.state.rc.map((m, key) => 
              <Box p={2} width={[1/3, 1/5, 1/7 ]}>
                <Card
                  onMouseEnter={ () => this.setState({ index: m.id})}
                  onMouseLeave={ () => this.setState({ index: 10})} >
                  {
                    (this.state.index === m.id) ? 
                    <IconButton 
                      style={{backgroundColor: 'rgba(0,0,0,0.8)', width: 50, height: 70 }} 
                      tooltip="add"
                      className="delete" 
                      touch={true}
                      onTouchTap={ async () => {
                        await this.state.ml.push(this.state.rc[key])
                        this.state.rc.splice(key, 1);
                        this.setState({ index: 10})                      
                      }}
                      tooltipPosition="bottom-center"
                      iconStyle={{color: '#fff'}}>
                      <ContentAdd />
                    </IconButton> : null
                  }
                  <CardMedia overlay={<CardTitle title={m.title} />}>
                    <img style={{maxHeight: 300}} src={m.img} alt="" />                  
                  </CardMedia>                
                </Card>
              </Box>
            ) : <h4 className="title">No titles on your list.</h4>
          }                                    
        </Flex>
      </div>
    );
  }
}

export default App;
