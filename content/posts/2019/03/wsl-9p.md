---
date: 2019-03-01T14:45:00.0+01:00
---

I just installed the latest Windows 10 Insiders Fast Ring build (18346) with the [new Windows Subsystem for Linux updates](https://blogs.msdn.microsoft.com/commandline/2019/02/15/whats-new-for-wsl-in-windows-10-version-1903/?WT.mc_id=personal-blog-duncand) that allows you to access Linux files from Windows.

Before this, to use Visual Studio Code or other Windows apps on the same files you were using with Linux tools, you had to be careful and make sure that you were working in the Windows filesystem, exposed via the `/mnt/c` path. This worked pretty well, but it wasn't quite ideal. I felt a performance hit when running Linux-based tools on a large number of files. And, it felt like the main user story it solved was to enable using Linux tools on Windows files. While that's a good use case to solve, it wasn't _my_ use case.

Now, you can open up any Linux path through what looks like a network connection to Windows apps. This means that you can open up your Linux home directory in Explorer and work directly on files that are located there with Windows applications. The net result is a lot better for the way I work. And, any potential performance hit happens on one file at a time instead of when I run a compile on a whole bunch of source code.

Better yet, _this_ is the developer experience I really want. It solves the use case where I want to use Windows apps in the GUI --- primarily Visual Studio Code as a text editor --- to work with files on the Linux side. It lets me treat the Linux command line as one layer, and Windows as another layer.

Not bad. Not bad at all.
