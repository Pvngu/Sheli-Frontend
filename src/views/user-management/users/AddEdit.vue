<template>
    <a-drawer :title="pageTitle" :width="drawerWidth" :open="visible" :body-style="{ paddingBottom: '80px' }"
        :footer-style="{ textAlign: 'right' }" :maskClosable="false" @close="onClose">
        <a-form layout="vertical">
            <a-row justify="space-between">
                <a-col>
                    <a-upload
                        name="image"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :showUploadList="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    >
                        <div>
                            <PlusOutlined />
                            <div class="ant-upload-text">Upload</div>
                        </div>
                    </a-upload>
                </a-col>
                <a-col :span="18">
                    <a-row :gutter="16">
                        <a-col :xs="24" :sm="24" :md="12" :lg="12">
                            <a-form-item label="Name" name="name">
                                <a-input v-model:value="formData.name" placeholder="Enter Name" />
                            </a-form-item>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="12">
                            <a-form-item label="Email" name="email">
                                <a-input v-model:value="formData.email" placeholder="Enter Email" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row :gutter="16">
                        <a-col :xs="24" :sm="24" :md="12" :lg="12">
                            <a-form-item label="Password" name="password">
                                <a-input-password v-model:value="formData.password" placeholder="Enter Password" />
                            </a-form-item>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="12">
                            <a-form-item label="Confirm Password" name="confirmPassword">
                                <a-input-password v-model:value="formData.confirmPassword" placeholder="Confirm Password" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row :gutter="16">
                        <a-col :xs="24" :sm="24" :md="12" :lg="12">
                            <a-form-item label="Status" name="status">
                                <a-select v-model:value="formData.status" placeholder="Select Status">
                                    <a-select-option value="active">Active</a-select-option>
                                    <a-select-option value="inactive">Inactive</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="12">
                            <a-form-item label="Role" name="role">
                                <a-select v-model:value="formData.role" placeholder="Select Role">
                                    <!-- delete when backend is ready -->
                                    <a-select-option value="admin">Admin</a-select-option>
                                    <a-select-option value="user">User</a-select-option>
                                    <!-- delete when backend is ready -->
                                </a-select>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
            <a-row :glutter="[16, 16]">
                <a-col :xs="24" :sm="24" :md="24" :lg="24">
                    <a-form-item
                        label="Address"
                        name="address"
                    >
                        <a-textarea
                            v-model:value="formData.address"
                            :rows="4"
                            placeholder="Enter Address"
                        />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <template #footer>
            <a-space>
                <a-button key="submit" type="primary">
                    <template #icon>
                        <SaveOutlined />
                    </template>
                    {{ addEditType === "add" ? "Create" : "Update" }}
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
    visible: Boolean,
    addEditType: String,
    formData: Object,
});

const drawerWidth = computed(() => {
    return window.innerWidth <= 991 ? "90%" : "45%";
});

const onClose = () => {
    emit("closed");
};
</script>