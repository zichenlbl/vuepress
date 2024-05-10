### 未分类

```csharp
#region 注释 根据进程名称发送
    //按进程名称查找，同名称的进程可能有许多，所以返回的是一个数组
    //System.Diagnostics.Process[] foundProcess = System.Diagnostics.Process.GetProcessesByName("icn_sr");
    //foreach (System.Diagnostics.Process p in foundProcess)
    //{
    //    int toWindowHandler = p.MainWindowHandle.ToInt32();
    //    if (toWindowHandler != 0)
    //    {
    //        Form1.CopyDataStruct cds;
    //        cds.dwData = (IntPtr)1;   //这里可以传入一些自定义的数据，但只能是4字节整数      
    //        cds.lpData = mArguments;            //消息字符串
    //        cds.cbData = System.Text.Encoding.Default.GetBytes(mArguments).Length + 1;  //注意，这里的长度是按字节来算的

    //        //发送方的窗口的句柄, 由于本系统中的接收方不关心是该消息是从哪个窗口发出的，所以就直接填0了
    //        int fromWindowHandler = 0;
    //        Form1.SendMessage(toWindowHandler, Form1.WM_COPYDATA, fromWindowHandler, ref cds);
    //    }
    //}
    #endregion 根据进程名称发送
```



编辑模板

```csharp

#region gridview大列表
    // 获取选中行的参数
    //int mSelectRow = gridView1.GetSelectedRows()[0];
    //string mIid = this.gridView1.GetRowCellValue(mSelectRow, "iid").ToString();
    //string mTemplateName = this.gridView1.GetRowCellValue(mSelectRow, "结构化模板名称").ToString();
    //string mSysType = this.gridView1.GetRowCellValue(mSelectRow, "系统类型").ToString();
    //string mGroupLab = this.gridView1.GetRowCellValue(mSelectRow, "分组标签").ToString();
    //string mInstitutionCode = this.gridView1.GetRowCellValue(mSelectRow, "院区编码").ToString();
    //string mTemplateVer = this.gridView1.GetRowCellValue(mSelectRow, "版本号").ToString();
    //string mCreateUsercode = this.gridView1.GetRowCellValue(mSelectRow, "创建者编码").ToString();
    //string mCreateUsername = this.gridView1.GetRowCellValue(mSelectRow, "创建者姓名").ToString();
    //string mUpdateUsercode = "icn1";
    //string mUpdateUsername = "icn1";
    ////string m = this.gridView1.GetRowCellValue(mSelectRow, "创建时间").ToString();
    ////string m = this.gridView1.GetRowCellValue(mSelectRow, "更新时间").ToString();
    ////string m = this.gridView1.GetRowCellValue(mSelectRow, "数据状态").ToString();
    #endregion gridview大列表
```



icn_sr模板初始化事件

```csharp
#region 注释 调用js方法传递模板参数
    //var mT1 = new Thread(() =>
    //{
    //    int mTimes = 0; //执行时间
    //    //模板没有加载成功 并且加载时间小于10秒
    //    while (mTimes < 10)
    //    {
    //        //MessageBox.Show("loading");
    //        string mDataTemplatParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
    //        try
    //        {
    //            uc_sring1.chromeBrowser.ExecuteScriptAsync("getUserInof('" + mDataTemplatParameter + "');");
    //        }
    //        catch (Exception)
    //        {
    //        }
    //        Thread.Sleep(1000);
    //        mTimes++;
    //    }
    //});
    //mT1.IsBackground = true;
    //mT1.Start();
    #endregion 注释
```



写报告页面

加载事件

```csharp

#region 注释 打开报告做的一些事情
    //打开报告加载模板
    //new Thread(() =>
    //{
    //    int mTimes = 0; //执行时间
    //    while (!EditorStatus.G_TemplateLoadingStatus && mTimes < 10)
    //    {
    //        #region 打开报告
    //        PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
    //        try
    //        {
    //            //判断新增报告还是修改报告
    //            if (S_Args != null)
    //            {
    //                string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
    //                JObject mJobject = JObject.Parse(mParameter);
    //                long mExamIid = Convert.ToInt64(mJobject["exam_iid"]);
    //                // 根据检查表iid查询是否有报告
    //                var mGetExamReport = context.Query<sr_exam_report>().Where(a => a.exam_iid == mExamIid && a.flag == "9")
    //                    .Select(a => new { a.sr_data }).FirstOrDefault();

    //                if (mGetExamReport == null)
    //                {
    //                    // 新增，打开对应的模板
    //                    long mTemplatIid = Convert.ToInt64(mJobject["sr_templat_iid"]);
    //                    var m_q_datatemplat = context.Query<sr_data_templat>();
    //                    var mGetDataTemplate = m_q_datatemplat.Where(a => a.iid == mTemplatIid)
    //                        .Select(a => new
    //                        {
    //                            a.template_data
    //                        }).FirstOrDefault();
    //                    if (!string.IsNullOrEmpty(mGetDataTemplate.template_data))
    //                    {
    //                        //EditorStatus.G_PatientInformationUpdateStatus = false; //设置病人信息回写为未完成
    //                        uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetDataTemplate.template_data + "');");
    //                        //EditorStatus.G_TemplateLoadingStatus = true; //设置模板状态为加载
    //                    }
    //                }
    //                else
    //                {
    //                    //MessageBox.Show("打开报告");
    //                    // 修改，打开旧报告
    //                    if (!string.IsNullOrEmpty(mGetExamReport.sr_data))
    //                    {
    //                        //EditorStatus.G_TemplateLoadingStatus = true; //设置模板状态为加载完成
    //                        EditorStatus.G_PatientInformationUpdateStatus = true; //设置病人信息回写为完成
    //                        uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetExamReport.sr_data + "');");
    //                    }
    //                }
    //                //EditorStatus.G_TemplateLoadingStatus = true; //设置模板状态为加载完成
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            LogManager.WriteLog("打开报告出错：" + ex.Message);
    //        }
    //        finally
    //        {
    //            context.Dispose();
    //        }
    //        #endregion 打开报告
    //        Thread.Sleep(1000);
    //        mTimes++;
    //    }

    //}).Start();

    ////判断模板加载好，并进行回写报告
    //new Thread(() =>
    //{
    //    int mWriteBackTimes = 0; //回写时间
    //    while (mWriteBackTimes < 9)
    //    {
    //        //模板加载好，回写没有好，进行回写
    //        if (EditorStatus.G_TemplateLoadingStatus &&
    //            mWriteBackTimes < 10 && !EditorStatus.G_PatientInformationUpdateStatus)
    //        {
    //            //MessageBox.Show("模板加载完成！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //            #region 回写病人信息
    //            string mPatientInformation = Encoding.Default.GetString(Convert.FromBase64String(S_Args[2]));
    //            uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformation + "');");
    //            #endregion 回写病人信息
    //            Thread.Sleep(1000);
    //            mWriteBackTimes++;
    //        }
    //        //模板  加载好，回写了5秒还没好
    //        else if (EditorStatus.G_TemplateLoadingStatus &&
    //            mWriteBackTimes > 9 && !EditorStatus.G_PatientInformationUpdateStatus)
    //        {
    //            MessageBox.Show("回写失败");
    //            break;
    //        }
    //        //模板没加载好，加载了5秒还没好
    //        else if (!EditorStatus.G_TemplateLoadingStatus &&
    //            mWriteBackTimes > 9)
    //        {//回写了5秒后还没返回True，提示
    //            MessageBox.Show("模板加载失败！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //            break;
    //        }
    //        else
    //        {
    //            Thread.Sleep(1000);
    //            mWriteBackTimes++;
    //        }
    //    }

    //}).Start();

    ////只判断病人信息是否回写完成
    //new Thread(() =>
    //{
    //    int mWriteBackTimes = 0; //回写时间
    //    while (true)
    //    {
    //        if (EditorStatus.G_PatientInformationUpdateStatus && 
    //            mWriteBackTimes < 10)
    //        {
    //            //MessageBox.Show("回写完成！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //            break;
    //        }
    //        else if (!EditorStatus.G_PatientInformationUpdateStatus && 
    //            mWriteBackTimes > 9)
    //        {//回写了5秒后还没返回True，提示回写失败
    //            MessageBox.Show("回写失败！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //            break;
    //        }
    //        else
    //        {
    //            Thread.Sleep(1000);
    //            mWriteBackTimes++;
    //        }
    //    }
    //}).Start();
    #endregion 打开报告做的一些事情
```

