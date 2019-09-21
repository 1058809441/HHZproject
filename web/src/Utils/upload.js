
// <link rel="stylesheet" type="text/css" href="https://cdn.staticfile.org/webuploader/0.1.1/webuploader.css">
// <script src="https://cdn.staticfile.org/webuploader/0.1.1/webuploader.js"></script>
// <script src="https://cdn.staticfile.org/webuploader/0.1.1/Uploader.swf"></script>
// <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>

// import from "./webuploader/0.1.1/webuploader.css";


// 初始化Web Uploader
var uploader = WebUploader.create({
    // 选完文件后，是否自动上传。
    auto: false,
    // swf文件路径
    swf: 'https://cdn.staticfile.org/webuploader/0.1.1/Uploader.swf',
    // 文件接收服务端。
    server: 'upload',
    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#picker',
    // 只允许选择图片文件。
    accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/*'
    }
});

function upload() {
    uploader.on("uploadStart", () => { });
}

// 文件上传成功
uploader.on('uploadSuccess', function (file, response) {
    //获得服务器的图片 img
    let url = response.url;

    let img = document.getElementById('img1');
    img.src = url;

    alert("上传成功！");

});
