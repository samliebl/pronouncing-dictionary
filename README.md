# pronouncing-dictionary

## Overview

Analyzes a given text and returns CMU dictionary entries for each word.

## Usage

```js
import { pronouncingDictionary } from './index.js';

const inputText = `\
The quick brown fox
jumped over
the lazy dog.\
`;

console.log(pronouncingDictionary(inputText));
```

### Expected Result

```js
{
  the: 'DH AH0',
  quick: 'K W IH1 K',
  brown: 'B R AW1 N',
  fox: 'F AA1 K S',
  jumped: 'JH AH1 M P T',
  over: 'OW1 V ER0',
  lazy: 'L EY1 Z IY0',
  dog: 'D AO1 G'
}
```

## Acknowledgments

CMU Pronouncing Dictionary  
\[[About](http://www.speech.cs.cmu.edu/cgi-bin/cmudict#about)\] 
\[[GitHub](https://github.com/Alexir/CMUdict)\] 
\[[Wikipedia](https://en.wikipedia.org/wiki/ARPABET)\]