<template>
    <a-row style="padding: 16px;" :gutter="[16,16]">
        <a-col :span="24" class="pt-10">
            <a-row aling="middle" justify="space-between" class="px-20" :wrap="false">
                <a-col>
                    <a-typography-title :level="4" style="margin-bottom: 0;">
                        Chat
                    </a-typography-title>
                </a-col>
            </a-row>
        </a-col>
        <a-col class="px-20" :span="24">
            <a-input
                v-model:value="filters.name"
                placeholder="Search User"
                :bordered="false"
                style="background: #f0f0f0"
            >
            <template #prefix>
                <SearchOutlined v-if="!searchLoading" class="ml-5 mr-15" />
                <LoadingOutlined v-else class="ml-5 mr-15" />
            </template>
            </a-input>
        </a-col>
        <a-col class="px-20" :span=24>
            <a-radio-group buttonStyle="solid">
                <a-radio-button class="pill-radio" value="all">All</a-radio-button>
                <a-radio-button class="pill-radio" value="active">Unread</a-radio-button>
                <a-radio-button class="pill-radio" value="inactive">Groups</a-radio-button>
            </a-radio-group>
        </a-col>
        <a-col :span="24">
            <a-list item-layout="horizontal" buttonStyle="solid">
                <a-list-item v-for="conversation in conversations" class="list-item">
                    <a-list-item-meta>
                        <template #title>
                            <a-row justify="space-between">
                                <a-col>
                                    <strong>{{ conversation.name }}</strong>
                                </a-col>
                                <a-col>
                                    <span style="color: #5762E1;" class="font-small">
                                        {{ formatRelativeTime(conversation.last_message_date)  }}
                                    </span>
                                </a-col>
                            </a-row>
                        </template>
                        <template #avatar>
                            <a-avatar :src="conversation.chat_user.profile_image_url" size="large" />
                        </template>
                        <template #description>
                            <a-row :wrap="false">
                                <a-col flex="auto">
                                    <a-typography-paragraph
                                        ellipsis
                                        :content="conversation.last_message.content"
                                    />
                                </a-col>
                                <a-col flex="24px">
                                    <a-badge style="scale: 0.9;" v-if="conversation.unread_messages_count" :count="conversation.unread_messages_count" />
                                </a-col>
                            </a-row>
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </a-list>
        </a-col>
    </a-row>
</template>

<script>
import { ref } from 'vue';
import common from '../../composable/common.js'
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        SearchOutlined,
        LoadingOutlined,
    },
    setup() {
        const { formatRelativeTime } = common();
        const filters = ref({
            name: '',
        });
        const searchLoading = ref(false);
        const conversations = ref([]);

        return {
            filters,
            searchLoading,
            formatRelativeTime,
            conversations: [
                {
                    name: 'Example User',
                    last_message_date: new Date(),
                    chat_user: {
                        profile_image_url: 'https://via.placeholder.com/150',
                    },
                    last_message: {
                        content: 'Hello, how are you?',
                    },
                    unread_messages_count: 1,
                }
            ]
        }
    }
}
</script>

<style>
.chat-sider {
    border-right: 1px solid #f0f0f0;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    background: #fff !important;
}

.pill-radio {
    border: #f0f0f0 solid 1px !important;
    border-radius: 20px !important;
    margin-right: 8px;
}

.pill-radio::before {
    width: 0 !important;
}

.isActive, .list-item:hover {
    background: #f0f0f0;
}

.list-item:hover {
    cursor: pointer;
}

.resize-content {
    width: calc(100% - 32%);
}
</style>

<style scoped>
.icon-size {
    font-size: 1rem;
}
</style>