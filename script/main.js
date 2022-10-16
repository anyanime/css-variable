//select the input tags
const inputs = document.querySelectorAll('.control input');

//declare function to update css
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style. setProperty(`--${this.name}`, this.value + suffix);
}

//add event listener to input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));