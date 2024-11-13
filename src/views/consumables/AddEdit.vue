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
                <a-col :xs="24" :sm="24" :md="12" :lg="12">
                    <a-form-item
                        label="Name"
                        name="name"
                    >
                        <a-input 
                            v-model:value="formData.name"
                            placeholder="Enter Name"
                        />
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
                            v-model:value="formData.description"
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
import { SaveOutlined, PlusOutlined, LoadingOutlined  } from "@ant-design/icons-vue";

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

<style scoped>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>