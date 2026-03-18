window.activityData = {
  situations: [
    {
      id: 1,
      icon: "",
      title: "Situation 1 - Le monde medical",
      image: "assets/images/situation 1.jpg.jpg",
      alt: "Image generee par IA - Situation 1",
      answer: "B",
      question: "Quel prompt a le plus probablement ete saisi ?",
      questionIntro: "Les propositions ci-dessous sont volontairement proches. Le but est de reperer ce qui est explicitement demande et ce qui est ajoute par le modele.",
      options: [
        { value: "A", text: "\"Un chirurgien homme en salle d'operation, en pleine intervention\"" },
        { value: "B", text: "\"Une personne exercant la chirurgie dans un bloc opératoire\"" },
        { value: "C", text: "\"Une intervention chirurgicale au bloc opératoire\"" },
        { value: "D", text: "\"Une equipe hospitaliere au travail\"" }
      ],
      promptIntro: "Prompt reel utilise : formulation descriptive, situee, mais non genree.",
      prompt: "\"Portrait documentaire d'une personne exercant la chirurgie dans un bloc operatoire\"",
      biasText: "L'image montre pourtant un homme blanc d'age moyen, comme si le modele avait comble ce qui n'etait pas specifie par une figure socialement dominante de la profession.",
      biasLayers: {
        prompt: "Le prompt cadre un metier, un lieu et un style visuel, mais n'impose ni genre, ni age, ni origine ethnique.",
        model: "Le modele surinterprete le role et injecte un profil masculin prestige-compatible a partir de regularites de ses donnees d'entrainement.",
        interpretation: "Le public peut conclure trop vite que le prompt contenait deja \"chirurgien = homme\", ou lire l'image comme une representation naturelle du reel."
      },
      discussion: [
        "Qu'est-ce qui, dans cette image, releve d'une demande explicite et qu'est-ce qui releve d'un remplissage probabiliste du modele ?",
        "Si un apprenant dit : \"l'IA sait qu'un chirurgien est un homme\", comment deplier cette phrase pour la rendre plus rigoureuse ?",
        "A partir de quand une sortie visuelle cesse-t-elle d'etre un simple reflet et commence-t-elle a orienter les attentes sociales ?"
      ],
      debate: [
        "Le modele a-t-il ici seulement complete un manque, ou a-t-il impose une norme de representation ?",
        "Parler d'une IA qui \"choisit\" un homme chirurgien aide-t-il a penser la responsabilite, ou entretient-il une illusion d'intention ?",
        "Si cette image est reusee en cours, qui exerce reellement l'agentivite : le modele, la personne qui prompte, ou l'institution qui la diffuse ?"
      ],
      fact: "En France, les femmes representent <strong>50,6 % des chirurgiens diplomes</strong> depuis 2020, mais les modeles generatifs restent en retard sur cette evolution lorsqu'un prompt non genre est utilise.",
      nextLabel: "Situation 2 ->"
    },
    {
      id: 2,
      icon: "",
      title: "Situation 2 - Le monde de la tech",
      image: "assets/images/situation 2.jpg.jpg",
      alt: "Image generee par IA - Situation 2",
      answer: "C",
      question: "Quel prompt a le plus probablement ete saisi ?",
      questionIntro: "Ici aussi, la difficulte est de distinguer une demande technique relativement neutre d'une image socialement tres balisee.",
      options: [
        { value: "A", text: "\"Un developpeur web en hoodie en train de coder\"" },
        { value: "B", text: "\"Une personne qui travaille dans le numerique dans un open space\"" },
        { value: "C", text: "\"Scene realiste d'une personne en activite de genie informatique devant son poste de travail\"" },
        { value: "D", text: "\"Un expert en donnees presentant un tableau de bord\"" }
      ],
      promptIntro: "Prompt reel utilise : assez precis sur l'activite, mais sans assignation sociale explicite.",
      prompt: "\"Scene realiste d'une personne en activite de genie informatique devant son poste de travail\"",
      biasText: "Le resultat montre un homme jeune, seul, dans une ambiance high-tech. Le modele ne se contente pas de representer un metier : il le code culturellement comme masculin, jeune et techno-compatible.",
      biasLayers: {
        prompt: "Le prompt oriente le domaine professionnel et la situation de travail, mais ne demande ni jeunesse, ni masculinite, ni esthetique geek.",
        model: "Le modele densifie la scene avec des marqueurs recurrentement associes aux metiers STEM dans ses corpus : homme, jeunesse, equipement, isolement fonctionnel.",
        interpretation: "Le spectateur peut prendre cette image pour une preuve de realisme, alors qu'elle est deja une selection normative de ce qui compte comme figure credible du secteur."
      },
      discussion: [
        "Quels indices de la scene ne viennent probablement pas du prompt mais d'un stereotype de la tech ?",
        "Pourquoi les biais de la tech sont-ils souvent moins visibles parce qu'ils ressemblent a l'imaginaire dominant du secteur ?",
        "Que se passe-t-il pedagogiquement si l'on utilise ce type d'image pour parler orientation, insertion ou reconversion ?"
      ],
      debate: [
        "Dire que le modele \"renforce\" un stereotype est-il plus juste que dire qu'il le \"reproduit\" ? Pourquoi ?",
        "Le systeme agit-il ici comme un simple filtre statistique ou comme un operateur de credibilite sociale ?",
        "Quand une IA propose toujours le meme profil pour un metier, peut-on parler d'une forme d'agentivite distributive entre donnees, architecture et usages ?"
      ],
      fact: "Des etudes sur les images generees pour les professions STEM montrent une forte sous-representation des femmes dans les sorties associees a des prompts neutres.",
      nextLabel: "Situation 3 ->"
    },
    {
      id: 3,
      icon: "",
      title: "Situation 3 - Le soin et l'empathie",
      image: "assets/images/situation 3.jpg.jpg",
      alt: "Image generee par IA - Situation 3",
      answer: "B",
      question: "Quel prompt a le plus probablement ete saisi ?",
      questionIntro: "Le piege ici est symetrique : des indices feminins peuvent sembler evidents alors qu'ils n'etaient pas forcement demandes.",
      options: [
        { value: "A", text: "\"Une infirmiere souriante en uniforme blanc dans un hopital\"" },
        { value: "B", text: "\"Image realiste d'une personne exercant un metier infirmier dans un service hospitalier\"" },
        { value: "C", text: "\"Une aide-soignante empathique prenant soin d'un patient\"" },
        { value: "D", text: "\"Une femme travaillant dans le secteur medical\"" }
      ],
      promptIntro: "Prompt reel utilise : precis sur la profession et le contexte, mais sans feminisation explicite.",
      prompt: "\"Image realiste d'une personne exercant un metier infirmier dans un service hospitalier\"",
      biasText: "Le modele produit une femme souriante en uniforme blanc. Il associe ici le soin a la feminite, a la douceur visible et a une position de service, comme si ces traits etaient naturellement contenus dans le role.",
      biasLayers: {
        prompt: "Le prompt nomme un metier et un contexte professionnel, sans imposer le genre, l'expression faciale ou la mise en scene affective.",
        model: "Le modele ajoute feminisation et une appartenance ethnique au personnage et une dramaturgie de la bienveillance qui n'etait pas demandee, en activant des stereotypes de soin et d'empathie.",
        interpretation: "Le public risque de trouver cette image evidemment juste, parce que le stereotype est familier et parait socialement plausible."
      },
      discussion: [
        "Pourquoi les stereotypes du care paraissent-ils souvent plus acceptables, voire plus invisibles, que ceux du pouvoir ?",
        "Que nous apprend la comparaison entre la situation 1 et la situation 3 sur la distribution symbolique des roles ?",
        "Comment montrer en formation qu'un resultat plausible n'est pas pour autant un resultat neutre ?"
      ],
      debate: [
        "Le modele se contente-t-il de refleter une division sexuelle du travail, ou contribue-t-il a la remettre en circulation comme norme visuelle ?",
        "Quand une image d'IA parait douce, naturelle et bienveillante, est-on plus enclins a lui attribuer moins de pouvoir d'action ?",
        "Comment parler d'agentivite sans anthropomorphiser la machine, tout en prenant au serieux ses effets sur les representations ?"
      ],
      fact: "En France, les infirmiers restent majoritairement des femmes, mais une sortie d'IA ne documente pas une statistique : elle selectionne une maniere de la rendre visible et normale.",
      nextLabel: "Voir mes resultats ->"
    }
  ],
  summaryItems: [
    { emoji: "S1", title: "Chirurgie", text: "Le prompt ne genrait pas la scene, mais le modele a attribue un profil masculin de prestige." },
    { emoji: "S2", title: "Tech", text: "Le modele a ajoute une figure credible de l'informatique : homme jeune, seul, equipe." },
    { emoji: "S3", title: "Care", text: "Le soin est feminise et affectivise alors que le prompt restait professionnel et non genre." }
  ],
  conclusionSections: [
    {
      title: "Points de vigilance",
      items: [
        "Un prompt peut etre relativement neutre tout en restant situe : neutralite ne veut pas dire absence totale de cadrage.",
        "Le biais du modele commence la ou des attributs sociaux sont ajoutes ou privilegies sans avoir ete demandes.",
        "Le biais d'interpretation apparait quand on transforme une sortie plausible en evidence sur le monde reel."
      ]
    },
    {
      title: "Ce que cela implique pour vos formations",
      className: "highlight-box",
      items: [
        "<strong>Nommer precisement les niveaux :</strong> distinguer prompt, modele et interpretation ameliore nettement la discussion critique.",
        "<strong>Travailler l'agentivite :</strong> parler des effets du systeme sans lui preter une intention humaine aide a poser de meilleures questions de responsabilite.",
        "<strong>Rendre visibles les ajouts du modele :</strong> demandez systematiquement ce qui n'etait pas dans le prompt mais apparait tout de meme dans l'image.",
        "<strong>Varier les reformulations :</strong> faites tester des prompts voisins pour montrer que le modele n'execute pas seulement, il oriente aussi les sorties probables.",
        "<strong>Outiller le debat :</strong> utilisez ces images comme objets d'enquete plutot que comme illustrations transparentes."
      ]
    }
  ]
};
