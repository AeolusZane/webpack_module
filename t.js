a = {}
function text() {
    a.s = () => {
        console.log(obj)
    };
    let obj = 123
};

text();
a.s();