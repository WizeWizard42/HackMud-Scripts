function() // t:#s.target.loc, r:false, d:"po"
{
    // c = context
    // a = arguments

    // d.h = Help Message
    // d.uP = Message Sent When 'undefined' is Found in State

    // d.u = Unlock Commands
    // d.p = Prime Numbers
    // d.c = c00x Colors
    // d.k = l0cket Keys
    // d.d = DATA_CHECK Answer Key

	let d = #db.f({ _id: 'consts' }).first() // Constants from database
    
    if (!a || !a.t) // If script is passed empty or with no target, return help message
    {
        return d.h
    }
    
    let dk = { type: 'breach', t: a.t.name }, // Stored Target State, If Any
    ds = { // Default Script State, Used to Create Params
        ez: {}, // Stored EZ_XX Param Indexes
        c00x: {}, // Stored c00x Param Indexes
        dc: '', // DATA_CHECK Answer
        k: 0, // l0cket Key Index
        d: 0, // Stored Digit
        p: 0, // Prime Number Index
        c: 0 // Total Calls By Script
        // l -> Current/Saved Lock
    },
    s, // Script State, Used to Create Params
    p, // Call Parameters
	o, // Call Output
	cap, // Captured Regex
    pO = o => // Prints JSON object, including 'undefined' and 'NaN'
        JSON.stringify(o, {}, (k, v) =>
            v === undefined || (typeof v == 'number' && isNaN(v)) ? `!${v}!` : v
        )
    ,
    T = (r, p = o) => // Shorthand for r.test(p)
        r.test(p)
    ,
    E = (r, p = o) => // Ditto, but with capture groups
        r.exec(p)

    if (a.r) // If r: true, use default state
    {
        s = ds
    }
    else // Else use saved state if any
    {
        s = #db.f(dk).first()
        if (!s)
        {
            s = ds
        }
    }

	while (_END - new Date() > 1000) // While the script has at least 1 second of runtime left
	{
        p = { // Initialize Params from state
            digit: s.d,
            ez_prime: d.p[s.p],
            l0cket: d.k[s.k],
            DATA_CHECK: s.dc
        }

        for (let l in s.ez) // Initialize EZ Params
        {
            p[l] = d.u[s.ez[l]]
        }

        for (let l in s.c00x) // Initialize c00x Params
        {
            p[l] = d.c[s.c00x[l]]

            switch (l)
            {
                case 'c001':
                    p.color_digit = p[l].length
                    break
                case 'c002':
                    p.c002_complement = d.c[(s.c00x[l]+4)%8]
                    break
                case 'c003':
                    p.c003_triad_1 = d.c[(s.c00x[l]+5)%8]
                    p.c003_triad_2 = d.c[(s.c00x[l]+3)%8]
                    break
            }
        }

        Object.assign(p, a.p) // Override Params with p Params, if any

        if (Object.values(p).some(v => v === undefined))
            return {ok:false, msg:d.uP} // If 'undefined' is in state, returns message

		o = a.t.call(p)
        s.c++

        if (a.d) // If 'd' parameter given, prints debug output based on switches
        {
            #D(`\`Y--Attempt #${s.c}--\``)

            if (T(/t/, a.d)) #D(`\`YTime\`   ${+new Date()} (T+${new Date() - _START})`)
            if (T(/s/, a.d)) #D(`\`YState\`  ${pO(s)}`)
            if (T(/p/, a.d)) #D(`\`YParams\` ${pO(p)}`)
            if (T(/o/, a.d)) #D(o)
            #D('')
        }

		if (cap = E(/`N(EZ_..)`/))
		{
			s.l = cap[1]
			s.ez[s.l] = 0
		}

        else if (cap = E(/`N(c00.)`/))
		{
			s.l = cap[1]
			s.c00x[s.l] = 0
		}

        else if (T(/\+/))
            s.dc = o.split('\n').map(o=>o.replace(/\./, '')).map(o=>d.d[o]).join('')
            
    	else if (T(/command/))
            s.ez[s.l]++

        else if (T(/color/))
            s.c00x[s.l]++

		else if (T(/digit/))
            s.d++

		else if (T(/prime/))
            s.p++

        else if (T(/k3y/))
            s.k++

		else // Save state and return last output
		{
            #db.us(dk, { $set: s })
			return o
		}
	}
  	
    #db.us(dk, { $set: s }) // If timeout, instruct to run again and print last output
    return `\`Y${_END - new Date()} ms remaining. Run again.\`
\`YCalls:\` \`Y${s.c}\`
\`YLast output:\`
${o}`
}
