document.addEventListener('DOMContentLoaded', () => {
    // width-dynamicクラスを持つ要素の幅を設定
    document.querySelectorAll('.width-dynamic').forEach(element => {
        const width = element.getAttribute('data-width');
        if (width) {
            element.style.width = `${width}%`;
        }
    });
}); 