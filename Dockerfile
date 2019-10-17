FROM node:10
ADD npmrc /usr/local/etc/npmrc
RUN npm install jake netlify-cli -g
ENTRYPOINT ["jake"]