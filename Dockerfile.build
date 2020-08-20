FROM node:14

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./webpack.config.js /app/webpack.config.js
COPY ./.eslintrc.json /app/.eslintrc.json
COPY ./.prettierrc /app/.prettierrc

RUN npm install
CMD npm run build
