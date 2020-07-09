export default function dateFormat(config) {
  const format = new Intl.DateTimeFormat('en', config).format;
  return (date) => (date ? format(new Date(date)) : 'Current');
}
