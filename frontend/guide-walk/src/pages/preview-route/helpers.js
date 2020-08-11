export const formatDate = (date) => {
    const dateObj = new Date(date);

    let dd = dateObj.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = dateObj.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = dateObj.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}