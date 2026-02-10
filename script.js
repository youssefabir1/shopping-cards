

function plus(icon) {
    const quantity = icon.nextElementSibling;
    const quantityValue = parseInt(quantity.textContent) || 0;
    quantity.textContent = quantityValue + 1;
}

function minus(icon) {
        const quantity = icon.previousElementSibling;
    if (parseInt(quantity.textContent) > 0) {
         const quantityValue = parseInt(quantity.textContent) || 0;
         quantity.textContent = quantityValue - 1;
    }
}

function trash(icon) {    
    if (icon.classList.contains("fa-trash-alt")) {
        icon.parentElement.parentElement.parentElement.parentElement.remove();
    }
}

function heart(icon) {
    if(icon.classList.contains('fa-heart-alt')) {
        icon.classList.toggle("liked");
    }
}   
    


