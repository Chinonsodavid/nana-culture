
const outfitModal = document.getElementById("outfit-modal");
const outfitCloseBtn = document.querySelector(".outfit-close-btn");
const outfitModalImageContainer = document.querySelector(
    ".outfit-modal-image"
);
const outfitModalDetailsContainer = document.querySelector(
    ".outfit-modal-details"
);

// ==================== DYNAMIC DATA (multiple) ====================
const outfitList = [
    {
        image: "img/Mode.jpeg",
        title: "Classic Agbada Set",
        description:
            "A timeless agbada ensemble made from premium fabric with intricate embroidery. Designed to blend traditional craftsmanship with modern elegance — perfect for any grand occasion.",
    },
    {
        image: "img/Mode.jpeg",
        title: "Executive 3-Piece Suit",
        description:
            "Sophisticated and sharp, tailored to perfection for business or formal occasions.",
    },
    {
        image: "img/Mode.jpeg",
        title: "Royal Kaftan",
        description:
            "Effortlessly elegant, featuring hand-stitched embroidery and soft fabric for all-day comfort.",
    },
    {
        image: "img/Mode.jpeg",
        title: "Royal Kaftan",
        description:
            "Effortlessly elegant, featuring hand-stitched embroidery and soft fabric for all-day comfort.",
    },
    {
        image: "img/Mode.jpeg",
        title: "Royal Kaftan",
        description:
            "Effortlessly elegant, featuring hand-stitched embroidery and soft fabric for all-day comfort.",
    },
    {
        image: "img/Mode.jpeg",
        title: "Royal Kaftan",
        description:
            "Effortlessly elegant, featuring hand-stitched embroidery and soft fabric for all-day comfort.",
    },
    {
        image: "img/Mode.jpeg",
        title: "Royal Kaftan",
        description:
            "Effortlessly elegant, featuring hand-stitched embroidery and soft fabric for all-day comfort.",
    },
];

// ==================== BUILD CARDS DYNAMICALLY ====================
const outfitContainer = document.getElementById("outfit-card-container");

outfitList.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("outfit-card");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;

    const overlay = document.createElement("div");
    overlay.classList.add("outfit-overlay");

    const btn = document.createElement("button");
    btn.classList.add("outfit-view-btn");
    btn.textContent = "View More";

    overlay.appendChild(btn);
    card.appendChild(img);
    card.appendChild(overlay);
    outfitContainer.appendChild(card);

    // === Each button opens modal with its own data ===
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openOutfitModal(item);
    });
});

// ==================== MODAL LOGIC ====================
function openOutfitModal(item) {
    // Clear previous modal content
    outfitModalImageContainer.innerHTML = "";
    outfitModalDetailsContainer.innerHTML = "";

    const modalImg = document.createElement("img");
    modalImg.src = item.image;
    modalImg.alt = item.title;

    const titleEl = document.createElement("h2");
    titleEl.textContent = item.title;

    const descEl = document.createElement("p");
    descEl.textContent = item.description;

    const buttonEl = document.createElement("button");
    buttonEl.classList.add("outfit-book-btn");
    buttonEl.textContent = "Book an Appointment";

    outfitModalImageContainer.appendChild(modalImg);
    outfitModalDetailsContainer.appendChild(titleEl);
    outfitModalDetailsContainer.appendChild(descEl);
    outfitModalDetailsContainer.appendChild(buttonEl);

    outfitModal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

outfitCloseBtn.addEventListener("click", () => {
    outfitModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === outfitModal) {
        outfitModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