结构化报告保存

```csharp
#region 注释
    /// 测试代码
    //S_TemplateIid = 106;
    //var mGetDataTemplat = context.Query<sr_data_templat>().Where(a => a.iid == S_TemplateIid)
    //    .Select(a => new { a.opinion, a.conclusion }).FirstOrDefault();
    ////获取所见和结论要拼接的内容
    //JavascriptResponse mOpinionJavascriptResponse = await uc_sring1.chromeBrowser.EvaluateScriptAsync("setDatas", mGetDataTemplat.opinion);
    //if (mOpinionJavascriptResponse.Success)
    //{
    //    string mResult = mOpinionJavascriptResponse.Result.ToString();
    //    mResult = mResult.Substring(0, mResult.Length - 1);
    //    //MessageBox.Show(mResult);
    //}
    //else
    //{
    //    //MessageBox.Show(mOpinionJavascriptResponse.Message);
    //}
    //JavascriptResponse mConclusionJavascriptResponse = await uc_sring1.chromeBrowser.EvaluateScriptAsync("setDatas", mGetDataTemplat.conclusion);
    //if (mConclusionJavascriptResponse.Success)
    //{
    //    string mResult = mConclusionJavascriptResponse.Result.ToString();
    //    mResult = mResult.Substring(0, mResult.Length - 1);
    //    //MessageBox.Show(mResult);
    //}
    //else
    //{
    //    //MessageBox.Show(mConclusionJavascriptResponse.Message);
    //}
    //return;
    /// 测试代码
    #endregion 注释
```

保存报告

```csharp

#region 注释 根据进程名称发送
    ////按进程名称查找，同名称的进程可能有许多，所以返回的是一个数组
    //System.Diagnostics.Process[] foundProcess = System.Diagnostics.Process.GetProcessesByName("cnris");
    //foreach (System.Diagnostics.Process p in foundProcess)
    //{
    //    int toWindowHandler = p.MainWindowHandle.ToInt32();
    //    if (toWindowHandler != 0)
    //    {
    //        Form1.CopyDataStruct cds;
    //        cds.dwData = (IntPtr)1;   //这里可以传入一些自定义的数据，但只能是4字节整数      
    //        string mLpDataStr = "icn_sr_save";//第一个参数 通知cnris保存报告,第二个参数所见,第三个参数结论
    //        if (!string.IsNullOrEmpty(mOpinionStr))
    //        {
    //            mLpDataStr += " " + mOpinionStr;
    //        }
    //        if (!string.IsNullOrEmpty(mConclusionStr))
    //        {
    //            mLpDataStr += " " + mConclusionStr;
    //        }
    //        MessageBox.Show("发送的参数:" + mLpDataStr);
    //        cds.lpData = mLpDataStr;            //消息字符串
    //        cds.cbData = System.Text.Encoding.Default.GetBytes(mLpDataStr).Length + 1;  //注意，这里的长度是按字节来算的

    //        //发送方的窗口的句柄, 由于本系统中的接收方不关心是该消息是从哪个窗口发出的，所以就直接填0了
    //        int fromWindowHandler = 0;
    //        Form1.SendMessage(toWindowHandler, Form1.WM_COPYDATA, fromWindowHandler, ref cds);
    //    }
    //}
    #endregion 根据进程名称发送
```

```csharp

#region 注释 根据标题名称发送
    ////将文本框中的值， 发送给接收端           
    //CopyDataStruct cds1;
    //cds1.dwData = (IntPtr)1; //这里可以传入一些自定义的数据，但只能是4字节整数
    //string mLpDataStr = "icn_sr_save";//第一个参数 通知cnris保存报告,第二个参数所见,第三个参数结论
    //if (!string.IsNullOrEmpty(mOpinionStr))
    //{
    //    mLpDataStr += " " + mOpinionStr;
    //}
    //if (!string.IsNullOrEmpty(mConclusionStr))
    //{
    //    mLpDataStr += " " + mConclusionStr;
    //}
    //mLpDataStr += " " + mReport.exam_iid;
    //cds1.lpData = mLpDataStr;            //消息字符串
    //cds1.cbData = System.Text.Encoding.Default.GetBytes(mLpDataStr).Length + 1;
    ////注意，这里的长度是按字节来算的
    //int b = FindWindow(null, "放射报告书写");
    //SendMessage(b, WM_COPYDATA, 0, ref cds1);
    //// 这里要修改成接收窗口的标题“接收端”
    #endregion
```

打开报告做的一些事

```csharp


/// <summary>
/// 打开报告时做的一些事情
/// </summary>
private void f_OpenReport()
{
    //try
    //{
    //    //每次加载报告时都设置 模板加载状态为未加载，病人信息回写状态为未回写
    //    EditorStatus.G_TemplateLoadingStatus = false;
    //    EditorStatus.G_PatientInformationUpdateStatus = false;

    //    int mLoadMode = 0; //加载模式，0：新增报告 1:修改报告

    //    //1.打开报告加载模板
    //    var mT1 = new Thread(() =>
    //    {
    //        int mTimes = 0; //执行时间
    //                        //模板没有加载成功 并且加载时间小于10秒
    //        while (!EditorStatus.G_TemplateLoadingStatus && mTimes < 10)
    //        {
    //            #region 打开报告
    //            PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
    //            try
    //            {
    //                //判断新增报告还是修改报告
    //                if (S_Args != null)
    //                {
    //                    string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
    //                    //解析参数
    //                    SaveEventParameter mSaveEventReportParameter = new JavaScriptSerializer()
    //                         .Deserialize<SaveEventParameter>(mParameter);
    //                    ExamReportParameter mReport = mSaveEventReportParameter.parameter;

    //                    //JObject mJobject = JObject.Parse(mParameter);
    //                    long mExamIid = mReport.exam_iid;
    //                    //long mExamIid = Convert.ToInt64(mJobject["exam_iid"]);
    //                    // 根据检查表iid查询是否有报告
    //                    var mGetExamReport = context.Query<sr_exam_report>().Where(a => a.exam_iid == mExamIid && a.flag == "9")
    //                        .Select(a => new { a.sr_data }).FirstOrDefault();

    //                    // 新增，打开对应的模板
    //                    if (mGetExamReport == null)
    //                    {
    //                        long mTemplatIid = mReport.sr_templat_iid;
    //                        //long mTemplatIid = Convert.ToInt64(mJobject["sr_templat_iid"]);
    //                        var m_q_datatemplat = context.Query<sr_data_templat>();
    //                        var mGetDataTemplate = m_q_datatemplat.Where(a => a.iid == mTemplatIid)
    //                            .Select(a => new
    //                            {
    //                                a.template_data
    //                            }).FirstOrDefault();
    //                        //加载模板
    //                        if (!string.IsNullOrEmpty(mGetDataTemplate.template_data))
    //                        {
    //                            uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetDataTemplate.template_data + "');");
    //                        }
    //                    }
    //                    else
    //                    {
    //                        // 修改，打开旧报告
    //                        if (!string.IsNullOrEmpty(mGetExamReport.sr_data))
    //                        {
    //                            uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetExamReport.sr_data + "');");
    //                            mLoadMode = 1;
    //                        }
    //                    }
    //                }
    //            }
    //            catch (Exception ex)
    //            {
    //                LogManager.WriteLog("打开报告出错：" + ex.Message);
    //            }
    //            finally
    //            {
    //                context.Dispose();
    //            }
    //            #endregion 打开报告

    //            Thread.Sleep(1000);
    //            mTimes++;
    //        }
    //        //模板加载成功，如果是修改报告则不用回写病人信息
    //        if (EditorStatus.G_TemplateLoadingStatus && mLoadMode == 1)
    //        {
    //            EditorStatus.G_PatientInformationUpdateStatus = true; //设置病人信息回写为完成
    //            return;
    //        }
    //    });
    //    mT1.IsBackground = true;
    //    mT1.Start();

    //    //2.判断模板加载好，并进行回写报告
    //    var mT2 = new Thread(() =>
    //    {
    //        int mTimes = 0; //回写时间
    //                        //等待10秒判断模板有没有加载好
    //        while (mTimes < 40)
    //        {
    //            //新增报告,模板加载好，回写没有好，进行回写
    //            if (EditorStatus.G_TemplateLoadingStatus && !EditorStatus.G_PatientInformationUpdateStatus
    //                && mLoadMode == 0)
    //            {
    //                mT1.Abort();
    //                string mPatientInformation = Encoding.Default.GetString(Convert.FromBase64String(S_Args[2]));
    //                //{"a":"aa", "b":"b"}
    //                //根据模板iid查询回写病人信息的SQL
    //                string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
    //                //解析参数
    //                SaveEventParameter mSaveEventReportParameter = new JavaScriptSerializer()
    //                     .Deserialize<SaveEventParameter>(mParameter);
    //                ExamReportParameter mReport = mSaveEventReportParameter.parameter;
    //                //JObject mJobject = JObject.Parse(mParameter);
    //                long mExamIid = mReport.exam_iid; //检查表iid
    //                                                  //long mExamIid = Convert.ToInt64(mJobject["exam_iid"]); //检查表iid
    //                long mTemplatIid = mReport.sr_templat_iid; //模板表iid
    //                                                           //long mTemplatIid = Convert.ToInt64(mJobject["sr_templat_iid"]); //模板表iid
    //                PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
    //                try
    //                {
    //                    var m_q_datatemplat = context.Query<sr_data_templat>();
    //                    var mGetDataTemplate = m_q_datatemplat.Where(a => a.iid == mTemplatIid)
    //                        .Select(a => new
    //                        {
    //                            a.sql
    //                        }).FirstOrDefault();
    //                    if (mGetDataTemplate == null)
    //                    {
    //                        break;
    //                    }
    //                    string mSql = mGetDataTemplate.sql;
    //                    LogManager.WriteLog("传递的sql:" + mSql);
    //                    //string mSql = @"select t.* from icnris_exam t where iid=:iid";
    //                    //mSql = "select t.cname as \"name\", t.CSEX as \"sex\", t.CAGE as \"age\" from icnris_exam t where iid=:iid";
    //                    //mExamIid = 147073;
    //                    uDataSet mDataSet = new uDataSet(new string[] { mSql }, new uParameter[] { new uParameter(":iid", mExamIid) }); //147073
    //                    if (mDataSet.RowCount() == 0)
    //                    {
    //                        return;
    //                    }
    //                    foreach (DataTable dt in mDataSet.Tables)
    //                    {
    //                        foreach (DataRow dr in dt.Rows) ///遍历所有的行
    //                        {
    //                            StringBuilder mPatientInformationStr = new StringBuilder(); //拼接病人信息回写数据的json
    //                            mPatientInformationStr.Append("{");
    //                            foreach (DataColumn dc in dt.Columns) //遍历所有的列
    //                            {
    //                                mPatientInformationStr.Append("\"" + dc.ColumnName + "\":\"" + dr[dc] + "\",");
    //                                LogManager.WriteLog(dt.TableName + ", " + dc.ColumnName + ", " + dr[dc] + ", "); //表名,列名,单元格数据
    //                            }
    //                            if (mPatientInformationStr.Length > 1)
    //                            {
    //                                mPatientInformationStr.Remove(mPatientInformationStr.Length - 1, 1); //去除最后一个逗号,
    //                            }
    //                            mPatientInformationStr.Append("}");
    //                            LogManager.WriteLog("json数据:" + mPatientInformationStr.ToString() + "原数据:" + mPatientInformation);
    //                            //调用回写数据的js方法
    //                            uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformationStr + "');");
    //                        }
    //                    }
    //                    //string mName = mDataSet.GetItemString(1, "cname");
    //                    //原来的回写数据
    //                    //uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformation + "');");
    //                }
    //                catch (Exception ex)
    //                {
    //                    LogManager.WriteLog("回写报告出错：" + ex.Message);
    //                }
    //                finally
    //                {
    //                    context.Dispose();
    //                }
    //            }
    //            else if (EditorStatus.G_TemplateLoadingStatus && EditorStatus.G_PatientInformationUpdateStatus)
    //            {
    //                break;
    //            }
    //            Thread.Sleep(500);
    //            mTimes++;
    //        }
    //        //模板加载了10秒还没好
    //        if (mTimes > 39)
    //        {
    //            //MessageBox.Show("模板加载超时！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //        }

    //    });
    //    mT2.IsBackground = true;
    //    mT2.Start();

    //    //3.只判断病人信息是否回写完成
    //    var mT3 = new Thread(() =>
    //    {
    //        int mTimes = 0; //回写时间
    //        while (mTimes < 40)
    //        {
    //            if (EditorStatus.G_TemplateLoadingStatus && EditorStatus.G_PatientInformationUpdateStatus)
    //            {
    //                mT2.Abort();
    //                //MessageBox.Show("回写完成！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //                break;
    //            }
    //            else if (!EditorStatus.G_TemplateLoadingStatus && EditorStatus.G_PatientInformationUpdateStatus)
    //            {//模板加载超时，回写成功
    //                mT2.Abort();
    //                //MessageBox.Show("模板加载失败，回写成功！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //                break;
    //            }
    //            Thread.Sleep(500);
    //            mTimes++;
    //        }
    //        if (mTimes > 39)
    //        {
    //            //MessageBox.Show("回写失败！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //        }
    //    });
    //    mT3.IsBackground = true;
    //    mT3.Start();
    //}
    //catch (Exception ex)
    //{
    //    LogManager.WriteLog("初始化报告出错:" + ex.Message);
    //}
    //finally
    //{

    //}

    #region 注释 2023/01/17 13:47 备份
        ////1.打开报告加载模板
        //new Thread(() =>
        //{
        //    int mTimes = 0; //执行时间
        //    while (!EditorStatus.G_TemplateLoadingStatus && mTimes < 10)
        //    {
        //        #region 打开报告
        //        PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
        //        try
        //        {
        //            //判断新增报告还是修改报告
        //            if (S_Args != null)
        //            {
        //                string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
        //                JObject mJobject = JObject.Parse(mParameter);
        //                long mExamIid = Convert.ToInt64(mJobject["exam_iid"]);
        //                // 根据检查表iid查询是否有报告
        //                var mGetExamReport = context.Query<sr_exam_report>().Where(a => a.exam_iid == mExamIid && a.flag == "9")
        //                    .Select(a => new { a.sr_data }).FirstOrDefault();

        //                if (mGetExamReport == null)
        //                {
        //                    // 新增，打开对应的模板
        //                    long mTemplatIid = Convert.ToInt64(mJobject["sr_templat_iid"]);
        //                    var m_q_datatemplat = context.Query<sr_data_templat>();
        //                    var mGetDataTemplate = m_q_datatemplat.Where(a => a.iid == mTemplatIid)
        //                        .Select(a => new
        //                        {
        //                            a.template_data
        //                        }).FirstOrDefault();
        //                    if (!string.IsNullOrEmpty(mGetDataTemplate.template_data))
        //                    {
        //                        //EditorStatus.G_PatientInformationUpdateStatus = false; //设置病人信息回写为未完成
        //                        uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetDataTemplate.template_data + "');");
        //                        //EditorStatus.G_TemplateLoadingStatus = true; //设置模板状态为加载
        //                    }
        //                }
        //                else
        //                {
        //                    //MessageBox.Show("打开报告");
        //                    // 修改，打开旧报告
        //                    if (!string.IsNullOrEmpty(mGetExamReport.sr_data))
        //                    {
        //                        //EditorStatus.G_TemplateLoadingStatus = true; //设置模板状态为加载完成
        //                        EditorStatus.G_PatientInformationUpdateStatus = true; //设置病人信息回写为完成
        //                        uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetExamReport.sr_data + "');");
        //                    }
        //                }
        //                //EditorStatus.G_TemplateLoadingStatus = true; //设置模板状态为加载完成
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            LogManager.WriteLog("打开报告出错：" + ex.Message);
        //        }
        //        finally
        //        {
        //            context.Dispose();
        //        }
        //        #endregion 打开报告
        //        Thread.Sleep(1000);
        //        mTimes++;
        //    }

        //}).Start();

        ////判断模板加载好，并进行回写报告
        //new Thread(() =>
        //{
        //    int mWriteBackTimes = 0; //回写时间
        //    while (mWriteBackTimes < 9)
        //    {
        //        //模板加载好，回写没有好，进行回写
        //        if (EditorStatus.G_TemplateLoadingStatus &&
        //            mWriteBackTimes < 10 && !EditorStatus.G_PatientInformationUpdateStatus)
        //        {
        //            //MessageBox.Show("模板加载完成！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
        //            #region 回写病人信息
        //            string mPatientInformation = Encoding.Default.GetString(Convert.FromBase64String(S_Args[2]));
        //            uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformation + "');");
        //            #endregion 回写病人信息
        //            Thread.Sleep(1000);
        //            mWriteBackTimes++;
        //        }
        //        //模板  加载好，回写了5秒还没好
        //        else if (EditorStatus.G_TemplateLoadingStatus &&
        //            mWriteBackTimes > 9 && !EditorStatus.G_PatientInformationUpdateStatus)
        //        {
        //            MessageBox.Show("回写失败");
        //            break;
        //        }
        //        //模板没加载好，加载了5秒还没好
        //        else if (!EditorStatus.G_TemplateLoadingStatus &&
        //            mWriteBackTimes > 9)
        //        {//回写了5秒后还没返回True，提示
        //            MessageBox.Show("模板加载失败！", "提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
        //            break;
        //        }
        //        else
        //        {
        //            Thread.Sleep(1000);
        //            mWriteBackTimes++;
        //        }
        //    }

        //}).Start();

        ////只判断病人信息是否回写完成
        //new Thread(() =>
        //{
        //    int mWriteBackTimes = 0; //回写时间
        //    while (true)
        //    {
        //        if (EditorStatus.G_PatientInformationUpdateStatus &&
        //            mWriteBackTimes < 10)
        //        {
        //            //MessageBox.Show("回写完成！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
        //            break;
        //        }
        //        else if (!EditorStatus.G_PatientInformationUpdateStatus &&
        //            mWriteBackTimes > 9)
        //        {//回写了5秒后还没返回True，提示回写失败
        //            MessageBox.Show("回写失败！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
        //            break;
        //        }
        //        else
        //        {
        //            Thread.Sleep(1000);
        //            mWriteBackTimes++;
        //        }
        //    }
        //}).Start();
        #endregion 注释 2023/01/17 13:47 备份
}
```

写报告, 网页加载完成

```csharp


/// <summary>
/// 网页加载完成事件
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private void f_ChromeBrowser_FrameLoadEnd(object sender, CefSharp.FrameLoadEndEventArgs e)
{
    //MessageBox.Show("回写是否完成：" + EditorStatus.G_PatientInformationUpdateStatus);
    //MessageBox.Show("模板是否加载完成：" + EditorStatus.G_TemplateLoadingStatus);

    #region 注释 旧写法 新写法也能完成效果 完成事件中回写数据
        //WaitDialogForm mWaitForm = null;
        //if (!S_IsLoad)
        //{
        //    mWaitForm = new WaitDialogForm("请稍后 ... ...", "提示");
        //    mWaitForm.Show();
        //    S_IsLoad = true;
        //}

        //#region 打开报告
        //PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
        //try
        //{
        //    //判断新增报告还是修改报告
        //    if (S_Args != null)
        //    {
        //        string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
        //        JObject mJobject = JObject.Parse(mParameter);
        //        long mExamIid = Convert.ToInt64(mJobject["exam_iid"]);
        //        // 根据检查表iid查询是否有报告
        //        var mGetExamReport = context.Query<sr_exam_report>().Where(a => a.exam_iid == mExamIid && a.flag == "9")
        //            .Select(a => new { a.sr_data }).FirstOrDefault();

        //        if (mGetExamReport == null)
        //        {
        //            // 新增，打开对应的模板
        //            long mTemplatIid = Convert.ToInt64(mJobject["sr_templat_iid"]);
        //            var m_q_datatemplat = context.Query<sr_data_templat>();
        //            var mGetDataTemplate = m_q_datatemplat.Where(a => a.iid == mTemplatIid)
        //                .Select(a => new {
        //                    a.template_data
        //                }).FirstOrDefault();
        //            if (!string.IsNullOrEmpty(mGetDataTemplate.template_data))
        //            {
        //                //EditorStatus.G_TemplateLoadingStatus = false; //设置模板状态为未加载
        //                //EditorStatus.G_PatientInformationUpdateStatus = false; //设置病人信息回写为未完成
        //                uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetDataTemplate.template_data + "');");
        //            }

        //            #region 回写病人信息
        //            Thread mThread1 = new Thread(() =>
        //            {
        //                while (!EditorStatus.G_TemplateLoadingStatus)
        //                {//每隔一秒判断模板加载是否完成
        //                    Thread.Sleep(1000);
        //                }

        //                string mPatientInformation = Encoding.Default.GetString(Convert.FromBase64String(S_Args[2]));

        //                uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformation + "');");

        //                #region 注释 异步获取js方法的返回值
        //                //JavascriptResponse javascriptResponse = await uc_sring1.chromeBrowser.EvaluateScriptAsync("f_set_data('" + mPatientInformation + "');");
        //                //if (javascriptResponse.Success)
        //                //{//javascript成功执行
        //                //javascriptResponse.Result.ToString(); //返回值
        //                //}
        //                #endregion 异步获取js方法的返回值

        //            });
        //            mThread1.Start();
        //            #endregion 回写病人信息

        //            #region 注释 回写结束
        //            //Thread mThread2 = new Thread(() =>
        //            //{
        //            //    int mWriteBackTimes = 0; //回写时间
        //            //    while (!EditorStatus.G_PatientInformationUpdateStatus &&
        //            //        mWriteBackTimes < 5)
        //            //    {
        //            //        Thread.Sleep(1000);
        //            //        mWriteBackTimes++;
        //            //    }

        //            //});
        //            //mThread2.Start();
        //            #endregion 回写结束
        //        }
        //        else
        //        {
        //            MessageBox.Show("打开报告");
        //            // 修改，打开旧报告
        //            if (!string.IsNullOrEmpty(mGetExamReport.sr_data))
        //            {
        //                //EditorStatus.G_TemplateLoadingStatus = true; //设置模板状态为加载完成
        //                //EditorStatus.G_PatientInformationUpdateStatus = true; //设置病人信息回写为完成
        //                uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetExamReport.sr_data + "');");
        //            }
        //        }
        //    }
        //}
        //catch (Exception ex)
        //{
        //    LogManager.WriteLog("打开报告出错：" + ex.Message);
        //}
        //finally
        //{
        //    context.Dispose();
        //}
        //#endregion 打开报告

        //if (mWaitForm != null)
        //{
        //    mWaitForm.Close();
        //}
        #endregion 完成事件中回写数据

        #region 注释 回写病人信息
        //
        //if (S_IsLoad)
        //{
        //    Thread t = new Thread(() =>
        //    {
        //        while (!EditorStatus.S_TemplateLoadingStatus)
        //        {
        //            Thread.Sleep(600);
        //        }
        //        string mPatientInformation = Encoding.Default.GetString(Convert.FromBase64String(S_Args[2]));
        //        //MessageBox.Show("回写的病人信息：" + mPatientInformation);
        //        uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformation + "');");
        //        //MessageBox.Show("开始回写" + EditorStatus.S_TemplateLoadingStatus);
        //    });
        //    t.Start();
        //    if (mWaitForm != null)
        //    {
        //        mWaitForm.Close();
        //    }
        //}

        #endregion 回写病人信息
}
```

写报告界面接收其他exe消息

```csharp


//f_OpenReport();

#region 注释打开报告
    //PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
    //try
    //{
    //    //判断新增报告还是修改报告
    //    string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
    //    JObject mJobject = JObject.Parse(mParameter);
    //    long mExamIid = Convert.ToInt64(mJobject["exam_iid"]);
    //    // 根据检查表iid查询是否有报告
    //    var mGetExamReport = context.Query<sr_exam_report>().Where(a => a.exam_iid == mExamIid && a.flag == "9")
    //        .Select(a => new { a.sr_data }).FirstOrDefault();

    //    if (mGetExamReport == null)
    //    {
    //        // 新增，打开对应的模板
    //        long mTemplatIid = Convert.ToInt64(mJobject["sr_templat_iid"]);
    //        var m_q_datatemplat = context.Query<sr_data_templat>();
    //        var mGetDataTemplate = m_q_datatemplat.Where(a => a.iid == mTemplatIid)
    //            .Select(a => new {
    //                a.template_data
    //            }).FirstOrDefault();
    //        if (!string.IsNullOrEmpty(mGetDataTemplate.template_data))
    //        {
    //            EditorStatus.G_TemplateLoadingStatus = false; //设置模板状态为未加载
    //            EditorStatus.G_PatientInformationUpdateStatus = false; //设置病人信息回写为未完成
    //            uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetDataTemplate.template_data + "');");
    //        }

    //        #region 回写病人信息
    //        Thread t = new Thread(() =>
    //        {
    //            int mTimes = 0; //等待时间
    //            while (!EditorStatus.G_TemplateLoadingStatus && mTimes < 10)
    //            {
    //                Thread.Sleep(1000);
    //                mTimes++;
    //            }
    //            if (!EditorStatus.G_TemplateLoadingStatus)
    //            {
    //                MessageBox.Show("模板加载失败");
    //            }
    //            else
    //            {
    //                string mPatientInformation = Encoding.Default.GetString(Convert.FromBase64String(S_Args[2]));
    //                uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformation + "');");
    //            }
    //        });
    //        t.Start();
    //        #endregion 回写病人信息

    //        //判断病人信息是否回写完成
    //        new Thread(() =>
    //        {
    //            int mWriteBackTimes = 0; //回写时间
    //            while (true)
    //            {
    //                if (EditorStatus.G_PatientInformationUpdateStatus &&
    //                    mWriteBackTimes < 10)
    //                {
    //                    //MessageBox.Show("回写完成！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //                    break;
    //                }
    //                else if (!EditorStatus.G_PatientInformationUpdateStatus &&
    //                    mWriteBackTimes > 9)
    //                {//回写了5秒后还没返回True，提示回写失败
    //                    MessageBox.Show("回写失败！", "回写提示", MessageBoxButtons.OK, MessageBoxIcon.Information, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly);
    //                    break;
    //                }
    //                else
    //                {
    //                    Thread.Sleep(500);
    //                    mWriteBackTimes++;
    //                }
    //            }
    //        }).Start();
    //    }
    //    else
    //    {
    //        // 修改，打开旧报告
    //        if (!string.IsNullOrEmpty(mGetExamReport.sr_data))
    //        {
    //            uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetExamReport.sr_data + "');");
    //        }
    //    }
    //}
    //catch (Exception ex)
    //{
    //    LogManager.WriteLog("ex=" + ex.Message);
    //}
    //finally
    //{
    //    context.Dispose();
    //}
    #endregion 打开报告
```

