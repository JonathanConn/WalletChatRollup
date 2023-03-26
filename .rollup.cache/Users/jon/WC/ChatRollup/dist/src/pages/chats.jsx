import { __awaiter, __generator } from "tslib";
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FiPlus } from 'react-icons/fi';
import { useSnapshot } from 'valtio';
import ChatSummaryCard from '@/components/ChatSummaryCard';
import PageHeader from '@/components/PageHeader';
import ChatRequestsButton from '@/components/ChatRequestsButton';
import { chatClient } from '@/utils/WalletConnectUtil';
import ChatPrimaryCTAButton from '@/components/ChatPrimaryCTAButton';
import SettingsStore from '@/store/SettingsStore';
import { Web3Modal } from '@web3modal/standalone';
import { HiQrcode } from 'react-icons/hi';
var web3modal = new Web3Modal({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID || '',
    walletConnectVersion: 1
});
export default function ChatsPage() {
    var _this = this;
    var router = useRouter();
    var _a = useState(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = useState([]), chatThreads = _b[0], setChatThreads = _b[1];
    var _c = useState([]), chatInvites = _c[0], setChatInvites = _c[1];
    var eip155Address = useSnapshot(SettingsStore.state).eip155Address;
    var inviteQrCode = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var idx, uri;
        return __generator(this, function (_a) {
            idx = SettingsStore.state.account === 0 ? 1 : 0;
            uri = "".concat(window.location.origin, "/newChat?accountIndex=").concat(idx, "&target=eip155:1:").concat(SettingsStore.state.eip155Address);
            web3modal.openModal({ uri: uri });
            return [2 /*return*/];
        });
    }); }, []);
    var initChatClient = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            console.log(chatClient);
            console.log('chatInvites on load:', chatClient.chatReceivedInvites.getAll({ inviteeAccount: eip155Address }));
            console.log('chatThreads on load:', chatClient.chatThreads.getAll());
            console.log('chatMessages on load:', chatClient.chatMessages.getAll());
            setChatThreads(chatClient.chatThreads.getAll());
            setChatInvites(chatClient.getReceivedInvites({ account: "eip155:1:".concat(eip155Address) }));
            chatClient.on('chat_invite', function (args) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('chat_invite:', args);
                    web3modal.closeModal();
                    setChatInvites(chatClient.getReceivedInvites({ account: "eip155:1:".concat(eip155Address) }));
                    return [2 /*return*/];
                });
            }); });
            chatClient.on('chat_invite_accepted', function (args) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('chat_joined:', args);
                    console.log(chatClient.chatThreads.getAll());
                    setChatThreads(chatClient.chatThreads.getAll());
                    return [2 /*return*/];
                });
            }); });
            setIsLoading(false);
            return [2 /*return*/];
        });
    }); };
    useEffect(function () {
        initChatClient();
    }, []);
    console.log({ chatInvitesLength: chatInvites.length });
    return (<Fragment>
      <PageHeader title="Chat" ctaButton={<Row justify="space-evenly">
            <ChatPrimaryCTAButton icon={<HiQrcode />} onClick={inviteQrCode}/>
            <ChatPrimaryCTAButton icon={<FiPlus />} onClick={function () { return router.push('/newChat'); }}/>
          </Row>}/>

      <Row justify="center" align="center" css={{ paddingBottom: '$5' }}>
        {chatInvites.length ? <ChatRequestsButton requestCount={chatInvites.length}/> : null}
        {/* <ChatRequestsButton requestCount={chatInvites.length} /> */}
      </Row>

      {isLoading ? (<Text css={{ opacity: '0.5', textAlign: 'center', marginTop: '$20' }}>
          Fetching chats...
        </Text>) : chatThreads.length ? (chatThreads.map(function (props) {
            return <ChatSummaryCard key={props.topic} {...props}/>;
        })) : (<Text css={{ opacity: '0.5', textAlign: 'center', marginTop: '$20' }}>No chats</Text>)}
    </Fragment>);
}
//# sourceMappingURL=chats.jsx.map