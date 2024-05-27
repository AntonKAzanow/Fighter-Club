javascriptclass Fighter {
    constructor(name, health, armor, damage) {
        this.name = name;
        this.health = health;
        this.armor = armor;
        this.damage = damage;
    }

    ShowStats() {
        console.log(Name: ${this.name});
        console.log(Health: ${this.health});
        console.log(Armor: ${this.armor});
        console.log(Damage: ${this.damage});
    }

    ShowCurrentHealth() {
        console.log(${this.name}'s current health: ${this.health});
    }

    TakeDamage(damage) {
        let reducedDamage = damage * ((1 - this.armor * 0.015) > 0.5 ? 0.5 : (1 - this.armor * 0.015));
        this.health -= Math.round(this.health - reducedDamage);
        this.armor -= Math.round(this.armor * 0.03);
    }

    StartFight(opponent) {
        while (this.health > 0 && opponent.health > 0) {
            opponent.TakeDamage(this.damage);
            console.log(${this.name} attacks ${opponent.name});
            opponent.ShowCurrentHealth();

            if (opponent.health <= 0) {
                console.log(${this.name} wins!);
                break;
            }

            this.TakeDamage(opponent.damage);
            console.log(${opponent.name} attacks ${this.name});
            this.ShowCurrentHealth();

            if (this.health <= 0) {
                console.log(${opponent.name} wins!);
                break;
            }
        }
    }
}

// Создаем двух бойцов
let fighter1 = new Fighter("Fighter1", 100, 50, 20);
let fighter2 = new Fighter("Fighter2", 120, 40, 15);

fighter1.ShowStats();
fighter2.ShowStats();

fighter1.StartFight(fighter2);
javascriptclass Fighter {
    constructor(name, strength, agility) {
        this.name = name;
        this.strength = strength;
        this.agility = agility;
        this.health = strength * 5;
        this.damage = agility * 3;
    }

    attack() {
        return this.damage;
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

const fighters = [];

for (let i = 1; i <= 6; i++) {
    const fighter = new Fighter(Fighter ${i}, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
    fighters.push(fighter);
}

console.log("Список бойцов:");
fighters.forEach((fighter, index) => {
    console.log(Боец ${index + 1}: ${fighter.name}, Сила: ${fighter.strength}, Ловкость: ${fighter.agility}, Здоровье: ${fighter.health});
});

const fighter1Index = parseInt(prompt("Выберите первого бойца (введите номер)")) - 1;
const fighter2Index = parseInt(prompt("Выберите второго бойца (введите номер)")) - 1;

const fighter1 = fighters[fighter1Index];
const fighter2 = fighters[fighter2Index];

while (fighter1.health > 0 && fighter2.health > 0) {
    const damage1 = fighter1.attack();
    const damage2 = fighter2.attack();

    fighter2.takeDamage(damage1);
    fighter1.takeDamage(damage2);

    console.log(${fighter1.name} атакует ${fighter2.name} и наносит ${damage1} урона);
    console.log(${fighter2.name} атакует ${fighter1.name} и наносит ${damage2} урона);
    console.log(${fighter1.name} Здоровье: ${fighter1.health});
    console.log(${fighter2.name} Здоровье: ${fighter2.health});
}

if (fighter1.health <= 0 && fighter2.health <= 0) {
    console.log("Ничья!");
} else if (fighter1.health > fighter2.health) {
    console.log(${fighter1.name} побеждает!);
} else {
    console.log(${fighter2.name} побеждает!);
}
constructor(name, health, damage, armor, agility, cunning) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.armor = armor;
    this.agility = agility;
    this.cunning = cunning;
  }
}

class BattleInterface {
  constructor() {
    this.fighters = [];
  }

  displayFighterList() {
    this.fighters.forEach((fighter, index) => {
      console.log(${index + 1}. ${fighter.name});
    });
  }

  chooseFighters(index1, index2) {
    const fighter1 = this.fighters[index1];
    const fighter2 = this.fighters[index2];
    console.log(You have chosen ${fighter1.name} and ${fighter2.name} for battle.);
  }

  monitorBattle() {
    console.log("Battle monitoring is in progress...");
  }

  registerFighter(name, health, damage, armor, agility, cunning) {
    const newFighter = new Fighter(name, health, damage, armor, agility, cunning);
    this.fighters.push(newFighter);
    console.log(${name} has been registered as a fighter.);
  }

  viewAllFighters() {
    console.log("All registered fighters:");
    this.fighters.forEach((fighter, index) => {
      console.log(${index + 1}. Name: ${fighter.name}, Health: ${fighter.health}, Damage: ${fighter.damage}, Armor: ${fighter.armor}, Agility: ${fighter.agility}, Cunning: ${fighter.cunning});
    });
  }

  checkBalance() {
    if (this.fighters.length < 2) {
      console.log("Need at least 2 fighters to check for balance.");
      return;
    }

    const fighter1 = this.fighters[0];
    const fighter2 = this.fighters[1];

    const fighter1WinProbability = (fighter1.damage * fighter1.agility * fighter1.cunning) / (fighter2.armor * fighter2.agility * fighter2.cunning);
    const fighter2WinProbability = (fighter2.damage * fighter2.agility * fighter2.cunning) / (fighter1.armor * fighter1.agility * fighter1.cunning);

    if (fighter1WinProbability > fighter2WinProbability) {
      console.log(${fighter1.name} is more likely to win against ${fighter2.name}.);
    } else {
      console.log(${fighter2.name} is more likely to win against ${fighter1.name}.);
    }
  }
}

const battleInterface = new BattleInterface();

battleInterface.registerFighter("Fighter 1", 100, 20, 5, 0.8, 3);
battleInterface.registerFighter("Fighter 2", 120, 18, 6, 0.7, 4);

battleInterface.viewAllFighters();
battleInterface.checkBalance();