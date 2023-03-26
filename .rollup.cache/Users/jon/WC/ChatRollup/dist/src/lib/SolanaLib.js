import { __awaiter, __generator } from "tslib";
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import nacl from 'tweetnacl';
import SolanaWallet from 'solana-wallet';
/**
 * Library
 */
var SolanaLib = /** @class */ (function () {
    function SolanaLib(keypair) {
        this.keypair = keypair;
        this.solanaWallet = new SolanaWallet(Buffer.from(keypair.secretKey));
    }
    SolanaLib.init = function (_a) {
        var secretKey = _a.secretKey;
        var keypair = secretKey ? Keypair.fromSecretKey(secretKey) : Keypair.generate();
        return new SolanaLib(keypair);
    };
    SolanaLib.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keypair.publicKey.toBase58()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SolanaLib.prototype.getSecretKey = function () {
        return this.keypair.secretKey.toString();
    };
    SolanaLib.prototype.signMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var signature, bs58Signature;
            return __generator(this, function (_a) {
                signature = nacl.sign.detached(bs58.decode(message), this.keypair.secretKey);
                bs58Signature = bs58.encode(signature);
                return [2 /*return*/, { signature: bs58Signature }];
            });
        });
    };
    SolanaLib.prototype.signTransaction = function (feePayer, recentBlockhash, instructions, partialSignatures) {
        return __awaiter(this, void 0, void 0, function () {
            var signature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.solanaWallet.signTransaction(feePayer, {
                            feePayer: feePayer,
                            instructions: instructions,
                            recentBlockhash: recentBlockhash,
                            partialSignatures: partialSignatures !== null && partialSignatures !== void 0 ? partialSignatures : []
                        })];
                    case 1:
                        signature = (_a.sent()).signature;
                        return [2 /*return*/, { signature: signature }];
                }
            });
        });
    };
    return SolanaLib;
}());
export default SolanaLib;
//# sourceMappingURL=SolanaLib.js.map