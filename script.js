
document.getElementById('pago').addEventListener('change', function () {
    const tarjetaCampos = document.getElementById('tarjetaCampos');
    if (this.value === 'tarjeta') {
        tarjetaCampos.style.display = 'block';
    } else {
        tarjetaCampos.style.display = 'none';
    }
});
