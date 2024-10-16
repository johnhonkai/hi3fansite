const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    // Close other open accordions
    toggles.forEach(item => {
      if (item !== toggle) {
        item.classList.remove('active');
        item.nextElementSibling.style.maxHeight = null;
      }
    });
    
    // Toggle the clicked accordion
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

///carousel
const carousels = {
  1: ['assets/guide/arlead1.png', 'assets/guide/arlead2.png', 'assets/guide/arlead3.png'], // Images for Carousel 1
  2: ['image4.jpg', 'image5.jpg', 'image6.jpg'], // Images for Carousel 2
};

let carouselIndices = {
  1: 0, // Current index for Carousel 1
  2: 0, // Current index for Carousel 2
};

function showImage(carouselId, index) {
  const carouselImage = document.getElementById(`carousel-image-${carouselId}`);
  carouselImage.src = carousels[carouselId][index];
}

function nextImage(carouselId) {
  carouselIndices[carouselId] = (carouselIndices[carouselId] + 1) % carousels[carouselId].length;
  showImage(carouselId, carouselIndices[carouselId]);
}

function prevImage(carouselId) {
  carouselIndices[carouselId] = (carouselIndices[carouselId] - 1 + carousels[carouselId].length) % carousels[carouselId].length;
  showImage(carouselId, carouselIndices[carouselId]);
}

