<template>
  <div class="wrapper">
    <AppHeader />
    <div class="user-list">
      <ActionBar />
      <div class="user-list__wrap">
        <ListRow>
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
          :item-size="64"
          key-field="id"
        >
          <div>
            <div>
              <img
                v-if="item.avatar"
                :key="item.avatar"
                :src="item.avatar"
                width="32"
              >
            </div>
            <div>
              <div>{{ item.name }}</div>
              <div>{{ item.email }}</div>
            </div>
            <div>{{ item.role }}</div>
          </div>
        </RecycleScroller>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import ActionBar from '@/components/ActionBar.vue'
import ListRow from '@/components/ListRow.vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import ListLabel from '@/components/ListLabel.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    ActionBar,
    ListRow,
    CheckboxInput,
    ListLabel
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        this.users = json.users
      })
  }
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

  &__wrap {
    padding: 0 16px;
  }
}
.scroller {
  height: 600px;
}
</style>
