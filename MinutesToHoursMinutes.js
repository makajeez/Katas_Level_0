const convertMinToHoursMin = minutes => {
    let hour = Math.floor(minutes / 60);
    let minute = minutes % 60;
    let hPlural = hour > 1? 'hours' : 'hour';
    let mPlural = minute > 1? 'minutes' : 'minute';
    return `${hour} ${hPlural}, ${minute} ${mPlural}.`
}
