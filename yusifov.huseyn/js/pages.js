const noCatMessage = document.getElementById('no-cat-message');
const listOfCats = document.getElementById('list-of-cats-word')

const ListPage = async () => {
  let { result: cats } = await query({
    type: "cats_by_user_id",
    params: [sessionStorage.userId],
  });
  console.log(cats)
  if(cats.length > 0){
    noCatMessage.style.display = 'none'
    listOfCats.style.display = 'block';
  }else{
    noCatMessage.style.display = 'block'
    listOfCats.style.display = 'none';
  }
  $("#list-page .boxdiv").html(makeCatList(cats));
  makeAnimalListSet(cats);
};

const UserProfilePage = async () => {
  let { result: users } = await query({
    type: "user_by_id",
    params: [sessionStorage.userId],
  });
  let [user] = users;

  $("#user-profile-page [data-role='main']").html(makeUserProfilePage(user));
  console.log(user);
};

const CatProfilePage = async () => {
  let { result: cats } = await query({
    type: "cat_by_id",
    params: [sessionStorage.catId],
  });

  let [cat] = cats;

  $("#cat-profile-page [data-role='main']").html(makeCatProfilePage(cat));
  console.log(cat);
  
  let {result:locations} = await query({
    type:'locations_by_cat_id',
    params:[sessionStorage.catId]
 })

  let map_el = await makeMap("#cat-profile-page .cat-map");
   makeMarkers(map_el,locations)
};

const CatEditPage = async () => {
  let { result: cats } = await query({
    type: "cat_by_id",
    params: [sessionStorage.catId],
  });

  let [cat] = cats;

  $("#cat-edit-page [data-role='main']").html(makeCatEditPage(cat));
  console.log(cat);
};

const UserEditPage = async () => {
  let { result: users } = await query({
    type: "user_by_id",
    params: [sessionStorage.userId],
  });
  let [user] = users;

  $("#edit-profile-page [data-role='main']").html(makeUserEditPage(user));
  console.log(user);
};

const RecentPage = async () => {
  
    let {result,error} = await query({
        type:'recent_animal_locations',
        params:[sessionStorage.userId]
     });
     console.log(result);

     if(error) throw(error);

     let valid_animals = result.reduce((r,o)=>{
        o.icon = o.img;
        if(o.lat && o.lng) r.push(o);
        return r;
     },[]);
  
     let map_el = await makeMap("#recent-page .map");
     makeMarkers(map_el,valid_animals)
     map_el.data("markers").forEach((m,i)=>{
      console.log(m)
      m.addListener("click",function(e){
         let animal = valid_animals[i];

         sessionStorage.catId = animal.animal_id;
         $.mobile.navigate("#cat-profile-page");
      })
})
}

const ChooseLocationPage = async () => {
  let map_el = await makeMap("#choose-location-page .map");

  map_el.data("map").addListener("click",function(e){
     console.log(e)
     $("#location-lat").val(e.latLng.lat())
     $("#location-lng").val(e.latLng.lng())
     makeMarkers(map_el,[e.latLng])
  })
}

const UserEditPhotoPage = async () => {
  let {result:users} = await query({
     type:'user_by_id',
     params:[sessionStorage.userId]
  })
  let [user] = users;

  $("#user-edit-photo-page .imagepicker").css({
     "background-image":`url(${user.img})`
  })
}

const AnimalEditPhotoPage = async () => {
  let {result:animals} = await query({
     type:'cat_by_id',
     params:[sessionStorage.catId]
  })
  let [animal] = animals;

  $("#animal-edit-photo-page .imagepicker").css({
     "background-image":`url(${animal.img})`
  })
}

const ChooseCatPage = async () => {
  let {result:animals} = await query({
     type:'cats_by_user_id',
     params:[sessionStorage.userId]
  });

  $("#location-animal").val(animals[0]?.id);
  $("#location-start").val(-3);

  $("#choose-cat-input").html(FormSelect(
     animals.map(o=>({value:o.id,text:o.name})),
     'choose-cat',
     'select',
     'Choose Cat',
     ''
  ));
}

const CatAddPage = async() => {
  let {result:animals} = await query({
     type:'cat_by_id',
     params:[sessionStorage.catId]
  })
  let [animal] = animals;

}