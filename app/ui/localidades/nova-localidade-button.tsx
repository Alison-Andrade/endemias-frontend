"use client";

import { useState } from "react";
import Modal from "../modal";
import FormLocalidade from "./form-localidade";

export default function NovaLocalidadeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="p-3 rounded-md bg-blue-600 active:bg-blue-800"
        style={{ touchAction: 'manipulation' }}
      >
        Nova Localidade +
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Cadastrar Nova Localidade
          </h2>
          <FormLocalidade />
      </Modal>
    </>
  );
}
