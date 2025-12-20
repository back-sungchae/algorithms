function solution(video_len, pos, op_start, op_end, commands) {
    for (let i = 0; i < commands.length; i++) {
        let excute_command = commands[i];

        // 🔹 오프닝 건너뛰기
        if (trans_sec(pos) >= trans_sec(op_start) && trans_sec(pos) <= trans_sec(op_end)) {
            pos = op_end;
        }

        if (excute_command == "prev" || excute_command == "next") {
            pos = calculation_time(video_len, pos, excute_command);
        }
    }
     if (trans_sec(pos) >= trans_sec(op_start) && trans_sec(pos) <= trans_sec(op_end)) {
            pos = op_end;
    }
    return pos;
}

function calculation_time(video_len, time, command) {
    let hour = Number(time.split(":")[0]);
    let min = Number(time.split(":")[1]);

    let max_hour = Number(video_len.split(":")[0]);
    let max_min = Number(video_len.split(":")[1]);

    let current = hour * 60 + min;
    let max_time = max_hour * 60 + max_min;

    if (command == "prev") {
        current = Math.max(0, current - 10);
    } else {
        current = Math.min(max_time, current + 10);
    }

    let new_hour = Math.floor(current / 60);
    let new_min = current % 60;

    return `${String(new_hour).padStart(2, '0')}:${String(new_min).padStart(2, '0')}`;
}

function trans_sec(time) {
    let t = time.split(":");
    return Number(t[0]) * 60 + Number(t[1]);
}