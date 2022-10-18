<template>
  <table class="table">
      <thead class="table__head-wrap">
        <th class="table__head table__head--title">Категория</th>
        <th class="table__head">1</th>
        <th class="table__head">2</th>
        <th class="table__head">3</th>
        <th class="table__head">4</th>
        <th class="table__head">5</th>
        <th class="table__head">6</th>
        <th class="table__head">7</th>
      </thead>
      <tbody>
        <app-table-row v-for="row of data" :key="`table-row-${row.id}`" :data="row" :level="0"/>
      </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type IInfo from "@/interfaces/Info";
import AppTableRow from "@/components/table/AppTableRow.vue";

export default defineComponent({
  components: {
    AppTableRow
  },

  props: {
    data: {
      type: Array as PropType<IInfo[]>,
      required: true,
      default: () => ([])
    }
  },
});
</script>

<style
    scoped
    lang="scss"
    src="@/assets/table.scss">
</style>
