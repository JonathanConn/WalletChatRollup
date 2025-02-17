import SettingsStore from '@/store/SettingsStore';
import { cosmosAddresses } from '@/utils/CosmosWalletUtil';
import { eip155Addresses } from '@/utils/EIP155WalletUtil';
import { solanaAddresses } from '@/utils/SolanaWalletUtil';
import { useSnapshot } from 'valtio';
export default function AccountPicker() {
    var account = useSnapshot(SettingsStore.state).account;
    function onSelect(value) {
        var account = Number(value);
        SettingsStore.setAccount(account);
        SettingsStore.setEIP155Address(eip155Addresses[account]);
        SettingsStore.setCosmosAddress(cosmosAddresses[account]);
        SettingsStore.setSolanaAddress(solanaAddresses[account]);
    }
    return (<select value={account} onChange={function (e) { return onSelect(e.currentTarget.value); }} aria-label="addresses">
      <option value={0}>Account 1</option>
      <option value={1}>Account 2</option>
    </select>);
}
//# sourceMappingURL=AccountPicker.jsx.map