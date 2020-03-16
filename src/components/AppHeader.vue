<template>
  <q-header class="app-header q-pa-sm">
    <q-toolbar>
      <q-toolbar-title>
        QR-code generator
      </q-toolbar-title>

      <q-space/>

      <q-btn
          v-if="$route.name === 'index'"
          outline
          icon="history"
          class="q-mr-md app-header__btn"
          :to="{name: 'history'}"/>
      <q-btn
          v-else
          outline
          icon="backspace"
          class="q-mr-md app-header__btn"
          @click="$router.back()"/>

      <q-btn-dropdown
        align="between"
        class="app-header__lang-btn"
        icon="translate"
        auto-close
        outline
        :label="$t('header.langTitle')">
        <q-list separator>
          <q-item
            v-for="locale in $i18n.availableLocales"
            :key="locale"
            clickable
            @click="$root.$i18n.locale = locale">
            {{ $t('header.locale', locale) }}
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss">
  .app-header {
    &__btn {
        height: 50px;
    }
    &__lang-btn {
      min-width: 180px;
      height: 50px;
    }
  }
</style>
