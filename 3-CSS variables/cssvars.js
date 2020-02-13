const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log("suffix: " + suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
