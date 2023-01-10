FROM node:16.3.0-alpine AS build

WORKDIR /app

COPY . .

RUN npm ci --force && npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g","daemon off;"]
