# Stage 1: Build the Next.js app
FROM node:21 AS builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

# Stage 2: Run the built app
FROM node:21-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/modules/app ./

EXPOSE 4200

CMD ["npx", "next", "start", "-p", "4200"]
