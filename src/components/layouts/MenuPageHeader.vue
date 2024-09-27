<template>
    <div class="breadcrumb-header">
        <a-card class="page-content-sub-header breadcrumb-left-border">
            <a-row>
                <a-col :span="24">
                    <slot key="header" name="header"></slot>
                </a-col>
                <a-col :span="24">
                    <slot key="breadcrumb" name="breadcrumb"></slot>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>

<script setup>

</script>

<style>
.page-content-sub-header {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}

.breadcrumb-left-border {
    border-left: none !important;
}
</style>