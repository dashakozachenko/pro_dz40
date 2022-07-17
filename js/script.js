'use strict';

(function (){

    const user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }

    const deepFreeze = (obj) => {
        Object.keys(obj).forEach((property) => {
            if (
                typeof obj[property] === "object" &&
                !Object.isFrozen(obj[property])
            )
                deepFreeze(obj[property]);
        });
        return Object.freeze(obj);
    };
    deepFreeze(user);

    console.log(Object.getOwnPropertyDescriptor(user, 'data'));
    console.log(Object.isFrozen(user));

}());

