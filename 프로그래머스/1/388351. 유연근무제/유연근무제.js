function solution(schedules, timelogs, startday) {
  let result = schedules.length;

  for (let i = 0; i < schedules.length; i++) {
    let limit_time = trans_time(schedules[i]);
    
    for (let j = 0; j < 7; j++) {
      const day = (startday + j - 1) % 7 + 1;

      // 토요일(6), 일요일(7) 제외
      if (day === 6 || day === 7) continue;

      if (timelogs[i][j] > limit_time) {
        
          result--;
        break;
      }
    }

    }

  return result;
}

function trans_time(time) {
  let hour = Math.floor(time / 100);
  let min = time % 100;

  min += 10;
  if (min >= 60) {
    hour += 1;
    min -= 60;
  }

  return hour * 100 + min;
}