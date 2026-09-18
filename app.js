// Arusuvai Arasu Banquet Quote & Multi-Hall Inventory Engine
// Built for Mr. Sridhar & Arusuvai Arasu Caterers by A Generative Slice

const MENU_DATA = {
  tiers: {
    classic: {
      name: "Classic",
      fullName: "Classic Heritage",
      tagline: "Kumbakonam Tradition",
      multiplier: 1.0,
      basePerPlate: 650
    },
    royal: {
      name: "Royal",
      fullName: "Royal Arusuvai (Signature)",
      tagline: "Most Popular Muhurtham Spread",
      multiplier: 1.25,
      basePerPlate: 850
    },
    presidential: {
      name: "Presidential",
      fullName: "Presidential Maharaja",
      tagline: "Served to Presidents & VIPs",
      multiplier: 1.65,
      basePerPlate: 1200
    }
  },
  sessions: [
    {
      id: "viratham",
      name: "Viratham / Nichayathartham",
      time: "Day 1 - Morning / Lunch",
      defaultPax: 350,
      active: true,
      priceRatio: 0.7,
      menus: {
        classic: ["Kasi Halwa", "Mini Idli Sambar", "Medhu Vadai", "Kootu", "Thogayal", "Curd Rice", "Degree Coffee"],
        royal: ["Badam Halwa", "Thattu Vadai Set", "Ghee Mini Idli", "Vegetable Sevai", "Mor Kuzhambu Sadham", "Pineapple Rasam", "Degree Filter Coffee"],
        presidential: ["Dry Fruit Halwa", "Stuffed Mini Uttapam", "Kumbakonam Kadamba Sevai", "Avial Rice", "Mysore Rasam", "Nattu Sakkarai Filter Coffee"]
      }
    },
    {
      id: "janavasam",
      name: "Janavasam & High Tea",
      time: "Day 1 - 4:30 PM - 7:00 PM",
      defaultPax: 500,
      active: true,
      priceRatio: 0.45,
      menus: {
        classic: ["Cashew Pakoda", "Kara Boondi", "Medu Vadai", "Kumbakonam Degree Coffee", "Special Sukku Coffee"],
        royal: ["Ribbon Pakoda", "Live Mysore Bonda", "Chaat Counter (Pani Puri)", "Warm Badam Milk", "Signature Kumbakonam Coffee"],
        presidential: ["Dry Fruit Kachori", "Live Cocktails Dosa Counter", "Royal Kesar Badam Milk", "Hot Gulab Jamun", "Filter Coffee Station"]
      }
    },
    {
      id: "muhurtham_brk",
      name: "Muhurtham Morning Breakfast",
      time: "Day 2 - 7:00 AM - 10:30 AM",
      defaultPax: 600,
      active: true,
      priceRatio: 0.6,
      menus: {
        classic: ["Asoka Halwa", "Ghee Ven Pongal", "Medu Vada", "Poori & Kizhangu Masala", "3 Chutneys", "Degree Coffee"],
        royal: ["Kaju Katli", "Penne Pongal with Cashews", "Mini Sambar Vadai", "Idli with Tiffin Sambar", "Rava Kichadi", "Degree Filter Coffee"],
        presidential: ["Akkaravadisal with Pure Ghee", "Butter Idli Podi", "Crispy Masala Vadai", "Peshawari Poori", "Kumbakonam Brass Pot Filter Coffee"]
      }
    },
    {
      id: "kalyana_virundhu",
      name: "Grand Kalyana Virundhu (Elai Saapaadu)",
      time: "Day 2 - 11:30 AM - 3:30 PM",
      defaultPax: 1000,
      active: true,
      priceRatio: 1.0,
      signature: true,
      menus: {
        classic: [
          "Arusuvai Badam Halwa", "Paruppu & Nei", "Kadamba Sambhar", 
          "Mor Kuzhambu", "Vazhaipoo Poriyal", "Avial", "Urulai Roast", 
          "Mysore Rasam", "Ada Pradhaman Payasam", "Appalam", "Getti Thayir", "Sweet Beeda"
        ],
        royal: [
          "Authentic Hot Badam Halwa", "Special Mysore Pak", "Nattu Kozhi Style Mushroom Roast (Veg)", 
          "Paruppu & Cow Ghee", "Ennai Kathirikai Gothsu", "Tirunelveli Sodhi", "Avial", 
          "Senai Kizhangu Varuval", "Kalyana Mor Kuzhambu", "Jeeraga Rasam", "Paal Payasam", 
          "Appalam", "Thick Curd", "Special Royal Beeda"
        ],
        presidential: [
          "Presidential Gold Vark Badam Halwa", "Kasi Halwa in Ghee", "Neyyappam", 
          "Heritage Paruppu & A2 Cow Ghee", "Chettinad Veg Pulao", "Murungaikai Mullangi Sambhar", 
          "Special Tirunelveli Sodhi", "Mor Kuzhambu", "Vazhaipoo Vadai", 
          "Thalicha Rasam", "Elaneer Payasam", "Malli Poo Appalam", "Clay Pot Set Curd", "Banarasi Pan"
        ]
      }
    },
    {
      id: "reception",
      name: "Grand Evening Reception Dinner",
      time: "Day 2 - 7:00 PM - 10:30 PM",
      defaultPax: 1200,
      active: false,
      priceRatio: 1.1,
      menus: {
        classic: ["Paneer Butter Masala", "Veg Pulao", "Romali Roti", "Dal Makhani", "Curd Rice", "Gulab Jamun with Ice Cream"],
        royal: ["Live Appam & Stew", "Paneer Tikka Live", "Hyderabadi Veg Biryani & Salan", "Butter Naan", "Live Italian Pasta", "Matka Kulfi"],
        presidential: ["Luxury Live Counters (Dosa, Chaat, Pasta)", "Awadhi Dum Biryani", "Paneer Pasanda", "Malabar Parotta & Kurma", "Tawa Ice Cream Roll", "Signature Falooda"]
      }
    }
  ],
  addons: [
    { id: "addon_coffee", name: "Heritage Brass Filter Coffee Bar", price: 15000, type: "flat", active: false },
    { id: "addon_coconut", name: "Fresh Tender Coconut Live Stall", price: 25000, type: "flat", active: false },
    { id: "addon_chaat", name: "Live Delhi Chaat & Puchka Station", price: 22000, type: "flat", active: false },
    { id: "addon_sweets_box", name: "Return Gift Box - 4 Arusuvai Sweets", price: 150, type: "per_pax", active: false },
    { id: "addon_tamboolam", name: "Royal Silk Finish Tamboolam Bags", price: 90, type: "per_pax", active: false }
  ]
};

