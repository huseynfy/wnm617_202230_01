const submitCatAdd = async () =>{
    let name = $('#add-cat-name').val();
    let breed = $('#add-breed-selection').val();
    let description = $('#add-cat-info').val();


    if(name !='' && breed !='' && description !=''){
    let {id,error} = await query({
        type: 'insert_cat',
        params: [sessionStorage.userId,name,breed,description]
    })
    if(error) throw(error);
    sessionStorage.catId = id;
    history.go(-1);
    }else{
        throw('Not all data present')
    }
}

const submitUserSignUp = async () =>{
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
    let name = $('#edit-user-name').val();
    let username = $('#edit-username').val();
    let email = $('#edit-user-email').val();

    let {result,error} = await query({
        type: 'update_cat',
        params: [name,username,email,sessionStorage.userId]
    })
    if(error) throw(error);
    history.go(-1);
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
  
     history.go(-1);
}