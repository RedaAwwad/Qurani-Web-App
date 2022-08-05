<template>
  <div class="w-96 mx-auto max-w-full">
    <app-top-header />
    <app-sidebar />
    <main class="bg-gray-100">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppLayout'
}
</script>
