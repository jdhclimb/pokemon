(() => {
  const DOODLE_PATH = (id) => `assets/doodles/${id}.png`;
  let CURRENT_WINNER_ID = "pikachu";
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
      climberTraits: ["컨디션 영향 큼","압박 주면 위축","안 풀리면 벽이 괜히 미워짐","응원 받으면 급성장","주변에서 자연스럽게 챙겨줌",],
    },
    {
      id: "magikarp",
      name: "잉어킹(끈기형)",
      emoji: "🐟",
      oneLiner: "“못 풀어도 괜찮지 뭐”",
      pokemonTraits: ["욕심 없음", "꾸준함", "단단한 멘탈"],
      climberTraits: ["완등 집착 없음","실패도 과정이라고 생각함","전체적인 템포가 느긋함","속도는 느림","붙는 순간엔 최선",],
    },
    {
      id: "treecko",
      name: "나무지기(재능형)",
      emoji: "🌿",
      oneLiner: "“일단 붙어볼게”",
      pokemonTraits: ["감각적", "빠른 실행", "자신감"],
      climberTraits: ["이론보다는 실전에 강한 편","기본기에 비해 수행력 높음","처음보는 문제도 일단 시도","“왜”보단 “이런 느낌”이 더 와닿음","설명보다 “일단 한 번 붙어봐”가 최고 코칭",],
    },
    {
      id: "eevee",
      name: "이브이(탐색형)",
      emoji: "🧬",
      oneLiner: "“이것도 재밌다!”",
      pokemonTraits: ["유연함 MAX", "호기심", "실험적"],
      climberTraits: ["새로운 무브 욕심 있음","다양한 풀이 좋아함","때에 따라 스타일 달라짐","정답보다는 “이렇게도 가능해”에 관심이 더 감","“잘 하는 것”보다는 “새로운 시도”에 끌리는 편",],
    },
    {
      id: "psyduck",
      name: "고라파덕(각성형)",
      emoji: "🦆",
      oneLiner: "“어? 잡혔다”",
      pokemonTraits: ["갑자기 각성함","평소 멍함","잠재력 큼"],
      climberTraits: ["엉뚱한 순간 성공","계획 없이 붙었는데 결과가 나옴","집중 안 한 트라이가 오히려 제일 좋을 때 있음","본인은 왜 된 건지 설명 못 함","압박보다는 편한 환경에서 각성함",],
    },
    {
      id: "ditto",
      name: "메타몽(유동형)",
      emoji: "🔁",
      oneLiner: "“아까 이렇게 하던데, 오 됐다!”",
      pokemonTraits: ["적응력 빠름", "수용적", "관찰력 좋음"],
      climberTraits: ["다른 사람 무브를 잘 관찰함","앞에서 누가 시범 보여주면 그대로 복사 가능","기준만 잡히면 안정감 확 생김","카탈로그 보는 거 좋아함","잘 하는 사람 한 명만 있으면 효율 최고",],
    },
    {
      id: "gengar",
      name: "팬텀(변칙형)",
      emoji: "👻",
      oneLiner: "“ㅋㅋㅋ이게 되눙”",
      pokemonTraits: ["장난기", "자유로움", "창의력 과다"],
      climberTraits: ["정석보다 변칙 무브에 손이 먼저 감","나만의 베타 추구","재밌는 게 좋음","지금 당장 필요한 조언 아니면 안 들음","성공하면 기분 개째짐, 실패하면 “안타까운거지 뭐~” 하고 넘어감",],
    },
    {
      id: "pikachu",
      name: "피카츄(성장형)",
      emoji: "⚡",
      oneLiner: "“오늘도 암장에 전기 공급하러 왔습니다.”",
      pokemonTraits: ["클친자", "쉬는 게 크럭스", "과한 열정"],
      climberTraits: ["성장 속도 빠름","성취욕 높은 편","성장 체감 없으면 멘탈 흔들림","잘하고 싶은 마음이 실력을 앞섬","“넌 좀 쉬어라”는 말 많이 들음",],
    },
    {
      id: "snorlax",
      name: "잠만보(회복형)",
      emoji: "😴",
      oneLiner: "“나 지쳤어…(음 이건 재밌어보이는데...)”",
      pokemonTraits: ["느긋함", "안정감", "인내심"],
      climberTraits: ["쉬는 시간 충분히 가져감","위험해 보이면 패스","다이나믹 못하는 게 아니라 안 하는 거","말은 지쳤다 하는데 어느새 뭘 또 풀고 옴","체력 대비 재미 없는 문제는 패스",],
    },
    {
      id: "espeon",
      name: "에브이(몰입형)",
      emoji: "🔮",
      oneLiner: "“...”",
      pokemonTraits: ["침착함", "분석적", "몰입하면 주변 차단"],
      climberTraits: ["루트파인딩에 꽤 진심","암장 가기 전 카탈로그 정독","방해에 취약함","군중 속의 홀로가 좋음","해냈을 때 누가 나이스 외쳐주면 속으로 좋아함",],
    },
    {
      id: "lucario",
      name: "루카리오(스태틱형)",
      emoji: "🥋",
      oneLiner: "“강해질 수 있다.”",
      pokemonTraits: ["원칙주의", "단단함", "신뢰형"],
      climberTraits: ["다이나믹한 무브보다 스태틱 선호","기본기 중시","컨디션 기복이 적음","단기간 성과보다 장기 성장형","완등도 중요하지만 무브 퀄리티도 중요함",],
    },
    {
      id: "charizard",
      name: "리자몽(다이나믹형)",
      emoji: "🔥",
      oneLiner: "“오늘도 함 뛰어볼까”",
      pokemonTraits: ["대담함", "공격적", "자신감"],
      climberTraits: ["다이나믹 러버","무브가 화려할 수록 눈 돌아감","문제가 빡셀수록 오히려 텐션 더 올라감","실패 많지만 성공하면 레전드","깁스 푼 지 얼마 안됐거나 깁스 중이거나 깁스할 예정",],
    },
    {
      id: "dragonite",
      name: "망나뇽(수호자형)",
      emoji: "🐉",
      oneLiner: "“너는 이렇게 가는 게 더 쉬울 거 같은데?”",
      pokemonTraits: ["상냥함", "책임감", "안정감"],
      climberTraits: ["은둔 고수","무브 이해도 높음","“엄격하거나 다그치기보다는 이렇게 해보면 어때? 제안하는 편”","나이스 받는 것도 좋지만 나이스 외쳐주는 것도 행복함","알려준 무브로 남이 성공하면 내가 푼 것처럼 뿌듯함",],
    },
    {
      id: "mewtwo",
      name: "뮤츠(투지형)",
      emoji: "🧠",
      oneLiner: "“이거 오늘 끝내야지”",
      pokemonTraits: ["냉철함", "독립적", "기준 높음"],
      climberTraits: ["풀고 싶은 문제 생기면 집착함","안 되면 오기 제대로 올라옴","가끔(사실 자주) 같이 간 사람 유기함","꽂힌 문제 풀고 나면 친절해짐","다른 사람이 물어보면 대답은 해주지만 내 문제 푸는 게 더 급함",],
    },
    {
      id: "rayquaza",
      name: "레쿠쟈(초월자형)",
      emoji: "🌌",
      oneLiner: "“그건 왜 그렇게 해?”",
      pokemonTraits: ["기준 높음", "효율 집착", "카리스마"],
      climberTraits: ["실력 최상급, 기준점 역할","더 이상 건강이 목적이 아님","다들 크럭스라는데 어디인지 못 찾겠음","비꼬는 게 아니라 진심으로 왜 못하는지 가끔 궁금함","루트를 이상하게 뚫어버려서 세터가 임펙 가져오게 함",],
    },
    {
      id: "jirachi",
      name: "자라치(기적형)",
      emoji: "⭐",
      oneLiner: "“지금이야! 들찍해 줄까?!”",
      pokemonTraits: ["잠잠함", "타이밍형", "따뜻함"],
      climberTraits: ["사람에 진심, 응원하는 걸 좋아함","본인 등반할 땐 조용한데 남 트라이엔 집중함","응원하다가 본인도 같이 각성함","저전력 모드로 있다가 갑자기 한 번에 터지는 순간 있음",],
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
  const BASE_CANVAS_H = cardCanvas ? cardCanvas.height : 1350;

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
    injectBulkSaveButton(); // ✅ 모든 이미지
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

function renderResult(forcedWinnerId = null) {
  // ✅ 강제 결과가 있으면 그걸 쓰고, 없으면 기존 방식(점수 계산) 사용
  const score = forcedWinnerId ? null : calcScores();
  const winnerId = forcedWinnerId || pickWinner(score);

  CURRENT_WINNER_ID = winnerId;
  const winner = POKEMON.find((p) => p.id === winnerId) || POKEMON[0];

  const { base: baseName, type: typeLabel } = splitNameAndType(winner.name);

  if (resultEmoji) resultEmoji.textContent = winner.emoji;

  // 이름 + 타입칩
  if (resultName) {
    resultName.innerHTML = `
      <span class="r-name">${baseName}</span>
      ${typeLabel ? `<span class="r-chip r-chip-type">${typeLabel}</span>` : ""}
    `;
  }

  // 한줄멘트
  if (resultOneLiner) resultOneLiner.textContent = winner.oneLiner;

  // 포켓몬 성격 칩
  if (resultPokemonTraits) {
    resultPokemonTraits.innerHTML = "";
    const colors = ["c1", "c2", "c3", "c4", "c5"];
    winner.pokemonTraits.forEach((t) => {
      const li = document.createElement("li");
      li.className = `trait-chip ${colors[Math.floor(Math.random() * colors.length)]}`;
      li.textContent = t;
      resultPokemonTraits.appendChild(li);
    });
  }

  // 클라이머 특징(불릿)
  if (resultClimberTraits) {
    resultClimberTraits.innerHTML = "";
    winner.climberTraits.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      resultClimberTraits.appendChild(li);
    });
  }

  // 이미지
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

  return winnerId; // ✅ (선택) bulk에서 상태 확인용으로 리턴
}

  // -----------------------------
  // 5) 캔버스 저장(PNG)
  // -----------------------------
  function drawPill(ctx, text, x, y, opt = {}) {
  const {
    font = "700 22px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'",
    padX = 16,
    h = 36,
    bg = "rgba(255,255,255,0.08)",
    stroke = "rgba(255,255,255,0.12)",
    color = "#e5e7eb",
  } = opt;

  ctx.save();
  ctx.font = font;
  const w = Math.ceil(ctx.measureText(text).width) + padX * 2;

  ctx.fillStyle = bg;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;

  roundRect(ctx, x, y, w, h, h / 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fillText(text, x + padX, y + Math.floor(h * 0.72));
  ctx.restore();
  return w;
}
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

function wrapLines(ctx, text, maxW) {
  const words = String(text ?? "").split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width <= maxW) line = test;
    else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// ✅ … 없는 멀티라인 (무제한)
function drawMultilineText(ctx, text, x, y, maxW, lineH, maxLines = Infinity) {
  const lines = wrapLines(ctx, text, maxW);
  const sliced = Number.isFinite(maxLines) ? lines.slice(0, maxLines) : lines;
  sliced.forEach((ln, i) => ctx.fillText(ln, x, y + i * lineH));
  return sliced.length;
}

// ✅ 클라이머 적용(list box) 높이 측정용
function measureListBoxHeight(ctx, w, lines, wantItems, lineH) {
  const framePad = 120;
  const bottomExtra = 24;

  const maxTextW = w - 48;
  const items = (lines || []).slice(0, Math.min(wantItems, (lines || []).length));

  let contentLines = 0;
  for (const t of items) {
    const bullet = "• ";
    const wrapped = wrapLines(ctx, bullet + t, maxTextW);
    contentLines += wrapped.length;
  }

  const contentH = contentLines * lineH;
  return Math.max(framePad + contentH + bottomExtra, 260);
}

// ✅ 이름/타입 분리 (피카츄(성장형) -> 피카츄 / 성장형)
function splitNameAndType(nameStr) {
  const s = String(nameStr || "");
  const m = s.match(/^(.*)\((.*)\)\s*$/);
  if (!m) return { base: s, type: "" };
  return { base: m[1].trim(), type: m[2].trim() };
}

// ✅ “포켓몬 성격” 칩 박스 (각 줄 1칩)
function drawChipBox(ctx, x, y, w, h, title, chips) {
  ctx.fillStyle = "rgba(255,255,255,0.04)";
  ctx.strokeStyle = "rgba(255,255,255,0.10)";
  ctx.lineWidth = 2;
  roundRect(ctx, x, y, w, h, 26);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(148,163,184,0.95)";
  ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
  ctx.fillText(title, x + 24, y + 46);

  const startX = x + 24;
  let cy = y + 86;

  const pillH = 36;
  const gapY = 12;

  const list = (chips || []).map(v => String(v || "").trim()).filter(Boolean);

  list.forEach((t) => {
    drawPill(ctx, t, startX, cy, {
      h: pillH,
      padX: 16,
      bg: "rgba(255,255,255,0.08)",
      stroke: "rgba(255,255,255,0.12)",
      color: "#e5e7eb",
      font: "700 22px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'",
    });
    cy += pillH + gapY;
  });
}
async function drawResultCard(pass = 0) {
  if (!cardCanvas || !ctx) return;
  if (pass === 0) cardCanvas.height = BASE_CANVAS_H;

  const winnerId = btnSaveCard?.dataset?.winner || CURRENT_WINNER_ID || "pikachu";
  const winner = POKEMON.find((p) => p.id === winnerId) || POKEMON[0];
  const { good, bad } = fixedMatches(winnerId);

  const W = cardCanvas.width;
  let H = cardCanvas.height;

  // ===== (A) 2-pass: "클라이머 적용" 높이에 따라 캔버스 높이 늘리기 =====
  // (측정용)
  const pad = 70;
  const innerPadX = 56;
  const cardW = W - pad * 2;
  const contentW = cardW - innerPadX * 2;

  const fontSizeForMeasure = 25;
  const lineHForMeasure = 35;
  ctx.font = `${fontSizeForMeasure}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'`;

  const stackGap = 20;
  const traitBoxH = 190; // 성격칩 3개 기준
  const needApplyH = measureListBoxHeight(ctx, contentW, winner.climberTraits, 5, lineHForMeasure);
  const needListH = traitBoxH + stackGap + needApplyH;

  const baseListH = 520; // 기본값(너 레이아웃에 맞춰 충분히 크게)
  const extra = Math.max(0, needListH - baseListH);

  if (extra > 0 && pass === 0) {
    cardCanvas.height = H + extra + 60;
    return drawResultCard(1);
  }

  // ===== (B) 그리기 시작 =====
  const W2 = cardCanvas.width;
  const H2 = cardCanvas.height;
  ctx.clearRect(0, 0, W2, H2);

  // 배경
  const bg = ctx.createLinearGradient(0, 0, W2, H2);
  bg.addColorStop(0, "#0b0f19");
  bg.addColorStop(0.55, "rgba(124,58,237,0.35)");
  bg.addColorStop(1, "rgba(167,139,250,0.22)");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W2, H2);

  // 카드
  const cardX = pad, cardY = pad;
  const cardH = H2 - pad * 2;

  ctx.fillStyle = "rgba(17,24,39,0.90)";
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 3;
  roundRect(ctx, cardX, cardY, cardW, cardH, 42);
  ctx.fill();
  ctx.stroke();

  // 레이아웃
  const innerPadBottom = 52;
  const contentX = cardX + innerPadX;

  const usableTopY = cardY + 48;
  const usableBottomY = cardY + cardH - innerPadBottom;

  const headerH = 190;
  const headerY = usableTopY;

  const gapY1 = 36;
  const gapY2 = 30;
  const gapY3 = 26;

  const oneH = 86;
  const matchH = 150;

  // ✅ listH는 2-pass 결과 반영
  let listH = Math.max(baseListH, needListH);
  const imgMin = 320;

  let matchY = usableBottomY - matchH;
  let listY = matchY - gapY3 - listH;
  let oneY = listY - gapY2 - oneH;

  let imgBoxY = headerY + headerH;
  let imgBoxH = oneY - gapY1 - imgBoxY;

  // 이미지 최소 확보
  if (imgBoxH < imgMin) {
    // 부족하면 listH 줄여서 이미지 공간 확보 (하지만 너무 줄어들면 보기 안좋아서 최소만)
    const need = imgMin - imgBoxH;
    listH = Math.max(420, listH - need);
    listY = matchY - gapY3 - listH;
    oneY = listY - gapY2 - oneH;
    imgBoxH = oneY - gapY1 - imgBoxY;
  }
  imgBoxH = Math.max(240, imgBoxH);

  // 이미지 박스
  const imgBoxX = cardX + 210;
  const imgBoxW = cardW - 420;

  // 상단 타이틀
  ctx.fillStyle = "rgba(148,163,184,0.95)";
  ctx.font = "28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
  ctx.fillText("포켓몬 클라이머 유형 테스트", cardX + 56, cardY + 78);

  // 타입명 + 타입칩
  const { base: baseName, type: typeLabel } = splitNameAndType(winner.name);

  ctx.fillStyle = "#e5e7eb";
  ctx.font = "bold 64px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
  const titleX = cardX + 56;
  const titleY = cardY + 168;

  const titleText = `${winner.emoji} ${baseName}`;
  ctx.fillText(titleText, titleX, titleY);

  if (typeLabel) {
    const titleW = ctx.measureText(titleText).width;
    drawPill(ctx, typeLabel, titleX + titleW + 18, titleY - 46, {
      font: "800 24px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'",
      h: 38,
      padX: 16,
      bg: "rgba(124,58,237,0.18)",
      stroke: "rgba(255,255,255,0.14)",
      color: "#ede9fe",
    });
  }

  // 이미지
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

  // 한줄멘트(그대로 유지)
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

  // ===== ✅ 성격/적용: 1컬럼 세로 스택 =====
  const boxX = contentX;
  const boxW = contentW;

  const traitY = listY;
  const applyY = traitY + traitBoxH + stackGap;
  const applyH = Math.max(260, listH - traitBoxH - stackGap);

  // drawChipBox(ctx, boxX, traitY, boxW, traitBoxH, "포켓몬 성격", winner.pokemonTraits);
drawChipBox(ctx, boxX, traitY, boxW, traitBoxH, "", winner.pokemonTraits);
  // 클라이머 적용(리스트 박스) — 기존 유지, 단 … 없는 drawMultilineText 사용
  (function drawListBox(x, w, y, h, title, lines, desiredLines) {
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.strokeStyle = "rgba(255,255,255,0.10)";
    ctx.lineWidth = 2;
    roundRect(ctx, x, y, w, h, 26);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgba(148,163,184,0.95)";
    ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText(title, x + 24, y + 46);

    const contentTop = y + 102;
    const contentH = h - 120;
    const want = Math.min(desiredLines, (lines || []).length);

    let fontSize = 25;
    let lineH = 35;

    while (want > 0 && (want * lineH) > contentH && fontSize > 22) {
      fontSize -= 2;
      lineH -= 2;
    }

    ctx.fillStyle = "#e5e7eb";
    ctx.font = `${fontSize}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'`;

    const maxTextW = w - 48;
    let ty = contentTop;

    (lines || []).slice(0, want).forEach((t) => {
      const bullet = "• ";
      const startX = x + 24;

      const usedLines = drawMultilineText(
        ctx,
        bullet + t,
        startX,
        ty,
        maxTextW,
        lineH,
        Infinity
      );
      ty += usedLines * lineH;
    });
  })(boxX, boxW, applyY, applyH, "클라이머 적용", winner.climberTraits, 5);

  // ===== 궁합 박스(2칸) 유지 =====
  const gapX = 28;
  const colW = Math.floor((contentW - gapX) / 2);
  const remain = contentW - (colW * 2 + gapX);
  const leftW = colW;
  const rightW = colW + remain;
  const leftX = contentX;
  const rightX = leftX + leftW + gapX;

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

  if (winnerId === "wynaut") {
    drawMatchBox(leftX, leftW, matchY, matchH, "🔥 잘 맞는 포켓몬", "없음(전부 무난)");
    drawMatchBox(rightX, rightW, matchY, matchH, "😵 잘 안 맞는 포켓몬", "없음(전부 수용)");
  } else {
    drawMatchBox(leftX, leftW, matchY, matchH, "🔥 잘 맞는 포켓몬", good ? `${good.emoji} ${good.name}` : "-");
    drawMatchBox(rightX, rightW, matchY, matchH, "😵 잘 안 맞는 포켓몬", bad ? `${bad.emoji} ${bad.name}` : "-");
  }
}

