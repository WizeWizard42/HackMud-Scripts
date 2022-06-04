function(c, a) // s: "string", d: digit
{
    if (!c || !a) return {ok: false}

    let count = 0

    for (let char of a.s)
        if (char == a.d)
            count++

    return count
}