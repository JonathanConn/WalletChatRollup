import { __awaiter, __generator } from "tslib";
import { COSMOS_SIGNING_METHODS } from '@/data/COSMOSData';
import { cosmosAddresses, cosmosWallets } from '@/utils/CosmosWalletUtil';
import { getWalletAddressFromParams } from '@/utils/HelperUtil';
import { formatJsonRpcError, formatJsonRpcResult } from '@json-rpc-tools/utils';
import { getSdkError } from '@walletconnect/utils';
import { parseSignDocValues } from 'cosmos-wallet';
export function approveCosmosRequest(requestEvent) {
    return __awaiter(this, void 0, void 0, function () {
        var params, id, request, wallet, _a, signedDirect, signedAmino;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    params = requestEvent.params, id = requestEvent.id;
                    request = params.request;
                    wallet = cosmosWallets[getWalletAddressFromParams(cosmosAddresses, params)];
                    _a = request.method;
                    switch (_a) {
                        case COSMOS_SIGNING_METHODS.COSMOS_SIGN_DIRECT: return [3 /*break*/, 1];
                        case COSMOS_SIGNING_METHODS.COSMOS_SIGN_AMINO: return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, wallet.signDirect(request.params.signerAddress, parseSignDocValues(request.params.signDoc))];
                case 2:
                    signedDirect = _b.sent();
                    return [2 /*return*/, formatJsonRpcResult(id, signedDirect.signature)];
                case 3: return [4 /*yield*/, wallet.signAmino(request.params.signerAddress, request.params.signDoc)];
                case 4:
                    signedAmino = _b.sent();
                    return [2 /*return*/, formatJsonRpcResult(id, signedAmino.signature)];
                case 5: throw new Error(getSdkError('INVALID_METHOD').message);
            }
        });
    });
}
export function rejectCosmosRequest(request) {
    var id = request.id;
    return formatJsonRpcError(id, getSdkError('USER_REJECTED_METHODS').message);
}
//# sourceMappingURL=CosmosRequestHandler.js.map