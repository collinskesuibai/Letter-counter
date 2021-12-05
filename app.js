const input = `The earliest reference of the strait was from maps from the Polo family; 
based on the adventures of Marco Polo. From at least 1562, European geographers thought that there was a Strait of Anián between Asia and North America. In 1648, Semyon Dezhnyov probably passed through the strait, but his report did not reach Europe. Danish-born Russian navigator Vitus Bering entered it in 1728. In 1732, Mikhail Gvozdev crossed it for the first time, from Asia to America. Adolf Erik Nordenskiold in 1878–79 sailed along the northern coast of Siberia, thereby proving that there was no northern land bridge from Asia to North America. In March 1913, Captain Max Gottschalk (German) crossed from the East Cape of Siberia to Shishmaref, Alaska, on dogsled via Little and Big Diomede islands. He was the first documented modern voyager to cross from Russia to North America without the use of a boat. 
In July 2012, six adventurers associated with "Dangerous Waters", a reality adventure show under production, made the crossing on Sea-Doos but were arrested and permitted to return to Alaska on their Sea-Doos after being briefly detained in Lavrentiya, administrative center of the Chukotsky District. They were treated well and given a tour of the village's museum, but not permitted to continue south along the Pacific coast. The men had visas but the western coast of the Bering Strait is a closed military zone. 
Between August 4 and 10 (US time), 2013, a team of 65 swimmers from 17 countries performed a relay swim across the Bering Strait, the first such swim in history. They swam from Cape Dezhnev, Russia, to Cape Prince of Wales, United States (roughly 110 km, due to the current). They had direct support from the Russian Navy, using one of its ships, and assistance with permission.`;

const alphabets = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const countNumberOfLetters = (text) => {
  let no = 0;
  let final = [];
  console.log(text.length);
  alphabets.forEach((letter, index) => {
    let t = { letter: letter, number: 0 };

    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i).toLowerCase() === letter.toLocaleLowerCase()) {
        t.number++;
      }
    }

    final.push(t);
  });

  return final;
};

console.log(countNumberOfLetters(input, '4'));

const countNumberOfSpecificLetter = (text, letter) => {
  let no = 0;
  console.log(text.length);

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).toLowerCase() === letter.toLowerCase()) {
      no++;
    }
  }
  return no;
};

console.log(countNumberOfLetters(input, '4'));
