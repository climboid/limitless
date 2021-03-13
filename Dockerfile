FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY server.conf /etc/nginx/conf.d/default.conf


EXPOSE 3000
