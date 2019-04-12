import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button,Form,ListGroup} from 'react-bootstrap';

import UserListComponent from '../components/UserListComponent';
import CardComponent from '../components/CardComponent';


// Klassen innehåller olika states som används i komponenterna, funktioner som
// hanterar värdet i inputfält, och de olika knapparnas funktioner.
class DashBoardComponent extends Component {

constructor(props) {
  super(props);
  this.state = {
      userList:[],
      value:"",
      color:true,
    };
this.handleChange = this.handleChange.bind(this);
this.addUserName = this.addUserName.bind(this);
}

// Functionen hämtar data om flera användare och skickar infon till userList.
componentDidMount(){
    fetch('http://api.softhouse.rocks/users')
    .then((response)=> response.json().then((response)=>{
      this.setState({userList:response});
    }));
}

// Eventfunktion som ändrar statet på value när man skriver i inputfältet
handleChange(event) {
this.setState({value: event.target.value});
}

// Eventfunktion som lägger ihop den befintliga UserList med den nya användaren som
// skrivs in i inputfältet och sparas i value-statet
addUserName(event) {
const newUsers = this.state.userList.concat([{id:this.state.userList.length + 1, name:this.state.value, isActive: true}]);
this.setState({userList: newUsers});
event.preventDefault();
}

// Funktion som tar bort en användare från UserList
removeUserName = (e) => {
const removeUsers = this.state.userList.slice(0, -1);
this.setState({userList: removeUsers});
}


 // Funktion som ändrar statet på color mellan true och false
   toggleColor = (e) => {
     this.setState({
       color: !this.state.color
     })
   }

   render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col  lg="6">
              <div >
                <CardComponent>
                  <ListGroup>
                    {this.state.userList.map((user) =>
                      <UserListComponent key={user._id} color={this.state.color} user={user}/>
                    )}
                  </ListGroup>
                  <div>
                  <Button variant="warning" onClick={() =>this.toggleColor(this.state.color)}>Toggle color</Button>
                  </div>
                  <br />
                </CardComponent>
             </div>
           </Col>

           <Col  lg="6">
             <div >
               <CardComponent showInfo={false}>
                 <Form onSubmit={this.addUserName}>
                   <Form.Control className="inputForm" size="lg" type="text" placeholder="User Name" value={this.state.value}  onChange={this.handleChange} />
                   <br />
                   <Button variant="success" type="submit">  Add user name</Button>
                 </Form>
                  <br />

                 <div>
                  <Button variant="danger" onClick={this.removeUserName}>Remove user name</Button>
                 </div>

                 <br />
              </CardComponent>
            </div>
          </Col>
       </Row>
     </Container>
    </Fragment>
    );
  }
}

export default DashBoardComponent;
