let parseSpreadsheets = raw => {
  return raw
    .split(/[\r\n]+/)
    .filter(item => item.trim())
    .map(item => item.split(/\t/));
}

export default function convert(raw) {
  let list = parseSpreadsheets(raw);

  let list2 = list.map(item => ({
    date: new Date('2018.' + item[0].split('.').reverse().join('-')),
    name:   item[1],
    place:  item[2],
    coords: item[3].split(',').map(item => Number(item)),
  }));

  return list2;
}
