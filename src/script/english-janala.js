// Load Lesson Button function
const loadLessonBtn = () => {
  const url = 'https://openapi.programming-hero.com/api/levels/all';
  fetch(url)
    .then(res => res.json())
    .then(data => displayLessonBtn(data.data))
}


// Display Lesson Button Function
const displayLessonBtn = (lessons) => {
  // target div
  const lessonBtn = document.getElementById("lessonBtn");
  lessonBtn.innerHTML = "";

  // Loop through
  lessons.forEach(lesson => {
    // Create Div
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onclick="loadWordByLevel(${lesson.level_no})" class="btn btn-outline btn-primary">
          <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
        `
    // Append in LessonBtn
    lessonBtn.append(btnDiv);
  })
}

// Load Word By Level
const loadWordByLevel = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayWordByLevel(data.data))
}

// Display Word By Level
const displayWordByLevel = (words) => {
  // target div
  const lessonCard = document.getElementById("lessonCard");
  lessonCard.innerHTML = "";

  if (words.length == 0) {
    lessonCard.innerHTML = `
        <div class="bg-base-200 py-16 rounded-3xl col-span-full">
          <img class="mx-auto" src="/src/assets/alert-error.png" alt="alert pic">
          <h2 class="bangla-font text-sm text-[#79716B] py-4">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি। ।</h2>
          <p class="bangla-font font-medium text-4xl text-secondary">নেক্সট Lesson এ যান</p>
        </div>
        `
  }

  // Loop Through
  words.forEach(word => {
    // Create Element
    const cardContainer = document.createElement("div");
    cardContainer.innerHTML = `
          <div class="bg-white rounded-xl p-8 h-full flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-3xl text-secondary">${word.word}</h3>
              <p class="font-medium text-xl text-secondary py-6">Meaning /Pronounciation</p>
              <p class="bangla-font font-semibold text-3xl text-secondary">"${word.meaning ? `${word.meaning}` : "অর্থ নেই"} / ${word.pronunciation ? `${word.pronunciation}` : "Pronunciation নেই"}"</p>
            </div>

            <div class="flex items-center justify-between pt-14">
              <div class="h-14 w-14 bg-[#1A91FF10] flex items-center justify-center rounded-lg cursor-pointer">
                <i class="fa-solid fa-circle-info text-2xl"></i>
              </div>

              <div class="h-14 w-14 bg-[#1A91FF10] flex items-center justify-center rounded-lg cursor-pointer">
                <i class="fa-solid fa-volume-high text-2xl"></i>
              </div>
            </div>
          </div>
        `

    // Append Element
    lessonCard.append(cardContainer);
  })
}


loadLessonBtn();