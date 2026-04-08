// ══════════════════════════════════════════════════════════
// DONNÉES SUÉDOISES
// ══════════════════════════════════════════════════════════

const VOCAB = [

  // 🌿 Nature
  { q: 'sten', a: '🪨 pierre / rocher', hint: '/steːn/', ex: 'En stor sten vid vägen.', cat: 'Nature' },
  { q: 'blomma', a: '🌸 fleur', hint: '/ˈblɔmːa/', ex: 'Blommorna blommar på våren.', cat: 'Nature' },
  { q: 'träd', a: '🌳 arbre', hint: '/trɛːd/', ex: 'Trädet är gammalt.', cat: 'Nature' },
  { q: 'gräs', a: '🌿 herbe / gazon', hint: '/ɡrɛːs/', ex: 'Gräset är grönt.', cat: 'Nature' },
  { q: 'sand', a: '🏖️ sable', hint: '/sand/', ex: 'Sanden är varm.', cat: 'Nature' },
  { q: 'is', a: '🧊 glace', hint: '/iːs/', ex: 'Isen är hal.', cat: 'Nature' },
  { q: 'regn', a: '🌧️ pluie', hint: '/rɛŋn/', ex: 'Det regnar idag.', cat: 'Nature' },
  { q: 'vind', a: '💨 vent', hint: '/vɪnd/', ex: 'Det blåser mycket idag.', cat: 'Nature' },
  { q: 'moln', a: '☁️ nuage', hint: '/muːln/', ex: 'Molnen är mörka.', cat: 'Nature' },
  { q: 'åska', a: '⛈️ orage / tonnerre', hint: '/ˈɔska/', ex: 'Det åskar ute.', cat: 'Nature' },

  // 🐻 Animaux
  { q: 'hund', a: '🐶 chien', hint: '/hɵnd/', ex: 'Min hund heter Max.', cat: 'Animaux' },
  { q: 'katt', a: '🐱 chat', hint: '/katː/', ex: 'Katten sover hela dagen.', cat: 'Animaux' },
  { q: 'häst', a: '🐴 cheval', hint: '/hɛst/', ex: 'Hon rider på hästen.', cat: 'Animaux' },
  { q: 'ko', a: '🐄 vache', hint: '/kuː/', ex: 'Kon ger mjölk.', cat: 'Animaux' },
  { q: 'fågel', a: '🐦 oiseau', hint: '/ˈfoːɡɛl/', ex: 'Fåglarna sjunger på morgonen.', cat: 'Animaux' },
  { q: 'fisk', a: '🐟 poisson', hint: '/fɪsk/', ex: 'Vi fiskar i sjön.', cat: 'Animaux' },
  { q: 'kanin', a: '🐰 lapin', hint: '/kaˈniːn/', ex: 'Barnet har en kanin.', cat: 'Animaux' },
  { q: 'uggla', a: '🦉 hibou / chouette', hint: '/ˈɵɡla/', ex: 'Ugglan flyger på natten.', cat: 'Animaux' },
  { q: 'säl', a: '🦭 phoque', hint: '/sɛːl/', ex: 'Sälen simmar i havet.', cat: 'Animaux' },

  // 🗓️ Saisons & temps
  { q: 'alltid', a: '🔄 toujours', hint: '/ˈaltɪd/', ex: 'Han är alltid glad.', cat: 'Saisons' },
  { q: 'aldrig', a: '🚫 jamais', hint: '/ˈaldrɪ/', ex: 'Jag dricker aldrig alkohol.', cat: 'Saisons' },
  { q: 'ibland', a: '🔁 parfois', hint: '/ɪˈbland/', ex: 'Ibland regnar det på sommaren.', cat: 'Saisons' },
  { q: 'måndag', a: '📆 lundi', hint: '/ˈmonˌdaːɡ/', ex: 'Vi börjar jobba på måndag.', cat: 'Saisons' },
  { q: 'tisdag', a: '📆 mardi', hint: '/ˈtɪsˌdaːɡ/', ex: 'Vi möts på tisdag.', cat: 'Saisons' },
  { q: 'onsdag', a: '📆 mercredi', hint: '/ˈɔnsˌdaːɡ/', ex: 'Onsdag är mitten av veckan.', cat: 'Saisons' },
  { q: 'torsdag', a: '📆 jeudi', hint: '/ˈtɔʂˌdaːɡ/', ex: 'Torsdag kväll har vi fest.', cat: 'Saisons' },
  { q: 'fredag', a: '📆 vendredi', hint: '/ˈfreːˌdaːɡ/', ex: 'Fredag är bästa dagen!', cat: 'Saisons' },
  { q: 'lördag', a: '📆 samedi', hint: '/ˈlœːˌdaːɡ/', ex: 'På lördag städar vi.', cat: 'Saisons' },
  { q: 'söndag', a: '📆 dimanche', hint: '/ˈsœnˌdaːɡ/', ex: 'Söndag är vilodagen.', cat: 'Saisons' },

  // 🍽️ Nourriture
  { q: 'bröd', a: '🍞 pain', hint: '/brøːd/', ex: 'Vi äter bröd till frukost.', cat: 'Nourriture' },
  { q: 'ost', a: '🧀 fromage', hint: '/uːst/', ex: 'Ost på mackan.', cat: 'Nourriture' },
  { q: 'ägg', a: '🥚 œuf', hint: '/ɛɡː/', ex: 'Vi äter ägg till frukost.', cat: 'Nourriture' },
  { q: 'kyckling', a: '🍗 poulet', hint: '/ˈɕʏklɪŋ/', ex: 'Kyckling med ris.', cat: 'Nourriture' },
  { q: 'potatis', a: '🥔 pomme de terre', hint: '/pɔˈtaːtɪs/', ex: 'Potatis med smör.', cat: 'Nourriture' },
  { q: 'tomat', a: '🍅 tomate', hint: '/tɔˈmaːt/', ex: 'En röd tomat.', cat: 'Nourriture' },
  { q: 'gurka', a: '🥒 concombre', hint: '/ˈɡɵrka/', ex: 'Gurka i salladen.', cat: 'Nourriture' },
  { q: 'äpple', a: '🍎 pomme', hint: '/ˈɛpːlɛ/', ex: 'Ett rött äpple.', cat: 'Nourriture' },
  { q: 'banan', a: '🍌 banane', hint: '/baˈnaːn/', ex: 'En gul banan.', cat: 'Nourriture' },
  { q: 'jordgubbe', a: '🍓 fraise', hint: '/ˈjuːdˌɡɵbɛ/', ex: 'Jordgubbar på sommaren!', cat: 'Nourriture' },
  { q: 'kaffe', a: '☕ café', hint: '/ˈkafːɛ/', ex: 'En kopp kaffe, tack.', cat: 'Nourriture' },
  { q: 'te', a: '🍵 thé', hint: '/teː/', ex: 'Jag dricker te på kvällen.', cat: 'Nourriture' },
  { q: 'juice', a: '🧃 jus', hint: '/jʉːs/', ex: 'Ett glas apelsinjuice.', cat: 'Nourriture' },
  { q: 'glass', a: '🍦 glace (dessert)', hint: '/ɡlas/', ex: 'En glass i solen!', cat: 'Nourriture' },
  { q: 'tårta', a: '🎂 gâteau', hint: '/ˈtoːrta/', ex: 'En tårta till kalaset.', cat: 'Nourriture' },
  { q: 'choklad', a: '🍫 chocolat', hint: '/ɧɔˈklaːd/', ex: 'Mörk choklad är gott.', cat: 'Nourriture' },

  // 👨‍👩‍👧 Famille
  { q: 'syster', a: '👧 sœur', hint: '/ˈsʏstɛr/', ex: 'Min syster bor i Göteborg.', cat: 'Famille' },
  { q: 'bror', a: '👦 frère', hint: '/bruːr/', ex: 'Min bror är äldre än jag.', cat: 'Famille' },
  { q: 'morfar', a: '👴 grand-père (maternel)', hint: '/ˈmuːrˌfar/', ex: 'Morfar berättar sagor.', cat: 'Famille' },
  { q: 'mormor', a: '👵 grand-mère (maternelle)', hint: '/ˈmuːrˌmuːr/', ex: 'Mormor bakar kanelbullar.', cat: 'Famille' },
  { q: 'farfar', a: '👴 grand-père (paternel)', hint: '/ˈfarˌfar/', ex: 'Farfar fiskar varje dag.', cat: 'Famille' },
  { q: 'farmor', a: '👵 grand-mère (paternelle)', hint: '/ˈfarˌmuːr/', ex: 'Farmor stickar.', cat: 'Famille' },
  { q: 'farbror', a: '👨 oncle', hint: '/ˈfarˌbruːr/', ex: 'Farbror kommer på söndag.', cat: 'Famille' },
  { q: 'faster', a: '👩 tante (côté père)', hint: '/ˈfastɛr/', ex: 'Faster bor i Malmö.', cat: 'Famille' },
  { q: 'kusin', a: '🧑 cousin(e)', hint: '/kʉˈsiːn/', ex: 'Min kusin är rolig.', cat: 'Famille' },
  { q: 'bebis', a: '👶 bébé', hint: '/ˈbeːbɪs/', ex: 'Bebisen sover.', cat: 'Famille' },

  // 🏙️ Lieux & transport
  { q: 'sjukhus', a: '🏥 hôpital', hint: '/ˈɧʉːkˌhʉːs/', ex: 'Sjukhuset är stort.', cat: 'Lieux' },
  { q: 'apotek', a: '💊 pharmacie', hint: '/apɔˈteːk/', ex: 'Apoteket är öppet.', cat: 'Lieux' },
  { q: 'bibliotek', a: '📚 bibliothèque', hint: '/bɪblɪɔˈteːk/', ex: 'Jag lånar böcker på biblioteket.', cat: 'Lieux' },
  { q: 'restaurang', a: '🍽️ restaurant', hint: '/rɛstɔˈraŋ/', ex: 'Vi äter på restaurang.', cat: 'Lieux' },
  { q: 'hotell', a: '🏨 hôtel', hint: '/hɔˈtɛlː/', ex: 'Vi bor på hotell.', cat: 'Lieux' },
  { q: 'flygplats', a: '✈️ aéroport', hint: '/ˈflyːɡˌplats/', ex: 'Flygplatsen är långt bort.', cat: 'Lieux' },
  { q: 'hamn', a: '⚓ port', hint: '/hamn/', ex: 'Färjan avgår från hamnen.', cat: 'Lieux' },
  { q: 'kyrka', a: '⛪ église', hint: '/ˈɕʏrka/', ex: 'Kyrkan är gammal.', cat: 'Lieux' },
  { q: 'park', a: '🌳 parc', hint: '/park/', ex: 'Vi promenerar i parken.', cat: 'Lieux' },
  { q: 'torg', a: '🏛️ place (publique)', hint: '/tɔrj/', ex: 'Marknaden är på torget.', cat: 'Lieux' },
  { q: 'buss', a: '🚌 bus', hint: '/bɵs/', ex: 'Vi tar bussen till centrum.', cat: 'Lieux' },
  { q: 'tåg', a: '🚂 train', hint: '/toːɡ/', ex: 'Tåget avgår kl. 10.', cat: 'Lieux' },
  { q: 'bil', a: '🚗 voiture', hint: '/biːl/', ex: 'Bilen är röd.', cat: 'Lieux' },
  { q: 'cykel', a: '🚲 vélo', hint: '/ˈsʏkɛl/', ex: 'Jag cyklar till jobbet.', cat: 'Lieux' },
  { q: 'båt', a: '⛵ bateau', hint: '/boːt/', ex: 'Vi åker båt till ön.', cat: 'Lieux' },

  // 🎨 Couleurs
  { q: 'röd', a: '🔴 rouge', hint: '/røːd/', ex: 'En röd bil.', cat: 'Couleurs' },
  { q: 'blå', a: '🔵 bleu(e)', hint: '/bloː/', ex: 'Himlen är blå.', cat: 'Couleurs' },
  { q: 'grön', a: '🟢 vert(e)', hint: '/ɡrøːn/', ex: 'Gräset är grönt.', cat: 'Couleurs' },
  { q: 'gul', a: '🟡 jaune', hint: '/jʉːl/', ex: 'Solen är gul.', cat: 'Couleurs' },
  { q: 'svart', a: '⚫ noir(e)', hint: '/svart/', ex: 'En svart katt.', cat: 'Couleurs' },
  { q: 'vit', a: '⚪ blanc(he)', hint: '/viːt/', ex: 'Snön är vit.', cat: 'Couleurs' },
  { q: 'orange', a: '🟠 orange', hint: '/ɔˈranɧ/', ex: 'En orange apelsin.', cat: 'Couleurs' },
  { q: 'rosa', a: '🌸 rose', hint: '/ˈruːsa/', ex: 'En rosa blomma.', cat: 'Couleurs' },
  { q: 'lila', a: '💜 violet(te)', hint: '/ˈliːla/', ex: 'En lila jacka.', cat: 'Couleurs' },
  { q: 'brun', a: '🟤 brun(e)', hint: '/brʉːn/', ex: 'Björnen är brun.', cat: 'Couleurs' },
  { q: 'grå', a: '🩶 gris(e)', hint: '/ɡroː/', ex: 'En grå himmel.', cat: 'Couleurs' },

  // 🔢 Chiffres
  { q: 'ett', a: '1️⃣ un / une', hint: '/ɛtː/', ex: 'Jag har ett barn.', cat: 'Chiffres' },
  { q: 'två', a: '2️⃣ deux', hint: '/tvoː/', ex: 'Två kaffe, tack!', cat: 'Chiffres' },
  { q: 'tre', a: '3️⃣ trois', hint: '/treː/', ex: 'Tre dagar kvar.', cat: 'Chiffres' },
  { q: 'fyra', a: '4️⃣ quatre', hint: '/ˈfʏːra/', ex: 'Fyra årstider.', cat: 'Chiffres' },
  { q: 'fem', a: '5️⃣ cinq', hint: '/fɛm/', ex: 'Fem minuter.', cat: 'Chiffres' },
  { q: 'sex', a: '6️⃣ six', hint: '/sɛks/', ex: 'Sex ägg.', cat: 'Chiffres' },
  { q: 'sju', a: '7️⃣ sept', hint: '/ɧʉː/', ex: 'Sju dagar i veckan.', cat: 'Chiffres' },
  { q: 'åtta', a: '8️⃣ huit', hint: '/ˈɔtːa/', ex: 'Åtta timmar sömn.', cat: 'Chiffres' },
  { q: 'nio', a: '9️⃣ neuf', hint: '/ˈniːɔ/', ex: 'Nio månader.', cat: 'Chiffres' },
  { q: 'tio', a: '🔟 dix', hint: '/ˈtiːɔ/', ex: 'Tio kronor.', cat: 'Chiffres' },
  { q: 'tjugo', a: '2️⃣0️⃣ vingt', hint: '/ˈɧʉːɡɔ/', ex: 'Tjugo år gammal.', cat: 'Chiffres' },
  { q: 'hundra', a: '💯 cent', hint: '/ˈhɵndra/', ex: 'Hundra kronor.', cat: 'Chiffres' },

  // 😊 Émotions & états
  { q: 'ledsen', a: '😢 triste', hint: '/ˈleːdsɛn/', ex: 'Varför är du ledsen?', cat: 'Émotions' },
  { q: 'arg', a: '😠 en colère', hint: '/arj/', ex: 'Han är arg.', cat: 'Émotions' },
  { q: 'rädd', a: '😨 effrayé(e)', hint: '/rɛdː/', ex: 'Hon är rädd för mörkret.', cat: 'Émotions' },
  { q: 'förvånad', a: '😲 surpris(e)', hint: '/fœrˈvoːnad/', ex: 'Jag är förvånad!', cat: 'Émotions' },
  { q: 'hungrig', a: '🍽️ affamé(e)', hint: '/ˈhɵŋrɪɡ/', ex: 'Jag är hungrig.', cat: 'Émotions' },
  { q: 'törstig', a: '🥤 assoiffé(e)', hint: '/ˈtœʂtɪɡ/', ex: 'Jag är törstig.', cat: 'Émotions' },
  { q: 'sjuk', a: '🤒 malade', hint: '/ɧʉːk/', ex: 'Jag är sjuk idag.', cat: 'Émotions' },
  { q: 'frisk', a: '💪 en bonne santé', hint: '/frɪsk/', ex: 'Jag är frisk nu.', cat: 'Émotions' },
  { q: 'stressad', a: '😰 stressé(e)', hint: '/ˈstrɛsad/', ex: 'Jag är stressad på jobbet.', cat: 'Émotions' },
  { q: 'nöjd', a: '😌 satisfait(e)', hint: '/nøjd/', ex: 'Jag är nöjd med resultatet.', cat: 'Émotions' },

  // 👗 Vêtements
  { q: 'jacka', a: '🧥 veste / manteau', hint: '/ˈjakːa/', ex: 'Ta på dig jackan!', cat: 'Vêtements' },
  { q: 'tröja', a: '👕 pull / t-shirt', hint: '/ˈtrøːja/', ex: 'En varm tröja.', cat: 'Vêtements' },
  { q: 'byxor', a: '👖 pantalon', hint: '/ˈbʏksɔr/', ex: 'Blå byxor.', cat: 'Vêtements' },
  { q: 'kjol', a: '👗 jupe', hint: '/ɕuːl/', ex: 'En röd kjol.', cat: 'Vêtements' },
  { q: 'skor', a: '👟 chaussures', hint: '/skuːr/', ex: 'Nya skor.', cat: 'Vêtements' },

  // 💬 Expressions
  { q: 'God kväll', a: '🌆 Bonsoir', hint: '/ɡuːd kvɛlː/', ex: 'God kväll! Hur är det?', cat: 'Expressions' },
  { q: 'Självklart', a: '💯 Bien sûr', hint: '/ˈɧɛlvˌklarːt/', ex: 'Självklart! Det är inga problem.', cat: 'Expressions' },

  // 🔤 Verbes
  { q: 'äta', a: '🍽️ manger', hint: '/ˈɛːta/', ex: 'Vi äter middag klockan sex.', cat: 'Verbes' },
  { q: 'dricka', a: '🥤 boire', hint: '/ˈdrɪkːa/', ex: 'Jag dricker kaffe varje morgon.', cat: 'Verbes' },
  { q: 'sova', a: '😴 dormir', hint: '/ˈsuːva/', ex: 'Hon sover åtta timmar varje natt.', cat: 'Verbes' },
  { q: 'gå', a: '🚶 aller / marcher', hint: '/ɡoː/', ex: 'Jag går till jobbet varje dag.', cat: 'Verbes' },
  { q: 'springa', a: '🏃 courir', hint: '/ˈsprɪŋa/', ex: 'Han springer i parken på morgonen.', cat: 'Verbes' },
  { q: 'läsa', a: '📖 lire', hint: '/ˈlɛːsa/', ex: 'Jag läser en bok varje kväll.', cat: 'Verbes' },
  { q: 'skriva', a: '✍️ écrire', hint: '/ˈskriːva/', ex: 'Hon skriver ett brev till sin vän.', cat: 'Verbes' },
  { q: 'tala', a: '🗣️ parler', hint: '/ˈtaːla/', ex: 'De talar svenska med varandra.', cat: 'Verbes' },
  { q: 'lyssna', a: '👂 écouter', hint: '/ˈlʏsːna/', ex: 'Lyssna noga på läraren!', cat: 'Verbes' },
  { q: 'titta', a: '👀 regarder', hint: '/ˈtɪtːa/', ex: 'Vi tittar på film ikväll.', cat: 'Verbes' },
  { q: 'arbeta', a: '💼 travailler', hint: '/arˈbeːta/', ex: 'Jag arbetar på ett kontor.', cat: 'Verbes' },
  { q: 'studera', a: '📚 étudier', hint: '/stʉˈdeːra/', ex: 'Hon studerar medicin i Uppsala.', cat: 'Verbes' },
  { q: 'köpa', a: '🛍️ acheter', hint: '/ˈɕøːpa/', ex: 'Jag ska köpa mat imorgon.', cat: 'Verbes' },
  { q: 'sälja', a: '💰 vendre', hint: '/ˈsɛlja/', ex: 'Han säljer sin gamla bil.', cat: 'Verbes' },
  { q: 'hjälpa', a: '🤝 aider', hint: '/ˈjɛlpa/', ex: 'Kan du hjälpa mig?', cat: 'Verbes' },
  { q: 'förstå', a: '🧠 comprendre', hint: '/fœˈʂtoː/', ex: 'Jag förstår inte det här ordet.', cat: 'Verbes' },
  { q: 'veta', a: '💡 savoir', hint: '/ˈveːta/', ex: 'Vet du vad klockan är?', cat: 'Verbes' },
  { q: 'tänka', a: '💭 penser', hint: '/ˈtɛŋka/', ex: 'Jag tänker på dig.', cat: 'Verbes' },
  { q: 'känna', a: '❤️ sentir / connaître', hint: '/ˈɕɛnːa/', ex: 'Känner du Peter?', cat: 'Verbes' },
  { q: 'älska', a: '💕 aimer (fort)', hint: '/ˈɛlska/', ex: 'Jag älskar dig!', cat: 'Verbes' },
  { q: 'tycka om', a: '😊 aimer (apprécier)', hint: '/ˈtʏkːa ɔm/', ex: 'Jag tycker om svensk musik.', cat: 'Verbes' },
  { q: 'vilja', a: '🙋 vouloir', hint: '/ˈvɪlja/', ex: 'Vill du ha kaffe?', cat: 'Verbes' },
  { q: 'kunna', a: '💪 pouvoir / savoir faire', hint: '/ˈkɵnːa/', ex: 'Kan du simma?', cat: 'Verbes' },
  { q: 'behöva', a: '📌 avoir besoin de', hint: '/bɛˈhøːva/', ex: 'Jag behöver sova mer.', cat: 'Verbes' },
  { q: 'komma', a: '🚪 venir / arriver', hint: '/ˈkɔmːa/', ex: 'När kommer du hem?', cat: 'Verbes' },
  { q: 'åka', a: '🚗 partir / voyager', hint: '/ˈoːka/', ex: 'Vi åker till Norge i sommar.', cat: 'Verbes' },
  { q: 'stanna', a: '⏸️ rester / s\'arrêter', hint: '/ˈstanːa/', ex: 'Stanna här!', cat: 'Verbes' },
  { q: 'öppna', a: '🔓 ouvrir', hint: '/ˈœpːna/', ex: 'Öppna dörren, tack.', cat: 'Verbes' },
  { q: 'stänga', a: '🔒 fermer', hint: '/ˈstɛŋa/', ex: 'Stäng fönstret, det är kallt!', cat: 'Verbes' },
  { q: 'ge', a: '🎁 donner', hint: '/jeː/', ex: 'Han gav mig en blomma.', cat: 'Verbes' },
  { q: 'ta', a: '✋ prendre', hint: '/taː/', ex: 'Ta det lugnt!', cat: 'Verbes' },
  { q: 'hitta', a: '🔍 trouver', hint: '/ˈhɪtːa/', ex: 'Jag kan inte hitta mina nycklar.', cat: 'Verbes' },
  { q: 'börja', a: '🚀 commencer', hint: '/ˈbœrja/', ex: 'Vi börjar mötet klockan nio.', cat: 'Verbes' },
  { q: 'sluta', a: '🏁 finir / arrêter', hint: '/ˈslʉːta/', ex: 'När slutar du jobba idag?', cat: 'Verbes' },
];