const bossesData = {
  lightning: [
      { id: 'lightningsprout', name: 'Sprout of Wishing', mechanics: 'Phase 2 has lightning-vulnerable shield.', weakness: 'None', icon: "assets/type/IconBIO.png", image: "assets/Bosses/Sprout_of_Wishing_SSS.webp", weather: "Lightning: Enemies take 50% more Lightning DMG, and 50% less Physical DMG.", 
        videos: [
          { url: 'https://www.youtube.com/embed/Vryx1NK94nw', abyss: 'RedLotus 480D', uploader: 'Marisa Honkai' }
        ]
      }
  ],

  fire: [
    { id: 'firemobius', name: 'Mobius', mechanics: 'Green bar = shield. After green bar is destroyed, spawn a snake with hitcount hp. After snake is destroyed, get red bar. Red bar = take more damage. ', weakness: 'Lightning (L)', icon: "assets/type/IconMECH.png", image: "assets/Bosses/MOBIUS2.png", weather: "Fire: Enemies take 50% more Fire DMG, and 50% less Ice DMG.", 
      videos: [
    ]  }
  ],

  typecounter: [
    { id:'typekasumi', name: 'Kasumi', mechanics: 'Can choose fire or ice vulnerable shield.', weakness: 'None', icon: "assets/type/IconMECH.png", image: "assets/Bosses/Yae Kasumi.webp", weather: "Counter: Type counter effect is 20% stronger."},
    { id:'typeandrius', name: 'Dominator of Wolves', mechanics: 'Transition phase requires a valk with melee atk to parry the attack three times.\nPhase 2 has a shield.', weakness: 'Immune to Ice DMG.', icon: "assets/type/IconBIO.png", image: "assets/Bosses/Dominator of Wolves.webp", weather: "Counter: Type counter effect is 20% stronger."}

  
  ],

  oblivion: [
    { id: 'obvhomu',
      name: 'Homu Emperor', 
      mechanics: 'After defeating an enemy, Total DMG +20% for 15s, max 8 stacks, each stack duration is independent.', 
      weakness: 'None', icon: "assets/type/IconNULL.png", 
      image: "assets/Bosses/HOMU Emperor.webp", 
      weather: "Oblivion: For every character in the team with Omniscient Star tag, team Total DMG +8%. When AR Rite of Oblivion is activated, team Total DMG +30%.", 
      videos: [

    ]  }
  ],

  bloodthirsty: [
    { id: 'bloodsdmob',
      name: 'SD-Mech Swarm', 
      mechanics: 'Enemies appear in waves. Stage is complete once you defeat 36 enemies.', 
      icon: "assets/type/IconSDMECH.png", 
      weakness: 'None', 
      image: "assets/Bosses/Alien Guard.webp", 
      weather: "Bloodthirsty: After defeating an enemy, Total DMG +20% for 15s, max 8 stacks, each stack duration is independent.", 
      videos: [

    ]  }
  ],

  img: [
    { id: 'imgflower',
      name: 'Husk: Existentialism', mechanics: 'None', weakness: 'None', icon: "assets/type/IconIMG.png", image: "assets/Bosses/Husk - Existentialism.webp", weather: "IMG: IMG valk DMG +20%", 
      videos: [
    ]  }
  ],

  ranged: [
    { id: 'rangedkalpas',
      name: 'Kalpas', 
      mechanics: 'Transition phase has high hitcount hp. Has huge freeze trauma, frenzy state is disabled when frozen.', 
      weakness: 'None', icon: "assets/type/IconBIO.png", 
      image: "assets/Bosses/Flame-Chaser - Kalpas.webp", 
      weather: "", 
      videos: [

    ]  },
  ],

  stun: [
    { id: 'stunfish',
      name: 'Flying Fish: Patrol Force', 
      mechanics: 'Upon being stunned or having its special attack blocked, the boss will drop a Luminous Pupil. When it detonates, the boss takes more dmg, max 4 stacks.', 
      weakness: 'None', icon: "assets/type/IconPSI.png", 
      image: "assets/Bosses/Flying Fish Patrol Force.webp", 
      weather: "Unbalanced: Enemies take 40% more DMG when stunned and within 4s after the stun ends.", 
      videos: [

    ]  },
  ],

  sd: [
    { id: 'sdepernay',
      name: 'Meteroid: Epernay', 
      mechanics: 'Boss has breakable parts at certain points of the fight, breaking them reduces boss max HP. During transition, you can enter one of three false doors, each gives different effect: Generate 10 SD remnants, gain Total DMG +8% or gain sp pack.', 
      weakness: 'None', icon: "assets/type/IconSD.webp", 
      image: "assets/Bosses/epernay.png", 
      weather: "Stardust: SD valk DMG +20%", 
      videos: [

    ]  },
  ],

  stellar: [
    { id: 'stellarassaka',
      name: 'Saha: Assaka', 
      mechanics: 'First wave has 1 Alien Guard and 2 Zombie mobs.', 
      weakness: 'None', icon: "assets/type/IconPSI.png", 
      image: "assets/Bosses/Saha Assaka.webp", 
      weather: "Stellar: When AR is activated, Total DMG +30%. During Stellar Outburst, gain extra Total DMG +10%.", 
      videos: [

    ]  },
  ],

  starless: [
    { id: 'starlessbenares',
      name: 'Benares: Ice', 
      mechanics: 'First wave has creepers with paralyze trauma. When Astral Ring is not activated, Total DMG +20%', 
      weakness: 'Ice (H), Phy (H)', icon: "assets/type/IconNULL.png", 
      image: "assets/Bosses/Benares.webp", 
      weather: "Starless: Gain Total DMG +15%, effect is disabled during Stellar Outburst. When Astral Ring is not activated, Total DMG +30%.", 
      videos: [

    ]  },

    { id: 'starlessrimestar',
      name: 'Herrscher of the Rimestar', 
      mechanics: 'Break ice stars to gain Total DMG, max 8 stacks.', 
      weakness: 'Ice (Immune), Lightning (L)', icon: "assets/type/IconPSI.png", 
      image: "assets/Bosses/Herrscher of Rimestar.png", 
      weather: "Starless: Gain Total DMG +15%, effect is disabled during Stellar Outburst. When Astral Ring is not activated, Total DMG +30%.", 
      videos: [

    ]  },
  ],

  ice: [
      { id: 'icesprout', name: 'Sprout of Wishing', mechanics: 'Mechanic 2', weakness: 'Weakness 2', icon: "assets/type/IconBIO.png", image: "assets/Bosses/Boss_471.png", weather: "Type advantage effect is 20% stronger.", 
        videos: ['By IceMaster', 'By FrostyGirl'] 
      }
  ]
};

