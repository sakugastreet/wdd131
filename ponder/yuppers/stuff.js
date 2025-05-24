const all_da_gays = [
{ last: 'Aultz',
first: 'Aaron'
},
{ last: 'Banda',
first: 'Tamanda'
},
{ last: 'Bangerter',
first: 'Ryland'
},
{ last: 'Boss',
first: 'Seth'
},
{ last: 'Castro',
first: 'Daniel'
},
{ last: 'Christensen',
first: 'Connor'
},
{ last: 'Cockrum',
first: 'Mason'
},
{ last: 'Crisp',
first: 'Patrick'
},
{ last: 'Earl',
first: 'John'
},
{ last: 'Earl',
first: 'Joseph'
},
{ last: 'Earl',
first: 'Micah'
},
{ last: 'Giard',
first: 'Will'
},
{ last: 'Hansen',
first: 'Justin'
},
{ last: 'Harris',
first: 'Cole'
},
{ last: 'Harris',
first: 'William'
},
{ last: 'Henrie',
first: 'Jacob'
},
{ last: 'Jenne',
first: 'Samantha'
},
{ last: 'Lamer',
first: 'Kian'
},
{ last: 'Lee',
first: 'Ryan'
},
{ last: 'Madson',
first: 'Isaac'
},
{ last: 'Merrell',
first: 'Noah'
},
{ last: 'Miller',
first: 'Raquel'
},
{ last: 'Moncada',
first: 'Joshua'
},
{ last: 'Montoya Ugarte',
first: 'Alan'
},
{ last: 'Nielson',
first: 'Jesse'
},
{ last: 'Palmer',
first: 'Benjamin'
},
{ last: 'Platt',
first: 'Jaeden'
},
{ last: 'Quizon',
first: 'MJ'
},
{ last: 'Schmitz',
first: 'Emma'
},
{ last: 'Sheffer',
first: 'Darren'
},
{ last: 'Skousen',
first: 'Brian'
},
{ last: 'Smith',
first: 'Emory'
},
{ last: 'Kasapo',
first: 'Tyra'
},
{ last: 'Taylor',
first: 'Austin'
},
{ last: 'Tunquist',
first: 'Thomas'
},
{ last: 'Ukpong',
first: 'Robin'
},
{ last: 'Volmer',
first: 'Zachery'
},
{ last: 'Wicks',
first: 'Andrew'
},
{ last: 'Williams',
first: 'Eton'
},
{ last: 'Yasa',
first: 'Manny'
}];

const namebox = document.body.querySelector("h2.name");

const set_gay = function(id) {
    const person = all_da_gays[id];
    namebox.innerHTML = `${person.first} ${person.last}`;
};

const button = document.body.querySelector("button")

button.addEventListener("click", set_gay(namebox.textContent))