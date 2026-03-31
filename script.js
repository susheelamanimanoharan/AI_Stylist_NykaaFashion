// script.js

// Knowledge Base for AI Simulation
const VIBE_MAP = {
    formal: {
        keywords: ['office', 'meeting', 'client', 'work', 'formal', 'interview', 'corporate', 'business'],
        images: [
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
            "https://images.unsplash.com/photo-1588145785055-66d400fb86a2?w=800&q=80",
            "https://images.unsplash.com/photo-1507553531985-e11bbce51eec?w=800&q=80"
        ],
        tops: ["Crisp White Silk Blouse", "Tailored Linen Blazer", "Satin Wrap Top", "Neutral Turtleneck", "Button-Down Oxford"],
        bottoms: ["High-Waisted Black Trousers", "Pencil Skirt", "Wide-Leg Crepe Pants", "Tailored Chinos", "Midi Pleated Skirt"],
        dresses: ["Tailored Midi Sheath Dress", "Belted Wrap Dress", "Sleeveless Power Dress"],
        shoes: ["Pointed-Toe Pumps", "Suede Loafers", "Block Heel Sandals", "Classic Stilettos", "Leather Ankle Boots"],
        accessories: ["Leather Briefcase", "Minimalist Gold Watch", "Pearl Studs", "Silk Scarf", "Structured Tote"]
    },
    casual: {
        keywords: ['brunch', 'casual', 'day', 'shopping', 'friends', 'coffee', 'city', 'weekend', 'chill'],
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
            "https://images.unsplash.com/photo-1550614000-4b95d4edecf2?w=800&q=80",
            "https://images.unsplash.com/photo-1434389678369-182cb1bb22f8?w=800&q=80"
        ],
        tops: ["Ribbed Knit Top", "Oversized Graphic Tee", "Chambray Shirt", "Linen Crop Top", "Striped Breton Top"],
        bottoms: ["Vintage Denim Jeans", "Linen Shorts", "Floral Midi Skirt", "Cotton Culottes", "Slip Skirt"],
        dresses: ["Cotton Sundress", "Ribbed Knit Midi Dress", "Denim Pinafore Dress"],
        shoes: ["White Canvas Sneakers", "Strappy Flat Sandals", "Suede Mule Loafers", "Chunky Trainers", "Slip-on Espadrilles"],
        accessories: ["Crossbody Bag", "Cat-Eye Sunglasses", "Layered Gold Chains", "Canvas Tote", "Resin Hoop Earrings"]
    },
    event: {
        keywords: ['wedding', 'party', 'gala', 'date', 'dinner', 'night', 'romantic', 'event', 'club', 'glam'],
        images: [
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
            "https://images.unsplash.com/photo-1539008835657-0e6b28f117ce?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
        ],
        tops: ["Sequin Halter Top", "Velvet Bardot Top", "Silk Camisole", "Lace Bustier", "One-Shoulder Drape"],
        bottoms: ["Flared Tailored Trousers", "Satin Slip Skirt", "High-Slit Maxi Skirt", "Beaded Mini Skirt", "Structured Shorts"],
        dresses: ["Velvet Maxi Dress", "Asymmetrical Bodycon", "Sequin Wrap Dress"],
        shoes: ["Metallic Strappy Heels", "Satin Pump Heels", "Embellished Sandals", "Velvet Slingbacks", "Stiletto Booties"],
        accessories: ["Crystal Chandelier Earrings", "Metallic Clutch", "Tennis Bracelet", "Evening Pouch", "Statement Necklace"]
    },
    vacation: {
        keywords: ['goa', 'beach', 'resort', 'vacation', 'trip', 'summer', 'island', 'travel', 'pool'],
        images: [
            "https://images.unsplash.com/photo-1515347619362-d34e2ab176bf?w=800&q=80",
            "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&q=80",
            "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80"
        ],
        tops: ["Crochet Bralette", "Off-Shoulder Blouse", "Tie-Front Linen Top", "Breezy Kaftan Top", "Bandeau Top"],
        bottoms: ["Flowy Maxi Skirt", "Denim Cut-offs", "White Linen Pants", "Sarong Skirt", "Wide-Leg Palazzo"],
        dresses: ["Flowy Floral Maxi", "Crochet Mini Dress", "Linen Slip Dress"],
        shoes: ["Platform Wedges", "Gladiator Sandals", "Slide Slippers", "Espadrilles", "Barefoot Sandals"],
        accessories: ["Woven Straw Hat", "Rattan Basket Bag", "Seashell Choker", "Oversized Sunnies", "Colorful Silk Scarf"]
    }
};

