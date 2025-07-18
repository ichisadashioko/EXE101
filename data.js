const realDogsData = [
    {
        name: "Emilia",
        avatar: "./images/user_01.jpg",
        age: 13,
        city: "Berlin",
        country: "Germany",
        likes: "Cats. Snow. Mailman",
        dislikes: "trucks in general",
        bio: "Kids just gone off to another family - so time to get herself out there / Not used a webcam before.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    },
    {
        name: "Max",
        avatar: "./images/user_02.jpg",
        age: 7,
        city: "Austin",
        country: "USA",
        likes: "Balls. Bacon. Barking at delivery men",
        dislikes: "Being ignored",
        bio: "Independent but secretly needy. Loves long walks and short snacks.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    },
    {
        name: "Luna",
        avatar: "./images/user_03.jpg",
        age: 4,
        city: "Hanoi",
        country: "Vietnam",
        likes: "Sunbathing. Cuddles. Playing with kids",
        dislikes: "Rainy days",
        bio: "Young and full of energy. Looking for a playmate who can keep up!",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    },
    {
        name: "Charlie",
        avatar: "./images/user_04.jpg",
        age: 10,
        city: "Manchester",
        country: "UK",
        likes: "Chasing squirrels. Naps. Tug of war",
        dislikes: "Vacuum cleaners",
        bio: "Retired from herding. Now accepting belly rubs and biscuits only.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    },
    {
        name: "Sasha",
        avatar: "./images/user_05.jpg",
        age: 6,
        city: "Moscow",
        country: "Russia",
        likes: "Snow. Running. Beef jerky",
        dislikes: "Hot summers",
        bio: "Strong, silent type. Will protect your heart (and your garden).",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    },
    {
        name: "Buddy",
        avatar: "./images/user_06.jpg",
        age: 8,
        city: "Toronto",
        country: "Canada",
        likes: "Fetch. Cuddles. Treats",
        dislikes: "Loud noises",
        bio: "Certified good boy. Recently single after a long-term relationship with a couch.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    },
    {
        name: "Choco",
        avatar: "./images/user_07.jpg",
        age: 5,
        city: "Bangkok",
        country: "Thailand",
        likes: "Swimming. Chicken. Morning walks",
        dislikes: "Being alone",
        bio: "Sweet and loyal. Looking for someone who never skips breakfast.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    },
    {
        name: "Bella",
        avatar: "./images/user_08.jpg",
        age: 9,
        city: "Sydney",
        country: "Australia",
        likes: "Beach. Tennis balls. Belly rubs",
        dislikes: "Bath time",
        bio: "Down to sniff. Part-time model, full-time snuggler.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        hasBeenSuperLiked: false
    }
];

const fakeDogsData = [

    {
        name: "Fake Dog",
        avatar: "./images/dog-rex.jpg",
        age: 5,
        city: "Taxes",
        country: "United States",
        likes:"Art. Literature. Natural wine. Yoga",
        dislikes:"Cats larger than myself",
        bio: "Swipe left if you don't like sweet potatoes",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Another fake dog",
        avatar: "./images/dog-bella.jpg",
        age: 3,
        city: "Barcelona",
        country: "Spain",
        likes:"Tapas",
        dislikes:"home alone",
        bio: "Born and raised in London. Lives in Barcelona. Enjoys running around the garden and sunbathing. I’d love to have kids in the next two years. ",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "faker dog",
        avatar: "./images/dog-fake.jpg",
        age: 11,
        city: "Cuzco",
        country: "Chile",
        likes:"Ball and squirrel. Food. Nap. More nap. Bark at random stuff.",
        dislikes:"That other dog next door",
        bio: "If you are looking for a bad boy, swipe left, cause I am a good boy.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "One last fake dog",
        avatar: "./images/dog-rex.jpg",
        age: 1,
        city: "Taxes",
        country: "United States",
        likes:"Art. Literature. Natural wine. Yoga",
        dislikes:"Cats larger than myself",
        bio: "Swipe left if you don't like sweet potatoes",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
]

const instructions = {
    acceptBtn: `  <div class="instruction-text slide-right">Press <img "instruction-icons" src="./images/icon-accept.png"> to like a pet!</div>`,
    superBtn: `<div class="instruction-text slide-left"><span>Fell in love? Press <img class = "instruction-icons" src='./images/icon-super.png'> </div> <div class="instruction-text slide-left">to superlike a pet!</div>`,
    rejectBtn: `<div class="instruction-text slide-right">Press <img "instruction-icons" src="./images/icon-reject.png"> to reject a pet!</div>`,
    undoBtn:` <div class="instruction-text slide-left">Regretting your decision? </div> <span class="instruction-text slide-left">Press <img src="./images/icon-undo.png" class="instruction-icons"> to go back!</span>`,
    infoBtn:` <div class="instruction-text slide-right"> Remember! It's not all about the looks! Press </div> <span class="instruction-text slide-right"><img src="./images/info-icon.png" class="primary-icon"> to read the profile!</span>`,
    downArrow: `<p class="instruction-text">Tap <img src="./images/down-arrow.png" class="primary-icon"> to view the dog's full photo again!</p>`,
    scrollDownText:` <div class="instruction-text">Scroll down, read their profile, and tap </div> <div class="instruction-text"> <img class="share-icon" src="./images/share-btn.svg"> to share their profile!</div>`,
    readyText:` <p class="instruction-text">Other icons do things to! Try them out! Ready to meet some dogs today?</p>
        <button id="ready-btn" class="rectangular-btn-primary brand-gradient">Ready!</button>`
}
export { realDogsData, fakeDogsData, instructions }
