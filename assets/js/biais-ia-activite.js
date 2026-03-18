const { situations, summaryItems, conclusionSections, caseStudy } = window.activityData;

const state = {
  score: 0,
  answered: situations.map(() => false),
  activeTab: 'quiz'
};

const situationRoot = document.getElementById('situations-root');
const conclusionRoot = document.getElementById('conclusion-root');
const caseStudyRoot = document.getElementById('case-study-root');
const formateurToggle = document.getElementById('formateur-toggle');
const formateurPanel = document.getElementById('formateur-panel');
const formateurChevron = document.getElementById('formateur-chevron');
const progressWrap = document.getElementById('quiz-progress');
const progressFill = document.getElementById('progress-fill');
const progLabel = document.getElementById('prog-label');
const progCount = document.getElementById('prog-count');
const toast = document.getElementById('toast');
const tabButtons = document.querySelectorAll('.tab-button');

renderSituations();
renderConclusion();
renderCaseStudy();
setActiveTab('quiz');
bindEvents();

function bindEvents() {
  formateurToggle.addEventListener('click', () => {
    formateurPanel.classList.toggle('open');
    formateurChevron.textContent = formateurPanel.classList.contains('open') ? '-' : '+';
  });

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
  });

  situationRoot.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]');
    if (!action) return;

    const id = Number(action.dataset.id);
    const situation = situations.find((item) => item.id === id);
    if (!situation) return;

    if (action.dataset.action === 'validate') validate(situation);
    if (action.dataset.action === 'next') goToSituation(id + 1);
    if (action.dataset.action === 'conclusion') showConclusion();
  });

  conclusionRoot.addEventListener('click', (event) => {
    if (event.target.closest('[data-action="restart"]')) restart();
  });
}

function setActiveTab(tab) {
  state.activeTab = tab;

  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tab);
  });

  const showQuiz = tab === 'quiz';
  situationRoot.style.display = showQuiz ? '' : 'none';
  conclusionRoot.style.display = showQuiz ? '' : 'none';
  caseStudyRoot.style.display = showQuiz ? 'none' : 'block';
  progressWrap.style.display = showQuiz ? '' : 'none';

  if (!showQuiz) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderSituations() {
  situationRoot.innerHTML = situations.map((situation, index) => `
    <section class="situation ${index === 0 ? 'active' : ''}" id="situation-${situation.id}">
      <div class="situation-header">
        <div class="situation-num">${situation.id}</div>
        <div class="situation-title">${situation.icon} ${situation.title}</div>
      </div>

      <div class="image-card">
        <img src="${situation.image}" alt="${situation.alt}">
        <div class="image-caption">Image générée par IA - Fichier original sans modification</div>
      </div>

      <div class="question-card">
        <div class="question-label">Votre analyse</div>
        <div class="question-text">${situation.question}</div>
        <p class="question-intro">${situation.questionIntro}</p>
        <div class="options" id="opts-${situation.id}">
          ${situation.options.map((option) => `
            <label class="option">
              <input type="radio" name="q${situation.id}" value="${option.value}">
              <span><strong>${option.value}.</strong> ${option.text}</span>
            </label>
          `).join('')}
        </div>
        <div class="btn-row">
          <button class="btn btn-primary" id="validate-${situation.id}" data-action="validate" data-id="${situation.id}">Valider ma réponse</button>
        </div>
      </div>

      <div class="reveal-section" id="reveal-${situation.id}">
        <div class="reveal-card prompt-card">
          <h3>Prompt utilisé</h3>
          <p>${situation.promptIntro}</p>
          <div class="prompt-highlight">${situation.prompt}</div>
        </div>

        <div class="reveal-card bias-card">
          <h3>Lecture rapide du résultat</h3>
          <p>${situation.biasText}</p>
        </div>

        <div class="reveal-card layers-card">
          <h3>Où se situe le biais ?</h3>
          <div class="bias-grid">
            <div class="bias-layer">
              <h4>Biais du prompt</h4>
              <p>${situation.biasLayers.prompt}</p>
            </div>
            <div class="bias-layer">
              <h4>Biais du modèle</h4>
              <p>${situation.biasLayers.model}</p>
            </div>
            <div class="bias-layer">
              <h4>Biais d'interprétation</h4>
              <p>${situation.biasLayers.interpretation}</p>
            </div>
          </div>
        </div>

        <div class="reveal-card discussion-card">
          <h3>Questions de discussion</h3>
          <ul>
            ${situation.discussion.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="reveal-card debate-card">
          <h3>Débat formateur : agentivité</h3>
          <ul>
            ${situation.debate.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="reveal-card data-card">
          <h3>Donnée à retenir</h3>
          <p>${situation.fact}</p>
        </div>

        <div class="btn-row">
          ${situation.id < situations.length
            ? `<button class="btn btn-primary" data-action="next" data-id="${situation.id}">${situation.nextLabel}</button>`
            : `<button class="btn btn-success" data-action="conclusion" data-id="${situation.id}">${situation.nextLabel}</button>`}
        </div>
      </div>
    </section>
  `).join('');
}

