const SERVER_HOST='http://localhost:3001';

const rupiah = (number) => new Intl.NumberFormat('ID').format(number);

export { SERVER_HOST, rupiah };