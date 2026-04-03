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

const SHOP_PRODUCTS = {
    women: [
        { id: 'w1', name: 'Premium Floral Midi Dress', price: 2499, discount: '30% OFF', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400' },
        { id: 'w2', name: 'Elegant Wrap Maxi Gown', price: 3899, discount: '15% OFF', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400' },
        { id: 'w3', name: 'Satin Slip A-Line Dress', price: 2199, discount: '10% OFF', image: 'https://images.unsplash.com/photo-1603574670812-d245b0afdd2c?w=400' }
    ],
    men: [
        { id: 'm1', name: 'Premium Tailored Suit Set', price: 5999, discount: '20% OFF', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' },
        { id: 'm2', name: 'Classic Linen Resort Shirt', price: 1799, discount: '25% OFF', image: 'https://images.unsplash.com/photo-1596755094514-f87034a264c6?w=400' },
        { id: 'm3', name: 'Urban Chinos & Polo Look', price: 2899, discount: '40% OFF', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400' }
    ],
    kids: [
        { id: 'k1', name: 'Festive Ethnic Suit', price: 1499, discount: '10% OFF', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400' },
        { id: 'k2', name: 'Summer Princess Dress', price: 1299, discount: '15% OFF', image: 'https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=400' },
        { id: 'k3', name: 'Classic Denim Overalls', price: 999, discount: '20% OFF', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400' }
    ]
};

const AI_OUTFITS = {
    'brunch': {
        women: [
            { name: "Coral Pink Floral Dress", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400", price: 2999 },
            { name: "Coral Pink Wrap Midi", image: "https://images.unsplash.com/photo-1603574670812-d245b0afdd2c?w=400", price: 3499 }
        ],
        men: [
            { name: "Coral Pink Linen Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87034a264c6?w=400", price: 1899 },
            { name: "Coral Pink Cotton Polo", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400", price: 2299 }
        ]
    },
    'office': {
        women: [
            { name: "Navy Blue Tailored Suit", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400", price: 4599 },
            { name: "Navy Blue Pencil Dress", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", price: 3299 }
        ],
        men: [
            { name: "Navy Blue Check Blazer", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400", price: 5499 },
            { name: "Navy Blue Formal Suit", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400", price: 7999 }
        ]
    },
    'date': {
        women: [
            { name: "Burgundy Velvet Gown", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400", price: 5999 },
            { name: "Burgundy Satin Slip", image: "https://images.unsplash.com/photo-1588622153245-c8b59d95f871?w=400", price: 2899 }
        ],
        men: [
            { name: "Burgundy Silk Shirt", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400", price: 2499 },
            { name: "Burgundy Chino Pants Outfit", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400", price: 3499 }
        ]
    }
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
        splash: document.getElementById('splash-view'),
        login: document.getElementById('login-view'),
        modeSelection: document.getElementById('mode-selection-view'),
        avatarSetup: document.getElementById('avatar-setup-view'),
        preferenceSetup: document.getElementById('preference-setup-view'),
        zoneSelection: document.getElementById('zone-selection-view'),
        home: document.getElementById('home-view'),
        loading: document.getElementById('loading-view'),
        results: document.getElementById('results-view'),
        detail: document.getElementById('detail-view'),
        checkout: document.getElementById('checkout-view'),
        shopHome: document.getElementById('shop-home-view'),
        productDetail: document.getElementById('product-detail-view'),
        cart: document.getElementById('cart-view'),
        success: document.getElementById('success-view'),
        newAvatarSetup: document.getElementById('new-avatar-setup-view'),
        avatarPreview: document.getElementById('avatar-preview-view'),
        newStylePreferences: document.getElementById('new-style-preferences-view'),
        newAiResults: document.getElementById('new-ai-results-view'),
        wardrobeInput: document.getElementById('wardrobe-input-view'),
        wardrobeResults: document.getElementById('wardrobe-results-view'),
        tryon: document.getElementById('tryon-view'),
        chat: document.getElementById('chat-view')
    };

    // Splash to Login Transition
    if (views.splash) {
        setTimeout(() => {
            if (views.splash.classList.contains('active')) {
                goToView('login-view');
            }
        }, 3500);
    }

    let cart = [];
    let currentCategory = 'women';
    let currentPd = null;
    let currentLook = null; // To store full outfit curated by AI
    let userAvatarData = null;
    let shoppingFor = 'myself'; // 'myself' or 'someone'

    // Home button logic
    const homeBtn = document.getElementById('header-home-btn');
    if(homeBtn) homeBtn.addEventListener('click', () => goToView('mode-selection-view'));

    // Global navigation for "Continue" button from avatar preview
    const continueToStyleBtn = document.getElementById('continue-to-style-btn');
    if(continueToStyleBtn) {
        continueToStyleBtn.addEventListener('click', () => {
            goToView('zone-selection-view');
        });
    }

    // Zone Selection Logic
    const btnZone1 = document.getElementById('btn-zone1-new');
    const btnZone2 = document.getElementById('btn-zone2-new');

    if(btnZone1) {
        btnZone1.addEventListener('click', () => {
            goToView('home-view');
        });
    }

    if(btnZone2) {
        btnZone2.addEventListener('click', () => {
            goToView('wardrobe-input-view');
        });
    }

    // Tab Logic
    document.getElementById('tab-myself').addEventListener('click', () => {
        shoppingFor = 'myself';
        document.getElementById('tab-myself').classList.add('active');
        document.getElementById('tab-someone').classList.remove('active');
    });

    document.getElementById('tab-someone').addEventListener('click', () => {
        shoppingFor = 'someone';
        document.getElementById('tab-someone').classList.add('active');
        document.getElementById('tab-myself').classList.remove('active');
    });

    function updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        if (cart.length > 0) {
            badge.innerText = cart.length;
            badge.classList.remove('hidden');
            badge.classList.add('cart-badge-bounce');
            setTimeout(() => badge.classList.remove('cart-badge-bounce'), 400);
        } else {
            badge.classList.add('hidden');
        }
    }

    function addToCart(product) {
        cart.push(product);
        updateCartBadge();
        showToast("Added to cart ✨");
    }

    function populateShop(category) {
        const listing = document.getElementById('product-listing');
        if(!listing) return;
        listing.innerHTML = '';
        currentCategory = category;
        
        const products = SHOP_PRODUCTS[category] || [];
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image"><img src="${p.image}"></div>
                <div class="product-info-grid">
                    <div class="product-name">${p.name}</div>
                    <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
                    <div style="font-size: 11px; margin-top: 4px; color: #666;">Beautifully crafted ${category} wear</div>
                    <button class="primary-btn shop-add-btn" style="width: 100%; margin-top: 8px;">Add to Cart</button>
                </div>
            `;
            card.querySelector('.shop-add-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(p);
            });
            card.addEventListener('click', () => {
                currentPd = p;
                populateProductDetail(p);
                goToView('product-detail-view');
            });
            listing.appendChild(card);
        });
    }

       // Zone 1: Full Look Generation Simulation
    const nlFormAlt = document.getElementById('nl-form');
    if(nlFormAlt) {
        nlFormAlt.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = document.getElementById('nl-input').value;
            simulateAILooks(query);
        });
    }

    const chipsAlt = document.querySelectorAll('.chip');
    chipsAlt.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            document.getElementById('nl-input').value = query;
            simulateAILooks(query);
        });
    });

    function simulateAILooks(query) {
        const loadingTitle = document.querySelector('#loading-view h2');
        const loadingDesc = document.querySelector('#loading-view p');
        loadingTitle.innerText = 'Creating your looks...';
        loadingDesc.innerText = `Analyzing items for "${query}"`;
        goToView('loading-view');

        setTimeout(() => {
            renderZone1Results(query);
            goToView('results-view');
        }, 2000);
    }

    function renderZone1Results(query) {
        const container = document.getElementById('results-container');
        container.innerHTML = '';
        
        // Pick random vibe for mock
        const vibes = Object.keys(VIBE_MAP);
        const vibeKey = vibes[Math.floor(Math.random() * vibes.length)];
        const vibeData = VIBE_MAP[vibeKey];
        
        // Show exactly 3 looks
        for(let i = 0; i < 3; i++) {
            const card = document.createElement('div');
            card.className = 'outfit-card anim-delay-' + (i+1);
            
            const isBestMatch = i === 0;
            const matchScore = isBestMatch ? 98 : (90 - i * 5);
            
            card.innerHTML = `
                <div class="outfit-image-wrapper">
                    ${isBestMatch ? '<div class="best-match-badge">✨ Best Match</div>' : ''}
                    <img src="${vibeData.images[i % vibeData.images.length]}" alt="Outfit Look">
                    <div class="match-score">${matchScore}% match</div>
                </div>
                <div class="outfit-details">
                    <h3>Look #${i+1}: ${vibeData.title}</h3>
                    <button class="primary-btn shop-look-btn">Shop This Look</button>
                </div>
            `;
            
            card.querySelector('.shop-look-btn').addEventListener('click', () => {
                currentLook = {
                    title: `Look #${i+1}: ${vibeData.title}`,
                    image: vibeData.images[i % vibeData.images.length],
                    items: [
                        { category: 'Top', name: 'Silk Finish Blouse', price: 2490, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' },
                        { category: 'Bottom', name: 'Tailored Trousers', price: 3200, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' },
                        { category: 'Shoes', name: 'Premium Loafers', price: 4500, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' },
                        { category: 'Accessories', name: 'Minimalist Watch', price: 1800, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' }
                    ]
                };
                populateOutfitDetail(currentLook);
                goToView('detail-view');
            });
            
            container.appendChild(card);
        }
    }

    function populateOutfitDetail(look) {
        document.getElementById('detail-title').innerText = look.title;
        const container = document.getElementById('look-items-container');
        container.innerHTML = '';
        
        look.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'look-item-row';
            itemEl.innerHTML = `
                <div class="look-item-thumb"><img src="${item.image}"></div>
                <div class="look-item-info">
                    <div class="look-item-cat">${item.category}</div>
                    <div class="look-item-name">${item.name}</div>
                    <div class="look-item-price">₹${item.price}</div>
                </div>
                <button class="view-item-btn-small">View</button>
            `;
            itemEl.querySelector('.view-item-btn-small').addEventListener('click', () => {
                currentPd = item;
                populateProductDetail(item);
                goToView('product-detail-view');
            });
            container.appendChild(itemEl);
        });

        // Try on button in detail view
        document.getElementById('try-on-btn').addEventListener('click', () => {
            populateTryOn(look);
            goToView('tryon-view');
        });
    }

    // Zone 2: Wardrobe Completion Logic
    const findMatchesBtn = document.getElementById('find-matches-btn');
    if(findMatchesBtn) {
        findMatchesBtn.addEventListener('click', () => {
            const loadingTitle = document.querySelector('#loading-view h2');
            const loadingDesc = document.querySelector('#loading-view p');
            loadingTitle.innerText = 'Analyzing your item...';
            loadingDesc.innerText = 'Finding perfect matches from our collection';
            goToView('loading-view');

            setTimeout(() => {
                populateWardrobeMatches();
                goToView('wardrobe-results-view');
            }, 2000);
        });
    }

    function populateWardrobeMatches() {
        const sections = ['matches-bottoms', 'matches-shoes', 'matches-accessories'];
        sections.forEach(id => {
            const container = document.getElementById(id);
            container.innerHTML = '';
            
            // Populate 2 items per section
            for(let i = 0; i < 2; i++) {
                const item = {
                    name: 'AI Match ' + (i+1),
                    price: genPrice(1200, 4500),
                    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400'
                };
                
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-image"><img src="${item.image}"></div>
                    <div class="product-info-grid">
                        <div class="product-name">${item.name}</div>
                        <div class="product-price">₹${item.price}</div>
                        <button class="secondary-btn w-full view-match-btn" style="margin-top: 8px; font-size: 11px; padding: 8px;">View Product</button>
                    </div>
                `;
                
                card.querySelector('.view-match-btn').addEventListener('click', () => {
                    currentPd = item;
                    populateProductDetail(item);
                    goToView('product-detail-view');
                });
                container.appendChild(card);
            }
        });
    }

    // Shared Try-On
    function populateTryOn(look) {
        const tryonImg = document.getElementById('tryon-main-img');
        if(userAvatarData) {
            tryonImg.src = userAvatarData;
        } else {
            tryonImg.src = look.image;
        }
        
        document.getElementById('looks-good-btn').addEventListener('click', () => {
            // Redirect to cart or product flow as per user request
            showToast("Adding items to cart! 🛍️");
            populateCart();
            goToView('cart-view');
        });
    }

    function populateProductDetail(product) {
        document.getElementById('pd-title').innerText = product.name;
        document.getElementById('pd-name').innerText = product.name;
        document.getElementById('pd-price').innerText = `₹${product.price}`;
        document.getElementById('pd-discount').innerText = product.discount;
        document.getElementById('pd-image').src = product.image;
        
        // Reset and set size selection
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.classList.remove('active');
            if(btn.innerText === 'M') btn.classList.add('active'); // Default
            
            btn.addEventListener('click', () => {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    function populateCart() {
        const list = document.getElementById('cart-items-list');
        list.innerHTML = '';
        
        if (cart.length === 0) {
            list.innerHTML = '<div style="text-align:center; padding: 40px 0; color: #999;">Your cart is empty</div>';
            document.getElementById('cart-summary').style.display = 'none';
            document.getElementById('buy-now-btn').style.display = 'none';
            return;
        }

        document.getElementById('cart-summary').style.display = 'block';
        document.getElementById('buy-now-btn').style.display = 'flex';

        let subtotal = 0;
        cart.forEach((item, index) => {
            subtotal += item.price;
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-controls">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="event.stopPropagation()">-</button>
                            <span class="qty-val">1</span>
                            <button class="qty-btn" onclick="event.stopPropagation()">+</button>
                        </div>
                        <button style="background:none; border:none; color:#ff4d4d; font-size:12px; font-weight:600; cursor:pointer;" onclick="window.removeItem(${index})">Remove</button>
                    </div>
                </div>
            `;
            list.appendChild(itemEl);
        });

        const discount = Math.floor(subtotal * 0.1); 
        const convFee = subtotal > 0 ? 99 : 0;
        const total = subtotal - discount + convFee;

        document.getElementById('cart-subtotal').innerText = `₹${subtotal.toLocaleString('en-IN')}`;
        document.getElementById('cart-discount').innerText = `-₹${discount.toLocaleString('en-IN')}`;
        document.getElementById('cart-conv-fee').innerText = `₹${convFee.toLocaleString('en-IN')}`;
        document.getElementById('cart-total').innerText = `₹${total.toLocaleString('en-IN')}`;
    }

    window.removeItem = (index) => {
        cart.splice(index, 1);
        updateCartBadge();
        populateCart();
    };

    const globalHeader = document.getElementById('global-header');

    function goToView(targetId) {
        Object.values(views).forEach(view => {
            if(view) {
                view.classList.remove('active');
                view.classList.add('hidden');
            }
        });
        const target = document.getElementById(targetId);
        if(target) {
            target.classList.remove('hidden');
            setTimeout(() => target.classList.add('active'), 10);
        }
        window.scrollTo(0, 0); // Reset scroll position for mobile viewing

        if(globalHeader) {
            if(targetId === 'splash-view' || targetId === 'login-view') {
                globalHeader.classList.add('hidden');
                globalHeader.style.opacity = '0';
            } else {
                globalHeader.classList.remove('hidden');
                setTimeout(() => globalHeader.style.opacity = '1', 10);
            }
        }
    }

    // New Flow Logic
    setTimeout(() => {
        if(document.getElementById('splash-view').classList.contains('active')) {
            goToView('login-view');
        }
    }, 2500);

    const phoneInput = document.getElementById('login-phone');
    const otpBtn = document.getElementById('get-otp-btn');
    if(phoneInput && otpBtn) {
        otpBtn.style.opacity = '0.5';
        otpBtn.disabled = true;
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 10);
            if(e.target.value.length === 10) {
                otpBtn.style.opacity = '1';
                otpBtn.disabled = false;
            } else {
                otpBtn.style.opacity = '0.5';
                otpBtn.disabled = true;
            }
        });
        otpBtn.addEventListener('click', () => {
            goToView('mode-selection-view');
        });
    }

    const cardAi = document.getElementById('card-ai');
    const cardBrowse = document.getElementById('card-browse');
    const modeContinueBtn = document.getElementById('mode-continue-btn');
    let selectedMode = 'ai'; // 'ai' or 'browse'

    if(cardAi && cardBrowse && modeContinueBtn) {
        cardAi.addEventListener('click', () => {
            selectedMode = 'ai';
            cardAi.classList.add('active');
            cardBrowse.classList.remove('active');
        });
        
        cardBrowse.addEventListener('click', () => {
            selectedMode = 'browse';
            cardBrowse.classList.add('active');
            cardAi.classList.remove('active');
        });

        // Sub-category chip logic
        const subChips = document.querySelectorAll('.mode-sub-chip');
        let shopInitialCat = 'women';

        subChips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.stopPropagation(); // Avoid triggering card selection
                selectedMode = 'browse';
                cardBrowse.classList.add('active');
                cardAi.classList.remove('active');
                
                subChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                shopInitialCat = chip.getAttribute('data-cat');
            });
        });

        modeContinueBtn.addEventListener('click', () => {
            if(selectedMode === 'ai') {
                goToView('new-avatar-setup-view');
            } else {
                // Sync shop tabs and populate
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if(btn.getAttribute('data-category') === shopInitialCat) {
                        btn.classList.add('active');
                    }
                });
                populateShop(shopInitialCat);
                goToView('shop-home-view');
            }
        });
    }

    // New Avatar Setup Logic
    const avatarFormInputs = document.querySelectorAll('#new-avatar-setup-view select');
    const createAvatarBtn = document.getElementById('create-avatar-btn');
    const avatarFileInput = document.getElementById('avatar-file-input');
    const uploadTrigger = document.getElementById('upload-trigger');
    const uploadPreviewContainer = document.getElementById('upload-preview-container');
    const uploadPreviewImg = document.getElementById('upload-preview-img');
    const removeUploadBtn = document.getElementById('remove-upload-btn');

    function checkAvatarForm() {
        const anySelect = Array.from(avatarFormInputs).some(input => input.value !== "");
        const hasFile = userAvatarData !== null;
        if(anySelect || hasFile) {
            createAvatarBtn.disabled = false;
            createAvatarBtn.style.opacity = '1';
        } else {
            createAvatarBtn.disabled = true;
            createAvatarBtn.style.opacity = '0.6';
        }
    }

    avatarFormInputs.forEach(input => input.addEventListener('change', checkAvatarForm));

    uploadTrigger.addEventListener('click', () => avatarFileInput.click());
    avatarFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                userAvatarData = event.target.result;
                uploadPreviewImg.src = userAvatarData;
                uploadTrigger.classList.add('hidden');
                uploadPreviewContainer.classList.remove('hidden');
                checkAvatarForm();
            };
            reader.readAsDataURL(file);
        }
    });

    removeUploadBtn.addEventListener('click', () => {
        userAvatarData = null;
        avatarFileInput.value = "";
        uploadPreviewContainer.classList.add('hidden');
        uploadTrigger.classList.remove('hidden');
        checkAvatarForm();
    });

    createAvatarBtn.addEventListener('click', () => {
        const loadingTitle = document.querySelector('#loading-view h2');
        const loadingDesc = document.querySelector('#loading-view p');
        loadingTitle.innerText = 'Creating your Avatar...';
        loadingDesc.innerText = 'Analyzing your features & style preferences';
        goToView('loading-view');

        setTimeout(() => {
            const avatarImg = document.getElementById('generated-avatar-img');
            // If user uploaded, use a "styled" version of it (simulate)
            if(userAvatarData) {
                avatarImg.src = userAvatarData;
                avatarImg.style.filter = 'contrast(1.1) brightness(1.05) saturate(1.2) sepia(0.1)';
            } else {
                // Otherwise use a high-quality placeholder based on selection
                const genderInput = document.getElementById('setup-gender');
                const gender = genderInput.value || 'female';
                avatarImg.src = gender === 'male' 
                    ? 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80'
                    : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80';
            }
            
            const saveBtn = document.getElementById('save-avatar-btn');
            if(shoppingFor === 'myself') {
                saveBtn.classList.remove('hidden');
            } else {
                saveBtn.classList.add('hidden');
            }

            goToView('avatar-preview-view');
        }, 2000);
    });

    const saveAvatarBtnVar = document.getElementById('save-avatar-btn');
    if(saveAvatarBtnVar) {
        saveAvatarBtnVar.addEventListener('click', () => {
            const avatarImg = document.getElementById('generated-avatar-img');
            const navAvatar = document.getElementById('user-avatar-small');
            if(avatarImg && navAvatar) {
                navAvatar.innerHTML = `<img src="${avatarImg.src}" alt="User Avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            }
            showToast("Profile saved to your account! ✨");
            saveAvatarBtnVar.innerText = "Saved";
            saveAvatarBtnVar.disabled = true;
        });
    }

    const continueToChatBtn = document.getElementById('continue-to-chat-btn');
    if(continueToChatBtn) {
        continueToChatBtn.addEventListener('click', () => {
            const loadingTitle = document.querySelector('#loading-view h2');
            const loadingDesc = document.querySelector('#loading-view p');
            loadingTitle.innerText = 'Connecting to Jessica...';
            loadingDesc.innerText = 'Initializing your personal AI Stylist';
            goToView('loading-view');

            setTimeout(() => {
                goToView('chat-view');
                initChat();
            }, 1500);
        });
    }

    // Chatbot Logic
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');
    
    function addChatMessage(sender, text) {
        const msg = document.createElement('div');
        msg.style.maxWidth = '85%';
        msg.style.padding = '12px 16px';
        msg.style.borderRadius = '16px';
        msg.style.fontSize = '14px';
        msg.style.lineHeight = '1.4';
        msg.style.animation = 'slideUpFade 0.3s ease backwards';
        
        if(sender === 'jessica') {
            msg.style.background = '#fff';
            msg.style.color = 'var(--nykaa-dark)';
            msg.style.alignSelf = 'flex-start';
            msg.style.borderBottomLeftRadius = '4px';
            msg.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
            msg.innerHTML = '<strong style="display:block; margin-bottom: 4px; font-size: 13px; color: var(--nykaa-pink);">Jessica</strong>' + text;
        } else {
            msg.style.background = 'var(--nykaa-pink)';
            msg.style.color = '#fff';
            msg.style.alignSelf = 'flex-end';
            msg.style.borderBottomRightRadius = '4px';
            msg.innerText = text;
        }
        
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function addChatOptions(options) {
        if(chatInput) {
            chatInput.disabled = true;
            chatInput.placeholder = "Please select an option...";
        }
        
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '8px';
        container.style.marginTop = '4px';
        container.style.marginBottom = '8px';
        container.style.alignSelf = 'flex-start';
        container.style.maxWidth = '85%';

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.style.padding = '8px 16px';
            btn.style.background = '#fff';
            btn.style.border = '1px solid var(--nykaa-pink)';
            btn.style.color = 'var(--nykaa-pink)';
            btn.style.borderRadius = '20px';
            btn.style.fontSize = '13px';
            btn.style.fontWeight = '600';
            btn.style.cursor = 'pointer';
            btn.style.transition = 'all 0.2s ease';
            
            btn.addEventListener('mouseover', () => {
                btn.style.background = 'var(--nykaa-pink)';
                btn.style.color = '#fff';
            });
            btn.addEventListener('mouseout', () => {
                btn.style.background = '#fff';
                btn.style.color = 'var(--nykaa-pink)';
            });

            btn.addEventListener('click', () => {
                container.style.display = 'none';
                if(chatInput) {
                    chatInput.disabled = false;
                    chatInput.placeholder = "Type your message...";
                }
                handleUserSelection(opt);
            });
            container.appendChild(btn);
        });

        chatMessages.appendChild(container);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    let chatStep = 0;
    let chatMode = null;
    let chatSelectedOccasion = 'brunch';
    
    function initChat() {
        if(chatMessages) chatMessages.innerHTML = '';
        chatStep = 0;
        chatMode = null;
        setTimeout(() => {
            addChatMessage('jessica', "Hi there! I'm Jessica, your personal Nykaa AI stylist ✨. Do you want to buy a completely new outfit, or find something to match an existing item in your wardrobe?");
            addChatOptions(['Full Outfit', 'Match Existing Item']);
        }, 500);
    }
    
    function handleUserSelection(text) {
        if(!text) return;
        addChatMessage('user', text);
        processBotResponse(text);
    }

    function handleChat() {
        if(!chatInput) return;
        const text = chatInput.value.trim();
        if(!text) return;
        
        chatInput.value = '';
        handleUserSelection(text);
    }
    
    function processBotResponse(text) {
        // Remove any active options
        const activeOptions = chatMessages.querySelectorAll('div[style*="flex-wrap: wrap"]');
        activeOptions.forEach(opt => opt.style.display = 'none');
        
        if (chatInput) {
            chatInput.disabled = false;
            chatInput.placeholder = "Type your message...";
        }

        setTimeout(() => {
            if(chatStep === 0) {
                const lowerText = text.toLowerCase();
                if(lowerText.includes('match') || lowerText.includes('old') || lowerText.includes('exist')) {
                    chatMode = 'match';
                    addChatMessage('jessica', `Got it! Let's find a match for your cloth. To find the specific matching item, please share a pic of your cloth or describe the color, type, and material of the cloth.`);
                    addChatOptions(['Upload Pic', 'Describe the cloth']);
                    chatStep = 10;
                } else {
                    chatMode = 'full';
                    addChatMessage('jessica', `Awesome, let's build a full outfit! For what occasion are you buying this outfit?`);
                    addChatOptions(['Brunch in Goa', 'Office meeting', 'Date night']);
                    chatStep = 1;
                }
            } else if(chatStep === 1 && chatMode === 'full') {
                chatSelectedOccasion = text.toLowerCase();
                addChatMessage('jessica', `Got it, perfect for a ${text}! What's your budget for this complete look?`);
                addChatOptions(['Under ₹2000', '₹2000 - ₹5000', '₹5000 - ₹10000', 'No Limit ✨']);
                chatStep = 2;
            } else if(chatStep === 2 && chatMode === 'full') {
                let colorHex = "#ff6b6b"; 
                let colorName = "Coral Pink";
                let materialPic = "https://images.unsplash.com/photo-1544441893-675973e31985?w=200&h=200&fit=crop";

                if (chatSelectedOccasion.includes('office')) {
                    colorHex = "#1E3A8A";
                    colorName = "Navy Blue";
                    materialPic = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop";
                } else if (chatSelectedOccasion.includes('date')) {
                    colorHex = "#800020";
                    colorName = "Burgundy";
                    materialPic = "https://images.unsplash.com/photo-1588622153245-c8b59d95f871?w=200&h=200&fit=crop";
                }

                const lowerText = text.toLowerCase();
                // We're responding to budget here, but we can look back at chat history or just randomize for simulation.
                // Assuming we use a general rule:
                const msgHTML = `Perfect! To make you stand out, I recommend a stunning <strong style="color:${colorHex}">${colorName}</strong> palette in a premium material for your upcoming occasion.
                <div style="display: flex; gap: 16px; margin-top: 12px; align-items: center;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                        <div style="width: 44px; height: 44px; background-color: ${colorHex}; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.15); border: 2px solid white;"></div>
                        <span style="font-size: 11px; color: #666; font-weight: 500;">${colorName}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                        <img src="${materialPic}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 10px rgba(0,0,0,0.15); border: 2px solid white;">
                        <span style="font-size: 11px; color: #666; font-weight: 500;">Silk/Crepe</span>
                    </div>
                </div>
                <div style="margin-top: 12px;">Give me just a moment while I curate these looks for you ✨...</div>`;
                
                addChatMessage('jessica', msgHTML);
                addChatOptions(['I would like to see the outfit', 'Give me other color / material options']);
                chatStep = 3;
            } else if(chatStep === 3 && chatMode === 'full') {
                if (text.toLowerCase().includes('see the outfit') || text.toLowerCase().includes('would like to see')) {
                     addChatMessage('jessica', `Perfect! Give me just a moment while I curate these looks for you ✨...`);
                     setTimeout(() => {
                         populateAIResults();
                         goToView('new-ai-results-view');
                     }, 2000);
                } else {
                     addChatMessage('jessica', `No problem! How about an elegant emerald green in a soft cotton blend instead?`);
                     addChatOptions(['I would like to see the outfit', 'Give me other color / material options']);
                     // Keep chatStep at 3 to loop choices
                }
            } else if(chatStep === 10 && chatMode === 'match') {
                if(text === 'Upload Pic') {
                    // Inject a mock upload button or styling
                    const mockUpload = document.createElement('div');
                    mockUpload.innerHTML = `
                        <div style="padding: 16px; border: 2px dashed #ccc; border-radius: 8px; text-align: center; margin-top: 8px; cursor: pointer; color: var(--nykaa-pink);">
                           📷 Click to upload photo
                        </div>
                    `;
                    mockUpload.addEventListener('click', () => {
                        mockUpload.innerHTML = `<div style="padding: 16px; border: 2px solid var(--nykaa-pink); border-radius: 8px; text-align: center; margin-top: 8px; color: var(--nykaa-dark);"><img src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=100" style="width: 50px; border-radius: 4px; vertical-align: middle;"> Photo uploaded!</div>`;
                        handleUserSelection("I've uploaded a photo.");
                    });
                    chatMessages.appendChild(mockUpload);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    chatStep = 11;
                    if(chatInput) {
                        chatInput.disabled = true;
                        chatInput.placeholder = "Please upload an image...";
                    }
                } else {
                    addChatMessage('jessica', `Alright, tell me about the piece! What's the color, style, and material?`);
                    chatStep = 11;
                    // textbox is already enabled by processBotResponse
                }
            } else if(chatStep === 11 && chatMode === 'match') {
                let detectedColor = text.match(/(red|blue|black|white|green|yellow|pink|purple)/i);
                let colorDisplay = detectedColor ? detectedColor[0] : "your item";
                let materialDisplay = text.toLowerCase().includes("cotton") ? "cotton" : (text.toLowerCase().includes("silk") ? "silk" : "the material");
                
                const msgHTML = `Great! I've noted the details. I see we're working with <strong style="color: var(--nykaa-pink);">${colorDisplay}</strong> and <strong style="color: var(--nykaa-pink);">${materialDisplay}</strong>. Here's what I'm visualizing to pair with it perfectly:
                <div style="border-left: 3px solid var(--nykaa-pink); padding-left: 10px; margin-top: 10px; color: #666; font-style: italic;">
                    "${text}"
                </div>
                <div style="margin-top: 10px;">Searching through thousands of styles for the perfect match ✨...</div>`;

                addChatMessage('jessica', msgHTML);
                setTimeout(() => {
                    populateAIResults();
                    goToView('new-ai-results-view');
                }, 3500);
            }
        }, 1000);
    }
    
    if(chatSendBtn && chatInput) {
        chatSendBtn.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') handleChat();
        });
    }

    document.getElementById('confirm-avatar-btn').addEventListener('click', () => {
        if(shoppingFor === 'myself') {
            document.getElementById('preview-actions').classList.add('hidden');
            document.getElementById('post-confirm-actions').classList.remove('hidden');
            document.getElementById('avatar-view-title').innerText = 'Avatar Saved';
        } else {
            // For someone else flow
            goToView('new-style-preferences-view');
        }
    });

    document.getElementById('edit-avatar-btn').addEventListener('click', () => {
        goToView('new-avatar-setup-view');
    });

    const saveAvatarBtn = document.getElementById('save-avatar-btn');
    saveAvatarBtn.addEventListener('click', () => {
        const navAvatar = document.getElementById('user-avatar-small');
        const generatedImg = document.getElementById('generated-avatar-img').src;
        navAvatar.innerHTML = `<img src="${generatedImg}" alt="User Avatar">`;
        showToast("Avatar saved to profile! 👤");
        goToView('new-style-preferences-view');
    });

    document.getElementById('continue-to-style-btn').addEventListener('click', () => {
        goToView('new-style-preferences-view');
    });

    // Style Preferences Logic
    const styleChips = document.querySelectorAll('.style-chip-card');
    let selectedStyle = 'casual';

    styleChips.forEach(chip => {
        chip.addEventListener('click', () => {
            styleChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            selectedStyle = chip.getAttribute('data-style');
        });
    });

    const budgetSlider = document.getElementById('pref-budget');
    const budgetVal = document.getElementById('budget-current');
    if(budgetSlider && budgetVal) {
        budgetSlider.addEventListener('input', (e) => {
            budgetVal.innerText = `₹${e.target.value}`;
        });
    }

    const getOutfitsBtn = document.getElementById('get-outfits-btn');
    if(getOutfitsBtn) {
        getOutfitsBtn.addEventListener('click', () => {
            const loadingTitle = document.querySelector('#loading-view h2');
            const loadingDesc = document.querySelector('#loading-view p');
            loadingTitle.innerText = 'Creating your looks...';
            loadingDesc.innerText = 'Matching outfits based on your style vibe & occasion';
            goToView('loading-view');

            setTimeout(() => {
                populateAIResults();
                goToView('new-ai-results-view');
            }, 2500);
        });
    }

    function populateAIResults() {
        const listing = document.getElementById('ai-outfits-listing');
        if(!listing) return;
        listing.innerHTML = '';
        
        // Find which occasion matches
        let occasionKey = 'brunch';
        if (chatSelectedOccasion.includes('office')) occasionKey = 'office';
        else if (chatSelectedOccasion.includes('date')) occasionKey = 'date';
        
        const outfitsData = AI_OUTFITS[occasionKey];
        
        const renderGenderSection = (genderLabel, outfitsArray) => {
            const header = document.createElement('h3');
            header.innerText = genderLabel;
            header.style.marginTop = '24px';
            header.style.marginBottom = '12px';
            header.style.color = 'var(--nykaa-dark)';
            header.style.width = '100%'; // Make it span full width if in grid
            listing.appendChild(header);

            outfitsArray.forEach((outfit, i) => {
                const card = document.createElement('div');
                card.className = 'ai-outfit-card';
                card.style.animationDelay = `${i * 0.1}s`;
                
                card.innerHTML = `
                    <img src="${outfit.image}" alt="Outfit">
                    <div class="ai-outfit-info" style="padding-bottom: 16px;">
                        <div class="ai-outfit-title">${outfit.name}</div>
                        <div class="ai-outfit-price" style="font-weight:700; color:var(--nykaa-dark); font-size:15px; margin-bottom:12px;">₹${outfit.price.toLocaleString('en-IN')}</div>
                        <div class="click-to-view-msg" style="font-size:11px; color:#666; margin-bottom: 4px;">Tap to view options</div>
                        <div class="card-action-btns" style="display: none; gap: 8px; width: 100%; margin-top: 8px;">
                            <button class="try-on-card-btn" style="flex: 1; min-width: 0; padding: 10px; background: white; border: 1px solid var(--nykaa-pink); color: var(--nykaa-pink); border-radius: 8px; font-weight: 600;">Try-On</button>
                            <button class="add-to-cart-card-btn" style="flex: 1; min-width: 0; padding: 10px; background: var(--nykaa-pink); border: none; color: white; border-radius: 8px; font-weight: 600;">Add to Cart</button>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', (e) => {
                    if(e.target.tagName.toLowerCase() !== 'button') {
                        const actionBtns = card.querySelector('.card-action-btns');
                        const msg = card.querySelector('.click-to-view-msg');
                        if (actionBtns.style.display === 'none') {
                            actionBtns.style.display = 'flex';
                            msg.style.display = 'none';
                        } else {
                            actionBtns.style.display = 'none';
                            msg.style.display = 'block';
                        }
                    }
                });
                
                card.querySelector('.try-on-card-btn').addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    selectedLook = { image: outfit.image, pieces: [{price: outfit.price, name: outfit.name}] }; 
                    populateTryOn(selectedLook);
                    goToView('tryon-view');
                });

                card.querySelector('.add-to-cart-card-btn').addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({ name: outfit.name, price: outfit.price, image: outfit.image });
                });
                
                listing.appendChild(card);
            });
        };

        renderGenderSection("Women's Edits", outfitsData.women);
        renderGenderSection("Men's Edits", outfitsData.men);
    }

    // Shop Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            populateShop(btn.getAttribute('data-category'));
        });
    });

    // Header Cart Button
    document.getElementById('header-cart-btn').addEventListener('click', () => {
        populateCart();
        // Set up back button for cart
        const currentActive = document.querySelector('.view.active');
        const backBtn = document.getElementById('cart-back-btn');
        if (currentActive) {
            backBtn.setAttribute('data-target', currentActive.id);
        }
        goToView('cart-view');
    });

    // Add to Cart
    document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        if (currentPd) {
            addToCart(currentPd);
        }
    });

    // Buy Now
    document.getElementById('buy-now-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            cart = []; 
            updateCartBadge();
            showToast("Processing payment... 💳");
            setTimeout(() => {
                goToView('success-view');
            }, 1000);
        } else {
            showToast("Your cart is empty!");
        }
    });

    // Continue Shopping
    document.getElementById('continue-shopping-btn').addEventListener('click', () => {
        goToView('mode-selection-view');
    });

    const avatarNextBtn = document.getElementById('avatar-next-btn');
    if(avatarNextBtn) avatarNextBtn.addEventListener('click', () => goToView('preference-setup-view'));

    const prefNextBtn = document.getElementById('pref-next-btn');
    if(prefNextBtn) prefNextBtn.addEventListener('click', () => goToView('zone-selection-view'));




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
