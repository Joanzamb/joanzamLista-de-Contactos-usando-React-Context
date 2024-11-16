import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const { actions } = useContext(Context); // Accede a las acciones desde el contexto global
    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" }); // Estado inicial para el formulario
    const navigate = useNavigate(); // Para navegar a otras rutas después de guardar

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones para asegurar que todos los campos están completos
        if (!contact.name || !contact.email || !contact.phone || !contact.address) {
            alert("All fields are required");
            return;
        }

        try {
            await actions.addContact(contact); // Llama a la acción para agregar un contacto
            navigate("/contacts"); // Navega a la lista de contactos
        } catch (error) {
            console.error("Error adding contact:", error);
            alert("Failed to add contact. Please try again.");
        }
    };

    return (
        <div className="container">
            <h1>Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        placeholder="Enter full name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        placeholder="Enter email address"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        placeholder="Enter phone number"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.address}
                        onChange={(e) => setContact({ ...contact, address: e.target.value })}
                        placeholder="Enter address"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};
