import React from "react";

import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Person from "@material-ui/icons/Person";

const ContactList = ({ state }) => (
  <List> 
    {state.contacts.map(value => {
      return (
        <ListItem key={ value } button onClick={ () => state.showContact(value._id,
            value.name, value.email ) }>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={ `${value.name}` } />
          
        </ListItem> 
      );
    })}
  </List>
);

export default ContactList;