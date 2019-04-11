import React, { Component } from 'react';
import {Button,Card} from 'react-bootstrap';
import PropTypes from 'prop-types';

// Klassen sätter ett första värde till toggleknappen show/hide content, det finns
// en funktion som togglar mellan visa innehåll och inte visa innehåll. Renderar
// knappen och vad som ska visas.
class CardComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      showInfo: false
    }
  }

  // Varnar om datatypen inte stämmer överens
  static propTypes = {
    info: PropTypes.string,
}

 // Funktion som ändrar värdet mellan true och false i togglingen mellan show och hide.
  toggleContent = (e) => {
      this.setState({
        showInfo: !this.state.showInfo
      })
    }


  render(){
    return (
      <Card className="card">

        <div>
          {this.props.children}
        </div>

        <div id="showHide">
          {this.state.showInfo?this.props.info:null}
        </div>

        {this.props.info &&
         <Button className="cardBtn" variant="primary" onClick={this.toggleContent}>Show info</Button>
        }

      </Card>
    );
  }
}

export default CardComponent;
