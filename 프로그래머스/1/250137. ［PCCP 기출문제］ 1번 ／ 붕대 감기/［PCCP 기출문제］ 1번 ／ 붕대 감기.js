function solution(bandage, health, attacks) {
    let last_time = attacks[attacks.length - 1][0];

    let health_suc = true;
    let health_count = 0;
    let cur_health = health;

    let attack_idx = 0;

    for (let i = 1; i <= last_time; i++) {

        // 공격 시간인지 확인
        if (
            attack_idx < attacks.length &&
            attacks[attack_idx][0] === i
        ) {
            cur_health -= attacks[attack_idx][1];
            attack_idx++;
            health_count = 0;

            if (cur_health <= 0) {
                return -1;
            }
        } else {
            // 회복
            health_count++;
            cur_health += bandage[1];

            // 연속 성공 보너스
            if (health_count === bandage[0]) {
                cur_health += bandage[2];
                health_count = 0;
            }

            // 최대 체력 제한
            if (cur_health > health) {
                cur_health = health;
            }
        }
    }

    return cur_health;
}