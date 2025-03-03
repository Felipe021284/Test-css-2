window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
      
      
        {
          
          
          testimonial:
            " <a href=tema 1>¡Bienvenido a JavaScript!</a>",
        },
        
        
          {
          
          
          testimonial:
            " <a href=tema 2>TEMA 2</a>",
        },
        
        
        {
          
          
          testimonial:
            " <a href=tema 3>TEMA 3</a>",
        },
        
        
        {
          
          
          testimonial:
            " <a href=tema 4>TEMA 4</a>",
        },
        
        
        {
          
          
          testimonial:
            " <a href=tema 5>TEMA 5</a>",
        },
        
         
       
      ];
      
      let i = 0; // current slide
      let j = testimonials.length; // total slides
      let testimonialContainer = document.getElementById(
        "testimonial-container"
      );
      function next() {
        i = (j + i + 1) % j;
        displayTestimonial();
      }

      function prev() {
        i = (j + i - 1) % j;
        displayTestimonial();
      }
      let displayTestimonial = () => {
        testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
       /*<img src=${testimonials[i].image}></img>*/
        
        `;
      };
      window.onload = displayTestimonial;
