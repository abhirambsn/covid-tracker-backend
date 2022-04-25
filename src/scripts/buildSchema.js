import fs from "fs-extra";
import path from "path";
import { graphql } from "graphql";
import {introspectionQuery, printSchema} from 'graphql/utilities';

import Schema from "../schema";
import { exit } from "process";

const buildSchema = async () => {
    await fs.ensureFile('../data/schema.graphql.json')
    await fs.ensureFile('../data/schema.graphql')

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql.json'),
        JSON.stringify(await graphql(Schema, introspectionQuery), null, 2)
    );

    fs.writeFileSync(
        path.join(__dirname, '../data/schema.graphql.txt'),
        printSchema(Schema)
    );
}

const run = async () => {
    await buildSchema();
    console.log("Schema Build Complete");
}

run().catch((err) => {
    console.error(err);
    process.exit(0);
})
