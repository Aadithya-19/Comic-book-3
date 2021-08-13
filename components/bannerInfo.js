AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        superman: {
          banner_url: "./assets/posters/superman-banner.jpg",
          title: "Superman",
          released_year: "1983",
          description:
            "Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way. From his blue uniform to his flowing red cape to the 'S' shield on his chest, Superman is one of the most immediately recognizable and beloved DC Super Heroes of all time.",
        },
        spiderman: {
          banner_url: "./assets/posters/spiderman-banner.png",
          title: "Spiderman",
          released_year: "1962",
          description:
            "You know him and you love him, he is 'Spider-man, Spider-man, does whatever a Spider can. Spins a web any size,Catches thieves, just like flies. Look out! Here comes the Spiderman!'. Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
        },
        "captain-aero": {
          banner_url: "./assets/posters/captain-aero-banner.jpeg",
          title: "Captain Aero",
          released_year: "1942",
          description:
            "An aviator hero whose adventures began just as America was entering World War II. This issue features the debut of several first-generation superheroes, including the patriotic WWII aviator hero whose motto is 'Keep 'Em Flyin'!' A magical diamond from the Mines of King Solomon gives Solar mastery of magic, which he uses to fight crime and the Nazis. Diver Cap Stone stumbles on the underwater city of Aquari and battles the villainous Triton.",
        },
        "the-fourth-musketer": {
          banner_url: "./assets/posters/the-fourth-musketer-banner.png",
          title: "The Fourth Musketeer",
          released_year: "1942",
          description:
            "When Nazi Germany invaded France, the Fourth Musketeer rose from the dead as a ghost to fight for his nation. Realizing that a single ghost isn't powerful enough to defeat Hitler and his army, the Fourth Musketeer jumped on his horse and rode across the ocean to the United States where he hoped to convince the American government to come to his country's aide."
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });