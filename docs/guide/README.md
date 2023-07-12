# 目录

## c#

### 文件转base64

```csharp
//测试读取pdf转base64
byte[] mBytes = System.IO.File.ReadAllBytes("测试读取pdf转base64.pdf");
string mBase64String = Convert.ToBase64String(mBytes);
Console.WriteLine(mBase64String);
```

### 读取xml指定节点的值

XMLFIle2.xml：

```xml
<?xml version="1.0" encoding="utf-8" ?>
<root>
  <messageHeader>
    <msgSource>发送系统</msgSource>
    <sender>发送者</sender>
    <receiver>UnionntPLMR</receiver>
    <sendTime>发送时间</sendTime>
    <msgType>病案状态</msgType>
    <msgCode>S034</msgCode>
    <msgId>通知主键</msgId>
  </messageHeader>
  <messageBody>
    <patientNo>住院唯一标识</patientNo>
    <districtCode>院区标识</districtCode>
    <result>结果（1/2）</result>
    <scode>状态编码（01/02/03……）</scode>
    <sname>状态名称</sname>
  </messageBody>
</root>
```

代码：

```csharp
System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
doc.Load("XMLFIle2.xml");
System.Xml.XmlNode root = doc.DocumentElement;
// 读取根节点<root>下的子节点
foreach (System.Xml.XmlNode node in root.ChildNodes)
{
    // 处理子节点
    if (node.Name == "messageBody")
    {
        var a = node.ChildNodes;
        for (int i = 0; i < a.Count; i++)
        {
            if (a[i].Name == "scode")
            {
                Console.WriteLine(a[i].InnerText);
                /*
                // scode节点下还有子节点的话，通过这样获取
                for (int j = 0; j < a[i].ChildNodes.Count; j++)
                {
                    if (a[i].ChildNodes[j].Name == "staffName")
                    {
                        Console.WriteLine(a[i].ChildNodes[j].InnerText);
                    }
                }
                */
            }
        }
    }
}
```



---

[图片转base64](/csharp/图片转base64.md), 

[查看编辑器版本](/csharp/查看编辑器版本.md), 

[对象json字符串序列化](/csharp/对象json字符串序列化.md), 

[获取剪切板的图片](/csharp/获取剪切板的图片.md), 

[图片转base64](/csharp/图片转base64.md), 

[用户按下的键](/csharp/用户按下的键.md), 

[注释格式](/csharp/注释格式.md), 

[cefsharp暴露给js调用方法](/csharp/cefsharp暴露给js调用方法.md), 

[cefsharp下载文件](/csharp/cefsharp下载文件.md), 

[exe发送消息](/csharp/exe发送消息.md), 

[GridControl列表绑定数据](/csharp/GridControl列表绑定数据.md), 

[TreeList树形列表绑定数据](/csharp/TreeList树形列表绑定数据.md), 

[日志信息获取代码第几行](/csharp/日志信息获取代码第几行.md), 

## cnris

[读取配置文件ini](/cnris/读取配置文件ini.md), 

[XtraMessageBox弹框提示](/cnris/XtraMessageBox弹框提示.md), 

[WaitDialogForm正在加载](/cnris/WaitDialogForm正在加载.md), 



<!--

<img :src="$withBase('/he.png')" alt="图片">

-->