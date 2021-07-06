
function GenerateAnagram(message)
{
    if(message.length < 2) return message;

    // generate serial numbers
    let serials = new Array(message.length);
    for(let i = 0; i < message.length; ++i) serials[i] = i;
    
    // shuffle Fisher-Yates
    let i = serials.length;
    while(i){
        let j = Math.floor(Math.random() * i);
        let t = serials[--i];
        serials[i] = serials[j];
        serials[j] = t;
    }

    // swap characters
    let swapIdxs = [serials[0],serials[1]];
    let tmpMessage = message.split('');
    let tmp = tmpMessage[swapIdxs[0]];
    tmpMessage[swapIdxs[0]] = tmpMessage[swapIdxs[1]];
    tmpMessage[swapIdxs[1]] = tmp;
    message = tmpMessage.join('');

    return message;
}

const App = {
    data() {
      return {
        message: "",
        warnMessage: "",
        items: []
      }
    },
    methods: {
      GenerateAnagrams(event) {

        if(this.message.length < 2){
            this.warnMessage = "2文字以上入力してください。";
            return;
        }
        // clear items  
        this.items.length = 0;
        
        // generate anagrams
        let anagram = this.message;
        for(let i = 0; i < 100; ++i) {
            anagram= GenerateAnagram(anagram);
            this.items.push(anagram);    
         }
      }
    }
  }
  

  Vue.createApp(App).mount('#counter')