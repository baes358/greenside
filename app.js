const courses = [
  {
    id: "main-golf",
    name: "Main Golf Course",
    location: "5 Main Golf Course Way, San Diego",
    distance: 5.2,
    rating: 4.8,
    reviews: 412,
    type: "Public",
    difficulty: "Intermediate",
    par: 72,
    imageGradient: "linear-gradient(150deg, #3f8a69 0%, #1f4a37 100%)",
    facilities: ["Clubhouse", "Driving Range", "Putting Green"],
    teeTimes: [
      {
        id: "mg-1",
        start: "2026-03-06T10:00:00",
        dateLabel: "Fri, Mar 06",
        timeLabel: "10:00 - 14:00",
        period: "Morning",
        price: 86,
        filled: 2,
        capacity: 4,
        discountAmount: 10,
        group: {
          preference: "Join Group",
          handicap: "6-18",
          age: "24-45",
          gender: "Mixed",
        },
      },
      {
        id: "mg-2",
        start: "2026-03-07T16:20:00",
        dateLabel: "Sat, Mar 07",
        timeLabel: "16:20 - 18:30",
        period: "Afternoon",
        price: 74,
        filled: 1,
        capacity: 4,
        discountAmount: 0,
        group: {
          preference: "Flexible",
          handicap: "10-24",
          age: "21-39",
          gender: "Mixed",
        },
      },
    ],
  },
  {
    id: "force-forest",
    name: "Force Forest Club",
    location: "4 North Wing Dr, Carlsbad",
    distance: 11.4,
    rating: 4.6,
    reviews: 286,
    type: "Private",
    difficulty: "Competitive",
    par: 71,
    imageGradient: "linear-gradient(150deg, #49725f 0%, #1d3a2f 100%)",
    facilities: ["Private Lounge", "Caddie Service", "Fitness Studio"],
    teeTimes: [
      {
        id: "ff-1",
        start: "2026-03-08T11:00:00",
        dateLabel: "Sun, Mar 08",
        timeLabel: "11:00 - 13:30",
        period: "Morning",
        price: 132,
        filled: 3,
        capacity: 4,
        discountAmount: 12,
        group: {
          preference: "Join Group",
          handicap: "8-16",
          age: "29-52",
          gender: "Mixed",
        },
      },
      {
        id: "ff-2",
        start: "2026-03-08T18:00:00",
        dateLabel: "Sun, Mar 08",
        timeLabel: "18:00 - 20:00",
        period: "Evening",
        price: 120,
        filled: 1,
        capacity: 4,
        discountAmount: 0,
        group: {
          preference: "Solo",
          handicap: "N/A",
          age: "Any",
          gender: "Any",
        },
      },
    ],
  },
  {
    id: "jaylon-links",
    name: "Jaylon Links",
    location: "9 Eagle Eye Rd, Del Mar",
    distance: 8.7,
    rating: 4.9,
    reviews: 530,
    type: "Public",
    difficulty: "Beginner Friendly",
    par: 70,
    imageGradient: "linear-gradient(150deg, #6f8a4a 0%, #385124 100%)",
    facilities: ["Instructor Bays", "Restaurant", "Pro Shop"],
    teeTimes: [
      {
        id: "jl-1",
        start: "2026-03-09T12:00:00",
        dateLabel: "Mon, Mar 09",
        timeLabel: "12:00 - 16:00",
        period: "Afternoon",
        price: 95,
        filled: 1,
        capacity: 4,
        discountAmount: 8,
        group: {
          preference: "Flexible",
          handicap: "12-26",
          age: "19-41",
          gender: "Mixed",
        },
      },
      {
        id: "jl-2",
        start: "2026-03-10T07:30:00",
        dateLabel: "Tue, Mar 10",
        timeLabel: "07:30 - 10:00",
        period: "Morning",
        price: 88,
        filled: 0,
        capacity: 4,
        discountAmount: 0,
        group: {
          preference: "Solo",
          handicap: "N/A",
          age: "Any",
          gender: "Any",
        },
      },
    ],
  },
  {
    id: "rough-ridge",
    name: "Rough Riders Hills",
    location: "2 Clubhouse Range, Oceanside",
    distance: 19.6,
    rating: 4.4,
    reviews: 178,
    type: "Public",
    difficulty: "Advanced",
    par: 73,
    imageGradient: "linear-gradient(150deg, #3f667c 0%, #1d3a50 100%)",
    facilities: ["Simulator Room", "Night Lighting", "Practice Bunker"],
    teeTimes: [
      {
        id: "rr-1",
        start: "2026-03-10T11:30:00",
        dateLabel: "Tue, Mar 10",
        timeLabel: "11:30 - 15:30",
        period: "Afternoon",
        price: 102,
        filled: 2,
        capacity: 4,
        discountAmount: 0,
        group: {
          preference: "Join Group",
          handicap: "4-12",
          age: "26-49",
          gender: "Mixed",
        },
      },
      {
        id: "rr-2",
        start: "2026-03-11T08:10:00",
        dateLabel: "Wed, Mar 11",
        timeLabel: "08:10 - 11:10",
        period: "Morning",
        price: 108,
        filled: 2,
        capacity: 4,
        discountAmount: 14,
        group: {
          preference: "Flexible",
          handicap: "8-18",
          age: "24-36",
          gender: "Mixed",
        },
      },
    ],
  },
];

