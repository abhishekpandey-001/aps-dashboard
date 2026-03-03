export const scanMeta = {
  scanType: "Grey Box",
  targets: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
  progress: 0,
  status: "In Progress",
  currentStep: "Spidering",
  steps: ["Spidering", "Mapping", "Testing", "Validating", "Reporting"],
};

export const activityLogs = [
  {
    id: 1,
    time: "09:00:00",
    message: "I'll begin a systematic penetration test on",
    highlight: "helpdesk.democorp.com",
    rest: ". Let me start with reconnaissance and enumeration.",
  },
  {
    id: 2,
    time: "09:01:00",
    message: "Good! Target is online. Now let me perform port scanning to identify running services.",
    highlight: null,
    rest: null,
  },
  {
    id: 3,
    time: "09:02:00",
    message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.",
    highlight: null,
    rest: null,
  },
  {
    id: 4,
    time: "09:03:00",
    message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment:",
    highlight: '"TODO: Delete the testing account (test:test)"',
    rest: ". Let me test this credential. The login redirects to",
    code: "/password/test",
    end: ". Let me follow that path and explore it.",
  },
  {
    id: 5,
    time: "09:04:00",
    message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to",
    highlight: "'#'",
    rest: " which means the current page. Let me try a different approach.",
  },
  {
    id: 6,
    time: "09:05:00",
    message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the",
    highlight: "test:test",
    rest: " password directly on other endpoints.",
  },
  {
    id: 7,
    time: "09:06:00",
    message: "Great! I can access the dashboard using the",
    highlight: "'X-UserId: 10032'",
    rest: " header. The dashboard shows 'Welcome, John Doe'. This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
  },
];

export const verificationLogs = [
  {
    id: 1,
    time: "09:10:00",
    message: "Running verification loop on",
    highlight: "/api/users/profile",
    rest: " — confirming SQL injection vector with time-based payload.",
  },
  {
    id: 2,
    time: "09:12:00",
    message: "Payload confirmed. Response delay of 5s detected on input",
    highlight: "' OR SLEEP(5)--",
    rest: ". Marking as verified Critical.",
  },
  {
    id: 3,
    time: "09:15:00",
    message: "Verifying IDOR on",
    highlight: "/api/users/10033",
    rest: " with low-privilege token. Access granted — confirmed.",
  },
];

export const findings = [
  {
    id: 1,
    severity: "Critical",
    time: "10:45:23",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    id: 2,
    severity: "High",
    time: "10:45:23",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    id: 3,
    severity: "Medium",
    time: "10:45:23",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
  {
    id: 4,
    severity: "Low",
    time: "10:46:10",
    title: "Verbose Error Messages Exposed",
    endpoint: "/api/debug/info",
    description:
      "Server returns stack traces on malformed requests, leaking internal framework and version details.",
  },
];

export const statusBar = {
  subAgents: 0,
  parallelExecutions: 2,
  operations: 1,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
};