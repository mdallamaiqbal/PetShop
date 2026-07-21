"use client";

import React, { useState } from 'react';
import { Button, Modal } from "@heroui/react";
import { deletePetData } from "@/lib/actions/pets";

export default function DeletePetModal({ petId, isOpen, onClose, onDeleted }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteConfirm = async () => {
        if (!petId) return;
        setIsDeleting(true);
        try {
            const data = await deletePetData(petId);
            if (data?.success) {
                onDeleted(petId);
                onClose();
            } else {
                alert("Failed to delete pet");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("Something went wrong");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onClose}>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px] p-6 bg-white rounded-xl shadow-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="text-lg font-bold text-slate-800">Confirm Deletion</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="text-sm text-slate-600 my-2">
                                Are you sure you want to delete this pet? This action cannot be undone.
                            </p>
                        </Modal.Body>
                        <Modal.Footer className="flex justify-end gap-3 mt-4">
                            <Button variant="secondary" onClick={onClose} className="px-4 py-2 border rounded-lg">
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteConfirm} disabled={isDeleting} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400">
                                {isDeleting ? "Deleting..." : "Delete"}
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}