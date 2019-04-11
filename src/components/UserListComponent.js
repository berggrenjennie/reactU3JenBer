import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const color1 = "#d9534f";
const color2 = "#5cb85c";



// Funktionen returnerar färg beroende på om status är true eller false.
// Kontroll om användaren är active eller inactive
function UserListComponent(props){
 return (
   <ListGroup.Item  className="userListItem">
      <Link style={{color: props.color ? color1 : color2}} to={"/user/"+ props.user.id}>
        {props.user.name}
      </Link>
    </ListGroup.Item>);
}

// Varnar om datatypen inte stämmer överens
UserListComponent.propTypes = {
 user: PropTypes.shape({
     id:PropTypes.number,
     name:PropTypes.string,
 }),
 color: PropTypes.bool
};

export default UserListComponent;
