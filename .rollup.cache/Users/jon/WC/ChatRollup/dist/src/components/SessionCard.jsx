import { truncate } from '@/utils/HelperUtil';
import { Avatar, Card, Link, Text } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
/**
 * Component
 */
export default function SessionCard(_a) {
    var _b;
    var logo = _a.logo, name = _a.name, url = _a.url, topic = _a.topic;
    return (<NextLink href={"/session?topic=".concat(topic)} passHref>
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
          <Avatar src={logo}/>
          <div style={{ flex: 1 }}>
            <Text h5 css={{ marginLeft: '$9' }}>
              {name}
            </Text>
            <Link href={url} css={{ marginLeft: '$9' }}>
              {truncate((_b = url === null || url === void 0 ? void 0 : url.split('https://')[1]) !== null && _b !== void 0 ? _b : 'Unknown', 23)}
            </Link>
          </div>

          <Image src={'/icons/arrow-right-icon.svg'} width={20} height={20} alt="session icon"/>
        </Card.Body>
      </Card>
    </NextLink>);
}
//# sourceMappingURL=SessionCard.jsx.map