// Chennai Wedding Halls Data
const CHENNAI_HALLS = [
  {
    id: "radisson_blu",
    name: "Radisson Blu Resort & Temple Bay",
    location: "Mahabalipuram, ECR, Chennai",
    capacity: "1,500 Guests",
    image: "assets/images/Mahabalipuram-4.jpg",
    statusNov: "locked",
    statusDec: "available",
    statusJan: "locked",
    statusFeb: "tentative",
    teamAllocated: "Master Chef Team A (Chef Sundaram)",
    bookedFamily: "Sundaram & Radhika Family"
  },
  {
    id: "mrc_hall",
    name: "Mayor Ramanathan Chettiar Hall (MRC Hall)",
    location: "Raja Annamalaipuram, Chennai",
    capacity: "2,500 Guests",
    image: "assets/images/footer-1.jpg",
    statusNov: "locked",
    statusDec: "tentative",
    statusJan: "locked",
    statusFeb: "available",
    teamAllocated: "Master Chef Team B (Chef Rangarajan)",
    bookedFamily: "Karthik & Meenakshi Family"
  },
  {
    id: "sri_vari",
    name: "Sri Vari Kalyana Mandapam",
    location: "Vanagaram, Chennai",
    capacity: "2,000 Guests",
    image: "assets/images/footer-2.jpg",
    statusNov: "tentative",
    statusDec: "available",
    statusJan: "available",
    statusFeb: "locked",
    teamAllocated: "Master Chef Team C (Chef Venkatraman)",
    bookedFamily: "Pending Advance Confirmation"
  },
  {
    id: "raja_muthiah",
    name: "Raja Muthiah & Rani Meyyammai Mandapam",
    location: "Egmore, Chennai",
    capacity: "3,000 Guests",
    image: "assets/images/Mahabalipuram-4.jpg",
    statusNov: "available",
    statusDec: "locked",
    statusJan: "available",
    statusFeb: "available",
    teamAllocated: "Available for Assignment",
    bookedFamily: "Slot Open"
  },
  {
    id: "em_el_em",
    name: "Em El Em Kalyana Mandapam",
    location: "Mahalingapuram, Chennai",
    capacity: "1,200 Guests",
    image: "assets/images/footer-1.jpg",
    statusNov: "locked",
    statusDec: "available",
    statusJan: "locked",
    statusFeb: "tentative",
    teamAllocated: "Master Chef Team A (Shift 2)",
    bookedFamily: "Narayanan & Shobana Family"
  },
  {
    id: "avm_rajeshwari",
    name: "AVM D Rajeshwari Kalyana Mandapam",
    location: "Mylapore, Chennai",
    capacity: "1,000 Guests",
    image: "assets/images/footer-2.jpg",
    statusNov: "available",
    statusDec: "available",
    statusJan: "tentative",
    statusFeb: "available",
    teamAllocated: "Master Chef Team D (Chef Natarajan Jr)",
    bookedFamily: "Slot Open"
  }
];

