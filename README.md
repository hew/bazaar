# QUP

## Further Documentation

 * [Frontend](https://github.com/hew/qup-monorepo/tree/master/frontend)

## Project Structure

The QUP codebase is mostly comprised of a few different Yarn [Workspaces](https://yarnpkg.com/en/docs/workspaces):

  * `amplify/backend/function/qupacd15c1fPostConfirmation/src/`
  * `amplify/backend/function/emailManager/src/`
  * `amplify/backend/function/gameInit/src/`
  * `amplify/backend/function/gameMarshaller/src/`
  * `amplify/backend/function/gameClock/src/`
  * `amplify/backend/function/streams/src/`
  * `frontend/`

*💡 Basically what this means is that Yarn will coordinate the shared dependencies with the
listed workspaces so you don't need to run `yarn install` in each directory.*

## Common Commands

### Install Dependencies (For All Workspaces)

(from the top level)

    yarn install

### Run all backend test suites

    yarn run test

### Run all frontend test suites

    cd frontend
    yarn run test

### Compile amplify config, queries, etc, for all lambdas

    yarn run compile-all

## Amplify Environment Flow

    amplify env checkout {name}

The above command will clone all the Amplify services into a new environment, where {name} is the environment name you want. (ex: 'dev').

Additionally, you will need to take these steps:

1. In the AWS UI, add these custom attributes to the generated Cognito User Pool

* custom:teamId
* custom:referralId
* custom:createTeam
* custom:playerData

2. Set Attribute read permissions

![image](https://user-images.githubusercontent.com/3103241/66628242-1a094800-ebb3-11e9-96c3-c6ab4a5675c7.png)


## Something here not working?

Open an issue [here](https://github.com/hew/qup-monorepo/issues/88)

## Code of Conduct

In the interest of fostering an open and welcoming environment, please refrain from conduct which could reasonably be considered inappropriate in a professional setting.
