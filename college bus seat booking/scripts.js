document.addEventListener('DOMContentLoaded', function () {
  function triggerLoginModal() {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
  }

  triggerLoginModal();

  document.getElementById('flexSwitchCheckDefault').addEventListener('change', function () {
      document.body.classList.toggle('dark-mode', this.checked);
  });

  document.getElementById('vanSelect').addEventListener('change', function () {
      const seatSelect = document.getElementById('seatSelect');
      const vanNumber = this.value;
      const vanLayout = document.getElementById('vanLayout');

      seatSelect.innerHTML = '<option selected>Select the seat</option>';

      if (vanNumber) {
          vanLayout.innerHTML = '';
          vanLayout.style.display = 'grid';
          for (let i = 1; i <= 25; i++) {
              const seat = document.createElement('div');
              seat.className = 'seat';
              seat.textContent = i;
              seat.dataset.seatNumber = i;
              vanLayout.appendChild(seat);
          }
          for (let i = 1; i <= 25; i++) {
              const option = document.createElement('option');
              option.value = i;
              option.textContent = i;
              seatSelect.appendChild(option);
          }
      } else {
          vanLayout.style.display = 'none';
      }
  });

  document.getElementById('seatSelect').addEventListener('change', function () {
      const selectedSeat = this.value;
      const seats = document.querySelectorAll('.seat');
      const bookButtonContainer = document.getElementById('bookButtonContainer');

      seats.forEach(seat => {
          if (seat.dataset.seatNumber === selectedSeat) {
              seat.classList.add('highlighted');
          } else {
              seat.classList.remove('highlighted');
          }
      });

      if (selectedSeat !== 'Select the seat') {
          bookButtonContainer.style.display = 'block';
      } else {
          bookButtonContainer.style.display = 'none';
      }
  });

  document.getElementById('bookButton').addEventListener('click', function () {
      const selectedSeat = document.getElementById('seatSelect').value;
      if (selectedSeat && confirm(`Are you sure you want to book seat number ${selectedSeat}?`)) {
          alert('Seat booked successfully!');
          // Add the booking logic here
      }
  });

  document.querySelector('a[onclick="toggleContactInfo()"]').addEventListener('click', function (event) {
      event.preventDefault();
      const contactInfo = document.getElementById('contactInfo');
      contactInfo.style.display = (contactInfo.style.display === 'none') ? 'block' : 'none';
  });
});
