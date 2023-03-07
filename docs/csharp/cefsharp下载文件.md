### cefsharp下载文件

```csharp
uc_sring1.chromeBrowser.DownloadHandler = new MyDownLoadFile(progressBar1, fileDownload); //下载
```

```csharp
/// <summary>
/// 下载文件
/// </summary>
/// 
public class MyDownLoadFile : IDownloadHandler
{
    private System.Windows.Forms.ProgressBar _bar;
    FileDownload _fileDownload;
    bool mIsOk = false;
    //当文件下载时我们需要通知浏览器显示下载工具栏并更新下载状态信息
    //在 CustomDownloadHandler中新增_downloadCallBackEvent事件
    private readonly Action<bool, DownloadItem> _downloadCallBackEvent;//第一个参数为true为update

    public event EventHandler<DownloadItem> OnBeforeDownloadFired;

    public event EventHandler<DownloadItem> OnDownloadUpdatedFired;
    public MyDownLoadFile(System.Windows.Forms.ProgressBar bar, FileDownload fileDownload)
    {
        _bar = bar;
        _fileDownload = fileDownload;
    }

    public void OnBeforeDownload(IWebBrowser chromiumWebBrowser, IBrowser browser,
                                 DownloadItem downloadItem, IBeforeDownloadCallback callback)
    {
        var handler = OnBeforeDownloadFired;

        if (handler != null)
        {
            handler(this, downloadItem);
        }

        if (!callback.IsDisposed)
        {
            using (callback)
            {
                callback.Continue(downloadItem.SuggestedFileName, showDialog: true);
            }
        }
    }
    public void OnDownloadUpdated(IWebBrowser chromiumWebBrowser, IBrowser browser,
                                  DownloadItem downloadItem, IDownloadItemCallback callback)
    {
        var c = 2;
        ///_downloadCallBackEvent?.Invoke(true, downloadItem);
        long bytes = downloadItem.CurrentSpeed; // 下载速度
        long totalBytes = downloadItem.TotalBytes; // 总大小
        long reciveBytes = downloadItem.ReceivedBytes;  // 完成大小
        long id = downloadItem.Id; // id
        string fileName = downloadItem.SuggestedFileName; //建议名称
        string url = downloadItem.Url; //url
        string fullPath = downloadItem.FullPath; // 本地路径

        if (!string.IsNullOrEmpty(fullPath) && !mIsOk)
        {
            _bar.Invoke(new Action(() => {
                _bar.Visible = true;
                _bar.Maximum = Convert.ToInt32(downloadItem.TotalBytes);
                _bar.Value = Convert.ToInt32(downloadItem.ReceivedBytes);
            }));
        }

        //如果下载完成
        if ((totalBytes == reciveBytes && !mIsOk))
        {
            mIsOk = true;
            _bar.Invoke(new Action(() => {
                _bar.Visible = false;
            }));
        }
        if (downloadItem.IsComplete && mIsOk)
        {
            MessageBox.Show("下载完成");
            mIsOk = false;
        }

    }

    public bool OnDownloadUpdated(CefSharp.DownloadItem downloadItem)
    {
        return false;
    }
}
```

