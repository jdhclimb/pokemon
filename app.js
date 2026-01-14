// app.js (최종) - 11문항 + 17포켓몬 타입(맞아용 포함)
// - 선택지 클릭/엔터 선택 시 자동 다음 문항 이동(마지막이면 결과로)
// - 결과 화면에 투명 PNG(assets/doodles/{id}.png) 표시
// - 결과 카드 저장(PNG) 레이아웃: 카드 높이 안에서 자동 맞춤(넘치면 이미지/리스트 높이 줄임)

(() => {
  const DOODLE_PATH = (id) => `assets/doodles/${id}.png`;

  // -----------------------------
  // 1) 포켓몬 타입(17)
  // -----------------------------
  const POKEMON = [
    {
      id: "togepi",
      name: "토게피(감정형)",
      emoji: "🍀",
      oneLiner: "“나 조금만 이따 하께...”",
      pokemonTraits: ["긴장 잘 함", "응원 버프 큼", "보호본능 유발"],
      climberTraits: [
        "컨디션 영향 큼",
        "압박 주면 위축",
        "안 풀리면 벽이 괜히 밉다",
        "응원 받으면 급성장",
        "주변에서 많이 챙겨줌",
      ],
    },
    {
      id: "magikarp",
      name: "잉어킹(끈기형)",
      emoji: "🐟",
      oneLiner: "“못 풀어도 괜찮지 뭐”",
      pokemonTraits: ["욕심 없음", "꾸준함", "단단한 멘탈"],
      climberTraits: [
        "완등 집착 없음",
        "",
        "실패 후 재도전 빠름",
        "속도는 느림",
        "붙는 순간엔 최선",
      ],
    },
    {
      id: "treecko",
      name: "나무지기(재능형)",
      emoji: "🌿",
      oneLiner: "“머리로는 모르겠고, 일단 붙어볼게”",
      pokemonTraits: ["감각적", "실행 빠름", "자신감"],
      climberTraits: [
        "실전형(붙어봐야 앎)",
        "몸 사용 능숙",
        "기본기 약한 편",
        "수행력 높음",
        "기술명 몰라도 본능 활용",
      ],
    },
    {
      id: "eevee",
      name: "이브이(탐색형)",
      emoji: "🧬",
      oneLiner: "“이렇게도… 저렇게도 되네?”",
      pokemonTraits: ["유연함", "호기심", "실험적"],
      climberTraits: [
        "스타일 전환 잦음",
        "무브 실험 많음",
        "무난한 수행력",
        "문제마다 접근 다름",
        "본캐 탐색 중",
      ],
    },
    {
      id: "psyduck",
      name: "고라파덕(각성형)",
      emoji: "🦆",
      oneLiner: "“어? 방금 왜 됐지?”",
      pokemonTraits: ["멍함", "기복 큼", "잠재력 큼"],
      climberTraits: [
        "평소엔 불안정",
        "가끔 폼 폭발",
        "설명 잘 못함",
        "감각 의존",
        "엉뚱한 순간 성공",
      ],
    },
    {
      id: "ditto",
      name: "메타몽(유동형)",
      emoji: "🔁",
      oneLiner: "“아 그거? 이렇게 하는 거지?”",
      pokemonTraits: ["적응형", "수용적", "의존적"],
      climberTraits: [
        "파트너 영향 큼",
        "앞사람 무브 복사",
        "답지 있으면 수행력 높음",
        "창의성 낮음",
        "환경 따라 성능 변화",
      ],
    },
    {
      id: "gengar",
      name: "팬텀(변칙형)",
      emoji: "👻",
      oneLiner: "“정석 말고 이렇게 가면 안 돼?”",
      pokemonTraits: ["장난기", "자유로움", "창의적"],
      climberTraits: [
        "변칙 무브 선호",
        "나만의 베타 추구",
        "정답보다 재미 중시",
        "성공하면 화려",
        "실패도 쿨함",
      ],
    },
    {
      id: "pikachu",
      name: "피카츄(성장형)",
      emoji: "⚡",
      oneLiner: "“와 클라이밍 개재밌다”",
      pokemonTraits: ["열정적", "밝음", "사교적"],
      climberTraits: [
        "성장 속도 빠름",
        "암장 투어 좋아함",
        "두루두루 원만",
        "초반 텐션 높음",
        "방전도 빠름",
      ],
    },
    {
      id: "snorlax",
      name: "잠만보(회복형)",
      emoji: "😴",
      oneLiner: "“나 지쳤어…(근데 또 함)”",
      pokemonTraits: ["느긋함", "안정감", "인내심"],
      climberTraits: [
        "쉬는 시간 김",
        "위험해 보이면 패스",
        "스태틱 문제에서 빛남",
        "무리 안 함",
        "말은 지쳤다… 근데 해냄",
      ],
    },
    {
      id: "espeon",
      name: "에브이(집중형)",
      emoji: "🔮",
      oneLiner: "“잠깐만, 생각 좀 하고 갈게”",
      pokemonTraits: ["침착함", "분석적", "몰입형"],
      climberTraits: [
        "루트파인딩 열심히",
        "조용할수록 강함",
        "이해되면 바로 완등",
        "방해에 취약",
        "혼자 트라이 선호",
      ],
    },
    {
      id: "lucario",
      name: "루카리오(정석형)",
      emoji: "🥋",
      oneLiner: "“기본이 제일 세”",
      pokemonTraits: ["원칙적", "단단함", "신뢰형"],
      climberTraits: [
        "정석 무브 선호",
        "다이나믹도 스태틱화",
        "기본기 중시",
        "완등률 안정",
        "기준점 역할",
      ],
    },
    {
      id: "charizard",
      name: "리자몽(다이나믹형)",
      emoji: "🔥",
      oneLiner: "“이건 날아야지”",
      pokemonTraits: ["대담함", "공격적", "자신감"],
      climberTraits: [
        "다이나믹 무브 사랑",
        "리스크 겁 적음",
        "성공하면 레전드",
        "실패도 많은 편",
        "하이라이트 제조기",
      ],
    },
    {
      id: "dragonite",
      name: "망나뇽(수호자형)",
      emoji: "🐉",
      oneLiner: "“너한텐 이렇게 가는 게 좋아”",
      pokemonTraits: ["상냥함", "책임감", "안정감"],
      climberTraits: [
        "타인 무브 이해도 높음",
        "맞춤 해답 제시",
        "코칭 능력 우수",
        "실력 있는 강자",
        "남 완등에 진심",
      ],
    },
    {
      id: "mewtwo",
      name: "뮤츠(집착형)",
      emoji: "🧠",
      oneLiner: "“이거 오늘 끝내야지”",
      pokemonTraits: ["냉철함", "독립적", "기준 높음"],
      climberTraits: [
        "꽂히면 집착",
        "솔플 선호",
        "물어보면 친절",
        "먼저 나서진 않음",
        "내 운동 우선",
      ],
    },
    {
      id: "rayquaza",
      name: "레쿠쟈(초월자형)",
      emoji: "🌌",
      oneLiner: "“그건 왜 그렇게 해?”",
      pokemonTraits: ["기준 높음", "효율 집착", "카리스마"],
      climberTraits: [
        "클라이밍=삶",
        "비효율에 민감",
        "답 알려주고 안 따르면 답답",
        "실력 최상급",
        "기준점 역할",
      ],
    },
    {
      id: "jirachi",
      name: "자라치(기적형)",
      emoji: "⭐",
      oneLiner: "“지금이야!”",
      pokemonTraits: ["잠잠함", "타이밍형", "따뜻함"],
      climberTraits: [
        "반짝이는 순간 존재",
        "사람에 진심",
        "응원해주는 걸 좋아함",
        "남이 풀면 덩달아 신남",
        "결정적 한마디로 흐름 전환",
      ],
    },
    {
      id: "wynaut",
      name: "맞아용(완충형)",
      emoji: "🤡",
      oneLiner: "“……(다 이해함)”",
      pokemonTraits: ["해탈", "관대함", "무던함"],
      climberTraits: [
        "고인물",
        "다칠 짓만 아니면 OK",
        "사람이 화나게 해도 무덤덤",
        "분위기 완충재",
        "뭐든 수용",
      ],
    },
  ];

  const ids = POKEMON.map((p) => p.id);
  const emptyScore = () => Object.fromEntries(ids.map((id) => [id, 0]));
  const add = (score, id, pts) => (score[id] = (score[id] || 0) + pts);

  // -----------------------------
  // 2) 궁합(고정 1쌍) - 맞아용은 없음
  // -----------------------------
  const COMPAT = {
    // good: 해당 타입에게 긍정 영향 / bad: 해당 타입에게 부정 영향
    togepi: { good: "dragonite", bad: "mewtwo" },
    magikarp: { good: "snorlax", bad: "charizard" },
    treecko: { good: "dragonite", bad: "lucario" },
    eevee: { good: "ditto", bad: "mewtwo" },
    psyduck: { good: "gengar", bad: "espeon" },
    ditto: { good: "eevee", bad: "rayquaza" },
    gengar: { good: "pikachu", bad: "lucario" },
    pikachu: { good: "gengar", bad: "mewtwo" },
    snorlax: { good: "magikarp", bad: "charizard" },
    espeon: { good: "dragonite", bad: "psyduck" },
    lucario: { good: "dragonite", bad: "gengar" },
    charizard: { good: "psyduck", bad: "snorlax" },
    dragonite: { good: "togepi", bad: "charizard" },
    mewtwo: { good: "espeon", bad: "togepi" },
    rayquaza: { good: "jirachi", bad: "ditto" },
    jirachi: { good: "rayquaza", bad: "charizard" },
    // wynaut: 없음
  };

  // -----------------------------
  // 3) 질문(11개) + 점수 매핑
  //   - 기존 문항 텍스트는 대부분 유지
  //   - 17마리 모두 점수에 등장하도록 재배치
  // -----------------------------
  const QUESTIONS = [
    {
      title: "Q1. 다음 중 가장 싫은 상황은?",
      options: [
        {key: "A", text: "될 거 같은데 아주 작은 차이로 계속 같은 구간에서 실패 중일 때",points: [["mewtwo", 1],["lucario", 1],["snorlax", -1]]},
        {key: "B",text: "존버하던 문제를 실력 더 안 좋은 사람이 먼저 깰 때",points: [["mewtwo", 1],["rayquaza", 2], ["jirachi", -1]]},
        {key: "C",text: "존버하던 문제를 누군가 리치로 뜯어갈 때",points: [["gengar", 1],["treecko", 1],["lucario", -1]]},
        {key: "D",text: "내 그레이드 문제를 많이 풀었는데 막상 뿌무는 없을 때",points: [["pikachu", 1],["eevee", 1],["rayquaza", -1]]},
        { key: "E", text: "암장에서 불편한 사람이랑 마주쳤을 때",points: [["togepi", +1], ["jirachi", +1], ["rayquaza", -1]] },
      ],
    },
    {
      title: "Q2. 다른 사람한테 들었을 때 제일 기분 좋은 말은?",
      options: [
        { key: "A", text: "무브 진짜 깔끔하다", points: [["lucario", 2], ["dragonite", 1]] },
        { key: "B", text: "방금 그 동작 진짜 멋있었다", points: [["charizard", 2], ["pikachu", 1]] },
        { key: "C", text: "아 그 베타 나도 써봐야겠다", points: [["ditto", 2], ["gengar", 1]] },
        { key: "D", text: "너랑 하니까 오늘 다 잘 풀린다", points: [["jirachi", 2], ["togepi", 1]] },
      ],
    },
    {
      title: "Q3. 존버 문제를 풀지 못했을 때 집 가면서 드는 생각은?",
      options: [
        { key: "A", text: "하 이걸 못했네...그래도 오늘 재밌었으니 됐지", points: [["jirachi", 2], ["togepi", 1]] },
        { key: "B", text: "젠장 내일 또 와야겠다", points: [["magikarp", 2], ["mewtwo", 1]] },
        { key: "C", text: "다른 방법으로 풀 수 있나? 다음엔 이렇게 시도해 봐야겠다", points: [["espeon", 2], ["eevee", 1]] },
        { key: "D", text: "젠장 다른 거나 풀 걸", points: [["pikachu", 2], ["charizard", 1]] },
      ],
    },
    {
      title: "Q4. 다음 중 가장 설레는 상황은?",
      options: [
        { key: "A", text: "오늘 암장에 아는 사람 많을 때", points: [["pikachu", 2], ["jirachi", 1]] },
        { key: "B", text: "뉴비가 나한테 “이거 어떻게 해?” 물어볼 때", points: [["dragonite", 2], ["lucario", 1]] },
        { key: "C", text: "암장이 한적할 때(많이 붙어볼 수 있겠다)", points: [["mewtwo", 2], ["espeon", 1]] },
        { key: "D", text: "‘뭔가 다르게 풀 수 있을 것 같은데?’ 싶은 문제를 발견했을 때", points: [["gengar", 2], ["eevee", 1]] },
      ],
    },
    {
      title: "Q5. 가장 부담스러운 순간은?",
      options: [
        { key: "A", text: "뒤에서 많은 사람들이 나이스 외쳐줄 때", points: [["togepi", 2], ["psyduck", 1]] },
        { key: "B", text: "힘 털려서 떨어지고 싶은데 뒤에서 탑 좋아요! 저그예요! 해줄 때", points: [["snorlax", 2], ["togepi", 1]] },
        { key: "C", text: "잘못 푼 거 같은데 사람들이 내 무브를 따라할 때", points: [["espeon", 2], ["lucario", 1]] },
        { key: "D", text: "못 할 거 같아서 접으려는데, 모르는 사람이 엄청 친절하게 피드백 해줄 때", points: [["treecko", 2], ["ditto", 1]] },
      ],
    },
    {
      title: "Q6. 가장 인스타그램 스토리로 올리고 싶은 장면은?",
      options: [
        { key: "A", text: "나만의 무브로 문제를 풀어낸 순간", points: [["gengar", 2], ["charizard", 1]] },
        { key: "B", text: "그동안 안 되던 게 갑자기 자연스럽게 풀린 순간", points: [["psyduck", 2], ["jirachi", 1]] },
        { key: "C", text: "한 번에 터진 멋있는 동작과 사람들의 환호가 담긴 장면", points: [["charizard", 2], ["pikachu", 1]] },
        { key: "D", text: "허당짓 했는데 다 같이 웃는 장면", points: [["jirachi", 2], ["wynaut", 1]] },
      ],
    },
    {
      title: "Q7. 다음 중 가장 위로되는 순간은?",
      options: [
        { key: "A", text: "“오늘도 재밌었다”는 말 들을 때", points: [["jirachi", 2], ["togepi", 1]] },
        { key: "B", text: "조용히 완등하고 그대로 집 갈 때", points: [["snorlax", 2], ["espeon", 1]] },
        { key: "C", text: "“덕분에 풀었어요”라는 말 들을 때", points: [["dragonite", 2], ["togepi", 1]] },
        { key: "D", text: "나보다 잘하는 사람도 내 존버 문제를 어려워할 때", points: [["mewtwo", 2], ["rayquaza", 1]] },
      ],
    },
    {
      title: "Q8. 잘 안 풀리는 문제를 마주했을 때 속마음",
      options: [
        { key: "A", text: "조금만 더 하면 될 거 같은데..", points: [["magikarp", 2], ["togepi", 1]] },
        { key: "B", text: "다른 방법으로 해볼까?", points: [["eevee", 2], ["gengar", 1]] },
        { key: "C", text: "제발 누가 한 번만 풀어주면 좋겠다", points: [["ditto", 2], ["dragonite", 1]] },
        { key: "D", text: "오늘 이거 풀어야 집 간다.", points: [["mewtwo", 2], ["lucario", 1]] },
      ],
    },
    {
      title: "Q9. 다음 중 가장 만족스러운 마무리는?",
      options: [
        { key: "A", text: "다 같이 웃으면서 귀가", points: [["jirachi", 2], ["wynaut", 1]] },
        { key: "B", text: "존버하던 문제 극적 완등", points: [["mewtwo", 2], ["magikarp", 1]] },
        { key: "C", text: "미친 뿌무 GET", points: [["rayquaza", 2], ["charizard", 1]] },
        { key: "D", text: "평소보다 갑자기 레벨업 된 느낌이 들 때", points: [["pikachu", 2], ["treecko", 1]] },
      ],
    },
    {
      title: "Q10. 다음 중 가장 나랑 안 맞는 사람은?",
      options: [
        { key: "A", text: "베타 강요하는 사람", points: [["gengar", 2], ["rayquaza", 1]] },
        { key: "B", text: "자기 트라이 끝나면 바로 자리 뜨는 사람", points: [["togepi", 2], ["jirachi", 1]] },
        { key: "C", text: "남 무브 평가하는 사람", points: [["pikachu", 2], ["togepi", 1]] },
        { key: "D", text: "스스로 고민하지 않고 하나부터 열까지 물어보는 사람", points: [["rayquaza", 2], ["espeon", 1]] },
      ],
    },
    {
      title: "Q11. 가장 스트레스 받는 상황은?",
      options: [
        { key: "A", text: "못할 거 같은데 계속 “할 수 있어”라고 부추길 때", points: [["snorlax", 2], ["togepi", 1]] },
        { key: "B", text: "알려달래서 설명해줬더니 전혀 반영하지 않을 때", points: [["dragonite", 2], ["rayquaza", 1]] },
        { key: "C", text: "계속 생각나던 문제가 끝내 풀리지 않을 때", points: [["mewtwo", 2], ["lucario", 1]] },
        { key: "D", text: "문제 루트가 겹쳐서 내 페이스대로 붙어볼 수 없을 때", points: [["rayquaza", 2], ["snorlax", 1]] },
      ],
    },
  ];

  // -----------------------------
  // 4) DOM 참조
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
  const btnCopy = document.querySelector("#btnCopy");
  const btnResetTop = document.querySelector("#btnResetTop");
  const btnSaveCard = document.querySelector("#btnSaveCard");

  const resultEmoji = document.querySelector("#resultEmoji");
  const resultName = document.querySelector("#resultName");
  const resultOneLiner = document.querySelector("#resultOneLiner");
  const resultPokemonTraits = document.querySelector("#resultPokemonTraits");
  const resultClimberTraits = document.querySelector("#resultClimberTraits");
  const goodMatches = document.querySelector("#goodMatches");
  const badMatches = document.querySelector("#badMatches");
  const resultImg = document.querySelector("#resultImg");

  const cardCanvas = document.querySelector("#cardCanvas");
  const ctx = cardCanvas?.getContext?.("2d");

  let current = 0;
  const answers = new Array(QUESTIONS.length).fill(null);

  const show = (el) => el && el.classList.remove("hidden");
  const hide = (el) => el && el.classList.add("hidden");

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
    // injectBulkSaveButton(); // ✅ 모든 이미지
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

  function render() {
    const q = QUESTIONS[current];
    if (qIndex) qIndex.textContent = String(current + 1);
    if (qTitle) qTitle.textContent = q.title;

    if (progressBar) {
      const pct = Math.round((current / Math.max(1, QUESTIONS.length - 1)) * 100);
      progressBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
    }

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

    [...optionsWrap.children].forEach((c) => {
      const k = c.querySelector(".key")?.textContent;
      c.classList.toggle("selected", k === key);
    });

    if (btnNext) btnNext.disabled = false;
    if (shouldAutoAdvance) autoAdvance();
  }

  function calcScores() {
    const score = emptyScore();
    answers.forEach((ansKey, idx) => {
      if (!ansKey) return;
      const opt = QUESTIONS[idx].options.find((o) => o.key === ansKey);
      if (!opt) return;
      opt.points.forEach(([pid, pts]) => add(score, pid, pts));
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

    // 동점 우선순위(결과 다양성+캐릭터 강도 기준)
    const priority = [
      "mewtwo",
      "rayquaza",
      "lucario",
      "charizard",
      "pikachu",
      "espeon",
      "dragonite",
      "gengar",
      "ditto",
      "eevee",
      "treecko",
      "magikarp",
      "jirachi",
      "togepi",
      "psyduck",
      "snorlax",
      "wynaut",
    ];
    for (const p of priority) if (winners.includes(p)) return p;
    return winners[0];
  }

  function fixedMatches(winnerId) {
    if (winnerId === "wynaut") return { good: null, bad: null }; // 맞아용은 궁합 없음
    const rule = COMPAT[winnerId] || {};
    const good = POKEMON.find((p) => p.id === rule.good) || null;
    const bad = POKEMON.find((p) => p.id === rule.bad) || null;
    return { good, bad };
  }

  function renderFixedChip(target, pokemon, emptyText = "-") {
    if (!target) return;
    target.innerHTML = "";
    const chip = document.createElement("div");
    chip.className = "chip";
    if (!pokemon) {
      chip.classList.add("empty");
      chip.textContent = emptyText;
    } else {
      chip.textContent = `${pokemon.emoji} ${pokemon.name}`;
    }
    target.appendChild(chip);
  }

  function renderResult() {
    const score = calcScores();
    const winnerId = pickWinner(score);
    const winner = POKEMON.find((p) => p.id === winnerId) || POKEMON[0];

    if (resultEmoji) resultEmoji.textContent = winner.emoji;
    if (resultName) resultName.textContent = winner.name;
    if (resultOneLiner) resultOneLiner.textContent = winner.oneLiner;

    if (resultPokemonTraits) {
      resultPokemonTraits.innerHTML = "";
      winner.pokemonTraits.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        resultPokemonTraits.appendChild(li);
      });
    }

    if (resultClimberTraits) {
      resultClimberTraits.innerHTML = "";
      winner.climberTraits.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        resultClimberTraits.appendChild(li);
      });
    }

    // 결과 이미지(투명 PNG)
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

    if (winnerId === "wynaut") {
      renderFixedChip(goodMatches, null, "없음(전부 무난)");
      renderFixedChip(badMatches, null, "없음(전부 수용)");
    } else {
      renderFixedChip(goodMatches, good);
      renderFixedChip(badMatches, bad);
    }

    if (btnSaveCard) btnSaveCard.dataset.winner = winnerId;
  }

  // -----------------------------
  // 5) 캔버스 저장(PNG)
  // -----------------------------
  function roundRect(ctx2, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx2.beginPath();
    ctx2.moveTo(x + rr, y);
    ctx2.arcTo(x + w, y, x + w, y + h, rr);
    ctx2.arcTo(x + w, y + h, x, y + h, rr);
    ctx2.arcTo(x, y + h, x, y, rr);
    ctx2.arcTo(x, y, x + w, y, rr);
    ctx2.closePath();
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("이미지 로드 실패: " + src));
      img.src = src;
    });
  }

  function drawWrappedText(ctx2, text, x, y, maxWidth, lineHeight, maxLines = 2) {
    const words = String(text || "").split(" ");
    let line = "";
    const lines = [];
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (ctx2.measureText(test).width <= maxWidth) line = test;
      else {
        if (line) lines.push(line);
        line = w;
      }
      if (lines.length >= maxLines) break;
    }
    if (lines.length < maxLines && line) lines.push(line);
    lines.forEach((ln, i) => ctx2.fillText(ln, x, y + i * lineHeight));
    return lines.length;
  }

  async function drawResultCard() {
    if (!cardCanvas || !ctx) return;

    const winnerId = btnSaveCard?.dataset?.winner || "pikachu";
    const winner = POKEMON.find((p) => p.id === winnerId) || POKEMON[0];
    const { good, bad } = fixedMatches(winnerId);

    const W = cardCanvas.width;
    const H = cardCanvas.height;
    ctx.clearRect(0, 0, W, H);

    // 배경
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#0b0f19");
    bg.addColorStop(0.55, "rgba(124,58,237,0.35)");
    bg.addColorStop(1, "rgba(167,139,250,0.22)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // 카드
    const pad = 70;
    const cardX = pad, cardY = pad;
    const cardW = W - pad * 2;
    const cardH = H - pad * 2;

    // ctx.fillStyle = "rgba(17,24,39,0.90)";
    // ctx.strokeStyle = "rgba(255,255,255,0.12)";
    // ctx.lineWidth = 3;
    // roundRect(ctx, cardX, cardY, cardW, cardH, 42);
    // ctx.fill();
    // ctx.stroke();

    // ============
// ✅ 세로 자동 맞춤 레이아웃 계산(오버플로우 방지: 아래부터 고정)
// ============

const innerPadX = 56;
const innerPadBottom = 52;

const contentX = cardX + innerPadX;
const contentW = cardW - innerPadX * 2;

const usableTopY = cardY + 48;
const usableBottomY = cardY + cardH - innerPadBottom;
const usableH = usableBottomY - usableTopY;

// 상단(타이틀+타입명) 고정
const headerH = 190;
const headerY = usableTopY;

// 고정 영역들
const gapY1 = 36;
const gapY2 = 30;
const gapY3 = 26;

const oneH = 86;
const matchH = 150;

// ✅ 리스트는 5개(클라이머) 기준으로 최소 높이 확보
let listH = 420;          // 기본
const listMin = 380;      // 최소(5줄 들어가게)
const imgMin = 320;       // 이미지 박스 최소

// ✅ 아래부터 배치(바닥 기준 고정)
let matchY = usableBottomY - matchH;
let listY = matchY - gapY3 - listH;
let oneY = listY - gapY2 - oneH;

// ✅ 남는 공간을 이미지 박스로 줌
let imgBoxY = headerY + headerH;
let imgBoxH = oneY - gapY1 - imgBoxY;

// ✅ 만약 공간 부족하면: 1) 이미지 먼저 줄이고 2) 그래도 부족하면 리스트 줄이기
if (imgBoxH < imgMin) {
  const need = imgMin - imgBoxH;
  imgBoxH = imgMin;

  // 리스트에서 줄일 수 있는 만큼 줄임(최소 listMin까지)
  const canCutList = Math.max(0, listH - listMin);
  const cutList = Math.min(need, canCutList);
  listH -= cutList;

  // 다시 재계산
  listY = matchY - gapY3 - listH;
  oneY = listY - gapY2 - oneH;
  imgBoxH = oneY - gapY1 - imgBoxY;
}

// ✅ 그래도 imgBoxH가 음수면(진짜 극단) 모든 간격 조금씩 줄이기
if (imgBoxH < 200) {
  // 안전빵: 이미지 박스 더 줄이고 리스트도 최저치로
  listH = listMin;
  listY = matchY - gapY3 - listH;
  oneY = listY - gapY2 - oneH;
  imgBoxH = Math.max(200, oneY - gapY1 - imgBoxY);
}

// 2컬럼 폭 계산(정수/오차 흡수)
const gapX = 28;
const colW = Math.floor((contentW - gapX) / 2);
const remain = contentW - (colW * 2 + gapX);
const leftW = colW;
const rightW = colW + remain;
const leftX = contentX;
const rightX = leftX + leftW + gapX;

// 이미지 박스는 중앙 카드처럼 보이게
const imgBoxX = cardX + 210;
const imgBoxW = cardW - 420;


    // 상단 타이틀
    ctx.fillStyle = "rgba(148,163,184,0.95)";
    ctx.font = "28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText("포켓몬 클라이머 유형 테스트", cardX + 56, cardY + 78);

    // 타입(이모지 + 이름)
    ctx.fillStyle = "#e5e7eb";
    ctx.font = "bold 64px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText(`${winner.emoji} ${winner.name}`, cardX + 56, cardY + 168);

    // 이미지 박스
    // ctx.fillStyle = "rgba(255,255,255,0.04)";
    // ctx.strokeStyle = "rgba(255,255,255,0.10)";
    // ctx.lineWidth = 2;
    // roundRect(ctx, imgBoxX, imgBoxY, imgBoxW, imgBoxH, 36);
    // ctx.fill();
    // ctx.stroke();

    try {
      const img = await loadImage(DOODLE_PATH(winner.id));
      const iw = img.width, ih = img.height;

      const scale = Math.min((imgBoxW - 10) / iw, (imgBoxH - 10) / ih) * 1.2;
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = imgBoxX + (imgBoxW - dw) / 2;
      const dy = imgBoxY + (imgBoxH - dh) / 2;

      ctx.drawImage(img, dx, dy, dw, dh);
    } catch {
      ctx.fillStyle = "rgba(148,163,184,0.9)";
      ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      ctx.fillText("※ assets/doodles/에 이미지가 없어요", imgBoxX + 30, imgBoxY + 60);
    }

    // 한줄멘트 박스(점선)
    const oneX = contentX;
    const oneW = contentW;

    ctx.fillStyle = "rgba(124,58,237,0.10)";
    ctx.strokeStyle = "rgba(167,139,250,0.55)";
    ctx.setLineDash([10, 8]);
    ctx.lineWidth = 2;
    roundRect(ctx, oneX, oneY, oneW, oneH, 22);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "rgba(245,243,255,0.98)";
    ctx.font = "36px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    drawWrappedText(ctx, winner.oneLiner, oneX + 22, oneY + 54, oneW - 44, 44, 2);

    // 리스트 박스(2칸)
function drawMultilineText(ctx, text, x, y, maxW, lineH, maxLines) {
  const words = String(text ?? "").split(" ");
  let line = "";
  const lines = [];

  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width <= maxW) {
      line = test;
    } else {
      lines.push(line);
      line = word;
      if (lines.length === maxLines - 1) break;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);

  // 마지막 줄 넘치면 …
  if (lines.length === maxLines) {
    let last = lines[maxLines - 1];
    while (ctx.measureText(last + "…").width > maxW && last.length > 0) {
      last = last.slice(0, -1);
    }
    lines[maxLines - 1] = last + "…";
  }

  lines.forEach((ln, i) => {
    ctx.fillText(ln, x, y + i * lineH);
  });

  return lines.length;
}


function drawListBox(x, w, y, h, title, lines, desiredLines) {
  // 박스
  ctx.fillStyle = "rgba(255,255,255,0.04)";
  ctx.strokeStyle = "rgba(255,255,255,0.10)";
  ctx.lineWidth = 2;
  roundRect(ctx, x, y, w, h, 26);
  ctx.fill();
  ctx.stroke();

  // 타이틀
  ctx.fillStyle = "rgba(148,163,184,0.95)";
  ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
  ctx.fillText(title, x + 24, y + 46);

  // ✅ 세팅: 5줄이 박스에 들어가도록 폰트/라인하이트 자동 조절
  const contentTop = y + 102;
  const contentH = h - 120;
  const want = Math.min(desiredLines, (lines || []).length);

  let fontSize = 25;   // 기존 30 → 28
  let lineH = 35;     // 기존 50 → 40

  // 박스가 작으면 조금씩 줄여서라도 "원하는 줄 수"를 넣는다
  while (want > 0 && (want * lineH) > contentH && fontSize > 22) {
    fontSize -= 2;
    lineH -= 2;
  }

  ctx.fillStyle = "#e5e7eb";
  ctx.font = `${fontSize}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'`;

  const maxW = w - 48; // 좌우 패딩
  let ty = contentTop;

  (lines || []).slice(0, want).forEach((t) => {
    const bullet = "• ";
    const startX = x + 24;
    const maxTextW = w - 48;

    const usedLines = drawMultilineText(
      ctx,
      bullet + t,
      startX,
      ty,
      maxTextW,
      lineH,
      2 // ✅ 한 항목당 최대 2줄
    );

    ty += usedLines * lineH;

  });
}

drawListBox(leftX, leftW, listY, listH, "포켓몬 성격", winner.pokemonTraits, 3);
drawListBox(rightX, rightW, listY, listH, "클라이머 적용", winner.climberTraits, 5);

    // 궁합 박스(2칸)
    function drawMatchBox(x, w, y, h, title, text) {
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      ctx.lineWidth = 2;
      roundRect(ctx, x, y, w, h, 26);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(148,163,184,0.95)";
      ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      ctx.fillText(title, x + 24, y + 50);

      ctx.fillStyle = "#e5e7eb";
      ctx.font = "bold 34px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";

      const txt = text || "-";
      const maxW = w - 48;
      if (ctx.measureText(txt).width <= maxW) {
        ctx.fillText(txt, x + 24, y + 110);
      } else {
        ctx.font = "bold 30px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
        drawWrappedText(ctx, txt, x + 24, y + 98, maxW, 36, 2);
      }
    }

    // 맞아용은 궁합 문구 바꾸기
    if (winnerId === "wynaut") {
      drawMatchBox(leftX, leftW, matchY, matchH, "🔥 잘 맞는 포켓몬", "없음(전부 무난)");
      drawMatchBox(rightX, rightW, matchY, matchH, "😵 잘 안 맞는 포켓몬", "없음(전부 수용)");
    } else {
      drawMatchBox(leftX, leftW, matchY, matchH, "🔥 잘 맞는 포켓몬", good ? `${good.emoji} ${good.name}` : "-");
      drawMatchBox(rightX, rightW, matchY, matchH, "😵 잘 안 맞는 포켓몬", bad ? `${bad.emoji} ${bad.name}` : "-");
    }
  }

  async function saveCanvasAsPng(filename = "result-card.png") {
    try {
      await drawResultCard();
    } catch (e) {
      console.error(e);
      alert("카드 생성 에러 🥲");
      return;
    }

    if (!cardCanvas) return;

    const blob = await new Promise((resolve) => {
      try {
        cardCanvas.toBlob(resolve, "image/png", 1.0);
      } catch (e) {
        console.error(e);
        resolve(null);
      }
    });

    if (!blob) {
      try {
        const dataUrl = cardCanvas.toDataURL("image/png");
        openImageInNewTabForSave(dataUrl);
        return;
      } catch (e) {
        console.error(e);
        alert("이미지 저장 에러 🥲");
        return;
      }
    }

    const file = new File([blob], filename, { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: "포켓몬 클라이머 결과",
          text: "내 결과 카드",
        });
        return;
      } catch (e) {
        console.warn("share canceled or failed:", e);
      }
    }

    const objectUrl = URL.createObjectURL(blob);
    const ok = tryDownload(objectUrl, filename);

    if (!ok) openUrlInNewTabForSave(objectUrl);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 4000);
  }

  function tryDownload(href, filename) {
    try {
      const a = document.createElement("a");
      a.href = href;
      a.download = filename;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return true;
    } catch (e) {
      console.warn("download failed:", e);
      return false;
    }
  }

  function openUrlInNewTabForSave(url) {
    try {
      const w = window.open(url, "_blank", "noopener,noreferrer");
      if (!w) alert("팝업이 차단, 팝업 허용 ㄱㄱ");
    } catch (e) {
      console.error(e);
      alert("새 탭 열기 실패 🥲");
    }
  }

  function openImageInNewTabForSave(dataUrl) {
    try {
      const w = window.open("", "_blank");
      if (!w) {
        alert("팝업이 차단, 팝업 허용 ㄱㄱ");
        return;
      }
      w.document.open();
      w.document.write(`
        <!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>이미지 저장</title>
            <style>
              body{margin:0;background:#111;display:flex;align-items:center;justify-content:center;min-height:100vh;}
              img{max-width:100vw;max-height:100vh;height:auto;width:auto;}
              .tip{position:fixed;bottom:12px;left:12px;right:12px;color:#fff;font:14px system-ui;opacity:.85;text-align:center}
            </style>
          </head>
          <body>
            <img src="${dataUrl}" alt="result" />
            <div class="tip">이미지를 길게 눌러서 ‘사진에 추가’로 저장하라!</div>
          </body>
        </html>
      `);
      w.document.close();
    } catch (e) {
      console.error(e);
      alert("이미지 열기 실패 🥲");
    }
  }

  // -----------------------------
  // 6) 이벤트 바인딩
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

  btnRestart?.addEventListener("click", goStart);
  btnResetTop?.addEventListener("click", goStart);

  btnCopy?.addEventListener("click", async () => {
    const score = calcScores();
    const winnerId = pickWinner(score);
    const winner = POKEMON.find((p) => p.id === winnerId) || POKEMON[0];
    const { good, bad } = fixedMatches(winnerId);

    const goodText =
      winnerId === "wynaut" ? "없음(전부 무난)" : (good?.name ?? "-");
    const badText =
      winnerId === "wynaut" ? "없음(전부 수용)" : (bad?.name ?? "-");

    const shareText =
`${winner.emoji} ${winner.name}
${winner.oneLiner}

🔥 잘 맞는 포켓몬: ${goodText}
😵 잘 안 맞는 포켓몬: ${badText}
`;

    try {
      await navigator.clipboard.writeText(shareText);
      btnCopy.textContent = "복사 완료 ✅";
      setTimeout(() => (btnCopy.textContent = "결과 복사"), 1100);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = shareText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      btnCopy.textContent = "복사 완료 ✅";
      setTimeout(() => (btnCopy.textContent = "결과 복사"), 1100);
    }
  });

