<!-- src/layouts/default.vue -->
<template>
  <div class="dark">
    <header>
      <h1>Mi sitio</h1>
    </header>

    <!-- Aquí se renderiza la página -->
    <slot />

    <footer>
      <p>© 2025</p>
    </footer>
  </div>
</template>
