
FROM atlassianlabs/docker-node-jdk-chrome-firefox

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .