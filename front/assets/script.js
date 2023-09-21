// Aqui você pode ter uma lista de citações e seus autores.
const quotes = [
    {text: "Carregue somente o que te traz alegria.", author: "Autor Desconhecido"},
    {text: "O verão é uma pequena vida.", author: "Anton Chekhov"},
    // ... adicione outras citações conforme desejar
];

// Gera um número aleatório para pegar uma citação do array
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = document.getElementById("quote");
const author = document.getElementById("author");

quote.textContent = `"${quotes[randomIndex].text}"`;
author.textContent = `- ${quotes[randomIndex].author}`;