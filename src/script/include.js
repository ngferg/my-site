void function(script) {
    const { searchParams } = new URL(script.src);
    fetch(searchParams.get('src')).then(r => r.text()).then(content => {
        script.outerHTML = content;
    });
}(document.currentScript);

document.addEventListener('keydown', function(event) {
    const pressedKey = event.key;
    console.log("Key pressed:", pressedKey);
});

