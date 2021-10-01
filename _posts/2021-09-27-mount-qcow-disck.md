---
layout: post
title: Монтировнаие образов Qemu  
categories: Linux
image: /static/img/posts/qemu_logo.png
---
<img src="/static/img/posts/qemu_logo.png" width="15%" style="float:right; margin:10px 10px;"/>&nbsp;&nbsp;&nbsp;&nbsp;

Монтирование образа qcow в Ubuntu
-------------------------------

Краткое руководство о том, как примонтировать образ жесткого диска Qemu в Linux

**Шаг 1 - Подключить модуль NBD**
    
    modprobe nbd max_part=8

**Шаг 2 - Подключить QCOW2 как блочное устройство**

    qemu-nbd --connect=/dev/nbd0 ~/vm/disk.qcow2

**Шаг 3 - Посмотреть список разделов**

    fdisk /dev/nbd0 -l

**Шаг 4 - Примонтировать раздел**

    mount /dev/nbd0p1 /mnt/somepoint/

**Шаг 5 - Размонтирвоание раздела, отключение модуля**

    umount /mnt/somepoint/
    qemu-nbd --disconnect /dev/nbd0
    rmmod nbd