let currentTier = "royal";
let activePeriod = "nov_2026";

// Format Currency to INR
function formatINR(amount) {
  return "₹" + Math.round(amount).toLocaleString('en-IN');
}

// Tab Switching
function switchView(viewName) {
  document.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".view-panel").forEach(panel => panel.classList.remove("active"));

  const mobileBar = document.getElementById("mobile-floating-bar");

  if (viewName === 'quote') {
    document.getElementById("tab-btn-quote").classList.add("active");
    document.getElementById("view-quote").classList.add("active");
    if (mobileBar && window.innerWidth <= 960) mobileBar.style.display = "flex";
  } else if (viewName === 'inventory') {
    document.getElementById("tab-btn-inventory").classList.add("active");
    document.getElementById("view-inventory").classList.add("active");
    if (mobileBar) mobileBar.style.display = "none";
    renderHallSlots();
  } else if (viewName === 'patrons') {
    document.getElementById("tab-btn-patrons").classList.add("active");
    document.getElementById("view-patrons").classList.add("active");
    if (mobileBar) mobileBar.style.display = "none";
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  renderTiers();
  renderSessions();
  renderAddons();
  calculateTotals();
  renderHallSlots();

  // Event listeners for inputs
  const nameEl = document.getElementById("client-name");
  const hallEl = document.getElementById("event-hall");
  const dateEl = document.getElementById("wedding-dates");
  const pdfBtn = document.getElementById("btn-generate-pdf");
  const waBtn = document.getElementById("btn-whatsapp-share");

  if (nameEl) nameEl.addEventListener("input", updateQuote);
  if (hallEl) hallEl.addEventListener("change", updateQuote);
  if (dateEl) dateEl.addEventListener("input", updateQuote);
  if (pdfBtn) pdfBtn.addEventListener("click", generatePDF);
  if (waBtn) waBtn.addEventListener("click", shareWhatsApp);
});

// Render Tiers
function renderTiers() {
  const container = document.getElementById("tiers-container");
  if (!container) return;
  container.innerHTML = "";

  Object.keys(MENU_DATA.tiers).forEach(tierKey => {
    const tier = MENU_DATA.tiers[tierKey];
    const card = document.createElement("div");
    card.className = `tier-card ${tierKey === currentTier ? 'active' : ''}`;
    card.onclick = () => selectTier(tierKey);

    card.innerHTML = `
      <div class="tier-name">${tier.name}</div>
      <div class="tier-price">₹${tier.basePerPlate}</div>
      <div class="tier-tagline">${tier.tagline}</div>
    `;
    container.appendChild(card);
  });
}

function selectTier(tierKey) {
  currentTier = tierKey;
  renderTiers();
  renderSessions();
  calculateTotals();
  showToast(`Switched package to ${MENU_DATA.tiers[tierKey].fullName}`);
}

