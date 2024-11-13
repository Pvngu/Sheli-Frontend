import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from 'dayjs/plugin/duration';

dayjs.extend(relativeTime);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

const appSetting = {
    value: {
        timezone: 'America/Los_Angeles',
        date_format: 'MM/DD/YYYY',
        time_format: 'HH:mm'
    }
};

const common = () => {

    // Example: 2024-11-22 -> Today or Monday or 11/22/2024
    const formatDayOrDate = (date) => {
        const now = dayjs();
        const givenDate = dayjs(date);
        const duration = now.diff(givenDate, 'day');
    
        if(duration <= 1 && now.date() === givenDate.date()) {
            return t('common.today'); // Display "Today"
        }
        if (duration <= 7) {
            return givenDate.format('dddd'); // Display the day of the week
        } else {
            return givenDate.format(appSetting.value.date_format); // Display the full date
        }
    };

    // Example: 2024-11-22 14:30 -> 11/22/2024 14:30
    const formatDateTime = (dateTime) => {
        if (dateTime == undefined) {
            return dayjs()
                .tz(appSetting.value.timezone)
                .format(
                    `${appSetting.value.date_format} ${appSetting.value.time_format}`
                )
        } else {
            return dayjs(dateTime)
                .tz(appSetting.value.timezone)
                .format(
                    `${appSetting.value.date_format} ${appSetting.value.time_format}`
                )
        }
    };

    // Example: 2024-11-22 14:30 -> 14:30 or Yesterday or 11/22/2024
    const formatRelativeTime = (dateTime) => {
        const durationInHours = dayjs().diff(dayjs(dateTime), 'hour');
        const durationInDays = dayjs().diff(dayjs(dateTime), 'day');
    
        if (durationInHours < 24) {
            return dayjs(dateTime)
                .tz(appSetting.value.timezone)
                .format(appSetting.value.time_format); // Show time
        } else if (durationInDays < 2) {
            return "Yesterday"; // Show "Yesterday"
        } else {
            return dayjs(dateTime)
                .tz(appSetting.value.timezone)
                .format(appSetting.value.date_format); // Show date
        }
    };

    // Example: 2024-11-22 14:30 -> 14:30
    const formatTime = (dateTime) => {
        return dayjs(dateTime).tz(appSetting.value.timezone).format(appSetting.value.time_format);
    }

    return {
        formatRelativeTime,
        formatDayOrDate,
        formatTime,
        formatDateTime,

        appSetting,
        dayjs,
    }
}

export default common;