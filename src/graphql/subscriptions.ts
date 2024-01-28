/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateInquiry = /* GraphQL */ `subscription OnCreateInquiry($filter: ModelSubscriptionInquiryFilterInput) {
  onCreateInquiry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInquirySubscriptionVariables,
  APITypes.OnCreateInquirySubscription
>;
export const onUpdateInquiry = /* GraphQL */ `subscription OnUpdateInquiry($filter: ModelSubscriptionInquiryFilterInput) {
  onUpdateInquiry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInquirySubscriptionVariables,
  APITypes.OnUpdateInquirySubscription
>;
export const onDeleteInquiry = /* GraphQL */ `subscription OnDeleteInquiry($filter: ModelSubscriptionInquiryFilterInput) {
  onDeleteInquiry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInquirySubscriptionVariables,
  APITypes.OnDeleteInquirySubscription
>;