// Render Sessions with Touch Stepper
function renderSessions() {
  const container = document.getElementById("sessions-container");
  if (!container) return;
  container.innerHTML = "";

  MENU_DATA.sessions.forEach((session, index) => {
    const item = document.createElement("div");
    item.className = `session-item ${session.active ? 'selected' : ''}`;
    item.id = `session-card-${session.id}`;

    const currentMenu = session.menus[currentTier] || session.menus.royal;
    const tierBase = MENU_DATA.tiers[currentTier].basePerPlate;
    const sessionRate = Math.round(tierBase * session.priceRatio);

    item.innerHTML = `
      <div class="session-header-row">
        <div class="session-title-check">
          <input type="checkbox" id="check-${session.id}" ${session.active ? 'checked' : ''} onchange="toggleSession(${index})">
          <div>
            <span class="session-name">${session.name}</span>
            <div class="session-time-badge"><i class="fa-regular fa-clock"></i> ${session.time}</div>
          </div>
        </div>
        
        <div class="session-pax-wrap">
          <label>Guests:</label>
          <div class="pax-stepper-box">
            <button type="button" class="btn-stepper" onclick="stepPax(${index}, -50)" ${!session.active ? 'disabled' : ''}>−</button>
            <input type="number" id="pax-${session.id}" value="${session.defaultPax}" min="50" step="50" onchange="updatePax(${index}, this.value)" ${!session.active ? 'disabled' : ''}>
            <button type="button" class="btn-stepper" onclick="stepPax(${index}, 50)" ${!session.active ? 'disabled' : ''}>+</button>
          </div>
          <span class="session-rate-tag">(@ ₹${sessionRate})</span>
        </div>
      </div>
      
      <div class="session-menu-preview">
        <div class="menu-category-title"><i class="fa-solid fa-utensils"></i> Curated ${MENU_DATA.tiers[currentTier].name} Menu:</div>
        <div class="menu-tags-list">
          ${currentMenu.map(dish => `<span class="menu-tag">${dish}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function toggleSession(index) {
  MENU_DATA.sessions[index].active = !MENU_DATA.sessions[index].active;
  renderSessions();
  calculateTotals();
}

function stepPax(index, delta) {
  const current = MENU_DATA.sessions[index].defaultPax || 100;
  const updated = Math.max(50, current + delta);
  MENU_DATA.sessions[index].defaultPax = updated;
  
  const input = document.getElementById(`pax-${MENU_DATA.sessions[index].id}`);
  if (input) input.value = updated;
  
  calculateTotals();
}

function updatePax(index, val) {
  const num = Math.max(50, parseInt(val) || 50);
  MENU_DATA.sessions[index].defaultPax = num;
  calculateTotals();
}

// Render Addons
function renderAddons() {
  const container = document.getElementById("addons-container");
  if (!container) return;
  container.innerHTML = "";

  MENU_DATA.addons.forEach((addon, index) => {
    const card = document.createElement("div");
    card.className = `addon-card ${addon.active ? 'active' : ''}`;
    card.onclick = () => toggleAddon(index);

    const priceLabel = addon.type === 'flat' ? `+ ₹${addon.price.toLocaleString('en-IN')}` : `+ ₹${addon.price}/guest`;

    card.innerHTML = `
      <div class="addon-info">
        <span class="addon-name">${addon.name}</span>
        <span class="addon-price">${priceLabel}</span>
      </div>
      <input type="checkbox" ${addon.active ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--primary-maroon); pointer-events: none;">
    `;
    container.appendChild(card);
  });
}

function toggleAddon(index) {
  MENU_DATA.addons[index].active = !MENU_DATA.addons[index].active;
  renderAddons();
  calculateTotals();
}

// Calculate Total Pricing (Desktop Sidebar + Mobile Floating Bar)
function calculateTotals() {
  const tier = MENU_DATA.tiers[currentTier];
  let subtotal = 0;
  let totalPax = 0;
  let activeSessionsCount = 0;

  const breakdownContainer = document.getElementById("quote-breakdown-items");
  if (breakdownContainer) breakdownContainer.innerHTML = "";

  // Sessions cost
  MENU_DATA.sessions.forEach(session => {
    if (session.active) {
      activeSessionsCount++;
      const sessionRate = Math.round(tier.basePerPlate * session.priceRatio);
      const sessionTotal = sessionRate * session.defaultPax;
      subtotal += sessionTotal;
      totalPax += session.defaultPax;

      if (breakdownContainer) {
        const row = document.createElement("div");
        row.className = "breakdown-row";
        row.innerHTML = `
          <span>${session.name} (${session.defaultPax} pax @ ₹${sessionRate})</span>
          <strong>${formatINR(sessionTotal)}</strong>
        `;
        breakdownContainer.appendChild(row);
      }
    }
  });

  // Addons cost
  const mainVirundhuPax = (MENU_DATA.sessions.find(s => s.id === "kalyana_virundhu") || {}).defaultPax || 500;

  MENU_DATA.addons.forEach(addon => {
    if (addon.active) {
      const cost = addon.type === 'flat' ? addon.price : (addon.price * mainVirundhuPax);
      subtotal += cost;

      if (breakdownContainer) {
        const row = document.createElement("div");
        row.className = "breakdown-row";
        row.innerHTML = `
          <span style="color: #946d27;"><i class="fa-solid fa-plus-circle"></i> ${addon.name}</span>
          <strong>${formatINR(cost)}</strong>
        `;
        breakdownContainer.appendChild(row);
      }
    }
  });

  const gst = Math.round(subtotal * 0.05); // 5% GST catering standard
  const grandTotal = subtotal + gst;
  const bookingAdvance = Math.round(grandTotal * 0.25); // 25% booking advance

  // Sync Desktop Sidebar
  const subEl = document.getElementById("subtotal-val");
  const gstEl = document.getElementById("gst-val");
  const grandEl = document.getElementById("grand-total-val");
  const advEl = document.getElementById("advance-val");

  if (subEl) subEl.textContent = formatINR(subtotal);
  if (gstEl) gstEl.textContent = formatINR(gst);
  if (grandEl) grandEl.textContent = formatINR(grandTotal);
  if (advEl) advEl.textContent = formatINR(bookingAdvance);

  // Sync Mobile Floating Bar
  const mobileGrand = document.getElementById("mobile-grand-total");
  const mobileAdv = document.getElementById("mobile-advance-tag");
  if (mobileGrand) mobileGrand.textContent = formatINR(grandTotal);
  if (mobileAdv) mobileAdv.textContent = `Adv (25%): ${formatINR(bookingAdvance)}`;

  return { subtotal, gst, grandTotal, bookingAdvance, totalPax, activeSessionsCount };
}

function updateQuote() {
  calculateTotals();
}

function updateHallSelection(hallName) {
  showToast(`Updated venue to ${hallName}`);
}

// ============================================================================
// ROCK-SOLID PDF GENERATOR (jsPDF Native Vector Engine - Never Blank)
// ============================================================================
function generatePDF() {
  const clientName = document.getElementById("client-name").value || "Sundaram Family";
  const weddingHall = document.getElementById("event-hall").value || "Radisson Blu Resort";
  const weddingDates = document.getElementById("wedding-dates").value || "Upcoming Muhurtham";
  const totals = calculateTotals();
  const quoteNo = "AA-" + Math.floor(100000 + Math.random() * 900000);
  const tierName = MENU_DATA.tiers[currentTier].fullName;

  showToast("Generating Official Arusuvai Banquet Proposal...");

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // 1. Top Decorative Bar
    doc.setFillColor(110, 16, 23); // Royal Maroon
    doc.rect(0, 0, 210, 8, 'F');
    doc.setFillColor(201, 152, 57); // Gold accent line
    doc.rect(0, 8, 210, 1.5, 'F');

    // 2. Add Logo via Canvas (safe from blank canvas bug)
    let logoDrawn = false;
    const logoImg = document.getElementById("main-brand-logo");
    if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = logoImg.naturalWidth;
        canvas.height = logoImg.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(logoImg, 0, 0);
        const dataURL = canvas.toDataURL("image/png");
        doc.addImage(dataURL, 'PNG', 14, 13, 34, 16);
        logoDrawn = true;
      } catch (err) {
        console.warn("Could not draw logo image to canvas:", err);
      }
    }

    // 3. Header Text
    const textStartX = logoDrawn ? 52 : 14;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(110, 16, 23);
    doc.setFontSize(16);
    doc.text("ARUSUVAI ARASU CATERERS", textStartX, 19);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150, 100, 30);
    doc.text("PIONEERS IN PURE VEGETARIAN BANQUETS • SINCE 1952", textStartX, 24);

    doc.setFontSize(7.5);
    doc.setTextColor(100, 100, 100);
    doc.text("Title 'Arusuvai Arasu' Bestowed by Former President of India Dr. V.V. Giri", textStartX, 28);

    // Office Right text
    doc.setFontSize(7.5);
    doc.text("West Mambalam, Chennai - 600033", 196, 18, { align: "right" });
    doc.text("Phone: +91 98410 24446 | www.arusuvaiarasu.in", 196, 22, { align: "right" });
    doc.text("GSTIN: 33AAACR4829K1Z5", 196, 26, { align: "right" });

    // Dividing double line
    doc.setDrawColor(200, 160, 90);
    doc.setLineWidth(0.5);
    doc.line(14, 32, 196, 32);

    // 4. Metadata Box
    doc.setFillColor(252, 249, 244);
    doc.setDrawColor(235, 216, 194);
    doc.roundedRect(14, 35, 182, 20, 2, 2, 'FD');

    doc.setFontSize(8);
    doc.setTextColor(110, 16, 23);
    doc.setFont("helvetica", "bold");
    doc.text("QUOTATION NO:", 18, 41);
    doc.text("FAMILY / CLIENT:", 75, 41);
    doc.text("PACKAGE TIER:", 140, 41);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(40, 40, 40);
    doc.text(quoteNo, 45, 41);
    doc.text(clientName.substring(0, 28), 105, 41);
    doc.text(tierName.substring(0, 22), 165, 41);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(110, 16, 23);
    doc.text("DATE:", 18, 49);
    doc.text("VENUE / MANDAPAM:", 75, 49);
    doc.text("MUHURTHAM:", 140, 49);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(40, 40, 40);
    doc.text(new Date().toLocaleDateString('en-IN'), 45, 49);
    doc.text(weddingHall.substring(0, 28), 110, 49);
    doc.text(weddingDates.substring(0, 20), 164, 49);

    // 5. Table of Sessions
    const tableRows = [];
    MENU_DATA.sessions.forEach(session => {
      if (session.active) {
        const rate = Math.round(MENU_DATA.tiers[currentTier].basePerPlate * session.priceRatio);
        const cost = rate * session.defaultPax;
        const dishes = (session.menus[currentTier] || session.menus.royal).slice(0, 7).join(", ");
        tableRows.push([
          `${session.name}\n(${session.time})`,
          dishes,
          session.defaultPax.toString(),
          `Rs. ${rate}`,
          `Rs. ${cost.toLocaleString('en-IN')}`
        ]);
      }
    });

    MENU_DATA.addons.forEach(addon => {
      if (addon.active) {
        const mainVirundhuPax = (MENU_DATA.sessions.find(s => s.id === "kalyana_virundhu") || {}).defaultPax || 500;
        const cost = addon.type === 'flat' ? addon.price : (addon.price * mainVirundhuPax);
        tableRows.push([
          `Add-on: ${addon.name}`,
          "Signature Service Station & Staffing",
          addon.type === 'flat' ? '1 Set' : `${mainVirundhuPax} Pax`,
          addon.type === 'flat' ? 'Flat' : `Rs. ${addon.price}`,
          `Rs. ${cost.toLocaleString('en-IN')}`
        ]);
      }
    });

    doc.autoTable({
      startY: 58,
      head: [['Session & Timing', 'Curated Delicacies', 'Pax', 'Rate', 'Total']],
      body: tableRows,
      theme: 'grid',
      headStyles: {
        fillColor: [110, 16, 23],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 8,
        halign: 'left'
      },
      columnStyles: {
        0: { cellWidth: 42, fontSize: 7.5, fontStyle: 'bold' },
        1: { cellWidth: 80, fontSize: 7 },
        2: { cellWidth: 16, fontSize: 7.5, halign: 'center' },
        3: { cellWidth: 20, fontSize: 7.5, halign: 'right' },
        4: { cellWidth: 24, fontSize: 7.5, halign: 'right', fontStyle: 'bold' }
      },
      styles: {
        cellPadding: 2.5,
        valign: 'middle'
      }
    });

    let finalY = doc.lastAutoTable.finalY + 4;

    // 6. Totals Box
    if (finalY > 230) {
      doc.addPage();
      finalY = 20;
    }

    doc.setFillColor(252, 245, 235);
    doc.setDrawColor(230, 205, 170);
    doc.roundedRect(110, finalY, 86, 26, 2, 2, 'FD');

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text("Catering Subtotal:", 114, finalY + 5);
    doc.text(`Rs. ${totals.subtotal.toLocaleString('en-IN')}`, 192, finalY + 5, { align: "right" });

    doc.text("GST (5% Catering standard):", 114, finalY + 10);
    doc.text(`Rs. ${totals.gst.toLocaleString('en-IN')}`, 192, finalY + 10, { align: "right" });

    doc.setFont("helvetica", "bold");
    doc.setTextColor(110, 16, 23);
    doc.setFontSize(9);
    doc.text("Grand Total:", 114, finalY + 16);
    doc.text(`Rs. ${totals.grandTotal.toLocaleString('en-IN')}`, 192, finalY + 16, { align: "right" });

    doc.setTextColor(140, 93, 19);
    doc.setFontSize(8.5);
    doc.text("Booking Advance (25%):", 114, finalY + 22);
    doc.text(`Rs. ${totals.bookingAdvance.toLocaleString('en-IN')}`, 192, finalY + 22, { align: "right" });

    // 7. Terms & Reservation Notes
    finalY += 32;
    doc.setFontSize(7.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(110, 16, 23);
    doc.text("Terms & Reservation Policy:", 14, finalY);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(70, 70, 70);
    doc.setFontSize(6.8);
    doc.text("1. Muhurtham dates & hall slot confirmed strictly upon receipt of 25% booking advance.", 14, finalY + 4);
    doc.text("2. All preparations adhere to Dr. Arusuvai Nataraja Iyer standards with pure Agmark cow ghee & Kumbakonam spices.", 14, finalY + 7.5);
    doc.text("3. Final guest count to be confirmed 7 days prior to the first event session.", 14, finalY + 11);

    // 8. Signatures
    doc.setFontSize(7.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(110, 16, 23);
    doc.text("Authorized Signatory (Arusuvai Arasu)", 14, finalY + 22);
    doc.text("Client Acceptance (Signature & Date)", 196, finalY + 22, { align: "right" });

    // Save Vector PDF File
    const fileName = `Arusuvai_Arasu_Proposal_${clientName.replace(/\s+/g, '_')}.pdf`;
    doc.save(fileName);

    // ALSO Open In-App Modal with full HTML preview so user sees it right on screen
    openInAppProposalModal(quoteNo, clientName, weddingHall, weddingDates, tierName, totals);

    showToast("✓ Proposal PDF Downloaded & Generated!");
  } catch (pdfErr) {
    console.error("PDF generation error:", pdfErr);
    showToast("Opening proposal preview on screen...");
    openInAppProposalModal(quoteNo, clientName, weddingHall, weddingDates, tierName, totals);
  }
}

// Open In-App Modal Preview
function openInAppProposalModal(quoteNo, clientName, weddingHall, weddingDates, tierName, totals) {
  const modal = document.getElementById("proposal-modal");
  const modalBody = document.getElementById("modal-proposal-body");
  if (!modal || !modalBody) return;

  let sessionRowsHtml = "";
  MENU_DATA.sessions.forEach(s => {
    if (s.active) {
      const rate = Math.round(MENU_DATA.tiers[currentTier].basePerPlate * s.priceRatio);
      const cost = rate * s.defaultPax;
      const dishes = (s.menus[currentTier] || s.menus.royal).join(", ");
      sessionRowsHtml += `
        <div style="padding: 8px 0; border-bottom: 1px solid #eee;">
          <div style="display:flex; justify-content:space-between;">
            <strong style="color:#6e1017;">${s.name}</strong>
            <strong>${formatINR(cost)}</strong>
          </div>
          <div style="font-size:0.75rem; color:#777;">${s.time} &bull; ${s.defaultPax} Guests @ ₹${rate}/pax</div>
          <div style="font-size:0.72rem; color:#444; margin-top:3px;"><strong>Menu:</strong> ${dishes}</div>
        </div>
      `;
    }
  });

  modalBody.innerHTML = `
    <div style="text-align:center; padding-bottom:10px; border-bottom:2px solid #6e1017;">
      <h2 style="color:#6e1017; font-size:1.3rem; margin:0;">ARUSUVAI ARASU CATERERS</h2>
      <div style="font-size:0.75rem; color:#c99839; font-weight:bold;">Pioneers in Pure Veg Banquets Since 1952</div>
      <div style="font-size:0.7rem; color:#666;">West Mambalam, Chennai &bull; +91 98410 24446</div>
    </div>

    <div style="background:#fcf9f4; padding:8px 12px; border-radius:6px; margin:10px 0; font-size:0.78rem;">
      <div style="display:flex; justify-content:space-between;"><span>Quote No: <strong>${quoteNo}</strong></span> <span>Date: <strong>${new Date().toLocaleDateString('en-IN')}</strong></span></div>
      <div>Client: <strong>${clientName}</strong></div>
      <div>Venue: <strong>${weddingHall}</strong></div>
      <div>Dates: <strong>${weddingDates}</strong> &bull; Tier: <strong>${tierName}</strong></div>
    </div>

    <div style="margin:10px 0;">
      ${sessionRowsHtml}
    </div>

    <div style="background:#fbf5ea; padding:10px; border-radius:8px; margin-top:10px; font-size:0.85rem;">
      <div style="display:flex; justify-content:space-between;"><span>Catering Subtotal:</span> <strong>${formatINR(totals.subtotal)}</strong></div>
      <div style="display:flex; justify-content:space-between; font-size:0.78rem; color:#777;"><span>GST (5%):</span> <span>${formatINR(totals.gst)}</span></div>
      <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#6e1017; font-weight:bold; margin-top:4px; border-top:1px solid #ebd3a7; padding-top:4px;">
        <span>Grand Total:</span> <span>${formatINR(totals.grandTotal)}</span>
      </div>
      <div style="display:flex; justify-content:space-between; color:#8c5d13; font-weight:bold; margin-top:3px;">
        <span>Booking Advance (25%):</span> <span>${formatINR(totals.bookingAdvance)}</span>
      </div>
    </div>

    <div style="font-size:0.7rem; color:#888; margin-top:10px; line-height:1.3;">
      * Muhurtham dates confirmed upon 25% booking advance.<br>
      * All items prepared with authentic Kumbakonam Agmark Cow Ghee standard.
    </div>
  `;

  modal.classList.add("open");
}

function closeProposalModal() {
  const modal = document.getElementById("proposal-modal");
  if (modal) modal.classList.remove("open");
}

function downloadVectorPDF() {
  generatePDF();
}

// Share via WhatsApp
function shareWhatsApp() {
  const clientName = document.getElementById("client-name").value || "Client";
  const weddingHall = document.getElementById("event-hall").value || "Chennai";
  const totals = calculateTotals();
  const tierName = MENU_DATA.tiers[currentTier].fullName;

  let message = `*ARUSUVAI ARASU CATERERS - BANQUET QUOTATION*%0A`;
  message += `_Pioneers in Pure Vegetarian Banquets Since 1952_%0A%0A`;
  message += `*Family:* ${encodeURIComponent(clientName)}%0A`;
  message += `*Venue:* ${encodeURIComponent(weddingHall)}%0A`;
  message += `*Package:* ${encodeURIComponent(tierName)}%0A%0A`;
  message += `*CONFIRMED SESSIONS:*%0A`;

  MENU_DATA.sessions.forEach(s => {
    if (s.active) {
      const rate = Math.round(MENU_DATA.tiers[currentTier].basePerPlate * s.priceRatio);
      message += `• ${encodeURIComponent(s.name)}: ${s.defaultPax} Guests (@ ₹${rate})%0A`;
    }
  });

  message += `%0A*Grand Total (incl 5% GST):* ${encodeURIComponent(formatINR(totals.grandTotal))}%0A`;
  message += `*Booking Advance (25%):* ${encodeURIComponent(formatINR(totals.bookingAdvance))}%0A%0A`;
  message += `Generated instantly via Arusuvai Arasu Portal:%0Ahttps://a-generative-slice.github.io/arusuvaiarasu/`;

  const waUrl = `https://wa.me/919841024446?text=${message}`;
  window.open(waUrl, '_blank');
  showToast("Opening WhatsApp with formatted quote...");
}

// Lock Inventory from Quote
function lockInventoryFromQuote() {
  const clientName = document.getElementById("client-name").value || "Sundaram Family";
  const venue = document.getElementById("event-hall").value;
  showToast(`Slot for ${venue} reserved for ${clientName}!`);
  setTimeout(() => {
    switchView('inventory');
  }, 900);
}

// ============================================================================
// MULTI-HALL INVENTORY ENGINE
// ============================================================================
function filterHallSlots(periodKey) {
  activePeriod = periodKey;
  renderHallSlots();
  showToast(`Filtered for ${document.getElementById("muhurtham-period-filter").selectedOptions[0].text}`);
}

function renderHallSlots() {
  const container = document.getElementById("halls-grid-container");
  if (!container) return;
  container.innerHTML = "";

  const statusKeyMap = {
    nov_2026: "statusNov",
    dec_2026: "statusDec",
    jan_2027: "statusJan",
    feb_2027: "statusFeb"
  };

  const currentStatusField = statusKeyMap[activePeriod] || "statusNov";

  CHENNAI_HALLS.forEach((hall, idx) => {
    const status = hall[currentStatusField];
    let statusLabel = "Available";
    let statusClass = "available";

    if (status === "locked") {
      statusLabel = "Advance Locked";
      statusClass = "locked";
    } else if (status === "tentative") {
      statusLabel = "Tentative Inquiry";
      statusClass = "tentative";
    }

    const card = document.createElement("div");
    card.className = "hall-card";

    card.innerHTML = `
      <div class="hall-img-banner" style="background-image: url('${hall.image}');">
        <span class="hall-badge-status ${statusClass}">${statusLabel}</span>
      </div>
      <div class="hall-body">
        <h4 class="hall-title">${hall.name}</h4>
        <div class="hall-location"><i class="fa-solid fa-location-dot"></i> ${hall.location}</div>
        
        <div class="hall-meta-row">
          <span>Capacity:</span>
          <strong>${hall.capacity}</strong>
        </div>
        <div class="hall-meta-row">
          <span>Catering Team:</span>
          <strong>${hall.teamAllocated}</strong>
        </div>
        <div class="hall-meta-row">
          <span>Status:</span>
          <strong style="color: ${status === 'locked' ? '#c0392b' : '#27ae60'};">${status === 'locked' ? hall.bookedFamily : (status === 'tentative' ? 'Inquiry in Progress' : 'Open for Booking')}</strong>
        </div>

        <button class="hall-action-btn" onclick="handleHallAction(${idx}, '${status}')">
          ${status === 'available' ? '<i class="fa-solid fa-calendar-check"></i> Book Catering Slot' : (status === 'tentative' ? '<i class="fa-solid fa-lock"></i> Lock 25% Advance' : '<i class="fa-solid fa-file-invoice"></i> View Manifest')}
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function handleHallAction(idx, currentStatus) {
  const hall = CHENNAI_HALLS[idx];
  if (currentStatus === 'available') {
    document.getElementById("event-hall").value = hall.name;
    switchView('quote');
    showToast(`Configuring quotation for ${hall.name}`);
  } else if (currentStatus === 'tentative') {
    const statusKeyMap = { nov_2026: "statusNov", dec_2026: "statusDec", jan_2027: "statusJan", feb_2027: "statusFeb" };
    hall[statusKeyMap[activePeriod]] = "locked";
    hall.bookedFamily = document.getElementById("client-name").value || "Confirmed Family";
    renderHallSlots();
    showToast(`✓ Advance Received! ${hall.name} slot locked.`);
  } else {
    showToast(`Manifest: ${hall.bookedFamily} | ${hall.teamAllocated}`);
  }
}

// Toast notification helper
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #e8c77b;"></i> ${msg}`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