async function saveResultWithHeaderNoButtons(filename = "result.png") {
  const appHeader = document.querySelector(".header");        // 상단 헤더(배지+h1+sub)
  const card = document.querySelector("#screenResult .card"); // 결과 카드
  if (!appHeader || !card) return alert("저장할 요소를 못 찾음 🥲");

  // 폰트/이미지 로딩 대기
  if (document.fonts?.ready) {
    try { await document.fonts.ready; } catch {}
  }

  // 결과 이미지 CORS 보험
  const imgEl = document.querySelector("#resultImg");
  if (imgEl) imgEl.crossOrigin = "anonymous";
  if (imgEl && !imgEl.complete) {
    await new Promise((r) => {
      const done = () => { imgEl.onload = null; imgEl.onerror = null; r(); };
      imgEl.onload = done; imgEl.onerror = done;
    });
  }

  // ✅ 캡처용 임시 컨테이너(화면 밖)
  const temp = document.createElement("div");
  temp.style.position = "fixed";
  temp.style.left = "-99999px";
  temp.style.top = "0";
  temp.style.padding = "28px 18px 40px";   // .app 느낌
  temp.style.width = card.getBoundingClientRect().width + "px";
  temp.style.color = getComputedStyle(document.body).color;
  temp.style.fontFamily = getComputedStyle(document.body).fontFamily;

  // 배경은 body랑 동일하게(그라데이션)
  // (브라우저별로 getComputedStyle(body).background가 빈 경우가 있어서 backgroundImage/Color 둘 다 세팅)
  const bodyStyle = getComputedStyle(document.body);
  temp.style.backgroundImage = bodyStyle.backgroundImage;
  temp.style.backgroundColor = bodyStyle.backgroundColor;

  // ✅ 헤더 복사: 배지 + 제목은 살리고, 도움주신 멋쟁이들(.sub) 제거
  const headerClone = appHeader.cloneNode(true);
  headerClone.querySelector(".sub")?.remove();

  // ✅ 카드 복사: 버튼(nav) 제거
  const cardClone = card.cloneNode(true);
  cardClone.querySelectorAll(".nav").forEach((n) => n.remove());

  // 혹시 캔버스 섞이면 제거(보험)
  cardClone.querySelector("#cardCanvas")?.remove();
  cardClone.querySelector("#btnBulkSaveAll")?.remove();

  temp.appendChild(headerClone);
  temp.appendChild(cardClone);
  document.body.appendChild(temp);

  try {
    const canvas = await html2canvas(temp, {
      backgroundColor: null,                 // temp 배경 그대로 쓰게
      scale: Math.max(2, window.devicePixelRatio || 2),
      useCORS: true,
      allowTaint: true,
      logging: false,
    });

    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png", 1.0)
    );
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
  const winnerId = btnSaveCard.dataset.winner || CURRENT_WINNER_ID || "pikachu";
  await saveResultWithHeaderNoButtons(`${winnerId}-result.png`);
});
  // init
  goStart();
// ==============================
// 1회성: 결과화면에 '전체 저장' 버튼 자동 추가
// ==============================
function injectBulkSaveButton() {
  const nav = document.querySelector("#screenResult .nav");
  if (!nav) return;

  // 중복 방지
  if (document.querySelector("#btnBulkSaveAll")) return;

  const btn = document.createElement("button");
  btn.id = "btnBulkSaveAll";
  btn.className = "btn";
  btn.textContent = "모든 결과 카드 저장(1회성)";
  btn.style.marginLeft = "8px";

  btn.addEventListener("click", async () => {
    // 유저 클릭 제스처로 실행 → 다중 저장 차단 덜 걸림
    await bulkSaveAllCardsSameFormat({ delayMs: 650 });
  });

  nav.appendChild(btn);
}
})();
