function generatePreview() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const url = document.getElementById('url').value;
    const image = document.getElementById('image').value;
  
    document.getElementById('og-title').textContent = title || 'Your Title';
    document.getElementById('og-desc').textContent = description || 'Your description will show here.';
    document.getElementById('og-url').textContent = url || 'https://yourdomain.com';
    document.getElementById('og-url').href = url || '#';
    document.getElementById('og-image').src = image || 'https://via.placeholder.com/150';
  }  