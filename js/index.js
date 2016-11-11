function reloadJS() {
  numberofgames = 3;
  //
  numberofgames -= 1;
  var sketchProc = function(processingInstance) {
    with(processingInstance) {
      size(240, 160);
      frameRate(30);
      game = 0;
      comicsans = createFont('Century Gothic', 32);

      function game0() {
        var scene = 0;
        var posit = 0;
        var speed = 1;
        var metres = 0;
        var excercise = 0;
        var colordot = 0;
        var shopcolor = 0;
        var hatcolor = 0;
        var hatshop = 0;
        var hats = 0;
        $(".left").click(function() {
          if (scene == 1) {
            posit -= speed * 10;
            metres += speed;
            excercise += speed;
          }
        });
        $(".right").click(function() {
          if (scene == 1) {
            posit += speed * 10;
            metres += speed;
            excercise += speed;
          }
        });
        $('.up').click(function() {
          if (scene == 2) {
            shopcolor += 1;
          }
          if (scene == 3) {
            hatshop += 1;
          }
        });
        $('.down').click(function() {
          if (scene == 2) {
            shopcolor -= 1;
          }
          if (scene == 3) {
            hatshop -= 1;
          }
        });
        $('.a').click(function() {
          if ((scene == 2) & (metres > (200 + (shopcolor * 30))) & (colordot !== shopcolor)) {
            metres -= 200 + (shopcolor * 30);
            colordot = shopcolor;
          }
          if ((scene == 3) & (metres > (200 + (shopcolor * 30))) & (hatcolor !== hatshop)) {
            metres -= 200 + (hatshop * 30);
            hatcolor = hatshop;
          }
        });
        $(".select").click(function() {
          scene -= 1;
          if (scene == 2) {
            shopcolor = colordot;
          }
        });
        $(".start").click(function() {
          scene += 1;
          if (scene == 2) {
            shopcolor = colordot;
          }
        });
        colorbrate = function(thingy) {
          if (thingy === 0) {
            fill(0, 200, 0);
          }
          if (thingy === 1) {
            fill(0, 0, 200);
          }
          if (thingy === 2) {
            fill(200, 0, 0);
          }
          if (thingy === 3) {
            fill(200, 200, 0);
          }
          if (thingy === 4) {
            fill(0, 200, 200);
          }
          if (thingy === 5) {
            fill(200, 0, 200);
          }
        };
        draw = function() {
          if (shopcolor > 5) {
            shopcolor = 0;
          }
          if (shopcolor < 0) {
            shopcolor = 5;
          }
          if (hatshop > 5) {
            hatshop = 0;
          }
          if (hatshop < 0) {
            hatshop = 5;
          }
          if (scene < 0) {
            scene = 4;
          }
          if (scene > 4) {
            scene = 0;
          }
          if (posit > 120) {
            posit = -120;
          }
          if (posit < -120) {
            posit = 120;
          }
          if (scene === 0) {
            background(66, 244, 137);
            fill(255, 255, 255);
            textFont(comicsans, 20);
            text("Dot Simulator", 50, 80);
          }
          if (scene === 1) {
            background(0, 0, 0);
            colorbrate(colordot);
            textFont(comicsans, 20);
            text(metres + "  Metres", 80 - (metres / 50), 80);
            ellipse(120 + posit, 120, 20, 20);
            noStroke();
            colorbrate(hatcolor);
            rect(115 + posit, 105, 10, 10, 2);
            ellipse(120 + posit, 112, 20, 5);
          }
          if (scene === 2) {
            background(255, 255, 255);
            fill(0, 255, 255);

            colorbrate(shopcolor);
            textFont(comicsans, 30);
            text('Colour Shop', 40, 40);
            textFont(comicsans, 20);
            text(metres + "  Metres", 70, 60);
            if (shopcolor !== colordot) {
              text((200 + (shopcolor * 30)) + "  Metres", 60, 80);
            }
            noStroke();
            ellipse(120, 120, 20, 20);
          }
          if (scene === 3) {
            background(255, 255, 255);
            fill(0, 255, 255);

            colorbrate(hatshop);
            textFont(comicsans, 30);
            text('Colour Hats', 40, 40);
            textFont(comicsans, 20);
            text(metres + "  Metres", 70, 60);
            if (hatshop !== hatcolor) {
              text((200 + (hatshop * 30)) + "  Metres", 60, 80);
            }
            noStroke();
            rect(115, 110, 10, 10, 2);
            ellipse(120, 120, 20, 10);
          }
          if (scene === 4) {
            background(0, 0, 0);
            colorbrate(colordot);
            ellipse(120, 120, (excercise / 10), (excercise / 10));
            fill(0, 255, 0);
            ellipse(120, 120, 10, 10);
            fill(255, 255, 255);
            textFont(comicsans, 30);
            text('Growth Check', 20, 40);
          }
        };
      }

      function game1() {
        var sunsize = 0;
        var score = 0;
        var count = 0;
        var sunscene = 0;
        $('.a').click(function() {
          if (sunscene === 0) {
            sunsize -= 10;
            score -= 1;
          }
        });
        $('.b').click(function() {
          if (sunscene === 0) {
            sunsize += 10;
            score += 2;
          }
        });
        background(0, 0, 0);
        draw = function() {
          noStroke();
          if (sunscene === 0) {
            sunsize += 1;
            sunsize+=random(-4,4);
            if (sunsize < 0) {
              sunsize = 0;
            }
            background(0, 0, 0);
            fill(25, 0, 0);
            ellipse(0, 0, 120, 120);
            fill(255, 155, 0);
            ellipse(0, 0, sunsize, sunsize);
            fill(0, 0, 255);
            ellipse(45, 45, 10, 10);
            score += 1;
            count += 1;
            if (sunsize > 120 || count === 600) {
              sunscene = 1;
            }
          }
          if (sunscene === 1) {
            background(0, 0, 0);
            fill(0, 255, 0);
            textFont(comicsans, 20);
            if (sunsize < 120) {
              text("You win", 70, 30);
            }
            if (sunsize > 119) {
              text("You lose", 70, 30);
              score = 0;
            }
            text("Score: " + score, 50, 80);
          }
        };

      }

      function game2() {
        draw = function() {
          //
          var kartscene = 0;
          var angle = 0;
          var speed = 0.1;
          var time = 0;
          var totaltime = 0;
          var enemyhealth = 100;
          var enemyangle = random(-30, 30);
          var score = 0;
          $('.left').click(function() {
            if (kartscene === 0) {
              angle += 10;
            }
          });
          $('.right').click(function() {
            if (kartscene === 0) {
              angle -= 10;
            }
          });
          $('.b').click(function() {
            if (kartscene === 0 & time > 50 & angle + 10 > enemyangle & angle - 10 < enemyangle) {
              enemyhealth -= 20;
              score -= 1;
              if (enemyhealth < 1) {
                time = -20;
                score += 20;
                enemyhealth = 100;
                enemyangle = random(-30, 30);
              }
            }
          });
          draw = function() {
            if (kartscene === 0) {
              time += 0.2 + (score / 1000);
              enemyangle += speed;
              if (enemyangle > 30) {
                speed = -0.07;
              }
              if (enemyangle < -30) {
                speed = 0.07;
              }
              background(80, 80, 255);
              strokeWeight(2);
              stroke(170, 170, 255);
              if (angle < -100) {
                angle = -100;
              }
              if (angle > 90) {
                angle = 90;
              }
              fill(100, 100, 100);
              //floor
              quad(0, 160, 96 + angle, 80, 150 + angle, 80, 240, 160);
              fill(80, 80, 255);
              //left
              quad(96 + angle, 80, 0, 160, 0, 0, 99 + angle, 40);
              //up
              quad(240, 0, 0, 0, 99 + angle, 40, 150 + angle, 40);
              fill(150, 150, 255);
              //right
              quad(151 + angle, 81, 240, 160, 240, 0, 150 + angle, 40);
              noStroke();
              fill(242, 0, 255);
              if (angle + 10 > enemyangle & angle - 10 < enemyangle & time > 50) {
                fill(255, 0, 0);
              }
              if (time > 0) {
                ellipse(120 + angle + enemyangle, 60 + (time), (time), (time));
              }
              fill(50, 50, 50);
              triangle(108, 140, 118, 130, 128, 140);
              fill(225, 0, 225);
              if (angle + 10 > enemyangle & angle - 10 < enemyangle) {
                fill(255, 0, 0);
              }
              strokeWeight(2);
              stroke(170, 170, 255);
              ellipse(120 + enemyangle - angle, 140, 10, 10);
              noStroke(0);
              fill(25, 25, 25);
              textFont(comicsans, 15);
              text('Every ball has a weak point', 20, 20);
              if (time > 80) {
                kartscene = 1;
              }
            }
            if (kartscene == 1) {
              background(0, 0, 0);
              fill(255, 0, 255);
              textFont(comicsans, 20);
              text("Score: " + score, 50, 80);
            }
          };

          //
        };
      }
      var option = 0;
      var apressed = 0;
      var anim = 0;
      var animspeed = 1;
      $('.up').click(function() {
        option += 1;
        apressed = 0;
      });
      $('.down').click(function() {
        option -= 1;
        apressed = 0;
      });
      $('.start').click(function() {
        option += 1;
        apressed = 0;
      });
      $('.select').click(function() {
        option -= 1;
        apressed = 0;
      });
      $('.left').click(function() {
        anim -= 10;
      });
      $('.right').click(function() {
        anim += 10;
      });
      $('.a').click(function() {
        apressed = 1;
      });
      draw = function() {
        anim += animspeed;
        if (anim > 120) {
          anim=120;
          animspeed = -1;
        }
        if (anim < 0) {
          anim=0;
          animspeed = 1;
        }
        noStroke();
        if (option < 0) {
          option = numberofgames;
        }
        if (option > numberofgames) {
          option = 0;
        }
        noStroke();
        background(0, 0, 0);
        fill(0, 255, 0);
        textFont(comicsans, 20);
        if (option === 0) {
          fill(0, 225, 0);
          text('Dot Simulator', 20, 80);
          ellipse(anim * 2, 120, 20, 20);
        }
        if (option === 1) {
          fill(225, 125, 0);
          text('Protect The Earth', 20, 80);
          ellipse(120, 120, anim, anim);
        }
        if (option === 2) {
          fill(125, 125, 125);
          text('3D Invaders', 20, 80);
          if (anim > 100) {
            fill(155, 0, 0);
          } else {
            fill(155, 0, 155);
          }
          ellipse(160, anim, 20, 20);
          fill(50, 50, 50);
          triangle(150, 130, 160, 120, 170, 130);
          if (anim > 100) {
            fill(155, 0, 0);
          } else {
            fill(155, 0, 155);
          }
          ellipse((anim / 10) + 160 - 6, 130, 10, 10);
        }
        if (option === 0 & apressed === 1) {
          game0();
        }
        if (option === 1 & apressed === 1) {
          game1();
        }
        if (option === 2 & apressed === 1) {
          game2();
        }
      };
    }
  };
  var canvas = document.getElementById("myMonitor");
  var processingInstance = new Processing(canvas, sketchProc);
}
reloadJS();