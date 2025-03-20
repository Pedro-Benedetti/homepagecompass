const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function ( e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const heroHeight = document.querySelector('.hero').offsetHeight;
  
  if (window.scrollY > heroHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', () => {
  const button = document.querySelector('.get-started');
  const heroHeight = document.querySelector('.hero').offsetHeight;
  
  if (window.scrollY > heroHeight) {
    button.classList.add('scrolled');
  } else {
    button.classList.remove('scrolled');
  }
});
  
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}

mobileDropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content.classList.toggle('active');
    const arrow = toggle.querySelector('span');
    arrow.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => {
        t.classList.remove('tab-active');
        t.classList.add('tab-inactive');
      });
      
      this.classList.add('tab-active');
      this.classList.remove('tab-inactive');
    });
  });
});

document.querySelectorAll('.quantity-control').forEach(control => {
  const minusBtn = control.querySelector('.minus');
  const plusBtn = control.querySelector('.plus');
  const quantitySpan = control.querySelector('.quantity');

  minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 1) {
      quantitySpan.textContent = quantity - 1;
    }
  });

  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = quantity + 1;
  });
});

document.querySelectorAll('.favorite-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const icon = btn.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
    if (icon.classList.contains('fas')) {
      icon.style.color = '#ff4444';
    } else {
      icon.style.color = 'white';
    }
  });
});

document.querySelector('.play-button')?.addEventListener('mouseenter', () => {
  const icon = document.querySelector('.play-button i');
  icon.style.transform = 'scale(1.2)';
});

document.querySelector('.play-button')?.addEventListener('mouseleave', () => {
  const icon = document.querySelector('.play-button i');
  icon.style.transform = 'scale(1)';
});

  const contactForm = document.getElementById('contactForm');
      
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const formControls = contactForm.querySelectorAll('.form-control');
    
      formControls.forEach(control => {
        control.classList.remove('error');
        control.classList.remove('success');
      });
      
      formControls.forEach(control => {
        if (control.hasAttribute('required') && !control.value.trim()) {
          control.classList.add('error');
          isValid = false;
        } else if (control.type === 'email' && !validateEmail(control.value)) {
          control.classList.add('error');
          isValid = false;
        } else {
          control.classList.add('success');
        }
      });
    
      const privacyCheckbox = document.getElementById('privacy');
      if (!privacyCheckbox.checked) {
        privacyCheckbox.parentElement.classList.add('shake');
        setTimeout(() => {
          privacyCheckbox.parentElement.classList.remove('shake');
        }, 600);
        isValid = false;
      }
      
      if (isValid) {
        const formSuccess = document.querySelector('.form-success');
        const formError = document.querySelector('.form-error');
        
        formControls.forEach(control => {
          control.parentElement.style.display = 'none';
        });
        
        document.querySelector('.checkbox-group').style.display = 'none';
        document.querySelector('.submit-btn').style.display = 'none';
      
        formSuccess.style.display = 'block';
        formSuccess.classList.add('pulse');
      
        setTimeout(() => {
          contactForm.reset();
          formControls.forEach(control => {
            control.parentElement.style.display = 'block';
            control.classList.remove('success');
          });
          document.querySelector('.checkbox-group').style.display = 'flex';
          document.querySelector('.submit-btn').style.display = 'block';
          formSuccess.style.display = 'none';
        }, 5000);
      } else {
        contactForm.classList.add('shake');
        setTimeout(() => {
          contactForm.classList.remove('shake');
        }, 600);
      }
    });
    
    const formControls = contactForm.querySelectorAll('.form-control');
    formControls.forEach(control => {
      control.addEventListener('blur', function() {
        if (control.hasAttribute('required') && !control.value.trim()) {
          control.classList.add('error');
          control.classList.remove('success');
        } else if (control.type === 'email' && !validateEmail(control.value)) {
          control.classList.add('error');
          control.classList.remove('success');
        } else {
          control.classList.remove('error');
          control.classList.add('success');
        }
      });
      
      control.addEventListener('input', function() {
        if (control.classList.contains('error')) {
          if ((control.hasAttribute('required') && control.value.trim()) || 
              (control.type === 'email' && validateEmail(control.value))) {
            control.classList.remove('error');
            control.classList.add('success');
          }
        }
      });
    });
  }
  
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('.newsletter-input');
      if (validateEmail(emailInput.value)) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      } else {
        emailInput.classList.add('shake');
        setTimeout(() => {
          emailInput.classList.remove('shake');
        }, 600);
      }
    });
  }
  
  const startChatButton = document.getElementById('startChat');
  if (startChatButton) {
    startChatButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Live chat would open here');
    });
  }