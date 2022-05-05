const makeCatList = templater(o =>`
<a href="#cat-profile-page" data-id=${o.id} class="js-cat-jump">
<div class="catbox">${o.name}<br><a href="#cat-profile-page" data-id=${o.id} class="viewcatdetails js-cat-jump">View Details<img src="img/icons/arrow.svg" alt=""></a></div> </a>
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
<div class="flex-strecth"></div>
<div class="form-control">
<a href="#" data-role="none" data-activate="#logout-modal" class="form-button">Log out</a>
</div>
</div>
 <div class="modal" id="logout-modal">
    <div class="modal-back" data-deactivate="#logout-modal"></div>
    <div class="modal-popup text-center">
        <h3>Are you sure?</h3>
        <div class="display-flex flex-justify-evenly">
        <button class="no-button"><a href="#" data-role="none" data-deactivate="#logout-modal">No</a></button>
        <button class="yes-button"><a href="#" data-role="none" class="js-logout">Yes</a></button>
    </div>
    </div>
 </div>
 `

const makeCatProfilePage = o =>
    `  
    <h2 class="text-center">${o.name}'s Profile</h2>
      <div class="text-center">
    <img src="${o.img}" alt="cat-picture" class="profile-image">
</div>
<form class="form" id="cat-form">
    <div class="form-control"> 
        <label for="cat-name" class="form-label">Name</label>
        <input type="text" id="cat-name" data-role="none" class="form-input"
        placeholder="${o.name}" disabled>
    </div>
    <div class="form-control">
        <label for="cat-breed" class="form-label">Breed</label>
       <select data-role="none" name="select" id="breed-selection" class="selection" disabled>
           <option value="Anatolian">${o.breed}</option>
       </select>
    </div> 
    <div class="form-control">
        <label for="cat-info" class="form-label">Description</label>
        <textarea name="cat-info" class="form-description" data-role="none" placeholder="${o.description}" disabled></textarea>
    </div> 
        <label for="cat-info" class="form-label">Locations</label>
      <div class="cat-map"></div>
 </form>

 `

 const makeCatEditPage = o => 
 `
 <h2 class="text-center">Start Editing</h2>
 <div class="text-center">
 <img src="${o.img}" alt="cat-picture" class="profile-image" data-activate="#photo-upload-modal">
 <a href="#" class="change-photo-text" data-activate="#photo-upload-modal">Change Photo</a>
</div>
 <div class="modal" id="photo-upload-modal">
     <div class="modal-back" data-deactivate="#photo-upload-modal"></div>
     <div class="modal-popup text-center">
         <h4 class="modal-head-text">Please Select a Method to Upload an Image</h4>
         <div class="display-flex">
         <button class="choose-gallery-button"><a href="#" data-role="none">Upload from Gallery</a></button>
         <button class="camera-roll-button"><a href="#" data-role="none" class="">Take a Picture</a></button>
     </div>
     </div>
  </div>
<form class="form" id="cat-edit-form">
 <div class="form-control"> 
     <label for="edit-cat-name" class="form-label">Name</label>
     <input type="text" id="edit-cat-name" data-role="none" class="form-input"
     placeholder="${o.name}">
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
     <textarea name="edit-cat-info" class="form-description" data-role="none" placeholder="${o.description}"></textarea>
 </div> 
 <div class="form-control">
     <label for="edit-cat-location" class="form-label">Locations</label>
     <a href="#map-drop-pin-page">
     <img src="img/map.png" class="location-map" alt="location-map">
 </a>
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
     <img src="${o.img}" alt="cat-picture" class="profile-image" data-activate="#user-photo-upload-modal">
     <a href="#" class="change-photo-text" data-activate="#user-photo-upload-modal">Change Photo</a>
 </div>
     <div class="modal" id="user-photo-upload-modal">
         <div class="modal-back" data-deactivate="#user-photo-upload-modal"></div>
         <div class="modal-popup text-center">
             <h4 class="modal-head-text">Please Select a Method to Upload an Image</h4>
             <div class="display-flex">
             <button class="choose-gallery-button"><a href="#" data-role="none">Upload from Gallery</a></button>
             <button class="camera-roll-button"><a href="#" data-role="none" class="">Take a Picture</a></button>
         </div>
         </div>
      </div>
 <form class="form" id="user-edit-form">
 <div class="form-control"> 
 <label for="edit-user-name" class="form-label">Name</label>
 <input type="text" id="edit-user-name" data-role="none" class="form-input"
 placeholder="${o.name}">
</div>
     <div class="form-control"> 
         <label for="edit-username" class="form-label">Username</label>
         <input type="text" id="edit-user-name" data-role="none" class="form-input"
         placeholder="${o.username}">
     </div>
     <div class="form-control"> 
         <label for="edit-user-email" class="form-label">Email</label>
         <input type="email" id="edit-user-email" data-role="none" class="form-input"
         placeholder="${o.email}">
     </div>
     <div class="form-control"> 
     <button type="submit" class="form-button js-submit-user-edit">Save</button>
     </div>
  </form>
 `