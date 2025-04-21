"use client";

import Image from "next/image";
import contact from "../../public/contact.png";
import FormModal from "./FormModal";
import { useState } from "react";

export default function ContactButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        <Image
          src={contact}
          alt="Contact"
          className="w-full md:w-full h-20 md:h-30 mx-auto border-4 border-blue-300 rounded-xl mt-8 p-2"
        />
      </button>

      <FormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
