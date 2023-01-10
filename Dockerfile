FROM node:12.20.0-alpine3.9 as build-stage

# make the 'usr/src/app' folder the current working directory
WORKDIR /usr/src/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies and patch vulnerabilities
RUN npm install

COPY ./ .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# copy artifact build from the 'build stage'
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g","daemon off;"]
