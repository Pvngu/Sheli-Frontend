<template>
    <a-drawer
        :title="pageTitle"
        :width="drawerWidth"
        :open="visible"
        :body-style="{ paddingBottom: '80px' }"
        :footer-style="{ textAlign: 'right' }"
        :maskClosable="false"
        @close="onClose"
    >
        <a-form layout="vertical">
            <a-row :gutter="16">
                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                    <a-form-item
                        label="Time of Accident"
                        name="time_of_accident"
                    >
                        <a-date-picker
                            show-time
                            style="width: 100%"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                    <a-form-item
                        label="Injured Person"
                        name="injured_person"
                    >
                        <a-select
                            placeholder="Select Injured Person"
                        >
                            <!-- delete when backend is ready -->
                            <a-select-option value="1">Person 1</a-select-option>
                            <a-select-option value="2">Person 2</a-select-option>
                            <a-select-option value="3">Person 3</a-select-option>
                            <!-- delete when backend is ready -->
                        </a-select>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="16">
                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                    <a-form-item
                        label="Reporting User"
                        name="reporting_user"
                    >
                        <a-select
                            placeholder="Select Reporting User"
                        >
                            <!-- delete when backend is ready -->
                            <a-select-option value="1">Person 1</a-select-option>
                            <a-select-option value="2">Person 2</a-select-option>
                            <a-select-option value="3">Person 3</a-select-option>
                            <!-- delete when backend is ready -->
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                    <a-form-item
                        label="Area"
                        name="area"
                    >
                        <a-select
                            placeholder="Select Area"
                        >
                            <!-- delete when backend is ready -->
                            <a-select-option value="1">Area 1</a-select-option>
                            <a-select-option value="2">Area 2</a-select-option>
                            <a-select-option value="3">Area 3</a-select-option>
                            <!-- delete when backend is ready -->
                        </a-select>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="16">
                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                    <a-form-item
                        label="Days Absent"
                        name="days_absent"
                    >
                        <a-input-number
                            :min="1" 
                            style="width: 100%"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                    <a-form-item
                        label="Status"
                        name="status"
                    >
                        <a-select
                            placeholder="Select Status"
                        >
                            <!-- delete when backend is ready -->
                            <a-select-option value="1">Status 1</a-select-option>
                            <a-select-option value="2">Status 2</a-select-option>
                            <a-select-option value="3">Status 3</a-select-option>
                            <!-- delete when backend is ready -->
                        </a-select>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :glutter="[16, 16]">
                <a-col :xs="24" :sm="24" :md="24" :lg="24">
                    <a-form-item
                        label="Description"
                        name="description"
                    >
                        <a-textarea
                            :rows="4"
                            placeholder="Enter Description"
                        />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <template #footer>
            <a-space>
                <a-button
                    key="submit"
                    type="primary"
                >
                    <template #icon>
                        <SaveOutlined />
                    </template>
                    Create
                </a-button>
                <a-button key="back" @click="onClose">
                    Cancel
                </a-button>
            </a-space>
        </template>
    </a-drawer>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { SaveOutlined } from "@ant-design/icons-vue";

const emit = defineEmits(["closed"]);

const props = defineProps({
    pageTitle: String,
    visible: Boolean
});

const drawerWidth = computed(() => {
    return window.innerWidth <= 991 ? "90%" : "45%";
});

const onClose = () => {
    emit("closed");
};
</script>