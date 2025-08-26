   var thumbnailElement = document.getElementById("smart_thumbnail");
  
    thumbnailElement.addEventListener("click", function() {
        // Toggle between small and large sizes
        thumbnailElement.classList.toggle("small");
        thumbnailElement.classList.toggle("large");
  
        // Ensure the "animated" class is always applied once
        if (!thumbnailElement.classList.contains("animated")) {
            thumbnailElement.classList.add("animated");
        }
    });
  });
  
 



document.addEventListener("DOMContentLoaded", function() {
  const letter = document.getElementById("letter");
  const quizBox = document.getElementById("quiz-box");
  const overlay = document.getElementById("overlay");
  const yesAnswer = document.getElementById("yes-answer");
  const noAnswer = document.getElementById("no-answer");

  // Handle the click event on the letter image
  letter.addEventListener("click", function() {
      // Stop the jumping animation and scale the letter image
      letter.classList.add("open-letter");
      
      // Show the quiz box and overlay
      quizBox.classList.remove("hidden");
      overlay.classList.add("show-overlay");

      // Apply a slight delay to transition the quiz box
      setTimeout(() => {
          quizBox.style.transform = "scale(1)";
          quizBox.style.opacity = "1";
      }, 0.1); // 0.2s delay for the transition to work
  });

  // Handle the click event on Yes answer
  yesAnswer.addEventListener("click", function() {
      yesAnswer.classList.add("active");
      noAnswer.classList.add("inactive");

      // Example: Change the question after a delay
      setTimeout(() => {
          document.querySelector(".quiz-content h2").textContent = "just say no";
      }, 400);
  });

  // Handle the click event on No answer
  noAnswer.addEventListener("click", function() {
      noAnswer.classList.add("active");
      yesAnswer.classList.add("inactive");

      // Close the quiz box after a short delay
      setTimeout(() => {
          quizBox.style.transform = "scale(0)";
          quizBox.style.opacity = "0";
          setTimeout(() => {
              quizBox.classList.add("hidden");
              overlay.classList.remove("show-overlay");
          }, 0.2); 
      }, 500); 
  });
});





document.addEventListener("DOMContentLoaded", function () {
    const file1 = document.getElementById("file1");
    const file2 = document.getElementById("file2");

    file1.addEventListener("click", function () {
        file1.style.opacity = "0"; 
        file2.style.opacity = "1";
        file1.style.zIndex = "1";
        file2.style.zIndex = "2";
    });

    file2.addEventListener("click", function () {
        file2.style.opacity = "0";
        file1.style.opacity = "1";
        file2.style.zIndex = "1";
        file1.style.zIndex = "2";
    });
});




