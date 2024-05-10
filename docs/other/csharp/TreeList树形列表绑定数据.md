### TreeList树形列表绑定数据

```csharp
tree_templat.OptionsView.ShowIndicator = false;           //隐藏节点指示器面板
var mGetDataTemplat = context.Query<sr_data_templat>()
    .Where(a => a.aid != null && a.paid != null && a.status == "0")
    .Select((a) => new
            {
                a.iid,
                a.template_name,
                a.sys_type,
                a.group_lab,
                a.aid,
                a.paid
            })
    .OrderBy(a => a.iid).ToList();
tree_templat.KeyFieldName = "aid";
tree_templat.ParentFieldName = "paid";
tree_templat.DataSource = mGetDataTemplat;
```

