$(function () {
    $(".link_reg").on("click", function () {
        $(".reg-box").show().siblings("div").hide();
    });
    $(".link-login").on("click", function () {
        $(".login-box").show().siblings("div").hide();
    });

    var form = layui.form;
    form.verify({
        uid: [
            /^[a-zA-z\d]{6,11}$/,
            '账号必须为6-11位字母数字组合'
        ],
        upwd: [
          /^[\S]{6,18}$/,'密码必须6-18位，不能使用空格'  
        ]
    });
});