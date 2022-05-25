const submitCatAdd = async () =>{
    let name = $('#add-cat-name').val();
    let breed = $('#add-breed-selection').val();
    let description = $('#add-cat-info').val();
    let image = $("#animal-add-image-url").val();
    console.log({name,breed,description,image});

    if(name !='' && description !='' && breed!=""){
    let {id,error} = await query({
        type: 'insert_cat',
        params: [sessionStorage.userId,name,breed,description,
            image ==='' ? 'https://via.placeholder.com/400/?text=ANIMAL' : image]
    })
    if(error) throw(error);
    sessionStorage.catId = id;
    $.mobile.navigate("#list-page")
    }else{
        throw('Not all data present')
    }
}

const submitUserSignup = async () =>{
    let username = $('#signup-username').val();
    let email = $('#signup-email').val();
    let password = $('#signup-password').val();
    let password2 = $('#signup-confirm-password').val();

    if(password2 != password){
        throw("Passwords don't match")
    }else if( username !='' && email !='' && password !=''){
        let {id,error} = await query({
            type: "insert_user",
            params:[username,email,password]
        });

        if(error) throw(error);

        sessionStorage.userId=id;
        $.mobile.navigate("#list-page")
    }else{
        throw('not all data present');
    }

}

const submitUserEdit = async () =>{
    let name = $("#edit-user-name").val();
    let username = $("#edit-username").val();
    let email = $("#edit-user-email").val();

    console.log({name,username,email})
    let {result,error} = await query({
        type: 'update_user',
        params: [name,username,email,sessionStorage.userId]
    })
    if(error) throw(error);
    $.mobile.navigate("#user-profile-page")
}

const submitPasswordEdit = async () =>{
    let password = $("#edit-user-password").val();
    let confirmPassword = $("#user-confirm-password").val();

    console.log({password,confirmPassword})
    
    let {result,error} = await query({
        type: 'update_password',
        params: [password,sessionStorage.userId]
    })
    if(error) throw(error);
    $.mobile.navigate("#user-profile-page")
}

const submitCatEdit = async () =>{
    let name = $('#edit-cat-name').val();
    let breed = $('#edit-breed-selection').val();
    let description = $('#edit-cat-info').val();

    let {result,error} = await query({
        type: 'update_cat',
        params: [name,breed,description,sessionStorage.catId]
     });
  
     if(error) throw(error);
  
     $.mobile.navigate("#list-page")
}

 
 const submitDeleteCat = async () => {
    let {result,error} = await query({
       type: 'delete_cat',
       params: [sessionStorage.catId]
    });
 
    if(error) throw(error);
    $.mobile.navigate("#list-page")
 }
 
 
 const submitLocationAdd = async () => {
    let animal = $("#location-animal").val();
    let lat = $("#location-lat").val();
    let lng = $("#location-lng").val();
    let description = $("#location-description").val();
 
    let {result,error} = await query({
       type: 'insert_location',
       params: [animal,lat,lng,description]
    });
 
    if(error) throw(error);
    $.mobile.navigate("#recent-page")
 }


 const checkSearchForm = async (s) => {
    let {result:animals,error} = await query({
       type: 'search_animals',
       params: [s, sessionStorage.userId]
    });
 
    if(error) throw(error);
 
    makeAnimalListSet(animals);
 }
 const checkFilter = async (f,v) => {
    let {result:animals,error} = await query({
       type: 'filter_animals',
       params: [f, v, sessionStorage.userId]
    });
 
    if(error) throw(error);
 
    makeAnimalListSet(animals);
 }
