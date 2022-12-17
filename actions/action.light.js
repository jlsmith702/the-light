Choicelab.Action("light", {
  render: function (action) {
    console.log(action);
    action.done();
    const container = document.querySelector("#lights-container");
    if (!container) {
      console.error(
        "Lights could not render because no #lights-container was found in template."
      );
      return;
    }
    // Create light element
    const lightEl = document.createElement("span");
    lightEl.setAttribute("id", action.actionId);
    lightEl.classList.add("light");
    container.appendChild(lightEl);
    const size = action.size ? action.size : "medium";
    lightEl.classList.add(size);
    const speed = action.speed ? action.speed : "fast";
    lightEl.classList.add(speed);
    // Loop
    const loop = action.loop ? action.loop : "false";
    if (loop === "true") {
      lightEl.classList.add("loop");
    }
    let styles = "";
    // Set coordinates
    const x = action.x ? action.x : 0;
    const y = action.y ? action.y : 0;
    styles += `
	bottom: ${y + "%"};
	left: ${x + "%"};
	`;
    // Set background color
    const color = action.color ? action.color : "white";
    styles += `
	background-color: ${color};
	`;
    // Set style tag
    const lightStyle = document.createElement("style");
    document.head.appendChild(lightStyle);
    lightStyle.innerHTML = `
	span#${action.actionId} {
		${styles}
	}
	`;
  },
});
