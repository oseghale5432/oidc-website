'use client';

import { useState, useEffect } from 'react';

export default function OfficeStatus() {
  const [status, setStatus] = useState<{ open: boolean; message: string }>({
    open: false,
    message: 'Loading status...',
  });

  useEffect(() => {
    const checkStatus = () => {
      // Get current date/time in Lagos (UTC+1)
      const now = new Date();
      
      // Target timezone offset for Lagos is UTC+1.
      // We can get UTC time and add 1 hour.
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const lagosTime = new Date(utcTime + 3600000);
      
      const day = lagosTime.getDay(); // 0 is Sunday, 6 is Saturday
      const hour = lagosTime.getHours();
      const minute = lagosTime.getMinutes();
      const decimalTime = hour + minute / 60;

      let isOpen = false;
      let message = 'Closed';

      if (day >= 1 && day <= 5) {
        // Mon-Fri: 9:00 AM - 5:00 PM
        if (decimalTime >= 9 && decimalTime < 17) {
          isOpen = true;
          message = 'Open Now';
        } else {
          message = 'Closed (Opens Mon-Fri 9am-5pm)';
        }
      } else if (day === 6) {
        // Sat: 10:00 AM - 2:00 PM
        if (decimalTime >= 10 && decimalTime < 14) {
          isOpen = true;
          message = 'Open Now';
        } else {
          message = 'Closed (Opens Sat 10am-2pm)';
        }
      } else {
        // Sun: Closed
        message = 'Closed (Opens Monday 9am)';
      }

      setStatus({ open: isOpen, message });
    };

    checkStatus();
    // Update status every minute
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-900/40 backdrop-blur-sm border border-white/10 transition-all duration-300">
      <span className="relative flex h-2.5 w-2.5">
        {status.open ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </>
        ) : (
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        )}
      </span>
      <span className="text-gray-200 tracking-wide font-medium">{status.message}</span>
    </div>
  );
}