写报告界面三个旧的方法

```csharp


/// <summary>
/// 旧的 打印报告
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private void btn_print_Click(object sender, EventArgs e)
{
    //MessageBox.Show(EditorStatus.S_TemplateLoadingStatus.ToString());
    uc_sring1.f_Print();
}

/// <summary>
/// 旧的 审核
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private void btn_examine_Click(object sender, EventArgs e)
{
    uc_sring1.f_Examine();
    uc_sring1.chromeBrowser.ShowDevTools(); //打开控制台
    #region 注释
        //string mPatientInformation = Encoding.Default.GetString(Convert.FromBase64String(S_Args[2]));
        //MessageBox.Show("回写的病人信息：" + mPatientInformation);

        //f_set_data
        //uc_sring1.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformation + "');");

        //DataTemplatParameter dataTemplat = new DataTemplatParameter();
        //dataTemplat.create_usercode = "胡金雅";
        //MessageBox.Show(dataTemplat.f_TestResult2());

        //MessageBox.Show("回写是否完成：" + EditorStatus.G_PatientInformationUpdateStatus);
        //MessageBox.Show("模板是否加载完成：" + EditorStatus.G_TemplateLoadingStatus);
        #endregion 注释
}

/// <summary>
/// 旧的 保存报告
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private void btn_save_Click(object sender, EventArgs e)
{
    //MessageBox.Show("Count: " + S_Args[0]);

    #region 注释 保存报告
        PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
    try
    {
        //判断新增报告还是修改报告
        string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
        //解析参数
        SaveEventParameter mSaveEventReportParameter = new JavaScriptSerializer()
            .Deserialize<SaveEventParameter>(mParameter);
        ExamReportParameter mReport = mSaveEventReportParameter.parameter;
        //JObject mJobject = JObject.Parse(mParameter);
        long mExamIid = mReport.exam_iid;
        //long mExamIid = Convert.ToInt64(mJobject["exam_iid"]);
        // 根据检查表iid查询是否有报告
        var mGetExamReport = context.Query<sr_exam_report>().Where(a => a.exam_iid == mExamIid && a.flag == "9")
            .Select(a => new { a.iid, a.sr_data }).FirstOrDefault();
        if (mGetExamReport == null)
        {
            //新增
            //var a = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
            //MessageBox.Show(a);
            uc_sring1.f_Save(Encoding.Default.GetString(Convert.FromBase64String(S_Args[1])));
        }
        else
        {
            //修改
            //ExamReportParameter examReportParameter = new JavaScriptSerializer()
            //    .Deserialize<ExamReportParameter>(mParameter);
            mReport.iid = mGetExamReport.iid.ToString();
            mSaveEventReportParameter.parameter = mReport;
            //examReportParameter.iid = mGetExamReport.iid.ToString();
            MessageBox.Show(new JavaScriptSerializer().Serialize(mSaveEventReportParameter));
            uc_sring1.f_Save(new JavaScriptSerializer().Serialize(mSaveEventReportParameter));
        }
    }
    catch (Exception ex)
    {
        LogManager.WriteLog("保存报告时发生错误：" + ex.Message);
    }
    finally
    {
        context.Dispose();
    }
    #endregion 注释 保存报告

}

```

报告界面双击模板后加载模板

