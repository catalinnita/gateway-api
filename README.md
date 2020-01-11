# Gateway api

This is a gateway api part of a microservices / SPA boilerplate for SAAS apps. The solution includes:

* the gateway api - this one
* stripe integration middleware api - [link]
* react SPA app - [link]

For more details about building microservices using a gateway please read https://www.nginx.com/blog/building-microservices-using-an-api-gateway/

## the tech stack

* node
  * express
  * jwt
* mongodb

## api role

In this configuration the gateway will have three roles:

* authentication
* authorization
* routing

[placeholder for schema]

## technical details


## who will consume the api

[links to front-end repos]
* website checkout
* application

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

## contribute

[link to slack channel]
[link to trello board]
