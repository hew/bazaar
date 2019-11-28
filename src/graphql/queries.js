/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBazaar = `query GetBazaar($id: ID!) {
  getBazaar(id: $id) {
    id
    title
    content
  }
}
`;
export const listBazaars = `query ListBazaars(
  $filter: ModelbazaarFilterInput
  $limit: Int
  $nextToken: String
) {
  listBazaars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
    }
    nextToken
  }
}
`;
