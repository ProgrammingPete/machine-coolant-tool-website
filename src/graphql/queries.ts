/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInquiry = /* GraphQL */ `query GetInquiry($id: ID!) {
  getInquiry(id: $id) {
    name
    company
    email
    address
    phone
    description
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetInquiryQueryVariables,
  APITypes.GetInquiryQuery
>;
export const listInquiries = /* GraphQL */ `query ListInquiries(
  $filter: ModelInquiryFilterInput
  $limit: Int
  $nextToken: String
) {
  listInquiries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      company
      email
      address
      phone
      description
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInquiriesQueryVariables,
  APITypes.ListInquiriesQuery
>;
