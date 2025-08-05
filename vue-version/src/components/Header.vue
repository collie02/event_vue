<template>
  <header class="bg-cos-grey-bg shadow-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
    <div class="flex items-center px-4 py-2 h-16">
      <!-- Menu Button -->
      <button class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black/54">
          <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="currentColor"/>
        </svg>
      </button>

      <!-- Logo - Hidden on Mobile -->
      <div class="hidden md:flex items-center ml-4 mr-6">
        <div class="text-xl font-semibold text-cos-blue flex items-center">
          <span class="bg-cos-blue text-white px-2 py-1 rounded text-sm mr-2">
            COS
          </span>
          <span class="text-black/87">TV</span>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-xl text-black/87 font-normal flex-1 md:flex-none ml-4 md:ml-0">
        Channel VIP
      </h1>

      <!-- Spacer - Hidden on Mobile -->
      <div class="hidden md:flex flex-1" />

      <!-- Right Actions -->
      <div class="flex items-center gap-2">
        <!-- App Grid Button - Hidden on Mobile -->
        <button class="hidden md:flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black/54">
            <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill="currentColor"/>
          </svg>
        </button>

        <!-- Search Button - Mobile Only -->
        <button class="md:hidden flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black/54">
            <path d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z" fill="currentColor"/>
          </svg>
        </button>

        <!-- Profile Button - Mobile Only -->
        <button class="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black/54">
            <circle cx="12" cy="12" r="12" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// 可以在這裡添加組件邏輯
</script>
