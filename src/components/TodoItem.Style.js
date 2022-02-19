const styles = {

    taskContainer: {
        justifyContent: 'center',
        display: 'flex'
    },
    taskWrapper: {
        marginBottom: 4,
        borderRadius: 4,
        width: "80%",
        textAlign: 'center',
        alginSelf: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 10px 15px 15px rgba(0,0,0,0.1)',
        display: 'flex'

    },
    taks: {
        textAlign: 'right',
        textDecoration: 'none',
        paddingLeft: 20,
        fontSize: 20

    },
    iconsWrapper: {
        paddingTop: '5px',
    },
    completedIcon: {
        fontSize: 20,
        color: 'green',
        paddingTop:10,
        paddingLeft:20

    },
    deleteIcon: {
        paddingTop:10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        color: 'red'
    }
}

export default styles;
