<template>
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
</template>

<script>
export default {
  name: 'App',

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

<style scoped>
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
