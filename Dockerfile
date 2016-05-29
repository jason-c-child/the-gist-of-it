FROM node:6-onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
CMD ["npm", "build"]
COPY . /usr/src/app/lib
CMD ["npm", "start"]