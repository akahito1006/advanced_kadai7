$('#favorite_btn').html("<%= escape_javascript(render partial: 'favorites/favorite-btn', locals: {book: @book}) %>");

