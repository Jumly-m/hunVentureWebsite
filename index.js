 function copyToClipboard() {
 const address = document.getElementById("contract-address").innerHTML.trim();
 navigator.clipboard.writeText(address);
 alert("Address copied to clipboard!");
                      }
                   


                      const sections = document.querySelectorAll('.section');
                      const subsectionLinks = document.querySelectorAll('.subsections ul li a');
                      const nextSectionLink = document.querySelector('.next-section a');
                      const searchInput = document.getElementById('search-input');
                      const suggestions = document.querySelector('.suggestions');
                      
                      // Set section 1 as the default active section
                      document.getElementById('section1').classList.add('active');
                      
                      // Show the clicked section in the main section
                      subsectionLinks.forEach((link) => {
                        link.addEventListener('click', (event) => {
                          event.preventDefault();
                          const target = event.target.getAttribute('href');
                          document.querySelector('.section.active').classList.remove('active');
                          document.querySelector(target).classList.add('active');
                        });
                      });
                      
                      // Navigate to the next section when the right angled arrow is clicked
                      nextSectionLink.addEventListener('click', (event) => {
                        event.preventDefault();
                        const currentActive = document.querySelector('.section.active');
                        const nextSibling = currentActive.nextElementSibling;
                        if (nextSibling) {
                          currentActive.classList.remove('active');
                          nextSibling.classList.add('active');
                        } else {
                          currentActive.classList.remove('active');
                          document.getElementById('section1').classList.add('active');
                        }
                      });
                      
                      // Navigate to the next section when the right arrow key is pressed
                      document.addEventListener('keydown', (event) => {
                        if (event.keyCode === 39) {
                          const currentActive = document.querySelector('.section.active');
                          const nextSibling = currentActive.nextElementSibling;
                          if (nextSibling) {
                            currentActive.classList.remove('active');
                            nextSibling.classList.add('active');
                          } else {
                            currentActive.classList.remove('active');
                            document.getElementById('section1').classList.add('active');
                          }
                        }
                      });
                      
                      // Show the clicked section in the main section
                      sections.forEach((section) => {
                        section.addEventListener('click', (event) => {
                          event.preventDefault();
                          const currentActive = document.querySelector('.section.active');
                          if (currentActive !== section) {
                            currentActive.classList.remove('active');
                            section.classList.add('active');
                          }
                        });
                      });
                      
                      // Show search suggestions when the user types in the search input
                      searchInput.addEventListener('keyup', (event) => {
                        const query = event.target.value.toLowerCase();
                        const matches = [];
                        if (query.length > 0) {
                          sections.forEach((section) => {
                            const title = section.querySelector('h2').textContent.toLowerCase();
                            if (title.includes(query) && !matches.includes(section)) {
                              matches.push(section);
                            }
                          });
                        }
                        displaySuggestions(matches);
                      });
                      
                      // Display search suggestions
                      function displaySuggestions(matches) {
                        if (matches.length > 0) {
                          suggestions.innerHTML = '';
                          matches.forEach((match) => {
                            const suggestion = document.createElement('div');
                            suggestion.classList.add('suggestion');
                            suggestion.textContent = match.querySelector('h2').textContent;
                            suggestion.addEventListener('click', (event) => {
                              event.preventDefault();
                              const currentActive = document.querySelector('.section.active');
                              if (currentActive !== match) {
                                currentActive.classList.remove('active');
                                match.classList.add('active');
                              }
                              searchInput.value = '';
                              suggestions.innerHTML = '';
                            });
                            suggestions.appendChild(suggestion);
                          });
                        } else {
                          suggestions.innerHTML = '';
                        }
                      }
                      
                      // Hide search suggestions when the user clicks outside the search input
                      document.addEventListener('click', (event) => {
                        if (!event.target.matches('#search-input')) {
                          suggestions.innerHTML = '';
                        }
                      });
                      // Show the clicked section in the main section
                      sections.forEach((section) => {
                          section.addEventListener('click', (event) => {
                            event.preventDefault();
                            const currentActive = document.querySelector('.section.active');
                            if (currentActive !== section) {
                              currentActive.classList.remove('active');
                              section.classList.add('active');
                            } else if (currentActive === section && currentActive.nextElementSibling) {
                              currentActive.classList.remove('active');
                              currentActive.nextElementSibling.classList.add('active');
                            } else if (currentActive === section && !currentActive.nextElementSibling) {
                              const bounding = currentActive.getBoundingClientRect();
                              if (
                                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                                bounding.top >= 0 &&
                                (window.innerHeight + window.pageYOffset) < document.body.offsetHeight
                              ) {
                                currentActive.classList.remove('active');
                                const nextSibling = currentActive.nextElementSibling;
                                if (nextSibling) {
                                  nextSibling.classList.add('active');
                                } else {
                                  document.getElementById('section1').classList.add('active');
                                }
                              }
                            }
                          });
                        });
                      
                      // Navigate to the first section when the left angled arrow is clicked in the first section
                      const prevSectionLink = document.querySelector('.prev-section a');
                      prevSectionLink.addEventListener('click', (event) => {
                        event.preventDefault();
                        const currentActive = document.querySelector('.section.active');
                        const prevSibling = currentActive.previousElementSibling;
                        if (prevSibling) {
                          currentActive.classList.remove('active');
                          prevSibling.classList.add('active');
                        } else {
                          currentActive.classList.remove('active');
                          document.getElementById('section1').classList.add('active');
                        }
                      });
                      
                      // Navigate to the first section when the left arrow key is pressed in the first section
                      document.addEventListener('keydown', (event) => {
                        if (event.keyCode === 37) {
                          const currentActive = document.querySelector('.section.active');
                          const prevSibling = currentActive.previousElementSibling;
                          if (prevSibling) {
                            currentActive.classList.remove('active');
                            prevSibling.classList.add('active');
                          } else {
                            currentActive.classList.remove('active');
                            document.getElementById('section1').classList.add('active');
                          }
                        }
                      });
                      
                      // Allow clicking on a section even if the user has already reached the end of the current section
                      document.addEventListener('scroll', (event) => {
                        const currentActive = document.querySelector('.section.active');
                        const bounding = currentActive.getBoundingClientRect();
                        if (
                          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                          bounding.top >= 0
                        ) {
                          currentActive.classList.remove('active');
                          document.getElementById('section1').classList.add('active');
                        }
                      });
                      
                      // Show the clicked section in the main section
                      sections.forEach((section) => {
                          section.addEventListener('click', (event) => {
                            event.preventDefault();
                            const currentActive = document.querySelector('.section.active');
                            if (currentActive !== section) {
                              currentActive.classList.remove('active');
                              section.classList.add('active');
                            } else if (currentActive === section && currentActive.nextElementSibling) {
                              currentActive.classList.remove('active');
                              currentActive.nextElementSibling.classList.add('active');
                            } else if (currentActive === section && !currentActive.nextElementSibling) {
                              currentActive.classList.remove('active');
                              document.getElementById('section1').classList.add('active');
                            }
                          });
                        });
                      
                        document.addEventListener('scroll', (event) => {
                          const currentActive = document.querySelector('.section.active');
                          const bounding = currentActive.getBoundingClientRect();
                          if (
                            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                            bounding.top >= 0 &&
                            (window.innerHeight + window.pageYOffset) < document.body.offsetHeight
                          ) {
                            currentActive.classList.remove('active');
                            const nextSibling = currentActive.nextElementSibling;
                            if (nextSibling) {
                              nextSibling.classList.add('active');
                            } else {
                              document.getElementById('section1').classList.add('active');
                            }
                          }
                        });                    