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
                    <Upload
                        :formData="formData"
                        folder="consumable"
                        imageField="profile_image"
                        @onFileUploaded="
                            (file) => {
                                formData.profile_image = file.file;
                                formData.profile_image_url = file.file_url;
                            }
                        "
                    />
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
                    <a-form-item
                        label="Category"
                        name="category_id"
                    >
                        <a-select
                            v-model:value="formData.category_id"
                            placeholder="Select Category"
                        >
                            <a-select-option
                                value="1"
                            >
                                Category 1
                            </a-select-option>
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

<script>
import { SaveOutlined } from "@ant-design/icons-vue";
import Upload from '../../core/ui/Upload.vue';

export default {
    props: {
        pageTitle: {
            default: "",
        },
        visible: {
            default: false,
        },
        addEditType: {
            default: "add",
        },
        formData: {
            default: {},
        },
    },
    components: {
        SaveOutlined,
        Upload,
    },
    setup(props, { emit }) {
        
        const onClose = () => {
            emit("closed");
        };

        return {
            onClose,
            drawerWidth: window.innerWidth <= 991 ? "90%" : "45%",
        }
    }
}
</script>