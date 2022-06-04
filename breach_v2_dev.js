function(c, a) // t:#s.target.loc, r:true, d:"po"
{
    // c = context
    // a = arguments

    // d.h = Help Message
    // d.uP = Message Sent When 'undefined' is Found in State

    // d.u = Unlock Commands
    // d.p = Prime Numbers
    // d.c = c00x Colors
    // d.k = l0cket Keys
    // d.az = Alphabet as Array
    // d.sn = sn_w_glock Dictionary

    // dc = DATA_CHECK Dictionary

	let d = #db.f({ _id: 'consts' }).first(), // Constants from database
    dc = #db.f({ _id: 'DATA_CHECK' }).first() // DATA_CHECK Dictionary
    
    if (!a || !a.t) // If script is passed empty or with no target, return help message
    {
        return d.h
    }
    
    let dk = { type: 'breach', t: a.t.name }, // Stored Target State, If Any
    ds = { // Default Script State, Used to Create Params
        dc: '', // DATA_CHECK Answer
        a: [], // All acct_nt Answers
        v: 0, // Current acct_nt 'value'
        m: [], // All magnara Answers
        w: 0, // Current magnara 'word'
        cs: '', // Current CON_SPEC Answer
        c: 0 // Total Calls By Script
        // l -> Current/Saved Lock
    },
    s, // Script State, Used to Create Params
    p, // Call Parameters
	o, // Call Output
	cap, // Captured Regex
    cs = { call: _ => #fs.wizewizard.con_spec(_) }, // CON_SPEC Wolf "Scriptor"
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

    // Don't want to lose my GC to sn_w_glock!
    #ms.nametaken42.bot_scam({ d:true })

    // Unload all k3ys before attacking
    for (let k3y of #hs.sys.upgrades({ filter:{ loaded: true, type: "tool" } }))
        #ms.sys.manage({ unload: k3y.i })

	while (_END - new Date() > 500) // While the script has at least 500 ms of runtime left
	{
        p = { // Initialize Params from state
            DATA_CHECK: s.dc,
            acct_nt: s.a[s.v] || '',
            magnara: s.m[s.w] || '',
            CON_SPEC: s.cs,
            sn_w_glock: ''
        }

        // Initialize Needed Params Here


        Object.assign(p, a.p) // Override Params with p Params, if any

        if (Object.values(p).some(v => v === undefined || (typeof v == 'number' && isNaN(v))))
            return {ok:false, msg:d.uP} // If 'undefined' or 'NaN' is in state, returns message

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

		// Insert lock cases here

        if (T(/\+/)) // DATA_CHECK
            s.dc = o.split('\n').map(o=>o.replace(/\./, '')).map(o=>dc[o]).join('') // Split input into lines, strip '.', query from db and join answers

        if (T(/memos/) || T(/deposit/) || T(/withdraw/) || T(/net GC/)) // acct_nt
        {
            if (s.a[s.v]) s.v++
            else s.a = #hs.matr1x.acct_nt({in: o}) // TODO: implement acct_nt solver myself
        }

        if (T(/magnara/)) // magnara
        {
            if (s.m[s.w]) s.w++
            else s.m = #fs.ast.magnara_solver({scramble: o.split(': ')[1]}) // TODO: implement magnara_solver myself
        }

        if (cap = E(/k3y: ([a-z0-9]+)/)) // l0ckbox
        {
            let k3y = #hs.sys.upgrades({ filter: { k3y: cap[1] } })
            if (!k3y[0])
            {
                #db.us(dk, { $set: s })
			    return o
            }
            #ms.sys.manage({ load: k3y[0].i })
        }

        if (T(/next three letters/)) // CON_SPEC Weaver
        {
			let sq = E(/\w{3}(?=\n)/)[0].split('').map(x=>d.az.indexOf(x)),
			nr = [sq[2]-sq[1],sq[1]-sq[0]]
			s.cs =
			d.az[sq[2]+nr[1]] +
			d.az[sq[2]+nr[1]+nr[0]] +
			d.az[sq[2]+nr[1]*2+nr[0]]
        }

        if (T(/digits/)) // CON_SPEC Not Weaver
            s.cs = cs

        if (T(/balance/)) // sn_w_glock
        {
            s.a = [] // acct_nt changes whenever sn_w_glock takes GC, reset
            s.v = 0

            Object.keys(d.sn).forEach(k => { // I just love how concise this is
                if (T(RegExp(k))) #ms.nametaken42.bot_scam({ a: d.sn[k] })
            })
        }

		if (T(/Connect/) || T(/hardline/)) // Save state and return last output
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
