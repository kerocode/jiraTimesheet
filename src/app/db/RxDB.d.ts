/**
 * custom typings so typescript knows about the schema-fields
 * @type {[type]}
 */

import * as RxDB from 'rxdb';
import { Observable } from 'rxjs';

declare interface RxUserDocumentData {
  userName?: string;
  password?: string
}

export class RxUserDocument extends RxDB.RxDocument {
  userName?: string;
  password?: string
}

declare class RxUserCollection extends RxDB.RxCollection<RxUserDocumentData> {
}

export class RxUsersDatabase extends RxDB.RxDatabase {
  user?: RxUserCollection;
}

export default {
  RxUserDocument,
  RxUserCollection,
  RxUsersDatabase
};
