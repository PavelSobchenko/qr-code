import {axiosInstance} from 'boot/axios';
import {CONVERT_MODULE} from 'src/js/constants';
import {i18n} from 'boot/i18n';
import { Notify } from 'quasar'

export function applyValue({commit}, value) {
    commit('setValue', value);
    commit('saveToHistory', value);
}

export async function downloadTrigger ({state, getters}, extension = 'png') {
    let result;
    try {
        (result = await axiosInstance.get('download/' + getters.encodedValue, {
            responseType: 'blob',
            params: {
                q: state.quality,
                v: state.version,
                s: state.size,
                e: extension
            }
        }));
    } catch ({response}) {
        let message = '';
        switch (response.data.error) {
            case CONVERT_MODULE:
                message = i18n.t(`errors.${CONVERT_MODULE}`);
                break;
            default:
                message = i18n.t('errors.universalError');
        }

        Notify.create({
            message,
            type: 'negative',
            icon: 'error',
            timeout: 2500
        });
    }

    const url = window.URL.createObjectURL(result.data);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.setAttribute('download', `qrcode.${extension}`);
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
