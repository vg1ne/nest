export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export class Contact {
  private id: number;
  private firstName: string;
  private lastName: string;
  private age: number;
  constructor(data: IContact){
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
  }
}