const defaultProfile = {
  firstName: "Alex",
  lastName: "Rivera",
  email: "alex.rivera@example.com",
  phone: "+1 (555) 801-1102",
  password: "",
  photo: "",
  handicap: "12.4",
  skill: "Intermediate",
  playStyle: "Flexible",
  age: "31",
  gender: "",
  card: "4242 4242 4242 4242",
  billingAddress: "145 Greenview Ave, San Diego, CA",
  savedMethod: "Apple Pay",
  emailNotif: true,
  textNotif: true,
  groupTransparency: true,
};

const state = {
  activeTab: "home",
  filters: {
    query: "",
    maxPrice: 140,
    maxDistance: 20,
    timeOfDay: "Any",
    groupPreference: "Any",
    handicapMatch: false,
    sortBy: "recommended",
  },
  activeView: "list",
  selectedTeeTime: null,
  playersCount: 2,
  usePoints: false,
  paymentMethod: "Apple Pay",
  pointsBalance: 1240,
  profile: loadProfile(),
  bookings: [
    {
      id: "bk-1001",
      confirmationId: "TF-52911",
      courseId: "main-golf",
      slotId: "mg-1",
      players: 2,
      status: "Confirmed",
      paymentMethod: "Apple Pay",
      total: 181,
      createdAt: "2026-03-01T09:10:00",
    },
    {
      id: "bk-1002",
      confirmationId: "TF-52908",
      courseId: "force-forest",
      slotId: "ff-1",
      players: 1,
      status: "Confirmed",
      paymentMethod: "Visa •••• 9421",
      total: 145,
      createdAt: "2026-02-27T15:20:00",
    },
  ],
};

const ui = {
  screens: document.querySelectorAll(".screen"),
  tabButtons: document.querySelectorAll(".tab-btn"),
  actionButtons: document.querySelectorAll("[data-action]"),
  upcomingList: document.getElementById("upcomingList"),
  recommendedList: document.getElementById("recommendedList"),
  pointsBalanceHome: document.getElementById("pointsBalanceHome"),
  courseSearch: document.getElementById("courseSearch"),
  toggleFilters: document.getElementById("toggleFilters"),
  filterPanel: document.getElementById("filterPanel"),
  priceRange: document.getElementById("priceRange"),
  priceValue: document.getElementById("priceValue"),
  distanceRange: document.getElementById("distanceRange"),
  distanceValue: document.getElementById("distanceValue"),
  timeButtons: document.querySelectorAll(".segment-btn"),
  groupPreference: document.getElementById("groupPreference"),
  sortBy: document.getElementById("sortBy"),
  handicapMatch: document.getElementById("handicapMatch"),
  viewButtons: document.querySelectorAll(".view-btn"),
  mapView: document.getElementById("mapView"),
  mapMarkers: document.getElementById("mapMarkers"),
  courseList: document.getElementById("courseList"),
  emptyCheckout: document.getElementById("emptyCheckout"),
  checkoutContent: document.getElementById("checkoutContent"),
  selectedSlotSummary: document.getElementById("selectedSlotSummary"),
  playersCount: document.getElementById("playersCount"),
  decreasePlayers: document.getElementById("decreasePlayers"),
  increasePlayers: document.getElementById("increasePlayers"),
  usePoints: document.getElementById("usePoints"),
  priceBreakdown: document.getElementById("priceBreakdown"),
  paymentOptions: document.querySelectorAll(".payment-option"),
  confirmBooking: document.getElementById("confirmBooking"),
  bookingCards: document.getElementById("bookingCards"),
  profileForm: document.getElementById("profileForm"),
  inviteFriend: document.getElementById("inviteFriend"),
  toast: document.getElementById("toast"),
};

