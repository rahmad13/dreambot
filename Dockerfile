FROM node:16.6.1-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@8.3.0
RUN npm install i
RUN npm install ytdl-core
RUN npm install yt-search

COPY . .

EXPOSE 5000

CMD ["node", "index", "--db", "mongodb+srv://rahmad001:<rahmad001>@cluster0.uezbk.mongodb.net/rahmad?retryWrites=true&w=majority"]
