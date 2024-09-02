// Funktion zum Hinzufügen eines Menüs
const addMeal = () => {
    const mealName = document.getElementById('mealName').value;
    const calories = parseInt(document.getElementById('calories').value);

    if (!mealName || !calories) {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    const newMeal = { mealName, calories };
    updateTable(newMeal);
    updateTotalCalories(calories);

    // Felder zurücksetzen
    clearInputs();
};

// Funktion zum Aktualisieren der Tabelle
const updateTable = (meal) => {
    const tableBody = document.getElementById('mealsTableBody');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${meal.mealName}</td>
        <td>${meal.calories}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteMeal(this, ${meal.calories})">Löschen</button></td>
    `;

    tableBody.appendChild(newRow);
};

// Funktion zum Aktualisieren der Gesamtkalorien
const updateTotalCalories = (calories) => {
    const currentTotal = parseInt(document.getElementById('totalCalories').textContent);
    const newTotal = currentTotal + calories;
    document.getElementById('totalCalories').textContent = newTotal;
};

// Funktion zum Löschen eines Menüs
const deleteMeal = (button, calories) => {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    updateTotalCalories(-calories);
};

// Funktion zum Zurücksetzen der Eingabefelder
const clearInputs = () => {
    document.getElementById('mealName').value = '';
    document.getElementById('calories').value = '';
};
