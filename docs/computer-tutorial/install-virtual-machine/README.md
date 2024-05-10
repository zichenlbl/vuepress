# 安装虚拟机

## VMware 安装 CentOS 7 虚拟机

### 1.1 下载 CentOS 7 ISO 文件

> [https://www.cnblogs.com/wh445306/p/16751695.html](https://www.cnblogs.com/wh445306/p/16751695.html)

CentOS 官网下载：[https://www.centos.org/download](https://www.centos.org/download)

![1.jpg](./1.jpg)


从镜像站下载 ISO 文件：
1. [http://mirrors.aliyun.com](http://mirrors.aliyun.com)（阿里云镜像站）
2. [https://mirrors.tuna.tsinghua.edu.cn](https://mirrors.tuna.tsinghua.edu.cn)（清华大学镜像站）
3. [http://mirrors.sohu.com](http://mirrors.sohu.com)（搜狐镜像站）
4. [http://mirrors.163.com](http://mirrors.163.com)（网易镜像站）

使用阿里云镜像站下载，访问 [http://mirrors.aliyun.com](http://mirrors.aliyun.com)，选择 OS 镜像。

![2.jpg](./2.jpg)


选择发行版 centos，选择版本 7(x86_64-DVD-2207-02)，点击下载。或者复制下载地址进行下载：[https://mirrors.aliyun.com/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-DVD-2207-02.iso](https://mirrors.aliyun.com/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-DVD-2207-02.iso)

![3.jpg](./3.jpg)

![4.jpg](./4.jpg)


下载完后的 ISO 文件。

![5.jpg](./5.jpg)

### 1.2 安装 CentOS 7 虚拟机

![6.jpg](./6.jpg)

![7.jpg](./7.jpg)

![8.jpg](./8.jpg)

![9.jpg](./9.jpg)

![10.jpg](./10.jpg)

![11.jpg](./11.jpg)

![12.jpg](./12.jpg)

![13.jpg](./13.jpg)

![14.jpg](./14.jpg)

![15.jpg](./15.jpg)

![16.jpg](./16.jpg)

![17.jpg](./17.jpg)

![18.jpg](./18.jpg)

![19.jpg](./19.jpg)

![20.jpg](./20.jpg)

![21.jpg](./21.jpg)

![22.jpg](./22.jpg)

### 1.3 开启虚拟机

开机。

![23.jpg](./23.jpg)

鼠标点击黑色界面，把鼠标定位到虚拟机中，然后按上下方向键选中 Install CentOS 7。

![24.jpg](./24.jpg)

然后按Tab键，出现下面这一行信息。

![25.jpg](./25.jpg)

然后按两下空格，输入net.ifnames=0 biosdevname=0（网卡的名字设为0）

![26.jpg](./26.jpg)

然后按回车。

![27.jpg](./27.jpg)

### 1.4 安装系统

安装。

![28.jpg](./28.jpg)

点击时间，选上海时间。

![29.jpg](./29.jpg)

调整时间。

![30.jpg](./30.jpg)

点击安装方式。

![31.jpg](./31.jpg)

最小化安装，然后安装右边几个。

![32.jpg](./32.jpg)

关闭安全。

![33.jpg](./33.jpg)

取消勾选。

![34.jpg](./34.jpg)

### 1.5 分区磁盘

设置磁盘。

![35.jpg](./35.jpg)

选择手动配置，然后点击保存。

![36.jpg](./36.jpg)

设置 /boot 大小。

![37.jpg](./37.jpg)

![38.jpg](./38.jpg)

设置 swap 大小，一般为内存的 1.5 倍。

![39.jpg](./39.jpg)

设置 / 根目录大小，剩下的全部给根目录。

![40.jpg](./40.jpg)

保存。

![41.jpg](./41.jpg)

![42.jpg](./42.jpg)

### 1.6 设置网络

网络配置。

![43.jpg](./43.jpg)

点击自定义。

![44.jpg](./44.jpg)


![45.jpg](./45.jpg)

设置 ip 地址。

![46.jpg](./46.jpg)

可以修改主机名字。

![47.jpg](./47.jpg)

修改后保存，名字不能有下划线。

![48.jpg](./48.jpg)

下一步。

![49.jpg](./49.jpg)

### 1.7 设置 root 密码

设置 root 用户的密码，我的密码设置为 123456。

![50.jpg](./50.jpg)

点两次保存。

![51.jpg](./51.jpg)

等待安装……

![52.jpg](./52.jpg)

### 1.8 重启登录系统

点击重启。

![53.jpg](./53.jpg)

选择启动项。

![54.jpg](./54.jpg)

输入用户名 root ，按回车，输入密码 123456，密码不显示输完按回车。

![55.jpg](./55.jpg)

进入系统。

![image.png](./56.jpg)

输入init 0 关机。

![57.jpg](./57.jpg)

### 1.9 配置虚拟网络编辑器

配置网络。

![58.jpg](./58.jpg)


![59.jpg](./59.jpg)


![60.jpg](./60.jpg)

![61.jpg](./61.jpg)

开启虚拟机，检查虚拟机能否上网，ping qq.com，按 Ctrl+C 结束 ping，访问时间 32 毫秒。

![62.jpg](./62.jpg)

### 1.10 Xshell 连接虚拟机

使用 Xshell 连接虚拟机。

![63.jpg](./63.jpg)


![64.jpg](./64.jpg)


![65.jpg](./65.jpg)

![66.jpg](./66.jpg)

连接成功。

![67.jpg](./67.jpg)

### 1.11 关闭 SELinux

使用虚拟机测试时可以关闭 SELinux 和防火墙，但是正式服务器要开启，并开放端口访问等。

- 关闭防火墙

  ```bash
  systemctl stop firewalld.service
  systemctl disable firewalld.service
  ```

- 关闭 SELinux

  ```bash
  vi /etc/selinux/config
  ```
  把 SELINUX=enforcing 修改为 SELINUX=disabled

- 将 SELinux 的模式临时设置为 Permissive
  setenforce 0

- 查看当前的 SELinux 模式
  getenforce

- 关闭动态网络配置
  systemctl stop NetworkManager
  systemctl disable NetworkManager
  systemctl status NetworkManager

- 修改完成后重启 
  reboot

---

Email：zicl@qq.com

Copyright 2023-2024 Zichen

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<a target="_blank" href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.