btnSaveCard?.addEventListener("click", async () => {
  const winnerId = btnSaveCard.dataset.winner || "pikachu";
  await saveResultCardSmart(`${winnerId}-result.png`);
});

async function saveResultCardSmart(filename = "result-card.png") {
  try {
    await drawResultCard();
  } catch (e) {
    console.error(e);
    alert("카드 생성 실패 🥲");
    return;
  }

  if (!cardCanvas) return;

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  const blob = await new Promise((resolve) => {
    try {
      cardCanvas.toBlob(resolve, "image/png", 1.0);
    } catch {
      resolve(null);
    }
  });

  if (!blob) {
    alert("이미지 변환 실패 🥲");
    return;
  }

  // ======================
  // 📱 iOS → 공유 시트
  // ======================
  if (isIOS && navigator.canShare) {
    try {
      const file = new File([blob], filename, { type: "image/png" });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "클라이머 포켓몬 결과",
        });
        return; // ✅ 끝
      }
    } catch (e) {
      console.warn("iOS share 취소/실패:", e);
      // 아래 fallback으로 내려감
    }
  }

  // ======================
  // 💻 PC / 안드 → 다운로드
  // ======================
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);

  // ======================
  // 🍎 iOS fallback → 새 탭
  // ======================
  if (isIOS) {
    setTimeout(() => {
      const w = window.open(url, "_blank");
      if (!w) {
        alert("팝업 차단 해제 후 다시 시도해줘!");
      }
    }, 300);
  }
}



  // init
  goStart();
