### exe发送消息

```csharp
public struct CopyDataStruct
{
    public IntPtr dwData;
    public int cbData;

    [System.Runtime.InteropServices.MarshalAs(System.Runtime.InteropServices.UnmanagedType.LPStr)]
    public string lpData;
}
```

```csharp
//在DLL库中的发送消息函数
[System.Runtime.InteropServices.DllImport("User32.dll", EntryPoint = "SendMessage")]
private static extern int SendMessage
    (
    int hWnd,                         // 目标窗口的句柄  
    int Msg,                          // 在这里是WM_COPYDATA
    int wParam,                       // 第一个消息参数
    ref CopyDataStruct lParam         // 第二个消息参数
   );
```

```csharp
//当一个应用程序传递数据给另一个应用程序时发送此消息指令
public const int WM_COPYDATA = 0x004A;
```

```csharp
#region 根据进程名称发送
//按进程名称查找，同名称的进程可能有许多，所以返回的是一个数组
System.Diagnostics.Process[] foundProcess = System.Diagnostics.Process.GetProcessesByName("qq");
foreach (System.Diagnostics.Process p in foundProcess)
{
    int toWindowHandler = p.MainWindowHandle.ToInt32();
    if (toWindowHandler != 0)
    {
        CopyDataStruct cds;
        cds.dwData = (IntPtr)1;   //这里可以传入一些自定义的数据，但只能是4字节整数      
        cds.lpData = "发送的消息";            //消息字符串
        cds.cbData = System.Text.Encoding.Default.GetBytes("发送的消息").Length + 1;  //注意，这里的长度是按字节来算的

        //发送方的窗口的句柄, 由于本系统中的接收方不关心是该消息是从哪个窗口发出的，所以就直接填0了
        int fromWindowHandler = 0;
        SendMessage(toWindowHandler, WM_COPYDATA, fromWindowHandler, ref cds);
    }
}
#endregion 根据进程名称发送
```

```csharp
//接收消息方法
protected override void WndProc(ref System.Windows.Forms.Message e)
{
    if (e.Msg == WM_COPYDATA)
    {
        CopyDataStruct cds = (CopyDataStruct)e.GetLParam(typeof(CopyDataStruct));
        MessageBox.Show(cds.lpData);
    }
    base.WndProc(ref e);
}
```