const teamData = {
  lightningsprout: {
    teamInfoText: "Data is from v7.8 CN Server (PC) Top 100 Myriad ??? D.",
    entries: [
      {
        type: 'lineup',
        lineup: ["valkportrait/Vita Lone Planetfarer.png", "valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Coralie Valkyrie Blastmetal.png", "valkportrait/asop_songque.png"],
        rank: '100%'
      }
    ]
  },

  firemobius: {
      teamInfoText: "Data is from v7.7 SEA Server Top 100 Myriad 528 D.",
      entries: [
        {
          type: 'lineup',
          lineup: ["valkportrait/Lantern Lone Destruction.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_sera.png"],
          rank: '95%',
          note: 'Highest Score: S 754, S2 766, SS 795',

        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Lantern Lone Destruction.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_songque.png"],
          rank: '4%',
          note: 'Highest Score: S 683, S2 720, SS1 721',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Lantern Lone Destruction.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Songque Jovial Deception.png", "valkportrait/asop_sera.png"],
          rank: '1%',
          note: 'Highest Score: S 707',
        },
        
      ]
    },


      typeandrius: {
        teamInfoText: "Incomplete data",
        entries: [
          {
            type: 'lineup',
            lineup: ["valkportrait/Vita Lone Planetfarer.png", "valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Coralie Valkyrie Blastmetal.png", "valkportrait/asop_songque.png"],
            rank: '-'
          },
        ]
      },
      typekasumi: {
        teamInfoText: "Data is from v7.8 CN Server (PC) Top 100 Myriad ??? D.",

        entries: [
          {
            type: 'lineup',
            lineup: ["valkportrait/Lantern Lone Destruction.png", "valkportrait/Vita Lone Planetfarer.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_sera.png"],
            rank: 'Rank 1-2\n28%',
          note: 'S-Sena has higher score than S-Vita. At higher ranks and synergy, scores are close.',
        },

          {
            type: 'lineup',
            lineup: ["valkportrait/Lantern Lone Destruction.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_sera.png"],
            rank: 'Rank 3-5\n72%',  
          },
          { 
            type: 'top', 
            top: 'Vita and Sena appearance rate based on rank' 
          },
          { 
            type: 'extraTeamRow', 
            extraTeamRow: [
              { img: 'valkportrait/senass.png', text: '52%' },
              { img: 'valkportrait/vitass.png', text: '27%' },
              { img: 'valkportrait/senas0.png', text: '13%' },
              { img: 'valkportrait/senas2.png', text: '8%' },
              { img: 'valkportrait/vitas2.png', text: '1%' },
              { img: 'valkportrait/vitas0.png', text: '0%' }
            ] 
          },
          { 
            type: 'top', 
            top: 'Highest score for different Sena and Vita rank' 
          },
          { 
            type: 'extraTeamRow', 
            extraTeamRow: [
              { img: 'valkportrait/vitass.png', text: '822' },
              { img: 'valkportrait/senass.png', text: '812' },
              { img: 'valkportrait/senas0.png', text: '772' },
              { img: 'valkportrait/senas2.png', text: '763' },
              { img: 'valkportrait/vitas2.png', text: '759' },
              { img: 'valkportrait/vitas0.png', text: 'N/A' }
            ] 
          }
        ]
      },
      imgflower: {
          teamInfoText: "Data is from v7.8 CN Server (PC) Top 100 Myriad ??? D.",
          entries: [
            {
              type: 'lineup',
              lineup: ["valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Mei Herrscher of Origin.png", "valkportrait/Bronya Herrscher of Truth.png"],
              rank: '100%',
            },
          ]
      },

      obvhomu: {
        teamInfoText: "Data is from v7.8 CN Server (PC) Top 100 Myriad ??? D.",
        entries: [
          {
            type: 'lineup',
            lineup: ["valkportrait/Vita Lone Planetfarer.png", "valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Coralie Valkyrie Blastmetal.png", "valkportrait/asop_songque.png"],
            rank: 'Rank 1,3,5\n72%',
            note: 'Highest score: S2 786, SS 793, SSS 803',
          },
          {
            type: 'lineup',
            lineup: ["valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/Vita Lone Planetfarer.png", "valkportrait/asop_songque.png"],
            rank: 'Rank 2,4\n8%',
            note: 'Sena wants higher rank than Vita to beat Vita team. Highest score: SSS 801',
          },
          {
            type: 'lineup',
            lineup: ["valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Mei Herrscher of Origin.png", "valkportrait/Bronya Herrscher of Truth.png", "valkportrait/asop_songque.png"],
            rank: '13%',
            note: ' Highest score: SSS 791',
          },
          {
            type: 'lineup',
            lineup: ["valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Mei Herrscher of Origin.png", "valkportrait/Bronya Herrscher of Truth.png", "valkportrait/elf_kiana.png"],
            rank: '7%',
            note: ' Highest score: S2 783, SS 785, SSS 785', 
          },
        ]
    },

      rangedkalpas: {
      teamInfoText: "Data is from v7.7 CN Server (PC) Top 100 Myriad ??? D.",
      entries: [
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Lantern Lone Destruction.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_sera.png"],
          rank: '91%',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Bronya Silverwing N-EX.png", "valkportrait/Sushang Jade Knight.png", "valkportrait/Kira Sugary Starburst.png", "valkportrait/elf_ely.png"],
          rank: '8%',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Elysia Herrscher of Human Ego.png", "valkportrait/Sushang Jade Knight.png", "valkportrait/Kira Sugary Starburst.png", "valkportrait/elf_ely.png"],
          rank: '1%',
        },
      ]
    },

    bloodsdmob: {
      teamInfoText: "Data is from v7.7 SEA Server Top 100 Myriad 527D.",
      entries: [
        {
          type: 'lineup',
          lineup: ["valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/Theresa Schicksal's Imperative.png", "valkportrait/asop_songque.png"],
          rank: 'Rank 1,2,4\n37%',
          note: 'Highest Score: S0 Sena 737, S2 Sena 792, SSS Sena 862',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Lantern Lone Destruction.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/asop_sera.png"],
          rank: 'Rank 3,5\n51%',
          note: 'Highest Score: S0 JD 764, S2 JD 764, SS1 805',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/asop_sera.png"],
          rank: '10%',
          note: 'Highest Score: S0 JD 727',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/Lantern Lone Destruction.png", "valkportrait/asop_sera.png"],
          rank: '1%',
          note: 'Highest Score: SS JD 737',

        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/Helia Valkyrie Boltstorm.png", "valkportrait/asop_songque.png"],
          rank: '1%',
          note: 'Highest Score: SS Sena 714',
        },
      ]
    },

    stunfish: {
      teamInfoText: "Data is from v7.7 SEA Server Top 100 Myriad 527D.",
      entries: [
        {
          type: 'lineup',
          lineup: ["valkportrait/Prometheus Terminal Aide.png", "valkportrait/Fu Hua Herrscher of Sentience.png", "valkportrait/Seele Herrscher of Rebirth.png", "valkportrait/elf_bunny.png"],
          rank: '89%',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Prometheus Terminal Aide.png", "valkportrait/Fu Hua Herrscher of Sentience.png", "valkportrait/Seele Herrscher of Rebirth.png", "valkportrait/elf_dudu.png"],
          rank: '11%',
        },
      ]
    },

    sdepernay: {
      teamInfoText: "Data is from v7.8 CN Server (PC) Top 100 Myriad ??? D.",
      entries: [
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Vita Lone Planetfarer.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_sera.png"],
          rank: 'Rank 1-5\n58%',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Lantern Lone Destruction.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_sera.png"],
          rank: 'Rank 6\n6%',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/Thelema Mad Pleasure.png", "valkportrait/asop_sera.png"],
          rank: '35%',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Lantern Lone Destruction.png", "valkportrait/Senadina Deepspace Anchor.png", "valkportrait/asop_sera.png"],
          rank: '1%',
        },
        { 
          type: 'top', 
          top: 'Highest score for different Vita, Sena and Lantern rank' 
        },
        { 
          type: 'extraTeamRow', 
          extraTeamRow: [
            { img: 'valkportrait/vitass.png', text: '853' },
            { img: 'valkportrait/lampss.png', text: '835' },
            { img: 'valkportrait/lamps0.png', text: '816' },
            { img: 'valkportrait/senass.png', text: '805' },
            { img: 'valkportrait/lamps2.png', text: '803' },
          ] 
        },
        { 
          type: 'extraTeamRow', 
          extraTeamRow: [

            { img: 'valkportrait/senas2.png', text: '794' },
            { img: 'valkportrait/senas0.png', text: '792' },
            { img: 'valkportrait/vitas2.png', text: 'N/A' },
            { img: 'valkportrait/vitas0.png', text: 'N/A' }
          ] 
        }
      ]
    },

    stellarassaka: {
      teamInfoText: "Data is from v7.8 CN Server (PC) Top 100 Myriad ??? D.",
      entries: [
        {
          type: 'lineup',
          lineup: ["valkportrait/Songque Jovial Deception.png", "valkportrait/Vita Lone Planetfarer.png", "valkportrait/Lantern Lone Destruction.png", "valkportrait/asop_sera.png"],
          rank: 'Top 1-6\n21%',
          note: 'Highest score: SS 823, SSS 843',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Mei Herrscher of Origin.png", "valkportrait/Bronya Herrscher of Truth.png", "valkportrait/elf_kiana.png"],
          rank: 'Top 7-10\n78%',
          note: 'Highest score: SS 807, SS1 810, SS2 818, SS3 819, SSS 827',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/Kiana Herrscher of Finality.png", "valkportrait/Mei Herrscher of Origin.png", "valkportrait/Bronya Herrscher of Truth.png", "valkportrait/asop_songque.png"],
          rank: '1%',
          note: 'Highest score: SSS 809'
        },
      ]
    },

    starlessbenares: {
      teamInfoText: "Data is from v7.7 SEA Server Top 100 Myriad 527D.",
      entries: [
        {
          type: 'lineup',
          lineup: ["valkportrait/Theresa Lunar Vow.png", "valkportrait/simpdps.png", "valkportrait/Eden Golden Diva.png", "valkportrait/elf_kiana.png"],
          rank: '99%',
          note: 'This is SIMP Part 1 DPS, not Lunar Vow dps. SIMP uses Zeno TM Signature B (Top score), Zhenyi TM Signature B or Signature TMB',
        },
        {
          type: 'lineup',
          lineup: ["valkportrait/lvdps.png", "valkportrait/Theresa Schicksal's Imperative.png", "valkportrait/Eden Golden Diva.png", "valkportrait/elf_kiana.png"],
          rank: '1%',
          note: 'Captain Yaesuo used Aladdin on Eden for dps SSS LV. Rank 76 Score 785',
        }
      ]
    },

    starlessrimestar: {
      teamInfoText: "n/a",
      entries: [

      ]
    },
    
  icesprout: {
    teamInfoText: "Data is from Abyss 510 D.",
    lineups: [
      {
        lineup: ['img5.png', 'img6.png', 'img7.png', 'img8.png'],
        rank: 'No 2',
        note: 'Note for Frost Star team 1',
      }
    ],
    extraTeamRows: [
      {
        extraTeamRow: [
          { img: 'img5.png', text: '52%' },
          { img: 'img6.png', text: '48%' },
          { img: 'img7.png', text: '50%' }
        ]
      }
    ]
  }
};

