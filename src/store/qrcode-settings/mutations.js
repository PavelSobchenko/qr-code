export function setTab(state, tab) {
    state.tab = tab;
}

export function setValue(state, value) {
    if (!value) {
        state.value = '';
        return;
    }

    let prefix = '';

    if (state.tab === 'url' && !/^https?:\/\//.test(value)) {
        prefix = 'https://';
    }

    if (state.tab === 'tel' && !/^tel:/.test(value)) {
        prefix = 'tel:';
    }

    if (state.tab === 'mail' && !/^mailto:/.test(value)) {
        prefix = 'mailto:';
    }

    state.value = prefix + value;
}

export function setVersion(state, version) {
    state.version = version;
}

export function setQuality(state, quality) {
    state.quality = quality;
}

export function setSize(state, size) {
    state.size = size;
}

export function saveToHistory(state) {
    state.history.push({
        id: Date.now(),
        tab: state.tab,
        value: state.value,
        quality: state.quality,
        version: state.version,
        size: state.size
    });
}

export function deleteFromHistory(state, removeId) {
    state.history = state.history.filter(({id}) => id !== removeId);
}
