const RecentPage = async ()=>{
};

const ListPage = async() =>{
    let {result:cats} = await query({
        type:'cats_by_user_id',
        params:[sessionStorage.userId]
    })

    $("#list-page .boxdiv").html(makeCatList(cats))
};

const UserProfilePage = async() =>{
    let {result:users} = await query({
        type:'user_by_id',
        params:[sessionStorage.userId]
    })
    let [user] = users;

    $("#user-profile-page [data-role='main']").html(makeUserProfilePage(user));
    console.log(user)
};

const CatProfilePage = async() => {
    let {result:cats} = await query({
        type:'cat_by_id',
        params:[sessionStorage.catId]
    })

    let [cat] = cats;

    $("#cat-profile-page [data-role='main']").html(makeCatProfilePage(cat));
    console.log(cat)
};
