function solution(park, routes) {
    let current_row = 0;
    let current_col = 0;

    const park_height = park.length;
    const park_width = park[0].length;

    // 1️⃣ 시작 위치 찾기
    for (let i = 0; i < park_height; i++) {
        for (let j = 0; j < park_width; j++) {
            if (park[i][j] === "S") {
                current_row = i;
                current_col = j;
            }
        }
    }

    // 방향별 이동 정의
    const direction_map = {
        "N": [-1, 0],
        "S": [1, 0],
        "W": [0, -1],
        "E": [0, 1]
    };

    // 2️⃣ 명령 수행
    for (let i = 0; i < routes.length; i++) {
        const [direction, distance_str] = routes[i].split(" ");
        const distance = Number(distance_str);

        const [move_row, move_col] = direction_map[direction];

        let next_row = current_row;
        let next_col = current_col;
        let can_move = true;

        // 3️⃣ 이동 가능 여부 미리 검사
        for (let step = 0; step < distance; step++) {
            next_row += move_row;
            next_col += move_col;

            // 공원 벗어나는지 확인
            if (next_row < 0 || next_row >= park_height || next_col < 0 || next_col >= park_width) {
                can_move = false;
                break;
            }

            // 장애물 확인
            if (park[next_row][next_col] === "X") {
                can_move = false;
                break;
            }
        }

        // 4️⃣ 문제가 없을 때만 실제 이동
        if (can_move) {
            current_row = next_row;
            current_col = next_col;
        }
    }

    return [current_row, current_col];
}