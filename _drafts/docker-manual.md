---
layout: post
title: Docker - что это и с чем его едят   
categories: Linux
image: /static/img/posts/docker_logo.png
preview: Инструкция-шпаргалка по работе с Docker - образы, контейнеры и сеть.
---

## Что такое Docker

## Установка Docker

Linux Ubuntu:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

sudo apt upgrade
sudo apt update

apt-cache policy docker-ce
sudo apt install docker-ce 

sudo usermod -aG docker ${USER}
su - ${USER}
id -nG
```