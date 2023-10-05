import "./scss/style.scss";

import * as bootstrap from "bootstrap";

//Point d'entré de votre javascript


function planetequitourne(){
  var turnEarth = gsap.timeline({
      scrollTrigger:{
        trigger: ".headercustom",
        scrub:0.2,
        end:'+=10000',
      }
    })
    .to('#earth', {
      rotation:-360*2,
      duration:1, ease:'none',
    })
}
  
planetequitourne();


function rocketFloat() {
  
  const rocket = document.querySelector("#rocket");

  const randomX = random(10, 20);
  const randomY = random(25, 30);
  const randomDelay = random(0, 1);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(85, 95);

  TweenLite.set(rocket, {
    x: randomX(1),
    y: randomX(1),
    rotation: randomAngle(1)
  });

  moveX(rocket, 1);
  moveY(rocket, -1);
  rotate(rocket, 1);

  function rotate(target, direction) {
    
    TweenLite.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * 1]
    });
  }

  function moveX(target, direction) {
    
    TweenLite.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveY(target, direction) {
    
    TweenLite.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }
}

rocketFloat();

function vesselFloat() {
  
  const vessel = document.querySelector("#vessel");

  const randomX = random(10, 20);
  const randomY = random(25, 30);
  const randomDelay = random(0, 1);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(-5, 5);

  TweenLite.set(vessel, {
    x: randomX(1),
    y: randomX(1),
  });

  moveX(vessel, 1);
  moveY(vessel, -1);

  function moveX(target, direction) {
    
    TweenLite.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveY(target, direction) {
    
    TweenLite.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }

}

vesselFloat();

//  ----------

const cursor = document.querySelector("#cursor");
const cursorPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;
  
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


document.querySelectorAll("a").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (!item.classList.contains("list-group-item")) {
      cursor.style.visibility = "initial";
      cursor.style.backgroundColor = "#000";
      cursor.style.opacity = "0.5";
      cursor.style.width = "5rem";
      cursor.style.height = "5rem";
      cursor.style.top = "-40px";
      cursor.style.left = "-40px";
    } else {
      cursor.style.visibility = "initial";
      cursor.style.backgroundColor = "#000";
      cursor.style.opacity = "0.5";
      cursor.style.width = "2.5rem";
      cursor.style.height = "2.5rem";
      cursor.style.top = "-20px";
      cursor.style.left = "-20px";
    }
  });
  item.addEventListener("mouseout", (e) => {
      cursor.style.visibility = "initial";
      cursor.style.backgroundColor = "unset";
      cursor.style.mixBlendMode = "unset";
      cursor.style.width = "1.325rem";
      cursor.style.height = "1.325rem";
      cursor.style.top = "-10px";
      cursor.style.left = "-10px";
      cursor.style.opacity = "1";
  });
});