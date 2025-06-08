import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        pagination: false,
        arrows: false,
        drag: false, // スワイプを無効にしたい場合
    });

    splide.mount();

    // 「次へ」ボタン用
    document.querySelectorAll('.next-btn').forEach((btn) => {
        // 「はじめる」ボタン以外のボタンにイベントリスナーを追加
        if (!btn.textContent.includes('はじめる')) {
            btn.addEventListener('click', () => {
                splide.go('>'); // Splideの次のスライドへ移動
            });
        } else if (btn.hasAttribute('data-url')) {
            // 「はじめる」ボタンの場合はダッシュボードに遷移
            btn.addEventListener('click', () => {
                window.location.href = btn.getAttribute('data-url');
            });
        }
    });
});