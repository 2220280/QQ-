// ユーザーエージェントを識別してスマホの時以外はイベントの処理を無効化
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);

if (!isMobile) {
    $('a[href^="tel:"]').on('click', function (e) {
        e.preventDefault();
    });
}