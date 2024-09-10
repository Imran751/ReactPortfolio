// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjuWGUJmltyBx4506eX1aujWWDeapQD2s",
    authDomain: "imranportfolioreact.firebaseapp.com",
    projectId: "imranportfolioreact",
    storageBucket: "imranportfolioreact.appspot.com",
    messagingSenderId: "887901069488",
    appId: "1:887901069488:web:a5af7af1ffd1323ff69b75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// DOM Elements
const addForm = document.getElementById('addForm');
const updateForm = document.getElementById('updateForm');
const testimonialList = document.getElementById('testimonialList');

// Render testimonials
const renderTestimonials = async () => {
    testimonialList.innerHTML = '';
    try {
        const querySnapshot = await db.collection("testimonials").get();
        querySnapshot.forEach(doc => {
            const data = doc.data();
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${data.imageURL}" alt="${data.name}">
                <div>
                    <strong>${data.name}</strong> (${data.title})<br>
                    "${data.quote}"<br>
                    <button class="edit-button" onclick="editTestimonial('${doc.id}')">Edit</button>
                    <button class="delete-button" onclick="deleteTestimonial('${doc.id}')">Delete</button>
                </div>
            `;
            testimonialList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching testimonials: ", error);
    }
};

// Add a new testimonial
const addTestimonial = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const quote = document.getElementById('quote').value;
    const imageURL = document.getElementById('imageURL').value;

    try {
        await db.collection("testimonials").add({ name, title, quote, imageURL });
        addForm.reset();
        renderTestimonials();
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

// Update a testimonial
const updateTestimonial = async (e) => {
    e.preventDefault();
    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const title = document.getElementById('updateTitle').value;
    const quote = document.getElementById('updateQuote').value;
    const imageURL = document.getElementById('updateImageURL').value;

    try {
        await db.collection("testimonials").doc(id).update({ name, title, quote, imageURL });
        updateForm.reset();
        updateForm.style.display = 'none';
        renderTestimonials();
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

// Delete a testimonial
const deleteTestimonial = async (id) => {
    try {
        await db.collection("testimonials").doc(id).delete();
        renderTestimonials();
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
};

// Edit a testimonial
const editTestimonial = async (id) => {
    try {
        const docSnap = await db.collection("testimonials").doc(id).get();

        if (docSnap.exists) {
            const data = docSnap.data();
            document.getElementById('updateId').value = id;
            document.getElementById('updateName').value = data.name;
            document.getElementById('updateTitle').value = data.title;
            document.getElementById('updateQuote').value = data.quote;
            document.getElementById('updateImageURL').value = data.imageURL;

            updateForm.style.display = 'block';
        }
    } catch (error) {
        console.error("Error fetching document for edit: ", error);
    }
};

// Attach event listeners to forms
addForm.addEventListener('submit', addTestimonial);
updateForm.addEventListener('submit', updateTestimonial);

// Initial load of testimonials
renderTestimonials();
