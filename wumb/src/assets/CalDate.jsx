import React, {useState} from 'react'


function CalDate () {
    const [calDate, setCalDate] = useState(initialdate)
    setCalDate(calDate)

    const filteredResults = userResults.filter(result => {
        const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
        const newCalDateFormat = calDate.toLocaleString().split(",")[0]
        return newResultFormat === newCalDateFormat
    })
}