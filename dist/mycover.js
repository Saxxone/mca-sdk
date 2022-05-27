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
}
mycoverAI(settings, config);
exports.mycover = mycoverAI;
//# sourceMappingURL=mycover.js.map