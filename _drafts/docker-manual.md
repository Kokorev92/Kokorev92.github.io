---
layout: post
title: Docker - что это и с чем его едят   
categories: Linux
image: /static/img/posts/docker_logo.png
preview: Инструкция-шпаргалка по работе с Docker - образы, контейнеры и сеть.
---

# Что такое Docker

## Описание

Docker - система контейнеризации приложений. По сути приложение выполняется в изолированном контейнере, с установкой всех необходимых зависимостей. Это не виртуализация, а именно изоляция окружения - все контейнеры используют ядро основной системы, что позволяет экономить ресурсы. 

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
```

Linux Arch:

```bash
sudo pacman -S docker

sudo usermod -aG docker ${USER}
```

## Основные команды

Выкачивание образа:
```bash
docker pull ubuntu
```

## docker-compose

docker-compose представляет собой удобную утилиту для управления сразу несколькими контейнерами.