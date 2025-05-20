const quizData = [
  {
    question: "What is the core component of the Linux operating system?",
    options: ["Shell", "Kernel", "Desktop Environment", "File System"],
    answer: "Kernel"
  },
  {
    question: "Which of the following is NOT a characteristic of Linux?",
    options: ["Open-source", "Multi-user capability", "Proprietary licensing", "Command-line interface"],
    answer: "Proprietary licensing"
  },
  {
    question: "Which Linux distribution is based on Red Hat Enterprise Linux?",
    options: ["Ubuntu", "Debian", "CentOS", "Arch Linux"],
    answer: "CentOS"
  },
  {
    question: "What is the minimum recommended RAM for basic Linux desktop usage?",
    options: ["256 MB", "512 MB", "1-2 GB", "8 GB"],
    answer: "1-2 GB"
  },
  {
    question: "Which component provides the command-line interface in Linux?",
    options: ["Kernel", "Shell", "File System", "Desktop Environment"],
    answer: "Shell"
  },
  {
    question: "Which of the following is NOT a component of Linux architecture?",
    options: ["Kernel", "System Libraries", "Registry", "Shell"],
    answer: "Registry"
  },
  {
    question: "What does the Virtual File System (VFS) in Linux do?",
    options: ["Creates virtual hard drives", "Provides a common interface for different file systems", "Encrypts file system data", "Compresses files automatically"],
    answer: "Provides a common interface for different file systems"
  },
  {
    question: "Which of the following is a popular desktop environment in Linux?",
    options: ["Command Prompt", "PowerShell", "GNOME", "Explorer"],
    answer: "GNOME"
  },
  {
    question: "What is the role of system calls in Linux?",
    options: ["To call other users on the system", "To allow user-level programs to interact with the kernel", "To call external systems over the network", "To call system administrators for help"],
    answer: "To allow user-level programs to interact with the kernel"
  },
  {
    question: "Which component manages the display hardware in Linux?",
    options: ["Kernel", "Shell", "Graphical Server", "System Libraries"],
    answer: "Graphical Server"
  },
  {
    question: "Which directory contains essential user binaries in Linux?",
    options: ["/usr", "/bin", "/sbin", "/opt"],
    answer: "/bin"
  },
  {
    question: "What does the permission \"rwxr-xr--\" represent?",
    options: ["Read, write, execute for owner; read, execute for group; no permissions for others", "Read, write, execute for owner; read, execute for group; read for others", "Read, write, execute for owner; read, execute for group; read, write for others", "Read, write for owner; read, execute for group; read for others"],
    answer: "Read, write, execute for owner; read, execute for group; no permissions for others"
  },
  {
    question: "Which command is used to change file permissions in Linux?",
    options: ["chperm", "chmod", "chown", "chgrp"],
    answer: "chmod"
  },
  {
    question: "What is the numeric representation of \"rwxr-x---\" permission?",
    options: ["777", "750", "755", "700"],
    answer: "750"
  },
  {
    question: "Which directory contains user home directories in Linux?",
    options: ["/root", "/home", "/usr", "/users"],
    answer: "/home"
  },
  {
    question: "Which command is used to display the current working directory?",
    options: ["cd", "pwd", "ls", "dir"],
    answer: "pwd"
  },
  {
    question: "What does the command \"ls -la\" do?",
    options: ["Lists all files including hidden files in long format", "Lists only directory names", "Lists files sorted by size", "Lists files with line numbers"],
    answer: "Lists all files including hidden files in long format"
  },
  {
    question: "Which command is used to search for a pattern in files?",
    options: ["find", "locate", "grep", "search"],
    answer: "grep"
  },
  {
    question: "What does the \"touch\" command do?",
    options: ["Tests if a file exists", "Creates an empty file or updates timestamp of existing file", "Moves a file to another location", "Checks if a file is touchable (has write permissions)"],
    answer: "Creates an empty file or updates timestamp of existing file"
  },
  {
    question: "Which command is used to display the first 10 lines of a file?",
    options: ["cat", "head", "top", "start"],
    answer: "head"
  },
  {
    question: "Which command shows a dynamic real-time view of running processes?",
    options: ["ps", "top", "proc", "ls"],
    answer: "top"
  },
  {
    question: "What signal does \"kill -9\" send to a process?",
    options: ["SIGTERM", "SIGKILL", "SIGHUP", "SIGSTOP"],
    answer: "SIGKILL"
  },
  {
    question: "What is a zombie process in Linux?",
    options: ["A process that consumes excessive resources", "A process that has terminated but its entry remains in the process table", "A process that runs in the background", "A process that infects other processes"],
    answer: "A process that has terminated but its entry remains in the process table"
  },
  {
    question: "Which command is used to change the priority of a running process?",
    options: ["nice", "renice", "priority", "pr"],
    answer: "renice"
  },
  {
    question: "What does the \"&\" symbol do when placed at the end of a command?",
    options: ["Combines multiple commands", "Runs the command in the background", "Runs the command with higher priority", "Runs the command as root"],
    answer: "Runs the command in the background"
  },
  {
    question: "Which command is used to create a new user in Linux?",
    options: ["newuser", "adduser", "useradd", "createuser"],
    answer: "useradd"
  },
  {
    question: "Where is user password information stored in Linux?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/users", "/etc/security"],
    answer: "/etc/shadow"
  },
  {
    question: "Which command changes the owner of a file?",
    options: ["chown", "chmod", "chuser", "chgrp"],
    answer: "chown"
  },
  {
    question: "What is the purpose of the \"sudo\" command?",
    options: ["To switch between users", "To execute commands as another user, typically the superuser", "To create a new user", "To delete a user"],
    answer: "To execute commands as another user, typically the superuser"
  },
  {
    question: "Which file contains group information in Linux?",
    options: ["/etc/group", "/etc/groups", "/etc/passwd", "/etc/shadow"],
    answer: "/etc/group"
  },
  {
    question: "What is the correct shebang line for a Bash script?",
    options: ["#/bin/bash", "#!/bin/bash", "#bash", "//bin/bash"],
    answer: "#!/bin/bash"
  },
  {
    question: "How do you assign a value to a variable in a shell script?",
    options: ["var = value", "var := value", "var=value", "set var = value"],
    answer: "var=value"
  },
  {
    question: "How do you access the value of a variable named \"count\" in a shell script?",
    options: ["count", "{count}", "$count", "%count%"],
    answer: "$count"
  },
  {
    question: "Which loop structure is used to execute commands until a condition becomes true?",
    options: ["for loop", "while loop", "until loop", "do loop"],
    answer: "until loop"
  },
  {
    question: "What does the \"$?\" variable contain in a shell script?",
    options: ["The script name", "The number of arguments", "The exit status of the last command", "The current user"],
    answer: "The exit status of the last command"
  },
  {
    question: "What does GCC stand for?",
    options: ["General Computer Compiler", "GNU Compiler Collection", "General Code Compiler", "GNU C Compiler"],
    answer: "GNU Compiler Collection"
  },
  {
    question: "Which option in GCC is used to generate debugging information?",
    options: ["-d", "-debug", "-g", "-db"],
    answer: "-g"
  },
  {
    question: "Which of the following is NOT a stage in the GCC compilation process?",
    options: ["Preprocessing", "Compilation", "Interpretation", "Linking"],
    answer: "Interpretation"
  },
  {
    question: "What file extension is used for static libraries in Linux?",
    options: [".so", ".a", ".lib", ".dll"],
    answer: ".a"
  },
  {
    question: "Which GCC option is used to specify the output file name?",
    options: ["-o", "-out", "-f", "-name"],
    answer: "-o"
  },
  {
    question: "Which command is used to display network interface configuration?",
    options: ["netstat", "ifconfig", "ipconfig", "network"],
    answer: "ifconfig"
  },
  {
    question: "What is the purpose of the /etc/hosts file?",
    options: ["To store user passwords", "To map hostnames to IP addresses", "To configure network interfaces", "To store network logs"],
    answer: "To map hostnames to IP addresses"
  },
  {
    question: "Which command is used to test network connectivity to another host?",
    options: ["connect", "ping", "trace", "nettest"],
    answer: "ping"
  },
  {
    question: "What protocol is used for secure remote login in Linux?",
    options: ["Telnet", "FTP", "SSH", "HTTP"],
    answer: "SSH"
  },
  {
    question: "Which file contains DNS server information in Linux?",
    options: ["/etc/dns", "/etc/resolv.conf", "/etc/hosts", "/etc/networks"],
    answer: "/etc/resolv.conf"
  },
  {
    question: "Which command is used to check disk usage in Linux?",
    options: ["disk", "du", "df", "memory"],
    answer: "df"
  },
  {
    question: "What is the purpose of the cron service in Linux?",
    options: ["To manage user accounts", "To schedule tasks to run at specific times", "To monitor system performance", "To manage network connections"],
    answer: "To schedule tasks to run at specific times"
  },
  {
    question: "Which command is used to shut down the system immediately?",
    options: ["shutdown -h now", "halt", "poweroff", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which directory contains system log files in Linux?",
    options: ["/log", "/var/log", "/etc/log", "/usr/log"],
    answer: "/var/log"
  },
  {
    question: "What is the purpose of the \"sudo apt update\" command?",
    options: ["Updates the system time", "Updates the package lists", "Updates all installed packages", "Updates the kernel"],
    answer: "Updates the package lists"
  }
];


let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${current.question}`;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(btn, current.answer));
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

function selectAnswer(selectedBtn, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("incorrect");
    }
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
  } else {
    // Haptic feedback for wrong answer
    if (navigator.vibrate) {
      navigator.vibrate(200); // vibrates for 200ms
    }
  }

  nextBtn.disabled = false;
}


nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = score;
}

// Initialize quiz
loadQuestion();
