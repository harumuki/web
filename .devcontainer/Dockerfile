FROM mcr.microsoft.com/vscode/devcontainers/base:debian
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends software-properties-common \
    build-essential git-lfs ruby python-dev python3-pip brotli nodejs
RUN pip3 install fonttools brotli