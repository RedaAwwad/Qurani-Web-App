<template>
  <div class="cursor-pointer rounded-xl bg-white p-4 shadow-lg hover:shadow-xl">
    <div class="relative flex items-center justify-between mb-6">
      <div class="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
        1
      </div>
      <button type="button" class="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="currentColor" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
      </button>
    </div>

    <div class="mt-1 p-2">
      <h3 class="font-semibold">Al-Fatiha</h3>
      <span class="uppercase text-gray-400">The openning</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent'
}
</script>
