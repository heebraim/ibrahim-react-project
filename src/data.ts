// // src/data.ts
// type Category = 
//   "Gross" | "Sci-Fi" | "Philosophical" | "Random" | "Fantasy" |
//   "Technology" | "Sports" | "Motherhood" | "Lifestyle" | "Music" |
//   "Movies" | "Decision" | "Intimacy" | "Relationship" | "Marriage";

// export const DILEMMAS: Record<Category, string[]> = {
//   "Gross": [
//     "Would you rather eat a hair-covered lollipop found on a bus seat or drink from a used band-aid flavored juice box?",
//     "Would you rather have permanent cheese-dust fingerprints or always smell like wet dog?",
//     "Would you rather brush your teeth with mayonnaise or shampoo your hair with ketchup?",
//     "Would you rather wear socks filled with live earthworms or underwear lined with poison ivy?",
//     "Would you rather have a nose that drips peanut butter or ears that leak cottage cheese?",
//     "Would you rather shower in melted crayons or bathe in expired milk?",
//     "Would you rather have toenails that taste like blue cheese or hair that smells like rotten eggs?",
//     "Would you rather eat pizza topped with live maggots or drink a cockroach smoothie?",
//     "Would you rather have permanent spinach in your teeth or endless popcorn kernels under your tongue?",
//     "Would you rather sneeze slugs or burp tadpoles?"
//   ],

//   "Sci-Fi": [
//     "Would you rather be hunted by Predator in jungle terrain or face Alien Queen in spaceship corridors?",
//     "Would you rather have malfunctioning teleportation or time machine that only goes forward?",
//     "Would you rather communicate only through telepathy or understand all languages except your native one?",
//     "Would you rather battle sentient AI with typewriter or fight robot uprising with slingshot?",
//     "Would you rather live on Mars with broken oxygen system or Venus with malfunctioning cooling suit?",
//     "Would you rather have cyborg eyes that see too much or robot ears that hear everything?",
//     "Would you rather be stranded on dying space station or crash-land on unknown hostile planet?",
//     "Would you rather upload consciousness to glitchy cloud or live in cloned body that ages 2x faster?",
//     "Would you rather fight zombie astronauts on Moon or vampire aliens in underwater base?",
//     "Would you rather have shape-shifting ability you can't control or invisibility that works only when singing?"
//   ],

//   "Philosophical": [
//     "Would you rather know life's meaning but forget it instantly or never know but always wonder?",
//     "Would you rather be right all the time but lonely or wrong often but loved?",
//     "Would you rather remember every embarrassment or forget all your achievements?",
//     "Would you rather have unlimited knowledge but no curiosity or endless curiosity but no answers?",
//     "Would you rather live 1000 years as ordinary person or 1 year as most influential being?",
//     "Would you rather know when you'll die or how you'll die?",
//     "Would you rather have perfect memory of past or clear vision of future?",
//     "Would you rather be hated for truth or loved for lies?",
//     "Would you rather save 100 strangers or 1 loved one?",
//     "Would you rather have free will in predetermined world or no choice in chaotic universe?"
//   ],

//   "Fantasy": [
//     "Would you rather battle dragon with butter knife or negotiate with troll using bad poetry?",
//     "Would you rather have elf ears that hear secrets or dwarf strength that breaks everything?",
//     "Would you rather ride griffin scared of heights or unicorn that tells terrible jokes?",
//     "Would you rather drink potion that makes you fluent in animal language but mute to humans?",
//     "Would you rather have magic sword that insults you or shield that randomly turns invisible?",
//     "Would you rather be cursed with truth-telling or blessed with lying everyone believes?",
//     "Would you rather fight vampire with garlic breath or werewolf with silver allergy?",
//     "Would you rather have pet dragon that hoards trash or phoenix that randomly combusts?",
//     "Would you rather live in floating castle that drifts randomly or underground city with no sunlight?",
//     "Would you rather have fairy companion that pranks you or goblin servant that steals your stuff?"
//   ],

//   "Technology": [
//     "Would you rather have smartphone predicting death date or broadcasting thoughts?",
//     "Would you rather lose digital memories or have private messages publicly revealed?",
//     "Would you rather have robot hands that can't feel pain or AI eyes seeing through walls?",
//     "Would you rather have self-driving car that only plays polka music or smart home that randomly redecorates?",
//     "Would you rather have VR headset stuck in horror mode or AR glasses showing embarrassing captions?",
//     "Would you rather have AI clone attending work meetings or robot twin handling relationships?",
//     "Would you rather have internet access but no apps or apps but no internet?",
//     "Would you rather have computer that deletes random files or phone autocorrecting to embarrassing messages?",
//     "Would you rather have crypto wallet that randomly gains/loses millions or NFT collection of bad memes?",
//     "Would you rather fight robot uprising with 1980s tech or survive hacker apocalypse with typewriter?"
//   ],

