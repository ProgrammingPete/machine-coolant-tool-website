/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createInquiry = /* GraphQL */ `mutation CreateInquiry(
  $input: CreateInquiryInput!
  $condition: ModelInquiryConditionInput
) {
  createInquiry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateInquiryMutationVariables,
  APITypes.CreateInquiryMutation
>;
export const updateInquiry = /* GraphQL */ `mutation UpdateInquiry(
  $input: UpdateInquiryInput!
  $condition: ModelInquiryConditionInput
) {
  updateInquiry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateInquiryMutationVariables,
  APITypes.UpdateInquiryMutation
>;
export const deleteInquiry = /* GraphQL */ `mutation DeleteInquiry(
  $input: DeleteInquiryInput!
  $condition: ModelInquiryConditionInput
) {
  deleteInquiry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteInquiryMutationVariables,
  APITypes.DeleteInquiryMutation
>;
