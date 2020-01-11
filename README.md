# gateway api

## enpoints

`/auth/login`	
`/auth/register`	
`/auth/reset-password`	
			
`/blacklist/add`
`/blacklist/delete:id`
`/blaclist/get`
			
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
