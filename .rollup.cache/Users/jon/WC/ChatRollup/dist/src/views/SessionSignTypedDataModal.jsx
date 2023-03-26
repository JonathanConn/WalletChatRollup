import { __awaiter, __generator } from "tslib";
import ProjectInfoCard from '@/components/ProjectInfoCard';
import RequestDataCard from '@/components/RequestDataCard';
import RequesDetailsCard from '@/components/RequestDetalilsCard';
import RequestMethodCard from '@/components/RequestMethodCard';
import RequestModalContainer from '@/components/RequestModalContainer';
import ModalStore from '@/store/ModalStore';
import { approveEIP155Request, rejectEIP155Request } from '@/utils/EIP155RequestHandlerUtil';
import { getSignTypedDataParamsData } from '@/utils/HelperUtil';
import { signClient } from '@/utils/WalletConnectUtil';
import { Button, Divider, Modal, Text } from '@nextui-org/react';
import { Fragment } from 'react';
export default function SessionSignTypedDataModal() {
    var _a, _b;
    // Get request and wallet data from store
    var requestEvent = (_a = ModalStore.state.data) === null || _a === void 0 ? void 0 : _a.requestEvent;
    var requestSession = (_b = ModalStore.state.data) === null || _b === void 0 ? void 0 : _b.requestSession;
    // Ensure request and wallet are defined
    if (!requestEvent || !requestSession) {
        return <Text>Missing request data</Text>;
    }
    // Get required request data
    var topic = requestEvent.topic, params = requestEvent.params;
    var request = params.request, chainId = params.chainId;
    // Get data
    var data = getSignTypedDataParamsData(request.params);
    // Handle approve action (logic varies based on request method)
    function onApprove() {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!requestEvent) return [3 /*break*/, 3];
                        return [4 /*yield*/, approveEIP155Request(requestEvent)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, signClient.respond({
                                topic: topic,
                                response: response
                            })];
                    case 2:
                        _a.sent();
                        ModalStore.close();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    // Handle reject action
    function onReject() {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!requestEvent) return [3 /*break*/, 2];
                        response = rejectEIP155Request(requestEvent);
                        return [4 /*yield*/, signClient.respond({
                                topic: topic,
                                response: response
                            })];
                    case 1:
                        _a.sent();
                        ModalStore.close();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    return (<Fragment>
      <RequestModalContainer title="Sign Typed Data">
        <ProjectInfoCard metadata={requestSession.peer.metadata}/>

        <Divider y={2}/>

        <RequesDetailsCard chains={[chainId !== null && chainId !== void 0 ? chainId : '']} protocol={requestSession.relay.protocol}/>

        <Divider y={2}/>

        <RequestDataCard data={data}/>

        <Divider y={2}/>

        <RequestMethodCard methods={[request.method]}/>
      </RequestModalContainer>

      <Modal.Footer>
        <Button auto flat color="error" onClick={onReject}>
          Reject
        </Button>
        <Button auto flat color="success" onClick={onApprove}>
          Approve
        </Button>
      </Modal.Footer>
    </Fragment>);
}
//# sourceMappingURL=SessionSignTypedDataModal.jsx.map