//   "Sports": [
//     "Would you rather play basketball with flaming hoops or soccer with explosive balls?",
//     "Would you rather lose every game with best stats or win with worst performance?",
//     "Would you rather coach toddlers or referee angry gorillas?",
//     "Would you rather have Olympic gold but no recognition or last place with world record?",
//     "Would you rather play championship game in clown shoes or mascot costume?",
//     "Would you rather commentate games you hate or play sports you're terrible at?",
//     "Would you rather have super speed but no coordination or super strength but fragile bones?",
//     "Would you rather train with drill sergeant koala or zen master sloth?",
//     "Would you rather compete in extreme ironing championships or underwater basket weaving Olympics?",
//     "Would you rather have career-ending injury tomorrow or play mediocrely for 20 years?"
//   ],

//   "Motherhood": [
//     "Would you rather change 1000 diapers blindfolded or listen to Baby Shark for 72 hours?",
//     "Would you rather have permanent marker stains or pureed carrots in hair?",
//     "Would you rather answer 'why?' 1000x daily or explain babies to strangers?",
//     "Would you rather have toddler artist draw on walls or baby chef 'help' with cooking?",
//     "Would you rather survive grocery tantrums or restaurant meltdowns?",
//     "Would you rather have endless laundry or infinite sticky handprints?",
//     "Would you rather sing lullabies 24/7 or explain death/holidays to preschoolers?",
//     "Would you rather find Legos in bed or crayons in dryer?",
//     "Would you rather have public diaper disasters or home potty training accidents?",
//     "Would you rather miss sleep for years or personal space forever?"
//   ],

//   "Lifestyle": [
//     "Would you rather wear socks+sandals daily or neon spandex to formal events?",
//     "Would you rather have unlimited takeout with no chairs or crackers-only with comfy furniture?",
//     "Would you rather shower at 3AM or brush teeth with chili paste?",
//     "Would you rather have closet full of wrong-sized clothes or perfect outfits in ugly patterns?",
//     "Would you rather have neighbors hearing all your conversations or seeing all your activities?",
//     "Would you rather live in perfect home with bad WiFi or messy house with fiber internet?",
//     "Would you rather have endless energy but insomnia or great sleep but constant fatigue?",
//     "Would you rather commute via angry camel or broken roller skates?",
//     "Would you rather have gourmet kitchen but can't cook or perfect grill but vegan lifestyle?",
//     "Would you rather attend boring parties weekly or exciting events never?"
//   ],

//   "Music": [
//     "Would you rather hear songs at 2x speed or only opera style?",
//     "Would you rather attend humming-only concerts or backwards-playing musicians?",
//     "Would you rather have life narrated by rapper or scored by kazoo orchestra?",
//     "Would you rather have perfect pitch but tone-deaf audience or terrible voice but captive listeners?",
//     "Would you rather only hear songs you hate or never hear music again?",
//     "Would you rather be roadie for terrible band or one-hit wonder has-been?",
//     "Would you rather have concerts interrupted by fire drills or endless encores?",
//     "Would you rather have shower singing broadcasted or perfect voice only in elevators?",
//     "Would you rather compose jingles for bad products or covers for worse singers?",
//     "Would you rather music controls your mood or your mood controls nearby music?"
//   ],

//   "Movies": [
//     "Would you rather star in rom-com with ex or horror movie with in-laws?",
//     "Would you rather have real jump scares or awkward meet-cutes daily?",
//     "Would you rather live in noir film or bad CGI fantasy?",
//     "Would you rather be typecast as villain or always play comic relief?",
//     "Would you rather have famous actor's voice but not yours or your voice dubbed badly?",
//     "Would you rather act in perfect movie no one sees or terrible blockbuster?",
//     "Would you rather do own stunts poorly or have obvious stunt double?",
//     "Would you rather memorize Shakespearean scripts or improvise everything?",
//     "Would you rather work with demanding auteur or chaotic ensemble cast?",
//     "Would you rather have Oscar for worst performance or be snubbed for best?"
//   ],

//   "Decision": [
//     "Would you rather choose via eeny-meeny-miney-mo or magic 8-ball?",
//     "Would you rather decide everything 5 minutes late or 2 hours early?",
//     "Would you rather have perfect decisions with bad timing or mediocre choices with perfect timing?",
//     "Would you rather make all choices at noon or midnight?",
//     "Would you rather consult magic conch shell or over-opinionated parrot?",
//     "Would you rather have 100 good options or 2 terrible ones?",
//     "Would you rather decide for everyone but hated or never decide but safe?",
//     "Would you rather know decision outcomes but not reasons or reasons but not outcomes?",
//     "Would you rather make irreversible choices young or flexible choices old?",
//     "Would you rather be famous for worst decision or unknown for best?"
//   ],

//   "Intimacy": [
//     "Would you rather partner read diary or watch search history?",
//     "Would you rather share toothbrush forever or never kiss again?",
//     "Would you rather discuss exes on first dates or politics at weddings?",
//     "Would you rather know partner's every thought or have complete privacy?",
//     "Would you rather cuddle during heatwave or avoid touch during frost?",
//     "Would you rather have perfect romance with bad timing or messy love with perfect moments?",
//     "Would you rather share bathroom always or separate houses?",
//     "Would you rather know partner's embarrassing secrets or have yours revealed?",
//     "Would you rather relationship counselor is your parent or ex?",
//     "Would you rather emotional intimacy without physical or vice versa?"
//   ],

