import React, { Component,Fragment } from 'react';
//import { Redirect } from "react-router-dom";
import CardComponent from '../components/CardComponent';
import {Button} from 'react-bootstrap';
// import PropTypes from 'prop-types';


class UserScreen extends Component {
  // static propTypes = {
  //                 history: PropTypes.object,
  //                 location: PropTypes.object,
  //                 match: PropTypes.object
  // }
  constructor(props) {
    super(props);
        this.state ={
              user:[],
          };
    }

    componentDidMount(){
      const userId=this.props.match.params.id;
      fetch('http://api.softhouse.rocks/users/'+userId)
        .then((response)=> response.json().then((response)=>{
          // console.log("result",response);
          this.setState({user:response});
        }));
    }



  render() {
    const userId=this.props.match.params.id;
      return (
        <CardComponent>
        {userId ? <UserInformation user={this.state.user}/> : <div>No user selected</div> }
        {/*user ? <div>{"Selected user:  " + user}</div> : <Redirect from="/user" to="/"/>*/}
      </CardComponent>
      );
  }
}



class UserInformation extends Component {

  constructor(props) {
    super(props);
        this.state = {
              showAddress:false
          };
    }
  // const {
  //   address: {
  //           city,
  //           street,
  //           suite,
  //           ...rest
  //           }
  //
  //       } = props.user;
         // console.log("props:",props.user);

    toggleAddress = (e) => {
        this.setState({
          showAddress: !this.state.showAddress
        });
      }

render(){
  return(
    <Fragment>
    <img src="http://placekitten.com/200/300" alt="kitten"/>
    <div>{this.props.user.username}</div>
    <div>{this.props.user.name}</div>
    <div>{this.props.user.email}</div>
    {this.props.user.address &&
      <Fragment >
      {this.state.showAddress?
        <div >
        <div>{this.props.user.address.city}</div>
        <div>{this.props.user.address.street}</div>
        <div>{this.props.user.address.suite}</div>
        <br/>
        </div>
        :null}
      <Button className="cardBtn" variant="primary" onClick={this.toggleAddress}>Address</Button>
      </Fragment>
    }


    </Fragment>
  )
  }

}



export default UserScreen;
