// Function that will take a dom element using id, adding or removing the class "show" to the element when
// the mouse cursor hover over or out of the element
const mouseOver = () => {
	document.getElementById("services").classList.add("show");
};

const mouseOut = () => {
	document.getElementById("services").classList.remove("show");
};