// Function to get the value of a URL parameter by name
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to load the page with the specific boss based on the URL parameter or load a default boss
function loadPageWithBoss() {
  const weatherParam = getUrlParameter('weather'); // Get the 'weather' parameter from the URL
  const bossParam = getUrlParameter('boss'); // Get the 'boss' parameter from the URL

  if (weatherParam && bossParam) {
    const decodedBossId = decodeURIComponent(bossParam); // Decode URL-encoded characters
    const bossFound = findBossByIdAndWeather(decodedBossId, weatherParam); // Find the boss by id and weather
    if (bossFound) {
        // Automatically select the correct weather and show the list of bosses
        selectWeatherAndBoss(weatherParam, bossFound);
    } else {
        // Load the default boss if the URL parameter doesn't match any boss
        loadDefaultBoss();
    }
  } else {
    // No URL parameter, load the default boss
    loadDefaultBoss();
  }
}

// Function to load a default boss when no boss is specified in the URL
function loadDefaultBoss() {
  const defaultWeather = 'lightning'; // Default weather type
  const defaultBossId = 'lightningsprout'; // Default unique boss ID

  // Select the default weather and boss
  const weatherRadio = document.querySelector(`input[name="weather"][value="${defaultWeather}"]`);
  if (weatherRadio) {
    weatherRadio.checked = true; // Set the radio button for the default weather
  }

  showBosses(defaultWeather, defaultBossId);
}

