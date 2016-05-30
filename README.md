##the gist of it
[![CircleCI](https://circleci.com/gh/jason-c-child/the-gist-of-it/tree/master.svg?style=shield&circle-token=a658d9402936e175cc67495421a40ea70e6856e9)](https://circleci.com/gh/jason-c-child/the-gist-of-it/tree/master)
###parsing some json for *Avalanche*
[CHANGELOG](https://github.com/jason-c-child/the-gist-of-it/blob/master/CHANGELOG.md)


Pull some JSON down from a [URL](https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json) and parse, outputting widgets merged with the corresponding asset's props as determined by `asset-uuid`

To build, clone, `npm install`, `npm run build`, and transpiled js will be in `/lib`

To run, build first then `npm run start`

To test `npm run test`

### Runtime options

```
Avalanche CreativeFamily Widget Flattener
v0.5.6

Enter a REST URL endpoint which will return a CreativeFamily JSON file

syntax:
        npm run start -- [options]
options:
        --url <CreativeFamily JSON url || 'sample'>
        --help

```

### Docker

Run `docker build .` to compile a dockerized image. You may want to tag the image with `-t <yourtag>`.

```console
Jasons-MacBook-Pro:the-gist-of-it-bk jasonchild$ docker build -t the-gist-of-it .
Sending build context to Docker daemon 33.85 MB
Step 1 : FROM node:6-onbuild
# Executing 3 build triggers...
Step 1 : COPY package.json /usr/src/app/
 ---> Using cache
Step 1 : RUN npm install
 ---> Using cache
Step 1 : COPY . /usr/src/app
 ---> 7bbc9069340f
Removing intermediate container 1ca250de62c1
Step 2 : RUN mkdir -p /usr/src/app
 ---> Running in 1f67682765a8
 ---> 08b5092b4300
Removing intermediate container 1f67682765a8
Step 3 : WORKDIR /usr/src/app
 ---> Running in 8b5ecee2a66a
 ---> 3f1f4eb8835e
Removing intermediate container 8b5ecee2a66a
Step 4 : COPY package.json /usr/src/app/
 ---> e86a0c15d07e
Removing intermediate container 6e0b1703c3d5
Step 5 : RUN npm install
 ---> Running in efd2b51beec9
npm info it worked if it ends with ok
...
npm info ok
 ---> 44d5833c1fae
Removing intermediate container efd2b51beec9
Step 6 : CMD npm build
 ---> Running in 942e772aa0ab
 ---> 787eee782129
Removing intermediate container 942e772aa0ab
Step 7 : COPY . /usr/src/app/lib
 ---> 28e0cd7da4c8
Removing intermediate container 97aa7fda056f
Step 8 : CMD npm start
 ---> Running in 94bcacc9cffd
 ---> ce0723233937
Removing intermediate container 94bcacc9cffd
Successfully built ce0723233937
Jasons-MacBook-Pro:the-gist-of-it-bk jasonchild$ docker images
REPOSITORY                     TAG                 IMAGE ID            CREATED             SIZE
the-gist-of-it                 latest              ce0723233937        5 minutes ago       736.6 MB
Jasons-MacBook-Pro:the-gist-of-it-bk jasonchild$ docker run -i -t the-gist-of-it:latest
npm info it worked if it ends with ok
npm info using npm@3.8.9
npm info using node@v6.2.0
npm info lifecycle the_gist_of_it@0.5.6~prestart: the_gist_of_it@0.5.6
npm info lifecycle the_gist_of_it@0.5.6~start: the_gist_of_it@0.5.6

> the_gist_of_it@0.5.6 start /usr/src/app
> node lib/app.js

Avalanche CreativeFamily Widget Flattener
v0.5.6

Enter a REST URL endpoint which will return a CreativeFamily JSON file

URL >

```
