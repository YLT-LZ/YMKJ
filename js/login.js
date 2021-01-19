$(function () {
    $(".link_reg").on("click", function () {
        $(".reg-box").show().siblings("div").hide();
        $('input').val('');
    });
    $(".link-login").on("click", function () {
        $(".login-box").show().siblings("div").hide();
        $('input').val('');
    });

    var form = layui.form;
    form.verify({
        uid: [
            /^[a-zA-z\d]{6,11}$/,
            '账号必须为6-11位字母数字组合'
        ],
        upwd: [
            /^[\S]{6,18}$/, '密码必须6-18位，不能使用空格'
        ]
    });
    $('#form_zc').on('submit', function (e) {
        e.preventDefault();
    })
    $('#form_dl').on('submit', function (e) {
        e.preventDefault();
    })
    $('#Register').on("click", function () {
        var ulogid = $('.zhanghao').val();
        var uemail = $('.youxiang').val();
        var uname = $('.yonghuming').val();
        var upwd = $('.mima').val();
        $.post('http://127.0.0.1:8024/api/reguser',
            { ulogid: ulogid, uemail: uemail, uname: uname, upwd: upwd },
            function (res) {
                // 判断是否成功
                if (res.status != 0) {
                    return alert("注册失败！可能该用户名或登陆账号已被占用");
                }
                alert("注册成功！点击右下角登录");
                $(".link-login").click();
            }
        );
    });

    $('#Enter').on("click", function () {
        var dl_ulogid = $('.dl_zhanghao').val();
        var dl_upwd = $('.dl_mima').val();
        console.log(dl_ulogid);
        console.log(dl_upwd);
        $.post('http://127.0.0.1:8024/api/login',
            { ulogid: dl_ulogid, upwd: dl_upwd },
            function (res) {
                // 判断是否成功
                if (res.status != 0) {
                    return alert("登陆失败，请检查账号密码是否正确");
                }
                alert("登录成功");
            }
        );
    });
});