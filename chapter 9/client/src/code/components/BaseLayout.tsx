import React, { Component } from "react";

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText  from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { createState } from "../state";

import MessageList from "./ContactList";
import ContactView from "./ContactView";
import MailboxList from "./MailboxList";
import MessageList from "./MessageList";
import MessageView from "./MessageView";
import Toolbar from "./Toolbar";
import WelcomeView from "./WelcomeView";


class BaseLayout extends Component {

  state = createState(this);

  render() {
    return (
      <div className="appContainer">
        <Dialog open={this.state.pleaseWaitVisible} disableBackdropClick={ true }
          disableEscapeKeyDown={ true } transitionDuration={ 0 }>
          <DialogTitle style={{ textAlign: "center" }}>
            Please Wait
          </DialogTitle>
          <DialogContent><DialogContentText>
              ...Contacting server...
            </DialogContentText></DialogContent>
        </Dialog>

        <div className="toolbar">
          <Toolbar state={this.state}/>
        </div>

        <div className="mailboxList">
          <MailboxList state={ this.state }/>
        </div>

        <div className="centerArea">
  
          <div className="messageList"><MessageList state={ this.state } /></div>

          <div className="centerViews">
            { this.state.currentView === "welcome" && <WelcomeView />}
            { (this.state.currentView === "message" || this.state.currentView === "compose") &&
                <MessageView state={ this.state } />
            }
            {
              (this.state.currentView === "contact" || this.state.currentView === "contactAdd") &&
              <ContactView state={this.state} />
            }
          </div>
        </div>

       <div className="contactList"><ContactList state={ this.state } /></div>
      </div>

    );
 
  } 
}

export default BaseLayout;
