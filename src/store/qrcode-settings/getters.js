export function encodedValue (state) {
    if (!state.value) {
        return '';
    }
    return encodeURIComponent(state.value);
}
