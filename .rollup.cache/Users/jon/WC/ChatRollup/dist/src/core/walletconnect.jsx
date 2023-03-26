import { __awaiter, __generator } from "tslib";
import PageHeader from '@/components/PageHeader';
import QrReader from '@/components/QrReader';
import { signClient } from '@/utils/WalletConnectUtil';
import { Button, Input, Loading, Text } from '@nextui-org/react';
import { Fragment, useState } from 'react';
export default function WalletConnectPage() {
    var _a = useState(''), uri = _a[0], setUri = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    function onConnect(uri) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setLoading(true);
                        return [4 /*yield*/, signClient.pair({ uri: uri })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        alert(err_1);
                        return [3 /*break*/, 4];
                    case 3:
                        setUri('');
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (<Fragment>
      <PageHeader title="WalletConnect"/>

      <QrReader onConnect={onConnect}/>

      <Text size={13} css={{ textAlign: 'center', marginTop: '$10', marginBottom: '$10' }}>
        or use walletconnect uri
      </Text>

      <Input css={{ width: '100%' }} bordered aria-label="wc url connect input" placeholder="e.g. wc:a281567bb3e4..." onChange={function (e) { return setUri(e.target.value); }} value={uri} contentRight={<Button size="xs" disabled={!uri} css={{ marginLeft: -60 }} onClick={function () { return onConnect(uri); }} color="gradient">
            {loading ? <Loading size="sm"/> : 'Connect'}
          </Button>}/>
    </Fragment>);
}
//# sourceMappingURL=walletconnect.jsx.map