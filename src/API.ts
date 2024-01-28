/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInquiryInput = {
  name: string,
  company: string,
  email: string,
  address: string,
  phone: string,
  description?: string | null,
  id?: string | null,
};

export type ModelInquiryConditionInput = {
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelInquiryConditionInput | null > | null,
  or?: Array< ModelInquiryConditionInput | null > | null,
  not?: ModelInquiryConditionInput | null,
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

export type Inquiry = {
  __typename: "Inquiry",
  name: string,
  company: string,
  email: string,
  address: string,
  phone: string,
  description?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInquiryInput = {
  name?: string | null,
  company?: string | null,
  email?: string | null,
  address?: string | null,
  phone?: string | null,
  description?: string | null,
  id: string,
};

export type DeleteInquiryInput = {
  id: string,
};

export type ModelInquiryFilterInput = {
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelInquiryFilterInput | null > | null,
  or?: Array< ModelInquiryFilterInput | null > | null,
  not?: ModelInquiryFilterInput | null,
};

export type ModelInquiryConnection = {
  __typename: "ModelInquiryConnection",
  items:  Array<Inquiry | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionInquiryFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInquiryFilterInput | null > | null,
  or?: Array< ModelSubscriptionInquiryFilterInput | null > | null,
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

export type CreateInquiryMutationVariables = {
  input: CreateInquiryInput,
  condition?: ModelInquiryConditionInput | null,
};

export type CreateInquiryMutation = {
  createInquiry?:  {
    __typename: "Inquiry",
    name: string,
    company: string,
    email: string,
    address: string,
    phone: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInquiryMutationVariables = {
  input: UpdateInquiryInput,
  condition?: ModelInquiryConditionInput | null,
};

export type UpdateInquiryMutation = {
  updateInquiry?:  {
    __typename: "Inquiry",
    name: string,
    company: string,
    email: string,
    address: string,
    phone: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInquiryMutationVariables = {
  input: DeleteInquiryInput,
  condition?: ModelInquiryConditionInput | null,
};

export type DeleteInquiryMutation = {
  deleteInquiry?:  {
    __typename: "Inquiry",
    name: string,
    company: string,
    email: string,
    address: string,
    phone: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInquiryQueryVariables = {
  id: string,
};

export type GetInquiryQuery = {
  getInquiry?:  {
    __typename: "Inquiry",
    name: string,
    company: string,
    email: string,
    address: string,
    phone: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInquiriesQueryVariables = {
  filter?: ModelInquiryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInquiriesQuery = {
  listInquiries?:  {
    __typename: "ModelInquiryConnection",
    items:  Array< {
      __typename: "Inquiry",
      name: string,
      company: string,
      email: string,
      address: string,
      phone: string,
      description?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInquirySubscriptionVariables = {
  filter?: ModelSubscriptionInquiryFilterInput | null,
};

export type OnCreateInquirySubscription = {
  onCreateInquiry?:  {
    __typename: "Inquiry",
    name: string,
    company: string,
    email: string,
    address: string,
    phone: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInquirySubscriptionVariables = {
  filter?: ModelSubscriptionInquiryFilterInput | null,
};

export type OnUpdateInquirySubscription = {
  onUpdateInquiry?:  {
    __typename: "Inquiry",
    name: string,
    company: string,
    email: string,
    address: string,
    phone: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInquirySubscriptionVariables = {
  filter?: ModelSubscriptionInquiryFilterInput | null,
};

export type OnDeleteInquirySubscription = {
  onDeleteInquiry?:  {
    __typename: "Inquiry",
    name: string,
    company: string,
    email: string,
    address: string,
    phone: string,
    description?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
