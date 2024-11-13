<template>
    <a-layout-content class="message-container" :class="{ 'resize-content': isDetailOpen }">
        <div v-if="Object.keys(this.messages).length === 0 && this.selectedUser.team_chat_id !== ''" class="content-padding message-spacer">
            <div class="inbox-container">
                <a-col style="height: 100%;" :span="24">
                    <a-skeleton />
                    <a-skeleton class="mt-20" />
                    <a-skeleton class="mt-20" />
                    <a-skeleton class="mt-20" />
                    <a-skeleton class="mt-20" />
                    <a-skeleton class="mt-20" />
                    <a-skeleton class="mt-20" />
                    <a-skeleton class="mt-20" />
                    <a-skeleton class="mt-20" />
                </a-col>
            </div>
        </div>
        <div v-else class="content-padding message-spacer" ref="scrollElement">
            <div class="inbox-container">
                <InfiniteLoading v-if="!disableInfiniteScroll" @infinite="load">
                    <template #spinner>
                        <a-row justify="center">
                            <a-col>
                                <a-spin :indicator="indicator" />
                            </a-col>
                        </a-row>
                    </template>
                </InfiniteLoading>
                <div v-for="( messages, date ) in messages" :key="date">
                    <a-divider>
                        <div class="font-small date-divider">
                            {{ formatDayOrDate(date) }}
                        </div>
                    </a-divider>
                    <a-row v-for="message in messages" :class="{ 'bubble-end' : isMsgInbound(message) }">
                        <a-col class="message-bubble">
                            <a-row justify="end">
                                <a-col>
                                    <span class="font-small">{{ formatTime(message.created_at) }}</span>
                                    <MessageOutlined class="font-small ml-5" />
                                </a-col>
                            </a-row>
                            <a-row>
                                <a-col class="message-bubble-content" :class="{ 'message-inbound' : isMsgInbound(message) }">
                                    {{ message.content }}
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
    </a-layout-content>
</template>

<script>
import { ref, h } from 'vue';
import common from '../../composable/common.js';
import InfiniteLoading from "v3-infinite-loading";
import { MessageOutlined, LoadingOutlined } from '@ant-design/icons-vue';
export default {
    props: {
        messages: {
            default: {},
        },
        selectedUser: {
            default: {},
        },
        disableInfiniteScroll: {
            default: false,
        },
        isDetailOpen: {
            default: false,
        },
    },
    components: {
        MessageOutlined,
        LoadingOutlined,
        InfiniteLoading,
    },
    emits: ['loadMoreMessages'],
    setup(props, { emit }) {
        const { formatDayOrDate, formatTime } = common();
        const indicator = h(LoadingOutlined);
        const messages = ref([]);

        const load = () => {
            emit('loadMoreMessages');
        };
        return {
            formatDayOrDate,
            formatTime,
            indicator,
        };
    }
}
</script>

<style scoped>
.content-padding {
    padding: 10px 20px !important;
}

.message-container {
  --dot-bg: #f6f8fa;
  --dot-color: rgb(0, 0, 0, 0.5);
  --dot-size: 1px;
  --dot-space: 30px;
	background:
		linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		var(--dot-color);
}

.inbox-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100%;
}

.message-spacer {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.date-divider {
    background: #f0f0f0;
    padding: 5px;
    border-radius: 5px;
}

.message-bubble-content {
    padding-inline: 12px;
    padding-block: 16px;
    border-radius: 7.5px;
    background: #f0f0f0;
}

.message-color {
    background: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
}

.message-inbound {
    background: #e8f1fe !important;
}

.bubble-end {
    justify-content: end;
}
</style>