init();

function init() {
  bindEvents();
  hydrateFilterControls();
  hydrateProfileForm();
  renderAll();
}

function bindEvents() {
  ui.tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
  });

  ui.actionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.action === "find-tee-times") {
        setActiveTab("search");
      }
      if (btn.dataset.action === "open-profile") {
        setActiveTab("profile");
      }
    });
  });

  ui.toggleFilters.addEventListener("click", () =>
    ui.filterPanel.classList.toggle("hidden")
  );

  ui.courseSearch.addEventListener("input", (event) => {
    state.filters.query = event.target.value.trim();
    renderSearch();
  });

  ui.priceRange.addEventListener("input", (event) => {
    state.filters.maxPrice = Number(event.target.value);
    ui.priceValue.textContent = money(state.filters.maxPrice);
    renderSearch();
  });

  ui.distanceRange.addEventListener("input", (event) => {
    state.filters.maxDistance = Number(event.target.value);
    ui.distanceValue.textContent = `${state.filters.maxDistance} miles`;
    renderSearch();
  });

  ui.timeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.filters.timeOfDay = btn.dataset.time;
      ui.timeButtons.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
      renderSearch();
    });
  });

  ui.groupPreference.addEventListener("change", (event) => {
    state.filters.groupPreference = event.target.value;
    renderSearch();
  });

  ui.sortBy.addEventListener("change", (event) => {
    state.filters.sortBy = event.target.value;
    renderSearch();
  });

  ui.handicapMatch.addEventListener("change", (event) => {
    state.filters.handicapMatch = event.target.checked;
    renderSearch();
  });

  ui.viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeView = btn.dataset.view;
      ui.viewButtons.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
      renderSearch();
    });
  });

  ui.courseList.addEventListener("click", (event) => {
    const trigger = event.target.closest(".book-btn");
    if (!trigger) return;
    const { courseId, slotId } = trigger.dataset;
    selectTeeTime(courseId, slotId);
  });

  ui.recommendedList.addEventListener("click", (event) => {
    const trigger = event.target.closest(".quick-book-btn");
    if (!trigger) return;
    selectTeeTime(trigger.dataset.courseId, trigger.dataset.slotId);
  });

  ui.decreasePlayers.addEventListener("click", () => {
    state.playersCount = Math.max(1, state.playersCount - 1);
    renderCheckout();
  });

  ui.increasePlayers.addEventListener("click", () => {
    const maxPlayers = getSelectedMaxPlayers();
    state.playersCount = Math.min(maxPlayers, state.playersCount + 1);
    renderCheckout();
  });

  ui.usePoints.addEventListener("change", (event) => {
    if (state.pointsBalance < 300 && event.target.checked) {
      event.target.checked = false;
      showToast("Not enough points to redeem for this booking.");
      return;
    }
    state.usePoints = event.target.checked;
    renderCheckout();
  });

  ui.paymentOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.paymentMethod = btn.dataset.pay;
      ui.paymentOptions.forEach((option) => option.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  ui.confirmBooking.addEventListener("click", confirmBooking);

  ui.bookingCards.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-cancel-booking]");
    if (!trigger) return;
    cancelBooking(trigger.dataset.cancelBooking);
  });

  ui.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(ui.profileForm);
    state.profile = {
      ...state.profile,
      ...Object.fromEntries(form.entries()),
      emailNotif: ui.profileForm.elements.emailNotif.checked,
      textNotif: ui.profileForm.elements.textNotif.checked,
      groupTransparency: ui.profileForm.elements.groupTransparency.checked,
    };
    saveProfile(state.profile);
    showToast("Profile saved. Recommendations updated.");
  });

  ui.inviteFriend.addEventListener("click", () => {
    showToast("Invite sent! Friend can join your next tee time.");
  });
}

