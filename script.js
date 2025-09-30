const cards = [
  { name: "블랙홀", img: "https://via.placeholder.com/200?text=Blackhole", desc: "모든 것을 끌어당기는 강력한 힘" },
  { name: "양자 도약", img: "https://via.placeholder.com/200?text=Quantum", desc: "예상치 못한 순간의 전환" },
  { name: "진화", img: "https://via.placeholder.com/200?text=Evolution", desc: "적응과 변화의 과정" }
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
