<template>
  <div class="wrapper">
    <AppHeader />
    <div class="user-list">
      <ActionBar />
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
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import ActionBar from '@/components/ActionBar.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    ActionBar
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

.shadow-xs {
  box-shadow: 0px 1px 2px rgba(45, 55, 72, 0.08);
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
  height: 600px;
}
.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
