ARG BASE_IMAGE
FROM $BASE_IMAGE
# Set node version
ENV NODE_VERSION=13
# Run setup steps
RUN sudo apt-get remove -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN curl -sSL --fail https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y -o Dpkg::Options::="--force-confold" --no-install-recommends --no-install-suggests nodejs dialog apt-utils libpng-dev build-essential gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release libgbm1 xdg-utils wget jpegoptim optipng gifsicle webp libtool automake autoconf nasm
RUN apt-get clean && apt-get autoremove