```csharp
//Report report = new Report();
//report.f_TemplateWriteBack();
//}
//else
//{
//    //写过报告,审核医师是当前登录者
//    //根据输入域id回写shys的签名图片
//    string mSql = "select t.user_id, t.cuser_dzqm from icnris_userinfo t where user_id=:user_id";
//    uDataSet mDataSet = new uDataSet(new string[] { mSql }, new uParameter[] { new uParameter(":user_id", "081") });
//    //mDataSet = new uDataSet(new string[] { mSql }, new uParameter[] { new uParameter(":user_id", S_Args1[2]) });
//    if (mDataSet.RowCount() == 0)
//    {
//        return;
//    }
//    LogManager.WriteLog("user_id:" + S_Args1[2]);
//    foreach (DataTable item in mDataSet.Tables)
//    {
//        foreach (DataRow dr1 in item.Rows) ///遍历所有的行
//        {
//            foreach (DataColumn dc in item.Columns) //遍历所有的列
//            {
//                //LogManager.WriteLog(item.TableName + ", " + dc.ColumnName + ", " + dr1[dc] + ", "); //表名,列名,单元格数据
//            }
//            LogManager.WriteLog("电子签名图片:" + dr1[1]);
//            //调用js 根据输入域id设置图片
//            if (!string.IsNullOrEmpty(dr1[1] as String))
//            {
//                string Base64Str = "data:image/png;base64," + dr1[1];
//                //调用回写数据的js方法
//                StringBuilder mPatientInformationStr = new StringBuilder(); //拼接病人信息回写数据的json
//                mPatientInformationStr.Append("{");
//                mPatientInformationStr.Append("\"shys\":\"" + S_Args1[3] + "\""); //审核医师的姓名
//                mPatientInformationStr.Append("}");
//                uc_Sring.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformationStr + "');");
//                uc_Sring.chromeBrowser.ExecuteScriptAsync("inteImg('" + "shysqm" + "','" + Base64Str + "');");
//            }
//        }
//    }
//}

#region 注释
    //    Thread.Sleep(1000);
    ////回写信息
    //if (mGetDataTemplate == null)
    //{
    //    return;
    //}
    //string mSql = mGetDataTemplate.sql;
    //if (string.IsNullOrEmpty(mSql))
    //{
    //    return;
    //}
    //LogManager.WriteLog("传递的sql:" + mSql);
    ////根据模板iid查询回写病人信息的SQL
    //if (S_Args == null)
    //{
    //    return;
    //}
    //string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
    ////解析参数
    //SaveEventParameter mSaveEventReportParameter = new JavaScriptSerializer()
    //     .Deserialize<SaveEventParameter>(mParameter);
    //ExamReportParameter mReport = mSaveEventReportParameter.parameter;
    ////JObject mJobject = JObject.Parse(mParameter);
    //long mExamIid = mReport.exam_iid; //检查表iid
    //LogManager.WriteLog("mExamIid" + mExamIid);
    ////string mSql = @"select t.* from icnris_exam t where iid=:iid";
    ////mSql = "select t.cname as \"name\", t.CSEX as \"sex\", t.CAGE as \"age\" from icnris_exam t where iid=:iid";
    ////mExamIid = 147073;
    //uDataSet mDataSet = new uDataSet(new string[] { mSql }, new uParameter[] { new uParameter(":iid", mExamIid) }); //147073
    //if (mDataSet.RowCount() == 0)
    //{
    //    return;
    //}
    //foreach (DataTable dt in mDataSet.Tables)
    //{
    //    foreach (DataRow dr in dt.Rows) ///遍历所有的行
    //    {
    //        StringBuilder mPatientInformationStr = new StringBuilder(); //拼接病人信息回写数据的json
    //        mPatientInformationStr.Append("{");
    //        foreach (DataColumn dc in dt.Columns) //遍历所有的列
    //        {
    //            mPatientInformationStr.Append("\"" + dc.ColumnName + "\":\"" + dr[dc] + "\",");
    //            LogManager.WriteLog(dt.TableName + ", " + dc.ColumnName + ", " + dr[dc] + ", "); //表名,列名,单元格数据
    //        }
    //        mPatientInformationStr.Append("\"bgys\":\"" + S_Args1[3] + "\","); //报告医师的姓名
    //        if (mPatientInformationStr.Length > 1)
    //        {
    //            mPatientInformationStr.Remove(mPatientInformationStr.Length - 1, 1); //去除最后一个逗号,
    //        }
    //        mPatientInformationStr.Append("}");
    //        LogManager.WriteLog("json数据:" + mPatientInformationStr.ToString());
    //        //调用回写数据的js方法
    //        uc_Sring.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformationStr + "');");

    //        //回写医生姓名和签名 提交报告医生是当前登陆者 bgys shys
    //        //根据输入域id回写bgys的签名图片
    //        mSql = "select t.user_id, t.cuser_dzqm from icnris_userinfo t where user_id=:user_id";
    //        mDataSet = new uDataSet(new string[] { mSql }, new uParameter[] { new uParameter(":user_id", "081") });
    //        //mDataSet = new uDataSet(new string[] { mSql }, new uParameter[] { new uParameter(":user_id", S_Args1[2]) });
    //        if (mDataSet.RowCount() == 0)
    //        {
    //            return;
    //        }
    //        LogManager.WriteLog("user_id:" + S_Args1[2]);
    //        foreach (DataTable item in mDataSet.Tables)
    //        {
    //            foreach (DataRow dr1 in item.Rows) ///遍历所有的行
    //            {
    //                if (!string.IsNullOrEmpty(dr1[1] as String))
    //                {
    //                    //LogManager.WriteLog("电子签名图片:" + dr1[1]);
    //                }
    //            }
    //        }
    //        //调用js 根据输入域id设置图片

    //    }
    //}
    #endregion 注释
```

gbgl_main

监听其他程序发送的消息

```csharp


/// <summary>
/// 处理其他窗口调阅过来的信息
/// </summary>
/// <param name="pArg"></param>
//public override void f_ProcessParams(object pArg)
//{
//    MessageBox.Show("处理其他窗口发送的消息");
//    var mArg = pArg as Hashtable;
//    if (mArg != null)
//    {
//        if (mArg["type"].ToString() == "icn_sr")
//        {
//            MessageBox.Show("接收到所见:" + mArg["OpinionStr"] + "结论:" + mArg["ConclusionStr"]);
//            txt_nr.Text = mArg["OpinionStr"].ToString();
//            txt_jg.Text = mArg["ConclusionStr"].ToString();
//        }
//        else
//        {
//            //

//            mUserPicControl.f_Setjc(
//                ((Hashtable)pArg)["accno"].ToString(),
//                ((Hashtable)pArg)["name"].ToString(),
//                ((Hashtable)pArg)["sex"].ToString(),
//                ((Hashtable)pArg)["age"].ToString(),
//                ((Hashtable)pArg)["accno"].ToString(),
//                (uDataSet)((Hashtable)pArg)["ds"]
//                );
//            dockPanel_cj.Show();
//            dockPanel_cj.Text = "采集:  " + ((Hashtable)pArg)["name"].ToString();
//        }
//    }

//}
```

icn_sr打开报告加载窗体

```csharp
//ReportMain.f_TemplateLoading();

//网页加载完成事件
//uc_sring1.chromeBrowser.FrameLoadEnd += f_ChromeBrowser_FrameLoadEnd;

//打开报告做的一些事情
//f_OpenReport();
```

icn_sr 报告界面

