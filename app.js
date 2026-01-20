(() => {
  const DOODLE_PATH = (id) => `assets/doodles/${id}.png`;
  let CURRENT_WINNER_ID = "pikachu";
  // -----------------------------
  // 1) 포켓몬 타입(13)
  // -----------------------------
  const POKEMON = [
    {
      id: "togepi",
      name: "토게피(감정형)",
      emoji: "🍀",
      oneLiner: "“나 조금만 이따 하께...”",
      pokemonTraits: ["긴장 많이 함", "응원 효과 큼", "보호본능 유발"],
      climberTraits: ["컨디션 영향 큼","압박 주면 위축됨","안 풀리면 벽이 괜히 미워짐","응원 받으면 급성장","주변에서 자연스럽게 챙겨줌",],
    },
    {
      id: "magikarp",
      name: "잉어킹(끈기형)",
      emoji: "🐟",
      oneLiner: "“못 풀어도 괜찮지 뭐”",
      pokemonTraits: ["욕심 없음", "꾸준함", "단단한 멘탈"],
      climberTraits: ["완등 집착 없음","전체적인 템포가 느긋함","벽에 붙어 있을 때도 가끔 딴 생각함","엉뚱한 순간 성공함","가끔 매트에서 팔딱거림",],
    },
    {
      id: "eevee",
      name: "이브이(탐색형)",
      emoji: "🧬",
      oneLiner: "“이것도 재밌다!”",
      pokemonTraits: ["성장 중", "호기심","유동적"],
      climberTraits: ["새로운 무브 욕심 있음","다양한 풀이 좋아함","때에 따라 스타일 달라짐","정답보다는 “이렇게도 가능해”에 관심이 더 감","“잘 하는 것”보다는 “새로운 시도”에 끌리는 편",],
    },
    {
      id: "ditto",
      name: "메타몽(유동형)",
      emoji: "🔁",
      oneLiner: "“아까 이렇게 하던데, 오 됐다!”",
      pokemonTraits: ["적응력 빠름", "수용적", "관찰력 좋음"],
      climberTraits: ["다른 사람 무브를 잘 관찰함","앞에서 누가 시범 보여주면 그대로 복사 가능","카탈로그 없으면 헤맬 때 있음","뒤에서 INPUT 넣는대로 OUTPUT 나옴","나보다 잘하는 사람 있으면 효율 올라감",],
    },
    {
      id: "gengar",
      name: "팬텀(변칙형)",
      emoji: "👻",
      oneLiner: "“ㅋㅋㅋ이게 되눙”",
      pokemonTraits: ["장난기", "자유로움", "창의력 과다"],
      climberTraits: ["정석보다 변칙 무브에 손이 먼저 감","나만의 베타 추구","재밌는 게 좋음","지금 당장 필요한 조언 아니면 안 들음","실패하면 “안타까운거지 뭐~” 하고 넘어감",],
    },
    {
      id: "pikachu",
      name: "피카츄(활력형)",
      emoji: "⚡",
      oneLiner: "“오늘도 암장에 전기 공급하러 왔습니다.”",
      pokemonTraits: ["분위기메이커", "들찍장인", "간식 요정"],
      climberTraits: ["같이 잘되면 그게 제일 큰 행클","즐기는 게 목표","나이스 타이밍 기가 맥힘","남 성공이 곧 내 도파민","응원하다가 본인도 각성함",]
    },
    {
      id: "snorlax",
      name: "잠만보(회복형)",
      emoji: "😴",
      oneLiner: "“나 지쳤어…(음 이건 재밌어보이는데...)”",
      pokemonTraits: ["느긋함", "안정감", "Zzz..."],
      climberTraits: ["쉬는 시간 충분히 가져감","위험해 보이면 패스","다이나믹 잘하는데 안 함","말은 지쳤다 하는데 어느새 뭘 또 풀고 옴","체력 대비 재미 없는 문제는 패스",],
    },
    {
      id: "lucario",
      name: "루카리오(스태틱형)",
      emoji: "🥋",
      oneLiner: "“강해질 수 있다.”",
      pokemonTraits: ["원칙주의", "침착함", "신뢰형"],
      climberTraits: ["다이나믹한 무브보다 스태틱 선호","기본기 중시","컨디션 기복이 적음","단기간 성과보다 장기 성장형","완등도 중요하지만 무브 퀄리티도 중요함",],
    },
    {
      id: "charizard",
      name: "리자몽(다이나믹형)",
      emoji: "🔥",
      oneLiner: "“오늘도 함 뛰어볼까”",
      pokemonTraits: ["대담함", "도파민 중독자", "자신감"],
      climberTraits: ["일단 붙어봄","어려운 구간이 있어야 재미를 느낌","무브 화려한 문제에 눈 돌아감","성공하면 레전드","깁스 푼 지 얼마 안됐거나 깁스 중이거나 깁스할 예정",],
    },
    {
      id: "dragonite",
      name: "망나뇽(수호자형)",
      emoji: "🐉",
      oneLiner: "“너는 이렇게 가는 게 더 쉬울 거 같은데?”",
      pokemonTraits: ["상냥함", "책임감", "안정감"],
      climberTraits: ["은둔 고수","무브 이해도 높음","엄격하거나 다그치기보다는 제안하는 편","나이스 받는 것도 좋지만 나이스 외쳐주는 것도 행복함","알려준 무브로 남이 성공하면 내가 푼 것처럼 뿌듯함",],
    },
    {
      id: "mewtwo",
      name: "뮤츠(투지형)",
      emoji: "🧠",
      oneLiner: "“될 때까지 트라이.”",
      pokemonTraits: ["냉철함", "독립적", "기준 높음"],
      climberTraits: ["풀고 싶은 문제 생기면 집착","내 문제 푸는 게 더 급함","안 되면 오기 제대로 올라옴","같이 간 사람 유기함","꽂힌 문제 풀고 나면 친절해짐",],
    },
    {
      id: "rayquaza",
      name: "레쿠쟈(초월자형)",
      emoji: "🌌",
      oneLiner: "“그건 왜 그렇게 해?”",
      pokemonTraits: ["기준 높음", "효율 집착", "카리스마"],
      climberTraits: ["실력 최상급, 기준점 역할","더 이상 건강이 목적이 아님","다들 크럭스라는데 어디인지 못 찾겠음","비꼬는 게 아니라 진심으로 왜 못하는지 궁금할 때 있음","루트 뚫어버려서 세터가 임펙 들고오게 함",],
    },
    {
      id: "wynaut",
      name: "마자용(고인물형)",
      emoji: "🤡",
      oneLiner: "“클라이밍? 재밌나? 그냥 하는 거지...”",
      pokemonTraits: ["해탈", "관대함", "무던함"],
      climberTraits: ["다 내려놓은 고인물","등반에 큰 감정 기복 없음","성장 중인 사람보면 기분이 묘함","안전 관련되면 엄격해짐","가끔 도파민 터지면 ‘아… 아직 설레네’ 싶어짐",],
    },
  ];
  const ids = POKEMON.map((p) => p.id);
  const emptyScore = () => Object.fromEntries(ids.map((id) => [id, 0]));
  const add = (score, id, pts) => (score[id] = (score[id] || 0) + pts);

  // -----------------------------
  // 2) 궁합(고정 1쌍) - 맞아용은 없음
  // -----------------------------
const COMPAT = {
  togepi: {
    good: ["dragonite", "pikachu", "snorlax"],
    bad: ["mewtwo", "rayquaza", "charizard"],
  },
  magikarp: {
    good: ["snorlax", "eevee"],
    bad: ["charizard", "mewtwo", "pikachu"],
  },
  eevee: {
    good: ["ditto", "gengar", "pikachu"],
    bad: ["mewtwo", "lucario", "rayquaza"],
  },
  ditto: {
    good: ["eevee", "dragonite", "lucario"],
    bad: ["rayquaza", "gengar"],
  },
  gengar: {
    good: ["pikachu", "eevee", "charizard"],
    bad: ["lucario", "dragonite", "rayquaza"],
  },
  pikachu: {
    good: ["gengar", "togepi", "eevee"],
    bad: ["mewtwo"],
  },
  snorlax: {
    good: ["magikarp", "dragonite"],
    bad: ["charizard", "pikachu"],
  },
  lucario: {
    good: ["dragonite", "mewtwo", "ditto"],
    bad: ["gengar", "charizard"],
  },
  charizard: {
    good: ["pikachu", "gengar", "rayquaza"],
    bad: ["snorlax", "magikarp"],
  },
  dragonite: {
    good: ["togepi", "lucario", "pikachu"],
    bad: ["mewtwo", "gengar"],
  },
  mewtwo: {
    good: ["rayquaza", "lucario"],
    bad: ["togepi", "magikarp"],
  },
  rayquaza: {
    good: ["mewtwo", "lucario", "ditto"],
    bad: ["togepi", "gengar"],
  },
  // wynaut: intentionally 없음
};
  // -----------------------------
  // 3) 질문(개) + 점수 매핑
  // -----------------------------
const QUESTIONS = [
  {
    title: "Q. 제일 풀고 싶은 문제는?",
    options: [
      { key: "A", text: "스타트 수상하게 생긴 거", points: [["gengar", 2], ["eevee", 1], ["ditto", 1]] },
      { key: "B", text: "재밌어 보이는 거", points: [["pikachu", 2], ["togepi", 1], ["snorlax", 1]] },
      { key: "C", text: "개간지 다이나믹", points: [["charizard", 2], ["mewtwo", 1], ["rayquaza", 1]] },
    ],
  },
  {
      title: "Q. 가장 인스스로 올리고 싶은 장면은?",
      options: [
        { key: "A", text: "같이 간 사람들과 찍은 사진", points: [["togepi", 2], ["pikachu", 1]] },
        { key: "B", text: "존버 크럭스 구간 제압 장면", points: [["lucario", 2], ["snorlax", 1]] },
        { key: "C", text: "허당짓 하고 다 같이 웃는 장면", points: [["magikarp", 2], ["gengar", 1], ["eevee", 1]] },
        { key: "D", text: "개쩌는 다이나믹 동작", points: [["charizard", 2], ["mewtwo", 1], ["rayquaza", 1]] },
      ],
  },
  {
      title: "Q. 내가 존버 중인 문제를 누가 쉽다고 하면?",
      options: [
        { key: "A", text: "주늑든다...🥲", points: [["togepi", 2], ["magikarp", 2]] },
        { key: "B", text: "누군지 찾아내서 뭐 푸는지 확인한다", points: [["rayquaza", 2], ["mewtwo", 1]] },
        { key: "C", text: "찾아서 어떻게 쉽게 풀었는지 물어본다", points: [["pikachu", 2],["ditto", 1], ["eevee", 1]] },
        { key: "D", text: "알빠노", points: [["snorlax", 2], ["gengar", 1],["wynaut",2]] },
      ],
  },
  {
    title: "Q. 가장 킹받는 사람",
    options: [
      { key: "A", text: "나한테 맞지 않는 베타 강요하는 사람",points: [["gengar", 2],["mewtwo", 2], ["eevee", 1], ["ditto", 1]],},
      { key: "B", text: "지 문제만 풀고 휘릭 가버리는 사람", points: [["togepi", 2], ["pikachu", 1],["dragonite",1]] },
      { key: "C", text: "개판으로 풀어서 열심히 알려줬더니 여전히 개판인 사람", points: [["rayquaza", 2], ["lucario", 1]] },
    ],
  },
    {
    title: "Q. 벽에 붙을 때",
    options: [
      { key: "A", text: "남들 푸는 거 보고 올라간다", points: [["ditto",2],["eevee",1],["togepi",1]] },
      { key: "B", text: "일단 붙어본다", points: [["charizard",2],["mewtwo",1],["gengar",1]] },
      { key: "C", text: "루트파인딩 충분히 하고 ㄱㄱ", points: [["lucario",2]] },
    ],
  },
  {
    title: "Q. 컨디션이 좋지 않으면?",
    options: [
      { key: "A", text: "그래도 한다", points: [["mewtwo",2],["lucario",2]] },
      { key: "B", text: "쉬운 거만 한다", points: [["eevee",2],["pikachu",1],["ditto",1]] },
      { key: "C", text: "다른 사람 봐준다", points: [["dragonite",2],["wynaut",1]] },
      { key: "D", text: "쉬어야지 암장을 왜 가", points: [["snorlax",2],["magikarp",2],["togepi",1]] },
    ],
  },
  {
    title: "Q. 가장 기분 좋은 순간은?",
    options: [
      { key: "A", text: "존버하던 문제 결국 깼을 때", points: [["mewtwo",2],["charizard",2],["ditto",1]] },
      { key: "B", text: "빡센 문제 완등하고 숨 찰 때", points: [["rayquaza",2],["lucario",2]] },
      { key: "C", text: "다른 사람이 내가 알려준 무브로 깼을 때", points: [["dragonite",2],["wynaut",1]] },
      { key: "D", text: "사람들이 뒤에서 응원해 줄 때", points: [["pikachu",2],["togepi",1]] },
    ],
  },
  {
    title: "Q. 실력보다 중요한 것은?",
    options: [
      { key: "A", text: "태도", points: [["dragonite",2],["wynaut",1]] },
      { key: "B", text: "재미", points: [["pikachu",2],["gengar",2],["charizard",1],["eevee",1],["togepi",1]] },
      { key: "C", text: "없다", points: [["mewtwo",2],["rayquaza",2],["lucario",2]] },
    ],
  },
  {
    title: "Q. 꼭 풀고 싶은 문제 30트째 떨어지고 있다면?",
    options: [
      { key: "A", text: "때려친다", points: [["eevee",2],["pikachu",1]] },
      { key: "B", text: "샤갈 될 때까지 한다", points: [["mewtwo",2],["charizard",2]] },
      { key: "C", text: "30트? 애초에 안한다", points: [["snorlax",2],["lucario",2],["wynaut",2],["magikarp",1]] },
      { key: "D", text: "제발 누가 알려주면 좋겠다", points: [["ditto",2],["togepi",2],["eevee",1]] },
    ],
  },
    {
    title: "Q. 누가 베타 조언해 주면?",
    options: [
      { key: "A", text: "안 듣는다", points: [["rayquaza", 2], ["gengar", 2]] },
      { key: "B", text: "내가 필요한 부분 참고만", points: [["wynaut", 2],["mewtwo", 2], ["snorlax", 1], ["dragonite", 1]] },
      { key: "C", text: "너무 고맙다", points: [["pikachu", 2], ["togepi", 2], ["eevee", 1], ["ditto", 1], ["magikarp", 1]] },
    ],
  },
];

  // -----------------------------
  // 0) 유틸
  // -----------------------------
  const show = (el) => el && el.classList.remove("hidden");
  const hide = (el) => el && el.classList.add("hidden");
  function splitNameAndType(nameStr) {
    const s = String(nameStr || "");
    const m = s.match(/^(.*)\((.*)\)\s*$/);
    if (!m) return { base: s, type: "" };
    return { base: m[1].trim(), type: m[2].trim() };
  }
  function fixedMatches(winnerId) {
    if (winnerId === "wynaut") return { good: [], bad: [] };
    const rule = COMPAT[winnerId] || { good: [], bad: [] };
    const good = (rule.good || []).map((id) => POKEMON.find((p) => p.id === id)).filter(Boolean);
    const bad  = (rule.bad  || []).map((id) => POKEMON.find((p) => p.id === id)).filter(Boolean);
    return { good, bad };
  }
  function renderFixedChips(target, list, emptyText = "-") {
    if (!target) return;
    target.innerHTML = "";
    if (!list || list.length === 0) {
      const chip = document.createElement("div");
      chip.className = "chip empty";
      chip.textContent = emptyText;
      target.appendChild(chip);
      return;
    }
    list.forEach((pokemon) => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.textContent = `${pokemon.emoji} ${pokemon.name}`;
      target.appendChild(chip);
    });
  }
  // -----------------------------
  // 4) DOM
  // -----------------------------
  const screenStart = document.querySelector("#screenStart");
  const screenQuiz = document.querySelector("#screenQuiz");
  const screenResult = document.querySelector("#screenResult");
  const qTotal = document.querySelector("#qTotal");
  const qTotal2 = document.querySelector("#qTotal2");
  if (qTotal) qTotal.textContent = QUESTIONS.length;
  if (qTotal2) qTotal2.textContent = QUESTIONS.length;
  const qIndex = document.querySelector("#qIndex");
  const qTitle = document.querySelector("#qTitle");
  const optionsWrap = document.querySelector("#options");
  const progressBar = document.querySelector("#progressBar");
  const btnStart = document.querySelector("#btnStart");
  const btnPrev = document.querySelector("#btnPrev");
  const btnNext = document.querySelector("#btnNext");
  const btnRestart = document.querySelector("#btnRestart");
  const btnResetTop = document.querySelector("#btnResetTop");
  const btnSaveCard = document.querySelector("#btnSaveCard");
  const btnCopy = document.querySelector("#btnCopy");
  if (btnCopy) btnCopy.remove();
  const resultEmoji = document.querySelector("#resultEmoji");
  const resultName = document.querySelector("#resultName");
  const resultOneLiner = document.querySelector("#resultOneLiner");
  const resultPokemonTraits = document.querySelector("#resultPokemonTraits");
  const resultClimberTraits = document.querySelector("#resultClimberTraits");
  const goodMatches = document.querySelector("#goodMatches");
  const badMatches = document.querySelector("#badMatches");
  const resultImg = document.querySelector("#resultImg");
  let current = 0;
  const answers = new Array(QUESTIONS.length).fill(null);

  // -----------------------------
  // 5) 화면 전환
  // -----------------------------
  function goStart() {
    current = 0;
    answers.fill(null);
    show(screenStart);
    hide(screenQuiz);
    hide(screenResult);
  }
  function goQuiz() {
    hide(screenStart);
    show(screenQuiz);
    hide(screenResult);
    render();
  }
  function goResult() {
    hide(screenStart);
    hide(screenQuiz);
    show(screenResult);
    renderResult();
    // injectBulkSaveButton();
    injectShareLinkButton();
  }
  function autoAdvance() {
    setTimeout(() => {
      if (current === QUESTIONS.length - 1) goResult();
      else {
        current += 1;
        render();
      }
    }, 120);
  }

  // -----------------------------
  // 6) 퀴즈 렌더
  // -----------------------------
  function render() {
    const q = QUESTIONS[current];
    if (qIndex) qIndex.textContent = String(current + 1);
    if (qTitle) qTitle.textContent = q.title;
    if (progressBar) {
      const pct = Math.round((current / Math.max(1, QUESTIONS.length - 1)) * 100);
      progressBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
    }
    if (!optionsWrap) return;
    optionsWrap.innerHTML = "";
    q.options.forEach((opt) => {
      const div = document.createElement("div");
      div.className = "option";
      if (answers[current] === opt.key) div.classList.add("selected");
      div.setAttribute("role", "button");
      div.setAttribute("tabindex", "0");
      div.innerHTML = `<div class="key">${opt.key}</div><div class="txt">${opt.text}</div>`;
      div.addEventListener("click", () => select(opt.key, true));
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select(opt.key, true);
        }
      });
      optionsWrap.appendChild(div);
    });
    if (btnPrev) btnPrev.disabled = current === 0;
    if (btnNext) {
      btnNext.disabled = answers[current] == null;
      btnNext.textContent = current === QUESTIONS.length - 1 ? "결과 보기" : "다음 →";
    }
  }

  function select(key, shouldAutoAdvance = false) {
    answers[current] = key;
    if (optionsWrap) {
      [...optionsWrap.children].forEach((c) => {
        const k = c.querySelector(".key")?.textContent;
        c.classList.toggle("selected", k === key);
      });
    }
    if (btnNext) btnNext.disabled = false;
    if (shouldAutoAdvance) autoAdvance();
  }

  // -----------------------------
  // 7) 점수/결과
  // -----------------------------
  function calcScores() {
    const score = emptyScore();
    answers.forEach((ansKey, idx) => {
      if (!ansKey) return;
      const opt = QUESTIONS[idx].options.find((o) => o.key === ansKey);
      if (!opt) return;
      (opt.points || []).forEach(([pid, pts]) => add(score, pid, pts));
    });
    return score;
  }
  function pickWinner(score) {
    let max = -Infinity;
    let winners = [];
    for (const id of ids) {
      const v = score[id] ?? 0;
      if (v > max) {
        max = v;
        winners = [id];
      } else if (v === max) {
        winners.push(id);
      }
    }
    if (winners.length === 1) return winners[0];
    const priority = [
      "magikarp","ditto","eevee","togepi","lucario","snorlax","pikachu","gengar","dragonite","charizard","mewtwo","rayquaza","wynaut",
    ];
    for (const p of priority) if (winners.includes(p)) return p;
    return winners[0];
  }
  function renderResult(forcedWinnerId = null) {
    const score = forcedWinnerId ? null : calcScores();
    const winnerId = forcedWinnerId || pickWinner(score);
    CURRENT_WINNER_ID = winnerId;
    const winner = POKEMON.find((p) => p.id === winnerId) || POKEMON[0];
    const { base: baseName, type: typeLabel } = splitNameAndType(winner.name);
    if (resultEmoji) resultEmoji.textContent = winner.emoji;
    if (resultName) {
      resultName.innerHTML = `
        <span class="r-name">${baseName}</span>
        ${typeLabel ? `<span class="r-chip r-chip-type">${typeLabel}</span>` : ""}
      `;
    }
    if (resultOneLiner) resultOneLiner.textContent = winner.oneLiner;
    if (resultPokemonTraits) {
      resultPokemonTraits.innerHTML = "";
      const colors = ["c1", "c2", "c3", "c4", "c5"];
      (winner.pokemonTraits || []).filter(Boolean).forEach((t) => {
        const li = document.createElement("li");
        li.className = `trait-chip ${colors[Math.floor(Math.random() * colors.length)]}`;
        li.textContent = t;
        resultPokemonTraits.appendChild(li);
      });
    }
    if (resultClimberTraits) {
      resultClimberTraits.innerHTML = "";
      (winner.climberTraits || []).filter(Boolean).forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        resultClimberTraits.appendChild(li);
      });
    }
    if (resultImg) {
      resultImg.style.display = "none";
      resultImg.onload = () => (resultImg.style.display = "block");
      resultImg.onerror = () => {
        resultImg.style.display = "none";
        resultImg.removeAttribute("src");
      };
      resultImg.src = DOODLE_PATH(winner.id);
    }
    const { good, bad } = fixedMatches(winnerId);
    renderFixedChips(goodMatches, good, "없음(전부 무난)");
    renderFixedChips(badMatches, bad, "없음(전부 수용)");
    if (btnSaveCard) btnSaveCard.dataset.winner = winnerId;
    return winnerId;
  }
  // -----------------------------
  // 8) 결과 저장
  // -----------------------------
  async function saveResultWithHeaderNoButtons(filename = "result.png") {
    const appHeader = document.querySelector(".header");
    const card = document.querySelector("#screenResult .card");
    if (!appHeader || !card) return alert("저장 불가");
    if (document.fonts?.ready) {
      try { await document.fonts.ready; } catch {}
    }
    const imgEl = document.querySelector("#resultImg");
    if (imgEl) imgEl.crossOrigin = "anonymous";
    if (imgEl && !imgEl.complete) {
      await new Promise((r) => {
        const done = () => { imgEl.onload = null; imgEl.onerror = null; r(); };
        imgEl.onload = done; imgEl.onerror = done;
      });
    }
    const temp = document.createElement("div");
    temp.style.position = "fixed";
    temp.style.left = "-99999px";
    temp.style.top = "0";
    temp.style.padding = "28px 18px 40px";
    temp.style.width = card.getBoundingClientRect().width + "px";
    temp.style.color = getComputedStyle(document.body).color;
    temp.style.fontFamily = getComputedStyle(document.body).fontFamily;
    const bodyStyle = getComputedStyle(document.body);
    temp.style.backgroundImage = bodyStyle.backgroundImage;
    temp.style.backgroundColor = bodyStyle.backgroundColor;
    const headerClone = appHeader.cloneNode(true);
    headerClone.querySelector(".sub")?.remove();
    const cardClone = card.cloneNode(true);
    cardClone.querySelectorAll(".nav").forEach((n) => n.remove());
    cardClone.querySelector("#cardCanvas")?.remove();
    cardClone.querySelector("#btnBulkSaveAll")?.remove();
    cardClone.querySelector("#btnShareLink")?.remove();
    temp.appendChild(headerClone);
    temp.appendChild(cardClone);
    document.body.appendChild(temp);
    try {
      const canvas = await html2canvas(temp, {
        backgroundColor: null,
        scale: Math.max(2, window.devicePixelRatio || 2),
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 1.0));
      if (!blob) return alert("이미지 변환 실패 🥲");
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2500);
    } catch (e) {
      console.error(e);
      alert("저장 실패 🥲");
    } finally {
      temp.remove();
    }
  }

  // -----------------------------
  // 9) 공유 링크 버튼(자동 삽입)
  // -----------------------------
  function injectShareLinkButton() {
    const nav = document.querySelector("#screenResult .nav");
    if (!nav) return;
    if (document.querySelector("#btnShareLink")) return;
    const btn = document.createElement("button");
    btn.id = "btnShareLink";
    btn.className = "btn";
    btn.textContent = "결과 링크 공유";
    btn.addEventListener("click", async () => {
      const winnerId = CURRENT_WINNER_ID;
      const url = `${location.origin}${location.pathname}?result=${winnerId}`;
      try {
        await navigator.clipboard.writeText(url);
        alert("결과 링크 복사 완료!");
      } catch {
        prompt("아래 링크 복사", url);
      }
    });
    nav.appendChild(btn);
  }
  function checkSharedResult() {
    const params = new URLSearchParams(location.search);
    const sharedId = params.get("result");
    if (!sharedId) return;
    const exists = POKEMON.some(p => p.id === sharedId);
    if (!exists) return;
    hide(screenStart);
    hide(screenQuiz);
    show(screenResult);
    renderResult(sharedId);
    // injectBulkSaveButton();
    injectShareLinkButton();
  }
  // -----------------------------
  // 10) 전체 저장 버튼 - 실제 페이지x
  // -----------------------------
  async function bulkSaveAllCardsSameFormat(options = {}) {
    const { prefix = "result", delayMs = 650 } = options;
    const targetIds = POKEMON.map((p) => p.id);
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const originalWinner = btnSaveCard?.dataset?.winner || CURRENT_WINNER_ID || "pikachu";
    for (let i = 0; i < targetIds.length; i++) {
      const id = targetIds[i];
      try {
        renderResult(id);
        await new Promise((r) => requestAnimationFrame(() => r()));
        await sleep(60);
        const appHeader = document.querySelector(".header");
        const card = document.querySelector("#screenResult .card");
        if (!appHeader || !card) throw new Error("캡처 대상 없음");
        if (document.fonts?.ready) {
          try { await document.fonts.ready; } catch {}
        }
        const imgEl = document.querySelector("#resultImg");
        if (imgEl) imgEl.crossOrigin = "anonymous";
        if (imgEl && !imgEl.complete) {
          await new Promise((r) => {
            const done = () => { imgEl.onload = null; imgEl.onerror = null; r(); };
            imgEl.onload = done; imgEl.onerror = done;
          });
        }
        const temp = document.createElement("div");
        temp.style.position = "fixed";
        temp.style.left = "-99999px";
        temp.style.top = "0";
        temp.style.padding = "28px 18px 40px";
        temp.style.width = card.getBoundingClientRect().width + "px";
        temp.style.color = getComputedStyle(document.body).color;
        temp.style.fontFamily = getComputedStyle(document.body).fontFamily;
        const bodyStyle = getComputedStyle(document.body);
        temp.style.backgroundImage = bodyStyle.backgroundImage;
        temp.style.backgroundColor = bodyStyle.backgroundColor;
        const headerClone = appHeader.cloneNode(true);
        headerClone.querySelector(".sub")?.remove();
        const cardClone = card.cloneNode(true);
        cardClone.querySelectorAll(".nav").forEach((n) => n.remove());
        cardClone.querySelector("#cardCanvas")?.remove();
        cardClone.querySelector("#btnBulkSaveAll")?.remove();
        cardClone.querySelector("#btnShareLink")?.remove();
        temp.appendChild(headerClone);
        temp.appendChild(cardClone);
        document.body.appendChild(temp);
        let blob;
        try {
          const canvas = await html2canvas(temp, {
            backgroundColor: null,
            scale: Math.max(2, window.devicePixelRatio || 2),
            useCORS: true,
            allowTaint: true,
            logging: false,
          });
          blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 1.0));
          if (!blob) throw new Error("toBlob 실패");
        } finally {
          temp.remove();
        }
        const filename = `${prefix}-${id}.png`;
        if (isIOS && navigator.canShare) {
          try {
            const file = new File([blob], filename, { type: "image/png" });
            if (navigator.canShare({ files: [file] })) {
              await navigator.share({ files: [file], title: filename });
              await sleep(Math.max(delayMs, 900));
              continue;
            }
          } catch (e) {
            console.warn("share failed/canceled:", e);
          }
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2500);
      } catch (e) {
        console.error("[bulkSameFormat] error:", id, e);
      }
      await sleep(delayMs);
    }
    renderResult(originalWinner);
    if (btnSaveCard) btnSaveCard.dataset.winner = originalWinner;
    alert(`일괄 저장 끝! (${targetIds.length}개)`);
  }
  function injectBulkSaveButton() {
    const nav = document.querySelector("#screenResult .nav");
    if (!nav) return;
    if (document.querySelector("#btnBulkSaveAll")) return;
    const btn = document.createElement("button");
    btn.id = "btnBulkSaveAll";
    btn.className = "btn";
    btn.textContent = "모든 결과 카드 저장(1회성)";
    btn.addEventListener("click", async () => {
      await bulkSaveAllCardsSameFormat({ delayMs: 650 });
    });
    nav.appendChild(btn);
  }

  // -----------------------------
  // 11) 이벤트
  // -----------------------------
  btnStart?.addEventListener("click", goQuiz);
  btnPrev?.addEventListener("click", () => {
    if (current > 0) {
      current -= 1;
      render();
    }
  });
  btnNext?.addEventListener("click", () => {
    if (answers[current] == null) return;
    if (current === QUESTIONS.length - 1) goResult();
    else {
      current += 1;
      render();
    }
  });
  btnRestart?.addEventListener("click", () => {
    history.replaceState({}, "", location.pathname);
    goStart();
  });
  btnResetTop?.addEventListener("click", () => {
    history.replaceState({}, "", location.pathname);
    goStart();
  });
  btnSaveCard?.addEventListener("click", async () => {
    const winnerId = btnSaveCard.dataset.winner || CURRENT_WINNER_ID || "pikachu";
    await saveResultWithHeaderNoButtons(`${winnerId}-result.png`);
  });
  document.addEventListener("DOMContentLoaded", () => {
    checkSharedResult();
    if (!new URLSearchParams(location.search).get("result")) goStart();
  });
})();
