/* chatData.js
* 각 채팅방의 정보를 저장하는 데이터파일
* 데이터파일 구성요소

Array(Object)

[
  {
    id: Number                     방에 대한 id
    userId: Number                 상대방의 userId
    type: String                   'single' 은 1:1 채팅, 'group' 은 그룹채팅 그룹채팅이 있을것을 생각하여 설계
    roomName: String                채팅방의 이름, 유저가 채팅방의 이름을 바꿀 수 있음
    meesages: [ Array(Object)      메세지들이 저장되어있는 chat log
      {
        id: Number                 message 에 대한 id
        isMe: Boolean              false 는 상대방, true 는 자기자신. 메세지 정렬시 사용
        created_at: String         메세지가 생성될 당시에 new Date.getTime() 값을 저장.
        message: String            실제 저장될 메세지들
      }
    ]
  }
] */


export default [
  {
    id: 1,
    userId: 1,
    type: 'single',
    roomName: '임블리',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1543100000000',
        message: '안녕하세요. 임블리입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1543102000000',
        message: '반갑습니다. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1543104000000',
        message: '지그재그 앱을 까시면 할인쿠폰을 드립니다!',
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    type: 'single',
    roomName: '미아마스빈',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1534291000000',
        message: '안녕하세요 미아마스빈입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1534291100000',
        message: '안녕하세요. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1534291200000',
        message: '미아마스빈, 러블리 여성의류, 자체제작 쇼핑몰, 롱원피스, 블라우스, 청바지 등 판매.',
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    type: 'single',
    roomName: '모코블링',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1529592000000',
        message: '안녕하세요. 모코블링입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1529602000000',
        message: '반갑습니다. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1529612000000',
        message: '모코블링, 당신의 옷. 평범함 속에 특별함이 되다.',
      },
    ],
  },
  {
    id: 4,
    userId: 4,
    type: 'single',
    roomName: '데일리먼데이',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1523030000000',
        message: '안녕하세요. 데일리먼데이입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1523130000000',
        message: '반갑습니다. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1523230000000',
        message: '기본에 충실한 감각적인 스타일을 선도하고 지향하는 데일리먼데이입니다.',
      },
    ],
  },
  {
    id: 5,
    userId: 5,
    type: 'single',
    roomName: '파티수',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1522452400000',
        message: '안녕하세요. 파티수입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1522454200000',
        message: '반갑습니다. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1522454400000',
        message: '지그재그앱을 까시면 할인쿠폰을 드립니다!',
      },
    ],
  },
  {
    id: 6,
    userId: 6,
    type: 'single',
    roomName: '하나언니',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1517270000000',
        message: '안녕하세요. 하나언니입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1517270100000',
        message: '반갑습니다. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1517270200000',
        message: '스타일메이커 하나언니, 20,30대 여성의류 쇼핑몰, 맨투맨, 팬츠, 슬랙스, 원피스 등 판매.',
      },
    ],
  },
  {
    id: 7,
    userId: 7,
    type: 'single',
    roomName: '육육걸즈',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1526082200000',
        message: '안녕하세요. 육육걸즈입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1526083100000',
        message: '반갑습니다. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1526083600000',
        message: '자신감을 입자, 육육걸즈^^!!!',
      },
    ],
  },
  {
    id: 8,
    userId: 8,
    type: 'single',
    roomName: '핫핑',
    messages: [
      {
        id: 1,
        isMe: false,
        created_at: '1503617200000',
        message: '안녕하세요. 핫핑입니다.',
      },
      {
        id: 2,
        isMe: true,
        created_at: '1503618200000',
        message: '반갑습니다. 지그재그입니다.',
      },
      {
        id: 3,
        isMe: false,
        created_at: '1503619200000',
        message: '예쁜것도 모자라 따뜻하기까지한 핫핑메이드 마법팬츠! 군살제로 슬림핏 일자 청바지에 기모를 더해 찬바람따위 문제없어!',
      },
    ],
  },
];
