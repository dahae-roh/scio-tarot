const cards = [
  { 
    name: "블랙홀", 
    img: "cards/blackhole.jpg", 
    upright: "모든 것을 끌어당기는 강력한 힘. 새로운 시작과 종말이 교차하는 순간.",
    reversed: "벗어나기 힘든 집착이나 정체. 스스로를 가둔 블랙홀에 주의하세요." 
  },
  { 
    name: "양자 도약", 
    img: "cards/quantum.jpg", 
    upright: "예상치 못한 순간의 전환. 기회의 창이 열립니다.",
    reversed: "준비되지 않은 변화로 인한 혼란. 타이밍을 다시 살펴보세요." 
  },
  { 
    name: "진화", 
    img: "cards/evolution.jpg", 
    upright: "적응과 성장의 과정. 변화 속에서 진정한 힘을 얻습니다.",
    reversed: "변화를 거부하거나 정체된 상태. 더 이상 머무를 수 없습니다." 
  }
];

document.getElementById("drawCard").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  const isUpright = Math.random() > 0.5;

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
        <h2>${card.name} (${isUpright ? "정위" : "역위"})</h2>
        <p>${isUpright ? card.upright : card.reversed}</p>
      `;
      cardText.style.opacity = "1";
    }, 1000); // 카드 회전 애니메이션(1s) 끝난 후
  }, 300);
});
