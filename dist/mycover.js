"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mycover = void 0;
var UserOptions;
(function (UserOptions) {
    UserOptions[UserOptions["yes"] = 0] = "yes";
    UserOptions[UserOptions["no"] = 1] = "no";
})(UserOptions || (UserOptions = {}));
const settings = {
    requestEmail: true,
};
const config = {
    onClose() {
    }
};
function mycoverAI(settings, config) {
    console.log('Mycover AI SDK installed!!', config);
    mountIframe();
}
function mountIframe() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'mycover-sdk');
    iframe.setAttribute('title', 'Mycover SDK');
    iframe.setAttribute('width', '300');
    iframe.setAttribute('height', '200');
    iframe.setAttribute('allow', 'fullscreen');
    iframe.setAttribute('src', './mycover.html');
    iframe.setAttribute('style', 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;');
    document.body.appendChild(iframe);
}
mycoverAI(settings, config);
exports.mycover = mycoverAI;
//# sourceMappingURL=mycover.js.map