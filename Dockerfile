
FROM atlassianlabs/docker-node-jdk-chrome-firefox

WORKDIR /usr/app
RUN chmod 777 /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .