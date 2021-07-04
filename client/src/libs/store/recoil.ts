import { atom } from 'recoil';

export const StartTime = atom<TimeType>({
  key: 'StartTime',
  default: {
    date: new Date(2020, 2, 5),
  },
});

export const EndTime = atom<TimeType>({
  key: 'EndTime',
  default: {
    date: new Date(),
  },
});

export const husbandSign = atom<boolean>({
  key: 'husbandSign',
  default: false,
});

export const husbandImage = atom<string>({
  key: 'husbandImage',
  default: '',
});

export const brideSign = atom<boolean>({
  key: 'brideSign',
  default: false,
});

export const brideImage = atom<string>({
  key: 'brideImage',
  default: '',
});

export const currentImage = atom<string>({
  key: 'currentImage',
  default: '',
});