//   "Relationship": [
//     "Would you rather date someone who mis-finishes sentences or never listens?",
//     "Would you rather have bad enthusiastic cook or daily takeout?",
//     "Would you rather argue thermostat settings or toilet paper direction?",
//     "Would you rather share closet space or bathroom counter?",
//     "Would you rather partner's annoying habit is loud chewing or mispronouncing words?",
//     "Would you rather double-date with enemies or solo with boring couple?",
//     "Would you rather forget all anniversaries or remember every argument?",
//     "Would you rather your parents hate partner or partner's parents hate you?",
//     "Would you rather relationship tested by long distance or financial stress?",
//     "Would you rather be loved intensely but briefly or moderately but lifelong?"
//   ],

//   "Marriage": [
//     "Would you rather have toddler-planned wedding or clown-hosted reception?",
//     "Would you rather forget anniversaries or confuse with ex's birthday?",
//     "Would you rather share account with shopaholic or separate finances forever?",
//     "Would you rather in-laws move in or lose deposit eloping?",
//     "Would you rather terrible vow speech or embarrassing first dance?",
//     "Would you rather have cake collapse or ring lost during ceremony?",
//     "Would you rather spouse snore like chainsaw or talk in movie quotes?",
//     "Would you rather fight about chores daily or big issues monthly?",
//     "Would you rather parent together with opposite styles or solo with criticism?",
//     "Would you rather grow apart slowly or have dramatic midlife crisis?"
//   ],

// //   "Random": [
// //     ...this["Gross"],
// //     ...this["Sci-Fi"],
// //     ...this["Philosophical"],
// //     ...this["Fantasy"],
// //     ...this["Technology"],
// //     ...this["Sports"],
// //     ...this["Motherhood"],
// //     ...this["Lifestyle"],
// //     ...this["Music"],
// //     ...this["Movies"],
// //     ...this["Decision"],
// //     ...this["Intimacy"],
// //     ...this["Relationship"],
// //     ...this["Marriage"]
// //   ]
// };

// DILEMMAS["Random"] = [
//   ...DILEMMAS["Gross"],
//   ...DILEMMAS["Sci-Fi"],
//   ...DILEMMAS["Philosophical"],
//   ...DILEMMAS["Fantasy"],
//   ...DILEMMAS["Technology"],
//   ...DILEMMAS["Sports"],
//   ...DILEMMAS["Motherhood"],
//   ...DILEMMAS["Lifestyle"],
//   ...DILEMMAS["Music"],
//   ...DILEMMAS["Movies"],
//   ...DILEMMAS["Decision"],
//   ...DILEMMAS["Intimacy"],
//   ...DILEMMAS["Relationship"],
//   ...DILEMMAS["Marriage"]
// ];

// export const EXPLANATIONS: Record<Category, string[]> = {
//   "Gross": [
//     "💩 Legendary grossness! The trash can salutes you!",
//     "🤢 Pathogen resistance level: Maximum!",
//     "🚽 Plunger salesperson of the year!",
//     "🤮 Even bacteria are filing complaints!",
//     "🧻 Toilet paper companies love this choice!",
//     "🦠 CDC tracking your location...",
//     "🚫 Sanitation workers on strike because of you!",
//     "🧫 Lab experiment gone terribly right!",
//     "💀 Morticians taking notes...",
//     "🤢 You've invented new biohazard levels!"
//   ],

//   "Sci-Fi": [
//     "🚀 Warp drive engaged...to awkwardness sector!",
//     "👽 First contact protocol: Failed spectacularly!",
//     "🤖 Robot overlords taking notes...",
//     "🌌 Space-time continuum: Ruined!",
//     "👾 Alien stand-up comedy material acquired!",
//     "🔭 NASA wants their equipment back!",
//     "🛸 UFOs avoiding your area now!",
//     "🌠 Shooting star just changed course!",
//     "🚨 Galactic federation alert issued!",
//     "⚡ You broke the future-past continuum!"
//   ],

//   "Philosophical": [
//     "🤔 Socrates just facepalmed in afterlife!",
//     "📚 Philosophy textbooks rewriting...",
//     "💡 Enlightenment achieved...then immediately lost!",
//     "🌌 Existential crisis level: Cosmic!",
//     "🧠 Brain.exe has stopped working!",
//     "📜 Ancient philosophers are judging you!",
//     "⚖️ Moral compass spinning wildly!",
//     "🕳️ Rabbit hole depth: Infinite!",
//     "🎓 Philosophy professor quit because of you!",
//     "🌀 Created 10 new paradoxes!"
//   ],

//   "Fantasy": [
//     "🐉 Dragon union filing complaint!",
//     "🧙♂️ Wizards' council convening emergency meeting!",
//     "🦄 Unicorn herd distancing from you!",
//     "🏰 Castle walls developing cracks!",
//     "🧚♀️ Fairies organizing intervention!",
//     "⚔️ Hero's journey cancelled mid-quest!",
//     "🧌 Trolls think you're too extreme!",
//     "🔮 Crystal ball cracked from visions!",
//     "🛡️ Knights templar updating vows!",
//     "🍄 Magical mushrooms refusing growth!"
//   ],

