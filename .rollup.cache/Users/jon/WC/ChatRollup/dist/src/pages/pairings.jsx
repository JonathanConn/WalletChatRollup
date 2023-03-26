import { __awaiter, __generator } from "tslib";
import PageHeader from '@/components/PageHeader';
import PairingCard from '@/components/PairingCard';
import { signClient } from '@/utils/WalletConnectUtil';
import { Text } from '@nextui-org/react';
import { getSdkError } from '@walletconnect/utils';
import { Fragment, useState } from 'react';
export default function PairingsPage() {
    var _a = useState(signClient.pairing.values), pairings = _a[0], setPairings = _a[1];
    function onDelete(topic) {
        return __awaiter(this, void 0, void 0, function () {
            var newPairings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, signClient.disconnect({ topic: topic, reason: getSdkError('USER_DISCONNECTED') })];
                    case 1:
                        _a.sent();
                        newPairings = pairings.filter(function (pairing) { return pairing.topic !== topic; });
                        setPairings(newPairings);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (<Fragment>
      <PageHeader title="Pairings"/>
      {pairings.length ? (pairings.map(function (pairing) {
            var peerMetadata = pairing.peerMetadata;
            return (<PairingCard key={pairing.topic} logo={peerMetadata === null || peerMetadata === void 0 ? void 0 : peerMetadata.icons[0]} url={peerMetadata === null || peerMetadata === void 0 ? void 0 : peerMetadata.url} name={peerMetadata === null || peerMetadata === void 0 ? void 0 : peerMetadata.name} onDelete={function () { return onDelete(pairing.topic); }}/>);
        })) : (<Text css={{ opacity: '0.5', textAlign: 'center', marginTop: '$20' }}>No pairings</Text>)}
    </Fragment>);
}
//# sourceMappingURL=pairings.jsx.map