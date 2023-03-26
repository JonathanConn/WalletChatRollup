import PageHeader from '@/components/PageHeader';
import SessionCard from '@/components/SessionCard';
import { signClient } from '@/utils/WalletConnectUtil';
import { Text } from '@nextui-org/react';
import { Fragment, useState } from 'react';
export default function SessionsPage() {
    var _a = useState(signClient.session.values), sessions = _a[0], setSessions = _a[1];
    return (<Fragment>
      <PageHeader title="Sessions"/>
      {sessions.length ? (sessions.map(function (session) {
            var _a = session.peer.metadata, name = _a.name, icons = _a.icons, url = _a.url;
            return (<SessionCard key={session.topic} topic={session.topic} name={name} logo={icons[0]} url={url}/>);
        })) : (<Text css={{ opacity: '0.5', textAlign: 'center', marginTop: '$20' }}>No sessions</Text>)}
    </Fragment>);
}
//# sourceMappingURL=sessions.jsx.map