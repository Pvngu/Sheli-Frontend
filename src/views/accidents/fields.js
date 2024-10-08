const fields = () => {

    const initData = {
        date: "",
        injured_person: undefined,
        reporting_user: undefined,
        area: undefined,
        days_absent: undefined,
        description: "",
        status: undefined,
    }
    const columns = [
        {
            title: 'Time of Accident',
            dataIndex: 'date',
        },
        {
            title: 'Injured Person',
            dataIndex: 'injured_person',
        },
        {
            title: 'Reporting User',
            dataIndex: 'reporting_user',
        },
        {
            title: 'Area',
            dataIndex: 'area',
        },
        {
            title: 'Days Absent',
            dataIndex: 'days_absent',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ]

    return {
        columns,
        initData,
    }
}

export default fields;