<template>
  <table class="table">
      <thead class="table__head-wrap">
        <th class="table__head table__head--title">Категория</th>
        <th class="table__head">countView</th>
        <th class="table__head">countPlay</th>
        <th class="table__head">countSend</th>
        <th class="table__head">countOrder</th>
        <th class="table__head">countPay</th>
        <th class="table__head">viewSend</th>
        <th class="table__head">viewPay</th>
      </thead>
      <tbody>
        <app-table-row v-for="row of data" :key="`table-row-${row.id}`" :data="row" :level="0"/>
        <tr class="table__row table__row--summary">
          <td class="table__cell table__cell--title">Итого: </td>
          <td class="table__cell" v-for="(item, index) of getSummary" :key="`table-summary-${index}`">{{item}}</td>
        </tr>
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

  data: () => ({
    countableProperties: ['countView', 'countPlay', 'countSend', 'countOrder', 'countPay', 'viewSend', 'viewPay']
  }),

  computed: {
    getSummary(): number[] {
      const data = this.data;
      const _temp: number[] = [];

      if (!data.length) return [];

      Object.keys(data[0]).forEach((key: string) => {
        if (this.countableProperties.includes(key)) {
          _temp.push(data.reduce((prevItem, currentItem) => (
              (typeof prevItem === 'number' ? prevItem : prevItem[key]) + currentItem[key]
          )));
        }
      });

      return _temp;
    }
  }
});
</script>

<style
    scoped
    lang="scss"
    src="@/assets/table.scss">
</style>
