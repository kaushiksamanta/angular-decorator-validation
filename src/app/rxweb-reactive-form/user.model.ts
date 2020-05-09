import { required, compare, alpha, minLength } from '@rxweb/reactive-form-validators';

export class User {

  @required()
  firstName: string;

  @required({message: 'Last Name is required'})
  lastName: string;

  @required()
  @alpha({ allowWhiteSpace: true })
  userName: string;

  @required()
  @minLength({value: 8})
  password: string;

  @required()
  @compare({fieldName: 'password'})
  confirmPassword: string;

}
