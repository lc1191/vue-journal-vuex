<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry', params: {id: 10}})"
    >
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">27</span>
        <span class="mx-1 fs-5">Agosto</span>
        <span class="mx-2 fw-light">2022</span>
    </div>

    <div class="entry-description"></div>
        Do laborum eu enim consequat. Irure voluptate elit sint qui amet. Qui ex occaecat deserunt Lorem sint tempor proident. Laborum eu ex sint adipisicing excepteur laborum officia do. Et dolore ex velit culpa veniam consectetur cupidatat commodo adipisicing aliquip amet voluptate.
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}


</style>