//   "Technology": [
//     "🤖 Welcome to the robot uprising!",
//     "💾 Backing up to floppy disks...",
//     "📱 Your digital footprint grew tentacles!",
//     "🖨️ Error 404: Sanity not found!",
//     "🌐 Internet history declared biohazard!",
//     "💻 Hackers stealing your bad ideas!",
//     "🔌 Unplugging recommended forever!",
//     "🛰️ Satellite avoiding your location!",
//     "📡 Wi-Fi signal running away!",
//     "⚠️ Terms of service violated...existentially!"
//   ],

//   "Sports": [
//     "🏆 Trophy unlocked: Chaotic athlete!",
//     "🤸♂️ Olympic committee concerned...",
//     "🥇 Gold medal in questionable choices!",
//     "🏀 The ball's in someone else's court!",
//     "🥊 Referee whistle broken!",
//     "🤼♂️ Opponents requesting mercy rule!",
//     "🚑 Sports medics on standby!",
//     "📣 Announcer lost for words!",
//     "🎽 Uniform violation detected!",
//     "🏟️ Stadium evacuating...again!"
//   ],

//   "Motherhood": [
//     "👶 Parenting level: Expert survivalist!",
//     "🍼 Formula for chaos perfected!",
//     "🧸 Stuffed animal rebellion incoming!",
//     "🚼 Diaper genie regrets everything!",
//     "🖍️ Crayon conglomerate sponsoring you!",
//     "🍕 Pizza delivery knows your cry!",
//     "📚 Parenting books burning!",
//     "🚸 Playground legend status achieved!",
//     "🧦 Sock gnomes filing restraining order!",
//     "🍷 Wine moms adopting you!"
//   ],

//   "Lifestyle": [
//     "👑 Pretentiousness level: Royal!",
//     "🛋️ IKEA instructions make more sense!",
//     "🍷 Basic white girl level: Expert!",
//     "🕶️ Hipster cred revoked!",
//     "🧘♀️ Zen master status revoked!",
//     "🎉 FOMO epidemic patient zero!",
//     "📸 Instagram reality distortion field active!",
//     "🛍️ Consumerism just peaked!",
//     "🍃 Minimalism failed spectacularly!",
//     "🏡 HGTV wants their set back!"
//   ],

//   "Music": [
//     "🎵 Beethoven rolling in grave...again!",
//     "🎤 Auto-tune begging for mercy!",
//     "🎧 Eardrums filing for divorce!",
//     "🎸 Rock gods facepalming!",
//     "🎹 Piano keys running away!",
//     "🥁 Drumsticks spontaneously combusting!",
//     "🎤 Karaoke ban incoming!",
//     "🎶 Grammy eligibility revoked!",
//     "🎵 Billboard chart disaster!",
//     "🎧 Noise cancellation failed!"
//   ],

//   "Movies": [
//     "🎥 Hitchcock spinning in grave!",
//     "🍿 Netflix cancelling your life!",
//     "🎬 Oscar voters crying!",
//     "📽️ Projector melting film!",
//     "🎭 Drama llama award winner!",
//     "📺 Nielsen ratings plummeting!",
//     "🍅 Rotten Tomatoes score: -100%!",
//     "🎞️ Film reel spontaneously editing!",
//     "🌟 Method acting gone too far!",
//     "🎭 Fourth wall obliterated!"
//   ],

//   "Decision": [
//     "⚖️ Scales of justice broken!",
//     "🤷♂️ Magic 8-Ball confused!",
//     "🎲 Dice rolling away!",
//     "🔮 Crystal ball fogged!",
//     "📜 Decision scrolls burning!",
//     "🔄 Paradox generator activated!",
//     "🧠 Analysis paralysis achieved!",
//     "⏳ Time continuum disrupted!",
//     "📉 Stock market of bad choices!",
//     "🚦 Life GPS recalculating!"
//   ],

//   "Intimacy": [
//     "💔 Heart emoji crying!",
//     "🔥 Third-degree awkward burn!",
//     "🚫 TMI alarm sounding!",
//     "🛏️ Mattress tag officially removed!",
//     "🔞 Content warning expanded!",
//     "💔 Exes cheering your choice!",
//     "💘 Cupid arrow misfired!",
//     "💑 Romance novels rewritten!",
//     "🚪 Awkward exits multiplied!",
//     "💔 Heart-shaped hole in wall!"
//   ],

//   "Relationship": [
//     "💔 Couples therapist retiring!",
//     "❤️‍🔥 Love languages scrambled!",
//     "💌 Hallmark card revoked!",
//     "💔 Romeo & Juliet cringing!",
//     "🚪 Slamming door symphony!",
//     "💘 Love potion expired!",
//     "💔 Dating apps swiping left!",
//     "❤️ Valentine's Day cancelled!",
//     "💔 Rom-com genre dying!",
//     "💑 PDA police alert!"
//   ],

//   "Marriage": [
//     "💒 Divorce lawyers cheering!",
//     "💍 Ring bearer fleeing!",
//     "🍰 Wedding cake collapsing!",
//     "👰♀️ Veil of tears real!",
//     "🤵♂️ Tuxedo rental denied!",
//     "💐 Bouquet catching fire!",
//     "📜 Vows erased permanently!",
//     "💔 Honeymoon destination closed!",
//     "👫 Couple goals failed!",
//     "💘 Marriage certificate shredding!"
//   ],

