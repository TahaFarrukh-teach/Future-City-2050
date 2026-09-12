const categories = [

  {
    id: "transport",
    name: "Transportation",
    icon: "🚄",
    desc: "How will people move around your city?",

    options: [

      {
        name: "Self-driving electric cars",
        desc: "Quiet, clean autonomous vehicles.",
        e: "+4 Happiness • +2 Tech • -3 Pollution",

        v: {
          h: 4,
          t: 2,
          s: 2,
          b: -10,
          p: -3
        }
      },

      {
        name: "High-speed maglev",
        desc: "Fast public transport across the city.",
        e: "+5 Happiness • +4 Sustainability • -4 Pollution",

        v: {
          h: 5,
          t: 3,
          s: 4,
          b: -14,
          p: -4
        }
      },

      {
        name: "Flying taxis",
        desc: "Fast short-distance air travel.",
        e: "+6 Tech • +2 Happiness • +2 Pollution",

        v: {
          h: 2,
          t: 6,
          s: -1,
          b: -16,
          p: 2
        }
      }

    ]
  },


  {
    id: "energy",
    name: "Energy",
    icon: "⚡",
    desc: "Power your city for decades to come.",

    options: [

      {
        name: "Solar + wind",
        desc: "A renewable energy network.",
        e: "+7 Sustainability • -7 Pollution",

        v: {
          h: 2,
          t: 2,
          s: 7,
          b: -12,
          p: -7
        }
      },

      {
        name: "Smart energy grid",
        desc: "AI balances production and demand.",
        e: "+5 Tech • +4 Sustainability",

        v: {
          h: 3,
          t: 5,
          s: 4,
          b: -15,
          p: -4
        }
      },

      {
        name: "Mixed energy",
        desc: "Reliable mix with a slower transition.",
        e: "+4 Budget • +1 Happiness • +4 Pollution",

        v: {
          h: 1,
          t: 1,
          s: -1,
          b: 4,
          p: 4
        }
      }

    ]
  },


  {
    id: "buildings",
    name: "Buildings",
    icon: "🏙️",
    desc: "Choose how your city grows upward.",

    options: [

      {
        name: "Vertical green towers",
        desc: "Gardens, trees and efficient apartments.",
        e: "+7 Sustainability • +5 Happiness",

        v: {
          h: 5,
          t: 2,
          s: 7,
          b: -10,
          p: -5
        }
      },

      {
        name: "Smart buildings",
        desc: "AI-managed homes and offices.",
        e: "+7 Tech • +4 Happiness",

        v: {
          h: 4,
          t: 7,
          s: 2,
          b: -13,
          p: -2
        }
      },

      {
        name: "Eco-friendly low-rise",
        desc: "Human-scale buildings with natural materials.",
        e: "+5 Happiness • -4 Pollution",

        v: {
          h: 5,
          t: 0,
          s: 4,
          b: -5,
          p: -4
        }
      }

    ]
  },


  {
    id: "ai",
    name: "AI Usage",
    icon: "🤖",
    desc: "Decide where AI helps your citizens.",

    options: [

      {
        name: "AI everywhere",
        desc: "Personal assistants and smart city systems.",
        e: "+10 Tech • +4 Happiness",

        v: {
          h: 4,
          t: 10,
          s: 1,
          b: -12,
          p: -1
        }
      },

      {
        name: "Balanced AI",
        desc: "AI with people making the final decisions.",
        e: "+6 Tech • +6 Happiness",

        v: {
          h: 6,
          t: 6,
          s: 2,
          b: -7,
          p: 0
        }
      },

      {
        name: "Limited AI",
        desc: "Use AI only for important city services.",
        e: "+3 Happiness • +3 Budget",

        v: {
          h: 3,
          t: 2,
          s: 1,
          b: 3,
          p: 0
        }
      }

    ]
  },


  {
    id: "schools",
    name: "Schools",
    icon: "🎓",
    desc: "Prepare the next generation.",

    options: [

      {
        name: "VR + AR classrooms",
        desc: "Interactive lessons in immersive worlds.",
        e: "+7 Tech • +5 Happiness",

        v: {
          h: 5,
          t: 7,
          s: 1,
          b: -9,
          p: -1
        }
      },

      {
        name: "AI tutors",
        desc: "Personalized learning for every student.",
        e: "+8 Tech • +6 Happiness",

        v: {
          h: 6,
          t: 8,
          s: 0,
          b: -10,
          p: 0
        }
      },

      {
        name: "Global classrooms",
        desc: "Students learn with people around the world.",
        e: "+5 Happiness • +4 Tech",

        v: {
          h: 5,
          t: 4,
          s: 2,
          b: -6,
          p: -1
        }
      }

    ]
  },


  {
    id: "sports",
    name: "Sports",
    icon: "🏟️",
    desc: "Give citizens places to stay active.",

    options: [

      {
        name: "Smart stadiums",
        desc: "Connected stadiums with efficient systems.",
        e: "+6 Happiness • +3 Tech",

        v: {
          h: 6,
          t: 3,
          s: 1,
          b: -12,
          p: -1
        }
      },

      {
        name: "Green sports parks",
        desc: "Open-air fields surrounded by nature.",
        e: "+8 Happiness • -5 Pollution",

        v: {
          h: 8,
          t: 0,
          s: 5,
          b: -5,
          p: -5
        }
      },

      {
        name: "E-sports + VR",
        desc: "Competitive digital sports arenas.",
        e: "+5 Tech • +4 Happiness",

        v: {
          h: 4,
          t: 5,
          s: 0,
          b: -8,
          p: 0
        }
      }

    ]
  },


  {
    id: "environment",
    name: "Environment",
    icon: "🌳",
    desc: "Protect nature while your city grows.",

    options: [

      {
        name: "Forest + water network",
        desc: "Large parks, clean rivers and wildlife areas.",
        e: "+10 Sustainability • -10 Pollution",

        v: {
          h: 7,
          t: 0,
          s: 10,
          b: -8,
          p: -10
        }
      },

      {
        name: "Zero-waste city",
        desc: "Recycling and circular resource systems.",
        e: "+8 Sustainability • -8 Pollution",

        v: {
          h: 4,
          t: 3,
          s: 8,
          b: -7,
          p: -8
        }
      },

      {
        name: "Climate-tech city",
        desc: "Technology focuses on climate protection.",
        e: "+7 Tech • +7 Sustainability",

        v: {
          h: 4,
          t: 7,
          s: 7,
          b: -12,
          p: -7
        }
      }

    ]
  }

];