const REASONING_MAP = {
    formal: "Tailored structures command authority while premium fabrics ensure you remain comfortable for all-day wear.",
    casual: "Lightweight, breathable pieces blend perfectly to create an effortlessly chic and relaxed vibe.",
    event: "Statement elements and exquisite detail ensure you stand out elegantly in evening lighting.",
    vacation: "Flowy, breezy silhouettes offer ultimate comfort and flawless style for warm climates."
};

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const genPrice = (min, max) => Math.floor((Math.random() * (max - min) + min) / 100) * 100 + 99;

// True simulated AI brain logic
function simulateAI(query) {
    const text = query.toLowerCase();
    
    // 1. Context extraction (Understand occasion + location + style)
    let vibeScores = { formal: 0, casual: 0, event: 0, vacation: 0 };
    for (const [vibe, data] of Object.entries(VIBE_MAP)) {
        data.keywords.forEach(kw => {
            if (text.includes(kw)) vibeScores[vibe] += 2; // Keyword match weight
        });
    }
    
    let reigningVibe = 'casual'; // Fallback
    let max = 0;
    for (const [vibe, score] of Object.entries(vibeScores)) {
        if (score > max) { max = score; reigningVibe = vibe; }
    }

    const vibeData = VIBE_MAP[reigningVibe];
    
    // Generate exactly 3 cohesive stylistic looks
    const styles = [
        { label: "Classic", tags: [reigningVibe.toUpperCase(), "Chic", "Comfort"] },
        { label: "Modern", tags: [reigningVibe.toUpperCase(), "Trending", "Signature"] },
        { label: "Elevated", tags: [reigningVibe.toUpperCase(), "Luxe", "Premium"] }
    ];

    const generatedLooks = [];
    
    for (let i = 0; i < 3; i++) {
        const isDress = Math.random() > 0.6; // 40% chance of a singular dress look
        let pieces = [];
        
        // Cohesive breakdown combining Top, Bottom, Footwear + Optionals
        if (isDress) {
            pieces.push({ type: "Dress/Full", name: pickRandom(vibeData.dresses), price: genPrice(2500, 6000) });
        } else {
            pieces.push({ type: "Top", name: pickRandom(vibeData.tops), price: genPrice(1000, 3000) });
            pieces.push({ type: "Bottom", name: pickRandom(vibeData.bottoms), price: genPrice(1500, 4000) });
        }
        
        pieces.push({ type: "Footwear", name: pickRandom(vibeData.shoes), price: genPrice(1500, 5000) });
        
        // Generating 1 or 2 optional accessories that fit the mood
        const numAcc = Math.floor(Math.random() * 2) + 1;
        let availableAcc = [...vibeData.accessories];
        for (let j = 0; j < numAcc; j++) {
            const accIdx = Math.floor(Math.random() * availableAcc.length);
            const accName = availableAcc.splice(accIdx, 1)[0];
            pieces.push({ type: "Accessory", name: accName, price: genPrice(800, 2500) });
        }

        // Improve recommendations slightly based on user learning profile
        let dynamicBase = 92 + Math.min(6, userProfile.interactions * 2); 
        let currentMatchScore = i === 0 
            ? Math.min(99, dynamicBase + Math.floor(Math.random() * 3)) 
            : Math.min(99, dynamicBase - 5 - (i * 3));

        generatedLooks.push({
            id: `gen-look-${Date.now()}-${i}`,
            vibe: reigningVibe,
            title: `${styles[i].label} ${reigningVibe.charAt(0).toUpperCase() + reigningVibe.slice(1)} Edit`,
            image: vibeData.images[i % vibeData.images.length],
            tags: styles[i].tags,
            pieces: pieces,
            reasoning: REASONING_MAP[reigningVibe],
            matchScore: currentMatchScore
        });
    }
    
    return generatedLooks;
}