const PHRASES = [

  // 👋 Présentations
  { q: 'Hur mår du?', a: '😊 Comment vas-tu ?', hint: '/hʉːr moːr dʉː/', words: ['Hur', 'mår', 'du?'], cat: 'Présentations' },
  { q: 'Jag mår bra, tack!', a: '😊 Je vais bien, merci !', hint: '/jaɡ moːr braː tak/', words: ['Jag', 'mår', 'bra,', 'tack!'], cat: 'Présentations' },
  { q: 'Jag kommer från Frankrike.', a: '🇫🇷 Je viens de France.', hint: '/jaɡ kɔmːɛr froːn ˈfrankˌriːkɛ/', words: ['Jag', 'kommer', 'från', 'Frankrike.'], cat: 'Présentations' },
  { q: 'Talar du svenska?', a: '🇸🇪 Tu parles suédois ?', hint: '/taːlar dʉː ˈsvɛnska/', words: ['Talar', 'du', 'svenska?'], cat: 'Présentations' },
  { q: 'Lite grann, tack.', a: '🤏 Un peu, merci.', hint: '/ˈliːtɛ ɡran tak/', words: ['Lite', 'grann,', 'tack.'], cat: 'Présentations' },
  { q: 'Hur gammal är du?', a: '🎂 Quel âge as-tu ?', hint: '/hʉːr ˈɡamːal ɛːr dʉː/', words: ['Hur', 'gammal', 'är', 'du?'], cat: 'Présentations' },
  { q: 'Vad jobbar du med?', a: '💼 Quel est ton métier ?', hint: '/vaːd ˈjɔbːar dʉː meːd/', words: ['Vad', 'jobbar', 'du', 'med?'], cat: 'Présentations' },
  { q: 'Kul att träffas!', a: '🤝 Ravi(e) de te rencontrer !', hint: '/kʉːl atː ˈtrɛfːas/', words: ['Kul', 'att', 'träffas!'], cat: 'Présentations' },
  { q: 'Vi ses snart!', a: '👋 À bientôt !', hint: '/viː seːs snart/', words: ['Vi', 'ses', 'snart!'], cat: 'Présentations' },

  // 🗣️ Communication
  { q: 'Jag förstår inte.', a: '🤷 Je ne comprends pas.', hint: '/jaɡ fœˈʂtoːr ˈɪntɛ/', words: ['Jag', 'förstår', 'inte.'], cat: 'Communication' },
  { q: 'Kan du upprepa?', a: '🔁 Peux-tu répéter ?', hint: '/kan dʉː ˈʉpːreːpa/', words: ['Kan', 'du', 'upprepa?'], cat: 'Communication' },
  { q: 'Kan du prata långsammare?', a: '🐢 Peux-tu parler plus lentement ?', hint: '/kan dʉː ˈpraːta ˈloŋˌsamːarɛ/', words: ['Kan', 'du', 'prata', 'långsammare?'], cat: 'Communication' },
  { q: 'Hur säger man det på svenska?', a: '🇸🇪 Comment dit-on ça en suédois ?', hint: '/hʉːr ˈsɛjɛr man deː poː ˈsvɛnska/', words: ['Hur', 'säger', 'man', 'det', 'på', 'svenska?'], cat: 'Communication' },

  // ✨ Expressions courantes
  { q: 'Norrsken är fantastiskt!', a: '🌌 Les aurores boréales sont fantastiques !', hint: '/ˈnɔʂˌɧeːn ɛːr fanˈtastɪʂt/', words: ['Norrsken', 'är', 'fantastiskt!'], cat: 'Expressions' },
  { q: 'God jul och gott nytt år!', a: '🎄 Joyeux Noël et bonne année !', hint: '/ɡuːd jʉːl ɔk ɡɔtː nʏtː oːr/', words: ['God', 'jul', 'och', 'gott', 'nytt', 'år!'], cat: 'Expressions' },
  { q: 'Välkommen till Sverige!', a: '🇸🇪 Bienvenue en Suède !', hint: '/vɛlˈkɔmːɛn tɪl ˈsvɛrjɛ/', words: ['Välkommen', 'till', 'Sverige!'], cat: 'Expressions' },
  { q: 'Sverige är ett vackert land.', a: '🏔️ La Suède est un beau pays.', hint: '/ˈsvɛrjɛ ɛːr ɛtː ˈvakːɛjt land/', words: ['Sverige', 'är', 'ett', 'vackert', 'land.'], cat: 'Expressions' },
  { q: 'Jag dricker kaffe varje dag.', a: '☕ Je bois du café tous les jours.', hint: '/jaɡ ˈdrɪkːɛr ˈkafːɛ ˈvarjɛ daːɡ/', words: ['Jag', 'dricker', 'kaffe', 'varje', 'dag.'], cat: 'Expressions' },
  { q: 'Ha en trevlig dag!', a: '☀️ Passe une bonne journée !', hint: '/haː ɛn ˈtreːvlɪɡ daːɡ/', words: ['Ha', 'en', 'trevlig', 'dag!'], cat: 'Expressions' },
  { q: 'Skål!', a: '🥂 Santé ! (toast)', hint: '/skoːl/', words: ['Skål!'], cat: 'Expressions' },
  { q: 'Smaklig måltid!', a: '🍽️ Bon appétit !', hint: '/ˈsmaːklɪɡ ˈmoːltɪd/', words: ['Smaklig', 'måltid!'], cat: 'Expressions' },
  { q: 'Lycka till!', a: '🍀 Bonne chance !', hint: '/ˈlʏkːa tɪl/', words: ['Lycka', 'till!'], cat: 'Expressions' },
  { q: 'Grattis!', a: '🎉 Félicitations !', hint: '/ˈɡratːɪs/', words: ['Grattis!'], cat: 'Expressions' },
  { q: 'Grattis på födelsedagen!', a: '🎂 Joyeux anniversaire !', hint: '/ˈɡratːɪs poː ˈføːdɛlsɛˌdaːɡɛn/', words: ['Grattis', 'på', 'födelsedagen!'], cat: 'Expressions' },
];