const worlds = [

  {
    id: "ocean",
    name: "Ocean World",
    icon: "🌊",
    desc: "A coastal city built around clean water and floating districts."
  },

  {
    id: "mountain",
    name: "Mountain World",
    icon: "🏔️",
    desc: "A high-altitude city connected by tunnels, rails and clean power."
  },

  {
    id: "desert",
    name: "Desert World",
    icon: "🏜️",
    desc: "A solar-powered city designed for heat and water efficiency."
  },

  {
    id: "forest",
    name: "Forest World",
    icon: "🌲",
    desc: "A city that grows around protected forests and wildlife."
  }

];


let state = {

  worlds: [
    null,
    null,
    null,
    null
  ],

  current: null

};


let currentCategory = null;


/* CREATE DEFAULT CITY */

function defaultCity(world) {

  return {

    world: world,

    name: world.name.replace(
      " World",
      ""
    ) + " City",

    stats: {

      h: 50,
      s: 50,
      t: 50,
      pop: 100,
      b: 100,
      p: 50

    },

    choices: {},

    reported: false

  };

}


/* LOAD */

function load() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(
          "futureCity2050"
        )
      );

    if (saved) {

      state = saved;

    }

  } catch (error) {

    console.log(
      "No saved game found."
    );

  }

}


/* SAVE */

function persist() {

  localStorage.setItem(
    "futureCity2050",
    JSON.stringify(state)
  );

}


/* LIMIT NUMBERS */

function clamp(
  number,
  min = 0,
  max = 100
) {

  return Math.max(
    min,
    Math.min(max, number)
  );

}


/* SHOW */

function show(id) {

  document
    .getElementById(id)
    .classList
    .remove("hidden");

}


/* HIDE */

function hide(id) {

  document
    .getElementById(id)
    .classList
    .add("hidden");

}


/* MESSAGE */