// Global active session looks
let currentLooksSession = [];
let selectedLook = null;

// User Profile Tracker for Learning System
const userProfile = {
    interactions: 0
};

function trackInteraction(msg = "We're learning your style preferences ✨") {
    userProfile.interactions++;
    showToast(msg);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.querySelector('span').innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 400);
    }, 3000);
}

// UI Initialization
document.addEventListener('DOMContentLoaded', () => {
    const views = {
        home: document.getElementById('home-view'),
        loading: document.getElementById('loading-view'),
        results: document.getElementById('results-view'),
        detail: document.getElementById('detail-view'),
        tryon: document.getElementById('tryon-view'),
        checkout: document.getElementById('checkout-view')
    };

    function goToView(targetId) {
        Object.values(views).forEach(view => {
            view.classList.remove('active');
            view.classList.add('hidden');
        });
        const target = document.getElementById(targetId);
        target.classList.remove('hidden');
        target.classList.add('active');
        window.scrollTo(0, 0); // Reset scroll position for mobile viewing
    }

    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            goToView(btn.getAttribute('data-target'));
        });
    });

    const nlForm = document.getElementById('nl-form');
    const nlInput = document.getElementById('nl-input');
    const chips = document.querySelectorAll('.chip');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            nlInput.value = chip.getAttribute('data-query');
            handleCurate(nlInput.value);
        });
    });

    nlForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = nlInput.value.trim();
        if(text) handleCurate(text);
    });

    function handleCurate(query) {
        const loadingTitle = document.querySelector('#loading-view h2');
        const loadingDesc = document.querySelector('#loading-view p');
        loadingTitle.innerText = 'Curating your looks...';
        loadingDesc.innerText = 'Extracting occasion, location, and style references...';
        
        goToView('loading-view');
        
        // Let the AI process the prompt and create the 3 exact cohesive outfits
        currentLooksSession = simulateAI(query);

        // Preload images silently for seamless transition
        currentLooksSession.forEach(look => {
            const img = new Image();
            img.src = look.image;
        });

        // Smart fake delay simulating NLP/Generation pipeline
        setTimeout(() => {
            populateResults();
            goToView('results-view');
        }, 2500);
    }

    function populateResults() {
        const container = document.getElementById('results-container');
        container.innerHTML = '';

        // Iterate over exactly 3 cohesive generated layouts
        currentLooksSession.forEach((look, index) => {
            const totalPrice = look.pieces.reduce((sum, item) => sum + item.price, 0);
            const tagsHtml = look.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            
            const isBestMatch = index === 0;

            const cardHtml = `
                <div class="outfit-card ${isBestMatch ? 'best-match-card' : ''}">
                    ${isBestMatch ? '<div class="best-match-badge">✨ Best Match</div>' : ''}
                    <img src="${look.image}" alt="Outfit" class="outfit-card-img">
                    <div class="outfit-card-info">
                        <div class="confidence-score">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            ${look.matchScore}% Match for your style
                        </div>
                        <div class="outfit-card-tags">
                            ${tagsHtml}
                        </div>
                        <div style="font-size: 16px; font-weight: 600; color: #111; margin-bottom: 8px;">${look.title}</div>
                        <div class="ai-reasoning">✨ <b>Why this works:</b> ${look.reasoning}</div>
                        <div class="outfit-card-footer">
                            <div class="outfit-price">₹${totalPrice.toLocaleString('en-IN')}</div>
                            <button class="view-details-btn" data-id="${look.id}">View Details</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cardHtml;
        });

        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                selectedLook = currentLooksSession.find(l => l.id === id);
                trackInteraction("Noted! We're learning what you like 🧠");
                populateDetail();
                goToView('detail-view');
            });
        });
    }

    function populateDetail() {
        document.getElementById('detail-image').src = selectedLook.image;
        
        const piecesContainer = document.getElementById('detail-pieces');
        piecesContainer.innerHTML = '';
        
        let total = 0;
        selectedLook.pieces.forEach((piece, index) => {
            total += piece.price;
            piecesContainer.innerHTML += `
                <div class="piece-card">
                    <div class="piece-img"></div>
                    <div class="piece-info">
                        <div class="piece-type">${piece.type}</div>
                        <div class="piece-name">${piece.name}</div>
                        <div class="piece-price">₹${piece.price.toLocaleString('en-IN')}</div>
                    </div>
                    <button class="replace-btn" data-index="${index}">Swap</button>
                </div>
            `;
        });
        
        document.querySelectorAll('.replace-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-index'), 10);
                openSwapModal(idx);
            });
        });
        
        // Re-calculate details specific look total when updating with 10% discount
        const bundleTotal = Math.floor(total * 0.9);
        document.getElementById('detail-original-price').innerText = `₹${total.toLocaleString('en-IN')}`;
        document.getElementById('detail-total-price').innerText = `₹${bundleTotal.toLocaleString('en-IN')}`;
    }

    // Swap Modal Functionality
    const swapModal = document.getElementById('swap-modal');
    const closeSwapBtn = document.getElementById('close-swap-btn');
    
    closeSwapBtn.addEventListener('click', () => {
        swapModal.classList.remove('active');
        setTimeout(() => swapModal.classList.add('hidden'), 300);
    });

    function openSwapModal(pieceIndex) {
        const piece = selectedLook.pieces[pieceIndex];
        const vibeData = VIBE_MAP[selectedLook.vibe];
        document.getElementById('swap-item-type').innerText = piece.type;
        
        let pool = [];
        if (piece.type === "Dress/Full") pool = vibeData.dresses;
        else if (piece.type === "Top") pool = vibeData.tops;
        else if (piece.type === "Bottom") pool = vibeData.bottoms;
        else if (piece.type === "Footwear") pool = vibeData.shoes;
        else pool = vibeData.accessories;
        
        const container = document.getElementById('swap-options');
        container.innerHTML = '';
        
        // Pick 3 alternative options excluding the current to maintain explicit cohesive vibe styling
        const options = pool.filter(n => n !== piece.name).sort(() => 0.5 - Math.random()).slice(0, 3);
        if (options.length === 0) options.push("Designer Curated " + piece.type);
        
        options.forEach(optName => {
            const tempPrice = genPrice(800, 4500);
            container.innerHTML += `
                <div class="swap-option-card" data-name="${optName}" data-price="${tempPrice}">
                    <div class="swap-img"></div>
                    <div class="swap-info">
                        <div class="swap-name">${optName}</div>
                        <div class="swap-price">₹${tempPrice.toLocaleString('en-IN')}</div>
                    </div>
                </div>
            `;
        });
        
        swapModal.classList.remove('hidden');
        setTimeout(() => swapModal.classList.add('active'), 10);
        
        document.querySelectorAll('.swap-option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const newName = e.currentTarget.getAttribute('data-name');
                const newPrice = parseInt(e.currentTarget.getAttribute('data-price'), 10);
                selectedLook.pieces[pieceIndex].name = newName;
                selectedLook.pieces[pieceIndex].price = newPrice;
                
                trackInteraction("Great swap! Updating your style profile ✨");
                
                swapModal.classList.remove('active');
                setTimeout(() => {
                    swapModal.classList.add('hidden');
                    populateDetail(); 
                }, 300);
            });
        });
    }

    // Custom 2-second styling overlay requested on Transition to Try-On
    document.getElementById('try-on-btn').addEventListener('click', () => {
        const loadingTitle = document.querySelector('#loading-view h2');
        const loadingDesc = document.querySelector('#loading-view p');
        const pb = document.querySelector('.progress-bar-container');
        
        loadingTitle.innerText = 'Styling your Avatar...';
        loadingDesc.innerText = 'Applying selected pieces to your AI profile';
        pb.classList.add('loading');
        
        goToView('loading-view');
        
        setTimeout(() => {
            populateTryOn();
            goToView('tryon-view');
            pb.classList.remove('loading');
        }, 2000); 
    });

    document.getElementById('buy-look-btn').addEventListener('click', () => {
        populateCheckout();
        goToView('checkout-view');
    });

    document.getElementById('looks-good-btn-detail').addEventListener('click', () => {
        populateCheckout();
        goToView('checkout-view');
    });

    // Try-On Views state mapping
    const tryonToggle = document.getElementById('tryon-toggle');
    const tryonImg = document.getElementById('tryon-img');
    const aiBadge = document.getElementById('tryon-badge');
    const labelReal = document.getElementById('label-real');
    const labelAI = document.getElementById('label-ai');
    const scanOverlay = document.getElementById('ai-scan-overlay');

    function populateTryOn() {
        if(!selectedLook) return;
        tryonToggle.checked = false;
        tryonImg.src = selectedLook.image;
        tryonImg.style.filter = 'none';
        aiBadge.innerText = 'Realistic View';
        labelReal.classList.add('active');
        labelAI.classList.remove('active');
        scanOverlay.classList.add('hidden');
    }

    tryonToggle.addEventListener('change', (e) => {
        if(e.target.checked) {
            labelReal.classList.remove('active');
            labelAI.classList.add('active');
            scanOverlay.classList.remove('hidden');
            
            // "Styling your Avatar..." overlay for exactly 2 seconds inside modal
            setTimeout(() => {
                scanOverlay.classList.add('hidden');
                tryonImg.style.filter = 'contrast(1.1) brightness(1.05) saturate(1.2)'; 
                aiBadge.innerText = 'AI Styled View';
            }, 2000);
        } else {
            labelAI.classList.remove('active');
            labelReal.classList.add('active');
            tryonImg.style.filter = 'none';
            aiBadge.innerText = 'Realistic View';
        }
    });

    document.getElementById('looks-good-btn').addEventListener('click', () => {
        populateCheckout();
        goToView('checkout-view');
    });

    function populateCheckout() {
        if(!selectedLook) return;
        const itemsContainer = document.getElementById('checkout-items');
        itemsContainer.innerHTML = '';
        
        let total = 0;
        selectedLook.pieces.forEach((piece) => {
            total += piece.price;
            itemsContainer.innerHTML += `
                <div class="checkout-row">
                    <span>${piece.name}</span>
                    <span>₹${piece.price.toLocaleString('en-IN')}</span>
                </div>
            `;
        });
        
        // Business logic: Push full look purchase via 10% bundled discount
        const discount = Math.floor(total * 0.1);
        const finalPayable = total - discount;
        
        itemsContainer.innerHTML += `
            <div class="separator"></div>
            <div class="checkout-row" style="color: #666;">
                <span>Total Items</span>
                <span>₹${total.toLocaleString('en-IN')}</span>
            </div>
            <div class="checkout-row" style="color: #2e7d32; font-weight: 500;">
                <span>Bundle Savings (10%)</span>
                <span>-₹${discount.toLocaleString('en-IN')}</span>
            </div>
        `;
        
        document.getElementById('checkout-total').innerText = `₹${finalPayable.toLocaleString('en-IN')}`;
    }

    document.getElementById('finalize-buy-btn').addEventListener('click', () => {
        alert("Thank you for shopping at Style Terminal by Nykaa!");
        setTimeout(() => {
            nlInput.value = "";
            goToView('home-view');
        }, 500);
    });
});
