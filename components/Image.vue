<template>
    <component
        v-if="iconPath" class="img" :is="iconPath"/>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true     
    }
});

const iconPath = props.name ? 
defineAsyncComponent(() => import(`@/assets/images/${props.name}.svg`)) 
: null;
</script>