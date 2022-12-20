/*
 `light` action
 
 EXAMPLE:
 [light color="#2f2f52" size="small" speed="slow" x="65" y="30"]
 
 PARAMS:
 * color: A CSS hex (e.g. `#2f2f52`) or name (`blue`)
 * size: `small`, `medium`, or `large`
 * speed: `slow` or `fast`
 * x: How far left the light should be onscreen, any number
 * y: How far up the light should be onscreen, any number
 */

Choicelab.Action("light", {
  render: function (action) {
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
    const speed = action.speed ? action.speed : "normal";
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
