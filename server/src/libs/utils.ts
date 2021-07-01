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
