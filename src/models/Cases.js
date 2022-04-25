import mongoose, {Schema} from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const caseModelSchema = new Schema({
    countryName:{type: String},
    countryCode: {type: String},
    newConfirmed: Number,
    totalConfirmed: Number,
    newDeaths: Number,
    totalDeath: Number,
    newRecoverd: Number,
    totalRecovered: Number
}, {timestamps: true, collection: 'cases'})


caseModelSchema.index({createdAt: 1, updatedAt: 1});

export const Case = mongoose.model('Case', caseModelSchema);
export const CaseTC = composeWithMongoose(Case);