<template>
  <div>
    <nuxt-link v-if="link" to="/sign-up" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-none rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-hover">
      <slot></slot>
    </nuxt-link>
    <button v-else :type="type" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-none rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-hover">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BtnComponent',
  props: {
    link: {
      type: String,
      default: '/'
    },
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>
