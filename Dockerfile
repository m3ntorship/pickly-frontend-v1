FROM node:alpine3.12

WORKDIR /pickly
COPY ./index.html pickly-bg.svg ./

RUN yarn global add serve

CMD ["serve", "-l", "3000"]