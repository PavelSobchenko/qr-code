<template>
  <q-layout view="lHh Lpr lFf">
    <app-header/>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/AppHeader'

export default {
  name: 'MainLayout',

  components: {
    AppHeader
  },

  data () {
    return {
      test: 'foo'
    }
  }
}
</script>
