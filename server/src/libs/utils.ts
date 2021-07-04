import { Bill } from '../@types';

export function maskingName(name: string): string {
  if (name.length > 2) {
    let originalName = name.split('');

    originalName.forEach((name, i) => {
      if (i === 0 || i === originalName.length - 1) return;

      originalName[i] = '*';
    });

    let combineName = originalName.join();

    return combineName.replace(/,/g, '');
  } else {
    return name.replace(/.$/, '*');
  }
}

export function cleanAllNullArgs(args: object): object {
  const notNull = {};

  Object.keys(args).forEach((key) => {
    if (args[key] !== null) {
      notNull[key] = args[key];
    }
  });

  return notNull;
}

export function getSortedCount(array: any[]) {
  const counts = array.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, []);

  const result: any[] = [];

  for (let key in counts) {
    result.push([key, counts[key]]);
  }

  result.sort((fst, sec) => {
    return sec[1] - fst[1];
  });

  return result;
}

type ValueType = {
  name: string;
  count: number;
};

export function getSortedList(list: Bill[]) {
  let prevList: string[] = [];
  let sortData: ValueType[] = [];

  list.map((bill) => {
    prevList.push(bill.title);
  });

  const nextList = getSortedCount(prevList);

  sortData = nextList.map((item) => ({
    name: item[0],
    count: item[1],
  }));

  return sortData;
}
