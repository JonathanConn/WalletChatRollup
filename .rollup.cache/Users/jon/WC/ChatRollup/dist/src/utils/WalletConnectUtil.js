import { __awaiter, __generator } from "tslib";
import SignClient from '@walletconnect/sign-client';
import { ChatClient } from '@walletconnect/chat-client';
export var signClient;
export var chatClient;
export function createSignClient() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, SignClient.init({
                        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
                        relayUrl: (_a = process.env.NEXT_PUBLIC_RELAY_URL) !== null && _a !== void 0 ? _a : 'wss://relay.walletconnect.com',
                        metadata: {
                            name: 'React Wallet',
                            description: 'React Wallet for WalletConnect',
                            url: 'https://walletconnect.com/',
                            icons: ['https://avatars.githubusercontent.com/u/37784886']
                        }
                    })];
                case 1:
                    signClient = _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// FIXME: update relayUrl here to not hardcode local relay.
export function createChatClient() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ChatClient.init({
                        logger: 'debug',
                        keyseverUrl: 'https://keys.walletconnect.com',
                        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
                        relayUrl: (_a = process.env.NEXT_PUBLIC_RELAY_URL) !== null && _a !== void 0 ? _a : 'wss://relay.walletconnect.com'
                    })];
                case 1:
                    chatClient = _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=WalletConnectUtil.js.map