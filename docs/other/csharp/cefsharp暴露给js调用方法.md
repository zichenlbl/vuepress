### cefsharp暴露给js调用方法

```csharp
//暴露给js掉用c#类中的方法
uc_sring1.chromeBrowser.JavascriptObjectRepository.Register("EditorStatus",
	new EditorStatus(), isAsync: false, options: BindingOptions.DefaultBinder);
```

