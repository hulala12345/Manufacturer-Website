document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: 'Classic Sneaker', image: 'https://via.placeholder.com/200' },
    { name: 'Leather Boot', image: 'https://via.placeholder.com/200' },
    { name: 'Canvas Runner', image: 'https://via.placeholder.com/200' }
  ];

  const processSteps = [
    'Design & Prototyping',
    'Material Sourcing',
    'Cutting & Stitching',
    'Quality Control',
    'Packaging & Delivery'
  ];

  const newsItems = [
    { date: '2024-07-01', title: 'New Factory Opens in Ohio' },
    { date: '2024-06-15', title: 'Sustainable Materials Initiative' },
    { date: '2024-05-30', title: 'Featured in Footwear Magazine' }
  ];

  const jobs = [
    { title: 'Production Manager', location: 'Ohio', description: 'Oversee daily operations.' },
    { title: 'Marketing Specialist', location: 'Remote', description: 'Drive brand campaigns.' },
    { title: 'Footwear Designer', location: 'New York', description: 'Create innovative designs.' }
  ];

  populateProducts(products);
  populateProcess(processSteps);
  populateNews(newsItems);
  populateJobs(jobs);
});

function populateProducts(items) {
  const container = document.getElementById('product-list');
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${p.image}" alt="${p.name}" /><h3>${p.name}</h3>`;
    container.appendChild(card);
  });
}

function populateProcess(steps) {
  const list = document.getElementById('process-list');
  steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    list.appendChild(li);
  });
}

function populateNews(items) {
  const list = document.getElementById('news-list');
  items.forEach(n => {
    const li = document.createElement('li');
    li.textContent = `${n.date}: ${n.title}`;
    list.appendChild(li);
  });
}

function populateJobs(items) {
  const container = document.getElementById('jobs');
  items.forEach(j => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${j.title}</h3><p>${j.location}</p><p>${j.description}</p>`;
    container.appendChild(card);
  });
}
