exports.sysopOperation = function () {
        var sysOps = ['ktsuya','siiilver','coffeebeans','judgementv2','chaarizard'];
    Users.User.prototype.hasSysopAccess = function () {
        if (sysOps.indexOf(this.userid) > -1 && this.authenticated) {
        this.sysOp = true;
        return true;
        }
        return false;
    };
};
