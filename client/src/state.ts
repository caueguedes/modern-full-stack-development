export function createState(inParentComponent) {
  return {

    pleaseWaitVisible: false,
    
    contacts: [],
    
    mailboxes: [],
    
    messages: [],
    
    currentView: "welcome",
    
    currentMailbox: null,
  

    messageID : null,
    messageDate : null,
    messageFrom : null,
    messageTo : null,
    messageSubject : null,
    messageBody : null,
  

    contactID : null,
    contactName : null,
    contactEmail : null,
 
    showHidePleaseWait : function(inVisible: boolean): void {
      this.setState({ pleaseWaitVisible : inVisible });
    }.bind(inParentComponent)


    addMailboxToList: function(inMailbox: IMAP.IMailbox): void {
      const cl: IMAP.IMailbox[] = this.state.mailboxes.slice(0);
      cl.push(inMailbox);
      this.setState({mailboxes: cl});
    }.bind(inParentComponent)
    
    addContactsToList: function(inContat: Contacts.IContact): void {
      const cl: Contacts.IContact[] = this.state.contats.slice(0);
      cl.push({ _id: inContat.id,
        name: inContat.name, email: inContat.email});
      this.setState({ contacts : cl });
    }.bind(inParentComponent)
  }
}