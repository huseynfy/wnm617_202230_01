const makeCatList = templater(o =>`
<div class="catbox">
<a href="#cat-profile-page" data-id=${o.id} class="js-cat-jump">
<img src="${o.img}" class="cat-list-page-image">
<div class="text-center cat-box-name">
<h5>${o.name}</h5>
</div> 
</a>
</div> 
`);

const makeUserProfilePage = o =>
    ` <h2 class="text-center">${o.name}'s Profile</h2>
 <div class="text-center">
    <img src="${o.img}" alt="user-picture" class="profile-image">
</div>
<div class="info-box-div">
<h3 class="info-header-text">User Info</h3>
<h4><span class="info-text-name">Name: </span>${o.name}</h4>
<h4><span class="info-text-name">Username: </span>${o.username}</h4>
<h4><span class="info-text-name">Email: </span>${o.email}</h4>
</div>
 `

const makeCatProfilePage = o =>
    `<h2 class="text-center">${o.name}'s Profile</h2>
    <div class="text-center">
    <img src="${o.img}" alt="cat-picture" class="profile-image">
</div>
<div class="info-box-div">
<h3 class="info-header-text">Cat Info</h3>
<h4><span class="info-text-name">Name: </span>${o.name}</h4>
<h4><span class="info-text-name">Breed: </span>${o.breed}</h4>
<h4><span class="info-text-name">Description: </span>${o.description}</h4>
<div class="flex-strecth"></div>

    <label for="cat-info" class="form-label">Locations</label>
      <div class="cat-map"></div>
      </div>
<div class="add-button js-location-choose-animal"><a href="#choose-location-page">+</a></div>

 `

 const makeCatEditPage = o => 
 `
 <h2 class="text-center">Start Editing</h2>
 <div class="text-center">
 <a href="#cat-edit-photo-page">
 <img src="${o.img}" alt="cat-picture" class="profile-image">
 </a>
 <a href="#cat-edit-photo-page" class="change-photo-text">Change Photo</a>
</div>
<form class="form" id="cat-edit-form">
 <div class="form-control"> 
     <label for="edit-cat-name" class="form-label">Name</label>
     <input type="text" id="edit-cat-name" data-role="none" class="form-input"
     value="${o.name}">
 </div>
 <div class="form-control">
     <label for="edit-breed-selection" class="form-label">Breed</label>
    <select data-role="none" name="select" id="edit-breed-selection" class="selection-edit">
    <option value="${o.breed}">${o.breed}</option>
     <option value="Turkish Angora">Turkish Angora</option>
     <option value="Siberian Cat">Siberian Cat</option>
     <option value="Bengal Cat">Bengal Cat</option>
    </select>
 </div> 
 <div class="form-control">
     <label for="edit-cat-info" class="form-label">Description</label>
     <textarea name="edit-cat-info" id="edit-cat-info" class="form-description" data-role="none">${o.description}</textarea>
 </div> 
 <div class="form-control">
 <button type="submit" class="form-button js-submit-animal-edit">Save</button>
 </div>
</form>
 
 `

 const makeUserEditPage = o =>
 `
 <h2 class="text-center">Edit Profile</h2>
 <div class="text-center">
 <a href="#user-edit-photo-page">
     <img src="${o.img}" alt="user-picture" class="profile-image">
     </a>
     <a href="#user-edit-photo-page" class="change-photo-text">Change Photo</a>
 </div>
 <form class="form" id="user-edit-form">
 <div class="form-control"> 
 <label for="edit-user-name" class="form-label">Name</label>
 <input type="text" id="edit-user-name" data-role="none" class="form-input"
 value="${o.name}">
</div>
     <div class="form-control"> 
         <label for="edit-username" class="form-label">Username</label>
         <input type="text" id="edit-username" data-role="none" class="form-input"
         value="${o.username}">
     </div>
     <div class="form-control"> 
         <label for="edit-user-email" class="form-label">Email</label>
         <input type="email" id="edit-user-email" data-role="none" class="form-input"
         value="${o.email}">
     </div>
     <div class="form-control"> 
     <button type="submit" class="form-button js-submit-user-edit">Save</button>
     </div>
  </form>
 `

 const makeAnimalListSet = (animals, target="#list-page .boxdiv") => {
    $(".filter-bar").html(makeFilterList(animals));
    $(target).html(makeCatList(animals));
 }
 
 const capitalize = s => (s[0]||"").toUpperCase()+s.slice(1);
 
 const filterList = (animals,breed) => {
    let a = [...(new Set(animals.map(o=>o[breed])))];
    return templater(o=>o?`<span data-filter="${breed}" data-value="${o}">${capitalize(o)}</span>`:'')(a);
 }
 
 const makeFilterList = (animals) => {
    return `
    <span data-filter="breed" data-value="">All</span>
    |
    ${filterList(animals,'breed')}
    `;
 }

 const SelectOptions = templater(o => `
   <option value="${o.value}" ${o.selected?'selected':''}>${o.text}</option>
`);
const FormSelect = (options,namespace,name,value="") => {
   return `
   <div class="form-select">
   <label for="cat-selection" class="form-label-selection">Select a cat</label>
      <select id="${namespace}-${name}" data-role="none" class="selection-edit">
         ${SelectOptions(options.map(o=>({
            ...o,
            ...(o.id==value && {selected: true})
         })))}
      </select>
   </div>`;
}
const FormControlSelect = (options,namespace,name,displayname,value="") => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      ${FormSelect(options,namespace,name,value)}
   </div>`;
}