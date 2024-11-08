/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProcedureInput = {
  id?: string | null,
  procedureName: string,
  Code: string,
  reclaimed?: number | null,
  difference?: number | null,
  authorized?: number | null,
};

export type ModelProcedureConditionInput = {
  procedureName?: ModelStringInput | null,
  Code?: ModelStringInput | null,
  reclaimed?: ModelFloatInput | null,
  difference?: ModelFloatInput | null,
  authorized?: ModelFloatInput | null,
  and?: Array< ModelProcedureConditionInput | null > | null,
  or?: Array< ModelProcedureConditionInput | null > | null,
  not?: ModelProcedureConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Procedure = {
  __typename: "Procedure",
  id: string,
  procedureName: string,
  Code: string,
  reclaimed?: number | null,
  difference?: number | null,
  authorized?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProcedureInput = {
  id: string,
  procedureName?: string | null,
  Code?: string | null,
  reclaimed?: number | null,
  difference?: number | null,
  authorized?: number | null,
};

export type DeleteProcedureInput = {
  id: string,
};

export type ModelProcedureFilterInput = {
  id?: ModelIDInput | null,
  procedureName?: ModelStringInput | null,
  Code?: ModelStringInput | null,
  reclaimed?: ModelFloatInput | null,
  difference?: ModelFloatInput | null,
  authorized?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProcedureFilterInput | null > | null,
  or?: Array< ModelProcedureFilterInput | null > | null,
  not?: ModelProcedureFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProcedureConnection = {
  __typename: "ModelProcedureConnection",
  items:  Array<Procedure | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProcedureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  procedureName?: ModelSubscriptionStringInput | null,
  Code?: ModelSubscriptionStringInput | null,
  reclaimed?: ModelSubscriptionFloatInput | null,
  difference?: ModelSubscriptionFloatInput | null,
  authorized?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProcedureFilterInput | null > | null,
  or?: Array< ModelSubscriptionProcedureFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateProcedureMutationVariables = {
  input: CreateProcedureInput,
  condition?: ModelProcedureConditionInput | null,
};

export type CreateProcedureMutation = {
  createProcedure?:  {
    __typename: "Procedure",
    id: string,
    procedureName: string,
    Code: string,
    reclaimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProcedureMutationVariables = {
  input: UpdateProcedureInput,
  condition?: ModelProcedureConditionInput | null,
};

export type UpdateProcedureMutation = {
  updateProcedure?:  {
    __typename: "Procedure",
    id: string,
    procedureName: string,
    Code: string,
    reclaimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProcedureMutationVariables = {
  input: DeleteProcedureInput,
  condition?: ModelProcedureConditionInput | null,
};

export type DeleteProcedureMutation = {
  deleteProcedure?:  {
    __typename: "Procedure",
    id: string,
    procedureName: string,
    Code: string,
    reclaimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProcedureQueryVariables = {
  id: string,
};

export type GetProcedureQuery = {
  getProcedure?:  {
    __typename: "Procedure",
    id: string,
    procedureName: string,
    Code: string,
    reclaimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProceduresQueryVariables = {
  filter?: ModelProcedureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProceduresQuery = {
  listProcedures?:  {
    __typename: "ModelProcedureConnection",
    items:  Array< {
      __typename: "Procedure",
      id: string,
      procedureName: string,
      Code: string,
      reclaimed?: number | null,
      difference?: number | null,
      authorized?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProcedureSubscriptionVariables = {
  filter?: ModelSubscriptionProcedureFilterInput | null,
};

export type OnCreateProcedureSubscription = {
  onCreateProcedure?:  {
    __typename: "Procedure",
    id: string,
    procedureName: string,
    Code: string,
    reclaimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProcedureSubscriptionVariables = {
  filter?: ModelSubscriptionProcedureFilterInput | null,
};

export type OnUpdateProcedureSubscription = {
  onUpdateProcedure?:  {
    __typename: "Procedure",
    id: string,
    procedureName: string,
    Code: string,
    reclaimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProcedureSubscriptionVariables = {
  filter?: ModelSubscriptionProcedureFilterInput | null,
};

export type OnDeleteProcedureSubscription = {
  onDeleteProcedure?:  {
    __typename: "Procedure",
    id: string,
    procedureName: string,
    Code: string,
    reclaimed?: number | null,
    difference?: number | null,
    authorized?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
