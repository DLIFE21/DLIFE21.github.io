document.addEventListener("DOMContentLoaded", () => {
  const metodoPago = document.getElementById("metodoPago");
  const tarjetaCampos = document.getElementById("tarjetaCampos");
  const resumen = document.getElementById("total");
  const cantidadInput = document.querySelector("input[name='cantidad']");
  const form = document.getElementById("orderForm");
  const modal = document.getElementById("modalGracias");

  const precioPorUnidad = 200;

  metodoPago.addEventListener("change", () => {
    if (metodoPago.value === "tarjeta") {
      tarjetaCampos.classList.remove("hidden");
    } else {
      tarjetaCampos.classList.add("hidden");
    }
  });

  cantidadInput.addEventListener("input", () => {
    const cantidad = parseInt(cantidadInput.value) || 0;
    resumen.textContent = `RD$${cantidad * precioPorUnidad}`;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.add("hidden"), 3000);
    form.reset();
    resumen.textContent = "RD$0";
    tarjetaCampos.classList.add("hidden");
  });
});
