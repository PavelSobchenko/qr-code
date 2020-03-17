<template>
    <q-drawer
        show-if-above
        mini-to-overlay
        content-class="bg-grey-3"
        class="app-drawer"
        :width="200"
        :value="drawer"
        :breakpoint="700"
        :mini="mini"
        @mouseover="mini = false"
        @mouseout="mini = true"
        @input="$emit('close')"
    >
        <q-scroll-area class="fit">
            <q-list padding>
                <q-item
                    clickable
                    class="app-drawer__item"
                    :to="{name: 'index'}"
                    :active="$route.name === 'index'">
                    <q-item-section avatar>
                        <q-icon name="home"/>
                    </q-item-section>

                    <q-item-section>
                        {{ $t('navigation.index') }}
                    </q-item-section>
                </q-item>

                <q-item
                    clickable
                    class="app-drawer__item"
                    :to="{name: 'history'}"
                    :active="$route.name === 'history'">
                    <q-item-section avatar>
                        <q-icon name="history"/>
                    </q-item-section>

                    <q-item-section>
                        {{ $t('navigation.history') }}
                    </q-item-section>
                </q-item>

                <q-separator spaced />

                <q-item clickable class="app-drawer__item">
                    <q-item-section avatar>
                        <q-icon name="translate"/>
                    </q-item-section>

                    <q-item-section class="app-drawer__locales">
                        <q-btn-toggle
                            v-model="$root.$i18n.locale"
                            toggle-color="primary"
                            :options="langs"/>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script>
	export default {
		name: 'AppDrawer',

        props: {
		    drawer: {
		        type: Boolean,
                required: true,
            }
        },

        data() {
		    return  {
		        mini: true,
                langs: this.$i18n.availableLocales.map(locale => ({
                    label: this.$t('drawer.locale', locale),
                    value: locale
                }))
            };
        },
    };
</script>

<style lang="scss">
    .app-drawer {
        &__locales {
            flex-grow: 0;
        }

        &__item {
            height: 50px;
        }
    }
</style>
