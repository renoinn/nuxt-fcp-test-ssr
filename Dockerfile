FROM node:18-alpine
RUN apk add dumb-init
ENV NODE_ENV production

USER node

WORKDIR /app

COPY --chown=node:node .output/ .

EXPOSE 3000
CMD ["dumb-init", "node", "server/index.mjs"]

