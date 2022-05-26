"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserOptions;
(function (UserOptions) {
    UserOptions[UserOptions["yes"] = 0] = "yes";
    UserOptions[UserOptions["no"] = 1] = "no";
})(UserOptions || (UserOptions = {}));
const config = {
    requestEmail: true
};
function initialize(config) {
    console.log('Mycover AI SDK installed!!', config);
}
initialize(config);
exports.default = initialize;
//# sourceMappingURL=index.js.map