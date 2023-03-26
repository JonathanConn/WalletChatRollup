import { proxy } from 'valtio';
/**
 * State
 */
var state = proxy({
    open: false
});
/**
 * Store / Actions
 */
var ModalStore = {
    state: state,
    open: function (view, data) {
        state.view = view;
        state.data = data;
        state.open = true;
    },
    close: function () {
        state.open = false;
    }
};
export default ModalStore;
//# sourceMappingURL=ModalStore.js.map