FROM node:18 as build

USER node

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci --only=production

FROM gcr.io/distroless/nodejs18-debian11

COPY --from=build . ./

EXPOSE 3200

CMD ["index.js"]
