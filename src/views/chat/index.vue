<template>
    <a-layout style="height: calc(100vh - 64px);">
        <a-layout-sider width="25%" class="chat-sider" style="position: relative; overflow: hidden;">
            <ConversationLog />
        </a-layout-sider>
        <a-layout style="position: relative;">
            <a-layout-header class="chat-header">
                <a-row align="middle" justify="space-between">
                    <a-col>
                        <a-typography-title :level="4" style="margin-bottom: 0;">
                            Example User
                        </a-typography-title>
                    </a-col>
                    <a-col>
                        <a-button shape="round" @click="() => { visible = !visible }">
                            <template #icon>
                                <ExclamationCircleOutlined />
                            </template>
                            Details
                        </a-button>
                    </a-col>
                </a-row>
            </a-layout-header>
            <ChatLog
                :isDetailOpen="visible"
            />
            <a-layout-footer class="content-padding" :class="{ 'resize-content' : visible }">
                <a-row :gutter="16">
                    <a-col :span="23">
                        <a-input
                            placeholder="type a message"
                            size="large"
                        />
                    </a-col>
                    <a-col :span="1" style="margin: auto">
                        <a-button :disabled="!bodyMessage" :loading="loading" type="primary" shape="circle" @click="sendMessage">
                            <template #icon>
                                <SendOutlined />
                            </template>
                        </a-button>
                    </a-col>
                </a-row>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
import { ExclamationCircleOutlined, SendOutlined } from '@ant-design/icons-vue';
import { ref, onMounted } from 'vue';
import ConversationLog from './ConversationLog.vue';
import ChatLog from './ChatLog.vue';

export default {
    components: {
        ExclamationCircleOutlined,
        SendOutlined,
        ConversationLog,
        ChatLog,
    },
    setup() {
        const visible = ref(false);
        const bodyMessage = ref('');
        const sendMessage = () => {
            console.log(bodyMessage.value);
        }
        const loading = ref(false);
        return {
            visible,
            bodyMessage,
            sendMessage,
            loading,
        }
    }
}
</script>

<style scoped>
    .chat-header {
        height: 59px;
        padding-inline: 24px !important;
    }

    .chat-header {
        border-right: 1px solid #f0f0f0;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        background: #fff !important;
    }
</style>