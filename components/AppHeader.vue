<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const title = ref("Nuxt Ichigo");
</script>