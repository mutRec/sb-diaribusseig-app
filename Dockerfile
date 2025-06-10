# Build Angular frontend
FROM node:22.16.0-alpine as frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build --prod

# Build backend
FROM node:22.16.0-alpine as backend
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# Copy Angular build to backend public folder (abans era ./public)
COPY --from=frontend-build /frontend/dist/frontend ./sb-diaribusseig 

EXPOSE 3000
CMD ["node", "server.js"]