//   "Random": [
//     "🎲 Universe dice rolled!",
//     "🌀 Multiverse damaged!",
//     "🎯 Probability matrix scrambled!",
//     "🔀 Randomizer exploded!",
//     "🎱 Magic 8-Ball broken!",
//     "📦 Pandora's box opened!",
//     "🎰 Jackpot of chaos!",
//     "🔮 Crystal ball shattered!",
//     "🎲 Snake eyes of fate!",
//     "🌪️ Tornado of randomness!"
//   ]
// };








// src/data.ts
export type Category = 
  "Gross" | "Sci-Fi" | "Philosophical" | "Fantasy" |
  "Technology" | "Sports" | "Motherhood" | "Lifestyle" | "Music" |
  "Movies" | "Decision" | "Intimacy" | "Relationship" | "Marriage" | "Random";

export const DILEMMAS: Record<Category, string[]> = {
  // ... other categories ...

  "Gross": [
    "Would you rather eat a hair-covered lollipop found on a bus seat or drink from a used band-aid flavored juice box?",
    "Would you rather have permanent cheese-dust fingerprints or always smell like wet dog?",
    "Would you rather brush your teeth with mayonnaise or shampoo your hair with ketchup?",
    "Would you rather wear socks filled with live earthworms or underwear lined with poison ivy?",
    "Would you rather have a nose that drips peanut butter or ears that leak cottage cheese?",
    "Would you rather shower in melted crayons or bathe in expired milk?",
    "Would you rather have toenails that taste like blue cheese or hair that smells like rotten eggs?",
    "Would you rather eat pizza topped with live maggots or drink a cockroach smoothie?",
    "Would you rather have permanent spinach in your teeth or endless popcorn kernels under your tongue?",
    "Would you rather sneeze slugs or burp tadpoles?"
  ],

  "Sci-Fi": [
    "Would you rather be hunted by Predator in jungle terrain or face Alien Queen in spaceship corridors?",
    "Would you rather have malfunctioning teleportation or time machine that only goes forward?",
    "Would you rather communicate only through telepathy or understand all languages except your native one?",
    "Would you rather battle sentient AI with typewriter or fight robot uprising with slingshot?",
    "Would you rather live on Mars with broken oxygen system or Venus with malfunctioning cooling suit?",
    "Would you rather have cyborg eyes that see too much or robot ears that hear everything?",
    "Would you rather be stranded on dying space station or crash-land on unknown hostile planet?",
    "Would you rather upload consciousness to glitchy cloud or live in cloned body that ages 2x faster?",
    "Would you rather fight zombie astronauts on Moon or vampire aliens in underwater base?",
    "Would you rather have shape-shifting ability you can't control or invisibility that works only when singing?"
  ],

  "Philosophical": [
    "Would you rather know life's meaning but forget it instantly or never know but always wonder?",
    "Would you rather be right all the time but lonely or wrong often but loved?",
    "Would you rather remember every embarrassment or forget all your achievements?",
    "Would you rather have unlimited knowledge but no curiosity or endless curiosity but no answers?",
    "Would you rather live 1000 years as ordinary person or 1 year as most influential being?",
    "Would you rather know when you'll die or how you'll die?",
    "Would you rather have perfect memory of past or clear vision of future?",
    "Would you rather be hated for truth or loved for lies?",
    "Would you rather save 100 strangers or 1 loved one?",
    "Would you rather have free will in predetermined world or no choice in chaotic universe?"
  ],

  "Fantasy": [
    "Would you rather battle dragon with butter knife or negotiate with troll using bad poetry?",
    "Would you rather have elf ears that hear secrets or dwarf strength that breaks everything?",
    "Would you rather ride griffin scared of heights or unicorn that tells terrible jokes?",
    "Would you rather drink potion that makes you fluent in animal language but mute to humans?",
    "Would you rather have magic sword that insults you or shield that randomly turns invisible?",
    "Would you rather be cursed with truth-telling or blessed with lying everyone believes?",
    "Would you rather fight vampire with garlic breath or werewolf with silver allergy?",
    "Would you rather have pet dragon that hoards trash or phoenix that randomly combusts?",
    "Would you rather live in floating castle that drifts randomly or underground city with no sunlight?",
    "Would you rather have fairy companion that pranks you or goblin servant that steals your stuff?"
  ],

  "Technology": [
    "Would you rather have smartphone predicting death date or broadcasting thoughts?",
    "Would you rather lose digital memories or have private messages publicly revealed?",
    "Would you rather have robot hands that can't feel pain or AI eyes seeing through walls?",
    "Would you rather have self-driving car that only plays polka music or smart home that randomly redecorates?",
    "Would you rather have VR headset stuck in horror mode or AR glasses showing embarrassing captions?",
    "Would you rather have AI clone attending work meetings or robot twin handling relationships?",
    "Would you rather have internet access but no apps or apps but no internet?",
    "Would you rather have computer that deletes random files or phone autocorrecting to embarrassing messages?",
    "Would you rather have crypto wallet that randomly gains/loses millions or NFT collection of bad memes?",
    "Would you rather fight robot uprising with 1980s tech or survive hacker apocalypse with typewriter?"
  ],

  "Sports": [
    "Would you rather play basketball with flaming hoops or soccer with explosive balls?",
    "Would you rather lose every game with best stats or win with worst performance?",
    "Would you rather coach toddlers or referee angry gorillas?",
    "Would you rather have Olympic gold but no recognition or last place with world record?",
    "Would you rather play championship game in clown shoes or mascot costume?",
    "Would you rather commentate games you hate or play sports you're terrible at?",
    "Would you rather have super speed but no coordination or super strength but fragile bones?",
    "Would you rather train with drill sergeant koala or zen master sloth?",
    "Would you rather compete in extreme ironing championships or underwater basket weaving Olympics?",
    "Would you rather have career-ending injury tomorrow or play mediocrely for 20 years?"
  ],

  "Motherhood": [
    "Would you rather change 1000 diapers blindfolded or listen to Baby Shark for 72 hours?",
    "Would you rather have permanent marker stains or pureed carrots in hair?",
    "Would you rather answer 'why?' 1000x daily or explain babies to strangers?",
    "Would you rather have toddler artist draw on walls or baby chef 'help' with cooking?",
    "Would you rather survive grocery tantrums or restaurant meltdowns?",
    "Would you rather have endless laundry or infinite sticky handprints?",
    "Would you rather sing lullabies 24/7 or explain death/holidays to preschoolers?",
    "Would you rather find Legos in bed or crayons in dryer?",
    "Would you rather have public diaper disasters or home potty training accidents?",
    "Would you rather miss sleep for years or personal space forever?"
  ],

  "Lifestyle": [
    "Would you rather wear socks+sandals daily or neon spandex to formal events?",
    "Would you rather have unlimited takeout with no chairs or crackers-only with comfy furniture?",
    "Would you rather shower at 3AM or brush teeth with chili paste?",
    "Would you rather have closet full of wrong-sized clothes or perfect outfits in ugly patterns?",
    "Would you rather have neighbors hearing all your conversations or seeing all your activities?",
    "Would you rather live in perfect home with bad WiFi or messy house with fiber internet?",
    "Would you rather have endless energy but insomnia or great sleep but constant fatigue?",
    "Would you rather commute via angry camel or broken roller skates?",
    "Would you rather have gourmet kitchen but can't cook or perfect grill but vegan lifestyle?",
    "Would you rather attend boring parties weekly or exciting events never?"
  ],

  "Music": [
    "Would you rather hear songs at 2x speed or only opera style?",
    "Would you rather attend humming-only concerts or backwards-playing musicians?",
    "Would you rather have life narrated by rapper or scored by kazoo orchestra?",
    "Would you rather have perfect pitch but tone-deaf audience or terrible voice but captive listeners?",
    "Would you rather only hear songs you hate or never hear music again?",
    "Would you rather be roadie for terrible band or one-hit wonder has-been?",
    "Would you rather have concerts interrupted by fire drills or endless encores?",
    "Would you rather have shower singing broadcasted or perfect voice only in elevators?",
    "Would you rather compose jingles for bad products or covers for worse singers?",
    "Would you rather music controls your mood or your mood controls nearby music?"
  ],

  "Movies": [
    "Would you rather star in rom-com with ex or horror movie with in-laws?",
    "Would you rather have real jump scares or awkward meet-cutes daily?",
    "Would you rather live in noir film or bad CGI fantasy?",
    "Would you rather be typecast as villain or always play comic relief?",
    "Would you rather have famous actor's voice but not yours or your voice dubbed badly?",
    "Would you rather act in perfect movie no one sees or terrible blockbuster?",
    "Would you rather do own stunts poorly or have obvious stunt double?",
    "Would you rather memorize Shakespearean scripts or improvise everything?",
    "Would you rather work with demanding auteur or chaotic ensemble cast?",
    "Would you rather have Oscar for worst performance or be snubbed for best?"
  ],

  "Decision": [
    "Would you rather choose via eeny-meeny-miney-mo or magic 8-ball?",
    "Would you rather decide everything 5 minutes late or 2 hours early?",
    "Would you rather have perfect decisions with bad timing or mediocre choices with perfect timing?",
    "Would you rather make all choices at noon or midnight?",
    "Would you rather consult magic conch shell or over-opinionated parrot?",
    "Would you rather have 100 good options or 2 terrible ones?",
    "Would you rather decide for everyone but hated or never decide but safe?",
    "Would you rather know decision outcomes but not reasons or reasons but not outcomes?",
    "Would you rather make irreversible choices young or flexible choices old?",
    "Would you rather be famous for worst decision or unknown for best?"
  ],

  "Intimacy": [
    "Would you rather partner read diary or watch search history?",
    "Would you rather share toothbrush forever or never kiss again?",
    "Would you rather discuss exes on first dates or politics at weddings?",
    "Would you rather know partner's every thought or have complete privacy?",
    "Would you rather cuddle during heatwave or avoid touch during frost?",
    "Would you rather have perfect romance with bad timing or messy love with perfect moments?",
    "Would you rather share bathroom always or separate houses?",
    "Would you rather know partner's embarrassing secrets or have yours revealed?",
    "Would you rather relationship counselor is your parent or ex?",
    "Would you rather emotional intimacy without physical or vice versa?"
  ],

  "Relationship": [
    "Would you rather date someone who mis-finishes sentences or never listens?",
    "Would you rather have bad enthusiastic cook or daily takeout?",
    "Would you rather argue thermostat settings or toilet paper direction?",
    "Would you rather share closet space or bathroom counter?",
    "Would you rather partner's annoying habit is loud chewing or mispronouncing words?",
    "Would you rather double-date with enemies or solo with boring couple?",
    "Would you rather forget all anniversaries or remember every argument?",
    "Would you rather your parents hate partner or partner's parents hate you?",
    "Would you rather relationship tested by long distance or financial stress?",
    "Would you rather be loved intensely but briefly or moderately but lifelong?"
  ],

  "Marriage": [
    "Would you rather have toddler-planned wedding or clown-hosted reception?",
    "Would you rather forget anniversaries or confuse with ex's birthday?",
    "Would you rather share account with shopaholic or separate finances forever?",
    "Would you rather in-laws move in or lose deposit eloping?",
    "Would you rather terrible vow speech or embarrassing first dance?",
    "Would you rather have cake collapse or ring lost during ceremony?",
    "Would you rather spouse snore like chainsaw or talk in movie quotes?",
    "Would you rather fight about chores daily or big issues monthly?",
    "Would you rather parent together with opposite styles or solo with criticism?",
    "Would you rather grow apart slowly or have dramatic midlife crisis?"
  ],




  "Random": [] // Initialize with empty array
};