// Catégories dynamiques
const CATS_VOCAB = [...new Set(VOCAB.map(v => v.cat))];
const CATS_PHRASES = [...new Set(PHRASES.map(p => p.cat))];

const MODES = {
  vocab:{label:'Vocabulaire',data:VOCAB,hint:'Que signifie ce mot suédois ?'},
  phrases:{label:'Phrases',data:PHRASES,hint:'Que signifie cette phrase ?'},
  mixed:{label:'Mixte',data:[...VOCAB,...PHRASES],hint:'Vocabulaire ou phrases ?'},
  review:{label:'Révision',data:[],hint:'Rappel des erreurs passées'},
  // Catégories vocab
  ...Object.fromEntries(CATS_VOCAB.map(cat => [
    'cat_'+cat, {label:'📂 '+cat, data:VOCAB.filter(v=>v.cat===cat), hint:'Que signifie ce mot ?', isCat:true}
  ])),
  // Catégories phrases
  ...Object.fromEntries(CATS_PHRASES.map(cat => [
    'pcat_'+cat, {label:'💬 '+cat, data:PHRASES.filter(p=>p.cat===cat), hint:'Que signifie cette phrase ?', isCat:true}
  ]))
};

const TOTAL_Q=12;
let mode,questions,qIdx,score,lives,errors,answered,currentQ;
let soundEnabled=false,audioCtx=null;
let currentStreak=0,questionHistory=[];
let pendingMode='vocab',quizDirection='sv2fr';
let lastMode='vocab';

// ── MÉMOIRE ──────────────────────────────────────────────────────
function loadMem(){try{return JSON.parse(localStorage.getItem('sv_v1')||'{}')}catch(e){return{}}}
function saveMem(d){try{localStorage.setItem('sv_v1',JSON.stringify(d))}catch(e){}}
function recordResult(char,correct,qData){
  const m=loadMem();
  if(!m.chars)m.chars={};
  if(!m.chars[char])m.chars[char]={r:0,w:0};
  if(correct)m.chars[char].r++;else m.chars[char].w++;
  if(!m.total)m.total={r:0,w:0};
  if(correct)m.total.r++;else m.total.w++;
  if(!m.streak)m.streak=0;
  if(correct)m.streak++;else m.streak=0;
  if(!m.review)m.review=[];
  if(!correct){
    const ex=m.review.find(x=>x.q===char);
    if(ex)ex.fails=(ex.fails||0)+1;
    else if(qData)m.review.push({...qData,fails:1});
  }else{
    const ex=m.review.find(x=>x.q===char);
    if(ex){ex.ok=(ex.ok||0)+1;if(ex.ok>=2)m.review=m.review.filter(x=>x.q!==char);}
  }
  saveMem(m);
}
function getWeakChars(data,n){
  const m=loadMem();
  if(!m.chars)return shuffle([...data]).slice(0,n);
  return shuffle([...data]).sort((a,b)=>{
    const ca=m.chars[a.q]||{r:0,w:0},cb=m.chars[b.q]||{r:0,w:0};
    return(ca.r/(ca.r+ca.w+1))-(cb.r/(cb.r+cb.w+1));
  }).slice(0,n);
}
function updateMenuStats(){
  const m=loadMem();
  const s=m.streak||0;
  const sb=document.getElementById('streakBanner');
  if(s>=3){document.getElementById('streakCount').textContent=s;sb.classList.remove('hidden');}
  else sb.classList.add('hidden');
  const t=m.total||{r:0,w:0},tot=t.r+t.w;
  if(tot>0){
    const pct=Math.round(t.r/tot*100);
    document.getElementById('globalPct').textContent=pct+'%';
    document.getElementById('globalFill').style.width=pct+'%';
    document.getElementById('globalProgress').style.display='block';
  }
  const rev=(m.review||[]);
  const rc=document.getElementById('reviewCard');
  if(rev.length>0){rc.style.display='block';document.getElementById('reviewCount').textContent=rev.length+' mot(s) à revoir';}
  else rc.style.display='none';
  // Catégories
  const catEmojis={'Nature':'🌿','Animaux':'🐾','Saisons':'🗓️','Nourriture':'🍽️','Famille':'👨‍👩‍👧','Lieux':'🏙️','Couleurs':'🎨','Chiffres':'🔢','Émotions':'😀','Vêtements':'👗','Expressions':'💬','Présentations':'🙋','Communication':'🗣️'};
  const cg=document.getElementById('catGrid');if(!cg)return;cg.innerHTML='';
  CATS_VOCAB.forEach(cat=>{
    const btn=document.createElement('div');
    btn.className='mode-card';btn.style.cssText='padding:5px 4px;min-height:0;cursor:pointer';
    btn.innerHTML=`<span style="font-size:22px;display:block;margin-bottom:2px">${catEmojis[cat]||'📂'}</span><h3 style="font-size:13px;line-height:1.2">${cat}</h3><button class="learn-mini-btn">📖 Apprendre</button>`;
    btn.onclick=()=>chooseDirScreen('cat_'+cat);
    const learnBtn=btn.querySelector('.learn-mini-btn');
    learnBtn.addEventListener('click',function(e){e.stopPropagation();startLearn(cat);});
    cg.appendChild(btn);
  });
}

// ── AUDIO ────────────────────────────────────────────────────────
function getCtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}
function tone(f,t,d,v,dl=0){
  if(!soundEnabled)return;
  try{const c=getCtx(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=t;o.frequency.value=f;const ts=c.currentTime+dl;g.gain.setValueAtTime(0,ts);g.gain.linearRampToValueAtTime(v,ts+.02);g.gain.exponentialRampToValueAtTime(.001,ts+d);o.start(ts);o.stop(ts+d+.05);}catch(e){}
}
function playCorrect(){tone(523,'sine',.15,.28);tone(659,'sine',.15,.28,.1);tone(784,'sine',.3,.28,.2);}
function playCombo(){tone(880,'sine',.1,.3);tone(1046,'sine',.25,.35,.1);}
function playWrong(){tone(220,'sawtooth',.2,.2);tone(180,'sawtooth',.3,.2,.15);}
function playClick(){tone(600,'sine',.06,.12);}
function toggleSound(){
  soundEnabled=!soundEnabled;
  document.getElementById('soundToggle').textContent=soundEnabled?'🔊':'🔇';
}

// Détection plateforme
const _isAndroid = /android/i.test(navigator.userAgent);

// ── TTS : voix suédoise authentique ─────────────────────────────
let _ttsAudio = null;
const _ttsCache = {};
let _svVoice = null;
let _voicesLoaded = false;

// Pré-charger les voix disponibles au démarrage
function _loadVoices() {
  if (!window.speechSynthesis) return;
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    _svVoice = _pickSwedishVoice(voices);
    _voicesLoaded = true;
  }
}
function _pickSwedishVoice(voices) {
  // Priorité : voix sv-SE natives (pas "Google", plus authentiques sur desktop)
  const priority = [
    v => v.lang === 'sv-SE' && !v.name.includes('Google'),
    v => v.lang === 'sv' && !v.name.includes('Google'),
    v => v.lang === 'sv-SE',
    v => v.lang && v.lang.startsWith('sv'),
  ];
  for (const test of priority) {
    const found = voices.find(test);
    if (found) return found;
  }
  return null;
}
if (window.speechSynthesis) {
  _loadVoices();
  speechSynthesis.addEventListener('voiceschanged', () => { _loadVoices(); });
}

function _playAudio(url) {
  if (_ttsAudio) { _ttsAudio.pause(); _ttsAudio = null; }
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    _ttsAudio = audio;
    audio.volume = 1.0;
    audio.onended = resolve;
    audio.onerror = (e) => reject(new Error('Audio error'));
    audio.oncanplaythrough = () => {
      audio.play().then(resolve).catch(reject);
    };
    audio.src = url;
    audio.load();
  });
}

function _webSpeechSV(txt, rate=0.82) {
  if (!window.speechSynthesis) return Promise.reject();
  return new Promise((resolve, reject) => {
    speechSynthesis.cancel();
    const doSpeak = () => {
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = 'sv-SE';
      u.rate = rate;
      u.pitch = 1.0;
      const voice = _svVoice || _pickSwedishVoice(speechSynthesis.getVoices());
      if (voice) u.voice = voice;
      // Si aucune voix sv trouvée → rejeter pour qu'on ne prononce pas avec une voix fr
      if (!voice && !speechSynthesis.getVoices().some(v => v.lang && v.lang.startsWith('sv'))) {
        reject(new Error('no swedish voice'));
        return;
      }
      u.onend = resolve;
      u.onerror = reject;
      speechSynthesis.speak(u);
    };
    if (speechSynthesis.getVoices().length > 0) doSpeak();
    else speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true });
  });
}

// ── MP3 LOCAUX ──────────────────────────────────────────────────
// Placez vos MP3 dans un dossier audio/ à côté du fichier HTML
// ── DÉVERROUILLAGE AUDIO (autoplay policy) ───────────────────────
let _audioUnlocked = false;
async function _unlockAudio() {
  if (_audioUnlocked) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    await ctx.resume();
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
    _audioUnlocked = true;
  } catch(e) {}
}
document.addEventListener('click', _unlockAudio, { once: false });
document.addEventListener('touchstart', _unlockAudio, { once: false });

function _normalizeKey(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ').trim();
}

