export const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const formatDate = (dateObj) => {
    if (dateObj.month === -1 && dateObj.year === -1) return "Present";
    return `${months[dateObj.month - 1]} ${dateObj.year}`;
};

export const calculateDuration = (start, end) => {
    const endDate = (end.month === -1 && end.year === -1)
        ? new Date()
        : new Date(end.year, end.month - 1);

    const startDate = new Date(start.year, start.month - 1);

    let diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    // Add 1 month to include the start month in the count
    diffMonths += 1;

    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;

    let durationStr = "";
    if (years > 0) durationStr += `${years} yr${years > 1 ? 's' : ''} `;
    if (remainingMonths > 0) durationStr += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;

    return durationStr.trim();
};
