function swap(el1, el2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // For waiting for .25 sec
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 200);
    });
  });
}

const container = document.querySelector(".data-container");

// Function to generate bars
function generatebars(num = 20) {
  //For loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;

    // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar");

    // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

// Asynchronous function to perform "Bubble Sort"
async function BubbleSort(delay = 100) {
  let bars = document.querySelectorAll(".bar");

  for (var i = 0; i < bars.length - 1; i++) {
    for (var j = 0; j < bars.length - i - 1; j++) {
      bars[j].style.backgroundColor = "#FF4949";
      bars[j + 1].style.backgroundColor = "#FF4949";

      if (
        parseInt(bars[j].childNodes[0].innerHTML) >
        parseInt(bars[j + 1].childNodes[0].innerHTML)
      ) {
        await swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".bar");
      }
      bars[j].style.backgroundColor = "#001529";
      bars[j + 1].style.backgroundColor = "#001529";
    }

    bars[bars.length - i - 1].style.backgroundColor = "#13CE66";
  }

  // To enable the button
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  /*   document.getElementById("Button1").style.backgroundColor = "#6f459e"; */

  // To enable the button
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button3").disabled = false;
  /*   document.getElementById("Button2").style.backgroundColor = "#6f459e"; */
}
// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 100) {
  let bars = document.querySelectorAll(".bar");

  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";

  for (var i = 1; i < bars.length; i++) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;

    // For selecting section having id "ele"
    var barval = document.getElementById("ele");

    // For dynamically Updating the selected element
    barval.innerHTML = `<h3>Element Selected is :${key}</h3>`;

    //Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " #23049d";
      }
    }

    // Placing the selected element to its correct position

    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    );

    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  barval.innerHTML = "<h3>Sorted!!!</h3>";

  // To enable the button
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  /*   document.getElementById("Button1").style.backgroundColor = "#6f459e"; */

  // To enable the button
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  /*   document.getElementById("Button2").style.backgroundColor = "#6f459e"; */
}

// Asynchronous function to perform "SelectionSort"
async function SelectionSort(delay = 100) {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    // Assign i to min_idx
    min_idx = i;

    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
      }
    }

    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  /*     document.getElementById("Button1").style.backgroundColor = "#6f459e"; */

  // To enable the button "Selection Sort" after final(sorted)
  document.getElementById("Button4").disabled = false;
  /*     document.getElementById("Button2").style.backgroundColor = "#6f459e"; */
}

// Asynchronous function to perform "Quick Sort"
async function hoare_partition(l, r, delay = 100) {
  var bars = document.querySelectorAll(".bar");
  var pivot = Number(bars[l].childNodes[0].innerHTML);

  var i = l - 1;
  var j = r + 1;

  while (true) {
    // Find leftmost element greater than
    // or equal to pivot
    do {
      i++;
      if (i - 1 >= l) bars[i - 1].style.backgroundColor = "red";
      bars[i].style.backgroundColor = "yellow";
      //To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
    } while (Number(bars[i].childNodes[0].innerHTML) < pivot);

    // Find rightmost element smaller than
    // or equal to pivot
    do {
      j--;
      if (j + 1 <= r) bars[j + 1].style.backgroundColor = "green";
      bars[j].style.backgroundColor = "yellow";
      //To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
    } while (Number(bars[j].childNodes[0].innerHTML) > pivot);

    // If two pointers met.
    if (i >= j) {
      for (var k = 0; k < 20; k++) bars[k].style.backgroundColor = "#6b5b95";
      return j;
    }

    //swapping ith and jth element
    var temp1 = bars[i].style.height;
    var temp2 = bars[i].childNodes[0].innerText;
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = temp1;
    bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
    bars[j].childNodes[0].innerText = temp2;
    //To wait for 700 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
  }
}

// Asynchronous QuickSort function
async function QuickSort(l, r, delay = 100) {
  // QuickSort Algorithm
  if (l < r) {
    //Storing the index of pivot element after partition
    var pivot_idx = await hoare_partition(l, r);
    //Recursively calling quicksort for left partition
    await QuickSort(l, pivot_idx);
    //Recursively calling quicksort for right partition
    await QuickSort(pivot_idx + 1, r);
  }
}

// Asynchronous QuickSort run function
async function QuickSortRun(l, r, delay = 100) {
  var bars = document.querySelectorAll(".bar");
  QuickSort(0, 19);
}

// Call "generatebars()" function
generatebars();

// Function to generate new random array
function generate() {
  window.location.reload();
}

// Function to disable the button
function disable() {
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button4").disabled = true;
  document.getElementById("Button5").disabled = true;
}