// Function to find a boss by unique id and weather in the bossesData structure
function findBossByIdAndWeather(bossId, weather) {
  const bosses = bossesData[weather];
  if (bosses) {
      return bosses.find(boss => boss.id === bossId) || null; // Match by unique id instead of name
  }
  return null;
}

// Function to select the correct weather and boss based on unique id
function selectWeatherAndBoss(weather, boss) {
  // Select the weather radio button
  const weatherRadio = document.querySelector(`input[name="weather"][value="${weather}"]`);
  if (weatherRadio) {
      weatherRadio.checked = true; // Select the correct weather
  }

  // Show bosses for the selected weather
  showBosses(weather, boss.id); // Pass the specific boss id to select the boss radio button
}

function showBosses(weather, defaultBossId = null) {
  const bossSection = document.getElementById('boss-section');
  const bossList = document.getElementById('boss-list');

  // Update the weather description
  bossSection.classList.remove('hidden');
  bossList.innerHTML = ''; // Clear previous content

  bossesData[weather].forEach(boss => {
    const label = document.createElement('label');
    label.classList.add('radio-btn');
    
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'boss';
    radioInput.value = boss.id;  // Use unique id here

    // Ensure to pass the weather and id when calling showBossInfo
    radioInput.onchange = () => showBossInfo(boss, weather);

    label.appendChild(radioInput);
    label.append(boss.name);
    bossList.appendChild(label);

    // Automatically select the default boss if provided
    if (defaultBossId && boss.id === defaultBossId) {
        radioInput.checked = true; // Set the radio button to checked
        showBossInfo(boss, weather); // Pass the weather and id here as well
    }
  });
}



