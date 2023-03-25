<script>
  document.getElementById("new-post-button").addEventListener("click", function() {
    window.open("", "New Post", "height=500,width=500");
  });
</script>

<script>
  document.getElementById("new-post-button").addEventListener("click", function() {
    var newWindow = window.open("", "New Post", "height=500,width=500");
    newWindow.document.write("<h1>Create New Post</h1><form><label for='post-title'>Title:</label><input type='text' id='post-title'><br><label for='post-content'>Content:</label><textarea id='post-content'></textarea><br><input type='submit' value='Submit'></form>");
  });
</script>