async function speak(txt) {
  if (!txt) return;
  await _unlockAudio();
  if (_ttsAudio) { _ttsAudio.pause(); _ttsAudio = null; }
  if (window.speechSynthesis) speechSynthesis.cancel();

  // PRIORITÉ 1 : correspondance exacte dans AUDIO_MAP
  if (AUDIO_MAP[txt]) {
    try { await _playAudio(AUDIO_MAP[txt]); return; } catch(e) { console.warn('base64 exact failed:', txt, e); }
  }

  // PRIORITÉ 2 : correspondance normalisée dans AUDIO_MAP
  var kl = _normalizeKey(txt);
  var mk = Object.keys(AUDIO_MAP);
  for (var _i = 0; _i < mk.length; _i++) {
    if (_normalizeKey(mk[_i]) === kl) {
      try { await _playAudio(AUDIO_MAP[mk[_i]]); return; } catch(e) { console.warn('base64 norm failed:', mk[_i], e); }
    }
  }

  // PRIORITÉ 3 : Google TTS (nécessite internet)
  var enc = encodeURIComponent(txt);
  var gUrls = [
    'https://translate.googleapis.com/translate_tts?ie=UTF-8&q=' + enc + '&tl=sv&client=gtx&ttsspeed=0.85',
    'https://translate.google.com/translate_tts?ie=UTF-8&q=' + enc + '&tl=sv-SE&client=gtx&ttsspeed=0.85'
  ];
  for (var _j = 0; _j < gUrls.length; _j++) {
    try { await _playAudio(gUrls[_j]); return; } catch(e) {}
  }

  // PRIORITÉ 4 : Web Speech API
  try { await _webSpeechSV(txt); return; } catch(e) {}
  if (window.speechSynthesis) {
    speechSynthesis.cancel();
    var _u = new SpeechSynthesisUtterance(txt);
    _u.lang = 'sv-SE'; _u.rate = 0.85;
    speechSynthesis.speak(_u);
  }
}

// ── SPEAK HELPER ─────────────────────────────────────────────────
function speakQ(qObj) {
  if (!qObj) return;
  speak(qObj.q);
}

// ── UTILITAIRES ──────────────────────────────────────────────────
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const g=document.querySelector('.game');
  if(g)g.scrollTop=0;
}
function goMenu(){showScreen('menuScreen');updateMenuStats();updateDefiMenuCard();}
function replayLast(){if(lastMode==='reconstruct')chooseReconstructDir();else if(lastMode==='dictee')chooseDicteeDir();else startGame(lastMode);}
function showCombo(t){const el=document.getElementById('comboFlash');el.textContent=t;el.classList.remove('show');void el.offsetWidth;el.classList.add('show');}

// ── MODE QUIZ ────────────────────────────────────────────────────
function chooseDirScreen(m){
  pendingMode=m;
  const labels={vocab:'Vocabulaire 📖',phrases:'Phrases 💬',mixed:'Mixte 🎲'};
  document.getElementById('dirTitle').textContent=labels[m]||'Choisir le sens';
  showScreen('dirScreen');
}
function startGame(m,dir){
  mode=m;lastMode=m;currentStreak=0;questionHistory=[];
  quizDirection=dir||'random';
  questions=getWeakChars(MODES[m].data,TOTAL_Q);
  questions=questions.map(q=>{
    let d;
    if(m==='phrases') d='sv2fr';
    else if(quizDirection==='random') d=Math.random()>.5?'sv2fr':'fr2sv';
    else d=quizDirection;
    return{...q,direction:d};
  });
  qIdx=0;score=0;lives=5;errors=[];answered=false;
  showScreen('quizScreen');
  const dirLabel=quizDirection==='sv2fr'?' → français':quizDirection==='fr2sv'?' → suédois':' ×2';
  document.getElementById('modeLbl').textContent=(MODES[m].label||m)+dirLabel;
  updateStreakUI();
  renderQuestion();
}
function startReview(){
  const m=loadMem();
  const rev=m.review||[];
  if(!rev.length){goMenu();return;}
  mode='review';lastMode='review';currentStreak=0;questionHistory=[];
  questions=shuffle([...rev]).slice(0,TOTAL_Q).map(q=>({...q,direction:Math.random()>.5?'sv2fr':'fr2sv'}));
  qIdx=0;score=0;lives=5;errors=[];answered=false;
  showScreen('quizScreen');
  document.getElementById('modeLbl').textContent='🔁 Révision';
  updateStreakUI();
  renderQuestion();
}
function renderLives(){
  const el=document.getElementById('livesDisplay');el.innerHTML='';
  for(let i=0;i<5;i++){const s=document.createElement('span');s.textContent=i<lives?'♥':'♡';s.style.color=i<lives?'var(--aurora-green)':'rgba(255,255,255,.2)';el.appendChild(s);}
}
function updateStreakUI(){
  const el=document.getElementById('streakDisplay'),num=document.getElementById('streakNum');
  if(currentStreak>=2){el.style.display='flex';num.textContent=currentStreak;el.classList.remove('fire');void el.offsetWidth;el.classList.add('fire');}
  else el.style.display='none';
}
function renderQuestion(){
  answered=false;
  const q=questions[qIdx];currentQ=q;
  const dir=q.direction||'sv2fr';
  document.getElementById('progressFill').style.width=Math.round(qIdx/TOTAL_Q*100)+'%';
  document.getElementById('scoreLbl').textContent=score+' pts';
  renderLives();
  const card=document.getElementById('charCard');
  card.classList.remove('flip-in');void card.offsetWidth;card.classList.add('flip-in');
  if(dir==='sv2fr'){
    document.getElementById('mainChar').style.fontSize='';
    document.getElementById('mainChar').textContent=q.q;
    document.getElementById('mainChar').style.fontSize=q.q.length>20?'16px':q.q.length>12?'18px':q.q.length>8?'20px':q.q.length>4?'22px':'24px';
    document.getElementById('charHint').textContent=q.hint||'';
    document.getElementById('examplePhrase').textContent=q.ex||'';
  }else{
    document.getElementById('mainChar').textContent=q.a;
    document.getElementById('mainChar').style.fontSize=q.a.length>15?'16px':q.a.length>12?'18px':q.a.length>6?'20px':'24px';
    document.getElementById('charHint').textContent='';
    document.getElementById('examplePhrase').textContent=q.ex||'';
  }
  document.getElementById('feedback').textContent='';document.getElementById('feedback').className='feedback';
  document.getElementById('nextBtn').className='next-btn';
  const modeData=mode==='review'?[...VOCAB,...PHRASES]:MODES[mode].data;
  let correctAnswer,opts;
  if(dir==='sv2fr'){
    correctAnswer=q.a;
    const allAns=modeData.map(x=>x.a);
    opts=shuffle([q.a,...shuffle(allAns.filter(a=>a!==q.a)).slice(0,3)]);
  }else{
    correctAnswer=q.q;
    const allQ=modeData.map(x=>x.q);
    opts=shuffle([q.q,...shuffle(allQ.filter(k=>k!==q.q)).slice(0,3)]);
  }
  const grid=document.getElementById('optionsGrid');grid.innerHTML='';
  opts.forEach(o=>{
    const b=document.createElement('button');b.className='opt';
    b.textContent=o;
    b.style.fontSize=o.length>20?'11px':o.length>10?'13px':'15px';
    b.onclick=()=>pick(b,o,correctAnswer,dir);
    grid.appendChild(b);
  });
}
function pick(btn,chosen,correct,dir){
  if(answered)return;answered=true;
  document.querySelectorAll('.opt').forEach(b=>{b.disabled=true;if(b.textContent===correct)b.classList.add('correct');});
  const q=questions[qIdx],fb=document.getElementById('feedback');
  const ok=chosen===correct;
  recordResult(q.q,ok,q);
  questionHistory.push(ok);
  if(ok){
    score+=10;btn.classList.add('correct');currentStreak++;updateStreakUI();
    if(currentStreak===3){fb.textContent='🔥 Série de 3 !';fb.className='feedback good';showCombo('🔥 ×3');playCombo();}
    else if(currentStreak===5){fb.textContent='⚡ Série de 5 !';fb.className='feedback good';showCombo('⚡ ×5');playCombo();}
    else if(currentStreak>5&&currentStreak%2===1){showCombo('❄️ ×'+currentStreak);fb.textContent='❄️ ×'+currentStreak+' !';fb.className='feedback good';playCombo();}
    else{fb.textContent=dir==='sv2fr'?`✓ ${q.q} = ${q.a}`:`✓ ${q.a} = ${q.q}`;fb.className='feedback good';playCorrect();}
  }else{
    btn.classList.add('wrong');lives--;currentStreak=0;updateStreakUI();
    errors.push({char:q.q,correct:q.a,hint:q.hint});
    fb.textContent=dir==='sv2fr'?`✗ ${q.q} = ${q.a}`:`✗ ${q.a} = ${q.q}`;fb.className='feedback bad';playWrong();
  }
  document.getElementById('scoreLbl').textContent=score+' pts';renderLives();
  // Révéler l'IPA après la réponse (utile en fr2sv)
  if(dir==='fr2sv') document.getElementById('charHint').textContent=q.hint||'';
  const nb=document.getElementById('nextBtn');
  nb.textContent=qIdx<TOTAL_Q-1&&lives>0?'Question suivante →':'Voir les résultats →';
  nb.className='next-btn show';
  speakQ(q);
  if(lives<=0)setTimeout(()=>showResults(false),600);
}
function nextQuestion(){qIdx++;if(qIdx>=TOTAL_Q||lives<=0){showResults(false);return;}renderQuestion();}

// ── RÉSULTATS ────────────────────────────────────────────────────
function showResults(isDraw){
  showScreen('resultsScreen');
  const s=score,maxS=TOTAL_Q*10;
  const errs=errors;
  const correctCount=questionHistory.filter(Boolean).length;
  const pct=Math.round(s/maxS*100);
  document.getElementById('finalScore').textContent=s;
  document.getElementById('finalTotal').textContent='/ '+maxS;
  document.getElementById('stCorrect').textContent=correctCount;
  document.getElementById('stWrong').textContent=errs.length;
  document.getElementById('stPct').textContent=pct+'%';
  let msg,sub,emo;
  if(pct>=90){msg='Utmärkt!';sub='Excellent ! Vous maîtrisez ce sujet.';emo='⭐';}
  else if(pct>=70){msg='Bra jobbat!';sub='Très bien ! Encore un peu de pratique.';emo='🌟';}
  else if(pct>=50){msg='Fortsätt!';sub='Pas mal ! Continuez à pratiquer.';emo='❄️';}
  else{msg='Öva mer!';sub='La pratique régulière est la clé.';emo='🇸🇪';}
  document.getElementById('resultEmoji').textContent=emo;
  document.getElementById('resultMsg').textContent=msg;
  document.getElementById('resultSub').textContent=sub;
  if(questionHistory.length>0){
    const bars=document.getElementById('perfBars');bars.innerHTML='';
    document.getElementById('perfChart').style.display='block';
    questionHistory.forEach((ok,i)=>{
      const b=document.createElement('div');b.className='perf-bar '+(ok?'ok':'ko');
      b.style.height='0';bars.appendChild(b);
      setTimeout(()=>{b.style.height=(ok?'100%':'40%');},i*55+300);
    });
  }else document.getElementById('perfChart').style.display='none';
  const wl=document.getElementById('wrongList');
  if(errs.length>0){
    let html='<h4>À revoir :</h4>';
    errs.slice(0,6).forEach(e=>{html+=`<div class="wrong-item"><span class="wrong-char">${e.char}</span><span class="wrong-ans">${e.correct}${e.hint?' · '+e.hint:''}<span class="review-tag">révision</span></span></div>`;});
    wl.innerHTML=html;
  }else wl.innerHTML='<p style="text-align:center;color:var(--aurora-green);font-size:13px;padding:.5rem 0">🎉 Aucune erreur !</p>';
  document.getElementById('replayBtn').textContent='Rejouer — '+(MODES[mode]&&MODES[mode].label||'');
}

// ── MODE RECONSTRUIRE ────────────────────────────────────────────
const RECONSTRUCT_Q=8;
let rQuestions,rQIdx,rScore,rErrors,rAnswered,rCurrentAnswer,rCurrentWords;

