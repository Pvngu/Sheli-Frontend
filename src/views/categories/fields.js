const fields = () => {

    const initData = {
        name: "",
        description: "",
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            width: 100,
        },
    ]

    return {
        columns,
        initData,
    }
}

export default fields;