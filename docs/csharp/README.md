# csharp

## Winform

### 读取/写入ini配置文件

configuration.ini

```ini
[Video]
Url=https://www.bilibili.com/video/
VideoBVNumber0=BV19u411e7xa
VideoBVNumber1=BV1wS4y1N7qB
VideoBVNumber2=BV1qc411J7o2
VideoBVNumber3=BV1Mz4y1Y7FX
VideoBVNumber4=BV1rm4y1y7qh
VideoBVNumber5=BV1oc411J7wP
VideoBVNumber6=BV1jP411U7Xu
VideoBVNumber7=BV1Tv4y1J7zk
VideoBVNumber8=BV15c411g7mQ
VideoDuration=5
```

winform读取ini配置的值：

```csharp
// 读取ini文件
[System.Runtime.InteropServices.DllImport("kernel32")]
private static extern int GetPrivateProfileString(string section, string key, string def, System.Text.StringBuilder retVal, int size, string filePath);

// 写入ini文件
[System.Runtime.InteropServices.DllImport("kernel32")]
private static extern long WritePrivateProfileString(string section, string key, string val, string filePath);

private void button_Click(object sender, EventArgs e)
{
    StringBuilder temp = new StringBuilder(500);
    // 读取，读取到的长度
    int bilibiliUrlLength = GetPrivateProfileString("Video", "Url", "", temp, 100, Application.StartupPath + "\\configuration.ini");
    // 没读取到
    if (bilibiliUrlLength < 1)
    {
        // 写入空值，1:true，0:false
        long result = WritePrivateProfileString("Video", "Url", "", Application.StartupPath + "\\configuration.ini");
    }
    Console.WriteLine(temp.ToString());
}
```

### 按下按键

winform按下键盘上指定的键

```csharp
[System.Runtime.InteropServices.DllImport("user32.dll")]
public static extern void keybd_event(byte bVk, byte bScan, int dwFlags, int dwExtraInfo);

[System.Runtime.InteropServices.DllImport("user32.dll")]
private static extern void keybd_event(System.Windows.Forms.Keys key, int scanCode, uint flags, int extraInfo);

private void button_Click(object sender, EventArgs e)
{
    // 释放键标志位
    const int KEYEVENTF_KEYUP = 0x0002; 
    // 49对应键盘1
    byte key = (byte)49;

    // 按下Ctrl
    keybd_event(Keys.ControlKey, 0, 0, 0);
    // 按下1
    keybd_event(key, 0, 0, 0);

    // 松开Ctrl
    keybd_event(Keys.ControlKey, 0, KEYEVENTF_KEYUP, 0);
    // 松开1
    keybd_event(key, 0, KEYEVENTF_KEYUP, 0);
}
```

### 委托改label文本值

```csharp
/// <summary>
/// 追加textbox文字方法
/// </summary>
/// <param name="log"></param>
private void SetLogTextAdd(string log)
{
    textBox1.Text += log;
    // 选定文本的起始点
    textBox1.SelectionStart = textBox1.Text.Length;
    // 设置文本框中选定的字符数
    textBox1.SelectionLength = 0;
    // 滚动到当前插入字符的位置
    textBox1.ScrollToCaret();
}

/// <summary>
/// 设置textbox文字委托
/// </summary>
/// <param name="str"></param>
public delegate void SetLogTextDelegate(string str);

// 点击按钮修改textBox1的内容
private void button3_Click(object sender, EventArgs e)
{
    SetLogTextDelegate setLogText = new SetLogTextDelegate(SetLogTextAdd);
    if (textBox1.InvokeRequired)
    {
        textBox1.Invoke(setLogText, new object[] { "\r\n准备运行" });
    }
    else
    {
        textBox1.Text += "\r\n准备运行";
    }
}
```

### 读取pdf转base64

pdf文件：测试读取pdf转base64.pdf

```csharp
//测试读取pdf转
byte[] mBytes = System.IO.File.ReadAllBytes("测试读取pdf转base64.pdf");
string mBase64String = Convert.ToBase64String(mBytes);
Console.WriteLine(mBase64String);
```

### 关闭窗体时取消关闭

```csharp
/// <summary>
/// 窗体关闭确认前事件
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    // 取消关闭事件
    e.Cancel = true;
    // 最小化窗口
    this.WindowState = FormWindowState.Minimized;
}
```

### 点击托盘退出按钮关闭程序

