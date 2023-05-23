$(document).ready(function() {
  var postFolder = 'blog/';

  // Fetch all blog post files
  $.ajax({
    url: postFolder,
    success: function(data) {
      $(data).find('a').attr('href', function(i, val) {
        if (val.match(/\.(html)$/)) {
          // Load each blog post file and create navigation links
          $.ajax({
            url: postFolder + val,
            dataType: 'html',
            success: function(postData) {
              $('#content').append(postData);
              $('#navPosts').append('<a href="' + postFolder + val + '">' + val.replace('.html', '') + '</a>');
            },
            error: function() {
              console.log('Error loading blog post: ' + val);
            }
          });
        }
      });
    },
    error: function() {
      console.log('Error loading blog post files.');
    }
  });
});