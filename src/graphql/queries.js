/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProcedure = /* GraphQL */ `
  query GetProcedure($id: ID!) {
    getProcedure(id: $id) {
      id
      procedureName
      Code
      reclaimed
      difference
      authorized
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProcedures = /* GraphQL */ `
  query ListProcedures(
    $filter: ModelProcedureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProcedures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        procedureName
        Code
        reclaimed
        difference
        authorized
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
