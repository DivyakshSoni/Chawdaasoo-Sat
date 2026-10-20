// Default configuration and content for "If I Could Write Us Again"

export const DEFAULT_CONFIG = {
  websiteTitle: "If I Could Write Us Again",
  subtitle: "A little world I made for you.",
  recipientName: "you",
  recipientNickname: "you",
  senderName: "Someone who is trying to do better",
  senderSignature: "With sincerity,\nSomeone who is trying to do better.",
  senderPhone: "", // Optional WhatsApp phone number e.g. "1234567890"
  showMemories: true,

  // Chapter 1 Content
  welcome: {
    badge: "Chapter 1 of 7",
    heading: "Hey, you. Yes, YOU. 💌",
    supportingText: "Out of all the things I could have sent you, I decided to make you a little world instead.",
    subtext: "No pressure. No expectations. Just something I wanted you to see.",
    buttonText: "Open your little surprise ✨",
    warningText: "Warning: May contain an unreasonable number of hearts, a few dramatic sentences, and one very nervous boy.",
  },

  // Chapter 2 Content
  letter: {
    badge: "Chapter 2 of 7",
    headline: "There are some things I should have said better.",
    salutation: "Dear you,",
    paragraphs: [
      "I have thought a lot about the past, about the things I did wrong, and about the ways my actions may have hurt you.",
      "I can't go back and make those moments different. I can't ask you to forget them, either.",
      "What I can do is take responsibility for my part in what happened.",
      "For a long time, I needed to understand that caring about someone isn't enough on its own. The way you treat them matters. The habits you choose to change matter. And the promises you make mean very little unless your actions begin to match them.",
      "I've spent time working on myself, not because I can demand another chance, but because I needed to become better than the person I was when things went wrong.",
      "I still care about you. I still value what we shared. And if you ever feel comfortable talking again, I'd be grateful for that opportunity.",
      "This little website isn't proof that I've changed. That's something only time and my actions can show you.",
      "It's simply my way of saying that I'm sorry, that I've learned, and that you still matter to me."
    ],
    closing: "With sincerity,",
    signoff: "Someone who is trying to do better.",
    postscript: "P.S. I may have overthought this website about 847 times. You deserve the effort. 😅",
    cta: "There's a little more I want to show you."
  },

  // Chapter 3 Content
  memories: {
    badge: "Chapter 3 of 7",
    headline: "A Little Collection of Memories",
    subheading: "Sometimes, it isn't the biggest moments that stay with us. It's the little things that made an ordinary day feel special.",
    cta: "Okay, one more little thing… 🌷",
    items: [
      {
        id: "mem-1",
        title: "Sita Ramam is still pending for me",
        subtitle: "A story waiting for you",
        date: "An evening kept sacred",
        note: "There is a movie we were supposed to watch together, and honestly, I haven't been able to bring myself to watch it. Sita Ramam is still pending for me... because deep down, that story was only ever meant to be watched beside you.",
        themeColor: "#E8A2BB",
        tag: "Unfinished Story",
        type: "sitaramam"
      },
      {
        id: "mem-2",
        title: "Basketball after college",
        subtitle: "Golden hour by the court",
        date: "Late campus afternoons",
        note: "The sound of the ball on the court, the breeze as the campus slowly emptied, and the way the entire day turned into gold whenever you were there. I wasn't just playing — I was finding every sweet excuse to stay in your orbit just a little longer.",
        themeColor: "#F7B882",
        tag: "College Sunset",
        type: "basketball"
      },
      {
        id: "mem-3",
        title: "Our first date on Roop Sagar Road",
        subtitle: "Where my heart first learned your name",
        date: "The day everything began",
        note: "Walking down Roop Sagar Road with you for the very first time, trying so desperately to look calm while my heart was doing backflips. I still remember the exact warmth in the air, and how you effortlessly turned a quiet Udaipur road into the most unforgettable place in my world.",
        themeColor: "#873D60",
        tag: "Roop Sagar Road",
        type: "roopsagar"
      },
      {
        id: "mem-4",
        title: "Between Maggi Point & CTAE Library",
        subtitle: "Whispers, stolen glances & hot bowls",
        date: "Study breaks & laughter",
        note: "Hiding in the quiet corners of CTAE library, pretending to study while only looking for your eyes... and then rushing to Maggi Point for hot, steaming bowls and conversations that felt like home. Those simple college moments were the brightest parts of my life.",
        themeColor: "#C98BB9",
        tag: "CTAE & Maggi Point",
        type: "maggilibrary"
      }
    ]
  },

  // Chapter 4 Content
  garden: {
    badge: "Chapter 4 of 7",
    headline: "Pick a flower. It has a little message for you.",
    subheading: "Each bud has quietly bloomed with a thought I wanted to share with you.",
    completionText: "You've made this little garden bloom. 🌸",
    cta: "There's something I've been learning…",
    flowers: [
      {
        id: "flower-1",
        name: "Kindness",
        color: "#F28C9F",
        accent: "#F8DDE7",
        message: "You deserve kindness that shows up in actions, not just words.",
        detail: "Being gentle in how I speak, listen, and treat the people who matter most."
      },
      {
        id: "flower-2",
        name: "Growth",
        color: "#E8A2BB",
        accent: "#E9E2F6",
        message: "Changing isn't about claiming to be perfect. It's about noticing when you're wrong and choosing to do better.",
        detail: "Learning how to catch my defensive habits and replace them with accountability."
      },
      {
        id: "flower-3",
        name: "Happiness",
        color: "#F7B882",
        accent: "#F4E4BF",
        message: "I hope life gives you a thousand little reasons to smile.",
        detail: "Whether in our paths crossing again or from afar, your joy is what I truly hope for."
      },
      {
        id: "flower-4",
        name: "Hope",
        color: "#A888B5",
        accent: "#E9E2F6",
        message: "I don't know what the future holds, but I know I'd want to approach it differently if we ever chose to try again.",
        detail: "With maturity, patience, mutual respect, and genuine effort every single day."
      }
    ]
  },

  // Chapter 5 Content
  growthCards: {
    badge: "Chapter 5 of 7",
    headline: "Things I wish I'd understood sooner.",
    subheading: "Tap any card to turn it over. Growth begins when we stop making excuses.",
    quote: "I can't promise a perfect story. I can promise that I want to keep learning how to write my part of it better.",
    cta: "Now, one slightly dramatic question… 👀",
    cards: [
      {
        id: "card-1",
        title: "Love isn't just a feeling",
        front: "I thought caring was enough.",
        back: "I'm learning that love also means being considerate, communicating honestly, listening, and showing up consistently."
      },
      {
        id: "card-2",
        title: "Sorry is a beginning",
        front: "An apology can't undo everything.",
        back: "I understand that saying sorry doesn't erase hurt. Taking responsibility means accepting the consequences and changing the behavior behind the apology."
      },
      {
        id: "card-3",
        title: "Change takes practice",
        front: "I can't promise I'll never make a mistake.",
        back: "What I can commit to is noticing my patterns, being honest about setbacks, taking feedback seriously, and continuing to work on myself."
      },
      {
        id: "card-4",
        title: "Trust is earned",
        front: "Words can sound beautiful.",
        back: "But trust comes from consistent actions over time. You wouldn't owe me trust just because I asked for it."
      },
      {
        id: "card-5",
        title: "Your happiness matters",
        front: "What do I wish for you?",
        back: "I wish you peace, happiness, and a relationship in which you feel respected and appreciated. If we ever try again, I want us to build something healthier together."
      }
    ]
  },

  // Chapter 6 Content
  playfulQuiz: {
    badge: "Chapter 6 of 7",
    headline: "Okay, serious face off for a second. 😭",
    question: "On a scale of 1 to 10, how much did my dramatic little website make you smile?",
    skipText: "Skip this little question",
    cta: "There's just one thing left to ask.",
    responses: {
      low: "Fair enough. The design department will be having an emergency debrief meeting. 😂",
      mid: "Okay, I'll take that little smile as a tiny win. 🌷",
      high: "Someone please stop me from adding another 47 hearts to this website. 💗"
    }
  },

  // Chapter 7 Content
  finalQuestion: {
    badge: "Chapter 7 of 7",
    headline: "Can I ask you something honestly?",
    q1: {
      text: "Do you feel ready to forgive me someday?",
      subtext: "You don't have to rush this, and you don't have to give me an answer you're not ready to give.",
      yesBtn: "Yes, I think I can. 💗",
      noBtn: "Not yet. I need more time. 🌷",
      yesAcknowledgment: "Thank you for being open to that possibility. I know forgiveness is personal, and I won't treat it as something I am entitled to."
    },
    q2: {
      text: "If we both wanted to, would you be open to giving us another chance? 💌",
      subtext: "Take your time. There is no right or wrong answer here.",
      yesBtn: "Yes, let's talk about it. 💖",
      noBtn: "I'm not ready to try again. 🤍"
    },
    endings: {
      talk: {
        banner: "YOU MADE IT TO THE LAST CHAPTER. 🥹💗",
        title: "Thank you for being willing to hear me out.",
        paragraphs: [
          "I don't expect one conversation to fix everything. I want to take things slowly, listen better, and let my actions speak for me.",
          "If we choose to start again, I want us to build something healthier than what we had before — one honest conversation, one better choice, and one day at a time.",
          "No grand promises to hide behind. Just real effort, patience, and care."
        ],
        ctaText: "Let's talk sometime 💌",
        whatsAppPlaceholderMessage: "Hey, I finished looking at your little website. I'd be open to talking. 💗"
      },
      needTime: {
        title: "That's completely okay.",
        subheading: "Thank you for being honest with me.",
        message: "I understand that you have your own feelings and your own timeline. I won't rush you. I hope life brings you happiness and peace, whatever happens next.",
        badge: "Honesty & Respect 🌷"
      },
      notReady: {
        title: "Thank you for reading something I made with care.",
        subheading: "I truly appreciate your time.",
        message: "I'm sorry for the ways I hurt you, and I respect your decision. I genuinely wish you happiness, peace, and good things ahead.",
        badge: "Gratitude & Well Wishes 🤍"
      }
    }
  },

  // Bonus Secret Note
  secretNote: {
    title: "You found the little secret note! 🌟",
    content: "If you're reading this, thank you for taking the time to explore this page. No matter what the future holds, knowing you made my life richer and taught me what real growth looks like. Take good care of yourself always.",
    author: "With warmth & gratitude"
  }
};
