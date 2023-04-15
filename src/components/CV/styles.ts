import { CSSProperties } from "react";

const BORDER_COLOR = '#d9d9d9'

const styles: { [key: string]: CSSProperties } = {
    bg: { backgroundColor: 'gray', padding: '0 50px', overflowY: 'auto', height: '100%', boxSizing: 'border-box' },
    container: {
        width: '816px',
        height: '1056px',
        margin: '0 auto',
        padding: '15px 20px',
        backgroundColor: 'white',
        fontSize: '12px',
        boxSizing: 'border-box'
    },
    summary: {
        fontSize: '11px',
    },
    columns: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    left: {
        width: '50%',
        paddingRight: '10px',
        boxSizing: 'border-box'
    },
    right: {
        textAlign: 'left',
        width: '50%',
        paddingLeft: '10px',
        boxSizing: 'border-box'
    },
    contacts: {
        marginBottom: '15px',
        fontSize: '12px',
    },
    tags: {
        display: 'flex',
        gap: '3px',
        flexWrap: 'wrap',
        marginTop: '7px',
    },
    tag: {
        whiteSpace: 'nowrap',
        fontSize: '11px',
        fontStyle: 'italic'
    },
    companyTitle: {
        fontSize: '13px',
        fontWeight: 'bold',
        textAlign: 'right'
    },
    dateRange: {
        fontStyle: 'italic',
        fontSize: '10px',
        textAlign: 'right',
        marginTop: '-2px'
    },
    role: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    experienceItem: {
        marginTop: '15px',
        paddingTop: '10px',
        display: 'flex',
        rowGap: '5px',
        flexDirection: 'column',
        borderTop: `1px solid ${BORDER_COLOR}`,
    },
    companyHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    detailsLink: {
        marginTop: '5px',
        fontSize: '10px',
    },
    myCode: {
        fontSize: '10px',
        marginBottom: '20px'
    },
    slogan: {
        fontSize: '10px',
        textDecoration: 'underline',
        marginBottom: '30px',
        fontStyle: 'italic'
    },
    skills: {
        marginTop: '30px'
    },
    skillsBlock: {
        marginTop: '12px',
        display: 'flex',
        columnGap: '5px',
        rowGap: '4px',
        flexWrap: 'wrap',
        color: 'white',
    },
    skill: {
        border: `1px solid ${BORDER_COLOR}`,
        color: 'black',
        padding: '3px',
        fontWeight: 'bold',
        fontSize: '8px',
    },
    education: {
        wordBreak: 'break-word',
        fontSize: '10px',
        marginTop: '20px',
    }
}

export default styles;