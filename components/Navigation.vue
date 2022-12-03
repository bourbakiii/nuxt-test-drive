<template>
  <nav class="navigation">
    <NuxtLink class="navigation__link" to="/">Index</NuxtLink>
    <NuxtLink class="navigation__link" to="/second">Second</NuxtLink>
    <NuxtLink class="navigation__link" to="/third">Third</NuxtLink>
  </nav>
</template>

<style lang='scss'>
.navigation {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__link {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>