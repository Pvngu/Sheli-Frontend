<template>
    <a-card :bordered="false">
        <a-row :gutter="16">
            <a-space>
                <a-col>
                    <div class="state-widget-icon" :style="{ backgroundColor: bgColor }">
                        <slot name="image"></slot>
                    </div>
                </a-col>
                <a-col>
                    <slot name="description"></slot>
                </a-col>
            </a-space>
        </a-row>
    </a-card>
</template>

<script>
export default {
    props: {
        bgColor: {
            default: "#5F63F2",
        }
    }
}
</script>

<style scoped>
.state-widget-icon {
    height: 60px; 
    border-radius: 12px; 
    display: grid; 
    place-content: center; 
    aspect-ratio: 1 / 1;
}
</style>