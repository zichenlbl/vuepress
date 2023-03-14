### XtraMessageBox弹框提示

```csharp
XtraMessageBox.Show("保存成功", "提示", MessageBoxButtons.OK);
```

判断返回值

```csharp
if (DialogResult.Yes == XtraMessageBox.Show("您确定退出系统吗？", "提示", MessageBoxButtons.YesNo))
```

