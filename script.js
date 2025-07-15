const API_URL = 'https://script.google.com/macros/s/AKfycbyGiFPB1BgC2xqzn_fw7uMg23sdU_gw17tkBcN8vGvubVy4gVKhSX-xz0qIhacbBbPx3Q/exec';

function loadReviews() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('reviews-container');
      container.innerHTML = '';
      data.forEach(text => {
        const div = document.createElement('div');
        div.className = 'review';
        div.innerHTML = `<div class="author"> </div><div class="text">"${text}"</div>`;
        container.appendChild(div);
      });
    });
}
loadReviews();

document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const params = new URLSearchParams(formData).toString();

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  })
  .then(() => {
    alert("Thanks for your review!");
    e.target.reset();
    loadReviews(); // reload new list
  })
  .catch(err => alert("Something went wrong."));
});


