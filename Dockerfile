# Stage 1
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/eazio-frontend /usr/share/nginx/html
EXPOSE 80