// ==============================
// 1회성: 결과화면에 '전체 저장' 버튼 자동 추가
// ==============================
// function injectBulkSaveButton() {
//   const nav = document.querySelector("#screenResult .nav");
//   if (!nav) return;

//   // 중복 방지
//   if (document.querySelector("#btnBulkSaveAll")) return;

//   const btn = document.createElement("button");
//   btn.id = "btnBulkSaveAll";
//   btn.className = "btn";
//   btn.textContent = "모든 결과 카드 저장(1회성)";
//   btn.style.marginLeft = "8px";

//   btn.addEventListener("click", async () => {
//     // 유저 클릭 제스처로 실행 → 다중 저장 차단 덜 걸림
//     await bulkSaveAllCardsSmart({ delayMs: 650 });
//   });

//   nav.appendChild(btn);
// }

// ==============================
// 1회성: 기기/브라우저에 따라 저장 루트 자동 분기
// - PC/안드: 다운로드
// - iOS: 공유(canShare) 우선, 안되면 새탭 열고 길게 눌러 저장
// ==============================
// async function bulkSaveAllCardsSmart(options = {}) {
//   const {
//     ids: targetIds = POKEMON.map((p) => p.id),
//     prefix = "result",
//     delayMs = 650,
//   } = options;

//   const list = targetIds.slice(); // 전부

