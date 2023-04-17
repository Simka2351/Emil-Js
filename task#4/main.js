function showMessage() {
    let quests = prompt("Введите количество гостей: ")

if (quests > 0 && quests <= 2) {
    alert('Вы можете присесть за малый столик')
}
    else if (quests > 2 && quests <= 4) {
        alert('Вы можете присесть за средний столик')
    }

    else if (quests > 4 && quests <= 8) {
        alert('Вы можете присесть за большой стол')
    }

    else {
        alert ('К сожалению у нас нет мест для столь большой компании')
    }
}
showMessage();
