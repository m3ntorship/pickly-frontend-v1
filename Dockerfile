FROM node:alpine3.12
WORKDIR /pickly-frontend
COPY ./build .
RUN yarn global add serve

CMD ["serve", "-s", "-l", "3000"]