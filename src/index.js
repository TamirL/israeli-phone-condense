const israelInternationalPrefix = '+972';

export default function normalizeIsraeliPhone (phoneNumber) {
  const cleanNumber = phoneNumber.replace(/[^0-9+]/g, '');
  const localNumber = cleanNumber.startsWith(israelInternationalPrefix) ? `0${cleanNumber.substring(4)}` : cleanNumber;


  return localNumber.replace('+', '');
}