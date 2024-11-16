"use client"
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";

 const SetupPage = () =>{
  return (
    <div>
      <Modal title="tes" description="tes deskripsi" isOpen onClose={()=>{}}>
        children
      </Modal>
    </div>
  );
}

export default SetupPage;
