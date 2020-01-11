# Gateway api

This is a gateway for a microservices architecture. In this configuration the gateway will have four roles:

* authentication
* authorization
* routing


## enpoints

### authentication

`/auth/login` - autheticates existing users
`/auth/register` - creates a new user and autheticates it
`/auth/reset-password` - allows existing users to change the password

### authorization

`/blacklist/add` - blacklists an ip
`/blacklist/delete:id` - whitelists an ip
`/blacklist/get` - retrieves all ips from the blacklist

### routing

`/subs/*` - redirects all requests to a subscription middleware integration with stripe
`/**/*` - redirects requests to other micro services

## how to install

git@github.com:catalinnita/gateway-api.git

create .env file with these vars:\
`CONNECTION_STRING` - mongo db server url\
`SECRET_KEY` - secret for signing the tokens\
`REDIRECT_SUBS` - url of subs microservice\
`REDIRECT_SETTINGS` - url of settings microservice\

```
npm i yarn -g
yarn
node server.js
```
