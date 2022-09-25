<template>
  <span
    class="role-badge"
    :class="badgeClasses"
  >
    {{ name }}
  </span>
</template>

<script>
const roles = {
  ACCOUNT_MANAGER: 'Account manager',
  ADMIN: 'Admin',
  AGENT: 'Agent',
  EXTERNAL_REVIEWER: 'External reviewer'
}

export default {
  props: {
    role: {
      type: String,
      required: true,
      validator: value => Object.keys(roles).includes(value)
    }
  },
  computed: {
    name () {
      return roles[this.role]
    },
    badgeClasses () {
      const slug = this.role.toLowerCase().replace('_', '-')

      return {
        [`role-badge--role-${slug}`]: this.role
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.role-badge {
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;

  &--role-account-manager {
    background: $c-pink-20;
    color: $c-pink-80;
  }

  &--role-admin {
    background: $c-purple-20;
    color: $c-purple-80;
  }

  &--role-agent {
    background: $c-blue-20;
    color: $c-blue-80;
  }

  &--role-external-reviewer {
    background: $c-orange-20;
    color: $c-orange-80;
  }
}
</style>
