import { __awaiter, __generator } from "tslib";
import { Button, Loading } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Fragment, useState } from 'react';
/**
 * You can use normal import if you are not within next / ssr environment
 * @info https://nextjs.org/docs/advanced-features/dynamic-import
 */
var ReactQrReader = dynamic(function () { return import('react-qr-reader-es6'); }, { ssr: false });
/**
 * Component
 */
export default function QrReader(_a) {
    var onConnect = _a.onConnect;
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    function onError() {
        setShow(false);
    }
    function onScan(data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data) return [3 /*break*/, 2];
                        return [4 /*yield*/, onConnect(data)];
                    case 1:
                        _a.sent();
                        setShow(false);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    function onShowScanner() {
        setLoading(true);
        setShow(true);
    }
    return (<div className="container">
      {show ? (<Fragment>
          {loading && <Loading css={{ position: 'absolute' }}/>}
          <div className="qrVideoMask">
            <ReactQrReader onLoad={function () { return setLoading(false); }} showViewFinder={false} onError={onError} onScan={onScan} style={{ width: '100%' }}/>
          </div>
        </Fragment>) : (<div className="container qrPlaceholder">
          <Image src="/icons/qr-icon.svg" width={100} height={100} alt="qr code icon" className="qrIcon"/>
          <Button color="gradient" css={{ marginTop: '$10', width: '100%' }} onClick={onShowScanner}>
            Scan QR code
          </Button>
        </div>)}
    </div>);
}
//# sourceMappingURL=QrReader.jsx.map