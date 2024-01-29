const football = {
  players: [
    [("sam", "ali", "hasan", "zahra", "sara", "mary")],
    [("dam", "asghar", "akbar", "sosan", "pary", "ftmeh")],
  ],
  ages: 1198,
  educatuin: "school",
};

const [players1, players2] = football.players;
console.log(players1, players2);
console.log(football);

const [al, ...fieldPlayers] = players1;
console.log(al, fieldPlayers);
