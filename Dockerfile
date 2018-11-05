FROM node

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y libx11-xcb1 libxtst6 libnss3 libxss1 libasound2 libatk-bridge2.0-0 libgtk-3-0

RUN mkdir -p /bot

COPY package-lock.json /bot/
COPY package.json /bot/

WORKDIR /bot/

RUN npm install