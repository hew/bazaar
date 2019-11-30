/*
 * Custom Error Messages (for forms)
 */

// The actual code in the AWS Amplify library
export const mapEntries = [
  ['User does not exist', /user.*not.*exist/i],
  ['User already exists', /user.*already.*exist/i],
  ['Incorrect username or password', /incorrect.*username.*password/i],
  ['Invalid password format', /validation.*password/i],
  [
    'Invalid phone number format',
    /invalid.*phone/i,
    'Invalid phone number format. Please use a phone number format of +12345678900',
  ],
];

// Custom overrides
export default (message) => {
  if (/incorrect.*username.*password/i.test(message)) {
    return 'Geez, get it together.';
  }

  return message;
}
