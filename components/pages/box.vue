<template>
  <div
    class="grid-item cursor-pointer"
    :class="'item' + (num + 1)"
    :style="{ backgroundColor: color }"
    @click="emitShuffleColors"
  >
    <span>
      {{ num + 1 }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  color: String,
  num: Number,
});

const emit = defineEmits(["emitShuffleColors"]);

const emitShuffleColors = () => {
  emit("emitShuffleColors");
};
</script>
