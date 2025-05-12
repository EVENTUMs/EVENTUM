document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
      
  menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
      
  overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
      
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
});
// Manejo del menú lateral
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  
  // Función para abrir/cerrar la barra lateral
  menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });
  
  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && event.target !== menuToggle) {
      sidebar.classList.remove('active');
    }
  });
  
  // Control de testimonios
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  
  if (testimonials.length > 0) {
    let currentIndex = 0;
    
    const showTestimonial = (index) => {
      testimonials.forEach(item => item.classList.remove('active'));
      testimonials[index].classList.add('active');
    };
    
    const nextTestimonial = () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    };
    
    const prevTestimonial = () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    };
    
    // Asignar eventos a los botones
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    
    // Rotar testimonios automáticamente
    setInterval(nextTestimonial, 5000);
  }

  // Animación para elementos al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service, .feature');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate');
      }
    });
  };
  
  // Ejecutar animación en scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Ejecutar una vez al cargar para elementos visibles inicialmente
  animateOnScroll();
  
  // Formulario de contacto (para contacto.html)
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulación de envío exitoso
      const formData = new FormData(this);
      let formValues = {};
      
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
      
      console.log('Datos del formulario:', formValues);
      
      // Mostrar mensaje de éxito
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success';
      successMessage.innerHTML = '<p>¡Gracias por contactarnos! Te responderemos a la brevedad.</p>';
      
      contactForm.innerHTML = '';
      contactForm.appendChild(successMessage);
    });
  }
  
  // Galería de imágenes (para galeria.html)
  const galleryImages = document.querySelectorAll('.gallery-image');
  const modalGallery = document.getElementById('modalGallery');
  
  if (galleryImages.length > 0 && modalGallery) {
    galleryImages.forEach(image => {
      image.addEventListener('click', function() {
        const imgSrc = this.getAttribute('src');
        const modalImg = document.getElementById('modalImg');
        
        modalImg.setAttribute('src', imgSrc);
        modalGallery.classList.add('active');
      });
    });
    
    // Cerrar modal
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        modalGallery.classList.remove('active');
      });
    }
  }
  
  // Para decoracion.html - Previsualización de selecciones
  const colorSelects = document.querySelectorAll('select[id^="color-"]');
  const previewArea = document.getElementById('decorationPreview');
  
  if (colorSelects.length > 0 && previewArea) {
    colorSelects.forEach(select => {
      select.addEventListener('change', updateDecorationPreview);
    });
    
    function updateDecorationPreview() {
      let previewHTML = '<div class="preview-room">';
      
      colorSelects.forEach(select => {
        const itemType = select.id.replace('color-', '');
        const color = select.value;
        
        if (color !== 'ninguno') {
          previewHTML += `<div class="preview-item preview-${itemType}" style="background-color: ${color}"></div>`;
        }
      });
      
      previewHTML += '</div>';
      previewArea.innerHTML = previewHTML;
    }
    
    // Inicializar la previsualización
    updateDecorationPreview();
  }
  
  // Para planificacion.html - Calendario dinámico
  const calendarContainer = document.getElementById('calendario');
  
  if (calendarContainer) {
    // Fechas no disponibles (simuladas)
    const unavailableDates = ['2025-05-10', '2025-05-15', '2025-05-20', '2025-05-25'];
    
    // Generar el calendario para el mes actual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isUnavailable = unavailableDates.includes(date);
      
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
      dayElement.className = isUnavailable ? 'day unavailable' : 'day available';
      
      if (!isUnavailable) {
        dayElement.addEventListener('click', function() {
          document.querySelectorAll('.day').forEach(el => el.classList.remove('selected'));
          this.classList.add('selected');
          
          // Actualizar un campo oculto con la fecha seleccionada
          const dateInput = document.getElementById('selectedDate');
          if (dateInput) {
            dateInput.value = date;
          }
        });
      }
      
      calendarContainer.appendChild(dayElement);
    }
  }
  
  // Para logistica.html - Mostrar/ocultar campos adicionales según selección
  const eventoTipo = document.getElementById('eventoTipo');
  const camposAdicionales = document.getElementById('camposAdicionales');
  
  if (eventoTipo && camposAdicionales) {
    eventoTipo.addEventListener('change', function() {
      const tipo = this.value;
      
      // Campos específicos según tipo de evento
      if (tipo === 'corporativo') {
        camposAdicionales.innerHTML = `
          <div class="campo-adicional">
            <label for="empresaNombre">Nombre de la empresa:</label>
            <input type="text" id="empresaNombre" name="empresaNombre">
          </div>
          <div class="campo-adicional">
            <label for="cantidadAsistentes">Cantidad de asistentes:</label>
            <input type="number" id="cantidadAsistentes" name="cantidadAsistentes" min="1">
          </div>
        `;
      } else if (tipo === 'social') {
        camposAdicionales.innerHTML = `
          <div class="campo-adicional">
            <label for="tipoSocial">Tipo de evento social:</label>
            <select id="tipoSocial" name="tipoSocial">
              <option value="boda">Boda</option>
              <option value="cumpleanos">Cumpleaños</option>
              <option value="graduacion">Graduación</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        `;
      } else {
        camposAdicionales.innerHTML = '';
      }
    });
  }
});