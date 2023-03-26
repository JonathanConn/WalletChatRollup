import { truncate } from '@/utils/HelperUtil';
import { Avatar, Button, Card, Link, Text, Tooltip } from '@nextui-org/react';
import Image from 'next/image';
/**
 * Component
 */
export default function PairingCard(_a) {
    var _b;
    var logo = _a.logo, name = _a.name, url = _a.url, onDelete = _a.onDelete;
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
        <Avatar src={logo}/>
        <div style={{ flex: 1 }}>
          <Text h5 css={{ marginLeft: '$9' }}>
            {name}
          </Text>
          <Link href={url} css={{ marginLeft: '$9' }}>
            {truncate((_b = url === null || url === void 0 ? void 0 : url.split('https://')[1]) !== null && _b !== void 0 ? _b : 'Unknown', 23)}
          </Link>
        </div>
        <Tooltip content="Delete" placement="left">
          <Button size="sm" color="error" flat onClick={onDelete} css={{ minWidth: 'auto' }}>
            <Image src={'/icons/delete-icon.svg'} width={15} height={15} alt="delete icon"/>
          </Button>
        </Tooltip>
      </Card.Body>
    </Card>);
}
//# sourceMappingURL=PairingCard.jsx.map