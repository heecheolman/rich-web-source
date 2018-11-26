/* chatFriendList.js
* 채팅방 리스트에 보여질 간략한 정보들을 담아놓는 데이터파일
* currentTimestamp 기준으로 최근메세지가 상단에 올라간다.
* 데이터파일 구성요소

Array(Object)

[
  {
    id: Number                      상대방 고유의 id값
    username: String                상대방의 닉네임
    currentMessage: String          해당 채팅방의 최근에 표시된 메세지
    currentTimestamp: String        최근에 표시된 메세지에대한 timestamp
    imagePath: String               상대방의 프로필이미지 경로
  }
]

 */


export default [
  {
    id: 1,
    username: '임블리',
    currentMessage: '지그재그 앱을 까시면 할인쿠폰을 드립니다!',
    currentTimestamp: '1543104000000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/imvely.jpg',
  },
  {
    id: 2,
    username: '미아마스빈',
    currentMessage: '미아마스빈, 러블리 여성의류, 자체제작 쇼핑몰, 롱원피스, 블라우스, 청바지 등 판매.',
    currentTimestamp: '1534291200000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/miamasvin.jpg',
  },
  {
    id: 3,
    username: '모코블링',
    currentMessage: '모코블링, 당신의 옷. 평범함 속에 특별함이 되다.',
    currentTimestamp: '1529612000000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/mocobling.jpg',
  },
  {
    id: 4,
    username: '데일리먼데이',
    currentMessage: '기본에 충실한 감각적인 스타일을 선도하고 지향하는 데일리먼데이입니다.',
    currentTimestamp: '1523230000000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/dailymonday.jpg',
  },
  {
    id: 5,
    username: '파티수',
    currentMessage: '지그재그앱을 까시면 할인쿠폰을 드립니다!',
    currentTimestamp: '1522454400000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/partysu.jpg',
  },
  {
    id: 6,
    username: '하나언니',
    currentMessage: '스타일메이커 하나언니, 20,30대 여성의류 쇼핑몰, 맨투맨, 팬츠, 슬랙스, 원피스 등 판매.',
    currentTimestamp: '1517270200000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/hanaunni.jpg',
  },
  {
    id: 7,
    username: '육육걸즈',
    currentMessage: '자신감을 입자, 육육걸즈^^!!!',
    currentTimestamp: '1526083200000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/66girls.jpg',
  },
  {
    id: 8,
    username: '핫핑',
    currentMessage: '예쁜것도 모자라 따뜻하기까지한 핫핑메이드 마법팬츠! 군살제로 슬림핏 일자 청바지에 기모를 더해 찬바람따위 문제없어!',
    currentTimestamp: '1503619200000',
    imagePath: 'https://cf.shop.s.zigzag.kr/images/hotping.jpg',
  },
];