function showBossInfo(boss, weather) {
  const bossInfo = document.getElementById('boss-info');
  const bossName = document.getElementById('boss-name');
  const bossIcon = document.getElementById('boss-icon');
  const bossImage = document.getElementById('boss-image');
  const mechanicsElement = document.getElementById('mechanics');
  const weaknessElement = document.getElementById('weakness');
  const weatherTypeElement = document.getElementById('weather-type');
  const teamTableBody = document.getElementById('team-list');
  const teamInfoText = document.getElementById('team-info-text');
  const videoList = document.getElementById('video-list');

  // Display boss info
  bossName.textContent = boss.name;
  mechanicsElement.textContent = boss.mechanics;
  weaknessElement.textContent = boss.weakness;
  weatherTypeElement.textContent = boss.weather;
  bossIcon.src = boss.icon;
  bossImage.src = boss.image;
  bossInfo.classList.remove('hidden');

  // Clear previous team data and video sections
  teamTableBody.innerHTML = '';
  videoList.innerHTML = ''; 

  // Load team data for the selected boss based on the unique id (boss.id)
  const teams = teamData[boss.id]; // Get team data by boss id
  if (teams) {
      const teamInfoTextContent = teams.teamInfoText || ''; 
      teamInfoText.textContent = teamInfoTextContent; 

      // Loop through entries in teamData
      teams.entries.forEach(entry => {
          if (entry.type === 'lineup') {
              const row = document.createElement('tr');
              const lineupCell = document.createElement('td');
              const wrapperDiv = document.createElement('div'); 
              wrapperDiv.classList.add('team-images-wrapper');

              const lineupDiv = document.createElement('div');
              lineupDiv.classList.add('team-images');

              entry.lineup.forEach(imgSrc => {
                  const img = document.createElement('img');
                  img.src = imgSrc;
                  lineupDiv.appendChild(img);
              });

              wrapperDiv.appendChild(lineupDiv);
              if (entry.note) {
                  const noteDiv = document.createElement('div');
                  noteDiv.classList.add('optional-note');
                  noteDiv.innerHTML = entry.note.split('\n').join('<br>'); 
                  wrapperDiv.appendChild(noteDiv);
              }

              lineupCell.appendChild(wrapperDiv);
              row.appendChild(lineupCell);

              const rankCell = document.createElement('td');
              rankCell.innerHTML = entry.rank.split('\n').join('<br>'); 
              row.appendChild(rankCell);
              teamTableBody.appendChild(row);
          } 

          else if (entry.type === 'top') {
              const topRow = document.createElement('tr');
              const topCell = document.createElement('td');
              topCell.colSpan = 2; // Span across both columns
              topCell.textContent = entry.top;
              topCell.classList.add('top-row');
              topRow.appendChild(topCell);
              teamTableBody.appendChild(topRow);
          } 

          else if (entry.type === 'extraTeamRow') {
              const extraRow = document.createElement('tr');
              const extraCell = document.createElement('td');
              extraCell.colSpan = 2; 


              const extraRowWrapper = document.createElement('div');
              extraRowWrapper.classList.add('team-extra-row');

              entry.extraTeamRow.forEach(item => {
                  const columnDiv = document.createElement('div');
                  columnDiv.classList.add('team-column');

                  const img = document.createElement('img');
                  img.src = item.img;
                  columnDiv.appendChild(img);

                  const text = document.createElement('p');
                  text.textContent = item.text; 
                  columnDiv.appendChild(text);

                  extraRowWrapper.appendChild(columnDiv);
              });

              extraCell.appendChild(extraRowWrapper);
              extraRow.appendChild(extraCell);
              teamTableBody.appendChild(extraRow);
          }
      });
  } else {
      const noTeamMessage = document.createElement('tr');
      const noTeamCell = document.createElement('td');
      noTeamCell.colSpan = 2;
      noTeamCell.textContent = "No team data available for this boss.";
      noTeamMessage.appendChild(noTeamCell);
      teamTableBody.appendChild(noTeamMessage);
  }

  // Load video data for the selected boss
  if (boss.videos && boss.videos.length > 0) {
    boss.videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        
        // Create iframe for video
        const iframe = document.createElement('iframe');
        iframe.src = video.url; // Set YouTube URL for the video
        iframe.width = '100%';
        iframe.height = '200px';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');
        videoItem.appendChild(iframe);

        // Create text info (Abyss and Uploader)
        const videoInfo = document.createElement('div');
        videoInfo.classList.add('video-info');

        const abyssText = document.createElement('p');
        abyssText.textContent = video.abyss;

        const uploaderText = document.createElement('p');
        uploaderText.textContent = 'Uploader: ' + video.uploader;

        videoInfo.appendChild(abyssText);
        videoInfo.appendChild(uploaderText);

        videoItem.appendChild(videoInfo);
        videoList.appendChild(videoItem);  // Append to videoList directly
    });
} else {
    // If no videos are available, display a message
    const noVideoMessage = document.createElement('p');
    noVideoMessage.textContent = "No videos available for this boss.";
    videoList.appendChild(noVideoMessage);  // Append to videoList directly
}
}


