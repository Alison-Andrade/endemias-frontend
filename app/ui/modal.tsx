"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center" style={{touchAction: 'manipulation'}}>
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:cursor-pointer"
          onClick={onClose}
        >x</button>
        {children}
      </div>
    </div>
  );
}
