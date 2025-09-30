const cards = [
  { 
    name: "블랙홀", 
    img: "cards/blackhole.png", 
    desc: "모든 것을 끌어당기는 강력한 힘, 새로운 시작과 종말을 동시에 의미할 수 있습니다." 
  },
  { 
    name: "양자 도약", 
    img: "cards/quantum.png", 
    desc: "예상치 못한 순간의 전환, 준비되지 않은 변화가 찾아올 수 있습니다." 
  },
  { 
    name: "진화", 
    img: "cards/evolution.png", 
    desc: "적응과 변화의 과정, 지금의 선택이 미래를 바꿉니다." 
  }
];

document.getElementById("drawCard").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  document.getElementById("result").innerHTML = `
    <h2>${card.name}</h2>
    <img src="${card.img}" alt="${card.name}">
    <p>${card.desc}</p>
  `;
});

