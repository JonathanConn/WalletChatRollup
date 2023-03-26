import { __awaiter, __generator } from "tslib";
import PageHeader from '@/components/PageHeader';
import { Text } from '@nextui-org/react';
import { Fragment, useEffect, useState } from 'react';
import { chatClient } from '@/utils/WalletConnectUtil';
import ChatRequestCard from '@/components/ChatRequestCard';
import { useRouter } from 'next/router';
import { useSnapshot } from 'valtio';
import SettingsStore from '@/store/SettingsStore';
export default function ChatRequestsPage() {
    var _this = this;
    var router = useRouter();
    var _a = useState([]), chatInvites = _a[0], setChatInvites = _a[1];
    var eip155Address = useSnapshot(SettingsStore.state).eip155Address;
    useEffect(function () {
        console.log('setting invites:', chatClient.getReceivedInvites({ account: "eip155:1:".concat(eip155Address) }));
        setChatInvites(chatClient.getReceivedInvites({ account: "eip155:1:".concat(eip155Address) }));
    }, []);
    console.log('NEWINVITES:::::', chatInvites);
    var acceptChatInvite = function (inviteId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, chatClient.accept({ id: inviteId })];
                case 1:
                    _a.sent();
                    router.push('/chats');
                    return [2 /*return*/];
            }
        });
    }); };
    var rejectChatInvite = function (inviteId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, chatClient.reject({ id: inviteId })];
                case 1:
                    _a.sent();
                    router.push('/chats');
                    return [2 /*return*/];
            }
        });
    }); };
    return (<Fragment>
      <PageHeader title="Chat Requests" withBackButton backButtonHref="/chats"/>

      {chatInvites.length > 0 ? (chatInvites.map(function (invite) {
            return (<ChatRequestCard account={eip155Address} key={invite.id} {...invite} onAccept={function () { return acceptChatInvite(Number(invite.id)); }} onReject={function () { return rejectChatInvite(Number(invite.id)); }}/>);
        })) : (<Text css={{ opacity: '0.5', textAlign: 'center', marginTop: '$20' }}>
          No chat requests
        </Text>)}
    </Fragment>);
}
//# sourceMappingURL=chatRequests.jsx.map