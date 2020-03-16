<template>
  <q-page class="flex flex-center">
    <q-card class="row q-pa-md">
        <app-tabs/>
        <qr-code-view/>
    </q-card>
  </q-page>
</template>

<script>
    import AppTabs from 'components/AppTabs';
    import QrCodeView from 'components/QrCodeView';

    export default {
        name: 'PageIndex',

        components: {
            AppTabs,
            QrCodeView
        }
    }
</script>
