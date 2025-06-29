// import React from 'react';
// import { GraduationCap, Heart } from 'lucide-react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 flex flex-col">
//       <Navbar />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-6 relative">
//           {/* Background Decorative Elements */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full -translate-y-32 translate-x-32 pointer-events-none blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-success-100/30 to-warning-100/30 rounded-full translate-y-24 -translate-x-24 pointer-events-none blur-2xl"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-accent-100/20 to-primary-100/20 rounded-full pointer-events-none blur-xl"></div>
//           {/* Content */}
//           <div className="relative z-10">
//             {children}
//           </div>
//         </main>
//       </div>
//       {/* Footer */}
//       <footer className="bg-white/80 backdrop-blur-md border-t border-neutral-200/50 mt-12 shadow-soft">
//         <div className="container-custom py-6">
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-2 mb-3">
//               <div className="bg-gradient-primary p-1.5 rounded-lg shadow-soft">
//                 <GraduationCap className="w-4 h-4 text-white" />
//               </div>
//               <p className="text-sm text-neutral-700">
//                 Powered by <strong className="text-gradient">Lifebox NextGen Pvt Ltd</strong>
//               </p>
//               <Heart className="w-4 h-4 text-error-500 animate-pulse-gentle" />
//             </div>
//             <div className="flex justify-center gap-6 text-sm">
//               <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:underline">
//                 Privacy Policy
//               </a>
//               <span className="text-neutral-400">•</span>
//               <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:underline">
//                 Terms of Service
//               </a>
//               <span className="text-neutral-400">•</span>
//               <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:underline">
//                 Contact Support
//               </a>
//             </div>
//             <div className="mt-3 text-xs text-neutral-500">
//               © 2024 Oxford College. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from 'react';
import { GraduationCap, Heart, Menu } from 'lucide-react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ScrollToTop from '../ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20">
      <ScrollToTop />

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[--nav-h] z-50">
        <Navbar onMenuClick={() => setDrawerOpen(true)} />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Layout */}
      <div className="flex">
        {/* Main content with responsive left margin (md: sidebar visible) */}
        <div className="flex-1 pt-[--nav-h] md:ml-64 transition-all duration-300">
          <main className="p-6 relative">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full -translate-y-32 translate-x-32 pointer-events-none blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-success-100/30 to-warning-100/30 rounded-full translate-y-24 -translate-x-24 pointer-events-none blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-accent-100/20 to-primary-100/20 rounded-full pointer-events-none blur-xl"></div>

            {/* Actual Content */}
            <div className="relative z-10">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white/80 backdrop-blur-md border-t border-neutral-200/50 mt-12 shadow-soft">
            <div className="container-custom py-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="bg-gradient-primary p-1.5 rounded-lg shadow-soft">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-neutral-700">
                    Powered by <strong className="text-gradient">Lifebox NextGen Pvt Ltd</strong>
                  </p>
                  <Heart className="w-4 h-4 text-error-500 animate-pulse-gentle" />
                </div>
                <div className="flex justify-center gap-6 text-sm">
                  <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:underline">
                    Privacy Policy
                  </a>
                  <span className="text-neutral-400">•</span>
                  <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:underline">
                    Terms of Service
                  </a>
                  <span className="text-neutral-400">•</span>
                  <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:underline">
                    Contact Support
                  </a>
                </div>
                <div className="mt-3 text-xs text-neutral-500">
                  © 2024 Oxford College. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
