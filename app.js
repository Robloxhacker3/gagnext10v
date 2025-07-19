const API = 'https://your-backend.repl.co'; // Replace with real backend

document.addEventListener('DOMContentLoaded', () => {
  const tradeForm = document.getElementById("tradeForm");
  if (tradeForm) {
    tradeForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const user = document.getElementById("user").value;
      const offer = document.getElementById("offer").value;
      const want = document.getElementById("want").value;
      await fetch(API + '/post-trade', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user, offer, want })
      });
      alert("Trade posted!");
      location.href = "index.html";
    });
  }

  const tradesEl = document.getElementById("trades");
  if (tradesEl) {
    fetch(API + '/trades')
      .then(res => res.json())
      .then(data => {
        data.forEach(trade => {
          const div = document.createElement("div");
          div.className = "trade-card";
          div.innerHTML = `
            <div class="trade-header">
              <span><i data-lucide="user"></i> ${trade.user}</span>
              <button class="chat-btn" onclick="alert('Opening chat with ${trade.user}')">
                <i data-lucide="message-circle"></i> Chat
              </button>
            </div>
            <div class="trade-body">
              <p><b>Offers:</b> ${trade.offer}</p>
              <p><b>Wants:</b> ${trade.want}</p>
            </div>`;
          tradesEl.appendChild(div);
        });
        lucide.createIcons();
      });
  }
});

function loginAdmin() {
  const pw = document.getElementById("password").value;
  if (pw === "letmein123") {
    alert("Admin logged in!");
  } else {
    alert("Wrong password!");
  }
}

function loginMiddleman() {
  const pw = document.getElementById("middlepass").value;
  if (pw === "middle123") {
    alert("Middleman logged in!");
  } else {
    alert("Wrong password!");
  }
}
