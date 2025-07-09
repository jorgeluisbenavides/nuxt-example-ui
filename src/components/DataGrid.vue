<template>
  <DxDataGrid
    :data-source="dataSource"
    :show-borders="true"
  >
    <DxColumn data-field="id" caption="ID" />
    <DxColumn data-field="name" caption="Nombre" />
    <DxColumn data-field="age" caption="Edad" />
  </DxDataGrid>
</template>

<script setup lang="ts">
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid'

const dataSource = [
  { id: 1, name: 'Juan', age: 30 },
  { id: 2, name: 'Ana', age: 28 },
  { id: 3, name: 'Pedro', age: 40 },
]
</script>
