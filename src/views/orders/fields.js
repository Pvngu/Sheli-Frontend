const fields = () => {
    const initData = {
        area_id: "",
    }

    const columns = [
        {
            title: 'Date',
            dataIndex: 'created_at',
        },
        {
            title: 'items',
            dataIndex: 'items',
        },
        {
            title: 'Request By',
            dataIndex: 'request_by',
        },
        {
            title: "Attended By",
            dataIndex: "attended_by",
        },
        {
            title: 'Area',
            dataIndex: 'area_id',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        }
    ]

    return {
        columns,
        initData,
    }
}
export default fields;