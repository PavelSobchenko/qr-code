<template>
  <q-layout view="hHh Lpr lff">
    <app-header @drawerToggle="drawer = !drawer"/>

    <app-drawer :drawer="drawer" @close="drawer = false"/>

    <q-page-container>
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/AppHeader';
import AppDrawer from 'components/AppDrawer';

export default {
  name: 'MainLayout',

  components: {
      AppHeader,
      AppDrawer
  },

  data () {
    return {
        drawer: true,
        miniState: false
    }
  }
}
</script>
