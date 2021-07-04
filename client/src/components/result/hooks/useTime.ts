import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { StartTime, EndTime } from '../../../libs/store/recoil';

function useTime() {
  const [startTime, setStartTime] = useRecoilState(StartTime);
  const [endTime, setEndTime] = useRecoilState(EndTime);

  useEffect(() => {
    if (endTime.date.getTime() - startTime.date.getTime() < 0) {
      alert('끝 시간이 시작 시간보다 작으면 안됩니다');
      setStartTime({ date: new Date() });
      setEndTime({ date: new Date() });
      return;
    }
  }, [startTime.date, endTime.date, setStartTime, setEndTime]);

  return {
    startTime,
    endTime,
    setStartTime,
    setEndTime,
  };
}

export default useTime;