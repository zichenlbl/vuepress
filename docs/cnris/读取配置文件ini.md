### 读取配置文件

```csharp
string mServerUrl = IniReadValue("SERVER", "HttpServerUrl", Application.StartupPath + "\\sysconfig.ini");
```



### 写入配置文件

```csharp
IniWriteValue("SERVER", "HttpServerUrl", mServerUrl, Application.StartupPath + "\\sysconfig.ini");
```

