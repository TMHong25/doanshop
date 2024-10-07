export const formatter = (number) => {
    if (isNaN(number)) {
        return 'Invalid number';  
    }

    return new Intl.NumberFormat("vi-VN", {
        style: 'currency',
        currency: 'VND',
    }).format(number);
};
