/* TimeParser.js

* 채팅로그의 new Date().getTime() 으로 저장된 timestamp 값이 들어오면
* 채팅기록에 대한 시간을 알려주는 함수


* 시간차 값인 '현재시간 - 채팅로그시간' 을 계산하여 timeDiff 에 저장
* timeDiff 값이 하루 미만일 시 '시간:분' 값을 갖는다.
* timeDiff 값이 일주일 미만일 시 '요일 시간:분' 값을 갖는다.
* timeDiff 값이 1년 미만일 시 '월 일 시간:분' 값을 갖는다.
* timeDiff 값이 1년 이상일 시 '연도.월.일 시간:분' 값을 갖는다.

* return dateString

*/


export default function (oldTimestamp) {
  const dayName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  let dateString = '';
  const old = new Date(parseInt(oldTimestamp, 10));
  const nowTimestamp = new Date().getTime();

  const DAY = 1000 * 60 * 60 * 24;
  const WEEK = DAY * 7;
  const MONTH = WEEK * 4;
  const YEAR = MONTH * 12;

  const year = old.getFullYear();
  const month = old.getMonth() + 1;
  const date = old.getDate();
  const day = old.getDay();
  const hour = old.getHours();
  const min = old.getMinutes();

  const parsedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const parsedMin = min < 10 ? `0${min}` : `${min}`;

  const timeDiff = nowTimestamp - oldTimestamp;

  if (timeDiff < DAY) {
    dateString = `${parsedHour}:${parsedMin}`;
  } else if (timeDiff < WEEK) {
    dateString = `${dayName[day]} ${parsedHour}:${parsedMin}`;
  } else if (timeDiff < YEAR) {
    dateString = `${month}월 ${date}일 ${parsedHour}:${parsedMin}`;
  } else {
    dateString = `${year}.${month}.${date} ${parsedHour}:${parsedMin}`;
  }

  return dateString;
}
