import { __awaiter, __generator } from "tslib";
import { Secp256k1Wallet } from '@cosmjs/amino';
import { fromHex } from '@cosmjs/encoding';
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import Keyring from 'mnemonic-keyring';
/**
 * Constants
 */
var DEFAULT_PATH = "m/44'/118'/0'/0/0";
var DEFAULT_PREFIX = 'cosmos';
/**
 * Library
 */
var CosmosLib = /** @class */ (function () {
    function CosmosLib(keyring, directSigner, aminoSigner) {
        this.directSigner = directSigner;
        this.keyring = keyring;
        this.aminoSigner = aminoSigner;
    }
    CosmosLib.init = function (_a) {
        var mnemonic = _a.mnemonic, path = _a.path, prefix = _a.prefix;
        return __awaiter(this, void 0, void 0, function () {
            var keyring, privateKey, directSigner, aminoSigner;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Keyring.init({ mnemonic: mnemonic !== null && mnemonic !== void 0 ? mnemonic : Keyring.generateMnemonic() })];
                    case 1:
                        keyring = _b.sent();
                        privateKey = fromHex(keyring.getPrivateKey(path !== null && path !== void 0 ? path : DEFAULT_PATH));
                        return [4 /*yield*/, DirectSecp256k1Wallet.fromKey(privateKey, prefix !== null && prefix !== void 0 ? prefix : DEFAULT_PREFIX)];
                    case 2:
                        directSigner = _b.sent();
                        return [4 /*yield*/, Secp256k1Wallet.fromKey(privateKey, prefix !== null && prefix !== void 0 ? prefix : DEFAULT_PREFIX)];
                    case 3:
                        aminoSigner = _b.sent();
                        return [2 /*return*/, new CosmosLib(keyring, directSigner, aminoSigner)];
                }
            });
        });
    };
    CosmosLib.prototype.getMnemonic = function () {
        return this.keyring.mnemonic;
    };
    CosmosLib.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.directSigner.getAccounts()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, account[0].address];
                }
            });
        });
    };
    CosmosLib.prototype.signDirect = function (address, signDoc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.directSigner.signDirect(address, signDoc)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CosmosLib.prototype.signAmino = function (address, signDoc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.aminoSigner.signAmino(address, signDoc)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CosmosLib;
}());
export default CosmosLib;
//# sourceMappingURL=CosmosLib.js.map