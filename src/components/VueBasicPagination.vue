<template>
  <ul class="pagination-container">
    <li>
      <button class="pagination-btn pagination-first-btn" :class="small ? 'pagination-btn-small' : ''" @click="first()">
        <span>{{props.firstBtn}}</span>
      </button>
    </li>

    <li>
      <button class="pagination-btn pagination-prev-btn" :class="small ? 'pagination-btn-small' : ''" @click="prev()">
        <span>{{props.prevBtn}}</span>
      </button>
    </li>

    <li v-if="paginationItems.length > 4 &&  props.modelValue >  3">
      <button class="pagination-btn" :class="small ? 'pagination-btn-small' : ''">
        ...
      </button>
    </li>

    <template v-for="(item, index) in paginationItems" :key="index">
      <li v-if="verifyRange(item)">
        <button class="pagination-btn" :class="[item == props.modelValue ? 'active-pagination-btn' : '', small ? 'pagination-btn-small' : '']"  @click="updateModel(item)">
          {{ item }}
        </button>
      </li>
    </template>

    <li v-if="paginationItems.length > 4 &&  props.modelValue < paginationItems.length - 1">
      <button class="pagination-btn" :class="small ? 'pagination-btn-small' : ''">
        ...
      </button>
    </li>
   
    <li>
      <button class="pagination-btn pagination-next-btn" :class="small ? 'pagination-btn-small' : ''" @click="next()">
        <span>{{props.nextBtn}}</span>
      </button>
    </li>

    <li>
      <button class="pagination-btn pagination-last-btn" :class="small ? 'pagination-btn-small' : ''" @click="last()">
        <span>{{props.lastBtn}}</span>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue', 'change'])

const props = defineProps({
  totalRows: {
    type: Number,
    default: 1
  },
  perPage: {
    type: Number,
    default: 1
  },
  modelValue: {
    default: "",
  },
  prevBtn: {
    type: String,
    default: "‹",
  },
  nextBtn: {
    type: String,
    default: "›",
  },
  firstBtn: {
    type: String,
    default: "«",
  },
  lastBtn: {
    type: String,
    default: "»",
  },
  small: {
    type: Boolean,
    default: false
  }
})

const paginationItems = computed(() =>  {
  let pages = Math.floor(props.totalRows / props.perPage)
  return Array.from({length: pages}, (_, i) => i + 1)
})

const verifyRange = (item) => {
  if (props.modelValue < 4 && item < 5) return true
  else if (props.modelValue == paginationItems.value.length && item > props.modelValue - 3) return true
  else if (item >= props.modelValue - 1 && item <= props.modelValue + 1 ) return true
  else return false
}

const prev = () => {
  if (props.modelValue > 1) updateModel(props.modelValue - 1)
}

const next = () => {
  if (props.modelValue < paginationItems.value.length) updateModel(props.modelValue + 1)
}

const first = () => {
  updateModel(1)
}

const last = () => {
  updateModel(paginationItems.value.length)
}

const updateModel = (num) => {
  emit("update:modelValue", num);
  emit("change", num);
}

</script>

<style scoped>
.pagination-container {
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.pagination-btn {
  cursor: pointer;
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.pagination-btn-small {
  padding: 0.25rem 0.5rem!important;
} 

.pagination-btn:hover {
    color: #0056b3;
    background-color: #e9ecef;
    border-color: #dee2e6;
}

.active-pagination-btn,
.active-pagination-btn:hover
{
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

/* .pagination-prev-btn span {
  font-size: 10px;
}
.pagination-next-btn span {
  font-size: 10px;
}
.pagination-last-btn span {
  font-size: 10px;
  font-weight: bold;
} */
</style>