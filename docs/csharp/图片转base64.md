### 图片转base64

gist: [代码片段](https://gist.github.com/zichenlbl/d106520bacf88f64322571ea2aaaf926)

```csharp
//Base64字符串前缀 data:image/png;base64,
//完整base64图片 "data:image/png;base64," + Base64Str

/// <summary>
/// Base64字符串帮助类
/// </summary>
public class Base64StringHelper
{
    /// <summary>
    /// Image转Base64字符串0
    /// </summary>
    /// <param name="file">图片</param>
    /// <returns></returns>
    public string f_ConvertImageToBase64(Image pFile)
    {
        using (MemoryStream memoryStream = new MemoryStream())
        {
            pFile.Save(memoryStream, ImageFormat.Jpeg);
            byte[] imageBytes = memoryStream.ToArray();
            return Convert.ToBase64String(imageBytes);
        }
    }
    
    /// <summary>
    /// Image转Base64字符串1
    /// </summary>
    /// <param name="file">图片</param>
    /// <returns></returns>
    public static string ConvertImageToBase64Striing(Image file)
    {
        using (MemoryStream memoryStream = new MemoryStream())
        {
            //file.RawFormat会报错, 使用方法0
            file.Save(memoryStream, file.RawFormat);
            byte[] imageBytes = memoryStream.ToArray();
            return Convert.ToBase64String(imageBytes);
        }
    }
    
    /// <summary>
    /// Bitmap转base64字符串
    /// </summary>
    /// <returns></returns>
    public static string ConvertBitmapToBase64String(Bitmap bmp)
    {
        //Bitmap bmp = null;
        MemoryStream ms = null;
        try
        {
            //string Imagefilename = Application.StartupPath + @"\images\1.png";
            //bmp = new Bitmap(Imagefilename);
            ms = new MemoryStream();
            //将此图像以指定的格式保存到指定的流中。
            bmp.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
            byte[] buffer = new byte[ms.Length];
            //设置流的当前位置
            ms.Position = 0;
            //从当前流中读取字节块并将数据写入缓冲区。
            ms.Read(buffer, 0, (int)ms.Length);
            ms.Close();
            return Convert.ToBase64String(buffer);
        }
        catch (Exception ex)
        {
            throw;
        }
        finally
        {
            if (bmp != null)
            {
                bmp.Dispose();
            }
            if (ms != null)
            {
                ms.Dispose();
            }
        }

    }

    /// <summary>
    /// base64字符串转Bitmap
    /// </summary>
    /// <param name="base64Str">base64字符串</param>
    /// <returns></returns>
    public static Bitmap ConvertBase64StringToBitmap(string base64Str)
    {
        MemoryStream ms = null;
        Bitmap bmp = null;
        try
        {
            byte[] arr = Convert.FromBase64String(base64Str);
            ms = new MemoryStream(arr);
            bmp = new Bitmap(ms);
            //保存到本地
            //bmp.Save(@"d:\test.png", System.Drawing.Imaging.ImageFormat.Png);
            return bmp;
        }
        catch (Exception ex)
        {
            throw;
        }
        finally
        {
            if (ms != null)
            {
                ms.Close();
            }
            //返回的bmp不需要释放,否则返回为空
        }
    }

    /// <summary>
    /// base64字符串转Image
    /// </summary>
    /// <param name="base64Str">base64字符串</param>
    /// <returns></returns>
    public static Image ConvertBase64StringToImage(string base64Str)
    {
        MemoryStream ms = null;
        try
        {
            byte[] arr = Convert.FromBase64String(base64Str);
            ms = new MemoryStream(arr, 0, arr.Length);
            //ms.Write(arr, 0, arr.Length);
            //使用该数据流中嵌入的颜色管理信息
            Image image = Image.FromStream(ms, true);
            return image;
        }
        catch (Exception ex)
        {

            throw;
        }
        finally
        {
            if (ms != null)
            {
                ms.Dispose();
            }
        }
    }
}
```
