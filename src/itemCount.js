import fetch from 'cross-fetch';

jest.setTimeout(10000);
const itemCounter = async () => {
  const total = await fetch('https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,30&appid=623e557fbf15d070be5435e1d2494617')
    .then((response) => response.json())
    .then((result) => result.list.length)
    .then((err) => err);
  return total;
};

export default itemCounter;