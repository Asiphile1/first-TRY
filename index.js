document.addEventListener("DOMContentLoaded", () => {
  const joinCommunityContent = `
    <h1>Join our community</h1>
    <p class="highlight">30-day, hassle-free money back guarantee</p>
    <p>Gain access to our full library of tutorials along with expert code reviews.</p>
    <p>Perfect for any developers who are serious about honing their skills.</p>
  `;
  const monthlySubscriptionContent = `
    <h2>Monthly Subscription</h2>
    <p class="price">&dollar;29 per month</p>
    <p>Full access for less than &dollar;1 a day</p>
  `;
  const whyUsContent = `
    <h2>Why Us</h2>
    <ul>
      <li>Tutorials by industry experts</li>
      <li>Peer &amp; expert code review</li>
      <li>Coding exercises</li>
      <li>Access to our GitHub repos</li>
      <li>Community forum</li>
      <li>Flashcard decks</li>
      <li>New videos every week</li>
    </ul>
  `;

  document.getElementById("join-community").innerHTML = joinCommunityContent;
  document.getElementById("monthly-subscription").innerHTML = monthlySubscriptionContent;
  document.getElementById("why-us").innerHTML = whyUsContent;
});
