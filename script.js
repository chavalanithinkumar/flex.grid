
const direction = document.getElementById("direction");
const justify = document.getElementById("justify");
const flexDemo = document.getElementById("flexDemo");

direction.addEventListener("change", () => {
    flexDemo.style.flexDirection = direction.value;
});

justify.addEventListener("change", () => {
    flexDemo.style.justifyContent = justify.value;
});

const columns = document.getElementById("columns");
const gap = document.getElementById("gap");
const gridDemo = document.getElementById("gridDemo");

columns.addEventListener("input", () => {
    gridDemo.style.gridTemplateColumns =
        `repeat(${columns.value}, 1fr)`;
});

gap.addEventListener("input", () => {
    gridDemo.style.gap = `${gap.value}px`;
});

