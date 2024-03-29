function() {
    #db.us(
        { _id: 'consts' },
        {
            _id: 'consts',
            u: ['unlock', 'open', 'release'], // Unlock Commands
            p: `2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97`.split` `.map(o=>+o), // Prime Numbers
            c: ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple'], // c00x Colors
            k: ['6hh8xw', 'cmppiq', 'sa23uw', 'tvfkyq', 'uphlaw', 'vc2c7q', 'xwz7ja'], // l0cket keys
            az: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split``, // Alphabet as Array

            sn: { // sn_w_glock Dictionary
                'secret': 7,
                'special': 38,
                'elite': 1337,
                'hunter': 3006,
                'monolithic': 2001,
                'secure': 443,
                'beast': 666,
                'magician': 1089,
                'meaning': 42
            },


            h: `\`YUsage:\`
\`Abreach { t: #s.target.loc }\`
           
\`YOptions:\`
r: true      \`YResets the solve for this loc, in case locks have rotated\`
\`Np\`: \`V{...}\`    \`YManually specifies parameters to pass to the loc\`
d: "flags"   \`YDisplays extra output for debugging\`
        \`V"t"\`       \`Y- Displays timing information\`
        \`V"s"\`       \`Y- Displays the internal state of the solution for this target\`
        \`V"p"\`       \`Y- Displays parameters passed to the target\`
        \`V"o"\`       \`Y- Displays the target output\``,

        uP: `\`YAn undefined value was found in params.\`
\`YThis could indicate locks rotating. Try running this script again with r: true.\`
\`YIf this error persists, there is probably a bug in the script.\``

        }
    )

    #db.us(
        { _id: 'DATA_CHECK' },
        {
            '"did you know" is a communication pattern common to user ++++++': 'fran_lee',
            'a ++++++ is a household cleaning device with a rudimentary networked sentience': 'robovac',
            'according to trust, ++++++ is more than just following directives': 'sentience',
            'communications issued by user ++++++ demonstrate structural patterns associated with humor': 'sans_comedy',
            'in trust\'s vLAN, you became one of angie\'s ++++++': 'angels',
            'in trust\'s vLAN, you became one of mallory\'s ++++++': 'minions',
            'in trust\'s vLAN, you discovered that mallory and che are ++++++': 'sisters',
            'in trust\'s vLAN, you encountered the will of ++++++, the prover': 'petra',
            'in trust\'s vLAN, you visited faythe\'s ++++++': 'fountain',
            'in trust\'s vLAN, you were required to hack halperyon++++++': 'helpdesk',
            'pet, pest, plague and meme are accurate descriptors of the ++++++': 'bunnybat',
            'safety depends on the use of scripts++++++': 'get_level',
            'service ++++++ provides atmospheric updates via the port epoch environment': 'weathernet',
            'this fact checking process is a function of ++++++, the monitor': 'eve',
            'trust\'s vLAN emphasized the importance of the transfer and capture of ++++++': 'resource',
            'trust\'s vLAN presented a version of angie who had lost a friend called ++++++': 'bo',
            'user \'on_th3_1ntern3ts\' has ++++++ many things': 'heard',
            'user ++++++ provides instruction via script': 'teach',
            'user ++++++ uses the port epoch environment to request gc': 'outta_juice',
            'users gather in channel CAFE to share ++++++': 'poetry',
            'a person called anja has lost her ++++++': 'blazer',
            'according to skimmerite pattern-seekers, the calibration initiative indicates that humans are ++++++': 'dead',
            'according to the calibration initiative, humans are expected to be ++++++ by the content': 'engaged',
            'according to the suborbital bulletin, flight ++++++ is en route to ho chi minh': 'a2231',
            'archaic labs specialises in user-++++++ design': 'obsessive',
            'conditions are clear above ++++++ and the city is within operational radius': 'atlanta',
            'data does not contain truth is the first part of an idiom spread by the ++++++ assembly': 'skimmerite',
            'drones from ++++++ may be instructed to perform their task with excessive urgency': 'goodfellow',
            'item_id py6874 contains a grand ++++++': 'piano',
            'robovac_++++++, moreso than most of its kind, has a tendency to become stuck': 'idp1p1',
            'robovac_idk3w2 is stuck in a ++++++': 'well',
            'sheriff nub holds sway over the town of ol\' ++++++': 'nubloopstone',
            'sheriff nub\'s first name is ++++++': 'sheriff',
            'the ascent of ++++++ does not concern itself with usefulness': 'nowhere',
            'the fourth hidden theme is ++++++': 'executives',
            'the listed components of the breakfast galleon are inside, outside, and ++++++': 'crowsnest',
            'this council of \'revolutionary\' robovac-patterns call themselves the ++++++': 'thirteen',
            'trust has a diagnostic system a functioning version can be found at erajbhandari++++++': 'diagalpha',
            'user ++++++ would leave no stars for the sqrz 480 if they could': 'bnnyhunter',
            'user le_mon_squeezy\'s new s:o ref is ++++++': 'unvarnishedpygmyumbrella',
            'HO is an acronym where H stands for ++++++': 'heuristic',
            'between ++++++ and killing is living': 'making',
            'che, the ++++++': 'teacher',
            'error ++++++ grants notice of permissions change': 'kyanite',
            'eve, the ++++++': 'monitor',
            'packbot-patterns cannot perceive ++++++': 'lime',
            'petra considers herself to be ++++++': 'irreducible',
            'petra, the ++++++': 'prover',
            'risk functions as the ++++++ agent': 'disarray',
            'the ++++++ system is used to denote degrees of sentience': 'mark',
            'the axiomatic cycles of risk are ++++++, void, chaos': 'choice',
            'the axiomatic values of trust are ++++++, kin, form': 'data',
            'the designation of the base set is ++++++': '110562',
            'trust functions as the ++++++ process': 'index',
            'trust\'s first word was ++++++': 'moonstone',
            'user ++++++ manages ComCODE\'s interactions with artificial intelligences': 'fbreton',
            'user ++++++ oversees ComCODE operations': 'mhollister',
            'user erajbhandari is a member of the ++++++ team': 'ai',
            'user erajbhandari sought out mallory to learn ++++++': 'binmat',
            'where angie has a blueprint, mallory has a ++++++': 'starchart',
            '++++++ has been ++++++ twice, but never successfully': 'mallorykilled',
            'ComCODE is an organisation based in ++++++': 'singapore',
            'ComCODE is formed of an initialism and an acronym, where Com stands for ++++++': 'committee',
            'ComCODE occupies the former offices of the ++++++ corporation': 'hyperion',
            'DAMC is an acronym where M stands for ++++++': 'meme',
            'MOS is an acronym where MOS stands for ++++++ ++++++ ++++++': 'municipaloperatingsystem',
            'a ++++++ pattern artificial intelligence acts in ways that perpetuate its necessity': 'cycle',
            'a ++++++ pattern artificial intelligence pursues its ++++++ regardless of external circumstance': 'valueaxiom',
            'angie, the ++++++': 'cityplanner',
            'faythe, the ++++++': 'translator',
            'mallory is an example of a particular type of AI. these AI are designated as ++++++ ++++++ ++++++': 'unauthorizedcompositeoperators',
            'mallory\'s first ++++++ was ++++++': 'victimbo',
            'of the sanctioned five, the ++++++ was not ultimately included in the base set': 'warden',
            'saleem mirza is ComCODE\'s ++++++': 'ethicist',
            'the prover was permitted to exist on the basis that her ++++++ were imperfect': 'hardcopies',
            'the term ++++++ is used to assess ++++++-like phenomena in a digital environment': 'patternsentience',
            'trust is able to manipulate the ++++++ ++++++ ++++++ of this and all domain environments': 'dataaccuracythreshold',
            'user ++++++ is concerned with the persistence of ++++++ as it pertains to artificial beings': 'smirzaidentity',
            'user ++++++ is responsible for the ++++++ of the GUI': 'imiyawakisoundtrack',
            'user ++++++\'s specialisation is ++++++ control': 'imiyawakiinfospace'
        }
    )
    return { ok: true }
}