function toast(message) {

  const element =
    document.getElementById(
      "toast"
    );

  element.textContent = message;

  element.classList.add(
    "show"
  );

  setTimeout(() => {

    element.classList.remove(
      "show"
    );

  }, 2200);

}


/* WORLD RATING */

function rating(city) {

  const average =
    (
      city.stats.h +
      city.stats.s +
      city.stats.t +
      city.stats.b +
      (100 - city.stats.p)
    ) / 5;

  return Math.round(
    average
  );

}


/* RENDER MENU */

function renderMenuSlots() {

  const element =
    document.getElementById(
      "world-slots"
    );

  element.innerHTML = "";

  state.worlds.forEach(
    (city, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "secondary-btn";

      if (city) {

        button.textContent =
          `World ${index + 1} • ${city.name}`;

        button.onclick =
          () => startWorld(index);

      } else {

        button.textContent =
          `World ${index + 1} • EMPTY`;

        button.onclick =
          () => chooseWorldType(index);

      }

      element.appendChild(
        button
      );

    }
  );

}


/* RENDER WORLD MODAL */

function renderWorlds() {

  const element =
    document.getElementById(
      "modal-worlds"
    );

  element.innerHTML = "";

  state.worlds.forEach(
    (city, index) => {

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "world-card";

      if (city) {

        const world =
          worlds.find(
            w => w.id === city.world
          );

        card.innerHTML = `

          <div style="font-size:30px">
            ${world.icon}
          </div>

          <h3>
            World ${index + 1}:
            ${city.name}
          </h3>

          <p>
            ${Object.keys(
              city.choices
            ).length}/7 decisions
            • Rating
            ${rating(city)}
          </p>

          <button
            class="primary-btn"
          >
            CONTINUE
          </button>

        `;

        card
          .querySelector("button")
          .onclick =
          () => {

            hide(
              "world-modal"
            );

            startWorld(index);

          };

      } else {

        card.innerHTML = `

          <div style="font-size:30px">
            ＋
          </div>

          <h3>
            World ${index + 1}
          </h3>

          <p>
            Empty slot.
            Create a new future city.
          </p>

          <button
            class="secondary-btn"
          >
            CREATE WORLD
          </button>

        `;

        card
          .querySelector("button")
          .onclick =
          () =>
            chooseWorldType(
              index
            );

      }

      element.appendChild(
        card
      );

    }
  );

}


/* CHOOSE WORLD */

function chooseWorldType(slot) {

  const element =
    document.getElementById(
      "modal-worlds"
    );

  element.innerHTML = "";

  worlds.forEach(world => {

    const card =
      document.createElement(
        "div"
      );

    card.className =
      "world-card";

    card.innerHTML = `

      <div style="font-size:38px">
        ${world.icon}
      </div>

      <h3>
        ${world.name}
      </h3>

      <p>
        ${world.desc}
      </p>

      <button class="primary-btn">
        BUILD HERE
      </button>

    `;

    card
      .querySelector("button")
      .onclick = () => {

        state.worlds[slot] =
          defaultCity(world);

        persist();

        hide(
          "world-modal"
        );

        startWorld(slot);

      };

    element.appendChild(
      card
    );

  });

  show(
    "world-modal"
  );

}


/* START WORLD */

function startWorld(index) {

  state.current = index;

  persist();

  hide(
    "menu-screen"
  );

  show(
    "game-screen"
  );

  renderGame();

  window.scrollTo(
    0,
    0
  );

}


/* CURRENT CITY */

function current() {

  return state.worlds[
    state.current
  ];

}


/* RENDER GAME */

