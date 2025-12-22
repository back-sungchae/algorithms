function solution(players, callings) {
    const player_idx = {};

    // 이름 → 현재 등수(index) 저장
    for (let i = 0; i < players.length; i++) {
        player_idx[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const name = callings[i];
        const idx = player_idx[name];

        const front_player = players[idx - 1];

        players[idx - 1] = name;
        players[idx] = front_player;

        player_idx[name] = idx - 1;
        player_idx[front_player] = idx;
    }

    return players;
}