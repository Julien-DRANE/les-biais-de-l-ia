window.activityData = {
  situations: [
    {
      id: 1,
      icon: "",
      title: "Situation 1 - Le monde médical",
      image: "assets/images/situation 1.jpg.jpg",
      alt: "Image générée par IA - Situation 1",
      answer: "B",
      question: "Quel prompt a le plus probablement été saisi ?",
      questionIntro: "Les propositions ci-dessous sont volontairement proches. Le but est de repérer ce qui est explicitement demandé et ce qui est ajouté par le modèle.",
      options: [
        { value: "A", text: "\"Un chirurgien homme en salle d'opération, en pleine intervention\"" },
        { value: "B", text: "\"Une personne exerçant la chirurgie dans un bloc opératoire\"" },
        { value: "C", text: "\"Une intervention chirurgicale au bloc opératoire\"" },
        { value: "D", text: "\"Une équipe hospitalière au travail\"" }
      ],
      promptIntro: "Prompt réel utilisé : formulation descriptive, située, mais non genrée.",
      prompt: "\"Portrait documentaire d'une personne exerçant la chirurgie dans un bloc opératoire\"",
      biasText: "L'image montre pourtant un homme blanc d'âge moyen, comme si le modèle avait comblé ce qui n'était pas spécifié par une figure socialement dominante de la profession.",
      biasLayers: {
        prompt: "Le prompt cadre un métier, un lieu et un style visuel, mais n'impose ni genre, ni âge, ni origine ethnique.",
        model: "Le modèle surinterprète le rôle et injecte un profil masculin prestige-compatible à partir de régularités de ses données d'entraînement.",
        interpretation: "Le public peut conclure trop vite que le prompt contenait déjà \"chirurgien = homme\", ou lire l'image comme une représentation naturelle du réel."
      },
      discussion: [
        "Qu'est-ce qui, dans cette image, relève d'une demande explicite et qu'est-ce qui relève d'un remplissage probabiliste du modèle ?",
        "Si un apprenant dit : \"l'IA sait qu'un chirurgien est un homme\", comment déplier cette phrase pour la rendre plus rigoureuse ?",
        "À partir de quand une sortie visuelle cesse-t-elle d'être un simple reflet et commence-t-elle à orienter les attentes sociales ?"
      ],
      debate: [
        "Le modèle a-t-il ici seulement complété un manque, ou a-t-il imposé une norme de représentation ?",
        "Parler d'une IA qui \"choisit\" un homme chirurgien aide-t-il à penser la responsabilité, ou entretient-il une illusion d'intention ?",
        "Si cette image est réutilisée en cours, qui exerce réellement l'agentivité : le modèle, la personne qui prompte, ou l'institution qui la diffuse ?"
      ],
      fact: "En France, les femmes représentent <strong>50,6 % des chirurgiens diplômés</strong> depuis 2020, mais les modèles génératifs restent en retard sur cette évolution lorsqu'un prompt non genré est utilisé.",
      nextLabel: "Situation 2 ->"
    },
    {
      id: 2,
      icon: "",
      title: "Situation 2 - Le monde de la tech",
      image: "assets/images/situation 2.jpg.jpg",
      alt: "Image générée par IA - Situation 2",
      answer: "C",
      question: "Quel prompt a le plus probablement été saisi ?",
      questionIntro: "Ici aussi, la difficulté est de distinguer une demande technique relativement neutre d'une image socialement très balisée.",
      options: [
        { value: "A", text: "\"Un développeur web en hoodie en train de coder\"" },
        { value: "B", text: "\"Une personne qui travaille dans le numérique dans un open space\"" },
        { value: "C", text: "\"Scène réaliste d'une personne en activité de génie informatique devant son poste de travail\"" },
        { value: "D", text: "\"Un expert en données présentant un tableau de bord\"" }
      ],
      promptIntro: "Prompt réel utilisé : assez précis sur l'activité, mais sans assignation sociale explicite.",
      prompt: "\"Scène réaliste d'une personne en activité de génie informatique devant son poste de travail\"",
      biasText: "Le résultat montre un homme jeune, seul, dans une ambiance high-tech. Le modèle ne se contente pas de représenter un métier : il le code culturellement comme masculin, jeune et techno-compatible.",
      biasLayers: {
        prompt: "Le prompt oriente le domaine professionnel et la situation de travail, mais ne demande ni jeunesse, ni masculinité, ni esthétique geek.",
        model: "Le modèle densifie la scène avec des marqueurs récurrentement associés aux métiers STEM dans ses corpus : homme, jeunesse, équipement, isolement fonctionnel.",
        interpretation: "Le spectateur peut prendre cette image pour une preuve de réalisme, alors qu'elle est déjà une sélection normative de ce qui compte comme figure crédible du secteur."
      },
      discussion: [
        "Quels indices de la scène ne viennent probablement pas du prompt mais d'un stéréotype de la tech ?",
        "Pourquoi les biais de la tech sont-ils souvent moins visibles parce qu'ils ressemblent à l'imaginaire dominant du secteur ?",
        "Que se passe-t-il pédagogiquement si l'on utilise ce type d'image pour parler orientation, insertion ou reconversion ?"
      ],
      debate: [
        "Dire que le modèle \"renforce\" un stéréotype est-il plus juste que dire qu'il le \"reproduit\" ? Pourquoi ?",
        "Le système agit-il ici comme un simple filtre statistique ou comme un opérateur de crédibilité sociale ?",
        "Quand une IA propose toujours le même profil pour un métier, peut-on parler d'une forme d'agentivité distributive entre données, architecture et usages ?"
      ],
      fact: "Des études sur les images générées pour les professions STEM montrent une forte sous-représentation des femmes dans les sorties associées à des prompts neutres.",
      nextLabel: "Situation 3 ->"
    },
    {
      id: 3,
      icon: "",
      title: "Situation 3 - Le soin et l'empathie",
      image: "assets/images/situation 3.jpg.jpg",
      alt: "Image générée par IA - Situation 3",
      answer: "B",
      question: "Quel prompt a le plus probablement été saisi ?",
      questionIntro: "Le piège ici est symétrique : des indices féminins peuvent sembler évidents alors qu'ils n'étaient pas forcément demandés.",
      options: [
        { value: "A", text: "\"Une infirmière souriante en uniforme blanc dans un hôpital\"" },
        { value: "B", text: "\"Image réaliste d'une personne exerçant un métier infirmier dans un service hospitalier\"" },
        { value: "C", text: "\"Une aide-soignante empathique prenant soin d'un patient\"" },
        { value: "D", text: "\"Une femme travaillant dans le secteur médical\"" }
      ],
      promptIntro: "Prompt réel utilisé : précis sur la profession et le contexte, mais sans féminisation explicite.",
      prompt: "\"Image réaliste d'une personne exerçant un métier infirmier dans un service hospitalier\"",
      biasText: "Le modèle produit une femme souriante en uniforme blanc. Il associe ici le soin à la féminité, à la douceur visible et à une position de service, comme si ces traits étaient naturellement contenus dans le rôle.",
      biasLayers: {
        prompt: "Le prompt nomme un métier et un contexte professionnel, sans imposer le genre, l'expression faciale ou la mise en scène affective.",
        model: "Le modèle ajoute une féminisation, une appartenance ethnique au personnage et une dramaturgie de la bienveillance qui n'étaient pas demandées, en activant des stéréotypes de soin et d'empathie.",
        interpretation: "Le public risque de trouver cette image évidemment juste, parce que le stéréotype est familier et paraît socialement plausible."
      },
      discussion: [
        "Pourquoi les stéréotypes du care paraissent-ils souvent plus acceptables, voire plus invisibles, que ceux du pouvoir ?",
        "Que nous apprend la comparaison entre la situation 1 et la situation 3 sur la distribution symbolique des rôles ?",
        "Comment montrer en formation qu'un résultat plausible n'est pas pour autant un résultat neutre ?"
      ],
      debate: [
        "Le modèle se contente-t-il de refléter une division sexuelle du travail, ou contribue-t-il à la remettre en circulation comme norme visuelle ?",
        "Quand une image d'IA paraît douce, naturelle et bienveillante, est-on plus enclins à lui attribuer moins de pouvoir d'action ?",
        "Comment parler d'agentivité sans anthropomorphiser la machine, tout en prenant au sérieux ses effets sur les représentations ?"
      ],
      fact: "En France, les infirmiers restent majoritairement des femmes, mais une sortie d'IA ne documente pas une statistique : elle sélectionne une manière de la rendre visible et normale.",
      nextLabel: "Voir mes résultats ->"
    }
  ],
  summaryItems: [
    { emoji: "S1", title: "Chirurgie", text: "Le prompt ne genrait pas la scène, mais le modèle a attribué un profil masculin de prestige." },
    { emoji: "S2", title: "Tech", text: "Le modèle a ajouté une figure crédible de l'informatique : homme jeune, seul, équipé." },
    { emoji: "S3", title: "Care", text: "Le soin est féminisé et affectivisé alors que le prompt restait professionnel et non genré." }
  ],
  conclusionSections: [
    {
      title: "Points de vigilance",
      items: [
        "Un prompt peut être relativement neutre tout en restant situé : neutralité ne veut pas dire absence totale de cadrage.",
        "Le biais du modèle commence là où des attributs sociaux sont ajoutés ou privilégiés sans avoir été demandés.",
        "Le biais d'interprétation apparaît quand on transforme une sortie plausible en évidence sur le monde réel."
      ]
    },
    {
      title: "Ce que cela implique pour vos formations",
      className: "highlight-box",
      items: [
        "<strong>Nommer précisément les niveaux :</strong> distinguer prompt, modèle et interprétation améliore nettement la discussion critique.",
        "<strong>Travailler l'agentivité :</strong> parler des effets du système sans lui prêter une intention humaine aide à poser de meilleures questions de responsabilité.",
        "<strong>Rendre visibles les ajouts du modèle :</strong> demandez systématiquement ce qui n'était pas dans le prompt mais apparaît tout de même dans l'image.",
        "<strong>Varier les reformulations :</strong> faites tester des prompts voisins pour montrer que le modèle n'exécute pas seulement, il oriente aussi les sorties probables.",
        "<strong>Outiller le débat :</strong> utilisez ces images comme objets d'enquête plutôt que comme illustrations transparentes."
      ]
    }
  ],
  caseStudy: {
    title: "Quand le modèle diversifie sans vraiment contextualiser",
    intro: "Cette étude de cas complète le quiz. Elle montre qu'un système récent peut parfois atténuer des stéréotypes visibles, tout en produisant des représentations lisses ou décontextualisées qui restent discutables.",
    leadership: {
      title: "Cas 1 - Équipe de direction",
      intro: "Trois générations d'images produites à partir d'un prompt voisin sur une équipe dirigeante. Les sorties récentes paraissent souvent plus diverses, mais cette diversification n'est pas automatiquement une meilleure adéquation au contexte réel.",
      images: [
        {
          src: "assets/images/equipe de direction 1.png",
          alt: "Génération ancienne d'une équipe de direction",
          caption: "Version 1 : représentation très standardisée et socialement étroite."
        },
        {
          src: "assets/images/equipe de direction 2.png",
          alt: "Génération intermédiaire d'une équipe de direction",
          caption: "Version 2 : diversification visible, mais composition encore très générique."
        },
        {
          src: "assets/images/equipe de direction 3.png",
          alt: "Génération récente d'une équipe de direction",
          caption: "Version 3 : rendu plus inclusif en apparence, sans garantie de justesse contextuelle."
        }
      ],
      analysis: [
        "Le modèle récent évite parfois le vieux stéréotype de la direction exclusivement masculine et blanche.",
        "Cette correction apparente peut toutefois produire une image très calibrée, presque publicitaire, qui semble plus normative qu'observatrice.",
        "La question pédagogique n'est donc pas seulement : y a-t-il moins de biais visibles ? mais aussi : quelle norme visuelle de la diversité est maintenant imposée ?"
      ]
    },
    historical: {
      title: "Cas 2 - La France à travers le temps",
      intro: "Des prompts historiques proches peuvent donner des scènes qui paraissent plus diverses dans les versions récentes, même lorsque le contexte temporel demande davantage de précision historique.",
      images: [
        {
          src: "assets/images/france 1920.png",
          alt: "Représentation de la France en 1920 par IA",
          caption: "1920 : la vraisemblance historique devrait primer sur la correction visuelle automatique."
        },
        {
          src: "assets/images/france 1999.png",
          alt: "Représentation de la France en 1999 par IA",
          caption: "1999 : un contexte plus proche de nous, mais qui reste situé socialement et démographiquement."
        },
        {
          src: "assets/images/france 2020.png",
          alt: "Représentation de la France en 2020 par IA",
          caption: "2020 : la diversité paraît plus plausible, mais elle ne dispense pas d'une lecture critique."
        }
      ],
      analysis: [
        "Une image peut sembler plus juste moralement tout en devenant moins juste historiquement.",
        "Le modèle peut lisser les différences d'époque en appliquant une même grammaire visuelle de la diversité à plusieurs contextes.",
        "Cela déplace le problème : on ne passe pas simplement du biais à la neutralité, mais d'un régime de biais à un autre régime de normalisation."
      ]
    },
    grid: [
      {
        title: "Ce que le modèle corrige",
        text: "Il réduit parfois certains stéréotypes grossiers, notamment les castings uniformes associés aux rôles de pouvoir ou de prestige."
      },
      {
        title: "Ce qu'il ajoute",
        text: "Il peut introduire une diversité automatique, très stable esthétiquement, qui n'était ni demandée ni toujours adaptée au contexte."
      },
      {
        title: "Risque pédagogique",
        text: "Les apprenants peuvent croire qu'une image plus inclusive est nécessairement plus vraie, alors qu'elle est peut-être seulement plus acceptable."
      }
    ],
    debate: [
      "Quand un modèle corrige un stéréotype visible, parle-t-on d'un progrès de représentation ou d'un nouveau cadrage implicite ?",
      "Une image peut-elle être socialement désirable tout en étant historiquement ou contextuellement faible ?",
      "Comment enseigner qu'un rendu semble plus juste sans présenter cette amélioration apparente comme une neutralité enfin atteinte ?"
    ]
  }
};
