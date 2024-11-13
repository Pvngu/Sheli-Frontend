<template>
    <div class="breadcrumb-header">
        <a-card bodyStyle="padding-top: 10px; padding-bottom: 10px">
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