function chooseReconstructDir(){showScreen('reconstructDirScreen');}
function startReconstruct(dir){
  lastMode='reconstruct';
  const pool=PHRASES.filter(p=>p.words&&p.words.length>=2);
  rQuestions=shuffle([...pool]).slice(0,RECONSTRUCT_Q).map(q=>{
    // assign direction per question
    let d=dir;
    if(d==='random') d=Math.random()<0.5?'fr2sv':'sv2fr';
    return {...q,_dir:d};
  });
  rQIdx=0;rScore=0;rErrors=[];
  showScreen('reconstructScreen');
  renderReconstructQ();
}
function renderReconstructQ(){
  rAnswered=false;rCurrentAnswer=[];
  const q=rQuestions[rQIdx];
  const dir=q._dir;
  document.getElementById('rProgressFill').style.width=Math.round(rQIdx/RECONSTRUCT_Q*100)+'%';
  document.getElementById('rScoreLbl').textContent=rScore+' pts';
  document.getElementById('rLivesDisplay').innerHTML='<span style="font-size:13px;color:var(--text-muted)">'+(rQIdx+1)+' / '+RECONSTRUCT_Q+'</span>';
  document.getElementById('rFeedback').textContent='';document.getElementById('rFeedback').className='feedback';
  document.getElementById('rNextBtn').className='next-btn';
  document.getElementById('rCheckBtn').style.display='none';
  const hintEl=document.getElementById('rHint');hintEl.textContent='';hintEl.style.opacity='0';

  if(dir==='fr2sv'){
    // Show French, reconstruct Swedish (original mode)
    document.getElementById('rModeLbl').textContent='🧩 FR → SV';
    document.getElementById('rInstruction').textContent='Reconstituez la phrase en suédois :';
    document.getElementById('rTranslation').textContent=q.a;
    rCurrentWords=shuffle([...q.words]);
  } else {
    // Show Swedish, reconstruct French
    document.getElementById('rModeLbl').textContent='🧩 SV → FR';
    document.getElementById('rInstruction').textContent='Reconstituez la traduction en français :';
    document.getElementById('rTranslation').textContent=q.q;
    // Split French answer into words
    rCurrentWords=shuffle(q.a.split(' '));
  }
  renderReconstructUI();
}
function renderReconstructUI(){
  const q=rQuestions[rQIdx];
  const dir=q._dir;
  const targetWords=dir==='fr2sv'?q.words:q.a.split(' ');
  const slots=document.getElementById('reconstructSlots');slots.innerHTML='';
  if(rCurrentAnswer.length===0){
    const ph=document.createElement('span');ph.style.cssText='font-size:13px;color:var(--text-muted);font-style:italic';
    ph.textContent='Cliquez les mots pour former la phrase…';slots.appendChild(ph);
  }else{
    rCurrentAnswer.forEach((wordIdx,i)=>{
      const btn=document.createElement('button');btn.className='slot-word';
      btn.textContent=rCurrentWords[wordIdx];
      if(!rAnswered)btn.onclick=()=>removeReconstructWord(i);
      slots.appendChild(btn);
    });
  }
  const bank=document.getElementById('wordBank');bank.innerHTML='';
  rCurrentWords.forEach((word,i)=>{
    const btn=document.createElement('button');btn.className='bank-word';btn.textContent=word;
    if(rCurrentAnswer.includes(i)){btn.classList.add('used');}
    else if(!rAnswered){btn.onclick=()=>addReconstructWord(i);}
    bank.appendChild(btn);
  });
  const cb=document.getElementById('rCheckBtn');
  if(!rAnswered&&rCurrentAnswer.length===targetWords.length)cb.style.display='block';
  else cb.style.display='none';
}
function addReconstructWord(idx){if(rAnswered||rCurrentAnswer.includes(idx))return;rCurrentAnswer.push(idx);playClick();renderReconstructUI();}
function removeReconstructWord(ansIdx){if(rAnswered)return;rCurrentAnswer.splice(ansIdx,1);renderReconstructUI();}
function checkReconstruct(){
  if(rAnswered)return;
  const q=rQuestions[rQIdx];rAnswered=true;
  const dir=q._dir;
  const targetWords=dir==='fr2sv'?q.words:q.a.split(' ');
  document.getElementById('rCheckBtn').style.display='none';
  const built=rCurrentAnswer.map(i=>rCurrentWords[i]).join(' ');
  const correct=targetWords.join(' ');
  const fb=document.getElementById('rFeedback');
  if(built===correct){
    rScore+=10;
    fb.textContent=dir==='fr2sv'?'✨ Parfait ! '+q.q:'✨ Parfait ! '+q.a;
    fb.className='feedback good';playCorrect();
    document.querySelectorAll('.slot-word').forEach(el=>{el.style.background='linear-gradient(135deg,var(--aurora-green),#1e6a3a)';el.style.borderColor='#27ae60';});
  }else{
    rErrors.push({char:dir==='fr2sv'?q.a:q.q,correct:dir==='fr2sv'?q.q:q.a});
    fb.textContent='✗ Bonne réponse :';fb.className='feedback bad';
    if(dir==='fr2sv'){
      const hintEl=document.getElementById('rHint');hintEl.textContent=q.hint;hintEl.style.opacity='1';
    }
    const slots=document.getElementById('reconstructSlots');slots.innerHTML='';
    targetWords.forEach(w=>{
      const btn=document.createElement('span');btn.className='slot-word';
      btn.style.cssText='background:linear-gradient(135deg,var(--aurora-green),#1e6a3a);border-color:#27ae60;cursor:default';
      btn.textContent=w;slots.appendChild(btn);
    });
    playWrong();
  }
  document.getElementById('rScoreLbl').textContent=rScore+' pts';
  const nb=document.getElementById('rNextBtn');
  nb.textContent=rQIdx<RECONSTRUCT_Q-1?'Question suivante →':'Voir les résultats →';
  nb.className='next-btn show';
  setTimeout(()=>speakQ(q),600);
}
function nextReconstructQ(){
  rQIdx++;
  if(rQIdx>=RECONSTRUCT_Q){
    showScreen('resultsScreen');
    const maxS=RECONSTRUCT_Q*10,pct=Math.round(rScore/maxS*100);
    document.getElementById('finalScore').textContent=rScore;
    document.getElementById('finalTotal').textContent='/ '+maxS;
    document.getElementById('stCorrect').textContent=RECONSTRUCT_Q-rErrors.length;
    document.getElementById('stWrong').textContent=rErrors.length;
    document.getElementById('stPct').textContent=pct+'%';
    let msg,sub,emo;
    if(pct>=90){msg='Utmärkt!';sub='Excellent ! Parfaite maîtrise des phrases.';emo='⭐';}
    else if(pct>=70){msg='Bra jobbat!';sub='Très bien ! Encore un peu de pratique.';emo='🌟';}
    else if(pct>=50){msg='Fortsätt!';sub='Pas mal ! Continuez à pratiquer.';emo='❄️';}
    else{msg='Öva mer!';sub='La pratique régulière est la clé.';emo='🇸🇪';}
    document.getElementById('resultEmoji').textContent=emo;
    document.getElementById('resultMsg').textContent=msg;
    document.getElementById('resultSub').textContent=sub;
    document.getElementById('perfChart').style.display='none';
    const wl=document.getElementById('wrongList');
    if(rErrors.length>0){
      let html='<h4>À revoir :</h4>';
      rErrors.slice(0,6).forEach(e=>{html+=`<div class="wrong-item"><span class="wrong-char" style="font-size:13px">${e.char}</span><span class="wrong-ans">${e.correct}<span class="review-tag">révision</span></span></div>`;});
      wl.innerHTML=html;
    }else wl.innerHTML='<p style="text-align:center;color:var(--aurora-green);font-size:13px;padding:.5rem 0">🎉 Aucune erreur !</p>';
    document.getElementById('replayBtn').textContent='Rejouer — Reconstruire';
    return;
  }
  renderReconstructQ();
}
function speakReconstruct(){if(rQuestions&&rQIdx<rQuestions.length)speakQ(rQuestions[rQIdx]);}
function speakCurrent(){if(currentQ)speakQ(currentQ);}

// ── MODE DICTÉE ──────────────────────────────────────────────────
const DICTEE_Q=8;
let dPool,dType,dQuestions,dQIdx,dScore,dErrors,dAnswered,dCurrentAnswer,dCurrentWords,dAnswer;

function chooseDicteeDir(){showScreen('dicteeDirScreen');}

function startDictee(type){
  dType=type;lastMode='dictee';

  if(type==='mots'){
    dPool=VOCAB.map(v=>({...v,words:v.q.split('')}));
  }else if(type==='phrases'){
    dPool=PHRASES.filter(p=>p.words&&p.words.length>=2);
  }else{
    dPool=[...VOCAB.map(v=>({...v,words:v.q.split('')})),...PHRASES.filter(p=>p.words&&p.words.length>=2)];
  }

  dQuestions=shuffle([...dPool]).slice(0,DICTEE_Q);
  dQIdx=0;dScore=0;dErrors=[];
  showScreen('dicteeScreen');
  renderDicteeQ();
}

function renderDicteeQ(){
  dAnswered=false;dCurrentAnswer=[];
  const item=dQuestions[dQIdx];
  // For vocab: answer = full word (q), for phrases: answer = full phrase (q)
  dAnswer=item.q;
  // Build word/letter bank
  if(dType==='mots'){
    // Single word — split into letters
    dCurrentWords=shuffle(item.q.split(''));
  }else if(dType==='phrases'){
    // Phrase — split into words
    dCurrentWords=shuffle([...item.words]);
  }else{
    // Mixte
    if(item.words){
      // It's a phrase
      dCurrentWords=shuffle([...item.words]);
    }else{
      const wordStr=item.q;
      if(wordStr.split(' ').length>1){
        dCurrentWords=shuffle(wordStr.split(' '));
      }else{
        dCurrentWords=shuffle(wordStr.split(''));
      }
    }
  }

  document.getElementById('dProgressFill').style.width=Math.round(dQIdx/DICTEE_Q*100)+'%';
  document.getElementById('dScoreLbl').textContent=dScore+' pts';
  document.getElementById('dLivesDisplay').innerHTML='<span style="font-size:13px;color:var(--text-muted)">'+(dQIdx+1)+' / '+DICTEE_Q+'</span>';
  document.getElementById('dFeedback').textContent='';document.getElementById('dFeedback').className='feedback';
  document.getElementById('dNextBtn').className='next-btn';
  document.getElementById('dCheckBtn').style.display='none';

  // Speed slider label
  const slider=document.getElementById('dicteeSpeedSlider');
  const lbl=document.getElementById('dicteeSpeedLbl');
  lbl.textContent=parseFloat(slider.value).toFixed(2)+'x';

  // Update mode label
  const isWords=dCurrentWords.length===item.q.length&&!item.q.includes(' ');
  document.getElementById('dModeLbl').textContent=isWords?'👂 Dictée — Mot':'👂 Dictée — Phrase';

  renderDicteeUI();
  // Play audio automatically after short delay
  setTimeout(()=>playDicteeAudio(),400);
}

function renderDicteeUI(){
  const item=dQuestions[dQIdx];
  const slots=document.getElementById('dicteeSlots');slots.innerHTML='';
  if(dCurrentAnswer.length===0){
    const ph=document.createElement('span');ph.style.cssText='font-size:13px;color:var(--text-muted);font-style:italic';
    ph.textContent='Cliquez pour composer la réponse…';slots.appendChild(ph);
  }else{
    dCurrentAnswer.forEach((wordIdx,i)=>{
      const btn=document.createElement('button');btn.className='slot-word';
      btn.textContent=dCurrentWords[wordIdx];
      if(!dAnswered)btn.onclick=()=>removeDicteeWord(i);
      slots.appendChild(btn);
    });
  }
  const bank=document.getElementById('dicteeBank');bank.innerHTML='';
  dCurrentWords.forEach((word,i)=>{
    const btn=document.createElement('button');btn.className='bank-word';btn.textContent=word;
    if(dCurrentAnswer.includes(i)){btn.classList.add('used');}
    else if(!dAnswered){btn.onclick=()=>addDicteeWord(i);}
    bank.appendChild(btn);
  });
  const cb=document.getElementById('dCheckBtn');
  if(!dAnswered&&dCurrentAnswer.length===dCurrentWords.length)cb.style.display='block';
  else cb.style.display='none';
}

function addDicteeWord(idx){if(dAnswered||dCurrentAnswer.includes(idx))return;dCurrentAnswer.push(idx);playClick();renderDicteeUI();}
function removeDicteeWord(ansIdx){if(dAnswered)return;dCurrentAnswer.splice(ansIdx,1);renderDicteeUI();}

function playDicteeAudio(){
  const item=dQuestions[dQIdx];if(!item)return;
  speakQ(item);
}
function playDicteeSlow(){
  const item=dQuestions[dQIdx];if(!item)return;
  const rate=parseFloat(document.getElementById('dicteeSpeedSlider').value)||0.65;
  if(_ttsAudio){_ttsAudio.pause();_ttsAudio=null;}
  // Find audio with normalized key
  let clip=AUDIO_MAP[item.q];
  if(!clip){
    const nk=_normalizeKey(item.q);
    for(const k in AUDIO_MAP){if(_normalizeKey(k)===nk){clip=AUDIO_MAP[k];break;}}
  }
  if(clip){
    _ttsAudio=new Audio(clip);
    _ttsAudio.playbackRate=rate;
    _ttsAudio.volume=1.0;
    _ttsAudio.play();
  }else if(window.speechSynthesis){
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(item.q);
    u.lang='sv-SE';
    u.rate=Math.max(rate,0.1);
    speechSynthesis.speak(u);
  }
}
function changeDicteeSpeed(){
  const slider=document.getElementById('dicteeSpeedSlider');
  const lbl=document.getElementById('dicteeSpeedLbl');
  const rate=parseFloat(slider.value)||0.65;
  lbl.textContent=rate.toFixed(2)+'x';
  // Replay immediately at new speed
  if(dQuestions&&dQuestions[dQIdx]) playDicteeSlow();
}

