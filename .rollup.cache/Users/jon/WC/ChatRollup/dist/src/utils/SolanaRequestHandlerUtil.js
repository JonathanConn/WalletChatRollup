import { __awaiter, __generator } from "tslib";
import { SOLANA_SIGNING_METHODS } from '@/data/SolanaData';
import { getWalletAddressFromParams } from '@/utils/HelperUtil';
import { solanaAddresses, solanaWallets } from '@/utils/SolanaWalletUtil';
import { formatJsonRpcError, formatJsonRpcResult } from '@json-rpc-tools/utils';
import { getSdkError } from '@walletconnect/utils';
export function approveSolanaRequest(requestEvent) {
    return __awaiter(this, void 0, void 0, function () {
        var params, id, request, wallet, _a, signedMessage, signedTransaction;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    params = requestEvent.params, id = requestEvent.id;
                    request = params.request;
                    wallet = solanaWallets[getWalletAddressFromParams(solanaAddresses, params)];
                    _a = request.method;
                    switch (_a) {
                        case SOLANA_SIGNING_METHODS.SOLANA_SIGN_MESSAGE: return [3 /*break*/, 1];
                        case SOLANA_SIGNING_METHODS.SOLANA_SIGN_TRANSACTION: return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, wallet.signMessage(request.params.message)];
                case 2:
                    signedMessage = _b.sent();
                    return [2 /*return*/, formatJsonRpcResult(id, signedMessage)];
                case 3: return [4 /*yield*/, wallet.signTransaction(request.params.feePayer, request.params.recentBlockhash, request.params.instructions)];
                case 4:
                    signedTransaction = _b.sent();
                    return [2 /*return*/, formatJsonRpcResult(id, signedTransaction)];
                case 5: throw new Error(getSdkError('INVALID_METHOD').message);
            }
        });
    });
}
export function rejectSolanaRequest(request) {
    var id = request.id;
    return formatJsonRpcError(id, getSdkError('USER_REJECTED_METHODS').message);
}
//# sourceMappingURL=SolanaRequestHandlerUtil.js.map