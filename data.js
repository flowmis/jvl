const volleyballMatches = [
//Gruppenphase der Gruppe A
{ field: "Volleyball Halle 2 (Gruppe A)", time: "08:33", teams: ["A) Erdorgane", "A) Pritch Perfect"], score: [0, 0], referee: "Simon & Hr. Krieg" },
{ field: "Volleyball Halle 2 (Gruppe A)", time: "08:45", teams: ["A) Gegen,Gegen,Gegen", "A) Volleyball Divas"], score: [0, 0], referee: "Simon & Hr. Krieg" }, 
{ field: "Volleyball Halle 2 (Gruppe A)", time: "09:00", teams: ["A) Nika", "A) Erdorgane"], score: [0, 0], referee: "Simon & Hr. Krieg" }, 
{ field: "Volleyball Halle 2 (Gruppe A)", time: "09:15", teams: ["A) Pritch Perfect", "A) Gegen,Gegen,Gegen"], score: [0, 0], referee: "Elia & Fr. Jansen" },
{ field: "Volleyball Halle 2 (Gruppe A)", time: "09:30", teams: ["A) Volleyball Divas", "A) Nika"], score: [0, 0], referee: "Elia & Fr. Jansen" }, 
{ field: "Volleyball Halle 2 (Gruppe A)", time: "09:45", teams: ["A) Erdorgane", "A) Gegen,Gegen,Gegen"], score: [0, 0], referee: "Aaron & Hr. Große" }, 
{ field: "Volleyball Halle 2 (Gruppe A)", time: "10:00", teams: ["A) Pritch Perfect", "A) Nika"], score: [0, 0], referee: "Aaron & Hr. Große" }, 
{ field: "Volleyball Halle 2 (Gruppe A)", time: "10:15", teams: ["A) Gegen,Gegen,Gegen", "A) Nika"], score: [0, 0], referee: "Lenny & Hr. Große" }, 
{ field: "Volleyball Halle 2 (Gruppe A)", time: "10:30", teams: ["A) Erdorgane", "A) Volleyball Divas"], score: [0, 0], referee: "Lenny & Hr. Große" },
{ field: "Volleyball Halle 2 (Gruppe A)", time: "10:45", teams: ["A) Pritch Perfect", "A) Volleyball Divas"], score: [0, 0], referee: "Tea & Hr. Krieg" },
//Gruppenphase der Gruppe B
{ field: "Volleyball Halle 3 (Gruppe B)", time: "08:30", teams: ["B) Lehrer", "B) Pink Panter"], score: [0, 0], referee: "Aaron & Hr. Schuck" }, 
{ field: "Volleyball Halle 3 (Gruppe B)", time: "08:45", teams: ["B) Volleyball EG 13", "B) Vinzo"], score: [0, 0], referee: "Aaron & Hr. Schuck" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "09:00", teams: ["B) Blockbuster", "B) Lehrer"], score: [0, 0], referee: "Aaron & Hr. Schuck" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "09:15", teams: ["B) Pink Panter", "B) Volleyball EG 13"], score: [0, 0], referee: "Lenny & Hr. Schuck" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "09:30", teams: ["B) Vinzo", "B) Blockbuster"], score: [0, 0], referee: "Lenny & Hr. Schuck" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "09:45", teams: ["B) Lehrer", "B) Volleyball EG 13"], score: [0, 0], referee: "Tea & Fr. Jansen" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "10:00", teams: ["B) Pink Panter", "B) Blockbuster"], score: [0, 0], referee: "Tea & Fr. Jansen" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "10:15", teams: ["B) Volleyball EG 13", "B) Blockbuster"], score: [0, 0], referee: "Leonie & Hr. Krieg" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "10:30", teams: ["B) Lehrer", "B) Vinzo"], score: [0, 0], referee: "Leonie & Hr. Krieg" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "10:45", teams: ["B) Pink Panter", "B) Vinzo"], score: [0, 0], referee: "Lara & Fr. Jansen" },
//Viertelfinale
{ field: "Volleyball Halle 2 (Gruppe A)", time: "11:10", teams: ["A) Platz 1", "B) Platz 4"], score: [0, 0], referee: "" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "11:10", teams: ["A) Platz 2", "B) Platz 3"], score: [0, 0], referee: "" },
{ field: "Volleyball Halle 2 (Gruppe A)", time: "11:30", teams: ["A) Platz 3", "B) Platz 2"], score: [0, 0], referee: "" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "11:30", teams: ["A) Platz 4", "B) Platz 1"], score: [0, 0], referee: "" },
//Halbfinale
{ field: "Volleyball Halle 2 (Gruppe A)", time: "11:50", teams: ["Gewinner Viertelfinale 1", "Gewinner Viertelfinale 2"], score: [0, 0], referee: "" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "11:50", teams: ["Gewinner Viertelfinale 3", "Gewinner Viertelfinale 4"], score: [0, 0], referee: "" },
//Finale und Spiel um Platz 3
{ field: "Volleyball Halle 2 (Gruppe A)", time: "12:10", teams: ["Gewinner Halbfinale 1", "Gewinner Halbfinale 2"], score: [0, 0], referee: "" },
{ field: "Volleyball Halle 3 (Gruppe B)", time: "12:10", teams: ["Verlierer Halbfinale 1", "Verlierer Halbfinale 2"], score: [0, 0], referee: "" }
];