function renderGame() {

  const city = current();

  const world =
    worlds.find(
      w => w.id === city.world
    );


  document.getElementById(
    "city-title"
  ).textContent =
    city.name;


  document.getElementById(
    "world-label"
  ).textContent =
    `${world.icon} ${world.name.toUpperCase()} • WORLD ${state.current + 1}`;


  document.getElementById(
    "happiness"
  ).textContent =
    city.stats.h;


  document.getElementById(
    "sustainability"
  ).textContent =
    city.stats.s;


  document.getElementById(
    "technology"
  ).textContent =
    city.stats.t;


  document.getElementById(
    "population"
  ).textContent =
    city.stats.pop;


  document.getElementById(
    "budget"
  ).textContent =
    city.stats.b;


  document.getElementById(
    "pollution"
  ).textContent =
    city.stats.p;


  const count =
    Object.keys(
      city.choices
    ).length;


  document.getElementById(
    "decision-count"
  ).textContent =
    `${count} / 7 decisions`;


  document.getElementById(
    "decision-progress"
  ).style.width =
    `${count / 7 * 100}%`;


  const grid =
    document.getElementById(
      "category-grid"
    );

  grid.innerHTML = "";


  categories.forEach(
    category => {

      const choice =
        city.choices[
          category.id
        ];


      const card =
        document.createElement(
          "div"
        );

      card.className =
        "category-card" +
        (choice
          ? " chosen"
          : "");


      card.innerHTML = `

        <div class="icon">
          ${category.icon}
        </div>

        <h3>
          ${category.name}
        </h3>

        <p>
          ${category.desc}
        </p>

        <div class="selected">

          ${
            choice
              ? `✓ ${choice.name}`
              : "Click to choose"
          }

        </div>

      `;


      card.onclick =
        () =>
          openChoice(
            category
          );


      grid.appendChild(
        card
      );

    }
  );


  if (city.reported) {

    renderReport();

  } else {

    hide(
      "report-section"
    );

  }

}


/* OPEN CHOICE */

function openChoice(category) {

  currentCategory =
    category;


  document.getElementById(
    "choice-icon"
  ).textContent =
    category.icon;


  document.getElementById(
    "choice-category"
  ).textContent =
    category.name.toUpperCase();


  document.getElementById(
    "choice-title"
  ).textContent =
    "Choose your city plan";


  const box =
    document.getElementById(
      "choice-options"
    );

  box.innerHTML = "";


  category.options.forEach(
    option => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "option";


      button.innerHTML = `

        <div class="option-info">

          <b>
            ${option.name}
          </b>

          <span>
            ${option.desc}
          </span>

        </div>

        <div class="effects">
          ${option.e}
        </div>

      `;


      button.onclick =
        () =>
          selectChoice(
            category.id,
            option
          );


      box.appendChild(
        button
      );

    }
  );


  show(
    "choice-modal"
  );

}


/* SELECT CHOICE */

function selectChoice(
  id,
  option
) {

  const city =
    current();


  const old =
    city.choices[id];


  /* REMOVE OLD EFFECT */

  if (old) {

    city.stats.h -=
      old.v.h;

    city.stats.s -=
      old.v.s;

    city.stats.t -=
      old.v.t;

    city.stats.b -=
      old.v.b;

    city.stats.p -=
      old.v.p;

  }


  /* SAVE NEW */

  city.choices[id] =
    option;


  /* APPLY EFFECT */

  city.stats.h =
    clamp(
      city.stats.h +
      option.v.h
    );


  city.stats.s =
    clamp(
      city.stats.s +
      option.v.s
    );


  city.stats.t =
    clamp(
      city.stats.t +
      option.v.t
    );


  city.stats.b =
    clamp(
      city.stats.b +
      option.v.b
    );


  city.stats.p =
    clamp(
      city.stats.p +
      option.v.p
    );


  /* POPULATION */

  city.stats.pop =
    Math.max(
      50,

      Math.round(
        100 +

        (city.stats.h - 50) * 1.3 +

        (city.stats.t - 50) * 0.8 -

        (city.stats.p - 50) * 0.35
      )
    );


  city.reported =
    false;


  persist();


  hide(
    "choice-modal"
  );


  renderGame();


  toast(
    "Decision saved!"
  );

}


/* REPORT */

