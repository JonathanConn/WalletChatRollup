import ProjectInfoCard from '@/components/ProjectInfoCard';
import RequesDetailsCard from '@/components/RequestDetalilsCard';
import RequestMethodCard from '@/components/RequestMethodCard';
import RequestModalContainer from '@/components/RequestModalContainer';
import ModalStore from '@/store/ModalStore';
import { Button, Divider, Modal, Text } from '@nextui-org/react';
import { Fragment } from 'react';
export default function SessionUnsuportedMethodModal() {
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
    var chainId = params.chainId, request = params.request;
    return (<Fragment>
      <RequestModalContainer title="Unsuported Method">
        <ProjectInfoCard metadata={requestSession.peer.metadata}/>

        <Divider y={2}/>

        <RequesDetailsCard chains={[chainId !== null && chainId !== void 0 ? chainId : '']} protocol={requestSession.relay.protocol}/>

        <Divider y={2}/>

        <RequestMethodCard methods={[request.method]}/>
      </RequestModalContainer>

      <Modal.Footer>
        <Button auto flat color="error" onClick={ModalStore.close}>
          Close
        </Button>
      </Modal.Footer>
    </Fragment>);
}
//# sourceMappingURL=SessionUnsuportedMethodModal.jsx.map