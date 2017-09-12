import RxDB from 'rxdb';
import { Injectable } from '@angular/core';
/*
import RxDBSchemaCheckModule from 'rxdb/dist/es/modules/schema-check';
if (ENV === 'development') {
  // schema-checks should be used in dev-mode only
  RxDB.plugin(RxDBSchemaCheckModule);
}

import RxDBValidateModule from 'rxdb/dist/es/modules/validate';
RxDB.plugin(RxDBValidateModule);
import RxDBLeaderElectionModule from 'rxdb/dist/es/modules/leader-election';
RxDB.plugin(RxDBLeaderElectionModule);


// always needed for replicatin with the node-server
RxDB.plugin(require('pouchdb-adapter-http'));
RxDB.plugin(require('pouchdb-replication'));

// import typings
import * as RxDBTypes from './../db/RxDB.d';

RxDB.QueryChangeDetector.enable();
RxDB.QueryChangeDetector.enableDebugging();

const adapters = {
  websql: require('pouchdb-adapter-websql'),
};

let collections = [
  {
    name: 'hero',
    schema: require('../schemas/hero.schema.json'),
    methods: {
      hpPercent() {
        return this.hp / this.maxHP * 100;
      }
    },
    sync: true
  }
];
*/

@Injectable()
export class DBService {
  /* private async _create(): Promise<RxDBTypes.RxUsersDatabase> {
     console.log('DatabaseService: creating database..');
     const db: RxDBTypes.RxUsersDatabase = await RxDB.create({
       name: 'heroes',
       adapter: adapters.websql,
       // password: 'myLongAndStupidPassword' // no password needed
     });
     db.waitForLeadership()
       .then(() => {
         console.log('isLeader now');
         document.title = '♛ ' + document.title;
       });

     // create collections
     console.log('DatabaseService: create collections');
     await Promise.all(collections.map(colData => db.collection(colData)));

     // hooks
     console.log('DatabaseService: add hooks');
     db.collections.user.preInsert(function (docObj) {
       const color = docObj.color;
       return db.collections.hero.findOne({ color }).exec()
         .then(has => {
           if (has != null) {
             alert('another hero already has the color ' + color);
             throw new Error('color already there');
           }
           return db;
         });
     });

     // sync
     console.log('DatabaseService: sync');
     collections
       .filter(col => col.sync)
       .map(col => col.name)
       .forEach(colName => db[colName].sync({ remote: syncURL + colName + '/' }));

     return db;
   }*/
}
