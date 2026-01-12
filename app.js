// app.js (전체)
// 변경점: 선택지 클릭/엔터 선택 시 -> 자동으로 다음 문항으로 넘어감(마지막이면 결과로)
// - "다음" 버튼은 그대로 두되, 자동진행이라 거의 안 쓰게 됨(원하면 HTML/CSS에서 숨겨도 됨)

(() => {
  const DOODLE_PATH = (id) => `assets/doodles/${id}.png`;

  const POKEMON = [
    { id:"pikachu",  name:"피카츄형", emoji:"⚡",
      oneLiner:"“오늘도 암장에 전기 공급하러 왔습니다.”",
      pokemonTraits:["존재감 MAX","밝고 에너지 넘침","주변 분위기 끌어올림"],
      climberTraits:["암장 분위기 메이커","자주 보이는 단골","같이 타면 무조건 재밌음","꾸준히 성장"]
    },
    { id:"gengar",   name:"팬텀형", emoji:"👻",
      oneLiner:"“말은 없는데, 항상 거기 있음.”",
      pokemonTraits:["장난기 있음","혼자 있는 거 선호","묘한 존재감"],
      climberTraits:["혼클 선호","말 적은데 잘 탐","조용한데 은근 눈에 띔"]
    },
    { id:"rayquaza", name:"레쿠쟈형", emoji:"🐉",
      oneLiner:"“남들 베타 안 보고 혼자 날아오르는 타입.”",
      pokemonTraits:["고독한 강자","자유로운 스타일","압도적 존재감"],
      climberTraits:["자기 페이스 확고","남 베타 거의 안 탐","성공하면 간지 폭발"]
    },
    { id:"mew",      name:"뮤형", emoji:"🌌",
      oneLiner:"“조용히 타는데 알고 보면 제일 무서운 사람.”",
      pokemonTraits:["신비로움","만능형","실력 숨김"],
      climberTraits:["조용하게 개잘함","고수인데 티 안 냄","고인물 포지션"]
    },
    { id:"lucario",  name:"루카리오형", emoji:"🥋",
      oneLiner:"“잘 타는 이유가 다 있는 사람.”",
      pokemonTraits:["절제된 강함","노력형 엘리트","밸런스형"],
      climberTraits:["체계적으로 성장","기본기+힘 균형","‘저 사람 잘한다’ 소리 나옴"]
    },
    { id:"eevee",    name:"이브이형", emoji:"🧬",
      oneLiner:"“누구랑 타도 잘 맞는 타입.”",
      pokemonTraits:["적응력 최강","사교성 좋음","환경 따라 변화"],
      climberTraits:["누구랑도 잘 어울림","다양한 스타일 시도","암장 적응력 GOAT"]
    },
    { id:"mewtwo",   name:"뮤츠형", emoji:"🧠",
      oneLiner:"“이 문제 안 되면 집에 안 가는 스타일.”",
      pokemonTraits:["목표 지향","집요함/몰입형","혼자 불타는 타입"],
      climberTraits:["목표 문제 집착","실패해도 계속 트라이","멘탈 혼자 불타오름"]
    },
    { id:"charizard",name:"리자몽형", emoji:"🔥",
      oneLiner:"“카메라 켜지면 갑자기 비행 타입.”",
      pokemonTraits:["화려함","자신감","주목받는 데 익숙"],
      climberTraits:["다이나믹/화려한 무브","영상 찍히면 더 잘함","시선 집중형"]
    },
    { id:"bulbasaur",name:"이상해씨형", emoji:"🌱",
      oneLiner:"“기본기 쌓다가 어느 날 갑자기 세짐.”",
      pokemonTraits:["안정감","기본기 탄탄","꾸준형"],
      climberTraits:["기본기 위주 등반","안정적인 완등","티 안 나게 계속 성장"]
    },
    { id:"psyduck",  name:"고라파덕형", emoji:"🤯",
      oneLiner:"“안 되는데 웃고 있는 게 더 신기한 사람.”",
      pokemonTraits:["허당미","감정표현 솔직","공감 유발"],
      climberTraits:["실패 리액션 풍부","잘 안 돼도 웃김","다들 응원하게 됨"]
    },
    { id:"snorlax",  name:"잠만보형", emoji:"💤",
      oneLiner:"“쉬는 것도 전략입니다.”",
      pokemonTraits:["느긋","에너지 관리 잘함","한 방 있음"],
      climberTraits:["휴식 길지만","할 때는 정확","효율 중시"]
    },
    { id:"lapras",   name:"라프라스형", emoji:"🌊",
      oneLiner:"“보고 있으면 마음이 먼저 풀림.”",
      pokemonTraits:["온화함","감성적","주변을 편하게 만듦"],
      climberTraits:["부드러운 무브","감성 중시","보는 사람 편안"]
    },
    { id:"dragonite",name:"망나뇽형", emoji:"🐲",
      oneLiner:"“자기 트라이보다 남 완등을 더 기뻐함.”",
      pokemonTraits:["착함","믿음직","힘 있는데 순함"],
      climberTraits:["남 잘 챙김","코칭 잘함","착한 강자"]
    },
    { id:"ditto",    name:"메타몽형", emoji:"🔄",
      oneLiner:"“오늘은 어떤 클라이머로 변신할지 모름.”",
      pokemonTraits:["유연함","정체성 고정 X","상황 적응력 최강"],
      climberTraits:["다른 사람 무브 흡수 잘함","어떤 문제든 적응","찍먹도 완등도 다 함"]
    },
  ];

  const ids = POKEMON.map(p => p.id);
  const emptyScore = () => Object.fromEntries(ids.map(id => [id, 0]));
  const add = (score, id, pts) => { score[id] = (score[id] || 0) + pts; };

  const COMPAT = {
    pikachu:   { good: "eevee",     bad: "gengar"    },
    eevee:     { good: "pikachu",   bad: "mewtwo"    },

    gengar:    { good: "mew",       bad: "pikachu"   },
    mew:       { good: "gengar",    bad: "charizard" },

    mewtwo:    { good: "lucario",   bad: "snorlax"   },
    snorlax:   { good: "lapras",    bad: "mewtwo"    },

    charizard: { good: "pikachu",   bad: "mew"       },

    bulbasaur: { good: "lucario",   bad: "ditto"     },

    lucario:   { good: "bulbasaur", bad: "rayquaza"  },

    rayquaza:  { good: "ditto",     bad: "eevee"     },

    psyduck:   { good: "pikachu",   bad: "mewtwo"    },

    lapras:    { good: "snorlax",   bad: "rayquaza"  },

    dragonite: { good: "pikachu",   bad: "gengar"    },

    ditto:     { good: "rayquaza",  bad: "bulbasaur" },
  };

  const QUESTIONS = [
    { title:"Q1. 다음 중 가장 서운한 순간은?",
      options:[
        {key:"A", text:"개쩌는 무브를 했는데 아무도 나이스를 안 외쳐줌", points:[["pikachu",2],["charizard",1]]},
        {key:"B", text:"내가 열심히 조언해줬는데 반응이 별로 좋지 않음", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"계속 트라이했는데 결국 못 풀고 암장 닫을 시간", points:[["mewtwo",2],["bulbasaur",1]]},
        {key:"D", text:"조용히 잘 탔는데 아무도 내가 잘한 걸 모름", points:[["mew",2],["gengar",1]]},
      ]},
    { title:"Q2. 다음 중 가장 부담스러운 순간은?",
      options:[
        {key:"A", text:"뒤에서 사람들이 몰려서 응원해줄 때", points:[["gengar",2],["lapras",1]]},
        {key:"B", text:"다들 내 무브를 따라 하기 시작할 때", points:[["rayquaza",2],["mew",1]]},
        {key:"C", text:"목표 문제 앞에서 “이거 될 것 같아?” 소리 들을 때", points:[["mewtwo",2],["charizard",1]]},
        {key:"D", text:"카메라 켜진 상태에서 실패할 때", points:[["psyduck",2],["charizard",1]]},
      ]},
    { title:"Q3. 다음 중 가장 기분 좋은 순간은?",
      options:[
        {key:"A", text:"완등하자마자 하이파이브 터질 때", points:[["pikachu",2],["eevee",1]]},
        {key:"B", text:"내 한마디로 누가 바로 완등했을 때", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"남들 못 푼 문제를 혼자 깔끔하게 풀었을 때", points:[["mew",2],["lucario",1]]},
        {key:"D", text:"무브가 너무 예쁘게 들어맞았을 때", points:[["lapras",2],["bulbasaur",1]]},
      ]},
    { title:"Q4. 다음 중 가장 못 참는 상황은?",
      options:[
        {key:"A", text:"암장 분위기가 너무 싸할 때", points:[["pikachu",2],["eevee",1]]},
        {key:"B", text:"분명 될 것 같은데 계속 안 될 때", points:[["mewtwo",2],["ditto",1]]},
        {key:"C", text:"내 루트에 계속 끼어드는 사람 있을 때", points:[["rayquaza",2],["gengar",1]]},
        {key:"D", text:"사람이 너무 많아서 집중 안 될 때", points:[["gengar",2],["snorlax",1]]},
      ]},
    { title:"Q5. 다음 중 가장 오래 기억에 남는 하루는?",
      options:[
        {key:"A", text:"친구들이랑 웃으면서 잔뜩 탄 날", points:[["eevee",2],["pikachu",1]]},
        {key:"B", text:"한 문제를 집요하게 파서 결국 푼 날", points:[["mewtwo",2],["lucario",1]]},
        {key:"C", text:"아무도 안 보는데 혼자 완벽하게 탄 날", points:[["mew",2],["gengar",1]]},
        {key:"D", text:"영상으로 남겨놓고 계속 돌려보는 무브 나온 날", points:[["charizard",2],["lapras",1]]},
      ]},
    { title:"Q6. 다음 중 가장 나답다고 느끼는 장면은?",
      options:[
        {key:"A", text:"암장 한가운데서 떠들며 타고 있는 나", points:[["pikachu",2],["eevee",1]]},
        {key:"B", text:"누군가 옆에서 조용히 코칭하는 나", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"벽 앞에서 혼자 무브 상상하는 나", points:[["bulbasaur",2],["mew",1]]},
        {key:"D", text:"한참 쉬다가 “지금이다” 하고 올라가는 나", points:[["snorlax",2],["lapras",1]]},
      ]},
    { title:"Q7. 다음 중 가장 하기 싫은 말은?",
      options:[
        {key:"A", text:"“오늘 왜 이렇게 조용해?”", points:[["gengar",2],["mew",1]]},
        {key:"B", text:"“그냥 이렇게 하면 되잖아”", points:[["rayquaza",2],["mewtwo",1]]},
        {key:"C", text:"“이거 오늘은 안 될 것 같은데”", points:[["mewtwo",2],["lucario",1]]},
        {key:"D", text:"“굳이 이렇게까지 해야 돼?”", points:[["lucario",2],["bulbasaur",1]]},
      ]},
    { title:"Q8. 다음 중 가장 설레는 상황은?",
      options:[
        {key:"A", text:"오늘 암장에 아는 사람이 많을 때", points:[["eevee",2],["pikachu",1]]},
        {key:"B", text:"누가 나한테 “이거 어떻게 해?” 물어볼 때", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"남들이 잘 안 하는 문제 발견했을 때", points:[["rayquaza",2],["ditto",1]]},
        {key:"D", text:"조명 + 각도 완벽한 루트 만났을 때", points:[["lapras",2],["charizard",1]]},
      ]},
    { title:"Q9. 다음 중 가장 스트레스 받는 상황은?",
      options:[
        {key:"A", text:"아무도 반응 안 해줄 때", points:[["pikachu",2],["charizard",1]]},
        {key:"B", text:"설명했는데 안 듣는 것 같을 때", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"목표 문제에서 계속 튕길 때", points:[["mewtwo",2],["bulbasaur",1]]},
        {key:"D", text:"내 리듬이 계속 끊길 때", points:[["snorlax",2],["gengar",1]]},
      ]},
    { title:"Q10. 다음 중 가장 위로되는 순간은?",
      options:[
        {key:"A", text:"“오늘도 재밌었다”는 말 들을 때", points:[["psyduck",2],["eevee",1]]},
        {key:"B", text:"“덕분에 풀었어요”라는 말", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"결국 목표 문제 하나라도 잡았을 때", points:[["mewtwo",2],["charizard",1]]},
        {key:"D", text:"조용히 타고 집에 갈 때", points:[["gengar",2],["lapras",1]]},
      ]},
    { title:"Q11. 다음 중 암장에서 제일 불편한 포지션은?",
      options:[
        {key:"A", text:"아무도 모르는 채 혼자 타는 사람", points:[["pikachu",2],["eevee",1]]},
        {key:"B", text:"도움 요청을 계속 받는 사람", points:[["gengar",2],["snorlax",1]]},
        {key:"C", text:"다들 기대하는 에이스 포지션", points:[["lucario",2],["charizard",1]]},
        {key:"D", text:"사람들 시선에서 벗어난 구석", points:[["gengar",2],["mew",1]]},
      ]},
    { title:"Q12. 다음 중 가장 후회되는 행동은?",
      options:[
        {key:"A", text:"더 재밌게 못 놀고 온 날", points:[["eevee",2],["psyduck",1]]},
        {key:"B", text:"말해줄 걸 괜히 안 말한 것", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"포기하고 내려온 트라이", points:[["mewtwo",2],["lucario",1]]},
        {key:"D", text:"괜히 영상 안 찍은 날", points:[["charizard",2],["lapras",1]]},
      ]},
    { title:"Q13. 다음 중 가장 집중 잘 되는 상황은?",
      options:[
        {key:"A", text:"주변에서 리액션이 있을 때", points:[["pikachu",2],["charizard",1]]},
        {key:"B", text:"둘이서 조용히 얘기하며 탈 때", points:[["dragonite",2],["eevee",1]]},
        {key:"C", text:"아무도 없는 벽 앞에 섰을 때", points:[["mew",2],["gengar",1]]},
        {key:"D", text:"음악만 들리며 리듬 탈 때", points:[["lapras",2],["snorlax",1]]},
      ]},
    { title:"Q14. 다음 중 가장 나랑 안 맞는 사람은?",
      options:[
        {key:"A", text:"분위기 안 맞춰주는 사람", points:[["pikachu",2],["eevee",1]]},
        {key:"B", text:"남 트라이 무시하는 사람", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"베타 강요하는 사람", points:[["rayquaza",2],["mew",1]]},
        {key:"D", text:"시끄러운 사람", points:[["gengar",2],["lapras",1]]},
      ]},
    { title:"Q15. 다음 중 가장 만족스러운 마무리는?",
      options:[
        {key:"A", text:"다 같이 웃으면서 귀가", points:[["eevee",2],["pikachu",1]]},
        {key:"B", text:"남 완등 보고 뿌듯", points:[["dragonite",2],["lucario",1]]},
        {key:"C", text:"목표 하나 달성", points:[["mewtwo",2],["charizard",1]]},
        {key:"D", text:"영상 하나 건짐", points:[["lapras",2],["charizard",1]]},
      ]},
    { title:"Q16. 지금 당장 더 끌리는 한 문장은?",
      tiebreaker:true,
      options:[
        {key:"A", text:"“오늘은 사람 많을수록 좋다”", points:[["eevee",4],["pikachu",2]]},
        {key:"B", text:"“목표 하나 잡고 끝내겠다”", points:[["mewtwo",4],["charizard",2]]},
        {key:"C", text:"“조용히 내 페이스로 탄다”", points:[["gengar",4],["mew",2]]},
        {key:"D", text:"“기본기 쌓는 게 결국 이긴다”", points:[["lucario",4],["bulbasaur",2]]},
      ]},
    { title:"Q17. ‘진짜 내 취향’에 가까운 그림은?",
      tiebreaker:true,
      options:[
        {key:"A", text:"남들이 안 하는 무브로 뚫는 장면", points:[["rayquaza",4],["ditto",2]]},
        {key:"B", text:"무브가 예뻐서 계속 돌려보는 장면", points:[["lapras",4],["charizard",2]]},
        {key:"C", text:"허당짓 했는데 다 같이 웃는 장면", points:[["psyduck",4],["pikachu",2]]},
        {key:"D", text:"옆에서 도와줘서 누가 완등한 장면", points:[["dragonite",4],["lucario",2]]},
      ]},
  ];

  const screenStart = document.querySelector("#screenStart");
  const screenQuiz = document.querySelector("#screenQuiz");
  const screenResult = document.querySelector("#screenResult");

  const qTotal = document.querySelector("#qTotal");
  const qTotal2 = document.querySelector("#qTotal2");
  qTotal.textContent = QUESTIONS.length;
  qTotal2.textContent = QUESTIONS.length;

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
  const ctx = cardCanvas.getContext("2d");

  let current = 0;
  const answers = new Array(QUESTIONS.length).fill(null);

  const show = (el) => el.classList.remove("hidden");
  const hide = (el) => el.classList.add("hidden");

  function goStart() {
    current = 0;
    answers.fill(null);
    show(screenStart); hide(screenQuiz); hide(screenResult);
  }
  function goQuiz() {
    hide(screenStart); show(screenQuiz); hide(screenResult);
    render();
  }
  function goResult() {
    hide(screenStart); hide(screenQuiz); show(screenResult);
    renderResult();
  }

  function autoAdvance() {
    // 선택 직후 자동으로 다음으로
    // (UI 선택 효과가 너무 순간이라 120ms 정도 숨 쉬고 넘어감)
    setTimeout(() => {
      if (current === QUESTIONS.length - 1) {
        goResult();
      } else {
        current += 1;
        render();
      }
    }, 120);
  }

  function render() {
    const q = QUESTIONS[current];
    qIndex.textContent = String(current + 1);
    qTitle.textContent = q.title;

    const pct = Math.round(((current) / (QUESTIONS.length - 1)) * 100);
    progressBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;

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

    btnPrev.disabled = current === 0;
    btnNext.disabled = answers[current] == null;
    btnNext.textContent = current === QUESTIONS.length - 1 ? "결과 보기 ✨" : "다음 →";
  }

  function select(key, shouldAutoAdvance = false) {
    answers[current] = key;

    // 선택 UI 표시
    [...optionsWrap.children].forEach((c) => {
      c.classList.toggle("selected", c.querySelector(".key")?.textContent === key);
    });

    btnNext.disabled = false;

    if (shouldAutoAdvance) autoAdvance();
  }

  function calcScores() {
    const score = emptyScore();
    answers.forEach((ansKey, idx) => {
      if (!ansKey) return;
      const opt = QUESTIONS[idx].options.find(o => o.key === ansKey);
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
      if (v > max) { max = v; winners = [id]; }
      else if (v === max) winners.push(id);
    }
    if (winners.length === 1) return winners[0];

    const priority = [
      "mewtwo","lucario","pikachu","eevee","rayquaza","charizard",
      "mew","gengar","dragonite","lapras","ditto","snorlax","psyduck","bulbasaur"
    ];
    for (const p of priority) if (winners.includes(p)) return p;
    return winners[0];
  }

  function fixedMatches(winnerId) {
    const rule = COMPAT[winnerId] || {};
    const good = POKEMON.find(p => p.id === rule.good) || null;
    const bad  = POKEMON.find(p => p.id === rule.bad)  || null;
    return { good, bad };
  }

  function renderFixedChip(target, pokemon) {
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
    const winner = POKEMON.find(p => p.id === winnerId) || POKEMON[0];

    resultEmoji.textContent = winner.emoji;
    resultName.textContent = winner.name;
    resultOneLiner.textContent = winner.oneLiner;

    resultPokemonTraits.innerHTML = "";
    winner.pokemonTraits.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      resultPokemonTraits.appendChild(li);
    });

    resultClimberTraits.innerHTML = "";
    winner.climberTraits.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      resultClimberTraits.appendChild(li);
    });

    const { good, bad } = fixedMatches(winnerId);
    renderFixedChip(goodMatches, good);
    renderFixedChip(badMatches, bad);

    btnSaveCard.dataset.winner = winnerId;
  }

  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w/2, h/2);
    ctx.beginPath();
    ctx.moveTo(x+rr, y);
    ctx.arcTo(x+w, y, x+w, y+h, rr);
    ctx.arcTo(x+w, y+h, x, y+h, rr);
    ctx.arcTo(x, y+h, x, y, rr);
    ctx.arcTo(x, y, x+w, y, rr);
    ctx.closePath();
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

  function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
    const words = text.split(" ");
    let line = "";
    let lines = [];
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width <= maxWidth) line = test;
      else {
        lines.push(line);
        line = w;
      }
      if (lines.length >= maxLines) break;
    }
    if (lines.length < maxLines && line) lines.push(line);
    lines.forEach((ln, i) => ctx.fillText(ln, x, y + i * lineHeight));
    return lines.length;
  }

  async function drawResultCard() {
    const winnerId = btnSaveCard.dataset.winner;
    const winner = POKEMON.find(p => p.id === winnerId) || POKEMON[0];
    const { good, bad } = fixedMatches(winnerId);

    const W = cardCanvas.width, H = cardCanvas.height;
    ctx.clearRect(0,0,W,H);

    const bg = ctx.createLinearGradient(0,0,W,H);
    bg.addColorStop(0, "#0b0f19");
    bg.addColorStop(0.5, "rgba(124,58,237,0.35)");
    bg.addColorStop(1, "rgba(167,139,250,0.20)");
    ctx.fillStyle = bg;
    ctx.fillRect(0,0,W,H);

    const pad = 64;
    const cardX = pad, cardY = pad, cardW = W - pad*2, cardH = H - pad*2;
    ctx.fillStyle = "rgba(17,24,39,0.90)";
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 3;
    roundRect(ctx, cardX, cardY, cardW, cardH, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgba(148,163,184,0.95)";
    ctx.font = "28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText("포켓몬 클라이머 유형 테스트", cardX+44, cardY+70);

    ctx.fillStyle = "#e5e7eb";
    ctx.font = "bold 64px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText(`${winner.emoji} ${winner.name}`, cardX+44, cardY+155);

    ctx.fillStyle = "rgba(245,243,255,0.98)";
    ctx.font = "36px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    const maxTextW = cardW - 44*2 - 560;
    drawWrappedText(ctx, winner.oneLiner, cardX+44, cardY+220, Math.max(420, maxTextW), 44, 2);

    try {
      const img = await loadImage(DOODLE_PATH(winner.id));
      const imgW = 520, imgH = 520;
      const imgX = cardX + cardW - imgW - 44;
      const imgY = cardY + 250;

      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 2;
      roundRect(ctx, imgX-18, imgY-18, imgW+36, imgH+36, 40);
      ctx.fill(); ctx.stroke();

      ctx.drawImage(img, imgX, imgY, imgW, imgH);
    } catch {
      ctx.fillStyle = "rgba(148,163,184,0.9)";
      ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      ctx.fillText("※ assets/doodles/에 낙서 이미지 넣으면 여기에 표시돼요", cardX+44, cardY+330);
    }

    const boxY = cardY + 820;
    const boxH = 360;
    const gap = 26;
    const boxW = (cardW - 44*2 - gap) / 2;
    const leftX = cardX + 44;
    const rightX = leftX + boxW + gap;

    function drawBox(x, y, title, lines) {
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      ctx.lineWidth = 2;
      roundRect(ctx, x, y, boxW, boxH, 28);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = "rgba(148,163,184,0.95)";
      ctx.font = "26px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      ctx.fillText(title, x+26, y+46);

      ctx.fillStyle = "#e5e7eb";
      ctx.font = "28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
      let ty = y+96;
      lines.slice(0,5).forEach(t => {
        ctx.fillText(`• ${t}`, x+26, ty);
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
    ctx.fillText(bad  ? `${bad.emoji} ${bad.name}`  : "-", rightX, cardY + cardH - 48);

    ctx.fillStyle = "rgba(148,163,184,0.9)";
    ctx.font = "24px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR'";
    ctx.fillText("#클라이밍 #볼더링 #유형테스트", cardX+44, cardY + cardH - 16);
  }

  async function saveCanvasAsPng(filename="result-card.png") {
    await drawResultCard();
    const url = cardCanvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // --- 버튼 이벤트(Prev는 유지)
  btnStart.addEventListener("click", goQuiz);

  btnPrev.addEventListener("click", () => {
    if (current > 0) { current -= 1; render(); }
  });

  // 다음 버튼도 남겨둠(키보드/테스트용). 자동 진행이 기본이라 없어도 됨.
  btnNext.addEventListener("click", () => {
    if (answers[current] == null) return;
    if (current === QUESTIONS.length - 1) goResult();
    else { current += 1; render(); }
  });

  btnRestart.addEventListener("click", goStart);
  btnResetTop.addEventListener("click", goStart);

  btnCopy.addEventListener("click", async () => {
    const score = calcScores();
    const winnerId = pickWinner(score);
    const winner = POKEMON.find(p => p.id === winnerId) || POKEMON[0];
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

  btnSaveCard.addEventListener("click", async () => {
    const winnerId = btnSaveCard.dataset.winner || "pikachu";
    await saveCanvasAsPng(`${winnerId}-result.png`);
  });

  // init
  goStart();
})();
