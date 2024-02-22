// client/script.js
document.getElementById('wordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim();
  
    // 簡易的なフロントエンドバリデーションは省略
  
    try {
      const response = await fetch('http://localhost:3000/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ word })
      });
  
      if (response.ok) {
        wordInput.value = ''; // 入力フィールドをクリア
        fetchWords(); // 単語リストを更新
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  async function fetchWords() {
    const response = await fetch('http://localhost:3000/api/words');
    const words = await response.json();
    
    const wordsList = document.getElementById('wordsList');
    wordsList.innerHTML = ''; // リストをクリア
  
    words.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word.word;
      wordsList.appendChild(li);
    });
  }
  
  // 初期単語リストの読み込み
  fetchWords();
  