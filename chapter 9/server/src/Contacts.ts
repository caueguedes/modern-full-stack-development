import * as path from "path";

const Datastore = require("nedb");

export interface IContact {
  _id?: number,
  name: string,
  email: string
}


export class Worker {
  private db: Nedb;

  constructor() {
    this.db = new Datastore({
      filename : path.join(__dirname, "contacts.db"),
      autoload : true
    });
  } /* End constructor. */


  public listContacts(): Promise<IContact[]> {
    console.log("Contacts.Worker.listContacts()");

    return new Promise((inResolve, inReject) => {
      this.db.find(
        {},
        (inError: Error, inDocs: IContact[]) => {
          if (inError) {
            console.log("Contacts.Worker.listContacts(): Error", inError);
            inReject(inError);
          } else {
            console.log("Contacts.Worker.listContacts(): Ok", inDocs);
            inResolve(inDocs);
          }
        }
      );
    });
  } /* End listContacts(). */


  public addContact(inContact: IContact): Promise<IContact> {
    console.log("Contacts.Worker.addContact()", inContact);

    return new Promise((inResolve, inReject) => {
      this.db.insert(
        inContact,
        (inError: Error | null, inNewDoc: IContact) => {
          if (inError) {
            console.log("Contacts.Worker.addContact(): Error", inError);
            inReject(inError);
          } else {
            console.log("Contacts.Worker.addContact(): Ok", inNewDoc);
            inResolve(inNewDoc);
          }
        }
      );
    });
  } /* End addContact(). */


  public deleteContact(inID: string): Promise<string> {
    console.log("Contacts.Worker.deleteContact()", inID);

    return new Promise((inResolve, inReject) => {
      this.db.remove(
        { _id : inID },
        { },
        (inError: Error | null, inNumRemoved: number) => {
          if (inError) {
            console.log("Contacts.Worker.deleteContact(): Error", inError);
            inReject(inError);
          } else {
            console.log("Contacts.Worker.deleteContact(): Ok", inNumRemoved);
            inResolve();
          }
        }
      );
    });
  } /* End deleteContact(). */
} /* End class. */