function makeSelected(event) {
    const currBtn = event.currentTarget;
    const btns = document.querySelectorAll(".selected");
    const isSelected = currBtn.classList.contains("selected");
  
    // Toggle the class of the current button
    currBtn.classList.toggle("selected", !isSelected);
  
    // Toggle the class of the other buttons
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      if (btn !== currBtn) {
        btn.classList.toggle("selected", false);
      }
    }
  }

  function openFast() {
    
  }
  
  function openDelivery() {
    
  }
  
  function openOnTime() {
    
  }
  

  