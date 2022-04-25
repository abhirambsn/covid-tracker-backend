import { Case, CaseTC } from '../models/Cases';

const caseQuery = {
    caseById: CaseTC.getResolver('findById'),
    caseByIds: CaseTC.getResolver('findByIds'),
    caseOne: CaseTC.getResolver('findOne'),
    caseMany: CaseTC.getResolver('findMany'),
    caseCount: CaseTC.getResolver('count'),
    caseConnection: CaseTC.getResolver('connection'),
    casePagination: CaseTC.getResolver('pagination'),
};

const caseMutation = {
    caseCreateOne: CaseTC.getResolver('createOne'),
    caseCreateMany: CaseTC.getResolver('createMany'),
    caseUpdateById: CaseTC.getResolver('updateById'),
    caseUpdateOne: CaseTC.getResolver('updateOne'),
    caseUpdateMany: CaseTC.getResolver('updateMany'),
    caseRemoveById: CaseTC.getResolver('removeById'),
    caseRemoveOne: CaseTC.getResolver('removeOne'),
    caseRemoveMany: CaseTC.getResolver('removeMany'),
};

export { caseQuery, caseMutation };