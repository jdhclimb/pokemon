// app.js
(() => {
  const DOODLE_PATH = (id) => `assets/doodles/${id}.png`;
  let CURRENT_WINNER_ID = "pikachu";
  let IS_SAVING = false;

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
      climberTraits: ["컨디션 영향 큼","압박 주면 위축됨","안 풀리면 벽이 괜히 미워짐","응원 받으면 급성장","주변에서 자연스럽게 챙겨줌"],
    },
    {
      id: "magikarp",
      name: "잉어킹(끈기형)",
      emoji: "🐟",
      oneLiner: "“못 풀어도 괜찮지 뭐”",
      pokemonTraits: ["욕심 없음", "꾸준함", "단단한 멘탈"],
      climberTraits: ["완등 집착 없음","전체적인 템포가 느긋함","벽에 붙어 있을 때도 가끔 딴 생각함","엉뚱한 순간 성공함","가끔 매트에서 팔딱거림"],
    },
    {
      id: "eevee",
      name: "이브이(탐색형)",
      emoji: "🧬",
      oneLiner: "“이것도 재밌다!”",
      pokemonTraits: ["성장 중", "호기심","유동적"],
      climberTraits: ["새로운 무브 욕심 있음","다양한 풀이 좋아함","때에 따라 스타일 달라짐","정답보다는 “이렇게도 가능해”에 관심이 더 감","“잘 하는 것”보다는 “새로운 시도”에 끌리는 편"],
    },
    {
      id: "ditto",
      name: "메타몽(유동형)",
      emoji: "🔁",
      oneLiner: "“아까 이렇게 하던데, 오 됐다!”",
      pokemonTraits: ["적응력 빠름", "수용적", "관찰력 좋음"],
      climberTraits: ["뒤에서 INPUT 넣는대로 OUTPUT 나옴","베타 시연 보면 바로 흡수","나도 가끔 내가 이걸 어떻게 풀었는지 모를 때가 있음","가끔 자세가 수상해짐","나보다 잘하는 사람 있으면 효율 올라감"],
    },
    {
      id: "gengar",
      name: "팬텀(변칙형)",
      emoji: "👻",
      oneLiner: "“ㅋㅋㅋ이게 되눙”",
      pokemonTraits: ["장난기", "자유로움", "창의력 과다"],
      climberTraits: ["정석보다 변칙 무브에 손이 먼저 감","나만의 베타 추구","재밌는 게 좋음","지금 당장 필요한 조언 아니면 안 들음","실패하면 “안타까운거지 뭐~” 하고 넘어감"],
    },
    {
      id: "pikachu",
      name: "피카츄(활력형)",
      emoji: "⚡",
      oneLiner: "“오늘도 암장에 전기 공급하러 왔습니다.”",
      pokemonTraits: ["분위기메이커", "들찍장인", "간식 요정"],
      climberTraits: ["같이 잘되면 그게 제일 큰 행클","즐기는 게 목표","나이스 타이밍 기가 맥힘","남 성공이 곧 내 도파민","응원하다가 본인도 각성함"],
    },
    {
      id: "snorlax",
      name: "잠만보(회복형)",
      emoji: "😴",
      oneLiner: "“나 지쳤어…(음 이건 재밌어보이는데...)”",
      pokemonTraits: ["느긋함", "안정감", "Zzz..."],
      climberTraits: ["쉬는 시간 충분히 가져감","위험해 보이면 패스","다이나믹 잘하는데 안 함","말은 지쳤다 하는데 어느새 뭘 또 풀고 옴","체력 대비 재미 없는 문제는 패스"],
    },
    {
      id: "lucario",
      name: "루카리오(스태틱형)",
      emoji: "🥋",
      oneLiner: "“강해질 수 있다.”",
      pokemonTraits: ["원칙주의", "침착함", "신뢰형"],
      climberTraits: ["다이나믹한 무브보다 스태틱 선호","기본기 중시","컨디션 기복이 적음","단기간 성과보다 장기 성장형","완등도 중요하지만 무브 퀄리티도 중요함"],
    },
    {
      id: "charizard",
      name: "리자몽(다이나믹형)",
      emoji: "🔥",
      oneLiner: "“오늘도 함 뛰어볼까”",
      pokemonTraits: ["대담함", "도파민 중독자", "자신감"],
      climberTraits: ["일단 붙어봄","어려운 구간이 있어야 재미를 느낌","무브 화려한 문제에 눈 돌아감","성공하면 레전드","깁스 푼 지 얼마 안됐거나 깁스 중이거나 깁스할 예정"],
    },
    {
      id: "dragonite",
      name: "망나뇽(수호자형)",
      emoji: "🐉",
      oneLiner: "“너는 이렇게 가는 게 더 쉬울 거 같은데?”",
      pokemonTraits: ["상냥함", "책임감", "안정감"],
      climberTraits: ["은둔 고수","무브 이해도 높음","엄격하거나 다그치기보다는 제안하는 편","나이스 받는 것도 좋지만 나이스 외쳐주는 것도 행복함","알려준 무브로 남이 성공하면 내가 푼 것처럼 뿌듯함"],
    },
    {
      id: "mewtwo",
      name: "뮤츠(투지형)",
      emoji: "🧠",
      oneLiner: "“될 때까지 트라이.”",
      pokemonTraits: ["냉철함", "독립적", "기준 높음"],
      climberTraits: ["풀고 싶은 문제 생기면 집착","내 문제 푸는 게 더 급함","안 되면 오기 제대로 올라옴","같이 간 사람 유기함","꽂힌 문제 풀고 나면 친절해짐"],
    },
    {
      id: "rayquaza",
      name: "레쿠쟈(초월자형)",
      emoji: "🌌",
      oneLiner: "“그건 왜 그렇게 해?”",
      pokemonTraits: ["기준 높음", "효율 집착", "카리스마"],
      climberTraits: ["실력 최상급, 기준점 역할","더 이상 건강이 목적이 아님","다들 크럭스라는데 어디인지 못 찾겠음","비꼬는 게 아니라 진심으로 왜 못하는지 궁금할 때 있음","루트 뚫어버려서 세터가 임펙 들고오게 함"],
    },
    {
      id: "wynaut",
      name: "마자용(고인물형)",
      emoji: "🤡",
      oneLiner: "“클라이밍? 재밌나? 그냥 하는 거지...”",
      pokemonTraits: ["해탈", "관대함", "무던함"],
      climberTraits: ["안전 관련되면 엄격해짐","다 내려놓은 고인물","등반에 큰 감정 기복 없음","성장 중인 사람보면 기분이 묘함","가끔 도파민 터지면 ‘아… 아직 설레네’ 싶어짐"],
    },
  ];

  const ids = POKEMON.map((p) => p.id);
  const emptyScore = () => Object.fromEntries(ids.map((id) => [id, 0]));
  const add = (score, id, pts) => (score[id] = (score[id] || 0) + pts);

  // -----------------------------
  // 2) 궁합
  // -----------------------------
  const COMPAT = {
    togepi: { good: ["dragonite", "pikachu"], bad: ["mewtwo", "rayquaza"] },
    magikarp: { good: ["snorlax", "eevee"], bad: ["mewtwo", "rayquaza"] },
    eevee: { good: ["gengar", "ditto"], bad: ["mewtwo", "lucario"] },
    ditto: { good: ["dragonite", "lucario"], bad: ["snorlax", "mewtwo"] },
    gengar: { good: ["pikachu", "eevee"], bad: ["lucario", "rayquaza"] },
    pikachu: { good: ["charizard", "togepi"], bad: ["mewtwo"] },
    snorlax: { good: ["magikarp", "dragonite"], bad: ["charizard", "mewtwo"] },
    lucario: { good: ["dragonite", "mewtwo"], bad: ["gengar", "charizard"] },
    charizard: { good: ["pikachu", "rayquaza"], bad: ["snorlax", "lucario"] },
    dragonite: { good: ["togepi", "ditto"], bad: ["gengar"] },
    mewtwo: { good: ["rayquaza", "charizard"], bad: ["togepi", "pikachu"] },
    rayquaza: { good: ["mewtwo", "charizard"], bad: ["togepi", "gengar"] },
    // wynaut 없음
  };

  // -----------------------------
  // 3) 질문 + 점수
  // -----------------------------
  const QUESTIONS = [
    {
      title: "Q1. 제일 풀고 싶은 문제는?",
      options: [
        { key: "A", text: "수상하게 생긴 거(누워서 시작, 합손 금지 등)", points: [["gengar", 2], ["eevee", 2], ["mewtwo", 1]] },
        { key: "B", text: "할 만하게 생긴 재밌는 거", points: [["pikachu", 2], ["togepi", 1], ["snorlax", 1], ["ditto", 1]] },
        { key: "C", text: "개간지 다이나믹", points: [["charizard", 2], ["dragonite", 2], ["lucario", -1]] },
      ],
    },
    {
      title: "Q2. 벽에 붙을 때",
      options: [
        { key: "A", text: "카탈로그/남들 푸는 거 보고 올라간다", points: [["ditto", 2], ["togepi", 1]] },
        { key: "B", text: "일단 붙어본다", points: [["charizard", 2], ["snorlax", 1], ["gengar", 1]] },
        { key: "C", text: "루트파인딩 충분히 하고 ㄱㄱ", points: [["lucario", 2], ["eevee", 1]] },
      ],
    },
    {
      title: "Q3. 제일 잘 될 때는?",
      options: [
        { key: "A", text: "사람들이 나이스 외쳐줄 때", points: [["pikachu", 2], ["togepi", 1]] },
        { key: "B", text: "혼자 집중해서 풀 수 있을 때", points: [["lucario", 2], ["mewtwo", 1], ["pikachu", -1]] },
        { key: "C", text: "옆에서 베타 알려주는 사람이 있을 때", points: [["ditto", 2], ["eevee", 1]] },
        { key: "D", text: "몰?루? 갑자기 될 때 있음", points: [["wynaut", 2], ["magikarp", 1], ["snorlax", 1], ["gengar", 1]] },
      ],
    },
    {
      title: "Q4. 누가 베타 조언해 주면?",
      options: [
        { key: "A", text: "안 듣는다", points: [["gengar", 2], ["rayquaza", 1]] },
        { key: "B", text: "내가 필요한 부분 참고만", points: [["mewtwo", 1], ["lucario", 1], ["ditto", 1], ["eevee", 1]] },
        { key: "C", text: "너무 고맙다", points: [["togepi", 1], ["pikachu", 1], ["dragonite", 2], ["gengar", -1]] },
      ],
    },
    {
      title: "Q5. 가장 인스스 올리고 싶은 장면은?",
      options: [
        { key: "A", text: "존버 크럭스 구간 제압 장면", points: [["rayquaza", 2], ["snorlax", 1], ["dragonite", 1]] },
        { key: "B", text: "허당짓 하고 다 같이 웃는 장면", points: [["pikachu", 2], ["togepi", 1], ["rayquaza", -1]] },
        { key: "C", text: "화려한 다이나믹 동작", points: [["charizard", 2], ["eevee", 1], ["dragonite", 1]] },
      ],
    },
    {
      title: "Q6. 꼭 풀고 싶은 문제 30트째 떨어지고 있다면?",
      options: [
        { key: "A", text: "때려친다", points: [["snorlax", 2], ["magikarp", 1]] },
        { key: "B", text: "샤갈! 오늘은 너다. 될 때까지 ㄱㄱ", points: [["mewtwo", 2], ["lucario", 1]] },
        { key: "C", text: "30트...해본 적 없는데?", points: [["togepi", 2], ["magikarp", 1]] },
        { key: "D", text: "제발 누가 알려주면 좋겠다", points: [["ditto", 2], ["eevee", 1]] },
      ],
    },
    {
      title: "Q7. 컨디션이 좋지 않으면?",
      options: [
        { key: "A", text: "그래도 해야지", points: [["mewtwo", 2], ["rayquaza", 2]] },
        { key: "B", text: "쉬엄쉬엄~ 나이스~ 응원도 하고~", points: [["pikachu", 2], ["togepi", 1], ["ditto", 1]] },
        { key: "C", text: "쉬어야지 암장을 왜 가", points: [["snorlax", 2], ["magikarp", 2], ["rayquaza", -1], ["mewtwo", -1]] },
      ],
    },
    {
      title: "Q8. 가장 기분 좋은 순간은?",
      options: [
        { key: "A", text: "존버하던 문제 결국 깼을 때", points: [["mewtwo", 2], ["charizard", 2], ["ditto", 1]] },
        { key: "B", text: "빡센 문제 완등하고 숨 찰 때", points: [["rayquaza", 2], ["lucario", 2]] },
        { key: "C", text: "다른 사람이 내가 알려준 무브로 깼을 때", points: [["dragonite", 2], ["wynaut", 1]] },
      ],
    },
    {
      title: "Q9. 암장에서 제일 위축되는 순간은?",
      options: [
        { key: "A", text: "괜히 나만 못하는 느낌 들 때", points: [["togepi", 2], ["magikarp", 1]] },
        { key: "B", text: "옆에서 계속 보고 있는데 안 풀릴 때", points: [["snorlax", 1], ["charizard", 1], ["eevee", 1]] },
        { key: "D", text: "딱히 없음", points: [["wynaut", 1], ["rayquaza", 1]] },
      ],
    },
    {
      title: "Q10. 나를 기분 좋게 하는 한마디",
      options: [
        { key: "A", text: "너랑 오니까 너무 재밌다!", points: [["pikachu", 2], ["togepi", 1]] },
        { key: "B", text: "덕분에 풀었다 고마워!", points: [["dragonite", 2], ["mewtwo", 1]] },
        { key: "C", text: "실력 왤케 늘었어", points: [["lucario", 2], ["mewtwo", 1], ["eevee", 1]] },
        { key: "D", text: "저게 왜 되누", points: [["gengar", 2], ["rayquaza", 1]] },
      ],
    },
    {
      title: "Q11. 가장 빡치는 순간",
      options: [
        { key: "A", text: "안 물어봤는데 베타 강요할 때", points: [["gengar", 2], ["lucario", 1]] },
        { key: "B", text: "집중하고 싶은데 자꾸 말 걸 때", points: [["rayquaza", 2], ["mewtwo", 1], ["snorlax", 1]] },
        { key: "C", text: "딱히 없음… 걍 그런갑다 함", points: [["wynaut", 2], ["magikarp", 2]] },
      ],
    },
    {
      title: "Q12. 클라이밍을 계속 하는 이유?",
      options: [
        { key: "A", text: "도파민", points: [] },
        { key: "B", text: "성장하는 게 재밌어서", points: [["eevee", 2]] },
        { key: "C", text: "글쎄...그냥?", points: [["wynaut", 2], ["magikarp", 2], ["snorlax", 1]] },
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

  async function wait2Frames() {
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
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
    bindShareLinkButton();
    bindSaveCardButton(); // ✅ 버튼 씹힘 방지
  }

  // ✅ 마지막 문항만 “자동 다음/결과” 금지
  function autoAdvance() {
    setTimeout(() => {
      const last = QUESTIONS.length - 1;
      if (current >= last) return; // 마지막은 자동 이동 X
      current += 1;
      render();
    }, 120);
  }

  // -----------------------------
  // 6) 퀴즈 렌더
  // -----------------------------
  function render() {
    const q = QUESTIONS[current];
    const last = QUESTIONS.length - 1;

    if (qIndex) qIndex.textContent = String(current + 1);
    if (qTitle) qTitle.textContent = q.title;

    if (progressBar) {
      const pct = Math.round((current / Math.max(1, last)) * 100);
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

      const shouldAuto = current !== last; // ✅ 마지막 문항만 false
      div.addEventListener("click", () => select(opt.key, shouldAuto));
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select(opt.key, shouldAuto);
        }
      });

      optionsWrap.appendChild(div);
    });

    if (btnPrev) btnPrev.disabled = current === 0;

    if (btnNext) {
      btnNext.disabled = answers[current] == null;
      btnNext.textContent = current === last ? "결과 보기" : "다음 →";
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
      // 로딩 안정
      resultImg.style.display = "none";
      resultImg.onload = () => (resultImg.style.display = "block");
      resultImg.onerror = () => {
        resultImg.style.display = "none";
        resultImg.removeAttribute("src");
      };
      resultImg.crossOrigin = "anonymous";
      resultImg.src = DOODLE_PATH(winner.id);
    }

    const { good, bad } = fixedMatches(winnerId);
    renderFixedChips(goodMatches, good, "없음(전부 무난)");
    renderFixedChips(badMatches, bad, "없음(전부 수용)");

    // ✅ 저장 버튼에 winner 박아두기
    const btnSave = document.querySelector("#btnSaveCard");
    if (btnSave) btnSave.dataset.winner = winnerId;

    return winnerId;
  }

  // -----------------------------
  // 8) 공유 링크
  // -----------------------------
  function bindShareLinkButton() {
    const btn = document.querySelector("#btnShareLink");
    if (!btn) return;
    if (btn.dataset.bound === "1") return;
    btn.dataset.bound = "1";

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
  }

  function checkSharedResult() {
    const params = new URLSearchParams(location.search);
    const sharedId = params.get("result");
    if (!sharedId) return;

    const exists = POKEMON.some((p) => p.id === sharedId);
    if (!exists) return;

    hide(screenStart);
    hide(screenQuiz);
    show(screenResult);

    renderResult(sharedId);
    bindShareLinkButton();
    bindSaveCardButton(); // ✅ 공유로 들어와도 저장 버튼 씹힘 방지
  }

  // -----------------------------
  // 9) PNG 저장 (원하는 “두번째 사진” 스타일)
  // - 결과 카드 전체(텍스트+칩+궁합) 저장
  // - 버튼(nav) / footer 제외
  // -----------------------------
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  function isKakaoInApp() {
    return /KAKAOTALK/i.test(navigator.userAgent);
  }

  async function saveBlob(blob, filename) {
    // iOS: share로 저장 유도
    if (isIOS() && navigator.canShare) {
      try {
        const file = new File([blob], filename, { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: filename });
          return true;
        }
      } catch (e) {
        console.warn("share failed:", e);
      }
    }

    // 일반: 다운로드
    try {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2500);
      return true;
    } catch (e) {
      console.warn("download failed:", e);
    }

    // 카톡 iOS webview fallback: 이미지 화면 띄우기
    try {
      const dataUrl = await new Promise((resolve) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result);
        r.readAsDataURL(blob);
      });

      if (isKakaoInApp()) location.href = dataUrl;
      else window.open(dataUrl, "_blank", "noopener,noreferrer");

      alert("이미지 뜨면 길게 눌러서 ‘사진 저장’ ㄱㄱ");
      return true;
    } catch (e) {
      console.error("fallback failed:", e);
      alert("저장 실패 🥲 사파리로 열어서 저장해줘!");
      return false;
    }
  }

  function cloneResultCardWithoutButtons() {
    const card = document.querySelector("#screenResult .card");
    if (!card) return null;

    const cardClone = card.cloneNode(true);
    // 버튼 영역 제거
    cardClone.querySelectorAll(".nav").forEach((n) => n.remove());
    // 캔버스 제거(혹시 남아있으면)
    cardClone.querySelector("#cardCanvas")?.remove();

    return cardClone;
  }

  async function saveResultCardPNG(filename = "result.png") {
    const mount = document.querySelector("#exportMount");
    if (!mount) return alert("저장 불가 🥲");

    const cardClone = cloneResultCardWithoutButtons();
    if (!cardClone) return alert("저장 불가 🥲");

    // mount 초기화
    mount.innerHTML = "";

    // ✅ 캡처용 wrapper
    const wrap = document.createElement("div");
    Object.assign(wrap.style, {
      position: "fixed",
      left: "-99999px",
      top: "0",
      padding: "0",
      margin: "0",
      pointerEvents: "none",
    });

    // ✅ “두번째 사진”처럼 카드만 깔끔하게
    // body 배경은 그대로 두고, 카드만 렌더
    const bodyStyle = getComputedStyle(document.body);
    wrap.style.backgroundImage = bodyStyle.backgroundImage;
    wrap.style.backgroundColor = bodyStyle.backgroundColor || "#0b0f19";

    // clone 카드 폭은 실제 카드 폭 따라가게 (모바일에서도 “보이는 그대로” 느낌)
    Object.assign(cardClone.style, {
      width: "100%",
      margin: "0",
    });

    wrap.appendChild(cardClone);
    mount.appendChild(wrap);

    // 렌더 타이밍 보장
    await wait2Frames();
    if (document.fonts?.ready) {
      try { await document.fonts.ready; } catch {}
    }

    // 결과 이미지 로딩 대기
    const liveImg = document.querySelector("#resultImg");
    if (liveImg && !liveImg.complete) {
      await new Promise((r) => {
        const done = () => { liveImg.onload = null; liveImg.onerror = null; r(); };
        liveImg.onload = done; liveImg.onerror = done;
      });
    }

    try {
      const canvas = await html2canvas(wrap, {
        backgroundColor: null,
        scale: Math.max(2, window.devicePixelRatio || 2),
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 1.0));
      if (!blob) return alert("이미지 변환 실패 🥲");

      await saveBlob(blob, filename);
    } catch (e) {
      console.error(e);
      alert("저장 실패 🥲");
    } finally {
      mount.innerHTML = "";
    }
  }

  // ✅ 저장 버튼 씹힘 방지: 버튼 교체 + 저장 중 잠금
  function bindSaveCardButton() {
    const oldBtn = document.querySelector("#btnSaveCard");
    if (!oldBtn) return;

    const btn = oldBtn.cloneNode(true);
    oldBtn.parentNode.replaceChild(btn, oldBtn);

    btn.addEventListener("click", async (e) => {
      e.preventDefault();

      if (IS_SAVING) return;
      IS_SAVING = true;

      const prevText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "저장 중…";

      try {
        const winnerId = btn.dataset.winner || CURRENT_WINNER_ID || "pikachu";
        await saveResultCardPNG(`${winnerId}-result.png`);
      } finally {
        IS_SAVING = false;
        btn.disabled = false;
        btn.textContent = prevText;
      }
    });
  }

  // -----------------------------
  // 10) 이벤트
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
    const last = QUESTIONS.length - 1;
    if (current === last) goResult();
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

  document.addEventListener("DOMContentLoaded", () => {
    checkSharedResult();
    if (!new URLSearchParams(location.search).get("result")) goStart();
  });
})();