```csharp

/// <summary>
/// 鼠标在模板列表组件上方并按下
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private void gc_template_MouseDown(object sender, MouseEventArgs e)
{
    #region 注释
        //PostgreSQLContext context = new PostgreSQLContext(new PostgreSQLConnectionFactory(DBConnectionString.POSTGRE_SQL));
        //try
        //{
        //    DevExpress.XtraGrid.Views.Grid.ViewInfo.GridHitInfo hInfo = gridView1.CalcHitInfo(new Point(e.X, e.Y));
        //    if (e.Button == MouseButtons.Left && e.Clicks == 2)
        //    {
        //        if (hInfo.InRow)
        //        {
        //            // 获取选中行的参数
        //            int mSelectRow = gridView1.GetSelectedRows()[0];
        //            //模板iid
        //            string mIid = this.gridView1.GetRowCellValue(mSelectRow, "iid").ToString();
        //            long mTemplatIid = Convert.ToInt64(mIid);
        //            S_TemplateIid = mTemplatIid;
        //            var m_q_datatemplat = context.Query<sr_data_templat>();
        //            var mGetDataTemplate = m_q_datatemplat.Where(a => a.iid == mTemplatIid)
        //                .Select(a => new
        //                {
        //                    a.template_data,
        //                    a.sql
        //                }).FirstOrDefault();
        //            //加载模板
        //            if (!string.IsNullOrEmpty(mGetDataTemplate.template_data))
        //            {
        //                ///TODO
        //                //uc_sring1.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetDataTemplate.template_data + "');");
        //                ///
        //                if (uc_Sring != null)
        //                {
        //                    uc_Sring.chromeBrowser.ExecuteScriptAsync("f_load_template('" + mGetDataTemplate.template_data + "');");
        //                }
        //            }

        //            Thread.Sleep(300);
        //            //回写信息
        //            if (mGetDataTemplate == null)
        //            {
        //                return;
        //            }
        //            string mSql = mGetDataTemplate.sql;
        //            if (string.IsNullOrEmpty(mSql))
        //            {
        //                return;
        //            }
        //            LogManager.WriteLog("传递的sql:" + mSql);
        //            //根据模板iid查询回写病人信息的SQL
        //            if (S_Args == null)
        //            {
        //                return;
        //            }
        //            string mParameter = Encoding.Default.GetString(Convert.FromBase64String(S_Args[1]));
        //            //解析参数
        //            SaveEventParameter mSaveEventReportParameter = new JavaScriptSerializer()
        //                 .Deserialize<SaveEventParameter>(mParameter);
        //            ExamReportParameter mReport = mSaveEventReportParameter.parameter;
        //            //JObject mJobject = JObject.Parse(mParameter);
        //            long mExamIid = mReport.exam_iid; //检查表iid
        //            LogManager.WriteLog("mExamIid" + mExamIid);
        //            //string mSql = @"select t.* from icnris_exam t where iid=:iid";
        //            //mSql = "select t.cname as \"name\", t.CSEX as \"sex\", t.CAGE as \"age\" from icnris_exam t where iid=:iid";
        //            //mExamIid = 147073;
        //            uDataSet mDataSet = new uDataSet(new string[] { mSql }, new uParameter[] { new uParameter(":iid", mExamIid) }); //147073
        //            if (mDataSet.RowCount() == 0)
        //            {
        //                return;
        //            }
        //            foreach (DataTable dt in mDataSet.Tables)
        //            {
        //                foreach (DataRow dr in dt.Rows) ///遍历所有的行
        //                {
        //                    StringBuilder mPatientInformationStr = new StringBuilder(); //拼接病人信息回写数据的json
        //                    mPatientInformationStr.Append("{");
        //                    foreach (DataColumn dc in dt.Columns) //遍历所有的列
        //                    {
        //                        mPatientInformationStr.Append("\"" + dc.ColumnName + "\":\"" + dr[dc] + "\",");
        //                        LogManager.WriteLog(dt.TableName + ", " + dc.ColumnName + ", " + dr[dc] + ", "); //表名,列名,单元格数据
        //                    }
        //                    if (mPatientInformationStr.Length > 1)
        //                    {
        //                        mPatientInformationStr.Remove(mPatientInformationStr.Length - 1, 1); //去除最后一个逗号,
        //                    }
        //                    mPatientInformationStr.Append("}");
        //                    LogManager.WriteLog("json数据:" + mPatientInformationStr.ToString());
        //                    //调用回写数据的js方法
        //                    uc_Sring.chromeBrowser.ExecuteScriptAsync("f_set_data('" + mPatientInformationStr + "');");
        //                }
        //            }
        //        }
        //    }
        //}
        //catch (Exception ex)
        //{
        //    LogManager.WriteLog("双击模板出错:" + ex.Message);
        //}
        //finally
        //{
        //    context.Dispose();
        //}
        #endregion
}

```

```csharp

private void tree_templat_MouseDown(object sender, MouseEventArgs e)
{
    #region 注释
        //try
        //{
        //    DevExpress.XtraGrid.Views.Grid.ViewInfo.GridHitInfo hInfo = gridView1.CalcHitInfo(new Point(e.X, e.Y));
        //    if (e.Button == MouseButtons.Left && e.Clicks == 2)
        //    {
        //        if (hInfo.InRow)
        //        {
        //            // 获取选中行的参数
        //            DevExpress.XtraTreeList.Nodes.TreeListNode mListNode = tree_templat.FocusedNode;
        //            //没有子节点
        //            if (!mListNode.HasChildren)
        //            {
        //                string mIid = mListNode["iid"].ToString();

        //            }
        //        }
        //    }
        //}
        //catch (Exception ex)
        //{
        //    LogManager.WriteLog("双击模板出错:" + ex.Message);
        //}
        //finally
        //{

        //}
        #endregion 注释
}

```

```csharp

/// <summary>
/// 打开控制台
/// </summary>
/// <param name="sender"></param>
/// <param name="e"></param>
private void simpleButton1_Click(object sender, EventArgs e)
{
    uc_sring1.chromeBrowser.ShowDevTools();
}

```

报告界面按按键

```csharp
//var mkey = e.KeyCode;
//if (Keys.ControlKey == mkey && Keys.V == mkey)
//{
//    MessageBox.Show("Ctrl V");
//}
//ConsoleKeyInfo ki = Console.ReadKey(true);
//if ((ki.Key == ConsoleKey.V) && (ki.Modifiers == ConsoleModifiers.Control))
//{
//Console.WriteLine("Ctrl+V pressed");
//IDataObject iData = Clipboard.GetDataObject();
//if (iData.GetDataPresent(DataFormats.Bitmap))
//{
//    Image image = (Bitmap)iData.GetData(DataFormats.Bitmap);
//    using (System.IO.MemoryStream memoryStream = new System.IO.MemoryStream())
//    {
//        image.Save(memoryStream, image.RawFormat);
//        byte[] imageBytes = memoryStream.ToArray();
//        string base64Str = Convert.ToBase64String(imageBytes);
//        base64Str = "data:image/png;base64," + base64Str;
//        uc_sring1.chromeBrowser.ExecuteScriptAsync("imgClick('" + base64Str + "')");
//    }
//}
//}
//
//Console.Write("Press any key to continue . . . ");
```

其他方式保存pdf二进制文件

```csharp

#region 注释 其他方式保存文件
    //BASE64Decoder decoder = new BASE64Decoder();
    //BufferedInputStream bis = null;
    //FileOutputStream fos = null;
    //BufferedOutputStream bos = null;

    //try
    //{
    //    byte[] bytes = decoder.decodeBuffer(base64Content);//base64编码内容转换为字节数组
    //    ByteArrayInputStream byteInputStream = new ByteArrayInputStream(bytes);
    //    bis = new BufferedInputStream(byteInputStream);
    //    File file = new File(filePath);
    //    File path = file.getParentFile();
    //    if (!path.exists())
    //    {
    //        path.mkdirs();
    //    }
    //    fos = new FileOutputStream(file);
    //    bos = new BufferedOutputStream(fos);

    //    byte[] buffer = new byte[1024];
    //    int length = bis.read(buffer);
    //    while (length != -1)
    //    {
    //        bos.write(buffer, 0, length);
    //        length = bis.read(buffer);
    //    }
    //    bos.flush();
    //}
    //catch (Exception e)
    //{
    //    e.printStackTrace();
    //}
    //finally
    //{
    //    closeStream(bis, fos, bos);
    //}
    #endregion
```

保存二进制方法文件

```csharp
//byte[] sPDFDecoded = Convert.FromBase64String(mPdfBase64Str);
//BinaryWriter writer = new BinaryWriter(File.Open(@"c:\Users\Administrator\Documents\pdf9.pdf", FileMode.CreateNew));
//writer.Write(sPDFDecoded);
```

pdf base64字符串在新网页打开时的前缀

```csharp
//mPdfBase64Str = "data:application/pdf;base64,";
```











