var T9WORD = T9WORD || {}; // namespace component 

T9WORD.lookupService = (function(){
    var realWords = [], cache = {};

    function getData(from, word){ 
        return $.ajax ({ 
            url: from,
            success: function (data) { 
                if (data.length){
                    console.info (data[0].word);
                    realWords.push(data[0].word);  
                } else {
                    console.info (word + " is NOT a word");
                }
            },
            dataType: 'jsonp',
            contentType: 'application/json',
            statusCode: {
                404: function() {
                    console.info ('page not found - 404');
                }
            }
        }
    )}

    return function getDefinitions(words, key){
        var promises = [];
        realWords = [];

        if (cache[key]){
            console.info ("retrieving from cache");
            $q = $.Deferred();
            $q.resolve(cache[key]);
            return $q.promise();
        }

        for (var x = 0, l = words.length; x < l; x = x + 1){
            // TEST - http://jsperf.com/looporreplace
            var promise = getData('http://api.wordnik.com:80/v4/word.json/'+ words[x] +'/definitions?limit=1&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', words[x]);
            promises.push(promise);
        }

        return $.when.apply(undefined, promises)
        .then(
            function(data){
                console.info("SUCCESS - ");
                console.info(realWords);
                cache[key] = realWords;
                return realWords;
            }
        ).fail(
            function(data){
                console.info("FAIL - ");
                console.info (data);
            }
        );
    }
})();