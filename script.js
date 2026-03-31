document.addEventListener("DOMContentLoaded", () => {
    // 1. 共通メニューの挿入
    const menuHTML = `
        <div class="sidebar-box">
            <h3>MENU</h3>
            <a href="index.html" class="nav-btn">TOP</a>
            <a href="diary.html" class="nav-btn">DIARY</a>
            <a href="link.html" class="nav-btn">LINK</a>
        </div>
    `;
    document.querySelectorAll('#common-menu').forEach(el => el.innerHTML = menuHTML);

    // 2. カウンター処理（擬似）
    const counterEl = document.getElementById("visit-count");
    if (counterEl) {
        let count = parseInt(localStorage.getItem("hit_count") || "4648");
        count++;
        localStorage.setItem("hit_count", count);
        counterEl.innerText = count.toString().padStart(7, '0');
        
        if (count % 10 === 0) {
            alert("祝！！ " + count + " HIT達成！キリ番報告してね♪");
        }
    }

    // 3. 右クリック禁止
    document.body.addEventListener('contextmenu', (e) => {
        alert("右クリック禁止だよ！");
        e.preventDefault();
    });

    // 4. マウスストーカー
    document.addEventListener('mousemove', (e) => {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = e.pageX + 'px';
        star.style.top = e.pageY + 'px';
        document.body.appendChild(star);
        setTimeout(() => star.remove(), 800);
    });

    console.log("%c隠しメッセージ：ソースを見るなんて通だね！", "color: yellow; background: black;");
});
