---
layout: post
title: Установка Arch Linux  
categories: Linux
image: /static/img/posts/archlinux_logo.png
preview: Руководство по установке и настройке Arch Linux из личного опыта
---

## Установка ArchLinux
---
1. Для подключения к WI-FI использовать iwctl:
```
station wlan0 scan
station wlan0 get-networks
station wlan0 connect <ap_name>
```
2. Разметить диск. 
3. Для обнаружения Windows до конфигурации grub нужно установить:
```
pacman –S ntfs-3g 
pacman –S os-prober
```
1. Установка xorg:
```
pacman  -S xorg-server xorg-utils xorg-apps
Xorg :0 –configure
cp xorg.conf.new /etc/X11/xorg.conf
```