function checkDictee(){
  if(dAnswered)return;
  dAnswered=true;
  const item=dQuestions[dQIdx];
  document.getElementById('dCheckBtn').style.display='none';

  const built=dCurrentAnswer.map(i=>dCurrentWords[i]).join('');
  const correct=dAnswer;
  const fb=document.getElementById('dFeedback');

  if(built===correct){
    dScore+=10;
    fb.textContent='✨ Parfait !';
    fb.className='feedback good';playCorrect();
    document.querySelectorAll('.slot-word').forEach(el=>{el.style.background='linear-gradient(135deg,var(--aurora-green),#1e6a3a)';el.style.borderColor='#27ae60';});
  }else{
    dErrors.push({char:item.a||item.q,correct:correct});
    fb.textContent='✗ Bonne réponse : '+item.q;fb.className='feedback bad';
    const slots=document.getElementById('dicteeSlots');slots.innerHTML='';
    const parts=dType==='mots'||!item.words?correct.split(''):correct.split('');
    parts.forEach(ch=>{
      const sp=document.createElement('span');sp.className='slot-word';
      sp.style.cssText='background:linear-gradient(135deg,var(--aurora-green),#1e6a3a);border-color:#27ae60;cursor:default';
      sp.textContent=ch;slots.appendChild(sp);
    });
    playWrong();
  }
  document.getElementById('dScoreLbl').textContent=dScore+' pts';
  const nb=document.getElementById('dNextBtn');
  nb.textContent=dQIdx<DICTEE_Q-1?'Question suivante →':'Voir les résultats →';
  nb.className='next-btn show';
  setTimeout(()=>speakQ(item),600);
}

function nextDicteeQ(){
  dQIdx++;
  if(dQIdx>=DICTEE_Q){
    showScreen('resultsScreen');
    const maxS=DICTEE_Q*10,pct=Math.round(dScore/maxS*100);
    document.getElementById('finalScore').textContent=dScore;
    document.getElementById('finalTotal').textContent='/ '+maxS;
    document.getElementById('stCorrect').textContent=DICTEE_Q-dErrors.length;
    document.getElementById('stWrong').textContent=dErrors.length;
    document.getElementById('stPct').textContent=pct+'%';
    let msg,sub,emo;
    if(pct>=90){msg='Utmärkt!';sub='Excellent ! Parfaite maîtrise.';emo='⭐';}
    else if(pct>=70){msg='Bra jobbat!';sub='Très bien ! Encore un peu de pratique.';emo='🌟';}
    else if(pct>=50){msg='Fortsätt!';sub='Pas mal ! Continuez à pratiquer.';emo='❄️';}
    else{msg='Öva mer!';sub='La pratique régulière est la clé.';emo='🇸🇪';}
    document.getElementById('resultEmoji').textContent=emo;
    document.getElementById('resultMsg').textContent=msg;
    document.getElementById('resultSub').textContent=sub;
    document.getElementById('perfChart').style.display='none';
    const wl=document.getElementById('wrongList');
    if(dErrors.length>0){
      let html='<h4>À revoir :</h4>';
      dErrors.slice(0,6).forEach(e=>{html+=`<div class="wrong-item"><span class="wrong-char" style="font-size:13px">${e.char}</span><span class="wrong-ans">${e.correct}<span class="review-tag">révision</span></span></div>`;});
      wl.innerHTML=html;
    }else wl.innerHTML='<p style="text-align:center;color:var(--aurora-green);font-size:13px;padding:.5rem 0">🎉 Aucune erreur !</p>';
    document.getElementById('replayBtn').textContent='Rejouer — Dictée';
    return;
  }
  renderDicteeQ();
}

// ── DÉFI JOURNALIER ─────────────────────────────────────────────
const DEFI_Q_PER_PHASE=5;
const DEFI_PHASES=[
  {label:'Vocabulaire',data:()=>VOCAB,dir:'sv2fr',icon:'📖'},
  {label:'Vocabulaire',data:()=>VOCAB,dir:'sv2fr',icon:'📖'},
  {label:'Phrases',data:()=>PHRASES,dir:'sv2fr',icon:'💬'}
];
const TOTAL_DEFI_Q=DEFI_PHASES.length*DEFI_Q_PER_PHASE;
let defiState=null,defiTimerInterval=null;

