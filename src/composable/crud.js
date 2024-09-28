import { computed, ref } from "vue";
const crud = () => {
    const addEditVisible = ref(false);
    const addEditType = ref("add");
    const initData = ref({});
    const formData = ref({});
    const viewData = ref({});
    
    const addItem = () => {
        addEditType.value = "add";
        addEditVisible.value = true;
        viewData.value = {};
    }

    const onCloseAddEdit = () => {
        restFormData();
        addEditVisible.value = false;
    };

    const editItem = (item) => {
        const itemDetails = {};

        // Set the initial data to Edit form data
        Object.keys(initData.value).forEach((key) => {
            itemDetails[key] = item[key];
        });

        itemDetails["_method"] = "PUT";
        formData.value = itemDetails;

        viewData.value = item;
        // addEditUrl.value = `${crudUrl.value}/${item.xid}`;
        addEditType.value = "edit";
        addEditVisible.value = true;
    };

    const pageTitle = computed(() => {
        return addEditType.value === "add" ? "Add New" : "Edit"
    });

    const restFormData = () => {
        formData.value = { ...initData.value };
    };

    return {
        addEditVisible,
        onCloseAddEdit,
        addEditType,
        addItem,
        editItem,
        pageTitle,
        initData,
        viewData,
        formData,
    }
}

export default crud;