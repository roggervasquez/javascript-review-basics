
// Just the string types , but just properties do not consider arrays
function showProperties (obj) {
    for (let item in obj) {
        if (typeof obj[item] === 'string') {
            console.log (item, obj[item]);
        } else if ( typeof obj[item] === 'object') {
           if (!Array.isArray(obj[item])) 
                showProperties (obj[item]) ; // Call it recursively
        }
    }
}

// Just the string types , but just properties but this time consider objects inside arrays
function showPropertiesV2 (obj) {
    for (let item in obj) {
        if (typeof obj[item] === 'string') {
            console.log (item, obj[item]);
        } else if ( typeof obj[item] === 'object') {
           if (Array.isArray(obj[item])) {
                for (element of obj[item]) {
                    if (typeof element === 'object')
                        showPropertiesV2 (element) ; // Call it recursively 
                };
            }  else {
                showPropertiesV2 (obj[item]) ; // Call it recursively
            }
               
        }
    }
}

const movie = {
    title: 'pulp fiction',
    year : 2006,
    director : 'Tarantino',
    durationMinutes: 120,
    details : {
        genre : 'triller',
        oscars : 2,
        moreDetail : {
            other : 'test',
            value : 12,
            another : 'dddd',
            actors : [
                'travolta',
                'samuel',
                 {
                   complex : {
                      aNumber : 12,
                      deepString : 'deepString'
                   }
                 }
            ] 
        }
    }

}

//showProperties (movie);
showPropertiesV2 (movie);

