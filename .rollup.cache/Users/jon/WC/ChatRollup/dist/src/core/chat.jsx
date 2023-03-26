import { __awaiter, __generator } from "tslib";
import { Fragment, useEffect, useRef, useState } from 'react';
import { styled } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useSnapshot } from 'valtio';
import ChatboxInput from '@/components/ChatboxInput';
import ChatMessage from '@/components/ChatMessage';
import PageHeader from '@/components/PageHeader';
import { demoAddressResolver } from '@/config/chatConstants';
import SettingsStore from '@/store/SettingsStore';
import { chatClient } from '@/utils/WalletConnectUtil';
import { truncate } from '@/utils/HelperUtil';
var ChatContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '84%',
    maxWidth: '100%'
});
var MessagesContainer = styled('div', {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    overflowY: 'scroll',
    padding: '10px'
});
/**
 * Component
 */
export default function ChatPage() {
    var _a = useState(''), topic = _a[0], setTopic = _a[1];
    var _b = useState([]), messages = _b[0], setMessages = _b[1];
    var eip155Address = useSnapshot(SettingsStore.state).eip155Address;
    var query = useRouter().query;
    var lastMessageRef = useRef(null);
    var fullEip155Address = "eip155:1:".concat(eip155Address);
    function onOutgoingMessage(outgoingMessage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chatClient.message({
                            topic: topic,
                            message: outgoingMessage,
                            authorAccount: fullEip155Address,
                            timestamp: Date.now()
                        })];
                    case 1:
                        _a.sent();
                        if (chatClient.getMessages({ topic: topic }).length) {
                            setMessages(chatClient.getMessages({ topic: topic }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function isOutgoingMessage(authorAccount) {
        return authorAccount === fullEip155Address;
    }
    function getChatTitle() {
        var _a;
        if (typeof query.peerAccount !== 'string')
            return '';
        return (_a = demoAddressResolver[query.peerAccount]) !== null && _a !== void 0 ? _a : truncate(query.peerAccount, 24);
    }
    useEffect(function () {
        if (query === null || query === void 0 ? void 0 : query.topic) {
            setTopic(query.topic);
        }
    }, [query]);
    useEffect(function () {
        // Set existing messages on load.
        if (topic) {
            try {
                var messages_1 = chatClient.getMessages({ topic: topic });
                console.log('getMessages for topic: ', topic, messages_1);
                setMessages(messages_1);
            }
            catch (error) { }
        }
    }, [topic]);
    useEffect(function () {
        var _a;
        (_a = lastMessageRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    useEffect(function () {
        if (topic) {
            // Update local messages state on new message.
            chatClient.once('chat_message', function (eventArgs) {
                console.log('new chat message:', eventArgs);
                setMessages(chatClient.getMessages({ topic: topic }));
            });
        }
    }, [messages, topic]);
    return (<Fragment>
      <PageHeader title={getChatTitle()} backButtonHref="/chats" withBackButton/>
      <ChatContainer>
        <MessagesContainer>
          {messages.map(function (_a, i) {
            var message = _a.message, authorAccount = _a.authorAccount;
            return (<ChatMessage key={i} message={message} messageType={isOutgoingMessage(authorAccount) ? 'outgoing' : 'incoming'}/>);
        })}
          <div ref={lastMessageRef}></div>
        </MessagesContainer>
        <ChatboxInput handleSend={onOutgoingMessage}/>
      </ChatContainer>
    </Fragment>);
}
//# sourceMappingURL=chat.jsx.map