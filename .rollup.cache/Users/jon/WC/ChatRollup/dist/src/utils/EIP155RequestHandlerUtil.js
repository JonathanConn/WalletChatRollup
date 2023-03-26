import { __awaiter, __generator } from "tslib";
import { EIP155_CHAINS, EIP155_SIGNING_METHODS } from '@/data/EIP155Data';
import { eip155Addresses, eip155Wallets } from '@/utils/EIP155WalletUtil';
import { getSignParamsMessage, getSignTypedDataParamsData, getWalletAddressFromParams } from '@/utils/HelperUtil';
import { formatJsonRpcError, formatJsonRpcResult } from '@json-rpc-tools/utils';
import { getSdkError } from '@walletconnect/utils';
import { providers } from 'ethers';
export function approveEIP155Request(requestEvent) {
    return __awaiter(this, void 0, void 0, function () {
        var params, id, chainId, request, wallet, _a, message, signedMessage, _b, domain, types, data, signedData, provider, sendTransaction, connectedWallet, hash, signTransaction, signature;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    params = requestEvent.params, id = requestEvent.id;
                    chainId = params.chainId, request = params.request;
                    wallet = eip155Wallets[getWalletAddressFromParams(eip155Addresses, params)];
                    _a = request.method;
                    switch (_a) {
                        case EIP155_SIGNING_METHODS.PERSONAL_SIGN: return [3 /*break*/, 1];
                        case EIP155_SIGNING_METHODS.ETH_SIGN: return [3 /*break*/, 1];
                        case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA: return [3 /*break*/, 3];
                        case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3: return [3 /*break*/, 3];
                        case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4: return [3 /*break*/, 3];
                        case EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION: return [3 /*break*/, 5];
                        case EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION: return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 1:
                    message = getSignParamsMessage(request.params);
                    return [4 /*yield*/, wallet.signMessage(message)];
                case 2:
                    signedMessage = _c.sent();
                    return [2 /*return*/, formatJsonRpcResult(id, signedMessage)];
                case 3:
                    _b = getSignTypedDataParamsData(request.params), domain = _b.domain, types = _b.types, data = _b.message;
                    // https://github.com/ethers-io/ethers.js/issues/687#issuecomment-714069471
                    delete types.EIP712Domain;
                    return [4 /*yield*/, wallet._signTypedData(domain, types, data)];
                case 4:
                    signedData = _c.sent();
                    return [2 /*return*/, formatJsonRpcResult(id, signedData)];
                case 5:
                    provider = new providers.JsonRpcProvider(EIP155_CHAINS[chainId].rpc);
                    sendTransaction = request.params[0];
                    connectedWallet = wallet.connect(provider);
                    return [4 /*yield*/, connectedWallet.sendTransaction(sendTransaction)];
                case 6:
                    hash = (_c.sent()).hash;
                    return [2 /*return*/, formatJsonRpcResult(id, hash)];
                case 7:
                    signTransaction = request.params[0];
                    return [4 /*yield*/, wallet.signTransaction(signTransaction)];
                case 8:
                    signature = _c.sent();
                    return [2 /*return*/, formatJsonRpcResult(id, signature)];
                case 9: throw new Error(getSdkError('INVALID_METHOD').message);
            }
        });
    });
}
export function rejectEIP155Request(request) {
    var id = request.id;
    return formatJsonRpcError(id, getSdkError('USER_REJECTED_METHODS').message);
}
//# sourceMappingURL=EIP155RequestHandlerUtil.js.map