<template>
    <MainPageHeader>
        <template #header>
            <a-page-header title="profile" class="p-0">
                <template #extra>
                    <a-button type="primary" @click="onSubmit">
                        <template #icon> <SaveOutlined /> </template>
                        Update
                    </a-button>
                </template>
            </a-page-header>
        </template>
        <template #breadcrumb>
            <a-breadcrumb separator="-" style="font-size: 12px">
                <a-breadcrumb-item>
                    <router-link :to="{ name: 'admin.dashboard.index' }">
                        dashboard
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    settings
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    Profile
                </a-breadcrumb-item>
            </a-breadcrumb>
        </template>
    </MainPageHeader>

    <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" class="bg-setting-sidebar">
            <SettingSidebar />
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
            <admin-page-table-content>
                <a-card class="page-content-container mt-20 mb-20">
                    <a-form layout="vertical">
                        <a-row :gutter="16">
                            <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                <a-form-item
                                    :label="name"
                                    name="name"
                                    :help="rules.name ? rules.name.message : null"
                                    :validateStatus="rules.name ? 'error' : null"
                                    class="required"
                                >
                                    <a-input
                                        v-model:value="formData.name"
                                        placeholder="Please Enter Name"
                                    />
                                </a-form-item>
                            </a-col>
                            <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                <a-form-item
                                    :label="$t('user.email')"
                                    name="email"
                                    :help="rules.email ? rules.email.message : null"
                                    :validateStatus="rules.email ? 'error' : null"
                                    class="required"
                                >
                                    <a-input
                                        :value="formData.email"
                                        :placeholder="
                                            $t('common.placeholder_default_text', [
                                                $t('user.email'),
                                            ])
                                        "
                                        disabled
                                    />
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row :gutter="16">
                            <a-col :xs="24" :sm="24" :md="24" :lg="24">
                                <a-form-item
                                    :label="$t('user.password')"
                                    name="password"
                                    :help="rules.password ? rules.password.message : null"
                                    :validateStatus="rules.password ? 'error' : null"
                                >
                                    <a-input
                                        v-model:value="formData.password"
                                        :placeholder="
                                            $t('common.placeholder_default_text', [
                                                $t('user.password'),
                                            ])
                                        "
                                        type="password"
                                        autocomplete="off"
                                    />
                                    <small class="small-text-message">
                                        {{ $t("user.password_blank") }}
                                    </small>
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row :gutter="16">
                            <a-col :xs="24" :sm="24" :md="12" :lg="12">
                                <a-form-item
                                    :label="$t('user.phone')"
                                    name="phone"
                                    :help="rules.phone ? rules.phone.message : null"
                                    :validateStatus="rules.phone ? 'error' : null"
                                >
                                    <a-input
                                        v-model:value="formData.phone"
                                        :placeholder="
                                            $t('common.placeholder_default_text', [
                                                $t('user.phone'),
                                            ])
                                        "
                                    />
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row :gutter="16">
                            <a-col :xs="24" :sm="24" :md="24" :lg="24">
                                <a-form-item
                                    :label="$t('user.profile_image')"
                                    name="profile_image"
                                    :help="
                                        rules.profile_image
                                            ? rules.profile_image.message
                                            : null
                                    "
                                    :validateStatus="rules.profile_image ? 'error' : null"
                                >
                                    <Upload
                                        :formData="formData"
                                        folder="user"
                                        imageField="profile_image"
                                        @onFileUploaded="
                                            (file) => {
                                                formData.profile_image = file.file;
                                                formData.profile_image_url =
                                                    file.file_url;
                                            }
                                        "
                                    />
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row :gutter="16">
                            <a-col :xs="24" :sm="24" :md="24" :lg="24">
                                <a-form-item
                                    :label="$t('user.address')"
                                    name="address"
                                    :help="rules.address ? rules.address.message : null"
                                    :validateStatus="rules.address ? 'error' : null"
                                >
                                    <a-textarea
                                        v-model:value="formData.address"
                                        :placeholder="
                                            $t('common.placeholder_default_text', [
                                                $t('user.address'),
                                            ])
                                        "
                                        :rows="4"
                                    />
                                </a-form-item>
                            </a-col>
                        </a-row>

                        <a-row :gutter="16">
                            <a-col :xs="24" :sm="24" :md="24" :lg="24">
                                <a-form-item>
                                    <a-button
                                        type="primary"
                                        @click="onSubmit"
                                        :loading="loading"
                                    >
                                        <template #icon> <SaveOutlined /> </template>
                                        {{ $t("common.update") }}
                                    </a-button>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </a-card>
            </admin-page-table-content>
        </a-col>
    </a-row>
</template>

<script>
import SettingSidebar from '../SettingSidebar.vue';
import MainPageHeader from '../../../components/layouts/MenuPageHeader.vue';
import { SaveOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        MainPageHeader,
        SaveOutlined,
        SettingSidebar,
    },
    setup() {
        return {
            
        }
    }
}
</script>