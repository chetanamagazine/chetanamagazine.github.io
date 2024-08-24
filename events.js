    // Calculate the time until the magazine launch (adjust this date as needed)
    const launchDate = new Date('2024-12-31T23:59:59').getTime();

    // Update the countdown every second
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      // Calculate days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the UI
      document.getElementById('days').textContent = formatTime(days);
      document.getElementById('hours').textContent = formatTime(hours);
      document.getElementById('minutes').textContent = formatTime(minutes);
      document.getElementById('seconds').textContent = formatTime(seconds);

      // If the countdown is finished, display some text
      if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = '<span class="expired">Time is up!</span>';
      }
    }, 1000);

    // Function to add leading zeros to single digit numbers
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
