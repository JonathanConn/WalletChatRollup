import { __awaiter, __generator } from "tslib";
import { COSMOS_SIGNING_METHODS } from '@/data/COSMOSData';
import { EIP155_SIGNING_METHODS } from '@/data/EIP155Data';
import { SOLANA_SIGNING_METHODS } from '@/data/SolanaData';
import ModalStore from '@/store/ModalStore';
import { signClient } from '@/utils/WalletConnectUtil';
import { useCallback, useEffect } from 'react';
export default function useWalletConnectEventsManager(initialized) {
    var _this = this;
    /******************************************************************************
     * 1. Open session proposal modal for confirmation / rejection
     *****************************************************************************/
    var onSessionProposal = useCallback(function (proposal) {
        ModalStore.open('SessionProposalModal', { proposal: proposal });
    }, []);
    /******************************************************************************
     * 3. Open request handling modal based on method that was used
     *****************************************************************************/
    var onSessionRequest = useCallback(function (requestEvent) { return __awaiter(_this, void 0, void 0, function () {
        var topic, params, request, requestSession;
        return __generator(this, function (_a) {
            console.log('session_request', requestEvent);
            topic = requestEvent.topic, params = requestEvent.params;
            request = params.request;
            requestSession = signClient.session.get(topic);
            switch (request.method) {
                case EIP155_SIGNING_METHODS.ETH_SIGN:
                case EIP155_SIGNING_METHODS.PERSONAL_SIGN:
                    return [2 /*return*/, ModalStore.open('SessionSignModal', { requestEvent: requestEvent, requestSession: requestSession })];
                case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA:
                case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3:
                case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4:
                    return [2 /*return*/, ModalStore.open('SessionSignTypedDataModal', { requestEvent: requestEvent, requestSession: requestSession })];
                case EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION:
                case EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION:
                    return [2 /*return*/, ModalStore.open('SessionSendTransactionModal', { requestEvent: requestEvent, requestSession: requestSession })];
                case COSMOS_SIGNING_METHODS.COSMOS_SIGN_DIRECT:
                case COSMOS_SIGNING_METHODS.COSMOS_SIGN_AMINO:
                    return [2 /*return*/, ModalStore.open('SessionSignCosmosModal', { requestEvent: requestEvent, requestSession: requestSession })];
                case SOLANA_SIGNING_METHODS.SOLANA_SIGN_MESSAGE:
                case SOLANA_SIGNING_METHODS.SOLANA_SIGN_TRANSACTION:
                    return [2 /*return*/, ModalStore.open('SessionSignSolanaModal', { requestEvent: requestEvent, requestSession: requestSession })];
                default:
                    return [2 /*return*/, ModalStore.open('SessionUnsuportedMethodModal', { requestEvent: requestEvent, requestSession: requestSession })];
            }
            return [2 /*return*/];
        });
    }); }, []);
    /******************************************************************************
     * Set up WalletConnect event listeners
     *****************************************************************************/
    useEffect(function () {
        if (initialized) {
            signClient.on('session_proposal', onSessionProposal);
            signClient.on('session_request', onSessionRequest);
            // TODOs
            signClient.on('session_ping', function (data) { return console.log('ping', data); });
            signClient.on('session_event', function (data) { return console.log('event', data); });
            signClient.on('session_update', function (data) { return console.log('update', data); });
            signClient.on('session_delete', function (data) { return console.log('delete', data); });
        }
    }, [initialized, onSessionProposal, onSessionRequest]);
}
//# sourceMappingURL=useWalletConnectEventsManager.js.map