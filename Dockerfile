FROM node:14
WORKDIR /srv/app
COPY ["./", "/srv/app"]
RUN npm install
ENV NODE_ENV=production
CMD ["node", "index.js"]
