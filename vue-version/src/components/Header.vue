<template>
  <header class="bg-cos-grey-bg shadow-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
    <div class="flex items-center px-4 py-2 h-16">
      <!-- Menu Button -->
      <button class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black/54">
          <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="currentColor"/>
        </svg>
      </button>

      <!-- Logo -->
      <div class="flex items-center ml-4 mr-6">
        <div class="text-xl font-semibold text-cos-blue flex items-center">
          <span class="bg-cos-blue text-white px-2 py-1 rounded text-sm mr-2">
            COS
          </span>
          <span class="text-black/87">TV</span>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-xl text-black/87 font-normal">Channel VIP</h1>

      <!-- Spacer -->
      <div class="flex-1" />

      <!-- Right Actions -->
      <div class="flex items-center gap-2">
        <!-- App Grid Button -->
        <button class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black/54">
            <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill="currentColor"/>
          </svg>
        </button>

        <!-- Profile Button -->
        <button class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
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
