const fields = () => {

    const initData = {
        name: "",
        email: "",
        password: "",
        created_at: "",
        status: undefined,
        role: undefined,
        address: "",
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
        },
        {
            title: 'Status',
            dataIndex: 'status',
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