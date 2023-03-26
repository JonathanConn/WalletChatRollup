import { __awaiter, __generator } from "tslib";
import CosmosLib from '@/lib/CosmosLib';
export var wallet1;
export var wallet2;
export var cosmosWallets;
export var cosmosAddresses;
var address1;
var address2;
/**
 * Utilities
 */
export function createOrRestoreCosmosWallet() {
    return __awaiter(this, void 0, void 0, function () {
        var mnemonic1, mnemonic2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mnemonic1 = localStorage.getItem('COSMOS_MNEMONIC_1');
                    mnemonic2 = localStorage.getItem('COSMOS_MNEMONIC_2');
                    if (!(mnemonic1 && mnemonic2)) return [3 /*break*/, 3];
                    return [4 /*yield*/, CosmosLib.init({ mnemonic: mnemonic1 })];
                case 1:
                    wallet1 = _b.sent();
                    return [4 /*yield*/, CosmosLib.init({ mnemonic: mnemonic2 })];
                case 2:
                    wallet2 = _b.sent();
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, CosmosLib.init({})];
                case 4:
                    wallet1 = _b.sent();
                    return [4 /*yield*/, CosmosLib.init({})
                        // Don't store mnemonic in local storage in a production project!
                    ];
                case 5:
                    wallet2 = _b.sent();
                    // Don't store mnemonic in local storage in a production project!
                    localStorage.setItem('COSMOS_MNEMONIC_1', wallet1.getMnemonic());
                    localStorage.setItem('COSMOS_MNEMONIC_2', wallet2.getMnemonic());
                    _b.label = 6;
                case 6: return [4 /*yield*/, wallet1.getAddress()];
                case 7:
                    address1 = _b.sent();
                    return [4 /*yield*/, wallet2.getAddress()];
                case 8:
                    address2 = _b.sent();
                    cosmosWallets = (_a = {},
                        _a[address1] = wallet1,
                        _a[address2] = wallet2,
                        _a);
                    cosmosAddresses = Object.keys(cosmosWallets);
                    return [2 /*return*/, {
                            cosmosWallets: cosmosWallets,
                            cosmosAddresses: cosmosAddresses
                        }];
            }
        });
    });
}
//# sourceMappingURL=CosmosWalletUtil.js.map