function getDefiDateKey(){const d=new Date();return`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;}
function loadDefi(){try{return JSON.parse(localStorage.getItem('sv_defi')||'{}')}catch(e){return{}}}
function saveDefi(d){try{localStorage.setItem('sv_defi',JSON.stringify(d))}catch(e){}}
function getDefiSeed(){const k=getDefiDateKey();let h=0;for(let i=0;i<k.length;i++)h=((h<<5)-h)+k.charCodeAt(i);return Math.abs(h);}
function seededShuffle(arr,seed){const a=[...arr];let s=seed;for(let i=a.length-1;i>0;i--){s=(s*1664525+1013904223)&0xFFFFFFFF;const j=Math.abs(s)%(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
function buildDefiQuestions(){
  const seed=getDefiSeed();let all=[];
  DEFI_PHASES.forEach((phase,pi)=>{seededShuffle(phase.data(),seed+pi*999).slice(0,DEFI_Q_PER_PHASE).forEach(q=>{all.push({...q,_phase:pi,_dir:phase.dir});});});
  return all;
}
function renderDefiCalendar(containerId){
  const d=loadDefi();const hist=d.history||[];
  const container=document.getElementById(containerId);if(!container)return;
  const last7=[];
  for(let i=6;i>=0;i--){const day=new Date();day.setDate(day.getDate()-i);const key=`${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`;const entry=hist.find(h=>h.date===key);last7.push({key,day:day.getDate(),entry});}
  let html='<h4>7 derniers jours</h4><div class="defi-cal">';
  last7.forEach(({key,day,entry})=>{
    if(key===getDefiDateKey()&&!entry){html+=`<div class="defi-day" style="background:var(--blue-mid);color:#fff;border-color:var(--aurora-green)">${day}</div>`;}
    else if(entry){html+=`<div class="defi-day ${entry.won?'won':'lost'}" title="${entry.score} pts">${day}</div>`;}
    else{html+=`<div class="defi-day empty">${day}</div>`;}
  });
  html+='</div>';container.innerHTML=html;
}
function updateDefiMenuCard(){
  const d=loadDefi();const todayKey=getDefiDateKey();
  const todayDone=d.history&&d.history.find(h=>h.date===todayKey);
  const badge=document.getElementById('defiDoneBadge');const streakBadge=document.getElementById('defiStreakBadge');const desc=document.getElementById('defiCardDesc');
  if(todayDone){if(badge)badge.style.display='block';if(desc)desc.textContent=todayDone.score+' pts · '+Math.round(todayDone.pct)+'% réussite';}
  else{if(badge)badge.style.display='none';if(desc)desc.textContent='5+5+5 questions · Nouveau défi chaque jour';}
  const streak=d.streak||0;
  if(streakBadge){if(streak>=2){streakBadge.style.display='block';streakBadge.textContent='🔥 '+streak+' jours';}else streakBadge.style.display='none';}
}
function startDefiCountdownTimer(){
  const tick=()=>{const now=new Date(),midnight=new Date(now);midnight.setHours(24,0,0,0);const diff=midnight-now;const h=String(Math.floor(diff/3600000)).padStart(2,'0');const m=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');const s=String(Math.floor((diff%60000)/1000)).padStart(2,'0');const el=document.getElementById('defiTimer');if(el)el.textContent=`${h}:${m}:${s}`;};
  tick();return setInterval(tick,1000);
}
function startDefi(){
  const todayKey=getDefiDateKey();const d=loadDefi();const todayEntry=d.history&&d.history.find(h=>h.date===todayKey);
  const now=new Date();const dayNames=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];const monthNames=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const dateEl=document.getElementById('defiDateLbl');if(dateEl)dateEl.textContent=dayNames[now.getDay()]+' '+now.getDate()+' '+monthNames[now.getMonth()]+' '+now.getFullYear();
  showScreen('defiScreen');
  if(defiTimerInterval)clearInterval(defiTimerInterval);defiTimerInterval=startDefiCountdownTimer();
  if(todayEntry){
    document.getElementById('defiQuizZone').style.display='none';document.getElementById('defiPhaseLbl').style.display='none';
    document.getElementById('defiCountdown').style.display='flex';document.getElementById('defiAlreadyDone').style.display='block';
    renderDefiStepsDisplay(TOTAL_DEFI_Q,TOTAL_DEFI_Q,[]);renderDefiCalendar('defiHistory');return;
  }
  document.getElementById('defiCountdown').style.display='none';document.getElementById('defiQuizZone').style.display='block';
  document.getElementById('defiPhaseLbl').style.display='block';document.getElementById('defiAlreadyDone').style.display='none';
  defiState={questions:buildDefiQuestions(),qIdx:0,score:0,lives:5,errors:[],answered:false,history:[]};
  renderDefiQuestion();
}
function renderDefiStepsDisplay(total,current,histArr){
  const container=document.getElementById('defiSteps');if(!container)return;container.innerHTML='';
  for(let i=0;i<total;i++){const step=document.createElement('div');step.className='defi-step';
    if(i<current){if(histArr[i]===false){step.classList.add('fail');step.textContent='✗';}else{step.classList.add('done');step.textContent='✓';}}
    else if(i===current){step.classList.add('active');step.textContent=(i+1);}
    else{step.textContent=(i+1);}container.appendChild(step);}
}
function renderDefiQuestion(){
  const st=defiState;st.answered=false;const q=st.questions[st.qIdx];const phaseIdx=q._phase;const phase=DEFI_PHASES[phaseIdx];
  const phaseLbl=document.getElementById('defiPhaseLbl');if(phaseLbl)phaseLbl.textContent='PHASE '+(phaseIdx+1)+' — '+phase.label.toUpperCase()+' ('+(st.qIdx%DEFI_Q_PER_PHASE+1)+'/'+DEFI_Q_PER_PHASE+')';
  renderDefiStepsDisplay(TOTAL_DEFI_Q,st.qIdx,st.history);
  document.getElementById('defiProgressFill').style.width=Math.round(st.qIdx/TOTAL_DEFI_Q*100)+'%';
  document.getElementById('defiScoreLbl').textContent=st.score+' pts';
  const livesEl=document.getElementById('defiLivesDisplay');livesEl.innerHTML='';
  for(let i=0;i<5;i++){const s=document.createElement('span');s.textContent=i<st.lives?'♥':'♡';s.style.color=i<st.lives?'var(--aurora-green)':'rgba(255,255,255,.2)';livesEl.appendChild(s);}
  document.getElementById('defiModeLbl').textContent='🏆 '+phase.label;
  const card=document.getElementById('defiCharCard');card.classList.remove('flip-in');void card.offsetWidth;card.classList.add('flip-in');
  const dir=q._dir;const mainEl=document.getElementById('defiMainChar');const hintEl=document.getElementById('defiHint');const exEl=document.getElementById('defiEx');
  mainEl.textContent=q.q;mainEl.style.fontSize=q.q.length>15?'16px':q.q.length>10?'18px':q.q.length>5?'20px':'24px';
  hintEl.textContent=q.hint||'Que signifie ce mot ?';exEl.textContent=q.ex||'';
  document.getElementById('defiFeedback').textContent='';document.getElementById('defiFeedback').className='feedback';
  document.getElementById('defiNextBtn').className='next-btn';
  const allData=phase.data();const correctAnswer=q.a;
  const allAns=allData.map(x=>x.a);const opts=shuffle([q.a,...shuffle(allAns.filter(a=>a!==q.a)).slice(0,3)]);
  const grid=document.getElementById('defiOptionsGrid');grid.innerHTML='';
  opts.forEach(o=>{const b=document.createElement('button');b.className='opt';b.textContent=o;b.style.fontSize=o.length>20?'11px':o.length>10?'13px':'15px';b.onclick=()=>pickDefi(b,o,correctAnswer,dir,q);grid.appendChild(b);});
}
function pickDefi(btn,chosen,correct,dir,q){
  if(defiState.answered)return;defiState.answered=true;
  document.querySelectorAll('#defiOptionsGrid .opt').forEach(b=>{b.disabled=true;if(b.textContent===correct)b.classList.add('correct');});
  const ok=chosen===correct;defiState.history.push(ok);const fb=document.getElementById('defiFeedback');
  if(ok){defiState.score+=10;btn.classList.add('correct');fb.textContent=`✓ ${q.q} = ${q.a}`;fb.className='feedback good';playCorrect();}
  else{btn.classList.add('wrong');defiState.lives--;defiState.errors.push({char:q.q,correct:q.a,hint:q.hint});fb.textContent=`✗ ${q.q} = ${q.a}`;fb.className='feedback bad';playWrong();}
  document.getElementById('defiScoreLbl').textContent=defiState.score+' pts';
  const livesEl=document.getElementById('defiLivesDisplay');livesEl.innerHTML='';
  for(let i=0;i<5;i++){const s=document.createElement('span');s.textContent=i<defiState.lives?'♥':'♡';s.style.color=i<defiState.lives?'var(--aurora-green)':'rgba(255,255,255,.2)';livesEl.appendChild(s);}
  const isLast=defiState.qIdx>=TOTAL_DEFI_Q-1;const nb=document.getElementById('defiNextBtn');
  nb.textContent=isLast||defiState.lives<=0?'Voir les résultats →':'Question suivante →';nb.className='next-btn show';
  speakQ(q);if(defiState.lives<=0)setTimeout(()=>endDefi(),700);
}
function nextDefiQuestion(){defiState.qIdx++;if(defiState.qIdx>=TOTAL_DEFI_Q||defiState.lives<=0){endDefi();return;}renderDefiQuestion();}
function speakDefi(){if(defiState&&defiState.qIdx<defiState.questions.length)speakQ(defiState.questions[defiState.qIdx]);}
function computeDefiStreak(defiData,wonToday){
  const hist=defiData.history||[];let streak=wonToday?1:0;let checkDate=new Date();checkDate.setDate(checkDate.getDate()-1);
  for(let i=0;i<60;i++){const key=`${checkDate.getFullYear()}-${checkDate.getMonth()+1}-${checkDate.getDate()}`;const entry=hist.find(h=>h.date===key);if(entry&&entry.won){streak++;checkDate.setDate(checkDate.getDate()-1);}else break;}
  return streak;
}
function endDefi(){
  const st=defiState;const maxScore=TOTAL_DEFI_Q*10;const pct=Math.round(st.score/maxScore*100);const correctCount=st.history.filter(Boolean).length;const won=pct>=50;
  let xpGain=Math.round(st.score/2);const d=loadDefi();const streak=computeDefiStreak(d,won);
  if(streak>=7)xpGain+=50;else if(streak>=3)xpGain+=20;if(pct>=90)xpGain+=30;else if(pct>=70)xpGain+=15;
  const todayKey=getDefiDateKey();if(!d.history)d.history=[];d.history=d.history.filter(h=>h.date!==todayKey);
  d.history.push({date:todayKey,score:st.score,pct,won,correct:correctCount,errors:st.errors.length});
  d.xp=(d.xp||0)+xpGain;d.streak=streak;saveDefi(d);updateDefiMenuCard();
  showScreen('defiResultScreen');
  let trophy,msg,sub;
  if(pct>=90){trophy='🏆';msg='Utmärkt!';sub='Parfait ! Vous dominez le défi du jour !';}
  else if(pct>=70){trophy='🥈';msg='Bra jobbat!';sub='Très bien ! Encore un effort demain.';}
  else if(pct>=50){trophy='🥉';msg='Fortsätt!';sub='Pas mal ! Continuez la pratique.';}
  else{trophy='❄️';msg='Öva mer!';sub='La régularité est la clé. À demain !';}
  document.getElementById('defiTrophy').textContent=trophy;document.getElementById('defiResultMsg').textContent=msg;document.getElementById('defiResultSub').textContent=sub;
  document.getElementById('defiFinalScore').textContent=st.score;document.getElementById('defiFinalTotal').textContent='/ '+maxScore;
  const stars=document.getElementById('defiStarsRow').querySelectorAll('span');const numStars=pct>=90?3:pct>=60?2:pct>=30?1:0;
  stars.forEach((s,i)=>{setTimeout(()=>{if(i<numStars)s.classList.add('lit');},300+i*200);});
  document.getElementById('defiXpGained').textContent='+'+xpGain+' XP';document.getElementById('defiTotalXp').textContent='Total : '+d.xp+' XP';
  setTimeout(()=>{document.getElementById('defiXpFill').style.width=Math.min(100,(xpGain/150)*100)+'%';},400);
  const badges=[];
  if(pct>=100)badges.push({icon:'💯',label:'Score parfait'});if(st.errors.length===0)badges.push({icon:'✨',label:'Sans faute'});
  if(streak>=7)badges.push({icon:'🔥',label:'7 jours !'});else if(streak>=3)badges.push({icon:'🔥',label:streak+' jours'});
  if(correctCount===TOTAL_DEFI_Q)badges.push({icon:'❄️',label:'Toutes les phases'});
  document.getElementById('defiBadgesRow').innerHTML=badges.map((b,i)=>`<div class="defi-badge" style="animation-delay:${i*.1}s"><span class="badge-icon">${b.icon}</span>${b.label}</div>`).join('');
  renderDefiCalendar('defiResultHistory');
}
    /* ── MODAL PHONÉTIQUE ── */
    function showPhoneticModal() {
        if(document.getElementById('phoneticModal')) return;
        const modal = document.createElement('div');
        modal.id = 'phoneticModal';
        modal.style.cssText = `position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(5,15,30,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:fadeIn .2s ease`;
        modal.innerHTML = `
<div style="background:linear-gradient(160deg,#0d2137,#122840);border:1.5px solid rgba(26,188,156,.35);border-radius:18px;max-width:420px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.7);position:relative;padding:0">
  <!-- En-tête -->
  <div style="padding:16px 18px 12px;border-bottom:1px solid rgba(46,134,193,.18);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:linear-gradient(160deg,#0d2137,#122840);border-radius:18px 18px 0 0;z-index:1">
    <div>
      <div style="font-size:16px;font-weight:900;color:#f0f4f8;letter-spacing:.3px">🇸🇪 Guide de prononciation</div>
      <div style="font-size:11px;color:#5d8aa8;margin-top:2px">Alphabet phonétique international (API)</div>
    </div>
    <button onclick="closePhoneticModal()" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:15px;color:#f0f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0">✕</button>
  </div>

  <div style="padding:14px 18px 18px">

    <!-- Voyelles -->
    <div style="font-size:11px;font-weight:700;color:#1abc9c;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Voyelles</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${phoneticRow('ː','Son LONG','La voyelle ou consonne précédente est tenue deux fois plus longtemps','ex: /gu:d/ → "goud" long','#52be80')}
      ${phoneticRow('u','OU','Comme dans "loup" en français','ex: /hu:s/ → "houss"','#52be80')}
      ${phoneticRow('ʉ','U-OU','Entre le "U" français et "OU" — lèvres arrondies, langue en avant','ex: /hʉs/ → "hüss"','#52be80')}
      ${phoneticRow('y','I arrondi','"I" avec les lèvres très arrondies comme pour siffler','ex: /ny:/ → "nü" long','#52be80')}
      ${phoneticRow('e','É','Comme "é" dans "été"','ex: /me:n/ → "mén"','#52be80')}
      ${phoneticRow('ɛ','È','Comme "è" dans "fête"','ex: /hɛr/ → "hèr"','#52be80')}
      ${phoneticRow('å','O suédois','Comme "o" dans "or" — bouche mi-ouverte','ex: /bå:t/ → "bôt"','#52be80')}
      ${phoneticRow('ø','EU','Comme "eu" dans "feu"','ex: /grøn/ → "greun"','#52be80')}
    </div>

    <!-- Sons complexes -->
    <div style="font-size:11px;font-weight:700;color:#8e44ad;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Sons complexes suédois</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${phoneticRow('ɧ','SJ / SKJ','Souffle simultané à l\'arrière de la gorge ET entre les lèvres — son unique au suédois !','ex: /ɧʉːla/ → "shüla"','#8e44ad')}
      ${phoneticRow('ɕ','TJ / KJ','"CH" très sifflé, produit juste derrière les dents du haut','ex: /ɕœːra/ → "chœra"','#8e44ad')}
      ${phoneticRow('r','R roulé','Roulé avec le bout de la langue contre les alvéoles (comme en espagnol)','ex: /rø:d/ → "reud" roulé','#8e44ad')}
    </div>

    <!-- Accentuation -->
    <div style="font-size:11px;font-weight:700;color:#f1c40f;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Accentuation & durée</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${phoneticRow('ˈ','Syllabe accentuée','La syllabe suivante porte l\'accent tonique principal','ex: /ˈsvɛnskə/','#f1c40f')}
      ${phoneticRow('ˌ','Accent secondaire','Accent moins fort que le principal','ex: /ˌfœrˈsta/','#f1c40f')}
    </div>

    <!-- Consonnes -->
    <div style="font-size:11px;font-weight:700;color:#2e86c1;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Consonnes notables</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:16px">
      ${phoneticRow('ŋ','NG','Comme "ng" dans "parking" — la langue touche le fond du palais','ex: /lɑŋ/ → "long"','#2e86c1')}
      ${phoneticRow('v','V','Identique au "v" français','ex: /vɑrm/ → "varm"','#2e86c1')}
      ${phoneticRow('j','Y consonne','Comme "y" dans "yeux" — jamais comme "j" français !','ex: /jɑ/ → "ya"','#2e86c1')}
    </div>

    <!-- Astuce -->
    <div style="background:rgba(82,190,128,.09);border:1px solid rgba(82,190,128,.25);border-radius:10px;padding:10px 12px">
      <div style="font-size:12px;font-weight:700;color:#52be80;margin-bottom:5px">💡 Astuce clé</div>
      <div style="font-size:11.5px;color:#a8c8d8;line-height:1.6">En suédois, la <b style="color:#f0f4f8">longueur vocalique</b> est distinctive : <span style="font-family:'Courier New',monospace;color:#1abc9c">/viːn/</span> (vin) ≠ <span style="font-family:'Courier New',monospace;color:#1abc9c">/vɪn/</span> (gagner). Le symbole <span style="font-family:'Courier New',monospace;color:#1abc9c">ː</span> double toujours la durée du son.</div>
    </div>
  </div>
</div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', e => { if(e.target===modal) closePhoneticModal(); });
    }

    function phoneticRow(symbol, name, desc, example, color) {
        return `<div style="display:flex;align-items:flex-start;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:9px 11px">
          <div style="flex-shrink:0;width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.06);border:1.5px solid ${color}44;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;font-size:18px;font-weight:700;color:${color}">${symbol}</div>
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:700;color:#f0f4f8">${name}</div>
            <div style="font-size:11px;color:#8aaabb;line-height:1.4;margin-top:2px">${desc}</div>
            <div style="font-size:10.5px;color:#5d8aa8;font-family:'Courier New',monospace;margin-top:3px">${example}</div>
          </div>
        </div>`;
    }

    function closePhoneticModal() {
        const m = document.getElementById('phoneticModal');
        if(m) { m.style.animation='none'; m.style.opacity=0; m.style.transition='opacity .15s'; setTimeout(()=>m.remove(),150); }
    }

    function showPhoneticHelp() { showPhoneticModal(); }

// ── FLOCONS DE NEIGE ─────────────────────────────────────────────
(function(){
  const c=document.getElementById('snowflakes');
  const flakes=['❄','❅','❆','·','*','•'];
  for(let i=0;i<30;i++){
    const p=document.createElement('div');p.className='snowflake';
    const sz=8+Math.random()*14,left=Math.random()*100,delay=Math.random()*16,dur=10+Math.random()*14;
    p.textContent=flakes[Math.floor(Math.random()*flakes.length)];
    p.style.cssText=`left:${left}%;font-size:${sz}px;animation-duration:${dur}s;animation-delay:${delay}s;opacity:0`;
    c.appendChild(p);
  }
})();

updateMenuStats();
updateDefiMenuCard();

// ── PAYSAGE FIXE ─────────────────────────────────────────────────
(function(){
  var menuL=document.querySelector('#menuScreen .menu-landscape');
  if(!menuL)return;
  // Clone pour le mettre en arrière-plan en bas, toujours visible
  var fixed=document.createElement('div');
  fixed.id='fixedLandscape';
  // Le SVG a un viewBox de 500x220 avec des éléments partout (nuits, aurores, maisons, lune).
  // On couvre toute la hauteur de l'écran en arrière-plan
  fixed.style.cssText='position:fixed;top:0;bottom:0;left:0;right:0;max-width:500px;margin:0 auto;z-index:0;pointer-events:none;background:transparent';
  fixed.innerHTML=menuL.innerHTML;
  // Sur le clone fixed, on rend le fond de ciel TRANSPARENT pour garder maisons/neige/montagnes
  var skyStop=fixed.querySelector('#lSky stop[offset="100%"]');
  if(skyStop){skyStop.setAttribute('stop-color','transparent');skyStop.setAttribute('stop-opacity','0');}
  // On rend les rect de fond du SVG transparents aussi
  var bgRect=fixed.querySelector('rect[fill="url(#lSky)"]');
  if(bgRect)bgRect.setAttribute('fill','transparent');

  document.body.appendChild(fixed);
  // Rendre le menu-landscape original invisible et sans hauteur
  menuL.style.display='none';
  // Sur desktop, élargir
  if(window.innerWidth>=520){fixed.style.maxWidth='none';}
  window.addEventListener('resize',function(){
    if(window.innerWidth>=520){fixed.style.maxWidth='none';}
    else{fixed.style.maxWidth='500px';}
  });
  // Remonter .game pour qu'il soit au-dessus du paysage (z-index plus haut)
  var gameEl=document.querySelector('.game');
  if(gameEl)gameEl.style.position='relative';
})();

// PWA Service Worker (désactivé en mode fichier local)
// navigator.serviceWorker non disponible sans serveur HTTP

// ══════════════════════════════════════════════════════════
// MODULE TRADUCTEUR FR ↔ SE
// ══════════════════════════════════════════════════════════

var _tradDir = 'fr2sv';          // 'fr2sv' | 'sv2fr'
var _tradHistory = [];           // [{src, dst, hint, dir}]
var _tradSpeechRec = null;
var _tradIsRecording = false;
var _tradLastResult = null;

function showTranslator() {
    showScreen('translatorScreen');
    renderTradHistory();
}

function setTradDir(dir) {
    _tradDir = dir;
    _updateTradUI();
}

function swapTradDir() {
    _tradDir = _tradDir === 'fr2sv' ? 'sv2fr' : 'fr2sv';
    // Swap textarea content with last translation if available
    if (_tradLastResult) {
        document.getElementById('tradInput').value = _tradLastResult;
        _tradLastResult = null;
        document.getElementById('tradResultBox').style.display = 'none';
        document.getElementById('tradResultText').textContent = '';
    }
    _updateTradUI();
    onTradInput();
}

function _updateTradUI() {
    var isFr2sv = _tradDir === 'fr2sv';
    document.getElementById('tradLangA').classList.toggle('active', isFr2sv);
    document.getElementById('tradLangB').classList.toggle('active', !isFr2sv);
    document.getElementById('tradSrcFlag').textContent  = isFr2sv ? '🇫🇷' : '🇸🇪';
    document.getElementById('tradSrcLang').textContent  = isFr2sv ? 'Français — texte à traduire' : 'Suédois — texte à traduire';
    document.getElementById('tradDstFlag').textContent  = isFr2sv ? '🇸🇪' : '🇫🇷';
    document.getElementById('tradDstLang').textContent  = isFr2sv ? 'Traduction suédoise' : 'Traduction française';
    document.getElementById('tradInput').placeholder    = isFr2sv ? 'Écrivez ou dictez en français…' : 'Skriv eller diktera på svenska…';
}

function onTradInput() {
    var v = (document.getElementById('tradInput').value || '').trim();
    document.getElementById('tradBtn').disabled = v.length === 0;
}

function clearTradInput() {
    document.getElementById('tradInput').value = '';
    document.getElementById('tradResultBox').style.display = 'none';
    document.getElementById('tradLoading').style.display = 'none';
    document.getElementById('tradBtn').disabled = true;
    _tradLastResult = null;
}

// ── DICTÉE VOCALE ────────────────────────────────────────
function toggleDictation() {
    if (_tradIsRecording) {
        _stopDictation();
    } else {
        _startDictation();
    }
}

function _startDictation() {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("La reconnaissance vocale n'est pas disponible sur ce navigateur. Essayez Chrome ou Safari.");
        return;
    }
    _tradSpeechRec = new SpeechRecognition();
    _tradSpeechRec.lang = _tradDir === 'fr2sv' ? 'fr-FR' : 'sv-SE';
    _tradSpeechRec.interimResults = true;
    _tradSpeechRec.continuous = false;

    _tradSpeechRec.onstart = function() {
        _tradIsRecording = true;
        var btn = document.getElementById('tradMicBtn');
        btn.textContent = '⏹ Stop';
        btn.classList.add('recording');
    };

    _tradSpeechRec.onresult = function(e) {
        var transcript = '';
        for (var i = 0; i < e.results.length; i++) {
            transcript += e.results[i][0].transcript;
        }
        document.getElementById('tradInput').value = transcript;
        onTradInput();
    };

    _tradSpeechRec.onerror = function(e) {
        _stopDictation();
        if (e.error !== 'aborted') {
            alert('Erreur microphone : ' + e.error);
        }
    };

    _tradSpeechRec.onend = function() {
        _stopDictation();
    };

    _tradSpeechRec.start();
}

function _stopDictation() {
    _tradIsRecording = false;
    var btn = document.getElementById('tradMicBtn');
    btn.textContent = '🎤 Dicter';
    btn.classList.remove('recording');
    if (_tradSpeechRec) {
        try { _tradSpeechRec.stop(); } catch(e) {}
        _tradSpeechRec = null;
    }
}

// ── TRADUCTION VIA CLAUDE API ────────────────────────────
async function doTranslate() {
    var text = (document.getElementById('tradInput').value || '').trim();
    if (!text) return;

    document.getElementById('tradBtn').disabled = true;
    document.getElementById('tradResultBox').style.display = 'none';
    document.getElementById('tradLoading').style.display = 'flex';

    var isFr2sv = _tradDir === 'fr2sv';
    var sl = isFr2sv ? 'fr' : 'sv';
    var tl = isFr2sv ? 'sv' : 'fr';

    try {
        // Google Translate endpoint (no key needed for short texts)
        var url = 'https://translate.googleapis.com/translate_a/single?client=gtx'
            + '&sl=' + sl
            + '&tl=' + tl
            + '&dt=t'
            + '&q=' + encodeURIComponent(text);

        var resp = await fetch(url);
        var data = await resp.json();

        // Response is nested arrays: data[0] contains sentence chunks
        var translation = (data[0] || []).map(function(chunk) {
            return (chunk && chunk[0]) ? chunk[0] : '';
        }).join('');

        if (!translation) throw new Error('empty');

        _tradLastResult = translation;
        document.getElementById('tradResultText').textContent = translation;
        document.getElementById('tradResultHint').textContent = '';
        document.getElementById('tradResultBox').style.display = 'block';

        // Add to history
        _tradHistory.unshift({ src: text, dst: translation, hint: '', dir: _tradDir });
        if (_tradHistory.length > 10) _tradHistory.pop();
        renderTradHistory();

    } catch(err) {
        document.getElementById('tradResultBox').style.display = 'block';
        document.getElementById('tradResultText').textContent = '⚠️ Erreur de traduction. Vérifiez votre connexion.';
        document.getElementById('tradResultHint').textContent = '';
    } finally {
        document.getElementById('tradLoading').style.display = 'none';
        document.getElementById('tradBtn').disabled = false;
    }
}

// ── LECTURE AUDIO — Google TTS ───────────────────────────
function speakTranslation() {
    var text = document.getElementById('tradResultText').textContent;
    if (!text || text.startsWith('⚠️')) return;
    var lang = _tradDir === 'fr2sv' ? 'sv' : 'fr';
    _tradSpeakGoogle(text, lang);
}

function _tradSpeakGoogle(text, lang) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    var chunks = _splitTextChunks(text, 200);
    var idx = 0;

    function doPlayNext() {
        if (idx >= chunks.length) return;
        var chunk = chunks[idx++];
        var url = 'https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=' + lang + '&q=' + encodeURIComponent(chunk);
        var audio = new Audio(url);
        audio.onended = doPlayNext;
        audio.onerror = function () {
            if (idx === 1) _tradSpeakWebSpeech(text, lang === 'sv' ? 'sv-SE' : 'fr-FR');
        };
        audio.play().catch(function () {
            if (idx === 1) _tradSpeakWebSpeech(text, lang === 'sv' ? 'sv-SE' : 'fr-FR');
        });
    }

    doPlayNext();
}

