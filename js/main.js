const form = document.getElementById("animalForm");
const tableBody = document.getElementById("animalTableBody");

form.addEventListener("submit", e => {
    e.preventDefault();

    // Validera formuläret
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    // Om formuläret är giltigt, hämta värden och lägg till i tabellen
    const animal = document.getElementById("animal").value;
    const power = document.getElementById("power").value;
    const favfood = document.getElementById("favfood").value;
    const hometurf = document.getElementById("hometurf").value;

    tableBody.innerHTML += `
        <tr>
            <td>${animal}</td>
            <td>${power}</td>
            <td>${favfood}</td>
            <td>${hometurf}</td>
        </tr>
    `;

    // Återställ formuläret och ta bort valideringseffekter
    form.reset();
    form.classList.remove('was-validated');
});