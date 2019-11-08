const express = require('express');
const app = express ();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Array de Pessoas
let listaDePessoas = [
    {
        'nome': 'Bryan',
        'idade': 24,
        'sexo': 'm',
        'renda': 1400
    },
    {
        'nome': 'Guilherme',
        'idade': 29,
        'sexo': 'm',
        'renda': 100000
    },
    {
        'nome': 'Gabriel',
        'idade': 21,
        'sexo': 'm',
        'renda': 400
    },
    {
        'nome': 'Carla',
        'idade': 45,
        'sexo': 'f',
        'renda': 4000
    }
]

//Functions
//SAVE USER
const saveUser = (user) => {

    listaDePessoas.push(user);

}

//EDIT USER
const editUser = (user) => {

    listaDePessoas.forEach(element => {

        if (element.nome != user.nome && element.idade == user.idade && element.sexo == user.sexo && element.renda == user.renda ) {

            element.nome = user.nome;
            console.log("Nome modificado");

        }

        else if (element.nome == user.nome && element.idade != user.idade && element.sexo == user.sexo && element.renda == user.renda ) {

            element.idade = user.idade;
            console.log("Idade modificada");

        }

        else if (element.nome == user.nome && element.idade == user.idade && element.sexo != user.sexo && element.renda == user.renda ) {

            element.sexo = user.sexo;
            console.log("Sexo modificado");

        }

        else if (element.nome == user.nome && element.idade == user.idade && element.sexo == user.sexo && element.renda != user.renda ) {

            element.renda = user.renda;
            console.log("Renda modificada");

        }

    });

}

//DELETE USER -  BY NAME AS PARAMETER
const deleteUser = (userName) => {

    for (i = 0; i < listaDePessoas.length; i++) {

        if (listaDePessoas[i].nome == userName) {

            listaDePessoas.splice(listaDePessoas[i], 1);

        }

    }

}

//Routes

app.listen(3000, function () {

    console.log('server is running on port 3000');

});

app.get('/', (req, res) => {

    res.send(console.log(listaDePessoas));

});

app.get('/show', (req, res) => {

    res.send(console.log("Lista de Usuários Cadastrados: " + listaDePessoas));

});

//SAVE NEW USER
app.post('/', (req, res) => {

    newUser = req.body;
    saveUser(newUser);
    res.send(console.log(listaDePessoas));
    res.send(console.log("Você salvou o usuário com sucesso!"));

});

//UPDATE USER
app.post('/edit', (req, res) => {

    editUser(req.body);
    res.send(console.log(listaDePessoas));
    res.send(console.log("Você alterou o usuário com sucesso!"));

});

//DELETE USER
app.post('/delete', (req, res) => {

    deleteUser(req.body.nome);
    res.send(console.log(listaDePessoas));
    res.send(console.log("Você removeu um usuário."));

});

