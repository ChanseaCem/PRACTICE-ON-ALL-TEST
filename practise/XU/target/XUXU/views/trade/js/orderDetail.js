
/*复制*/
var clipboard = new Clipboard('.b-copy');

clipboard.on('success', function(e) {
    e.clearSelection();
    layer.open({
        content: '复制成功'
        ,skin: 'msg'
        ,time: 1 //2秒后自动关闭
        ,className:"pop-up-msg"
    });
});

clipboard.on('error', function(e) {
    layer.open({
        content: '复制失败'
        ,skin: 'msg'
        ,time: 1 //2秒后自动关闭
        ,className:"pop-up-msg"
    });
});
/*复制 end */
