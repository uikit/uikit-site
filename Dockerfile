FROM node:20 as build

# environment variables
ARG COMMIT_HASH=empty
ENV COMMIT_HASH $COMMIT_HASH

# install dependencies
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN corepack enable && \
    corepack prepare --activate && \
    pnpm install

# compile css and uikit tests
# build static files
WORKDIR /app
COPY . .
RUN pnpm compile && \
    rm -rf ./build/assets/uikit/node_modules/ && \
    pnpm build

# build uikit v2
FROM node:18 as build-v2
ADD https://github.com/uikit/uikit-site/releases/download/2016.12/uikit-site-v2.zip uikit.zip
RUN unzip uikit.zip -d ./uikit && \
    rm uikit.zip && \
    mv ./uikit ./app

WORKDIR /app
RUN yarn install && \
    yarn gulp build-site && \
    rm -rf ./node_modules/

# setup httpd
FROM httpd:2.4-alpine as httpd
WORKDIR /usr/local/apache2
RUN sed -i "s/ServerAdmin you@example.com/ServerAdmin info@getuikit.com/" ./conf/httpd.conf && \
    sed -i "s/AllowOverride None/AllowOverride All/" ./conf/httpd.conf && \
    sed -i "/LoadModule rewrite_module/s/^#//g" ./conf/httpd.conf && \
    sed -i "/LoadModule expires_module/s/^#//g" ./conf/httpd.conf

# copy htdocs
WORKDIR /usr/local/apache2/htdocs
COPY --from=build /app/build/ .
COPY --from=build-v2 /app/ ./v2
