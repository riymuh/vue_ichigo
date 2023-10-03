<template>
  <div class="p-5">
    <div class="grid-container min-h-screen">
      <template v-for="(color, index) in colors" :key="index">
        <PagesBox
          :num="index"
          :color="color"
          @emitShuffleColors="shuffleColors"
        />
      </template>
    </div>
  </div>
</template>

<style>
.text {
  color: v-bind(color);
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .item1 {
    grid-column: 1 / span 4 !important;
    grid-row: 1 / span 1 !important;
  }
  .item3 {
    grid-column: 1 / span 2 !important;
    grid-row: 2 / span 1 !important;
  }

  .item4 {
    grid-column: 3 / span 2 !important;
    grid-row: 2 / span 1 !important;
  }

  .item2 {
    grid-column: 1 / span 4 !important;
    grid-row: 3 / span 1 !important;
  }

  .item7 {
    grid-column: 1 / span 4 !important;
    grid-row: 4 / span 1 !important;
  }

  .item5 {
    grid-column: 1 / span 2 !important;
    grid-row: 5 / span 1 !important;
  }

  .item8 {
    grid-column: 3 / span 2 !important;
    grid-row: 5 / span 1 !important;
  }

  .item6 {
    grid-column: 1 / span 2 !important;
    grid-row: 6 / span 1 !important;
  }

  .item9 {
    grid-column: 3 / span 2 !important;
    grid-row: 6 / span 1 !important;
  }
}

.grid-container {
  display: grid;
  gap: 10px;
  background-color: #2196f3;
  padding: 10px;
  grid-template-columns: repeat(4, 1fr);
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
}

.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

.item2 {
  grid-column: 3 / span 2;
  grid-row: 1 / span 1;
}

.item7 {
  grid-column: 2 / span 2;
  grid-row: 3 / span 2;
}
</style>

<script setup lang="ts">
useHead({
  title: "Home",
});

const colors = ref([
  "red",
  "blue",
  "green",
  "purple",
  "yellow",
  "black",
  "tomato",
  "gray",
  "pink",
]);

const shuffleColors = () => {
  colors.value.sort(() => Math.random() - 0.5);
};
</script>
  