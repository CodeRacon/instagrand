// JSON + ARRAYS

let cards = [
  {
    author: 'call_me_wittgenstein',
    profileImg: 'img/profile/wittgenstein.jpg',
    location: 'Vienna, Austria',
    description: 'Worüber man nicht sprechen kann, darüber muss man schweigen.',
    poster: 'img/poster/poster1.jpg',
    isPostLiked: 'true',
    isBookmarked: 'false',
    comments: [
      'Wittgenstein Aaalter...üüübelst deep der Typ!',
      'Interessantes Zitat! Ich verstehs nicht...aber interessant...denk ich mal.',
      'Was bedeutet das für die Sprache?',
      'Ich liebe diese Denkweise.',
      'Gibt es Grenzen für das Sprechen?',
    ],
    commentAuthor: [
      'philosophy_lover',
      'thinker_123',
      'curious_mind',
      'word_wanderer',
      'questioning_life',
    ],
    likeStatus: [true, true, false, false, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'georg_w_hegel',
    profileImg: 'img/profile/hegel.jpg',
    location: 'Ingolstadt, Germany',
    description: 'Die Vernunft ist das höchste Gut des Menschen.',
    poster: 'img/poster/poster2.jpg',
    isPostLiked: 'false',
    isBookmarked: 'false',
    comments: [
      'Hegel war ein großer Denker...über 1,90m!!!',
      'Seine Philosophie ist so beeindruckend.',
    ],
    commentAuthor: ['logic_master', 'reasoning_soul'],
    likeStatus: [true, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'platonsuperbrain',
    profileImg: 'img/profile/platon.jpg',
    location: 'Athen, Greece',
    description: 'Die Ideen sind die wahren Realitäten.',
    poster: 'img/poster/poster3.jpg',
    isPostLiked: 'false',
    isBookmarked: 'false',
    comments: [
      'Die Ideenwelt ist faszinierend.',
      'Die Ideenwelt von Tschibo ist auch faszinierend! Jede Woche eine neue Welt. Schlauchboote, Wanderschuhe und Arabica-Bohnen.',
      'Platons Höhlengleichnis kommt mir in den Sinn.',
      'Ich geh auch in die Höhle gleich!',
    ],
    commentAuthor: [
      'idea_seeker',
      'reality_explorer',
      'idealist_dreamer',
      'philosophy_student',
    ],
    likeStatus: [false, true, false, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'e_kant',
    profileImg: 'img/profile/kant.jpg',
    location: 'Königsberg, Prussia',
    description:
      'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.',
    poster: 'img/poster/poster4.jpg',
    isPostLiked: 'false',
    isBookmarked: 'false',
    comments: [
      'Jepp...isso!',
      'Kommando Kant!',
      'Kant und die kategorischen Imperative. Es fetzt.',
      'Seine Ethik hat viele Fragen aufgeworfen.',
      'Moralische Pflichten sind universell.',
      'Seine Philosophie prägt die Ethik.',
    ],
    commentAuthor: [
      'ethical_thinker',
      'moral_philosopher',
      'categorical_mind',
      'universal_morals',
      'ethical_inquiry',
      'philosophy_student',
    ],
    likeStatus: [false, true, false, false, false, false, true],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'aristoteles',
    profileImg: 'img/profile/aristoteles.jpg',
    location: 'Stagira, Greece',
    description: 'Die Tugend liegt in der Mitte.',
    poster: 'img/poster/poster5.jpg',
    isPostLiked: 'false',
    isBookmarked: 'false',
    comments: [
      'Die goldene Mitte. Da ist so bissl sein Ding.',
      'Dummes sagen und dummes tun...hält sich bei mir auch die Waage.',
      'Aristoteles über Tugendhaftigkeit. Sollte man sich mal mit beschäftigen!',
      'Welche Tugenden sind dir wichtig?',
      'Was bedeutet es, tugendhaft zu sein?',
      'Wie können wir tugendhafter leben?',
      'Tugend als Weg zur Glückseligkeit. Könnte was dran sein!',
    ],
    commentAuthor: [
      'virtuous_soul',
      'golden_mean',
      'virtue_seeker',
      'morally_centered',
      'happy_virtue',
      'ethical_balance',
      'philosophy_student',
    ],
    likeStatus: [true, false, false, false, false, false, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'nietzsche_is_the_name',
    profileImg: 'img/profile/nietzsche.jpg',
    location: 'Röcken, Germany',
    description: 'Gott ist tot.',
    poster: 'img/poster/poster6.jpg',
    isPostLiked: 'true',
    isBookmarked: 'true',
    comments: [
      'Urin kennt keine Grenzen!',
      'Geiler Schnurrbart!',
      'WER?',
      'Nietzsche und der Nihilismus.',
      'Ist das der Verlust von Werten?',
      'Wie beeinflusst uns das heute?',
      'Nietzsche als radikaler Denker.',
    ],
    commentAuthor: [
      'code.racon',
      'godless_mind',
      'value_loss',
      'nietzsche_follower',
      'radical_thought',
      'power_desire',
      'idea_seeker',
      'virtue_seeker',
    ],
    likeStatus: [true, false, true, false, false, false, false, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'sokrates_so_be_it',
    profileImg: 'img/profile/sokrates.jpg',
    location: 'Athen, Greece',
    description: 'Das einzig wahre Wissen ist, dass man nichts weiß.',
    poster: 'img/poster/poster7.jpg',
    isPostLiked: 'true',
    isBookmarked: 'false',
    comments: [
      'Was heißt das jetzt im Klartext? Immer dieses hochtrabende Geschwurbel!!!ELF!!1!',
      'Das ist mir zu GELB alles!.',
      'Der geborene Philosoph.',
      'Weisheit durch Selbstzweifel.',
      'Fragen als Weg zur Erkenntnis.',
    ],
    commentAuthor: [
      'knowledge_humble',
      'questioning_mind',
      'self_doubt_wisdom',
      'born_philosopher',
      'philosophy_student',
    ],
    likeStatus: [false, true, false, false, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'descartes',
    profileImg: 'img/profile/descartes.jpg',
    location: 'La Haye en Touraine, France',
    description: 'Ich denke, also bin ich.',
    poster: 'img/poster/poster8.jpg',
    isPostLiked: 'true',
    isBookmarked: 'true',
    comments: [
      'Cleveres Kerlchen, der René.',
      'Der Beginn der modernen Philosophie.',
      'Ist das sicher?',
      'Die Suche nach unerschütterlichem Wissen.',
    ],
    commentAuthor: [
      'cogito_believer',
      'thinking_certainty',
      'unshakable_knowledge',
      'philosophy_student',
    ],
    likeStatus: [true, false, false, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'albert_camus',
    profileImg: 'img/profile/camus.jpg',
    location: 'Mondovi, Algeria',
    description:
      'Manchmal ist schon allein weiterzumachen, einfach weiterzumachen, eine übermenschliche Leistung.',
    poster: 'img/poster/poster9.jpg',
    isPostLiked: 'true',
    isBookmarked: 'true',
    comments: [
      'Voll deep!',
      'Schöner Mann!',
      'Darüber muss ich nachdenken...aber der Mann hat wohl recht.',
    ],
    commentAuthor: ['life_meaning', 'heroic_existence', 'meaning_struggle'],
    likeStatus: [false, false, false],
    commentDisplayStatus: 'limited',
  },
  {
    author: 'jp_sartre',
    profileImg: 'img/profile/sartre.jpg',
    location: 'Paris, France',
    description:
      'Um den wahren Wert des Lebens zu begreifen, müssen wir es ab und zu riskieren.',
    poster: 'img/poster/poster10.jpg',
    isPostLiked: 'false',
    isBookmarked: 'true',
    comments: [
      'Das klingt übelst gefährlich!',
      'Existentialismus und Freiheit!',
      'Was bedeutet es, existenzielle Entscheidungen zu treffen?',
      'Verantwortung für unser Leben übernehmen!',
      'Der Risikofaktor des Seins.',
      'Der existenzielle Mut.',
    ],
    commentAuthor: [
      'existential_freedom',
      'life_choices',
      'individual_freedom',
      'life_responsibility',
      'existential_courage',
      'philosophy_student',
    ],
    likeStatus: [true, false, false, false, false, false],
    commentDisplayStatus: 'limited',
  },
];

let stories = [
  {
    author: 'Rousseau',
    profileImg: 'img/profile/rousseau.jpg',
    location: 'Geneva, Switzerland',
    description: 'Der Mensch ist frei geboren, und überall liegt er in Ketten.',
  },
  {
    author: 'Voltaire',
    profileImg: 'img/profile/voltaire.jpg',
    location: 'Paris, France',
    description:
      'Ich mag verdammen, was du sagst, aber ich werde mein Leben dafür einsetzen, dass du es sagen darfst.',
  },

  {
    author: 'Hannah Arendt',
    profileImg: 'img/profile/arendt.jpg',
    location: 'Linden, Germany',
    description:
      'Die Freiheit ist die Fähigkeit, zu sagen, was gesagt werden sollte.',
  },
];

let suggestions = [
  {
    author: 'Spinoza',
    profileImg: 'img/profile/spinoza.jpg',
    location: 'Amsterdam, Netherlands',
    description:
      'Freiheit besteht nicht darin, seine Wünsche zu befriedigen, sondern in der Fähigkeit, seine Begierden zu kontrollieren.',
  },
  {
    author: 'Confucius',
    profileImg: 'img/profile/confucius.jpg',
    location: 'Qufu, China',
    description:
      'Unser größter Ruhm ist nicht, niemals zu fallen, sondern jedes Mal aufzustehen, wenn wir fallen.',
  },
  {
    author: 'Thales',
    profileImg: 'img/profile/thales.jpg',
    location: 'Miletus, Greece',
    description: 'Alles ist voller Götter.',
  },
  {
    author: 'John Locke',
    profileImg: 'img/profile/locke.jpg',
    location: 'Wrington, England',
    description: 'Die Vernunft ist der Schlüssel zur Freiheit.',
  },
  {
    author: 'Hume',
    profileImg: 'img/profile/hume.jpg',
    location: 'Edinburgh, Scotland',
    description: 'Die Vernunft ist ein Sklave der Leidenschaften.',
  },
  {
    author: 'Epicurus',
    profileImg: 'img/profile/epikur.jpg',
    location: 'Samos, Greece',
    description:
      'Gesundheit ist das höchste Gut, die Zufriedenheit das größte Vermögen.',
  },

  {
    author: 'Kierkegaard',
    profileImg: 'img/profile/kierkegaard.jpg',
    location: 'Copenhagen, Denmark',
    description:
      'Das Leben kann nur rückwärts verstanden, aber nur vorwärts gelebt werden.',
  },
];
