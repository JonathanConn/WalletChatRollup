import { Button } from '@nextui-org/react';
export default function ChatPrimaryCTAButton(_a) {
    var onClick = _a.onClick, icon = _a.icon;
    return (<Button auto rounded icon={icon} onClick={onClick} css={{
            background: '$chatGreenPrimary',
            fontSize: '$md',
            borderRadius: '100%',
            padding: '8px'
        }}/>);
}
//# sourceMappingURL=ChatPrimaryCTAButton.jsx.map