import { __awaiter, __generator } from "tslib";
import SettingsStore from '@/store/SettingsStore';
import { createOrRestoreCosmosWallet } from '@/utils/CosmosWalletUtil';
import { createOrRestoreEIP155Wallet, eip155Wallets } from '@/utils/EIP155WalletUtil';
import { createOrRestoreSolanaWallet } from '@/utils/SolanaWalletUtil';
import { chatClient, createChatClient, createSignClient } from '@/utils/WalletConnectUtil';
import { useCallback, useEffect, useState } from 'react';
export default function useInitialization() {
    var _this = this;
    var _a = useState(false), initialized = _a[0], setInitialized = _a[1];
    var onInitialize = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var accountIndex_1, eip155Addresses_1, cosmosAddresses, solanaAddresses, err_1;
        var _this = this;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    accountIndex_1 = parseInt((_a = new URLSearchParams(window.location.search).get('accountIndex')) !== null && _a !== void 0 ? _a : '0');
                    eip155Addresses_1 = createOrRestoreEIP155Wallet().eip155Addresses;
                    return [4 /*yield*/, createOrRestoreCosmosWallet()];
                case 1:
                    cosmosAddresses = (_b.sent()).cosmosAddresses;
                    return [4 /*yield*/, createOrRestoreSolanaWallet()];
                case 2:
                    solanaAddresses = (_b.sent()).solanaAddresses;
                    SettingsStore.setAccount(accountIndex_1);
                    SettingsStore.setEIP155Address(eip155Addresses_1[accountIndex_1]);
                    SettingsStore.setCosmosAddress(cosmosAddresses[accountIndex_1]);
                    SettingsStore.setSolanaAddress(solanaAddresses[accountIndex_1]);
                    return [4 /*yield*/, createSignClient()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, createChatClient()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, chatClient.register({
                            account: "eip155:1:".concat(eip155Addresses_1[accountIndex_1]),
                            onSign: function (message) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, eip155Wallets[eip155Addresses_1[accountIndex_1]].signMessage(message)];
                                });
                            }); }
                        })];
                case 5:
                    _b.sent();
                    console.log('[Chat] registered address %s on keyserver', "eip155:1:".concat(eip155Addresses_1[accountIndex_1]));
                    setInitialized(true);
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _b.sent();
                    alert(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); }, []);
    useEffect(function () {
        if (!initialized) {
            onInitialize();
        }
    }, [initialized, onInitialize]);
    return initialized;
}
//# sourceMappingURL=useInitialization.js.map