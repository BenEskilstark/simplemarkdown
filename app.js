
// Fetch the markdown file content
fetch('example.md')
  .then(response => response.text())
  .then(text => {
    // Convert markdown text to HTML using marked
    const html = marked.parse(text);

    // Insert the HTML content into the HTML file
    document.getElementById('markdown-content').innerHTML = html;

    hljs.highlightAll();
  });
