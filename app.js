// app.js (완성본) - 11문항(Q1~Q11) + 14포켓몬 타입 매핑
// - 선택지 클릭/엔터 선택 시 자동 다음 문항 이동 (마지막이면 결과로)
// - "다음" 버튼은 유지 (자동진행이라 거의 안 씀)

(() => {
  const DOODLE_PATH = (id) => `assets/doodles/${id}.png`;

  // -----------------------------
  // 1) 포켓몬 타입(14)
  // -----------------------------
  const POKEMON = [
    {
      id: "togepi",
      name: "토게피(보호본능유발형)",
      emoji: "🍀",
      oneLiner: "“괜찮아 괜찮아 거의 다 왔어!”",
      pokemonTraits: ["긴장 잘 함", "응원 받으면 급성장", "보호본능 유발"],
      climberTraits: ["응원 받으면 폼 올라옴", "초심 잃지 않는 타입", "함께 타면 다들 챙기게 됨"],
    },
    {
      id: "jirachi",
      name: "자라치(버프형)",
      emoji: "⭐",
      oneLiner: "“너랑 하니까 오늘 다 잘 풀린다”",
      pokemonTraits: ["응원 요정", "분위기 메이커", "주변을 끌어올림"],
      climberTraits: ["파티/세션 버프 담당", "칭찬·응원 자주 함", "같이 타면 전체 컨디션 상승"],
    },
    {
      id: "porygon",
      name: "폴리곤(분석형)",
      emoji: "💾",
      oneLiner: "“감각 말고 데이터로 푼다.”",
      pokemonTraits: ["베타 분석 집착", "논리 우선", "계산형"],
      climberTraits: ["각도·거리·순서 분석", "정리하면 바로 좋아짐", "설명 잘함(근데 길어질 수 있음)"],
    },
    {
      id: "psyduck",
      name: "고라파덕(감각폭주형)",
      emoji: "🤯",
      oneLiner: "“방금 그거 왜 된 거야?”",
      pokemonTraits: ["감각 ON/OFF", "될 땐 미침", "본인도 이유 모름"],
      climberTraits: ["컨디션 타는 날엔 연속 완등", "감각 터지면 난이도 뚫음", "본인도 놀람"],
    },
    {
      id: "gengar",
      name: "팬텀(트릭형)",
      emoji: "👻",
      oneLiner: "“저렇게 가는 사람 처음 봄”",
      pokemonTraits: ["장난꾸러기", "정석 거부", "창의력 과다"],
      climberTraits: ["변칙 베타 잘 찾음", "루트파인딩이 무기", "성공하면 다들 충격"],
    },
    {
      id: "pikachu",
      name: "피카츄(각성형)",
      emoji: "⚡",
      oneLiner: "“지금 감 올라오는 중.”",
      pokemonTraits: ["몸이 먼저 반응", "순간 몰입력 최상", "각성 구간"],
      climberTraits: ["플래시에 강함", "흐름 타면 연속 완등", "중급에서 한 단계 점프 중"],
    },
    {
      id: "eevee",
      name: "이브이(멀티성장형)",
      emoji: "🧬",
      oneLiner: "“성장속도 미쳤네”",
      pokemonTraits: ["적응력 최강", "흡수력 좋음", "가능성 덩어리"],
      climberTraits: ["조언 흡수 빠름", "스타일 다양하게 시도", "조용히 급성장"],
    },
    {
      id: "ditto",
      name: "메타몽(베타흡수형)",
      emoji: "🔄",
      oneLiner: "“좋은 건 바로 복붙.”",
      pokemonTraits: ["고집 없음", "관찰형", "유연한 변신"],
      climberTraits: ["남 등반 보고 바로 적용", "상황 대응 빠름", "같이 타면 급성장함"],
    },
    {
      id: "charizard",
      name: "리자몽(다이나믹형)",
      emoji: "🔥",
      oneLiner: "“멋있으면 됐지.”",
      pokemonTraits: ["화려함", "리스크 감수", "임팩트 중시"],
      climberTraits: ["다이노·런지 러버", "영상각 장인", "한 방 있는 타입"],
    },
    {
      id: "mewtwo",
      name: "뮤츠(집착&완벽주의형)",
      emoji: "🧠",
      oneLiner: "“이 문제 안 되면 다음 없다.”",
      pokemonTraits: ["자존심", "집착", "완벽주의"],
      climberTraits: ["한 문제 올인", "끝까지 파는 타입", "성공하면 포효(속으로)"],
    },
    {
      id: "lucario",
      name: "루카리오(스태틱형)",
      emoji: "🥋",
      oneLiner: "“와 진짜 정석이다”",
      pokemonTraits: ["절제", "정석", "집중력"],
      climberTraits: ["깔끔한 무브", "안정적인 완등", "기본기 탄탄"],
    },
    {
      id: "snorlax",
      name: "잠만보(효율안정형)",
      emoji: "💤",
      oneLiner: "“쉬는 것도 전략입니다.”",
      pokemonTraits: ["느긋", "효율", "에너지 관리"],
      climberTraits: ["할 수 있는 문제만 정확히", "휴식도 루틴", "여유로운데 잘함"],
    },
    {
      id: "dragonite",
      name: "망나뇽(착한고수형)",
      emoji: "🐲",
      oneLiner: "“순둥한데 왜 이렇게 잘해?”",
      pokemonTraits: ["파워+체력", "온화함", "숨은 고수"],
      climberTraits: ["일정한 퍼포먼스", "남도 잘 챙김", "기복 거의 없음"],
    },
    {
      id: "rayquaza",
      name: "레쿠쟈(지배자형)",
      emoji: "🐉",
      oneLiner: "“혼자 다른 난이도 타는 것 같아”",
      pokemonTraits: ["압도적 존재감", "독립적", "고독한 강자"],
      climberTraits: ["남 신경 X", "자기 페이스 확고", "공중 동작 강함"],
    },
  ];

  const ids = POKEMON.map((p) => p.id);
  const emptyScore = () => Object.fromEntries(ids.map((id) => [id, 0]));
  const add = (score, id, pts) => {
    score[id] = (score[id] || 0) + pts;
  };

  // -----------------------------
  // 2) 궁합(원하면 수정 가능)
  // - 없으면 그냥 "-"로 나옴
  // -----------------------------
  const COMPAT = {
    togepi:   { good: "jirachi",  bad: "mewtwo"   },
    jirachi:  { good: "togepi",   bad: "rayquaza" },

    porygon:  { good: "lucario",  bad: "psyduck"  },
    psyduck:  { good: "pikachu",  bad: "porygon"  },

    gengar:   { good: "ditto",    bad: "lucario"  },
    pikachu:  { good: "eevee",    bad: "snorlax"  },

    eevee:    { good: "pikachu",  bad: "mewtwo"   },
    ditto:    { good: "eevee",    bad: "porygon"  },

    charizard:{ good: "pikachu",  bad: "snorlax"  },
    mewtwo:   { good: "lucario",  bad: "snorlax"  },

    lucario:  { good: "porygon",  bad: "gengar"   },
    snorlax:  { good: "dragonite",bad: "mewtwo"   },

    dragonite:{ good: "jirachi",  bad: "gengar"   },
    rayquaza: { good: "mewtwo",   bad: "jirachi"  },
  };

  // -----------------------------
  // 3) 질문(11개) + 점수 매핑
  // - “너무 티 나지 않게” 분배
  // - 각 선택지마다 1순위 + 2순위(보조) 점수
  // -----------------------------
  const QUESTIONS = [
    {
      title: "Q1. 다음 중 가장 빡치는 상황은?",
      options: [
        { key: "A", text: "계속 같은 구간에서 막힐 때", points: [["mewtwo", 2], ["lucario", 1]] },
        { key: "B", text: "존버하던 문제를 실력 비슷한 사람이 먼저 깰 때", points: [["mewtwo", 2], ["rayquaza", 1]] },
        { key: "C", text: "내가 생각하던 무브랑 전혀 다른 방식으로 누가 풀어버렸을 때", points: [["gengar", 2], ["porygon", 1]] },
        { key: "D", text: "내 그레이드 문제를 많이 풀었는데 막상 뿌무는 없을 때", points: [["charizard", 2], ["pikachu", 1]] },
      ],
    },
    {
      title: "Q2. 다른 사람한테 들었을 때 제일 기분 좋은 말은?",
      options: [
        { key: "A", text: "무브 진짜 깔끔하다", points: [["lucario", 2], ["dragonite", 1]] },
        { key: "B", text: "방금 그 동작 진짜 멋있었다", points: [["charizard", 2], ["pikachu", 1]] },
        { key: "C", text: "아 그 베타 나도 써봐야겠다", points: [["gengar", 2], ["porygon", 1]] },
        { key: "D", text: "너랑 하니까 오늘 다 잘 풀린다", points: [["jirachi", 2], ["togepi", 1]] },
      ],
    },
    {
      title: "Q3. 존버 문제를 풀지 못했을 때 집 가면서 드는 생각은?",
      options: [
        { key: "A", text: "그래도 오늘 재밌었으니 됐지", points: [["jirachi", 2], ["togepi", 1]] },
        { key: "B", text: "저거 탈거 언제지 그 전에 다시 올까..?", points: [["mewtwo", 2], ["snorlax", 1]] },
        { key: "C", text: "다른 방법으로 풀 수 있나? 다음엔 이렇게 시도해 봐야겠다", points: [["porygon", 2], ["ditto", 1]] },
        { key: "D", text: "완등 못해도 저기까지만이라도 풀고 싶었는데", points: [["pikachu", 2], ["charizard", 1]] },
      ],
    },
    {
      title: "Q4. 다음 중 가장 설레는 상황은?",
      options: [
        { key: "A", text: "오늘 암장에 아는 사람 많을 때", points: [["jirachi", 2], ["eevee", 1]] },
        { key: "B", text: "누가 나한테 “이거 어떻게 해?” 물어볼 때", points: [["dragonite", 2], ["lucario", 1]] },
        { key: "C", text: "조명+각도 완벽한 루트 만났을 때", points: [["charizard", 2], ["pikachu", 1]] },
        { key: "D", text: "‘뭔가 다르게 풀 수 있을 것 같은데?’ 싶은 문제를 발견했을 때", points: [["gengar", 2], ["porygon", 1]] },
      ],
    },
    {
      title: "Q5. 가장 부담스러운 순간은?",
      options: [
        { key: "A", text: "뒤에서 많은 사람들이 나이스 외쳐줄 때", points: [["togepi", 2], ["psyduck", 1]] },
        { key: "B", text: "모르는 사람들이 잘하는 거 같다고 말하면서 쳐다볼 때", points: [["charizard", 2], ["pikachu", 1]] },
        { key: "C", text: "잘못 푼 거 같은데 사람들이 내 무브를 따라할 때", points: [["porygon", 2], ["gengar", 1]] },
        { key: "D", text: "힘 다 털렸는데 뭔가 보여줘야 할 것 같은 분위기가 깔렸을 때", points: [["charizard", 2], ["mewtwo", 1]] },
      ],
    },
    {
      title: "Q6. 가장 인스타그램 스토리로 올리고 싶은 장면은?",
      options: [
        { key: "A", text: "나만의 무브로 문제를 풀어낸 순간", points: [["gengar", 2], ["rayquaza", 1]] },
        { key: "B", text: "허당짓 했는데 다 같이 웃는 장면", points: [["jirachi", 2], ["togepi", 1]] },
        { key: "C", text: "한 번에 터진 멋있는 동작", points: [["charizard", 2], ["pikachu", 1]] },
        { key: "D", text: "어제까지 안 되던 게 오늘 자연스럽게 풀린 순간", points: [["eevee", 2], ["pikachu", 1]] },
      ],
    },
    {
      title: "Q7. 다음 중 가장 위로되는 순간은?",
      options: [
        { key: "A", text: "“오늘도 재밌었다”는 말 들을 때", points: [["jirachi", 2], ["togepi", 1]] },
        { key: "B", text: "조용히 완등하고 그대로 집 갈 때", points: [["snorlax", 2], ["rayquaza", 1]] },
        { key: "C", text: "“덕분에 풀었어요”라는 말 들을 때", points: [["dragonite", 2], ["lucario", 1]] },
        { key: "D", text: "나보다 잘하는 사람도 내 존버 문제를 어려워할 때", points: [["mewtwo", 2], ["porygon", 1]] },
      ],
    },
    {
      title: "Q8. 잘 안 풀리는 문제를 마주했을 때 속마음",
      options: [
        { key: "A", text: "조금만 더 하면 될 거 같은데..", points: [["pikachu", 2], ["eevee", 1]] },
        { key: "B", text: "다른 방법으로 해볼까?", points: [["porygon", 2], ["gengar", 1]] },
        { key: "C", text: "제발 누가 한 번만 풀어주면 좋겠다", points: [["ditto", 2], ["eevee", 1]] },
        { key: "D", text: "오늘 이거 풀어야 집 간다.", points: [["mewtwo", 2], ["charizard", 1]] },
      ],
    },
    {
      title: "Q9. 다음 중 가장 만족스러운 마무리는?",
      options: [
        { key: "A", text: "다 같이 웃으면서 귀가", points: [["jirachi", 2], ["eevee", 1]] },
        { key: "B", text: "목표 하나 달성", points: [["mewtwo", 2], ["lucario", 1]] },
        { key: "C", text: "영상 하나 건짐", points: [["charizard", 2], ["pikachu", 1]] },
        { key: "D", text: "방금 느낌 좋았다 싶은 순간이 한 번이라도 있었을 때", points: [["pikachu", 2], ["eevee", 1]] },
      ],
    },
    {
      title: "Q10. 다음 중 가장 나랑 안 맞는 사람은?",
      options: [
        { key: "A", text: "베타 강요하는 사람", points: [["gengar", 2], ["rayquaza", 1]] },
        { key: "B", text: "자기 트라이 끝나면 바로 자리 뜨는 사람", points: [["jirachi", 2], ["togepi", 1]] },
        { key: "C", text: "남 무브 평가하는 사람", points: [["charizard", 2], ["togepi", 1]] },
        { key: "D", text: "루트파인딩 중인데 말거는 사람", points: [["rayquaza", 2], ["snorlax", 1]] },
      ],
    },
    {
      title: "Q11. 가장 스트레스 받는 상황은?",
      options: [
        { key: "A", text: "못할 거 같은데 계속 “할 수 있어”라고 부추길 때", points: [["snorlax", 2], ["togepi", 1]] },
        { key: "B", text: "알려달래서 설명해줬더니 전혀 반영하지 않을 때", points: [["porygon", 2], ["dragonite", 1]] },
        { key: "C", text: "계속 생각나던 문제가 끝내 풀리지 않을 때", points: [["mewtwo", 2], ["lucario", 1]] },
        { key: "D", text: "문제 루트가 겹쳐서 내 페이스대로 붙어볼 수 없을 때", points: [["rayquaza", 2], ["snorlax", 1]] },
      ],
    },
  ];

  // -----------------------------
  // 4) DOM 참조 (기존 구조 그대로)
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
      btnNext.textContent = current === QUESTIONS.length - 1 ? "결과 보기 ✨" : "다음 →";
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

  // 동점 처리: 1) 점수 높은 순 2) 보조 규칙(우선순위)
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

    // 우선순위(원하면 수정)
    const priority = [
      "mewtwo",
      "lucario",
      "charizard",
      "pikachu",
      "eevee",
      "gengar",
      "porygon",
      "rayquaza",
      "dragonite",
      "ditto",
      "snorlax",
      "jirachi",
      "togepi",
      "psyduck",
    ];
    for (const p of priority) if (winners.includes(p)) return p;
    return winners[0];
  }

  function fixedMatches(winnerId) {
    const rule = COMPAT[winnerId] || {};
    const good = POKEMON.find((p) => p.id === rule.good) || null;
    const bad = POKEMON.find((p) => p.id === rule.bad) || null;
    return { good, bad };
  }

  function renderFixedChip(target, pokemon) {
    if (!target) return;
    target.innerHTML = "";
    if (!pokemon) return;
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = `${pokemon.emoji} ${pokemon.name}`;
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

    const { good, bad } = fixedMatches(winnerId);
    renderFixedChip(goodMatches, good);
    renderFixedChip(badMatches, bad);

    if (btnSaveCard) btnSaveCard.dataset.winner = winnerId;
  }

  // -----------------------------
  // 5) 결과 카드 캔버스 저장(선택)
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

  function drawWrappedText(ctx2, text, x, y, maxWidth, lineHeight, maxLines = 3) {
    const words = text.split(" ");
    let line = "";
    let lines = [];
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (ctx2.measureText(test).width <= maxWidth) line = test;
      else {
        lines.push(line);
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

    const W = cardCanvas.width,
      H = cardCanvas.height;
    ctx.clearRect(0, 0, W, H);

    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#0b0f19");
    bg.addColorStop(0.5, "rgba(124,58,237,0.35)");
    bg.addColorStop(1, "rgba(167,139,250,0.20)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    const pad = 64;
    const cardX = pad,
      cardY = pad,
      cardW = W - pad * 2,
      cardH = H - pad * 2;

    ctx.fillStyle = "rgba(17,24,39,0.90)";
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 3;
    roundRect(ctx, cardX, cardY, cardW, cardH, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgba(148,163,184,0.95)";
    ctx.font = "28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText("포켓몬 클라이머 유형 테스트", cardX + 44, cardY + 70);

    ctx.fillStyle = "#e5e7eb";
    ctx.font = "bold 64px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText(`${winner.emoji} ${winner.name}`, cardX + 44, cardY + 155);

    ctx.fillStyle = "rgba(245,243,255,0.98)";
    ctx.font = "36px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    const maxTextW = cardW - 44 * 2 - 560;
    drawWrappedText(ctx, winner.oneLiner, cardX + 44, cardY + 220, Math.max(420, maxTextW), 44, 2);

    try {
      const img = await loadImage(DOODLE_PATH(winner.id));
      const imgW = 520,
        imgH = 520;
      const imgX = cardX + cardW - imgW - 44;
      const imgY = cardY + 250;

      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 2;
      roundRect(ctx, imgX - 18, imgY - 18, imgW + 36, imgH + 36, 40);
      ctx.fill();
      ctx.stroke();

      ctx.drawImage(img, imgX, imgY, imgW, imgH);
    } catch {
      ctx.fillStyle = "rgba(148,163,184,0.9)";
      ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      ctx.fillText("※ assets/doodles/에 낙서 이미지 넣으면 여기에 표시돼요", cardX + 44, cardY + 330);
    }

    const boxY = cardY + 820;
    const boxH = 360;
    const gap = 26;
    const boxW = (cardW - 44 * 2 - gap) / 2;
    const leftX = cardX + 44;
    const rightX = leftX + boxW + gap;

    function drawBox(x, y, title, lines) {
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      ctx.lineWidth = 2;
      roundRect(ctx, x, y, boxW, boxH, 28);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(148,163,184,0.95)";
      ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      ctx.fillText(title, x + 26, y + 46);

      ctx.fillStyle = "#e5e7eb";
      ctx.font = "28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      let ty = y + 96;
      lines.slice(0, 5).forEach((t) => {
        ctx.fillText(`• ${t}`, x + 26, ty);
        ty += 44;
      });
    }

    drawBox(leftX, boxY, "포켓몬 성격", winner.pokemonTraits);
    drawBox(rightX, boxY, "클라이머 적용", winner.climberTraits);

    ctx.fillStyle = "rgba(148,163,184,0.95)";
    ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText("🔥 잘 맞는 포켓몬", leftX, cardY + cardH - 92);
    ctx.fillText("😵 잘 안 맞는 포켓몬", rightX, cardY + cardH - 92);

    ctx.fillStyle = "#e5e7eb";
    ctx.font = "30px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText(good ? `${good.emoji} ${good.name}` : "-", leftX, cardY + cardH - 48);
    ctx.fillText(bad ? `${bad.emoji} ${bad.name}` : "-", rightX, cardY + cardH - 48);

    ctx.fillStyle = "rgba(148,163,184,0.9)";
    ctx.font = "24px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText("#클라이밍 #볼더링 #유형테스트", cardX + 44, cardY + cardH - 16);
  }

  async function saveCanvasAsPng(filename = "result-card.png") {
    await drawResultCard();
    if (!cardCanvas) return;
    const url = cardCanvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
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

    const shareText =
`${winner.emoji} ${winner.name}
${winner.oneLiner}

🔥 잘 맞는 포켓몬: ${good?.name ?? "-"}
😵 잘 안 맞는 포켓몬: ${bad?.name ?? "-"}

#클라이밍 #볼더링 #유형테스트`;

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
    await saveCanvasAsPng(`${winnerId}-result.png`);
  });

  // init
  goStart();
})();
