const data = [
  {
    name: 'James Bond',
    age: 32,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Kansas City, KS',
    image: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  {
    name: 'Jen Lace',
    age: 22,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Kansas City, KS',
    image: 'https://randomuser.me/api/portraits/women/41.jpg'
  },
  {
    name: 'Tom Clancey',
    age: 46,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Kansas City, KS',
    image: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
];



const profiles = profileIterator(data);


// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);
// Next Profile Display
function nextProfile() {

  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}
    <li class="list-group-item">Age: ${currentProfile.age}
    <li class="list-group-item">Gender: ${currentProfile.gender}
    <li class="list-group-item">Looking for: ${currentProfile.lookingfor}
  </ul>`

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
  } else {

    // No more profiles
    window.location.reload();

  }



}




// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  }
}


