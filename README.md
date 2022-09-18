# bizcenter-tiptip-sso-poc

The `tiptip-sso-poc` and this app are a proof of concept of Cognito session integration between Tiptip main web app with the upcoming Tiptip Business Center web app.

## Prerequisites

* macOS (Developed on macOS 12)
* Node.js v16
* [Homebrew](https://brew.sh)
* tiptip-sso-poc

## Deployment

Make sure that your system has met the prerequisites above before running the following deployment steps.

### Clone The Repository

Clone the repo in the same parent directory with the `tiptip-sso-poc` repo, for example:

    $ git clone <repo_url> ~/apps/bizcenter-tiptip-sso-poc

### Update macOS Hosts File

Update your system's hosts file by inserting the following lines:

    127.0.0.1	biznet.tiplocal.studio

### Update Credential Values

Use your Javascript editor to open `/src/index.js` and update the credential values listed below with the real values.

    __USER_POOL_ID__
    __CLIENT_ID__

### Install Packages
    $ npm install

### Run The Application
    $ npx webpack serve --mode=development

## Result

To see the result, use a web browser and visit https://biznet.tiplocal.studio:9001. You will see the Cognito username of a user signed in at https://tiplocal.studio.

***
&copy; 2022 Tiptip.tv.