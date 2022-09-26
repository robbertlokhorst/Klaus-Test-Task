<template>
  <div class="wrapper">
    <AppHeader />
    <div
      v-if="users"
      class="user-list"
    >
      <ActionBar />
      <ListRow class="user-list__head-row">
        <template #checkbox>
          <CheckboxInput />
        </template>
        <template #user>
          <ListLabel>User</ListLabel>
        </template>
        <template #permission>
          <ListLabel>Permission</ListLabel>
        </template>
      </ListRow>
      <RecycleScroller
        v-slot="{ item }"
        class="scroller"
        :items="users"
        :item-size="68"
        key-field="id"
      >
        <UserRow
          :key="item.id"
          :item="item"
        />
      </RecycleScroller>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import ActionBar from '@/components/ActionBar.vue'
import ListRow from '@/components/ListRow.vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import ListLabel from '@/components/ListLabel.vue'
import UserRow from './components/UserRow.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader,
    ActionBar,
    ListRow,
    CheckboxInput,
    ListLabel,
    UserRow
  },
  computed: mapState(['users']),
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

  &__head-row {
    padding: 0 32px 4px 32px;
  }
}
.scroller {
  height: 624px;
  overflow-y: visible;
}
</style>
