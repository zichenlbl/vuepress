### GridControl列表绑定数据

```csharp
DataTable dt = new DataTable();

// Adding Columns in Datatable
dt.Columns.Add("iid", typeof(string));
dt.Columns.Add("模板名称", typeof(string));

// Adding Data in Datatable
var mGetDataTemplat = context.Query<sr_data_templat>().OrderBy(a => a.iid).ToList();
foreach (var mDataTemplat in mGetDataTemplat)
{
    dt.Rows.Add(new object[]
                {
                    mDataTemplat.iid,
                    mDataTemplat.template_name,
                });
}

// Bind the datatable in Grid
gc_template.DataSource = dt;
```

