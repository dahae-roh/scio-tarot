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

  // HTML 삽입
  document.getElementById("result").innerHTML = `
    <div class="card-container">
      <div class="card">
        <!-- 뒷면 -->
        <div class="card-back">
          <img src="cards/back.jpg" alt="카드 뒷면">
        </div>
        <!-- 앞면 -->
        <div class="card-front ${isUpright ? "" : "reversed"}">
          <img src="${card.img}" alt="${card.name}">
        </div>
      </div>
      <div class="card-text">
        <h2>${card.name} (${isUpright ? "정위" : "역위"})</h2>
        <p>${isUpright ? card.upright : card.reversed}</p>
      </div>
    </div>
  `;

  // 뒤집기 애니메이션 실행
  setTimeout(() => {
    document.querySelector(".card").classList.add("flipped");
  }, 300);
});
