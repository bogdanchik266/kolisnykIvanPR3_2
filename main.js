// Отримуємо посилання на кнопку
const $btn = document.getElementById('btn-kick');

// Об'єкти персонажів
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    
    renderHP: function() {
        this.renderHPlife();
        this.renderProgressbarHP();
    },

    renderHPlife: function() {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    },

    renderProgressbarHP: function() {
        const hpPercentage = (this.damageHP * 100 / this.defaultHP);
        this.elProgressbar.style.width = hpPercentage + '%';

        // Зміна кольору прогресбару в залежності від рівня HP
        if (hpPercentage > 50) {
            this.elProgressbar.style.backgroundColor = 'green';
        } else if (hpPercentage > 20) {
            this.elProgressbar.style.backgroundColor = 'yellow';
        } else {
            this.elProgressbar.style.backgroundColor = 'red';
        }
    },

    changeHP: function(count) {
        this.damageHP -= count;
        if (this.damageHP < 0) {
            this.damageHP = 0;
        }
        this.renderHP();
    }
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),

    renderHP: function() {
        this.renderHPlife();
        this.renderProgressbarHP();
    },

    renderHPlife: function() {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    },

    renderProgressbarHP: function() {
        const hpPercentage = (this.damageHP * 100 / this.defaultHP);
        this.elProgressbar.style.width = hpPercentage + '%';

        if (hpPercentage > 50) {
            this.elProgressbar.style.backgroundColor = 'green';
        } else if (hpPercentage > 20) {
            this.elProgressbar.style.backgroundColor = 'yellow';
        } else {
            this.elProgressbar.style.backgroundColor = 'red';
        }
    },

    changeHP: function(count) {
        this.damageHP -= count;
        if (this.damageHP < 0) {
            this.damageHP = 0;
        }
        this.renderHP();
    }
};

// Ініціалізація гри
function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

// Генератор випадкових чисел
function random(num) {
    return Math.ceil(Math.random() * num);
}

// Додаємо слухач подій на кнопку
$btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    checkWinner();
});

// Перевірка перемоги або поразки
function checkWinner() {
    if (character.damageHP === 0) {
        alert(enemy.name + ' wins!');
        $btn.disabled = true;
    } else if (enemy.damageHP === 0) {
        alert(character.name + ' wins!');
        $btn.disabled = true;
    }
}

// Запуск гри
init();
