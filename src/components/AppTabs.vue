<template>
    <div>
        <q-tabs :value="tab" @input="setTab">
            <q-tab
                v-for="(t, index) in tabs"
                :key="index"
                :name="t"
                :label="$t(`tabs.labels.${t}`)" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-for="(t, index) in tabs" :key="index" :name="t">
                <div class="text-subtitle2">
                    {{ $t(`tabs.inputTitles.${t}`) }}
                </div>
                <q-input
                    v-model="inputs[t]"
                    clearable
                    clear-icon="close"
                    :debounce="500"
                    :type="t"
                    :placeholder="$t(`tabs.inputPlaceholders.${t}`)"/>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex';

	export default {
		name: 'AppTabs',

        data() {
            return {
                inputs: {
                    url: '',
                    text: '',
                    mail: '',
                    tel: ''
                }
            };
        },

        computed: {
		    ...mapState('qrCodeSettings', ['tab', 'tabs'])
        },

        watch: {
		    'inputs.url': 'applyValue',
		    'inputs.text': 'applyValue',
		    'inputs.mail': 'applyValue',
		    'inputs.tel': 'applyValue',
        },

        methods: {
		    ...mapMutations('qrCodeSettings', ['setTab']),
		    ...mapActions('qrCodeSettings', ['applyValue'])
        }
	};
</script>