//   if (!cardCanvas || !ctx) {
//     alert("cardCanvas/ctx가 없어서 저장 불가 🥲");
//     return;
//   }

//   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//   const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

//   async function canvasToBlob(canvas) {
//     return await new Promise((resolve) => {
//       try {
//         canvas.toBlob((b) => resolve(b), "image/png", 1.0);
//       } catch (e) {
//         console.error(e);
//         resolve(null);
//       }
//     });
//   }

//   function downloadBlob(blob, filename) {
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = filename;
//     a.rel = "noopener";
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     setTimeout(() => URL.revokeObjectURL(url), 2500);
//     return true;
//   }

//   function openUrlInNewTab(url) {
//     const w = window.open(url, "_blank", "noopener,noreferrer");
//     return !!w;
//   }

//   const original = btnSaveCard?.dataset?.winner || null;

//   console.log(`[bulk] start: ${list.length} cards (iOS=${isIOS})`);

//   for (let i = 0; i < list.length; i++) {
//     const id = list[i];
//     if (btnSaveCard) btnSaveCard.dataset.winner = id;

//     try {
//       await drawResultCard();
//       const blob = await canvasToBlob(cardCanvas);
//       if (!blob) throw new Error("toBlob failed");

//       const filename = `${prefix}-${id}.png`;

