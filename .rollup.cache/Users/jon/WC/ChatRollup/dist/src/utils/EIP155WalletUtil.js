import EIP155Lib from '@/lib/EIP155Lib';
export var wallet1;
export var wallet2;
export var eip155Wallets;
export var eip155Addresses;
var address1;
var address2;
/**
 * Utilities
 */
export function createOrRestoreEIP155Wallet() {
    var _a;
    var mnemonic1 = localStorage.getItem('EIP155_MNEMONIC_1');
    var mnemonic2 = localStorage.getItem('EIP155_MNEMONIC_2');
    if (mnemonic1 && mnemonic2) {
        wallet1 = EIP155Lib.init({ mnemonic: mnemonic1 });
        wallet2 = EIP155Lib.init({ mnemonic: mnemonic2 });
    }
    else {
        wallet1 = EIP155Lib.init({});
        wallet2 = EIP155Lib.init({});
        // Don't store mnemonic in local storage in a production project!
        localStorage.setItem('EIP155_MNEMONIC_1', wallet1.getMnemonic());
        localStorage.setItem('EIP155_MNEMONIC_2', wallet2.getMnemonic());
    }
    address1 = wallet1.getAddress();
    address2 = wallet2.getAddress();
    eip155Wallets = (_a = {},
        _a[address1] = wallet1,
        _a[address2] = wallet2,
        _a);
    eip155Addresses = Object.keys(eip155Wallets);
    return {
        eip155Wallets: eip155Wallets,
        eip155Addresses: eip155Addresses
    };
}
//# sourceMappingURL=EIP155WalletUtil.js.map