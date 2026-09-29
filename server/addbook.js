const axios = require("axios");

axios.post("http://localhost:5000/api/books", {

    title: "The Last Little Star",

    author: "BookNest Originals",

    language: "English",

    category: "Short Story",

    content: `Chapter 1: The Little Star

Every night, a little star named Lumi watched the Earth from the sky. Lumi was smaller and dimmer than all the other stars, so she often wondered whether her light was important.

One evening, Lumi noticed a small village below. The village had no electricity because a powerful storm had damaged its power lines. The people were sitting outside their houses in darkness.

Lumi wanted to help, but she thought her tiny light could never be enough.

Chapter 2: A Small Light

Lumi decided to shine as brightly as she could. Her light reached a small boy named Arin, who was sitting near his window and looking at the sky.

Arin noticed the little star and smiled. He called his family outside to see it.

Soon, the villagers gathered together. They used small lamps and candles to help one another. The children played together, and the adults worked together to repair their homes.

Lumi watched happily. She finally understood that even a small light could give people hope.

Chapter 3: The Lesson

The next morning, the village received electricity again. Everyone remembered the beautiful little star they had seen during the storm.

Lumi was still the smallest star in the sky, but she no longer felt unimportant.

She learned that something does not have to be big to make a difference. Sometimes, even the smallest light can guide someone through the darkness.

And from that night onward, Lumi continued to shine with confidence.`,

    tamilContent: `அத்தியாயம் 1: சிறிய நட்சத்திரம்

ஒவ்வொரு இரவும், லூமி என்ற சிறிய நட்சத்திரம் வானத்திலிருந்து பூமியைப் பார்த்துக் கொண்டிருந்தது. மற்ற நட்சத்திரங்களை விட லூமி சிறியதாகவும் மங்கலாகவும் இருந்தது. அதனால் தனது ஒளி முக்கியமானதா என்று அவள் அடிக்கடி யோசித்தாள்.

ஒரு மாலை, கீழே இருந்த ஒரு சிறிய கிராமத்தை லூமி கவனித்தாள். ஒரு பெரிய புயல் மின்சார கம்பிகளை சேதப்படுத்தியதால் அந்த கிராமத்தில் மின்சாரம் இல்லை. மக்கள் தங்கள் வீடுகளுக்கு வெளியே இருளில் அமர்ந்திருந்தனர்.

உதவ வேண்டும் என்று லூமி விரும்பினாள். ஆனால் தனது சிறிய ஒளி போதாது என்று அவள் நினைத்தாள்.

அத்தியாயம் 2: ஒரு சிறிய ஒளி

லூமி தன்னால் முடிந்த அளவு பிரகாசமாக ஒளிர முடிவு செய்தாள். அவளுடைய ஒளி, ஜன்னல் அருகில் வானத்தைப் பார்த்துக் கொண்டிருந்த ஆரின் என்ற சிறுவனை அடைந்தது.

ஆரின் அந்த சிறிய நட்சத்திரத்தைப் பார்த்து புன்னகைத்தான். அவன் தனது குடும்பத்தினரை வெளியே அழைத்து வந்து அந்த நட்சத்திரத்தைக் காட்டினான்.

விரைவில், கிராம மக்கள் அனைவரும் ஒன்றாக கூடினர். அவர்கள் ஒருவருக்கொருவர் உதவ சிறிய விளக்குகளையும் மெழுகுவர்த்திகளையும் பயன்படுத்தினர். குழந்தைகள் ஒன்றாக விளையாடினர். பெரியவர்கள் தங்கள் வீடுகளை சரிசெய்ய ஒன்றாக வேலை செய்தனர்.

லூமி மகிழ்ச்சியுடன் பார்த்துக் கொண்டிருந்தாள். ஒரு சிறிய ஒளியும் மக்களுக்கு நம்பிக்கையை அளிக்க முடியும் என்பதை அவள் புரிந்து கொண்டாள்.

அத்தியாயம் 3: பாடம்

அடுத்த நாள் காலையில், அந்த கிராமத்திற்கு மீண்டும் மின்சாரம் வந்தது. புயலின் போது வானத்தில் தோன்றிய அந்த அழகான சிறிய நட்சத்திரத்தை அனைவரும் நினைவில் வைத்திருந்தனர்.

லூமி இன்னும் வானத்தில் இருக்கும் சிறிய நட்சத்திரமாகவே இருந்தாள். ஆனால் அவள் இனி தன்னை முக்கியமற்றவளாக நினைக்கவில்லை.

ஒரு மாற்றத்தை ஏற்படுத்துவதற்கு ஒன்று பெரியதாக இருக்க வேண்டிய அவசியமில்லை என்பதை அவள் கற்றுக்கொண்டாள். சில நேரங்களில், ஒரு சிறிய ஒளியே இருளில் இருக்கும் ஒருவருக்கு வழிகாட்ட முடியும்.

அந்த இரவு முதல், லூமி நம்பிக்கையுடன் தொடர்ந்து பிரகாசித்தாள்.`,

    hindiContent: `अध्याय 1: छोटा सितारा

हर रात, लूमी नाम का एक छोटा सितारा आकाश से पृथ्वी को देखता था। लूमी बाकी सितारों से छोटा और कम चमकीला था। इसलिए वह अक्सर सोचता था कि क्या उसकी रोशनी महत्वपूर्ण है।

एक शाम, लूमी ने नीचे एक छोटे से गाँव को देखा। एक तेज़ तूफान के कारण बिजली की तारें खराब हो गई थीं और गाँव में बिजली नहीं थी। लोग अपने घरों के बाहर अंधेरे में बैठे थे।

लूमी उनकी मदद करना चाहता था, लेकिन उसे लगा कि उसकी छोटी सी रोशनी पर्याप्त नहीं होगी।

अध्याय 2: एक छोटी रोशनी

लूमी ने जितना हो सके उतना चमकने का फैसला किया। उसकी रोशनी आरिन नाम के एक छोटे लड़के तक पहुँची, जो अपनी खिड़की के पास बैठकर आकाश को देख रहा था।

आरिन ने उस छोटे सितारे को देखा और मुस्कुराया। उसने अपने परिवार को बाहर बुलाया और उन्हें वह सितारा दिखाया।

जल्द ही गाँव के लोग एक साथ इकट्ठा हो गए। उन्होंने एक-दूसरे की मदद करने के लिए छोटी लालटेन और मोमबत्तियों का उपयोग किया। बच्चे साथ में खेलने लगे और बड़े लोग अपने घरों की मरम्मत करने के लिए मिलकर काम करने लगे।

लूमी यह सब देखकर खुश हुआ। उसने समझा कि एक छोटी सी रोशनी भी लोगों को उम्मीद दे सकती है।

अध्याय 3: सीख

अगली सुबह गाँव में फिर से बिजली आ गई। तूफान के दौरान दिखाई देने वाले उस सुंदर छोटे सितारे को सभी याद कर रहे थे।

लूमी अभी भी आकाश का सबसे छोटा सितारा था, लेकिन अब उसे खुद को महत्वहीन नहीं लगता था।

उसने सीखा कि बदलाव लाने के लिए किसी चीज़ का बड़ा होना जरूरी नहीं है। कभी-कभी एक छोटी सी रोशनी भी किसी को अंधेरे में रास्ता दिखा सकती है।

उस रात के बाद से लूमी आत्मविश्वास के साथ चमकता रहा।`

})
.then((response) => {

    console.log("Book added successfully:");

    console.log(response.data);

})
.catch((error) => {

    console.log("Error:", error.message);

});