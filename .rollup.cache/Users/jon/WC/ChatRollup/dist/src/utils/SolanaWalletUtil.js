import { __awaiter, __generator } from "tslib";
import SolanaLib from '@/lib/SolanaLib';
export var wallet1;
export var wallet2;
export var solanaWallets;
export var solanaAddresses;
var address1;
var address2;
/**
 * Utilities
 */
export function createOrRestoreSolanaWallet() {
    return __awaiter(this, void 0, void 0, function () {
        var secretKey1, secretKey2, secretArray1, secretArray2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    secretKey1 = localStorage.getItem('SOLANA_SECRET_KEY_1');
                    secretKey2 = localStorage.getItem('SOLANA_SECRET_KEY_2');
                    if (secretKey1 && secretKey2) {
                        secretArray1 = Object.values(JSON.parse(secretKey1));
                        secretArray2 = Object.values(JSON.parse(secretKey2));
                        wallet1 = SolanaLib.init({ secretKey: Uint8Array.from(secretArray1) });
                        wallet2 = SolanaLib.init({ secretKey: Uint8Array.from(secretArray2) });
                    }
                    else {
                        wallet1 = SolanaLib.init({});
                        wallet2 = SolanaLib.init({});
                        // Don't store secretKey in local storage in a production project!
                        localStorage.setItem('SOLANA_SECRET_KEY_1', JSON.stringify(Array.from(wallet1.keypair.secretKey)));
                        localStorage.setItem('SOLANA_SECRET_KEY_2', JSON.stringify(Array.from(wallet2.keypair.secretKey)));
                    }
                    return [4 /*yield*/, wallet1.getAddress()];
                case 1:
                    address1 = _b.sent();
                    return [4 /*yield*/, wallet2.getAddress()];
                case 2:
                    address2 = _b.sent();
                    solanaWallets = (_a = {},
                        _a[address1] = wallet1,
                        _a[address2] = wallet2,
                        _a);
                    solanaAddresses = Object.keys(solanaWallets);
                    return [2 /*return*/, {
                            solanaWallets: solanaWallets,
                            solanaAddresses: solanaAddresses
                        }];
            }
        });
    });
}
//# sourceMappingURL=SolanaWalletUtil.js.map