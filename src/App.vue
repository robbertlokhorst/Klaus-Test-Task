<template>
  <div class="wrapper">
    <AppHeader />
    <div
      v-if="users"
      class="user-list"
    >
      <ActionBar />
      <div
        role="table"
        aria-label="User list"
        aria-describedby="main_title"
      >
        <HeadRow />
        <RecycleScroller
          v-slot="{ item }"
          class="scroller"
          :items="users"
          :item-size="68"
          key-field="id"
          role="rowgroup"
        >
          <UserRow
            :key="item.id"
            :item="item"
          />
        </RecycleScroller>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import ActionBar from '@/components/ActionBar.vue'
import HeadRow from '@/components/HeadRow.vue'
import UserRow from './components/UserRow.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader,
    ActionBar,
    HeadRow,
    UserRow
  },
  computed: mapGetters(['users']),
  created () {
    this.getUsersList()
  },
  methods: mapActions(['getUsersList'])
}
</script>

<style lang="scss">
html,
body {
  background: $c-gray-20;
}

html {
  font-family: 'Inter', sans-serif;
  color: $c-gray-90;
  line-height: 1.5;
}

h1,
h2 {
  font-weight: 500;
}
</style>

<style scoped lang="scss">
.wrapper {
  padding: 32px;
  width: 780px;
  height: 848px;
  margin: 0 auto;
}

.user-list {
  background: white;
  border-radius: 8px;
  height: 726px;
}
.scroller {
  height: 624px;
  overflow-y: visible;
}
</style>
