// Arusuvai Arasu Banquet Quote & Multi-Hall Inventory Engine
// Built for Mr. Sridhar & Arusuvai Arasu Caterers by A Generative Slice

const MENU_DATA = {
  tiers: {
    classic: {
      name: "Classic Heritage",
      tagline: "Authentic Kumbakonam Tradition",
      multiplier: 1.0,
      basePerPlate: 650
    },
    royal: {
      name: "Royal Arusuvai",
      tagline: "Most Popular Muhurtham Spread",
      multiplier: 1.25,
      basePerPlate: 850
    },
    presidential: {
      name: "Presidential Maharaja",
      tagline: "As served to Presidents & VIPs",
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
          "Arusuvai Signature Badam Halwa", "Paruppu & Pure Nei", "Kumbakonam Kadamba Sambhar", 
          "Mor Kuzhambu", "Vazhaipoo Poriyal", "Avial", "Urulai Kara Roast", 
          "Mysore Rasam", "Ada Pradhaman Payasam", "Appalam", "Getti Thayir", "Sweet Beeda"
        ],
        royal: [
          "Authentic Kumbakonam Badam Halwa (Hot)", "Special Mysore Pak", "Nattu Kozhi Style Mushroom Roast (Veg)", 
          "Paruppu & Cow Ghee", "Ennai Kathirikai Gothsu", "Tirunelveli Sodhi", "Avial", 
          "Senai Kizhangu Varuval", "Kalyana Mor Kuzhambu", "Jeeraga Rasam", "Paal Payasam with Charoli", 
          "Appalam", "Thick Curd", "Special Royal Beeda"
        ],
        presidential: [
          "Presidential Gold Vark Badam Halwa", "Kasi Halwa in Ghee", "Neyyappam", 
          "Heritage Paruppu & A2 Cow Ghee", "Chettinad Veg Pulao", "Murungaikai Mullangi Sambhar", 
          "Special Tirunelveli Sodhi", "Arusuvai Special Mor Kuzhambu", "Vazhaipoo Vadai", 
          "Thalicha Rasam", "Elaneer Payasam (Tender Coconut)", "Malli Poo Appalam", "Clay Pot Set Curd", "Banarasi Pan"
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
        royal: ["Live Appam & Stew Station", "Paneer Tikka Live", "Hyderabadi Veg Biryani with Mirchi ka Salan", "Butter Naan", "Live Italian Pasta", "Matka Kulfi"],
        presidential: ["Luxury Live Counters (Dosa, Chaat, Pasta, Dimsum)", "Awadhi Dum Biryani", "Stuffed Paneer Pasanda", "Malabar Parotta & Veg Kurma", "Live Tawa Ice Cream Roll", "Signature Falooda"]
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
    location: "Raja Annamalaipuram / Santhome, Chennai",
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
    location: "Rukmani Lakshmipathi Salai, Egmore, Chennai",
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
    location: "Mahalingapuram, Nungambakkam, Chennai",
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
    location: "Dr. Radhakrishnan Salai, Mylapore, Chennai",
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
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  renderTiers();
  renderSessions();
  renderAddons();
  calculateTotals();
  renderHallSlots();

  // Event listeners for inputs
  document.getElementById("client-name").addEventListener("input", updateQuote);
  document.getElementById("event-hall").addEventListener("change", updateQuote);
  document.getElementById("wedding-dates").addEventListener("input", updateQuote);
  document.getElementById("btn-generate-pdf").addEventListener("click", generatePDF);
  document.getElementById("btn-whatsapp-share").addEventListener("click", shareWhatsApp);
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
      <div class="tier-tagline">${tier.tagline}</div>
      <div class="tier-price">Avg. ₹${tier.basePerPlate}/pax</div>
    `;
    container.appendChild(card);
  });
}

function selectTier(tierKey) {
  currentTier = tierKey;
  renderTiers();
  renderSessions();
  calculateTotals();
  showToast(`Switched package to ${MENU_DATA.tiers[tierKey].name}`);
}

// Render Sessions with touch-friendly +/- Stepper
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
            <span class="session-time-badge"><i class="fa-regular fa-clock"></i> ${session.time}</span>
            ${session.signature ? '<span class="menu-tag signature" style="margin-left:4px;"><i class="fa-solid fa-crown"></i> Arusuvai Signature</span>' : ''}
          </div>
        </div>
        
        <div class="session-pax-wrap">
          <label>Guests:</label>
          <div class="pax-stepper-box">
            <button type="button" class="btn-stepper" onclick="stepPax(${index}, -50)" ${!session.active ? 'disabled' : ''}>−</button>
            <input type="number" id="pax-${session.id}" value="${session.defaultPax}" min="50" step="50" onchange="updatePax(${index}, this.value)" ${!session.active ? 'disabled' : ''}>
            <button type="button" class="btn-stepper" onclick="stepPax(${index}, 50)" ${!session.active ? 'disabled' : ''}>+</button>
          </div>
          <span class="session-rate-tag">(₹${sessionRate}/pax)</span>
        </div>
      </div>
      
      <div class="session-menu-preview">
        <div class="menu-category-title"><i class="fa-solid fa-utensils"></i> Curated ${MENU_DATA.tiers[currentTier].name} Menu Preview:</div>
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

// Calculate Total Pricing and sync desktop & mobile bars
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

// Generate PDF Quotation (Robust mobile & desktop export)
function generatePDF() {
  const clientName = document.getElementById("client-name").value || "Valued Family";
  const weddingHall = document.getElementById("event-hall").value || "Radisson Blu / MRC Hall";
  const weddingDates = document.getElementById("wedding-dates").value || "Upcoming Muhurtham";
  const totals = calculateTotals();
  const quoteNo = "AA-" + Math.floor(100000 + Math.random() * 900000);

  // Populate PDF template fields
  document.getElementById("pdf-quote-no").textContent = quoteNo;
  document.getElementById("pdf-quote-date").textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  document.getElementById("pdf-client-name").textContent = clientName;
  document.getElementById("pdf-dates").textContent = weddingDates;
  document.getElementById("pdf-venue").textContent = weddingHall;
  document.getElementById("pdf-tier-name").textContent = MENU_DATA.tiers[currentTier].name;

  // Populate PDF session table
  const pdfTableBody = document.getElementById("pdf-table-body");
  pdfTableBody.innerHTML = "";

  MENU_DATA.sessions.forEach(session => {
    if (session.active) {
      const sessionRate = Math.round(MENU_DATA.tiers[currentTier].basePerPlate * session.priceRatio);
      const sessionCost = sessionRate * session.defaultPax;
      const dishes = (session.menus[currentTier] || session.menus.royal).join(", ");

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <strong style="color: #6e1017;">${session.name}</strong><br>
          <span style="font-size:9.5px; color:#666;">${session.time}</span><br>
          <span style="font-size:9px; color:#444; display:block; margin-top:3px;"><strong>Menu:</strong> ${dishes}</span>
        </td>
        <td style="text-align:center;">${session.defaultPax}</td>
        <td style="text-align:right;">₹${sessionRate}</td>
        <td style="text-align:right; font-weight:bold;">${formatINR(sessionCost)}</td>
      `;
      pdfTableBody.appendChild(tr);
    }
  });

  // PDF Totals
  document.getElementById("pdf-subtotal").textContent = formatINR(totals.subtotal);
  document.getElementById("pdf-gst").textContent = formatINR(totals.gst);
  document.getElementById("pdf-grand-total").textContent = formatINR(totals.grandTotal);
  document.getElementById("pdf-advance").textContent = formatINR(totals.bookingAdvance);

  showToast("Generating Official Arusuvai Banquet Proposal PDF...");

  // Force explicit A4 width during export so mobile view doesn't squash the PDF
  const element = document.getElementById("pdf-template");
  element.style.display = "block";
  element.style.position = "fixed";
  element.style.left = "0";
  element.style.top = "0";
  element.style.zIndex = "99999";
  element.style.width = "794px";

  const opt = {
    margin: [8, 8, 8, 8],
    filename: `Arusuvai_Arasu_Banquet_Quote_${clientName.replace(/\s+/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, width: 794 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    element.style.display = "none";
    element.style.position = "static";
    element.style.zIndex = "auto";
    showToast("✓ Proposal PDF Downloaded Successfully!");
  }).catch(err => {
    console.error(err);
    element.style.display = "none";
    element.style.position = "static";
    element.style.zIndex = "auto";
    window.print();
  });
}

// Share via WhatsApp
function shareWhatsApp() {
  const clientName = document.getElementById("client-name").value || "Client";
  const weddingHall = document.getElementById("event-hall").value || "Chennai";
  const totals = calculateTotals();
  const tierName = MENU_DATA.tiers[currentTier].name;

  let message = `*ARUSUVAI ARASU CATERERS - BANQUET QUOTATION SUMMARY*%0A`;
  message += `_Pioneers in Pure Vegetarian Banquets Since 1952_%0A%0A`;
  message += `*Family:* ${encodeURIComponent(clientName)}%0A`;
  message += `*Venue:* ${encodeURIComponent(weddingHall)}%0A`;
  message += `*Selected Package:* ${encodeURIComponent(tierName)}%0A%0A`;
  message += `*CONFIRMED SESSIONS:*%0A`;

  MENU_DATA.sessions.forEach(s => {
    if (s.active) {
      const rate = Math.round(MENU_DATA.tiers[currentTier].basePerPlate * s.priceRatio);
      message += `• ${encodeURIComponent(s.name)}: ${s.defaultPax} Guests (₹${rate}/pax)%0A`;
    }
  });

  message += `%0A*Grand Total (incl 5% GST):* ${encodeURIComponent(formatINR(totals.grandTotal))}%0A`;
  message += `*Date Booking Advance (25%):* ${encodeURIComponent(formatINR(totals.bookingAdvance))}%0A%0A`;
  message += `Generated instantly via Arusuvai Arasu Banquet Portal:%0Ahttps://a-generative-slice.github.io/arusuvaiarasu/`;

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
  }, 1000);
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
          <span>Banquet Capacity:</span>
          <strong>${hall.capacity}</strong>
        </div>
        <div class="hall-meta-row">
          <span>Assigned Catering Team:</span>
          <strong>${hall.teamAllocated}</strong>
        </div>
        <div class="hall-meta-row">
          <span>Booking Family:</span>
          <strong style="color: ${status === 'locked' ? '#c0392b' : '#27ae60'};">${status === 'locked' ? hall.bookedFamily : (status === 'tentative' ? 'Inquiry in Progress' : 'Open for Booking')}</strong>
        </div>

        <button class="hall-action-btn" onclick="handleHallAction(${idx}, '${status}')">
          ${status === 'available' ? '<i class="fa-solid fa-calendar-check"></i> Book Catering Slot' : (status === 'tentative' ? '<i class="fa-solid fa-lock"></i> Lock 25% Advance' : '<i class="fa-solid fa-file-invoice"></i> View Locked Manifest')}
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
