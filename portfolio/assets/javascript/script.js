document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.slide-in-element');
  const elements2 = document.querySelectorAll('.slide-in-element2');

  const checkScroll = () => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      console.log(rect);
      // 要素が画面内に入ったら
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('slide-in');
        console.log('scrolling2...');
        console.log(`${element.className} has been animated`);
      }
    });
  };

  const checkScroll2 = () => {
    elements2.forEach((element) => {
      const rect = element.getBoundingClientRect();
      console.log(rect);
      // 要素が画面内に入ったら
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('slide-in');
        console.log('scrolling2...');
        console.log(`${element.className} has been animated`);
      }
    });
  };

  // スクロールイベントリスナーを追加
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('scroll', checkScroll2);

  // 初期チェックを行う
  checkScroll();
  checkScroll2();
});
