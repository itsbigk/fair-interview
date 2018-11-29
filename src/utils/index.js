export const convertThousands = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
