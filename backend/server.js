import express from "express";

const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Short Circuit",
      content:
        "I told my computer I needed a break, and it replied, 'You're not my type.'",
    },
    {
      id: 2,
      title: "Punctuation Matters",
      content:
        "Why did the comma break up with the full stop? It needed some space.",
    },
    {
      id: 3,
      title: "Invisible Man",
      content: "I used to be a baker because I kneaded dough.",
    },
    {
      id: 4,
      title: "Tea Time",
      content:
        "Why did the tea bag go to therapy? It had too many steep-seated issues.",
    },
    {
      id: 5,
      title: "Shoe Jokes",
      content: "I only know one shoe joke, but it's sole-ful.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
