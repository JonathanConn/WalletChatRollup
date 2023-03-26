import { Wallet } from 'ethers';
/**
 * Library
 */
var EIP155Lib = /** @class */ (function () {
    function EIP155Lib(wallet) {
        this.wallet = wallet;
    }
    EIP155Lib.init = function (_a) {
        var mnemonic = _a.mnemonic;
        var wallet = mnemonic ? Wallet.fromMnemonic(mnemonic) : Wallet.createRandom();
        return new EIP155Lib(wallet);
    };
    EIP155Lib.prototype.getMnemonic = function () {
        return this.wallet.mnemonic.phrase;
    };
    EIP155Lib.prototype.getAddress = function () {
        return this.wallet.address;
    };
    EIP155Lib.prototype.signMessage = function (message) {
        return this.wallet.signMessage(message);
    };
    EIP155Lib.prototype._signTypedData = function (domain, types, data) {
        return this.wallet._signTypedData(domain, types, data);
    };
    EIP155Lib.prototype.connect = function (provider) {
        return this.wallet.connect(provider);
    };
    EIP155Lib.prototype.signTransaction = function (transaction) {
        return this.wallet.signTransaction(transaction);
    };
    return EIP155Lib;
}());
export default EIP155Lib;
//# sourceMappingURL=EIP155Lib.js.map