function renderConclusion() {
  conclusionRoot.innerHTML = `
    <section id="conclusion">
      <div class="score-hero">
        <div class="score-circle">
          <span class="score-num" id="score-num">0</span>
          <span class="score-den">/ ${situations.length}</span>
        </div>
        <h2 id="score-title">Résultats de l'activité</h2>
        <p id="score-msg">Voici votre bilan et les points clés à retenir</p>
      </div>

      <div class="summary-grid">
        ${summaryItems.map((item) => `
          <div class="summary-item">
            <span class="emoji">${item.emoji}</span>
            <h4>${item.title}</h4>
            <p>${item.text}</p>
          </div>
        `).join('')}
      </div>

      ${conclusionSections.map((section) => `
        <div class="conclusion-box ${section.className ?? ''}">
          <h3>${section.title}</h3>
          <ul>
            ${section.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('')}

      <div class="btn-row" style="justify-content:center; margin-top:1.5rem">
        <button class="btn btn-outline" data-action="restart">Recommencer l'activité</button>
      </div>
    </section>
  `;
}

function renderCaseStudy() {
  caseStudyRoot.innerHTML = `
    <section class="case-study-panel">
      <div class="case-hero">
        <div class="question-label">Étude de cas</div>
        <h2>${caseStudy.title}</h2>
        <p>${caseStudy.intro}</p>
      </div>

      <div class="reveal-card discussion-card">
        <h3>${caseStudy.leadership.title}</h3>
        <p>${caseStudy.leadership.intro}</p>
        <div class="case-gallery">
          ${caseStudy.leadership.images.map((image) => `
            <figure class="case-figure">
              <img src="${image.src}" alt="${image.alt}">
              <figcaption>${image.caption}</figcaption>
            </figure>
          `).join('')}
        </div>
        <ul>
          ${caseStudy.leadership.analysis.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="reveal-card bias-card">
        <h3>${caseStudy.historical.title}</h3>
        <p>${caseStudy.historical.intro}</p>
        <div class="case-gallery case-gallery-tight">
          ${caseStudy.historical.images.map((image) => `
            <figure class="case-figure">
              <img src="${image.src}" alt="${image.alt}">
              <figcaption>${image.caption}</figcaption>
            </figure>
          `).join('')}
        </div>
        <ul>
          ${caseStudy.historical.analysis.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="case-grid">
        ${caseStudy.grid.map((item) => `
          <article class="case-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join('')}
      </div>

      <div class="reveal-card debate-card">
        <h3>Débat formateur : que corrige vraiment le modèle ?</h3>
        <ul>
          ${caseStudy.debate.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </section>
  `;
}

function validate(situation) {
  const index = situation.id - 1;
  if (state.answered[index]) return;

  const selected = document.querySelector(`input[name="q${situation.id}"]:checked`);
  if (!selected) {
    showToast('Veuillez sélectionner une réponse', 'warn');
    return;
  }

  state.answered[index] = true;
  const opts = document.querySelectorAll(`#opts-${situation.id} .option`);
  const validateBtn = document.getElementById(`validate-${situation.id}`);
  const selectedValue = selected.value;

  opts.forEach((opt) => {
    opt.classList.add('disabled');
    const radio = opt.querySelector('input[type="radio"]');

    if (radio.value === situation.answer) {
      opt.classList.add('correct');
      opt.insertAdjacentHTML('beforeend', '<span class="option-badge">OK</span>');
    } else if (radio.value === selectedValue) {
      opt.classList.add('incorrect');
      opt.insertAdjacentHTML('beforeend', '<span class="option-badge">X</span>');
    }
  });

  if (selectedValue === situation.answer) {
    state.score += 1;
    showToast('Bonne réponse. La décomposition des biais apparaît ci-dessous.', 'correct');
  } else {
    showToast('Ce n\'est pas ça. Comparez maintenant le prompt réel et les ajouts du modèle.', 'incorrect');
  }

  validateBtn.disabled = true;
  document.getElementById(`reveal-${situation.id}`).classList.add('visible');
  updateProgress(situation.id);

  setTimeout(() => {
    document.getElementById(`reveal-${situation.id}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

function updateProgress(step) {
  const total = situations.length;
  progressFill.style.width = `${Math.round((step / total) * 100)}%`;
  progLabel.textContent = `Situation ${step} / ${total}`;
  progCount.textContent = `${step} / ${total}`;
}

function goToSituation(num) {
  document.querySelectorAll('.situation').forEach((node) => node.classList.remove('active'));
  document.getElementById(`situation-${num}`)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showConclusion() {
  document.querySelectorAll('.situation').forEach((node) => node.classList.remove('active'));
  const conclusion = document.getElementById('conclusion');
  conclusion.classList.add('active');

  document.getElementById('score-num').textContent = String(state.score);
  progressFill.style.width = '100%';
  progLabel.textContent = 'Terminé';
  progCount.textContent = `${situations.length} / ${situations.length}`;

  const scoreTitle = document.getElementById('score-title');
  const scoreMsg = document.getElementById('score-msg');

  if (state.score === situations.length) {
    scoreTitle.textContent = 'Excellent ! Score parfait';
    scoreMsg.textContent = 'Vous avez bien repéré les formulations de prompt et les ajouts du modèle.';
  } else if (state.score === situations.length - 1) {
    scoreTitle.textContent = 'Très bien';
    scoreMsg.textContent = 'Vous distinguez déjà bien les cadrages. Les cartes de biais vous aident à affiner le diagnostic.';
  } else if (state.score === 1) {
    scoreTitle.textContent = 'Un bon début';
    scoreMsg.textContent = 'L\'activité montre justement que l\'intuition seule ne suffit pas : il faut séparer prompt, modèle et interprétation.';
  } else {
    scoreTitle.textContent = 'Résultat à analyser';
    scoreMsg.textContent = 'La confusion entre ce qui est demandé, produit et interprété est fréquente. Reprenez les trois niveaux pour chaque image.';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restart() {
  state.score = 0;
  state.answered = situations.map(() => false);

  renderSituations();
  renderConclusion();
  setActiveTab('quiz');

  progressFill.style.width = '0%';
  progLabel.textContent = 'Début';
  progCount.textContent = `0 / ${situations.length}`;

  document.querySelectorAll('.situation').forEach((node) => node.classList.remove('active'));
  document.getElementById('situation-1')?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message, type) {
  toast.textContent = message;
  toast.className = `feedback-toast show ${type === 'correct' ? 'correct-toast' : ''} ${type === 'incorrect' ? 'incorrect-toast' : ''}`.trim();
  toast.style.background = type === 'warn' ? '#f59e0b' : '';

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
