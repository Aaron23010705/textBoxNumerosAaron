import React from 'react';

function Aaron({ nombre, edad, especialidad, dirección, fechaNacimiento, código }) {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Información del Estudiante</h1>
            <p style={styles.info}>
                <strong>Nombre:</strong> {nombre}
                <br />
                <strong>Edad:</strong> {edad}
                <br />
                <strong>Especialidad:</strong> {especialidad}
                <br />
                <strong>Dirección:</strong> {dirección}
                <br />
                <strong>Fecha de Nacimiento:</strong> {fechaNacimiento}
                <br />
                <strong>Código:</strong> {código}
            </p>
        </div>
    );
}

const styles = {
    container: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        color: '#111',
    },
    info: {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#555',
    },
};

export default Aaron;