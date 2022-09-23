<template>
  <div class="wrapper">
    <AppHeader />
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
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
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
  background: #EDF2F7;
}

html {
  font-family: 'Inter', sans-serif;
  color: #1A202C;
  line-height: 1.5;
}

h1 {
  font-weight: 500;
}

.wrapper {
  padding: 32px;
  width: 780px;
  height: 848px;
  margin: 0 auto;
}
</style>

<style scoped lang="scss">
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
