<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type IInfo from "@/interfaces/Info";

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<IInfo>,
      required: true,
      default: () => ({})
    },
    level: {
      type: Number,
      required: true,
    },
    show: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  data: () => ({
    _isOpen: false
  }),
  methods: {
    onClick(): void {
      if (!this.data.children) return;

      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    isOpen: {
      get(): boolean {
        return this._isOpen && this.show;
      },
      set(val: boolean) {
        this._isOpen = val;
      }
    },
  }
});
</script>

<template>
  <tr
      class="table__row"
      :class="{'table__row--pushable': !!data.children}"
      @click="onClick"
      v-show="show"
  >
    <td
        class="table__cell table__cell--title"
        :style="{'padding-left': `${level * 16}px`}"
    >
      <span
        v-if="!!data.children"
        class="table__arrow"
        :class="{'table__arrow--open': isOpen}"
      >
        ^
      </span>{{ data.title }}</td>
    <td class="table__cell">{{data.countOrder}}</td>
    <td class="table__cell">{{data.countPay}}</td>
    <td class="table__cell">{{data.countPlay}}</td>
    <td class="table__cell">{{data.countSend}}</td>
    <td class="table__cell">{{data.countView}}</td>
    <td class="table__cell">{{data.viewPay}}</td>
    <td class="table__cell">{{data.viewSend}}</td>
  </tr>
  <app-table-row
      v-if="!!data.children"
      v-for="childRow of data.children"
      :key="`table-row-${childRow.id}`"
      :data="childRow"
      :level="level + 1"
      :show="isOpen"
  />
</template>

<style
    scoped
    lang="scss"
    src="@/assets/table.scss">
</style>