```csharp
private void 退出ToolStripMenuItem_Click(object sender, EventArgs e)
{
    // 终止此进程，并为基础操作系统提供指定的退出代码。
    Environment.Exit(0);
    // 该方法会通知所有消息泵必须终止，如果存在托管线程（非主线程），也无法干净退出
    //Application.Exit();
}
```

### 顶部菜单Alt快捷键

menuStrip1组件

ToolStripMenuItem的Text属性设置为：

```json
文件(&F)
```

按alt键，然后按F键就打开菜单文件。

![image-20230720152210462](./image-20230720152210462.png)

## .net framework

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

代码读取：

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

### 读取xml指定节点的值（XPath表达式）

XMLFile3.xml

```xml
<?xml version="1.0" encoding="utf-8" ?>
<root>
  <id root="2.16.156.10011.2.5.1.1" extension="b7722265-cc05-4b72-b3ed-fe54b30a34c4"/>
  <!--@value消息发送时间-->
  <creationTime value="20210108153405"/>
  <interactionId root="2.16.156.10011.2.5.1.2" extension="POOR_IN200901UV"/>
  <processingCode code="P"/>
  <processingModeCode/>
  <acceptAckCode code="AL"/>
  <receiver typeCode="RCV">
    <device classCode="DEV" determinerCode="INSTANCE">
      <!--@extension接受者ID,root为固定值-->
      <id>
        <item root="2.16.156.10011.2.5.1.3" extension="ECG"/>
      </id>
      <id>
        <item root="2.16.156.10011.2.5.1.4" extension="ECG1"/>
      </id>
    </device>
  </receiver>
</root>
```

代码读取：

```csharp
XmlDocument xml = new XmlDocument();//实例化这个类
string path = @"XMLFile3.xml";
xml.Load(path);
string xmltxt = xml.InnerXml.ToString(); //获取xml文本
XmlDocument doc = new XmlDocument();//重新实例化一个XmlDocument用来加载xml文本
doc.LoadXml(xmltxt);
//GetElementsByTagName用来指定获取那个节点内容，会返回节点List集合
XmlNodeList xnList = doc.DocumentElement.GetElementsByTagName("id");
XmlNode xmlNode = doc.SelectSingleNode("root/receiver/device/id/item[@root='2.16.156.10011.2.5.1.4']");
if (xmlNode != null)
{
    // ECG1
    Console.WriteLine(xmlNode.Attributes["extension"].Value);
}
//通过这个集合下标的Attributes获取对应属性的值
// b7722265-cc05-4b72-b3ed-fe54b30a34c4
Console.WriteLine(xnList[0].Attributes["extension"].Value);
```

### 读取xml指定节点的值（有命名空间）

XMLFile4.xml

```xml
<?xml version="1.0" encoding="utf-8" ?>
<bookstore xmlns="http://example.books.com">
    <book genre="autobiography" publicationdate="1991" ISBN="1-861003-11-0">
        <title>The Autobiography of Benjamin Franklin</title>
        <author>
            <first-name>Benjamin</first-name>
            <last-name>Franklin</last-name>
        </author>
        <price>8.99</price>
    </book>
    <sp:book genre="novel" publicationdate="1967" ISBN="0-201-63361-2" xmlns:sp="http://example.book.org">
        <title>The Confidence Man</title>
        <author>
            <first-name>Herman</first-name>
            <last-name>Melville</last-name>
        </author>
        <price>11.99</price>
    </sp:book>
    <book genre="philosophy" publicationdate="1991" ISBN="1-861001-57-6">
        <title>The Gorgias</title>
        <author>
            <name>Plato</name>
        </author>
        <price>9.99</price>
    </book>
</bookstore>
```

代码读取：

```csharp
XmlDocument xmldoc = new XmlDocument();
xmldoc.Load(@"XMLFile4.xml");
XmlNamespaceManager xmlns = new XmlNamespaceManager(xmldoc.NameTable);
xmlns.AddNamespace("sd", "http://example.books.com"); // 默认的命名空间也要添加 前缀
xmlns.AddNamespace("sp", "http://example.book.org");
XmlNodeList nodelist = xmldoc.SelectNodes("/sd:bookstore/sp:book", xmlns);
XmlNode title = xmldoc.SelectSingleNode("/sd:bookstore/sp:book/sd:title", xmlns);
// The Confidence Man
Console.WriteLine(title.InnerText);
```

























