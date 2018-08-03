FROM node:8.6
WORKDIR /usr/src/app
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .
RUN npm install --production
COPY . .
EXPOSE 3000
CMD [ "node", "src/index" ]