// After defining all other categories
DILEMMAS.Random = [
  ...DILEMMAS.Gross,
  ...DILEMMAS["Sci-Fi"],
  ...DILEMMAS["Philosophical"],
  ...DILEMMAS["Fantasy"],
  ...DILEMMAS["Technology"],
  ...DILEMMAS["Sports"],
  ...DILEMMAS["Motherhood"],
  ...DILEMMAS["Lifestyle"],
  ...DILEMMAS["Music"],
  ...DILEMMAS["Movies"],
  ...DILEMMAS["Decision"],
  ...DILEMMAS["Intimacy"],
  ...DILEMMAS["Relationship"],
  ...DILEMMAS["Marriage"]
  // ... combine all other categories
];

export const EXPLANATIONS: Record<Category, string[]> = {
  // ... other categories ...

 "Gross": [
    "💩 Legendary grossness! The trash can salutes you!",
    "🤢 Pathogen resistance level: Maximum!",
    "🚽 Plunger salesperson of the year!",
    "🤮 Even bacteria are filing complaints!",
    "🧻 Toilet paper companies love this choice!",
    "🦠 CDC tracking your location...",
    "🚫 Sanitation workers on strike because of you!",
    "🧫 Lab experiment gone terribly right!",
    "💀 Morticians taking notes...",
    "🤢 You've invented new biohazard levels!"
  ],

  "Sci-Fi": [
    "🚀 Warp drive engaged...to awkwardness sector!",
    "👽 First contact protocol: Failed spectacularly!",
    "🤖 Robot overlords taking notes...",
    "🌌 Space-time continuum: Ruined!",
    "👾 Alien stand-up comedy material acquired!",
    "🔭 NASA wants their equipment back!",
    "🛸 UFOs avoiding your area now!",
    "🌠 Shooting star just changed course!",
    "🚨 Galactic federation alert issued!",
    "⚡ You broke the future-past continuum!"
  ],

  "Philosophical": [
    "🤔 Socrates just facepalmed in afterlife!",
    "📚 Philosophy textbooks rewriting...",
    "💡 Enlightenment achieved...then immediately lost!",
    "🌌 Existential crisis level: Cosmic!",
    "🧠 Brain.exe has stopped working!",
    "📜 Ancient philosophers are judging you!",
    "⚖️ Moral compass spinning wildly!",
    "🕳️ Rabbit hole depth: Infinite!",
    "🎓 Philosophy professor quit because of you!",
    "🌀 Created 10 new paradoxes!"
  ],

  "Fantasy": [
    "🐉 Dragon union filing complaint!",
    "🧙♂️ Wizards' council convening emergency meeting!",
    "🦄 Unicorn herd distancing from you!",
    "🏰 Castle walls developing cracks!",
    "🧚♀️ Fairies organizing intervention!",
    "⚔️ Hero's journey cancelled mid-quest!",
    "🧌 Trolls think you're too extreme!",
    "🔮 Crystal ball cracked from visions!",
    "🛡️ Knights templar updating vows!",
    "🍄 Magical mushrooms refusing growth!"
  ],

  "Technology": [
    "🤖 Welcome to the robot uprising!",
    "💾 Backing up to floppy disks...",
    "📱 Your digital footprint grew tentacles!",
    "🖨️ Error 404: Sanity not found!",
    "🌐 Internet history declared biohazard!",
    "💻 Hackers stealing your bad ideas!",
    "🔌 Unplugging recommended forever!",
    "🛰️ Satellite avoiding your location!",
    "📡 Wi-Fi signal running away!",
    "⚠️ Terms of service violated...existentially!"
  ],

  "Sports": [
    "🏆 Trophy unlocked: Chaotic athlete!",
    "🤸♂️ Olympic committee concerned...",
    "🥇 Gold medal in questionable choices!",
    "🏀 The ball's in someone else's court!",
    "🥊 Referee whistle broken!",
    "🤼♂️ Opponents requesting mercy rule!",
    "🚑 Sports medics on standby!",
    "📣 Announcer lost for words!",
    "🎽 Uniform violation detected!",
    "🏟️ Stadium evacuating...again!"
  ],

  "Motherhood": [
    "👶 Parenting level: Expert survivalist!",
    "🍼 Formula for chaos perfected!",
    "🧸 Stuffed animal rebellion incoming!",
    "🚼 Diaper genie regrets everything!",
    "🖍️ Crayon conglomerate sponsoring you!",
    "🍕 Pizza delivery knows your cry!",
    "📚 Parenting books burning!",
    "🚸 Playground legend status achieved!",
    "🧦 Sock gnomes filing restraining order!",
    "🍷 Wine moms adopting you!"
  ],

  "Lifestyle": [
    "👑 Pretentiousness level: Royal!",
    "🛋️ IKEA instructions make more sense!",
    "🍷 Basic white girl level: Expert!",
    "🕶️ Hipster cred revoked!",
    "🧘♀️ Zen master status revoked!",
    "🎉 FOMO epidemic patient zero!",
    "📸 Instagram reality distortion field active!",
    "🛍️ Consumerism just peaked!",
    "🍃 Minimalism failed spectacularly!",
    "🏡 HGTV wants their set back!"
  ],

  "Music": [
    "🎵 Beethoven rolling in grave...again!",
    "🎤 Auto-tune begging for mercy!",
    "🎧 Eardrums filing for divorce!",
    "🎸 Rock gods facepalming!",
    "🎹 Piano keys running away!",
    "🥁 Drumsticks spontaneously combusting!",
    "🎤 Karaoke ban incoming!",
    "🎶 Grammy eligibility revoked!",
    "🎵 Billboard chart disaster!",
    "🎧 Noise cancellation failed!"
  ],

  "Movies": [
    "🎥 Hitchcock spinning in grave!",
    "🍿 Netflix cancelling your life!",
    "🎬 Oscar voters crying!",
    "📽️ Projector melting film!",
    "🎭 Drama llama award winner!",
    "📺 Nielsen ratings plummeting!",
    "🍅 Rotten Tomatoes score: -100%!",
    "🎞️ Film reel spontaneously editing!",
    "🌟 Method acting gone too far!",
    "🎭 Fourth wall obliterated!"
  ],

  "Decision": [
    "⚖️ Scales of justice broken!",
    "🤷♂️ Magic 8-Ball confused!",
    "🎲 Dice rolling away!",
    "🔮 Crystal ball fogged!",
    "📜 Decision scrolls burning!",
    "🔄 Paradox generator activated!",
    "🧠 Analysis paralysis achieved!",
    "⏳ Time continuum disrupted!",
    "📉 Stock market of bad choices!",
    "🚦 Life GPS recalculating!"
  ],

  "Intimacy": [
    "💔 Heart emoji crying!",
    "🔥 Third-degree awkward burn!",
    "🚫 TMI alarm sounding!",
    "🛏️ Mattress tag officially removed!",
    "🔞 Content warning expanded!",
    "💔 Exes cheering your choice!",
    "💘 Cupid arrow misfired!",
    "💑 Romance novels rewritten!",
    "🚪 Awkward exits multiplied!",
    "💔 Heart-shaped hole in wall!"
  ],

  "Relationship": [
    "💔 Couples therapist retiring!",
    "❤️‍🔥 Love languages scrambled!",
    "💌 Hallmark card revoked!",
    "💔 Romeo & Juliet cringing!",
    "🚪 Slamming door symphony!",
    "💘 Love potion expired!",
    "💔 Dating apps swiping left!",
    "❤️ Valentine's Day cancelled!",
    "💔 Rom-com genre dying!",
    "💑 PDA police alert!"
  ],

  "Marriage": [
    "💒 Divorce lawyers cheering!",
    "💍 Ring bearer fleeing!",
    "🍰 Wedding cake collapsing!",
    "👰♀️ Veil of tears real!",
    "🤵♂️ Tuxedo rental denied!",
    "💐 Bouquet catching fire!",
    "📜 Vows erased permanently!",
    "💔 Honeymoon destination closed!",
    "👫 Couple goals failed!",
    "💘 Marriage certificate shredding!"
  ],







  "Random": [] // Initialize with empty array
};

EXPLANATIONS.Random = [
  // ... random explanations ...

    
    "🎲 Universe dice rolled!",
    "🌀 Multiverse damaged!",
    "🎯 Probability matrix scrambled!",
    "🔀 Randomizer exploded!",
    "🎱 Magic 8-Ball broken!",
    "📦 Pandora's box opened!",
    "🎰 Jackpot of chaos!",
    "🔮 Crystal ball shattered!",
    "🎲 Snake eyes of fate!",
    "🌪️ Tornado of randomness!"
  
];