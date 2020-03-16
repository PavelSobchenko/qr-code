<template>
    <q-page>
        <div v-if="history.length" class="q-pa-lg">
            <q-list>
                <q-item v-for="item in history" :key="item.id">
                    <q-item-section top>
                        {{ item.value }}
                    </q-item-section>
                    <q-item-section side top>
                        <q-icon color="red-6" name="close" @click="deleteFromHistory(item.id)"/>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
        <div v-else class="absolute-center">
            <div class="text-h5">{{ $t('history.emptyHistory') }}</div>
        </div>
    </q-page>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

	export default {
		name: 'History',

        computed: {
		    ...mapState('qrCodeSettings', ['history'])
        },

        methods: {
		    ...mapMutations('qrCodeSettings', ['deleteFromHistory'])
        }
	};
</script>
