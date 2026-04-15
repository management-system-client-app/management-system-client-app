// src/pages/user_Dahsboard/Layouts/footer.tsx
export const Footer = () => {
  return (
    <div className="bg-[#071c2b] text-white px-6 py-4 flex items-center justify-between">
      
      <p className="text-sm text-gray-300">
        Made with ❤️ by Themesflat - Powered by Theme
      </p>

      <div className="flex items-center gap-6 text-sm text-gray-300">
        <span className="cursor-pointer hover:text-[#4da528]">Privacy & Policy</span>
        <span className="cursor-pointer hover:text-[#4da528]">Licensing</span>
        <span className="cursor-pointer hover:text-[#4da528]">Instructions</span>
      </div>
    </div>
  );
};