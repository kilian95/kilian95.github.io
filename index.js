// TODO - Sentences are too small (less than three words)
// 			- Random capital letters

$(function() {
  
	var words = ['bake', 'banjaxed', 'banter', 'beezer', 'big lad', 'bout ye', 'catch yourself on,', 'cracker', 'craic', 'dander', 'dead on', 'eejit', 'faffin', 'fegs', 'grand', 'kex', 'melter', 'munter', 'mucker', 'offie', 'oul-doll', 'peelers', 'ratten', 'spuds', 'steamin', 'wee', 'what about ye,', 'wind yer neck in,', 'ats me nai', 'buck eejit', 'gurn', 'yoke', 'foundered', 'quare stretch in the evenings hi,', 'whats the craic', 'yer da sells avon', 'yer mas your da', 'swall', 'you know yourself,', 'sucking diesel', 'boyo', 'chancer', 'culchie', 'gaff', 'keep er lit,' , 'uppa hoods'];

	$("#generate").click(function() {
		var paragraphs = $("#paragraphs").val();
		
		// Max of 10 paragraphs
		if (paragraphs > 10) {
			paragraphs = 10;
		}

		// Remove existing paragraphs
		$('#output').empty().removeClass("display-none");
		$('#copy').removeClass("display-none");
		$('.bucky').removeClass("display-none");


		for (var i = 0; i < paragraphs; i++) {
			generateParagraph();
		}
	});

	// Return random number
	function getSentenceLength() {
		var min = 3;
		var max = 10;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function randomizeArray() {
		words.sort(function() { return 0.5 - Math.random() });
	}

	function generateParagraph() {
		var index = 0;
		randomizeArray();

		// Add grammar to each sentence
		for (i = 0; i < words.length; i += sentenceLength) {

    	var sentenceLength = getSentenceLength();
    	var index = index + sentenceLength;

    	// Add grammar
    	addFullStops(words, index);
    	addCapitalLetters(words, index);
    	    	
		}  

		addFullStopLastWord(words);
		
		// Join contents of array into string
		var paragraph = words.join(' ');


		$('#output').append('<p>' + paragraph + '</p>');

		
	}


	function addFullStopLastWord(words) {

		var lastWord = words[words.length-1].toString();

		if (lastWord.includes(',')) {
			lastWord = lastWord.replace(',', '.');
		}
		else {
			lastWord = lastWord.concat('.');

			// Remove double full stop from last word when it appears
			if (lastWord.includes('..')) {
				lastWord = lastWord.replace('..', '.');
			}
		}
   	words[words.length-1] = lastWord;
	}


	function addFullStops(words, index) {
		// Add full stops
  	// Get last word of sentence and convert to string. Make sure word exists
  	if (words[index]) {
  		var endSentence = words[index].toString();

  		// If the last word has a comma replace it with a full stop
  		if (endSentence.includes(',')) {
  			endSentence = endSentence.replace(',', '.');  // Change to regex
  		}
  		else {
  			endsentence = endSentence.concat('.');
  		}
  		words[index] = endSentence
  	}
	}

	function addCapitalLetters(words, index) {
		// Add capital letter to first word
		var firstWord = words[0].toString(); 
    	firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    	words[0] = firstWord;

    // Add capital letter to start of each sentence.
		if (index + 1 < words.length) {
			firstWord = words[index + 1].toString();
			firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
			words[index + 1] = firstWord
		}
	}
});