const voelkerballMatches = [
{ field: "Völkerball Halle 4", time: "08:30", teams: ["A) Franklin OG’s", "A) Kahos"], score: [0, 0], referee: "Tea & Fr. Betz" },
{ field: "Völkerball Halle 1", time: "08:30", teams: ["B) Wer macht Para?", "B) Feld 2"], score: [0, 0], referee: "Lara & Fr. Fichter" },
{ field: "Völkerball Halle 4", time: "08:40", teams: ["C) Die Bitches", "C) Freud am Sieg"], score: [0, 0], referee: "Tea & Fr. Betz" },
{ field: "Völkerball Halle 1", time: "08:40", teams: ["D) Schnelle Schnecken", "D) Dr. Große Minions"], score: [0, 0], referee: "Lara & Fr. Fichter" },
{ field: "Völkerball Halle 4", time: "08:50", teams: ["E) DREIFACHTREFFER", "E) Abstürz"], score: [0, 0], referee: "Tea & Fr. Betz" },
{ field: "Völkerball Halle 1", time: "08:50", teams: ["F) Banane & Diebe", "F) Silberschweif"], score: [0, 0], referee: "Lara & Fr. Fichter" },
{ field: "Völkerball Halle 4", time: "09:00", teams: ["A) Intim im Team", "A) Lehrerteam"], score: [0, 0], referee: "Tea & Fr. Betz" },
{ field: "Völkerball Halle 1", time: "09:00", teams: ["B) FC Biercelona", "B) Black Panter"], score: [0, 10], referee: "Lara & Fr. Fichter" },
{ field: "Völkerball Halle 4", time: "09:10", teams: ["C) Buch & Run", "C) Werf du doch!"], score: [0, 0], referee: "Leonie & Fr. Schenk" },
{ field: "Völkerball Halle 1", time: "09:00", teams: ["D) Die Favoriten", "D) SG 13_1"], score: [0, 0], referee: "Lara & Fr. Fichter" },
{ field: "Völkerball Halle 4", time: "09:20", teams: ["E) Völkerball 13", "E) Die Rum-Hocker"], score: [0, 0], referee: "Leonie & Fr. Schenk" },
{ field: "Völkerball Halle 1", time: "09:10", teams: ["A) Franklin OG’s", "A) Intim im Team"], score: [0, 0], referee: "Emma & Fr. Schnorr" },
{ field: "Völkerball Halle 4", time: "09:30", teams: ["B) Wer macht Para?", "B) FC Biercelona"], score: [10, 0], referee: "Leonie & Fr. Schenk" },
{ field: "Völkerball Halle 1", time: "09:20", teams: ["C) Die Bitches", "C) Buch & Run"], score: [0, 0], referee: "Emma & Fr. Schnorr" },
{ field: "Völkerball Halle 4", time: "09:30", teams: ["D) Schnelle Schnecken", "D) Die Favoriten"], score: [0, 0], referee: "Leonie & Fr. Schenk" },
{ field: "Völkerball Halle 1", time: "09:30", teams: ["E) DREIFACHTREFFER", "E) Völkerball 13"], score: [0, 0], referee: "Emma & Fr. Schnorr" },
{ field: "Völkerball Halle 1", time: "09:40", teams: ["A) Kahos", "A) Lehrerteam"], score: [0, 0], referee: "Emma & Fr. Schnorr" },
{ field: "Völkerball Halle 4", time: "09:40", teams: ["F) Gen Z", "F) Nein zu AfD"], score: [0, 0], referee: "Leonie & Fr. Schenk" },
{ field: "Völkerball Halle 4", time: "09:50", teams: ["B) Feld 2", "B) Black Panter"], score: [0, 0], referee: "Lara & ?" },
{ field: "Völkerball Halle 1", time: "09:50", teams: ["C) Freud am Sieg", "C) Werf du doch!"], score: [0, 0], referee: "Simon & ?" },
{ field: "Völkerball Halle 4", time: "10:00", teams: ["D) Dr. Große Minions", "D) SG 13_1"], score: [0, 0], referee: "Lara & ?" },
{ field: "Völkerball Halle 1", time: "10:00", teams: ["E) Abstürz", "E) Die Rum-Hocker"], score: [0, 0], referee: "Simon & ?" },
{ field: "Völkerball Halle 4", time: "10:10", teams: ["F) Banane & Diebe", "F) Gen Z"], score: [0, 0], referee: "Lara & ?" },
{ field: "Völkerball Halle 1", time: "10:10", teams: ["A) Franklin OG’s", "A) Lehrerteam"], score: [0, 0], referee: "Simon & ?" },
{ field: "Völkerball Halle 4", time: "10:20", teams: ["B) Wer macht Para?", "B) Black Panter"], score: [0, 0], referee: "Emma & Fr. Götz" },
{ field: "Völkerball Halle 1", time: "10:20", teams: ["C) Die Bitches", "C) Werf du doch!"], score: [0, 0], referee: "Elia & Fr. Schenk" },
{ field: "Völkerball Halle 4", time: "10:30", teams: ["D) Schnelle Schnecken", "D) SG 13_1"], score: [0, 0], referee: "Emma & Fr. Götz" },
{ field: "Völkerball Halle 1", time: "10:30", teams: ["E) DREIFACHTREFFER", "E) Die Rum-Hocker"], score: [0, 0], referee: "Elia & Fr. Schenk" },
{ field: "Völkerball Halle 4", time: "10:40", teams: ["F) Silberschweif", "F) Nein zu AfD"], score: [0, 0], referee: "Emma & Fr. Götz" },
{ field: "Völkerball Halle 1", time: "10:40", teams: ["A) Kahos", "A) Intim im Team"], score: [0, 0], referee: "Elia & Fr. Schenk" },
{ field: "Völkerball Halle 4", time: "10:50", teams: ["B) Feld 2", "B) FC Biercelona"], score: [10, 0], referee: "Emma & Fr. Götz" },
{ field: "Völkerball Halle 1", time: "10:50", teams: ["C) Freud am Sieg", "C) Buch & Run"], score: [0, 0], referee: "Elia & Fr. Schenk" },
{ field: "Völkerball Halle 4", time: "10:50", teams: ["D) Dr. Große Minions", "D) Die Favoriten"], score: [0, 0], referee: "Simon & Fr. Dellemann-Weiße" },
{ field: "Völkerball Halle 1", time: "11:00", teams: ["E) Abstürz", "E) Völkerball 13"], score: [0, 0], referee: "Aaron & Hr. Lenhard" },
{ field: "Völkerball Halle 4", time: "11:00", teams: ["F) Banane & Diebe", "F) Nein zu AfD"], score: [0, 0], referee: "Simon & Fr. Dellemann-Weiße" },
{ field: "Völkerball Halle 1", time: "11:10", teams: ["F) Silberschweif", "F) Gen Z"], score: [0, 0], referee: "Aaron & Hr. Lenhard" },
//Achtelfinale
{ field: "Völkerball Halle 4", time: "11:20", teams: ["A) Platz 1", "B) Platz 2"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 1", time: "11:20", teams: ["B) Platz 1", "A) Platz 2"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 4", time: "11:30", teams: ["C) Platz 1", "D) Platz 2"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 1", time: "11:30", teams: ["D) Platz 1", "C) Platz 2"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 4", time: "11:40", teams: ["E) Platz 1", "F) Platz 2"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 1", time: "11:40", teams: ["F) Platz 1", "E) Platz 2"], score: [0, 0], referee: "" },
//Viertelfinale - Die zwei besten Verliere kommen weiter
{ field: "Völkerball Halle 4", time: "11:50", teams: ["Gewinner Achtelfinale 1", "Bester Verlierer Achtelfinale"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 1", time: "11:50", teams: ["Gewinner Achtelfinale 2", "Zweitbester Verlierer Achtelfinale"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 4", time: "12:00", teams: ["Gewinner Achtelfinale 3", "Gewinner Achtelfinale 4"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 1", time: "12:00", teams: ["Gewinner Achtelfinale 5", "Gewinner Achtelfinale 6"], score: [0, 0], referee: "" },
//Halbfinale
{ field: "Völkerball Halle 4", time: "12:10", teams: ["Gewinner Viertelfinale 1", "Gewinner Viertelfinale 3"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 1", time: "12:10", teams: ["Gewinner Viertelfinale 2", "Gewinner Viertelfinale 4"], score: [0, 0], referee: "" },
//Finale und Spiel um Platz 3
{ field: "Völkerball Halle 4", time: "12:20", teams: ["Gewinner Halbfinale 1", "Gewinner Halbfinale 2"], score: [0, 0], referee: "" },
{ field: "Völkerball Halle 1", time: "12:20", teams: ["Verlierer Halbfinale 1", "Verlierer Halbfinale 2"], score: [0, 0], referee: "" }
];

// Volleyball gemeldete Teams:
// Gruppe A
// - [ ] Erdorgane (SG 12/1)
// - [ ] Pritch Perfect (SG 12/1)
// - [ ] Gegen,Gegen,Gegen (SG 11/1)
// - [ ] Volleyball Divas (VABO 1)
// - [ ] Nika (BTG 11)
// Gruppe B
// - [ ] Lehrer
// - [ ] Pink Panter (AV 1)
// - [ ] Volleyball EG 13 (EG 13)
// - [ ] Vinzo (BTG11)
// - [ ] Blockbuster (BTG/EG 12)

// 1. Gruppenphase alle gegen alle (8min Spiel 2min Wechselzeit) Start 8:50? -> Ende: 10:30
// 2. Viertelfinale dann Halbfinale und dann Finale?

// Völkerball gemeldete Teams: 6 Gruppen mit je 4 Teams -> 24 Teams -> Gruppenphase: Jeder gegen Jeden (Pro Gruppe 6 Spiele auf 2 Feldern -> 6*6/2 = 16 Runden je 8min Spiel +2min Wechselzeit -> 160min -> 2h40 -> Beginn auf 8:30 Uhr gelegt. -> Letztes Spiel: 11:10 Uhr -> Erstplatzierte und Zweitplatzierte spielen Überkreuz -> Gewinner davon ziehen mit den zwei besten Verlieren ins Viertelfinale ein -> Viertelfinalgewinner spielen das Halbfinale und die Gewinner dann das Finale
// - [ ] A) Franklin OG‘s (SG 12/2)
// - [ ] A) Intim im Team (2 BFH2)
// - [ ] A) Kahos (1BKEH1)
// - [ ] A) Lehrerteam
// - [ ] B) Wer macht Para? (SG 12/2)
// - [ ] B) Fc Biercelona (1BKEH1) //Abgemeldet bei Pfister
// - [ ] B) Feld 2 (SO1)
// - [ ] B) Black Panter (AV 1)
// - [ ] C) Die Bitches (EG 11)
// - [ ] C) Freud am Sieg (SG 13/2)
// - [ ] C) Buch & Run (BTG 13)
// - [ ] C) Werf du doch! (SG11/1)
// - [ ] D) Schnelle Schnecken (2 BFH2)
// - [ ] D) Dr. Große Minions (AV4)
// - [ ] D) Die Favoriten (SG 11/2)
// - [ ] D) SG 13_1 (SG 13/1)
// - [ ] E) DREIFACHTREFFER (VABO 1)
// - [ ] E) Abstürz (AV 2)
// - [ ] E) Die Rum-Hocker (SG 11/2)
// - [ ] E) Völkerball 13 (EG 13)
// - [ ] F) Silberschweif (AV 2)
// - [ ] F) Banane & Diebe (SO 2)
// - [ ] F) Gen Z (AV 3)
// - [ ] F) Nein zu AfD (AV 3)

// ToDo:
// - Turnierplan drucken A3 und Link zum Turnierplan als QR Code ausdrucken A5 -> etwas zum befestigen (Tesa,...)
// - Github als Alternative
// - Erklärung zur Gruppenphase etc. in A4 ausdrucken (Miriam Lutz)
// - Turnierplan so abändern, dass Punkte in Spalte 1 ist (errechnet aus Unentschieden +1, Sieg +3), in Spalte 2 die Punktedifferenz in Spalte 3 die Anzahl der gespielten Spiele -> Ergebnisse nach Gruppen sortiert anzeigen lassen
// - Ansage: Hinweis zu Anmeldung der Teams (einer soll anmelden kommen wenn das Team vollständig spielberei vor Ort ist) auf Funktion Onlineturnierplan + wo welches Feld ist + Erste Spielpaarungen mit Schiris + Teams für Folgespiel warmmachen/bereithalten und wer zu spät kommt erhält Punktabzug?
// - Musikbox ist geladen?
// - Schiris auf die Zeit achten und "fehlende Zeit" selbst wieder reinholen. Auf den Turnierplan achten - Aktualisieren (bitte nicht übertreiben mit dem aktualisieren!)
// - Zettel für Ergebnisse der abgeholt wird von Läuferteams -> es dauert etwas bis die Ergebnisse eingetragen sind und euch zugänglich gemacht wurde!
