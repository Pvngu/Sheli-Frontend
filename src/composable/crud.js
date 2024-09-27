import { ref } from "vue";
const crud = () => {
    const addEditVisible = ref(false);
    const addEditType = ref("add");
    
    const addItem = () => {
        addEditType.value = "add";
        addEditVisible.value = true;
    }

    const onCloseAddEdit = () => {
        addEditVisible.value = false;
    };

    return {
        addEditVisible,
        onCloseAddEdit,
        addEditType,
        addItem
    }
}

export default crud;