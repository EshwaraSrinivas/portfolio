FROM node:alpine
WORKDIR '/portfolio-app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8200
CMD npm run start