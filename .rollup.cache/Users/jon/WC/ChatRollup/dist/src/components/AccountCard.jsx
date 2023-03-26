import ChainCard from '@/components/ChainCard';
import { truncate } from '@/utils/HelperUtil';
import { Avatar, Button, Text, Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';
export default function AccountCard(_a) {
    var name = _a.name, logo = _a.logo, rgb = _a.rgb, address = _a.address;
    var _b = useState(false), copied = _b[0], setCopied = _b[1];
    function onCopy() {
        var _a;
        (_a = navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(address);
        setCopied(true);
        setTimeout(function () { return setCopied(false); }, 1500);
    }
    return (<ChainCard rgb={rgb} flexDirection="row" alignItems="center">
      <Avatar src={logo}/>
      <div style={{ flex: 1 }}>
        <Text h5 css={{ marginLeft: '$9' }}>
          {name}
        </Text>
        <Text weight="light" size={13} css={{ marginLeft: '$9' }}>
          {truncate(address, 19)}
        </Text>
      </div>

      <Tooltip content={copied ? 'Copied!' : 'Copy'} placement="left">
        <Button size="sm" css={{ minWidth: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} onClick={onCopy}>
          <Image src={copied ? '/icons/checkmark-icon.svg' : '/icons/copy-icon.svg'} width={15} height={15} alt="copy icon"/>
        </Button>
      </Tooltip>
    </ChainCard>);
}
//# sourceMappingURL=AccountCard.jsx.map