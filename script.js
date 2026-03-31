// 1. カウンター & キリ番アラート
let count = parseInt(localStorage.getItem("hit_count") || "770");
count++;
localStorage.setItem("hit_count", count);
document.getElementById("visit-count").innerText = count.toString().padStart(7, '0');

if (count % 10 === 0) {
    alert("祝！！ " + count + " HIT達成！キリ番踏んじゃいましたね♪");
}

// 2. 右クリック禁止の警告
document.body.addEventListener('contextmenu', () => {
    alert("右クリック禁止だよ！画像のお持ち帰りはやめてね★");
});

// 3. マウスストーカー (キラキラ演出)
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    document.body.appendChild(star);
    
    // 1秒後に消す
    setTimeout(() => {
        star.remove();
    }, 1000);
});

// 4. コンソールへの隠しメッセージ
console.log("%cソースコードを覗くなんて、お主も悪よのう...", "color: yellow; background: black; font-size: 20px;");
