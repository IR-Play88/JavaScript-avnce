window.onload = function() {
    const textoElement = document.getElementById('texto');
    const itext = document.getElementById('itext');
    const icolor = document.getElementById('icolor');
    const itamano = document.getElementById('itamano');
    const bgColor = document.getElementById('bgColor');
    const fonts = document.querySelectorAll('.font');
    const borderOptions = document.getElementsByName('borderColor');

    // Event listeners
    itext.addEventListener('input', updateText);
    icolor.addEventListener('change', updateColor);
    itamano.addEventListener('input', updateSize);
    bgColor.addEventListener('input', updateBgColor);
    document.getElementById('inegrita').addEventListener('change', toggleBold);
    document.getElementById('icursiva').addEventListener('change', toggleItalic);
    document.getElementById('isubrayado').addEventListener('change', toggleUnderline);
    fonts.forEach(fontButton => fontButton.addEventListener('click', changeFont));
    borderOptions.forEach(option => option.addEventListener('change', updateBorder));

    function updateText() {
        textoElement.textContent = itext.value || "Hola JavaScript";
    }

    function updateColor() {
        textoElement.style.color = icolor.value;
    }

    function updateSize() {
        textoElement.style.fontSize = `${itamano.value}em`;
    }

    function updateBgColor() {
        textoElement.style.backgroundColor = bgColor.value;
    }

    function toggleBold() {
        textoElement.style.fontWeight = this.checked ? 'bold' : 'normal';
    }

    function toggleItalic() {
        textoElement.style.fontStyle = this.checked ? 'italic' : 'normal';
    }

    function toggleUnderline() {
        textoElement.style.textDecoration = this.checked ? 'underline' : 'none';
    }

    function changeFont(event) {
        textoElement.style.fontFamily = event.target.getAttribute('data-font');
    }

    function updateBorder() {
        const selectedBorder = document.querySelector('input[name="borderColor"]:checked').value;
        textoElement.style.borderColor = selectedBorder;
    }
};
