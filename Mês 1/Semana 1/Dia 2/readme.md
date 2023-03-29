## Procurando Nemo

Recebe uma sequência de palavras e precisa encontrar a palavra "Nemo" e retornar uma string como esta: `I found Nemo at [the order of the word you find nemo]!`.

Se você não conseguir encontrar o Nemo, retorne `I can't find Nemo :(`.

#### Exemplos

```texto
findNemo("Estou encontrando o Nemo !") ➞ "Encontrei o Nemo às 4!"
findNemo("Nemo sou eu") ➞ "Encontrei Nemo em 1!"
findNemo("Eu sou o Nemo") ➞ "Encontrei o Nemo às 2!"
```

---

### Notas

- `! , ? .` são sempre separados da última palavra.
- Se houver vários Nemo's na frase, retorne apenas para o primeiro.