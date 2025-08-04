// src/components/ResumeButton.jsx

import { Download } from 'lucide-react';

const ResumeButton = () => (
  <a
    href="/newResume.pdf"
    download
    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
  >
    <Download className="w-4 h-4 mr-2" />
    Resume
  </a>
);

export default ResumeButton;
