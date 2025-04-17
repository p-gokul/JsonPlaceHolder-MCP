FROM node:22.12-alpine AS builder

WORKDIR /app

COPY package.json /package.json
COPY tsconfig.json /tsconfig.json

RUN npm install

COPY . .

RUN npm run build

FROM node:22.12-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

RUN npm install

CMD ["node", "dist/index.js"]