<template>
    <main class="login-container">
        <a-card style="max-width: 320px; margin: 0 auto;" :title="null">
            <div class="card-header">
                <img width="38px" src="../../assets/Sheli_logo.png" alt="Sheli logo" />
                <span class="logo-title">Sheli</span>
            </div>
            <a-form layout="vertical">
                <a-row>
                    <a-col :span="24">
                        <a-form-item label="Email Address" name="email">
                            <a-input />
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item label="Password" name="password">
                            <a-input-password />
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item>
                            <a-button 
                                block 
                                type="primary"
                                @click="() => $router.push({ name: 'dashboard.index' })"
                            >
                            Login
                            </a-button>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </a-card>
    </main>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.login-container {
    padding-top: 4rem;
}

.card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    gap: 8px;
}

.logo-title {
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 1.8rem;
    opacity: 0.9;
}
</style>
<script setup>
import { reactive } from "vue";
import { MailOutlined, LockOutlined } from "@ant-design/icons-vue";
</script>
