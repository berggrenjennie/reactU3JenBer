import React, { Component,Fragment } from 'react';
import CardComponent from '../components/CardComponent';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';



// Klassen hanterar information om unik användare,
// hämtar data via fetch och sparar i statet User.
class UserScreen extends Component {
  static propTypes = {
                  history: PropTypes.object,
                  location: PropTypes.object,
                  match: PropTypes.object
  }
  constructor(props) {
    super(props);
        this.state ={
              user:[],
          };
    }
// Funktionen hämtar data om unikId från databas och sparar i User
    componentDidMount(){
      const userId=this.props.match.params.id;
      let url = 'http://api.softhouse.rocks/users/'+ userId;
      if (userId === undefined)
        url = 'http://api.softhouse.rocks/users/';
      fetch(url)
        .then((response)=> response.json().then((response)=>{
          this.setState({user:response});
        }));
    }

  render() {
    const userId=this.props.match.params.id;
      return (
        <CardComponent>
        {userId ? <UserInformation user={this.state.user}/> : <div>No user selected</div> }
      </CardComponent>
      );
  }
}

// Klassen hanterar information som visas om man klickar på en unik användare
// från UserList. innehåller även togglefunktion som visar ytterligare data.
class UserInformation extends Component {

  constructor(props) {
    super(props);
        this.state = {
              showAddress:false
          };
    }

// Funktionen togglar adressinformationen som dolts i den unika användarens kort
    toggleAddress = (e) => {
        this.setState({
          showAddress: !this.state.showAddress
        });
      }

render(){
  return(
    <Fragment>
      <img src="http://placekitten.com/200/300" alt="kitten"/>
      <h1>{this.props.user.username}</h1>
      <h5>{this.props.user.name}</h5>
      <h3>{this.props.user.email}</h3>

      {this.props.user.address &&
        <Fragment >
          {this.state.showAddress ?
            <div >
            <h5>{this.props.user.address.city}</h5>
            <h5>{this.props.user.address.street}</h5>
            <h5>{this.props.user.address.suite}</h5>
            <br/>
            </div>
            :null
          }
            <Button className="cardBtn" variant="primary" onClick={this.toggleAddress}>Address</Button>
        </Fragment>
      }
      </Fragment>
    )
  }

}



export default UserScreen;
