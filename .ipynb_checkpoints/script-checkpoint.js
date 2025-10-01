const cards = [
  { number: 0,  name: "광대(자유전자)",      img: "cards/0_광대-앞면.png",
    upright: "새로운 시작, 순수, 자유로움",
    reversed: "무모함, 방향 상실" },


    
  { number: 1,  name: "마법사(과학 커뮤니케이터)",    img: "cards/1_마법사-앞면.png",
    upright: "창조, 의지, 가능성",
    reversed: "기만, 실현 불가" },


{
  number: 2,  
  name: "여교황(로절린드 프랭클린)",    
  img: "cards/2_여사제-앞면.png",
  upright: "직관, 내면의 지혜",
  reversed: "숨겨진 진실, 얕은 지식"
},


    
  { number: 3,  name: "여황제(마리 퀴리)",    img: "cards/3_여황제-앞면.png",
    upright: "풍요, 창조성, 양육",
    reversed: "의존, 억압" },
  { number: 4,  name: "황제(노벨상)",      img: "cards/4_황제-앞면.png",
    upright: "권위, 구조, 안정",
    reversed: "지배, 완고함" },
  { number: 5,  name: "교황(필즈상)",      img: "cards/5_교황-앞면.png",
    upright: "전통, 신념, 교육",
    reversed: "권위에 대한 저항" },
  { number: 6,  name: "연인(전자기유도)",      img: "cards/6_연인-앞면.png",
    upright: "조화, 관계, 선택",
    reversed: "갈등, 불일치" },
  { number: 7,  name: "전차(로켓)",      img: "cards/7_전차-앞면.png",
    upright: "승리, 추진력",
    reversed: "혼란, 방향 상실" },
  { number: 8,  name: "역량(에너지 보존)",      img: "cards/8_역량-앞면.png",
    upright: "내적 힘, 용기",
    reversed: "불안, 약점" },
  { number: 9,  name: "은둔자(암흑 물질)",    img: "cards/9_은둔자-앞면.png",
    upright: "탐구, 고독, 지혜",
    reversed: "고립, 외로움" },
  { number: 10, name: "운명의 수레바퀴(슈뢰딩거의 고양이)", img: "cards/10_운명의수레바퀴-앞면.png",
    upright: "변화, 전환점",
    reversed: "불운, 통제 상실" },
  { number: 11, name: "정의(질량-에너지 등가)",      img: "cards/11_정의-앞면.png",
    upright: "진실, 균형",
    reversed: "불의, 불균형" },
  { number: 12, name: "매달린 자(쩔쩔맴)", img: "cards/12_매달린자-앞면.png",
    upright: "희생, 새로운 시각",
    reversed: "무의미한 희생" },
  { number: 13, name: "죽음(블랙홀)",      img: "cards/13_죽음-앞면.png",
    upright: "종결, 새로운 시작",
    reversed: "저항, 변화 두려움" },
  { number: 14, name: "절제(조화진동자)",      img: "cards/14_절제-앞면.png",
    upright: "조화, 균형",
    reversed: "극단, 불균형" },
  { number: 15, name: "악마(맥스웰의 악마)",      img: "cards/15_악마-앞면.png",
    upright: "유혹, 속박",
    reversed: "해방, 의존 탈피" },
  { number: 16, name: "신의 집(첨성탑)",        img: "cards/16_탑-앞면.png",
    upright: "붕괴, 갑작스러운 변화",
    reversed: "지연된 붕괴, 회피" },
  { number: 17, name: "별",        img: "cards/17_별-앞면.png",
    upright: "희망, 영감",
    reversed: "실망, 좌절" },
  { number: 18, name: "달",        img: "cards/18_달-앞면.png",
    upright: "직관, 꿈, 잠재의식",
    reversed: "혼란, 착각" },
  { number: 19, name: "태양",      img: "cards/19_태양-앞면.png",
    upright: "성공, 생명력",
    reversed: "좌절, 지나친 자만" },
  { number: 20, name: "심판(우주)",      img: "cards/20_심판-앞면.png",
    upright: "부활, 깨달음",
    reversed: "회피, 의심" },
  { number: 21, name: "세계(우주배경복사)",      img: "cards/21_세계-앞면.png",
    upright: "완성, 성취",
    reversed: "미완, 지연" }
];


document.getElementById("drawCard").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  const isUpright = 1 ;//Math.random() > 0.5;

  const cardElement = document.getElementById("tarotCard");
  const frontImg = document.getElementById("cardFrontImg");
  const cardText = document.getElementById("cardText");

  // 1. transition 끄고 즉시 뒷면으로 리셋
  cardElement.style.transition = "none";
  cardElement.classList.remove("flipped");
  void cardElement.offsetWidth; // 강제 리플로우

  // 2. 텍스트 숨기기
  cardText.style.opacity = "0";

  // 3. 새 카드 이미지 준비
  frontImg.src = card.img;
  frontImg.alt = card.name;
  frontImg.style.transform = isUpright ? "rotate(0deg)" : "rotate(180deg)";

  // 4. 카드 회전 시작
  setTimeout(() => {
    cardElement.style.transition = "transform 1s";
    cardElement.classList.add("flipped");

    // 5. 카드 회전이 끝난 후 텍스트 교체 + 페이드인
    setTimeout(() => {
      cardText.innerHTML = `
        <h2>${card.name} ${isUpright ? "" : "역방향"}</h2>
        <p>${isUpright ? card.upright : card.reversed}</p>
      `;
      cardText.style.opacity = "1";
    }, 1000); // 카드 회전 애니메이션(1s) 끝난 후
  }, 500);
});