function hydrateFilterControls() {
  ui.priceRange.value = String(state.filters.maxPrice);
  ui.priceValue.textContent = money(state.filters.maxPrice);
  ui.distanceRange.value = String(state.filters.maxDistance);
  ui.distanceValue.textContent = `${state.filters.maxDistance} miles`;
  ui.groupPreference.value = state.filters.groupPreference;
  ui.sortBy.value = state.filters.sortBy;
  ui.handicapMatch.checked = state.filters.handicapMatch;
}

function hydrateProfileForm() {
  Object.entries(state.profile).forEach(([key, value]) => {
    const field = ui.profileForm.elements[key];
    if (!field) return;
    if (field.type === "checkbox") {
      field.checked = Boolean(value);
    } else {
      field.value = value ?? "";
    }
  });
}

function setActiveTab(tab) {
  state.activeTab = tab;
  ui.tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  ui.screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === tab);
  });
}

function renderAll() {
  renderHome();
  renderSearch();
  renderCheckout();
  renderBookings();
}

function renderHome() {
  const upcoming = state.bookings
    .filter((booking) => booking.status === "Confirmed")
    .slice(0, 3);

  if (!upcoming.length) {
    ui.upcomingList.innerHTML =
      '<div class="booking-card"><p class="muted">No upcoming bookings yet. Use Search to book your first tee time.</p></div>';
  } else {
    ui.upcomingList.innerHTML = upcoming
      .map((booking) => {
        const detail = getBookingDetails(booking);
        if (!detail) return "";
        const { course, slot } = detail;
        return `
          <article class="booking-card">
            <div class="booking-head">
              <div>
                <p class="booking-status">Confirmed</p>
                <h3 class="course-title">${course.name}</h3>
                <p class="muted">${slot.dateLabel} • ${slot.timeLabel}</p>
              </div>
              <p class="muted">${booking.players} player${booking.players > 1 ? "s" : ""}</p>
            </div>
            <div class="tag-row">
              <span class="tag">${slot.filled}/${slot.capacity} players filled</span>
              <span class="tag">HCP ${slot.group.handicap}</span>
              <span class="tag">${slot.group.age}</span>
              <span class="tag">${slot.group.gender}</span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const recommendations = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  ui.recommendedList.innerHTML = recommendations
    .map((course) => {
      const firstSlot = course.teeTimes[0];
      const minPrice = Math.min(...course.teeTimes.map((slot) => slot.price));
      return `
        <article class="recommended-card">
          <div class="recommended-visual" style="background:${course.imageGradient}"></div>
          <div class="recommended-body">
            <h4>${course.name}</h4>
            <p>${course.location}</p>
            <div class="meta-line">
              <span class="muted">⭐ ${course.rating} • ${course.reviews} reviews</span>
              <span class="muted">from ${money(minPrice)}</span>
            </div>
            <button
              class="chip-btn quick-book-btn"
              data-course-id="${course.id}"
              data-slot-id="${firstSlot.id}"
              type="button"
            >
              Book fastest slot
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  ui.pointsBalanceHome.textContent = `${state.pointsBalance.toLocaleString()} pts`;
}

function renderSearch() {
  const filteredCourses = getFilteredCourses();

  ui.mapMarkers.innerHTML = filteredCourses
    .map((course) => {
      const minPrice = Math.min(...course.filteredSlots.map((slot) => slot.price));
      return `
        <div class="map-marker">
          <div>
            <strong>${course.name}</strong>
            <p class="muted">${course.distance} mi • ⭐ ${course.rating}</p>
          </div>
          <span>${money(minPrice)}</span>
        </div>
      `;
    })
    .join("");

  if (!filteredCourses.length) {
    ui.courseList.innerHTML =
      '<div class="panel"><h3>No matching tee times</h3><p class="muted">Try expanding your distance, time, or price filters.</p></div>';
  } else {
    ui.courseList.innerHTML = filteredCourses
      .map((course) => {
        const priceLow = Math.min(...course.teeTimes.map((slot) => slot.price));
        const priceHigh = Math.max(...course.teeTimes.map((slot) => slot.price));
        return `
          <article class="course-card">
            <div class="course-head">
              <div>
                <h3 class="course-title">${course.name}</h3>
                <p class="muted">${course.location}</p>
              </div>
              <div>
                <strong>⭐ ${course.rating}</strong>
                <p class="muted">${course.reviews} reviews</p>
              </div>
            </div>
            <div class="tag-row">
              <span class="tag">${course.type}</span>
              <span class="tag">${course.difficulty}</span>
              <span class="tag">Par ${course.par}</span>
              <span class="tag">${course.distance} mi</span>
              <span class="tag">${money(priceLow)}-${money(priceHigh)}</span>
            </div>
            <div class="slot-list">
              ${course.filteredSlots
                .map((slot) => {
                  const groupMeta =
                    slot.group.preference === "Solo"
                      ? "Solo slot"
                      : `${slot.filled}/${slot.capacity} players filled`;
                  return `
                    <div class="slot-row">
                      <div>
                        <strong>${slot.dateLabel} • ${slot.timeLabel}</strong>
                        <div class="slot-meta">
                          <span>${slot.period}</span>
                          <span>${groupMeta}</span>
                          <span>HCP ${slot.group.handicap}</span>
                          <span>${money(slot.price)}</span>
                          ${
                            slot.discountAmount > 0
                              ? `<span>Deal ${money(slot.discountAmount)} off</span>`
                              : ""
                          }
                        </div>
                      </div>
                      <button
                        class="book-btn"
                        data-course-id="${course.id}"
                        data-slot-id="${slot.id}"
                      >
                        Select
                      </button>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");
  }

  ui.mapView.classList.toggle("hidden", state.activeView !== "map");
  ui.courseList.classList.toggle("hidden", state.activeView === "map");
}

function renderCheckout() {
  const selected = getSelectedDetails();

  if (!selected) {
    ui.emptyCheckout.classList.remove("hidden");
    ui.checkoutContent.classList.add("hidden");
    return;
  }

  const { course, slot } = selected;
  const maxPlayers = getSelectedMaxPlayers();

  if (state.playersCount > maxPlayers) {
    state.playersCount = maxPlayers;
  }

  ui.emptyCheckout.classList.add("hidden");
  ui.checkoutContent.classList.remove("hidden");

  ui.selectedSlotSummary.innerHTML = `
    <h3>${course.name}</h3>
    <p class="muted">${course.location}</p>
    <div class="tag-row">
      <span class="tag">${slot.dateLabel}</span>
      <span class="tag">${slot.timeLabel}</span>
      <span class="tag">${slot.period}</span>
      <span class="tag">${slot.filled}/${slot.capacity} players filled</span>
    </div>
    <div class="slot-meta">
      <span>Group: ${slot.group.preference}</span>
      <span>Handicap ${slot.group.handicap}</span>
      <span>Age ${slot.group.age}</span>
      <span>${slot.group.gender}</span>
    </div>
  `;

  ui.playersCount.textContent = String(state.playersCount);
  ui.usePoints.checked = state.usePoints;
  ui.usePoints.disabled = state.pointsBalance < 300;

  const pricing = computePricing(slot.price, slot.discountAmount);
  ui.priceBreakdown.innerHTML = `
    <div class="price-row"><span>Green fee (${state.playersCount} players)</span><strong>${money(pricing.base)}</strong></div>
    <div class="price-row"><span>Service fee</span><strong>${money(pricing.fee)}</strong></div>
    <div class="price-row"><span>Taxes</span><strong>${money(pricing.tax)}</strong></div>
    <div class="price-row"><span>Course deal</span><strong>- ${money(pricing.dealDiscount)}</strong></div>
    <div class="price-row"><span>Loyalty points</span><strong>- ${money(pricing.pointsDiscount)}</strong></div>
    <div class="price-row total"><span>Total</span><strong>${money(pricing.total)}</strong></div>
  `;
  ui.confirmBooking.textContent = `Confirm booking • ${money(pricing.total)}`;
}

function renderBookings() {
  if (!state.bookings.length) {
    ui.bookingCards.innerHTML =
      '<div class="panel"><p class="muted">No bookings yet.</p></div>';
    return;
  }

  const cards = state.bookings
    .map((booking) => {
      const detail = getBookingDetails(booking);
      if (!detail) return "";
      const { course, slot } = detail;
      const isConfirmed = booking.status === "Confirmed";
      const statusClass = isConfirmed ? "is-confirmed" : "is-cancelled";
      return `
        <article class="booking-card">
          <div class="booking-head">
            <div>
              <p class="booking-status ${statusClass}">${booking.status}</p>
              <h3 class="course-title">${course.name}</h3>
              <p class="muted">${slot.dateLabel} • ${slot.timeLabel}</p>
              <p class="muted">Confirmation: ${booking.confirmationId}</p>
            </div>
            <strong>${money(booking.total)}</strong>
          </div>
          <div class="tag-row">
            <span class="tag">${booking.players} player${booking.players > 1 ? "s" : ""}</span>
            <span class="tag">${booking.paymentMethod}</span>
            <span class="tag">HCP ${slot.group.handicap}</span>
            ${course.type === "Private" ? '<span class="tag">1-time trial badge</span>' : ""}
          </div>
          ${
            isConfirmed
              ? `<button class="chip-btn" data-cancel-booking="${booking.id}" type="button">Cancel booking</button>`
              : ""
          }
        </article>
      `;
    })
    .join("");

  ui.bookingCards.innerHTML = cards;
}

function getFilteredCourses() {
  const query = state.filters.query.toLowerCase();
  const filterGroup = state.filters.groupPreference;

  const filtered = courses
    .filter((course) => {
      const matchesQuery =
        !query ||
        course.name.toLowerCase().includes(query) ||
        course.location.toLowerCase().includes(query) ||
        course.facilities.some((item) => item.toLowerCase().includes(query));
      return matchesQuery && course.distance <= state.filters.maxDistance;
    })
    .map((course) => {
      const filteredSlots = course.teeTimes.filter((slot) => {
        if (slot.price > state.filters.maxPrice) return false;
        if (
          state.filters.timeOfDay !== "Any" &&
          slot.period !== state.filters.timeOfDay
        ) {
          return false;
        }
        if (filterGroup !== "Any") {
          const normalized =
            filterGroup === "Flexible"
              ? ["Flexible", "Join Group", "Solo"]
              : [filterGroup];
          if (!normalized.includes(slot.group.preference)) return false;
        }
        if (state.filters.handicapMatch && !matchesHandicapRange(slot.group.handicap)) {
          return false;
        }
        return true;
      });
      return { ...course, filteredSlots };
    })
    .filter((course) => course.filteredSlots.length);

  return filtered.sort((a, b) => sortCourses(a, b));
}

function sortCourses(a, b) {
  if (state.filters.sortBy === "price") {
    const minA = Math.min(...a.filteredSlots.map((slot) => slot.price));
    const minB = Math.min(...b.filteredSlots.map((slot) => slot.price));
    return minA - minB;
  }
  if (state.filters.sortBy === "distance") {
    return a.distance - b.distance;
  }
  if (state.filters.sortBy === "rating") {
    return b.rating - a.rating;
  }
  const recommendedScore = (course) => {
    const minPrice = Math.min(...course.filteredSlots.map((slot) => slot.price));
    const styleMatch = styleMatchesProfile(course) ? 4 : 0;
    return course.rating * 15 - course.distance - minPrice / 9 + styleMatch;
  };
  return recommendedScore(b) - recommendedScore(a);
}

function styleMatchesProfile(course) {
  const style = state.profile.playStyle;
  if (!style) return false;
  if (style === "Flexible") return true;
  const normalizedStyle = style === "Group" ? "Join Group" : style;
  return course.teeTimes.some(
    (slot) =>
      slot.group.preference === normalizedStyle
  );
}

function matchesHandicapRange(rangeText) {
  if (rangeText === "N/A" || rangeText === "Any") return true;
  const playerHandicap = Number(state.profile.handicap);
  if (Number.isNaN(playerHandicap)) return true;

  const match = rangeText.match(/(\d+)\s*-\s*(\d+)/);
  if (!match) return true;
  const min = Number(match[1]);
  const max = Number(match[2]);
  return playerHandicap >= min && playerHandicap <= max;
}

function selectTeeTime(courseId, slotId) {
  state.selectedTeeTime = { courseId, slotId };
  state.usePoints = false;
  state.playersCount = Math.min(2, getSelectedMaxPlayers());
  setActiveTab("checkout");
  renderCheckout();
  showToast("Tee time selected. Review details before confirming.");
}

function confirmBooking() {
  const selected = getSelectedDetails();
  if (!selected) return;

  const pricing = computePricing(selected.slot.price, selected.slot.discountAmount);
  const booking = {
    id: `bk-${Math.floor(Math.random() * 100000)}`,
    confirmationId: `TF-${Math.floor(Math.random() * 90000 + 10000)}`,
    courseId: selected.course.id,
    slotId: selected.slot.id,
    players: state.playersCount,
    status: "Confirmed",
    paymentMethod: state.paymentMethod,
    total: pricing.total,
    createdAt: new Date().toISOString(),
  };

  if (state.usePoints) {
    state.pointsBalance = Math.max(0, state.pointsBalance - 300);
    state.usePoints = false;
  }

  state.bookings.unshift(booking);
  state.selectedTeeTime = null;
  renderAll();
  setActiveTab("bookings");
  showToast(
    `Booked! ${booking.confirmationId} sent via email and text confirmation.`
  );
}

function cancelBooking(bookingId) {
  const target = state.bookings.find((booking) => booking.id === bookingId);
  if (!target || target.status !== "Confirmed") return;

  const detail = getBookingDetails(target);
  if (!detail) return;

  const teeTimeDate = new Date(detail.slot.start).getTime();
  const hoursUntil = (teeTimeDate - Date.now()) / (1000 * 60 * 60);

  if (hoursUntil >= 24) {
    target.status = "Cancelled";
    showToast("Booking cancelled at no extra charge.");
  } else if (hoursUntil >= 1) {
    if (state.pointsBalance < 120) {
      showToast("Need at least 120 points to cancel within 24 hours.");
      return;
    }
    state.pointsBalance -= 120;
    target.status = "Cancelled";
    showToast("Booking cancelled using 120 points.");
  } else {
    showToast("Cancellation closed: less than 1 hour to tee time.");
    return;
  }

  renderAll();
}

function getSelectedDetails() {
  if (!state.selectedTeeTime) return null;
  const course = courses.find((item) => item.id === state.selectedTeeTime.courseId);
  if (!course) return null;
  const slot = course.teeTimes.find((item) => item.id === state.selectedTeeTime.slotId);
  if (!slot) return null;
  return { course, slot };
}

function getBookingDetails(booking) {
  const course = courses.find((item) => item.id === booking.courseId);
  if (!course) return null;
  const slot = course.teeTimes.find((item) => item.id === booking.slotId);
  if (!slot) return null;
  return { course, slot };
}

function getSelectedMaxPlayers() {
  const selected = getSelectedDetails();
  if (!selected) return 4;
  const available = selected.slot.capacity - selected.slot.filled;
  return Math.max(1, Math.min(4, available));
}

function computePricing(unitPrice, dealAmount) {
  const base = state.playersCount * unitPrice;
  const fee = Math.round(base * 0.09);
  const tax = Math.round(base * 0.05);
  const dealDiscount = dealAmount;
  const pointsDiscount = state.usePoints && state.pointsBalance >= 300 ? 15 : 0;
  const total = Math.max(0, base + fee + tax - dealDiscount - pointsDiscount);
  return {
    base,
    fee,
    tax,
    dealDiscount,
    pointsDiscount,
    total,
  };
}

function money(value) {
  return `$${Number(value).toLocaleString()}`;
}

function loadProfile() {
  try {
    const raw = localStorage.getItem("teeflow-profile");
    if (!raw) return { ...defaultProfile };
    return { ...defaultProfile, ...JSON.parse(raw) };
  } catch (error) {
    return { ...defaultProfile };
  }
}

function saveProfile(profile) {
  localStorage.setItem("teeflow-profile", JSON.stringify(profile));
}

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => ui.toast.classList.add("hidden"), 2600);
}
