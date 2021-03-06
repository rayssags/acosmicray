function setModifiedDate() {
  if (document.getElementById('last-modified')) {
    fetch("https://api.github.com/repos/{{ site.github.owner_name }}/{{ site.github.repository_name }}/commits?path={{ page.path }}")
      .then((response) => {
        return response.json();
      })
      .then((commits) => {
        var modified = commits[0]['commit']['committer']['date'].slice(0,10);
        if(modified != "{{ page.date | date: "%Y-%m-%d" }}") {
          document.getElementById('last-modified').textContent = "Last Modified: " + modified;
        }
      });
  }
}