// Function to load the page with weather and boss, handling hyperlinks
function loadPageWithWeatherAndBoss() {
  const weatherParam = getUrlParameter('weather'); // Get the 'weather' parameter from the URL
  const bossParam = getUrlParameter('boss'); // Get the 'boss' parameter from the URL

  if (weatherParam && bossParam) {
      const decodedBossId = decodeURIComponent(bossParam); // Decode URL-encoded characters
      const bossFound = findBossByIdAndWeather(decodedBossId, weatherParam); // Find the boss by id and weather
      if (bossFound) {
          // Automatically select the correct weather and show the list of bosses
          selectWeatherAndBoss(weatherParam, bossFound);
      } else {
          // Load the default boss if the URL parameter doesn't match any boss
          loadDefaultBoss();
      }
  } else {
      // No URL parameter, load the default boss
      loadDefaultBoss();
  }
}

function selectWeatherAndBoss(weather, boss) {
  // Select the weather radio button
  const weatherRadio = document.querySelector(`input[name="weather"][value="${weather}"]`);
  if (weatherRadio) {
      weatherRadio.checked = true; // Select the correct weather
  }

  // Show bosses for the selected weather
  showBosses(weather, boss.id); // Ensure weather is passed
}

// Call this function when the page finishes loading
window.onload = loadPageWithWeatherAndBoss;
