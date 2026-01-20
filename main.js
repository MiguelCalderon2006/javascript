// JavaScript Learning Environment
const output = document.getElementById('output');
output.innerHTML = '';

// Override console.log to show on page
const originalLog = console.log;
console.log = function(...args) {
  originalLog.apply(console, args);
  
  // Reset previous logs to blue
  const allLogs = output.querySelectorAll('div');
  allLogs.forEach(log => {
    log.style.color = '#4a9eff';
    log.style.backgroundColor = '#1a1a1a';
    log.style.border = '1px solid #404040';
    log.style.borderLeft = '3px solid #4a9eff';
  });
  
  // Create new log entry
  const logEntry = document.createElement('div');
  logEntry.textContent = args.join(' ');
  logEntry.style.padding = '8px 12px';
  logEntry.style.marginBottom = '10px';
  logEntry.style.borderRadius = '4px';
  logEntry.style.color = '#ff6b6b'; // Red for newest
  logEntry.style.backgroundColor = '#2a1a1a';
  logEntry.style.border = '1px solid #ff5252';
  logEntry.style.borderLeft = '3px solid #ff5252';
  
  // Insert at top
  output.prepend(logEntry);
  
  // Auto-scroll to top to show newest log
  output.scrollTop = 0;
};






console.log("----------------Numbers----------------");
let myName = "variable";
console.log(myName.length);
console.log(myName.charAt(1));
console.log(myName.indexOf("a"));
console.log(myName.lastIndexOf("bl"));
console.log(myName.slice(0, 3));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.includes("variable"));
console.log(myName.split("r"));
console.log(myName.replace("variable", "variable2"));

console.log("----------------Numbers----------------");
let num = 10;
console.log(num)
console.log(Number.isInteger(num));
console.log(num.toFixed(3))
console.log(Number.parseInt(num))
console.log(typeof num)
console.log(num.toString())
console.log(Number.isNAN("dh"))

console.log("----------------Math Methods----------------");



