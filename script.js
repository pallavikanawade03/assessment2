document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newRecommendation = document.getElementById('new-recommendation').value;
    if (newRecommendation) {
        const recommendationList = document.getElementById('recommendation-list');
        const newListItem = document.createElement('li');
        newListItem.textContent = newRecommendation;
        recommendationList.appendChild(newListItem);

        alert('Recommendation added successfully!');

        document.getElementById('new-recommendation').value = '';
    }
});