function renderReport() {

  const city =
    current();

  show(
    "report-section"
  );


  const score =
    rating(city);


  let grade;


  if (score >= 90) {

    grade = "S";

  } else if (score >= 80) {

    grade = "A";

  } else if (score >= 70) {

    grade = "B";

  } else if (score >= 60) {

    grade = "C";

  } else {

    grade = "D";

  }


  let text;


  if (score >= 85) {

    text =
      "Your city is ready to become a model for the future.";

  } else if (score >= 70) {

    text =
      "A strong future city with a good balance of people, technology and planet.";

  } else if (score >= 55) {

    text =
      "Your city works, but a few choices could make it more sustainable and happier.";

  } else {

    text =
      "Your city needs a redesign. Try balancing the environment, budget and citizen happiness.";

  }


  const world =
    worlds.find(
      w => w.id === city.world
    );


  document.getElementById(
    "report-title"
  ).textContent =
    city.name;


  document.getElementById(
    "report-summary"
  ).textContent =

    `In ${world.name}, your city has a population of ${city.stats.pop.toLocaleString()} and a future rating of ${score}/100. ${text}`;


  document.getElementById(
    "future-grade"
  ).textContent =
    grade;


  document.getElementById(
    "grade-text"
  ).textContent =
    text;


  document.getElementById(
    "report-list"
  ).innerHTML =

    categories.map(
      category => `

        <div class="report-item">

          <b>
            ${category.icon}
            ${category.name}
          </b>

          <br>

          ${
            city.choices[
              category.id
            ]?.name ||
            "No decision yet"
          }

        </div>

      `
    ).join("");

}


/* GENERATE REPORT */

function generateReport() {

  const city =
    current();


  if (
    Object.keys(
      city.choices
    ).length < 7
  ) {

    toast(
      "Make all 7 decisions first!"
    );

    return;

  }


  city.reported =
    true;


  persist();


  renderReport();


  document
    .getElementById(
      "report-section"
    )
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* RESTORE */

function restore() {

  const city =
    current();


  if (!city) {

    return;

  }


  const answer =
    confirm(
      "Restore this world to its original empty state?"
    );


  if (answer) {

    const world =
      worlds.find(
        w => w.id === city.world
      );


    state.worlds[
      state.current
    ] =
      defaultCity(world);


    persist();


    renderGame();


    toast(
      "World restored!"
    );

  }

}


/* EVENTS */


/* CREATE / SELECT */

document.getElementById(
  "new-world-btn"
).onclick = () => {

  renderWorlds();

  show(
    "world-modal"
  );

};


/* HOW TO PLAY */

document.getElementById(
  "how-btn"
).onclick = () => {

  document.getElementById(
    "info-eyebrow"
  ).textContent =
    "HOW TO PLAY";


  document.getElementById(
    "info-title"
  ).textContent =
    "Build your future";


  document.getElementById(
    "info-text"
  ).textContent =

    "Create up to 4 worlds. Choose a theme, then click each of the 7 categories. Your choices change Happiness, Sustainability, Technology, Population, Budget and Pollution. You can replace a choice at any time. Complete all 7 categories and generate your City Report. Your progress is automatically saved in your browser.";


  show(
    "info-modal"
  );

};


/* ABOUT */

document.getElementById(
  "about-btn"
).onclick = () => {

  document.getElementById(
    "info-eyebrow"
  ).textContent =
    "ABOUT";


  document.getElementById(
    "info-title"
  ).textContent =
    "Future City 2050";


  document.getElementById(
    "info-text"
  ).textContent =

    "Future City 2050 is a fictional strategy game where you design a city for the year 2050. Experiment with different worlds and decisions to see how your city changes.";


  show(
    "info-modal"
  );

};


/* MENU */

document.getElementById(
  "menu-btn"
).onclick = () => {

  hide(
    "game-screen"
  );

  show(
    "menu-screen"
  );

  renderMenuSlots();

  window.scrollTo(
    0,
    0
  );

};


/* RESTORE */

document.getElementById(
  "restore-btn"
).onclick =
  restore;


/* SAVE */

document.getElementById(
  "save-btn"
).onclick = () => {

  persist();

  toast(
    "World saved!"
  );

};


/* REPORT */

document.getElementById(
  "report-btn"
).onclick =
  generateReport;


/* CLOSE MODALS */

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(button => {

    button.onclick =
      () => {

        hide(
          button.dataset.close
        );

      };

  });


/* LOADING */

function init() {

  load();


  let progress = 0;


  const bar =
    document.getElementById(
      "loading-progress"
    );


  const timer =
    setInterval(() => {

      progress += 10;


      bar.style.width =
        progress + "%";


      if (
        progress >= 100
      ) {

        clearInterval(
          timer
        );


        setTimeout(() => {

          hide(
            "loading-screen"
          );

          show(
            "menu-screen"
          );

          renderMenuSlots();

        }, 300);

      }

    }, 100);

}


/* START GAME */

init();