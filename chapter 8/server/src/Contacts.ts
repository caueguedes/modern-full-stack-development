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
            inReject(inError);
          } else {
            inResolve(inDocs);
          }
        }
      );
    });
  } /* End listContacts(). */

  public addContact(inContact: IContact): Promise<IContact> {
    return new Promise((inResolve, inReject) => {
      this.db.insert(inContact, 
        (inError: Error, inNewDoc: IContact) => {
          if (inError) {
            inReject(inError);
          } else {
            inResolve(inNewDoc);
          }
        }
      );
    });
  }

  public deleteContact(inID: string): Promise<string> {
    console.log("Contacts.Worker.deleteContact()", inID);

    return new Promise((inResolve, inReject) => {
      this.db.remove(
        { _id : inID },
        { },
        (inError: Error, inNumRemoved: number) => {
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