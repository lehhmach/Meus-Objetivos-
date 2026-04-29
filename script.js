function countdown(id, finalDate){

      function update(){

          const now = new Date().getTime();

              const distance = finalDate - now;

                  const timer = document.getElementById(id);

                      if(distance <= 0){

                            timer.innerHTML = `
                                    <div class="finished">
                                              ✅ Objetivo alcançado!
                                                      </div>
                                                            `;

                                                                  return;
                                                                      }

                                                                          const days = Math.floor(distance / (1000 * 60 * 60 * 24));

                                                                              const hours = Math.floor(
                                                                                    (distance % (1000 * 60 * 60 * 24))
                                                                                          / (1000 * 60 * 60)
                                                                                              );

                                                                                                  const minutes = Math.floor(
                                                                                                        (distance % (1000 * 60 * 60))
                                                                                                              / (1000 * 60)
                                                                                                                  );

                                                                                                                      const seconds = Math.floor(
                                                                                                                            (distance % (1000 * 60))
                                                                                                                                  / 1000
                                                                                                                                      );

                                                                                                                                          timer.innerHTML = `
                                                                                                                                                <div class="box">
                                                                                                                                                        <span class="number">${days}</span>
                                                                                                                                                                <span class="text">Dias</span>
                                                                                                                                                                      </div>

                                                                                                                                                                            <div class="box">
                                                                                                                                                                                    <span class="number">${hours}</span>
                                                                                                                                                                                            <span class="text">Horas</span>
                                                                                                                                                                                                  </div>

                                                                                                                                                                                                        <div class="box">
                                                                                                                                                                                                                <span class="number">${minutes}</span>
                                                                                                                                                                                                                        <span class="text">Min</span>
                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                    <div class="box">
                                                                                                                                                                                                                                            <span class="number">${seconds}</span>
                                                                                                                                                                                                                                                    <span class="text">Seg</span>
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                              `;
                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                  update();

                                                                                                                                                                                                                                                                    setInterval(update, 1000);
                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                    countdown(
                                                                                                                                                                                                                                                                      "timer1",
                                                                                                                                                                                                                                                                        new Date("December 1, 2026 00:00:00").getTime()
                                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                                        countdown(
                                                                                                                                                                                                                                                                          "timer2",
                                                                                                                                                                                                                                                                            new Date("December 1, 2032 00:00:00").getTime()
                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                            countdown(
                                                                                                                                                                                                                                                                              "timer3",
                                                                                                                                                                                                                                                                                new Date("December 1, 2035 00:00:00").getTime()
                                                                                                                                                                                                                                                                                );

                                                                                                                                                                                                                                                                                countdown(
                                                                                                                                                                                                                                                                                  "timer4",
                                                                                                                                                                                                                                                                                    new Date("December 1, 2036 00:00:00").getTime()
                                                                                                                                                                                                                                                                                    );
