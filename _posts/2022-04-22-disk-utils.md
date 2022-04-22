---
layout: post
title: Создание образов дисков в Linux  
categories: Linux
image: /static/img/posts/hdd_logo.png
preview: Создание образов дисков, изменение, запись на диск
---

## Работа с образами дисков в Linux

---
 &nbsp; &nbsp; &nbsp; &nbsp; В этой статье я расскажу о том, как пользоваться командами для работы с диском Linux, такими как ```dd```, ```fdisk``` и т.п. и расскажу как с их помощью создавать образы, изменять их и записывать обратно на диск.


### 1. Создение образа диска командой ```dd```


&nbsp; &nbsp; &nbsp; &nbsp; Команда ```dd``` применяется для побайтового копирования файлов. Поскольку вся суть Linux построенна на концепции, что всё есть файл, то с помощью этой команды можно побайтно копировать диск, создать его образ или клонировать диск напрямую с одного на другой. 


**Пример создания образа диска:**

    dd if=/dev/sda of=my_image.img bs=1M

### 2. Запись образа на диск
&nbsp; &nbsp; &nbsp; &nbsp; Для записи образа на диск необходимо поменять местами значение параметров if и of у команды dd