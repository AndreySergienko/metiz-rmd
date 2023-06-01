<template>
  <button class='btn-primary'>
    <slot />
  </button>
</template>

<style>
  .btn-primary {
    padding: 15px 20px;

    border: 1px solid var(--color-blue);

    line-height: normal;
    color: var(--color-blue);
    font-size: var(--font-size-primary);
    font-family: var(--font-roboto);

    transition-duration: 300ms;
  }

  .btn-primary:hover {
    border-color: var(--color-light-blue);
    color: var(--color-light-blue);
  }
</style>
