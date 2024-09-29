void function(script) {
    const { searchParams } = new URL(script.src);
    fetch(searchParams.get('src')).then(r => r.text()).then(content => {
        script.outerHTML = content;
    });
}(document.currentScript);
