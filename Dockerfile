FROM node:16.6.1-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@7.20.5
RUN npm install i
RUN npm install ytdl-core
RUN npm install yt-search

COPY . .

EXPOSE 5000

CMD ["node", "index"]
