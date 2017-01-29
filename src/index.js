const israelInternationalPrefix = '+972';

function padWithStartingZero (number) {
  if (!number.startsWith('0')) {
    number = `0${number}`;
  }

  return number;
}

export default function normalizeIsraeliPhone (phoneNumber) {
  const cleanNumber = phoneNumber.replace(/[^0-9+]/g, '');
  const localNumber = cleanNumber.startsWith(israelInternationalPrefix) ?
	padWithStartingZero(cleanNumber.substring(4)) : cleanNumber;

  return localNumber.replace('+', '');
}