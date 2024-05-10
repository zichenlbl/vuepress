### 对象json字符串序列化

```csharp
//json字符串->对象
SaveEventParameter mSaveEventReportParameter = new JavaScriptSerializer()
	.Deserialize<SaveEventParameter>(mParameter);

//对象->json字符串
string mResult = new JavaScriptSerializer().Serialize(mSaveEventReportParameter);
```

