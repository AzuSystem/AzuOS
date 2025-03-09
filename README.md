<div align="center">
 <img width="120" alt="AzuOS: If it runs on the Web, it runs on AzuOS" src="assets/logo.svg">
	<h1>AzuOS</h1>
	<p>AzuOS is an Arch-based Operating System featuring a Desktop Environment written with Web Technologies and a Python Backend.</p>
	<a href='https://azusystem.github.io/AzuOS'>Try out a live demo ↗</a>
</div>

## 👀 What does AzuOS offer?
An advantage of AzuOS being built on Web Technologies is it allows users and developers to easily customize their system and make it their own.
From a simple change in a theme file, to replacing a css file, to literally writing your own desktop script.

All that is required for developers is experience with Vanilla Javascript and you're good to go 👍

## 🧐 Why?
I know... it seems weird having a Desktop Environment based on Javascript and Python and this alone is enough to drive some people away, which is understandable.
A Web-Based Desktop makes development faster and easier, even for those just forking the project. Although admittedly, a desktop not written primarily with such languages is better.

## 🔧 What does AzuOS run on?
AzuOS is built using Javascript & Python, however runs on top of [Arch Linux](https://archlinux.org).

Theoretically, AzuOS can run on other linux systems, assuming they also use bash, you may need to replace some shell scripts with ones that work on your linux distro of choice.

FreeBSD could probably work too, although shell scripts may require rewriting too.

## 💻 Getting Started
If you're interested in contributing to AzuOS or forking the project, you first need to setup up your workspace!

***Disclaimer: AzuOS is primarily designed for Unix-like platforms, such as Linux or BSD. It is not guaranteed to work on Windows due to compatibility issues. If you encounter problems, we encourage you to contribute a fix or seek community support. However, do not make a GitHub Issue about incompatibility for Windows.***

So here's how:

First confirm you have `git`, `python3`, `python3-pip` and `xorg`

### Installing Git

Make sure you have `git` installed, this will allow you to fetch the latest AzuOS source directly from GitHub

Git for Debian/Ubuntu (Debian-based distros):

```bash
sudo apt install git-all
```

Git for Arch Linux:

```bash
sudo pacman -S git
```

Git for Windows: 

> There are also a few ways to install Git on Windows. The most official build is available for download on the Git website. Just go to https://git-scm.com/download/win
> and the download will start automatically. Note that this is a project called Git for Windows, which is separate from Git itself; for more information on it,
> go to https://gitforwindows.org.

_Source: [Getting Started: Installing Git (git-scm.com)](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)_

Git for MacOS:

> There are several ways to install Git on macOS. The easiest is probably to install the Xcode Command Line Tools. On Mavericks (10.9) or above you can do this simply by trying to run git from the Terminal the very first time.

```bash
$ git --version
```

> If you don’t have it installed already, it will prompt you to install it.

> If you want a more up to date version, you can also install it via a binary installer. A macOS Git installer is maintained and available for download at the Git website, at https://git-scm.com/download/mac.

_Source: [Getting Started: Installing Git (git-scm.com)](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)_

If your operating system of choice isn't listed, please do research on installing git for said system.

After installing `git`, to download AzuOS, run

```bash
git clone https://github.com/AzuSystem/AzuOS {directory of choice}
cd {directory of choice}
```

It is recommended that you clone this repo into /azuos, although you'll likely need to use sudo to do so.

### Python 3
Now for python, which is required for initialising AzuOS, and uh, we won't be using [electron](https://electronjs.org) anytime soon.

Python for Debian/Ubuntu (Debian-based distros):

```bash
sudo apt install python3 python3-pip
```

Python for Arch Linux:

```bash
sudo pacman -S python python-pip
```

Python Installer for Windows (Don't forget to install with pip!): 
https://www.python.org/downloads/windows/

Python Installer for MacOS (Don't forget to install with pip!): 
https://www.python.org/downloads/macos/

If your operating system of choice isn't listed, please do research on installing Python 3 and PIP for Python for said system.

### Python Libaries
Once python and pip have been installed, we need to install a few modules

This command in most cases, should be universal across operating systems, if it doesn't work, you may need to google for solutions :'(

```bash
pip install pywebview psutil py-cpuinfo
```

### X11 Server
AzuOS runs on X.org in a live ISO.

If you wanna try running AzuOS via X.org, you'll need to install it first.
If you're a Windows/MacOS user, don't worry about this :3


Xorg for Debian/Ubuntu (Debian-based distros):

```bash
sudo apt install xorg
```

Xorg for Arch Linux:

```bash
sudo pacman -S xorg
```

After installing, somewhere in your home directory (/home/username or ~/) you'll find `.xinitrc`

Open/create this file in a text editor of your choice (i'll use vim)

```bash
sudo vim ./.xinitrc
```

And write

```bash
python {azuos directory}
```

And save

```bash
:wq
```

Afterwards, if you wanna start X server with AzuOS running, just run

```bash
startx
```

## 💜 Backstory
I (MTSyntho), come from a background of making OS Concepts using Windows Batch Scripting and Microsoft PowerPoint.

None of my creations were any good but I enjoyed making them either way, since those days it's been my dream to make my own functional OS to some degree.

And now 3 years later, in 2024, we have AzuOS, i'll never forget those amazing days ❤️

_p.s azuos doesnt need a web server to run, running the html page directly works pretty well :3_