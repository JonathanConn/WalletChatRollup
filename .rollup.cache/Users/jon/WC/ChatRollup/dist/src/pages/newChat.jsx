import { __awaiter, __generator } from "tslib";
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { FiArrowRight } from 'react-icons/fi';
import { Input, Row } from '@nextui-org/react';
import PageHeader from '@/components/PageHeader';
import { chatClient } from '@/utils/WalletConnectUtil';
import ChatPrimaryCTAButton from '@/components/ChatPrimaryCTAButton';
import { demoContactsMap } from '@/config/chatConstants';
import SettingsStore from '@/store/SettingsStore';
import { useRouter } from 'next/router';
export default function NewChatPage() {
    var _this = this;
    var _a = useState(''), address = _a[0], setAddress = _a[1];
    var router = useRouter();
    var eip155Address = useSnapshot(SettingsStore.state).eip155Address;
    useEffect(function () {
        chatClient.once('chat_invite_accepted', function (args) {
            var newChatTarget = new URLSearchParams(document.location.search).get('target');
            router.push("/chat?topic=".concat(args.topic, "&peerAccount=").concat(newChatTarget));
        });
    }, [router]);
    var createInvite = useCallback(function (targetAddress) { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = chatClient).invite;
                    _c = {
                        inviteeAccount: targetAddress,
                        inviterAccount: "eip155:1:".concat(eip155Address),
                        message: "hey let's message"
                    };
                    return [4 /*yield*/, chatClient.resolve({ account: targetAddress })];
                case 1: return [4 /*yield*/, _b.apply(_a, [(_c.inviteePublicKey = _d.sent(),
                            _c)])];
                case 2:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [eip155Address]);
    var onInvite = useCallback(function (addressToInvite) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!demoContactsMap[addressToInvite]) return [3 /*break*/, 2];
                    return [4 /*yield*/, createInvite(demoContactsMap[addressToInvite])];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    console.log('onInvite: inviting address ', addressToInvite);
                    return [4 /*yield*/, createInvite(addressToInvite)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    setAddress('');
                    return [2 /*return*/];
            }
        });
    }); }, [setAddress, createInvite]);
    useEffect(function () {
        var newChatTarget = new URLSearchParams(document.location.search).get('target');
        if (newChatTarget) {
            setAddress(newChatTarget);
            onInvite(newChatTarget);
        }
    }, [onInvite, setAddress]);
    return (<Fragment>
      <PageHeader title="New Chat" withBackButton backButtonHref="/chats" ctaButton={<ChatPrimaryCTAButton icon={<FiArrowRight />} onClick={function () { return onInvite(address); }}/>}/>

      <Row justify="center">
        <Input fullWidth animated={false} label="ENS Name or Address" placeholder="username.eth or 0x0..." value={address} onChange={function (e) {
            setAddress(e.target.value);
        }} css={{
            padding: '$5',
            background: '$gray800'
        }}/>
      </Row>
    </Fragment>);
}
//# sourceMappingURL=newChat.jsx.map