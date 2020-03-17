<template>
  <q-header class="app-header q-pa-sm" elevated>
    <q-toolbar>
        <q-btn flat round dense icon="menu" @click="$emit('drawerToggle')"/>
        <q-toolbar-title>
            {{ $t('appName') }}
        </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
