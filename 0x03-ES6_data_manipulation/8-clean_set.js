export default function clearSet(set, startString) {
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (result.length > 0) {
        result += '-';
      }
      result += value.slice(startString.length);
    }
  }
  return result;
}
