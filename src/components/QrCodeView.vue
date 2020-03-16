<template>
    <div class="q-pa-xs qr-code-view">
        <q-img v-if="result" class="qr-code-view__image" :src="result"/>
        <div v-else class="flex flex-center qr-code-view__image">
            <q-spinner size="xl"/>
        </div>

        <div class="row q-mb-md justify-center q-gutter-sm">
            <q-btn
                type="a"
                color="primary"
                :label="$t('qrView.downloadButtonPng')"
                :disable="!value"
                @click="downloadTrigger('png')"/>
            <q-btn
                type="a"
                color="green"
                :label="$t('qrView.downloadButtonSvg')"
                :disable="!value"
                @click="downloadTrigger('svg')"/>
        </div>

        <div>
            <div class="text-subtitle2 q-mb-lg">{{ $t('qrView.sizeTitle') }}</div>
            <q-slider
                label-always
                :step="25"
                :value="size"
                :min="200"
                :max="2000"
                @change="setSize"/>
        </div>

        <div>
            <div class="text-subtitle2 q-mb-lg">{{ $t('qrView.versionTitle') }}</div>
            <q-slider
                label-always
                :value="version"
                :min="1"
                :max="40"
                @change="setVersion"/>
        </div>

        <div>
            <div class="text-subtitle2 q-mb-lg">{{ $t('qrView.qualityTitle') }}</div>
            <div class="q-gutter-sm">
                <q-radio :value="quality" val="L" :label="$t('qrView.qualityLevels.low')" @input="setQuality"/>
                <q-radio :value="quality" val="M" :label="$t('qrView.qualityLevels.medium')" @input="setQuality"/>
                <q-radio :value="quality" val="Q" :label="$t('qrView.qualityLevels.quartile')" @input="setQuality"/>
                <q-radio :value="quality" val="H" :label="$t('qrView.qualityLevels.high')" @input="setQuality"/>
            </div>
        </div>
    </div>
</template>

<script>
    import QRCode from 'qrcode';
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

	export default {
		name: 'QrCodeView',

        data() {
		    return {
		        defaultUrl: 'https://google.com',
                result: '',
            };
        },

        computed: {
            ...mapState('qrCodeSettings', ['tab', 'quality', 'size', 'version', 'value']),
            ...mapGetters('qrCodeSettings', ['encodedValue'])
        },

        watch: {
            value: 'getDataUrl',
            quality: 'getDataUrl',
            version: 'getDataUrl'
        },

        mounted() {
		    this.getDataUrl();
        },

        methods: {
            clickHandler(e) {
                console.log(e);
                if (!this.value) {
                    e.preventDefault();
                }
            },

		    async getDataUrl() {
                try {
                    this.result = await QRCode.toDataURL(this.value || this.defaultUrl, {
                        errorCorrectionLevel: this.quality,
                        version: this.version,
                        width: this.size
                    });
                } catch (err) {
                    if (err.message.includes('The chosen QR Code version cannot contain this amount of data.')) {
                        this.setVersion(this.version + 1);
                        return;
                    }

                    throw err;
                }
            },

            ...mapMutations('qrCodeSettings', ['setVersion', 'setQuality', 'setSize']),
            ...mapActions('qrCodeSettings', ['downloadTrigger'])
        }
    };
</script>

<style lang="scss">
    .qr-code-view {
        &__image {
            width: 400px;
            height: 400px;
        }
    }
</style>
