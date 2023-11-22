export const toolbarOptions = {
    toolbar: {
        container: [
            ['bold', 'italic', 'underline'],
            [{ color: [] }],
            [{ align: [] }],
            [{ size: ['small', 'normal', 'large', 'huge'] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            // ['link', 'image'],
            ['clean'],
        ],
    },
};

export const monthArray = [
    { Value: 1, Name: "January" },
    { Value: 2, Name: "February" },
    { Value: 3, Name: "March" },
    { Value: 4, Name: "April" },
    { Value: 5, Name: "May" },
    { Value: 6, Name: "June" },
    { Value: 7, Name: "July" },
    { Value: 8, Name: "August" },
    { Value: 9, Name: "September" },
    { Value: 10, Name: "October" },
    { Value: 11, Name: "November" },
    { Value: 12, Name: "December" },
]

export function IsMobileNoValid(value) {
    const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!value) {
        return 'Mobile No should not be blank.';
    }
    else if (!phoneRegExp.test(value)) {
        return 'Invalid Phone No.';
    }
    return ''
}

export const IsDateValid = (value) => {
    const emailRegExp = /^(([0-9])|([0-2][0-9])|([3][0-1]))\ (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\ \d{4}$/;
    if (value === '') {
        return 'Date should not be blank.';
    }
    else if (!emailRegExp.test(value)) {
        return 'Please enter date format dd MMM yyyy';
    }
    else
        return ''
}

export const IsFutureDateValid = (value) => {
    if (!IsFutureDate(value)) {
        return 'Please enter future date';
    }
    else
        return ''
}
export const IsTodayFutureDateValid = (value) => {
    if (!IsTodayOrFutureDate(value)) {
        return 'Please enter today or future date';
    }
    else
        return ''
}

export const IsTodayOrFutureDate = (value) => {
    const compareDate = new Date(value)
    if (compareDate >= new Date(getTodayformatDate())) {
        return true;
    }
    else
        return false;
}
export const IsFutureDate = (value) => {
    const compareDate = new Date(value)
    if (compareDate > new Date()) {
        return true;
    }
    else
        return false;
}

export function IsEmailValid(value) {
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/;
    if (!value) {
        return 'Email Id should not be blank.';
    }
    else if (!emailRegExp.test(value)) {
        return 'Invalid email address';
    }
    return ''
}


export const ChangeFileIntoBase64 = (fileData) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(fileData);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (err) => {
            reject(err);
        };
    });
};
export const CheckFileValidation = (fileData, allowedFileTypes, fileSize) => {
    const fileExtension = fileData?.name?.split('.').at(-1);
    if (fileExtension != undefined || null) {

        if (fileData?.size > fileSize) {
            return 'Please upload a file smaller than 2 MB';
        }
        if (!allowedFileTypes.includes(fileExtension.toLowerCase())) {
            return 'File does not support. Please check Note';
        } else if (allowedFileTypes.includes(fileExtension)) {
            return null;
        }
    }
};

//Production
// export const dateSeparator = "/"    
// export const dayIndex = "1"
// export const monthIndex = "0"

//test or local
export const dateSeparator = "-"
export const dayIndex = "0"
export const monthIndex = "1"
export const getDateFormatted = (date) => {
    let arrDate = date.split(' ')[0].split(dateSeparator)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${arrDate[dayIndex]} ${monthNames[parseInt(arrDate[monthIndex]) - 1]} ${arrDate[2]}`;
}
export const getTodayformatDate = () => {
    
    let date = new Date(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return day + ' ' + months[month] + ' ' + year;
}
export const getInputDateFormatted = (date) => {
    let arrDate = date.split(' ')[0].split(dateSeparator)
    return `${arrDate[dayIndex]}-${parseInt(arrDate[monthIndex])}-${arrDate[2]}`;
}

export const getMonthYearFormatted = (date) => {

    let arrDate = date.split(' ')[0].split(dateSeparator)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${arrDate[dayIndex]} ${monthNames[parseInt(arrDate[monthIndex]) - 1]}`;
}

export const getNextDate = (date, prevNext) => {
    var nextDate = new Date(getDateFormatted(date));
    nextDate.setDate(nextDate.getDate() + prevNext);
    return getFormattedNextDate(nextDate)
}

export const getFormattedNextDate = (date) => {
    date = date || new Date();
    const Day = new Date(date).getDate();
    const Month = new Date(date).toLocaleString('default', { month: 'short' });
    const Year = new Date(date).getFullYear();

    return `${Day} ${Month} ${Year}`;
}