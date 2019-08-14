// 导入node-cmd
var cmd = require("node-cmd");
// 到处文件到1.txt
cmd.get("adb devices > 1.txt",function(err,data){
    console.log(data);
});
 
// 读取文件
var fs=require('fs'); 
fs.readFile('1.txt','utf-8',function(err,data){
    if(err){
        console.error(err);
    }
        //   截取id
        var id = data;
        console.log(id);
    // 开始分开每个devicesId（测试2个）
    for(var i=1;i<=2;i++){
        var start=26+((i-1)*27);
        var end=44+((i-1)*27);
        var devicesId=[];
        devicesId[i]=id.slice(start,end);
        console.log(devicesId[i]);
    // 获取命令（利用adb -s 实现分别操作手机）
        var pushRom = "adb -s "+devicesId[i]+" push env.apk /sdcard/";
        var installRom = "adb -s "+devicesId[i]+" install -r env.apk";

        console.log(pushRom);
        console.log(installRom);
    // 执行命令
        cmd.get(pushRom,function(err,data){
            console.log("正在推送，请稍候。。。");
            console.log(data);
        });
        cmd.get(installRom,function(err,data){
            console.log("正在安装，请稍候。。。");
            console.log(data);
        });

        }
});
      