function _tradSpeakWebSpeech(text, lang) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    // Recharger les voix (iOS les charge parfois en retard)
    var voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) voices = [];

    var prefix = lang.split('-')[0];

    // Sélection : chercher d'abord une voix dédiée suédoise (pas FR/EN)
    var match = voices.find(function(v){ return v.lang === lang; })
        || voices.find(function(v){ return v.lang.startsWith(lang) && v.name.includes('Google'); })
        || voices.find(function(v){ return v.lang.startsWith(lang); })
        || voices.find(function(v){ return v.lang.startsWith(prefix); });

    var utt = new SpeechSynthesisUtterance(text);
    utt.lang = match ? match.lang : lang;
    utt.voice = match;
    utt.rate = lang === 'sv-SE' ? 0.85 : 0.95;
    utt.pitch = 1.0;
    if (match) console.log('[Trad TTS] Voix : ' + match.name + ' (' + match.lang + ')');
    window.speechSynthesis.speak(utt);
}

function _splitTextChunks(text, maxLen) {
    var chunks = [];
    while (text.length > maxLen) {
        var cut = text.lastIndexOf(' ', maxLen);
        if (cut <= 0) cut = maxLen;
        chunks.push(text.slice(0, cut));
        text = text.slice(cut).trim();
    }
    if (text.length) chunks.push(text);
    return chunks;
}

function copyTranslation() {
    var text = document.getElementById('tradResultText').textContent;
    if (!text) return;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function(){
            var btn = event.currentTarget;
            var old = btn.innerHTML;
            btn.innerHTML = '✅ Copié';
            setTimeout(function(){ btn.innerHTML = old; }, 1500);
        });
    } else {
        // Fallback
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
}

// ── HISTORIQUE ───────────────────────────────────────────
function renderTradHistory() {
    var zone = document.getElementById('tradHistoryZone');
    var list = document.getElementById('tradHistoryList');
    if (!_tradHistory.length) { zone.style.display = 'none'; return; }
    zone.style.display = 'block';
    list.innerHTML = _tradHistory.map(function(h, i) {
        var srcFlag = h.dir === 'fr2sv' ? '🇫🇷' : '🇸🇪';
        var dstFlag = h.dir === 'fr2sv' ? '🇸🇪' : '🇫🇷';
        return '<div class="trad-history-item" onclick="reloadHistoryItem(' + i + ')">' +
            '<span class="trad-history-src">' + srcFlag + ' ' + _esc(h.src) + '</span>' +
            '<span class="trad-history-dst">' + dstFlag + ' ' + _esc(h.dst) + (h.hint ? ' <span style="font-family:\'Courier New\',monospace;font-size:10px;color:var(--text-muted)">(' + _esc(h.hint) + ')</span>' : '') + '</span>' +
            '</div>';
    }).join('');
}

function reloadHistoryItem(i) {
    var h = _tradHistory[i];
    if (!h) return;
    _tradDir = h.dir;
    _updateTradUI();
    document.getElementById('tradInput').value = h.src;
    _tradLastResult = h.dst;
    document.getElementById('tradResultText').textContent = h.dst;
    document.getElementById('tradResultHint').textContent = h.hint || '';
    document.getElementById('tradResultBox').style.display = 'block';
    onTradInput();
}

function _esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Ensure voices are loaded on page load
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() { window.speechSynthesis.getVoices(); };
}

// ══════════════════════════════════════════════════════════
// MODE APPRENDRE — Exploration par catégorie
// ══════════════════════════════════════════════════════════

let _learnCat = '';
let _learnDir = 'sv';
let _learnRevealTimer = null;

function _learnGetEmoji(item) {
  const match = item.a.match(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})/u);
  return match ? match[0] : '📖';
}

function _learnGetFrText(item) {
  return item.a.replace(/^[\u{1F000}-\u{1FFFF}\u{2600}-\u{27FF}\u{2700}-\u{27BF}][\uFE0F]?\s*/u, '').trim();
}

function startLearn(cat) {
  _learnCat = cat;
  const catEmojis = {'Nature':'🌿','Animaux':'🐾','Saisons':'🗓️','Nourriture':'🍽️','Famille':'👨‍👩‍👧','Lieux':'🏙️','Couleurs':'🎨','Chiffres':'🔢','Émotions':'😀','Vêtements':'👗','Expressions':'💬','Présentations':'🙋','Communication':'🗣️','Verbes':'🔤'};
  const emoji = catEmojis[_learnCat] || '📂';
  document.getElementById('learnCatTitle').textContent = emoji + ' ' + _learnCat;
  showScreen('learnDirScreen');
}

function startLearnMode(dir) {
  _learnDir = dir;
  _renderLearnScreen();
  showScreen('learnScreen');
}

function _renderLearnScreen() {
  const catEmojis = {'Nature':'🌿','Animaux':'🐾','Saisons':'🗓️','Nourriture':'🍽️','Famille':'👨‍👩‍👧','Lieux':'🏙️','Couleurs':'🎨','Chiffres':'🔢','Émotions':'😀','Vêtements':'👗','Expressions':'💬','Présentations':'🙋','Communication':'🗣️','Verbes':'🔤'};
  const items = VOCAB.filter(v => v.cat === _learnCat);
  const emoji = catEmojis[_learnCat] || '📂';
  const dir = _learnDir;

  document.getElementById('learnScreenTitle').textContent = emoji + ' ' + _learnCat;
  document.getElementById('learnDirLabel').textContent = dir === 'sv'
    ? '🇸🇪 Suédois → clique pour voir en français'
    : '🇫🇷 Français → clique pour voir en suédois';

  const grid = document.getElementById('learnGrid');
  grid.innerHTML = '';

  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'learn-card';
    card.dataset.idx = idx;

    const emojiChar = _learnGetEmoji(item);
    const frText = _learnGetFrText(item);
    const svText = item.q;

    if (dir === 'sv') {
      card.innerHTML = `
        <div class="learn-card-emoji">${emojiChar}</div>
        <div class="learn-card-main">${svText}</div>
        <div class="learn-card-reveal" style="opacity:0;transition:opacity .2s">${frText}</div>
        <button class="learn-speak-btn" onclick="event.stopPropagation();speak('${svText.replace(/'/g,"\\'")}')">🔊</button>
      `;
    } else {
      card.innerHTML = `
        <div class="learn-card-emoji">${emojiChar}</div>
        <div class="learn-card-main">${frText}</div>
        <div class="learn-card-reveal" style="opacity:0;transition:opacity .2s">${svText}</div>
        <button class="learn-speak-btn" onclick="event.stopPropagation();speak('${svText.replace(/'/g,"\\'")}')">🔊</button>
      `;
    }

    card.addEventListener('click', function(e) {
      if (e.target.classList.contains('learn-speak-btn')) return;
      _learnRevealWord(card, svText);
    });

    grid.appendChild(card);
  });
}

function _learnRevealWord(card, svText) {
  const reveal = card.querySelector('.learn-card-reveal');
  if (!reveal) return;
  speak(svText);
  reveal.style.opacity = '1';
  card.classList.add('learn-card-revealed');
  clearTimeout(_learnRevealTimer);
  _learnRevealTimer = setTimeout(function() {
    reveal.style.opacity = '0';
    card.classList.remove('learn-card-revealed');
  }, 2000);
}
