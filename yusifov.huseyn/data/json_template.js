// User Template
[
    '{{repeat(10)}}',
    {
      id: '{{index(1)}}',
      name: '{{firstName()}} {{surname()}}',
      username: function() {
        return 'user' + this.id;
      },
      email: function(){
        return this.username+'@gmail.com';
      },
      password: 'md5(pass)',
      img: function(tags){
        return 'https://via.placeholder.com/400/' + tags.integer(700,999) + '/fff/?text=' + this.username;
      },
      date_create: '{{date(new Date(2022, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
    }
  ]

  // Animal Template

  [
    '{{repeat(50)}}',
    {
      id: '{{index(1)}}',
      user_id:'{{integer(1,10)}}',
      name:'{{firstName()}}',
      breed:'{{random("ginger","anatolian","calico")}}',
      description:'{{lorem(2,"sentences")}}',
      img: function(tags){
          return 'https://via.placeholder.com/400/' + tags.integer(700,999) + '/fff/?text=' + this.name;
        },
      date_create: '{{date(new Date(2022, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
    }
  ]

  // Location Template
  [
    '{{repeat(250)}}',
    {
      id: '{{index(1)}}',
      animal_id:'{{integer(1,50)}}',
      description:'{{lorem(2,"sentences")}}',
      
      lat:'{{floating(37.803923,37.736341)}}',
      lng:'{{floating(-122.493776,-122.364302)}}',
      img: function(tags){
          return 'https://via.placeholder.com/400/';
        },
      date_create: '{{date(new Date(2022, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
    }
  ]