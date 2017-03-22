/* This script generates mock data for local development.
   This way yo udon't have to point to an acutal API,
   but yo ucan enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs'; // Comes with Node for writing to files
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
  (err)? console.log(chalk.red(err)): console.log(chalk.green('Mock data generated'));
});
