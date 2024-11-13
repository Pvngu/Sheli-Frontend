<template>
	<a-upload
		accept="image/*"
		v-model:file-list="fileList"
		name="image"
		list-type="picture-card"
		class="avatar-uploader"
		:show-upload-list="false"
		:customRequest="customRequest"
	>
		<div v-if="formData[imageField] != undefined">
			<img style="width: 128px" :src="formData[`${imageField}_url`]" alt="avatar" />
		</div>
		<div v-else>
			<loading-outlined v-if="loading"></loading-outlined>
			<plus-outlined v-else></plus-outlined>
			<div class="ant-upload-text">Upload</div>
		</div>
	</a-upload>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";

export default defineComponent({
    props: {
        formData: null,
		folder: String,
		imageField: {
			default: "image",
			type: String,
		},
		url: {
			default: "upload-file",
			type: String,
		},
    },
    components: {
		LoadingOutlined,
		PlusOutlined,
	},
    setup() {
        const fileList = ref([]);
        const loading = ref(false);

        const customRequest = (info) => {
            console.log(info);
        }

        return {
            fileList,
            loading,
            customRequest,
        };
    },
});
</script>

<style>
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