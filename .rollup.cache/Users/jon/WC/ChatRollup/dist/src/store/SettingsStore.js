import { proxy } from 'valtio';
/**
 * State
 */
var state = proxy({
    testNets: typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem('TEST_NETS')) : true,
    account: 0,
    eip155Address: '',
    cosmosAddress: '',
    solanaAddress: ''
});
/**
 * Store / Actions
 */
var SettingsStore = {
    state: state,
    setAccount: function (value) {
        state.account = value;
    },
    setEIP155Address: function (eip155Address) {
        state.eip155Address = eip155Address;
    },
    setCosmosAddress: function (cosmosAddresses) {
        state.cosmosAddress = cosmosAddresses;
    },
    setSolanaAddress: function (solanaAddress) {
        state.solanaAddress = solanaAddress;
    },
    toggleTestNets: function () {
        state.testNets = !state.testNets;
        if (state.testNets) {
            localStorage.setItem('TEST_NETS', 'YES');
        }
        else {
            localStorage.removeItem('TEST_NETS');
        }
    }
};
export default SettingsStore;
//# sourceMappingURL=SettingsStore.js.map