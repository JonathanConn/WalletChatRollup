import { __assign } from "tslib";
import { Button, Card, Col, Row, Text } from '@nextui-org/react';
import ChatAvatar from './ChatAvatar';
import { truncate } from '@/utils/HelperUtil';
import { FiCheck, FiX } from 'react-icons/fi';
import { demoAddressResolver } from '@/config/chatConstants';
var RequestActionButton = function (_a) {
    var onClick = _a.onClick, icon = _a.icon, css = _a.css;
    return (<Button auto rounded size="xs" icon={icon} onClick={onClick} css={__assign({ fontSize: '$xs', fontWeight: '$extrabold', color: 'black', borderRadius: '100%', margin: '0 $2', padding: '5px' }, css)}/>);
};
/**
 * Component
 */
export default function ChatRequestCard(_a) {
    var _b;
    var account = _a.account, message = _a.message, onAccept = _a.onAccept, onReject = _a.onReject;
    var formattedAccount = (_b = demoAddressResolver[account]) !== null && _b !== void 0 ? _b : account;
    return (<Card bordered borderWeight="light" css={{
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
        <Col>
          <Text h5 css={{ marginLeft: '$9' }}>
            {truncate(formattedAccount, 20)}
          </Text>
          <Text h6 weight="normal" css={{ marginLeft: '$9' }}>
            {message}
          </Text>
        </Col>
        <Row justify="flex-end">
          <RequestActionButton onClick={onAccept} icon={<FiCheck />} css={{
            background: '$chatGreenPrimary'
        }}/>
          <RequestActionButton onClick={onReject} icon={<FiX />} css={{ background: '#FF453A' }}/>
        </Row>
      </Card.Body>
    </Card>);
}
//# sourceMappingURL=ChatRequestCard.jsx.map