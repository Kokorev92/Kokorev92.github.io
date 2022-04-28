---
layout: post
title: Установка Arch Linux  
categories: Linux
image: /static/img/posts/archlinux_logo.png
preview: Краткое руководство по установке и настройке Arch Linux из личного опыта
---

## Установка ArchLinux

Основным источником информации по установке Arch Linux является WIKI Arch'а:

[https://wiki.archlinux.org/title/installation_guide](https://wiki.archlinux.org/title/installation_guide)

[https://wiki.archlinux.org/title/Installation_guide_(Русский)](https://wiki.archlinux.org/title/Installation_guide_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9))

В этой статье будут приведены лишь краткие инструкции с акцентом на отдельные моменты. Этапы, в которых не приведены примеры команд смотреть в официальном гайде. Пропустим этапы скачивания и записи установочного образа на флешку.

---
1. Для подключения к WI-FI использовать iwctl:
```
station wlan0 scan
station wlan0 get-networks
station wlan0 connect <ap_name>
```
2. Разметить диск.
3. Смонтировать размеченные разделы в ```/mnt```.
4. Настроить зеркала для скачивания пакетов: 
```
vim /etc/pacman.d/mirrorlist
```
5. Установить ядро, основной пакет и прошивки для устройств:
```
pacstrap /mnt base linux linux-firmware 
```
6. Сгенерировать файл ```fstab``` для смонтированных разделов:
```
genfstab -U /mnt >> /mnt/etc/fstab
```
7. Зайти в систему под chroot:
```
    arch-chroot /mnt
```
8. Далее настроить окружение по гайду: часовой пояс, локаль, пользователь.
9. Для работы сети установить пакет NetworkManager:
```
pacman -S networkmanager
```
10. Создать образ ранней загрузки ```initramfs```:
```
mkinitcpio -plinux
```
11. Для обнаружения Windows до конфигурации grub нужно установить:
```
pacman –S ntfs-3g 
pacman –S os-prober
```
12. Установка и настройка загрузчика ```Grub```:
```
pacman -S grub
grub-install /dev/sda 
grub-mkconfig -o /boot/grub/grub.cfg
```
Если во время генерации конфигурационного файла Grub вы увидите предупреждение: ```"Warning: os-prober will not be executed to detect other bootable partitions"```, значит необходимо отредактировать настройки Grub и перезапустить генерацию конфигурационного файла:
```
vim /etc/default/grub -> GRUB_DISABLE_OS_PROBER=false
```

13. Установка xorg:
```
pacman  -S xorg-server xorg-utils xorg-apps
Xorg :0 –configure
cp xorg.conf.new /etc/X11/xorg.conf
```

После этого можно перезагрузить компьютер, войти в Arch под созданной учетной записью и продолжить установку пакетов и конфигурацию системы под себя. Иногда могут возникнуть проблемы с отображением кириллицы в эмуляторе терминала, например в ```kitty```. Для исправления необходимо в файл ```.bashrc```  или ```.zshrc``` добавить строчку:
```
export LC_ALL="en_US.UTF-8"
```