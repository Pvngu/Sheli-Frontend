const fields = () => {

    const initData = {
        image: "",
        name: "",
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
            title: 'Type',
            dataIndex: 'type',
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