//       // ✅ iOS면 Web Share 우선 (가능하면)
//       if (isIOS && navigator.canShare) {
//         try {
//           const file = new File([blob], filename, { type: "image/png" });
//           if (navigator.canShare({ files: [file] })) {
//             await navigator.share({ files: [file], title: filename });
//             console.log(`[bulk] shared (${i + 1}/${list.length}): ${id}`);
//             await sleep(delayMs);
//             continue;
//           }
//         } catch (e) {
//           console.warn("share failed/canceled:", e);
//         }
//       }

//       // ✅ PC/안드 대부분: 다운로드
//       if (!isIOS) {
//         downloadBlob(blob, filename);
//         console.log(`[bulk] downloaded (${i + 1}/${list.length}): ${id}`);
//       } else {
//         // ✅ iOS fallback: 새 탭으로 열어서 길게 눌러 저장
//         const url = URL.createObjectURL(blob);
//         const opened = openUrlInNewTab(url);
//         console.log(`[bulk] opened tab (${i + 1}/${list.length}): ${id}`);
//         // iOS는 유저가 저장해야 하니까 너무 빠르면 의미 없음 → 텀 좀 줌
//         await sleep(Math.max(delayMs, 900));
//         setTimeout(() => URL.revokeObjectURL(url), 4000);
//         if (!opened) alert("팝업 차단 풀어줘야 저장 가능 🥲");
//         continue;
//       }
//     } catch (e) {
//       console.error(`[bulk] error: ${id}`, e);
//     }

//     await sleep(delayMs);
//   }

//   // 원복
//   if (btnSaveCard) {
//     if (original) btnSaveCard.dataset.winner = original;
//     else delete btnSaveCard.dataset.winner;
//   }

//   console.log("[bulk] done ✅");
//   alert(`일괄 저장 끝 ✅ (${list.length}개)`);
// }

})();
