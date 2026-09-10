/**
 * Shared Firebase configuration for ZENVNEX.
 * Edit the project's Firebase settings in this ONE file only —
 * every page loads this instead of repeating the config block.
 *
 * NOTE: an apiKey in a Firebase *web* config is not a secret by itself
 * (Google's own docs confirm this) — real access control lives in
 * Firestore Security Rules (see /firestore.rules) and Firebase Auth,
 * not in hiding this value.
 */
const firebaseConfig = {
  apiKey: "AIzaSyAZD-W1lwdu6bI71T9FW8cIz--7qlVQC-4",
  authDomain: "zenvnex.firebaseapp.com",
  projectId: "zenvnex",
  storageBucket: "zenvnex.firebasestorage.app",
  messagingSenderId: "145639804249",
  appId: "1:145639804249:web:d8d216db1c713986aad048",
  measurementId: "G-B554BNES3M"
};
