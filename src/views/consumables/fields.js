const fields = () => {

    const initData = {
        image: "",
        name: "",
        category_id: "",
        description: "",
    }

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            width: 60,
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        }
    ];

    return {
        columns,
        initData
    }
}

export default fields;