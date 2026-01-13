const course = [
  {
    name: "javaScript",
    price: 1000,
    rating: 4.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", contact: "123-456-7890" },
  },
  {
    name: "python",
    price: 1200,
    rating: 4.75,
    isAvailable: true,
    languages: ["English", "Hindi"],
    mentor: { name: "anita", contact: "987-654-3210" },
  },
  {
    name: "java",
    price: 1500,
    rating: 4.65,
    isAvailable: true,
    languages: ["English", "Spanish"],
    mentor: { name: "rohan", contact: "555-666-7777" },
  },
  {
    name: "react",
    price: 1300,
    rating: 4.8,
    isAvailable: true,
    languages: ["English"],
    mentor: { name: "meera", contact: "222-333-4444" },
  },
  {
    name: "csharp",
    price: 1100,
    rating: 4.4,
    isAvailable: true,
    languages: ["English", "German"],
    mentor: { name: "vikram", contact: "444-555-6666" },
  },
  {
    name: "golang",
    price: 1400,
    rating: 4.72,
    isAvailable: false,
    languages: ["English"],
    mentor: { name: "lina", contact: "111-222-3333" },
  },
];

const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

function courseAvailableCount(course) {
  document.getElementById(
    "cousre-count"
  ).innerText = `${course.length} Courses Available`;
}

function displayCourse(course) {
  const courseContainer = document.getElementById("course-container");
  courseContainer.innerHTML = "";
  course.forEach((course) => {
    const languagesList = course.languages
      .map((l) => `<li>${l}</li>`)
      .join("");

    const courseUI = `<div class="course-card">
    <span class="badge ${course.isAvailable ? "available" : "unavailable"}">${course.isAvailable ? "Available" : "Closed"}</span>
    <h3 class="card-title">${formatName(course.name)}</h3>
    <p class="card-meta">Instructor: ${formatName(course.mentor.name)} • Contact: ${course.mentor.contact}</p>
    <p class="card-meta">Rating: ${Math.round(course.rating * 10) / 10} • <span class="price">₹${course.price}</span></p>
    <ul class="languages">${languagesList}</ul>
  </div>`;
    courseContainer.insertAdjacentHTML('beforeend', courseUI);
  });
}

function getTopRatedCourse(course) {
  const top = course.reduce((topCourse, course) => {
    return topCourse.rating > course.rating ? topCourse : course;
  });
  return top;
}

function displayTopRatedCourse(course) {
  const topRatedCourse = getTopRatedCourse(course);
  const languagesList = topRatedCourse.languages.map((l) => `<li>${l}</li>`).join("");
  const courseUI = `<div class="course-card">
    <span class="badge ${topRatedCourse.isAvailable ? "available" : "unavailable"}">${topRatedCourse.isAvailable ? "Available" : "Closed"}</span>
    <h3 class="card-title">${formatName(topRatedCourse.name)}</h3>
    <p class="card-meta">Instructor: ${formatName(topRatedCourse.mentor.name)} • Contact: ${topRatedCourse.mentor.contact}</p>
    <p class="card-meta">Rating: ${Math.round(topRatedCourse.rating * 10) / 10} • <span class="price">₹${topRatedCourse.price}</span></p>
    <ul class="languages">${languagesList}</ul>
  </div>`;

  const topCourseContainer = document.getElementById("top-course-container");
  topCourseContainer.innerHTML = courseUI;
}
function getSearchResult(course, searchText) {
  const q = searchText.trim().toLowerCase();
  const result = course.filter((item) => item.name.toLowerCase().includes(q));
  displayCourse(result);
  courseAvailableCount(result);
}

function initPage() {
  courseAvailableCount(course);
  displayCourse(course);
  displayTopRatedCourse(course);

  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", (event) => {
    getSearchResult(course, event.target.value);
  });
}
initPage();
