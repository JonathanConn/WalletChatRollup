import { demoAddressResolver } from '@/config/chatConstants';
import { truncate } from '@/utils/HelperUtil';
import { Card, Text } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import ChatAvatar from './ChatAvatar';
/**
 * Component
 */
export default function ChatSummaryCard(_a) {
    var _b;
    var peerAccount = _a.peerAccount, topic = _a.topic, latestMessage = _a.latestMessage;
    return (<NextLink href={"/chat?topic=".concat(topic, "&peerAccount=").concat(peerAccount)} passHref>
      <Card clickable bordered borderWeight="light" css={{
            position: 'relative',
            marginBottom: '$6',
            minHeight: '70px'
        }}>
        <Card.Body css={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden'
        }}>
          <ChatAvatar />
          <div style={{ flex: 1 }}>
            <Text h5 css={{ marginLeft: '$9' }}>
              {(_b = demoAddressResolver[peerAccount]) !== null && _b !== void 0 ? _b : truncate(peerAccount, 24)}
            </Text>
            <Text h6 weight="normal" css={{ marginLeft: '$9' }}>
              {latestMessage !== null && latestMessage !== void 0 ? latestMessage : ''}
            </Text>
          </div>

          <Image src={'/icons/arrow-right-icon.svg'} width={20} height={20} alt="session icon"/>
        </Card.Body>
      </Card>
    </NextLink>);
}
//# sourceMappingURL=ChatSummaryCard.jsx.map