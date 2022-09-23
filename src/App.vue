<template>
  <RecycleScroller
    class="scroller"
    :items="users"
    :item-size="32"
    key-field="id"
    v-slot="{ item }"
  >
    <div>{{ item.name }}</div>
  </RecycleScroller>
</template>

<script>
  export default {
    name: 'App',

    data() {
      return {
        users: [],
      }
    },

    created() {
      fetch('/api/users')
        .then((res) => res.json())
        .then((json) => {
          this.users = json.users
        })
    },
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