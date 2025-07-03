import React, { useState } from 'react';
import { LayoutHeader } from './components/LayoutHeader';
import { BitacoraMain } from './components/BitacoraMain';
import { FallecidosMain } from './components/FallecidosMain';
import { FuncionariosLesionadosMain } from './components/FuncionariosLesionadosMain';
import { IndemnizacionesMain } from './components/IndemnizacionesMain';

export default function App() {
  const [patients, setPatients] = useState([]);
  const [fallecidos, setFallecidos] = useState([]);
  const [funcionariosLesionados, setFuncionariosLesionados] = useState([]);
  const [indemnizaciones, setIndemnizaciones] = useState([]);
  const [activeTab, setActiveTab] = useState('bitacora');

  const addPatient = (newPatient) => {
    setPatients(prevPatients => [...prevPatients, newPatient]);
  };

  const deletePatient = (id) => {
    setPatients(prevPatients => prevPatients.filter(patient => patient.id !== id));
  };

  const updatePatientStatus = (id, newStatus, dischargeInfo = {}) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === id ? { ...patient, status: newStatus, ...dischargeInfo } : patient
      )
    );
  };

  const updatePatient = (updatedPatient) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  const addFallecido = (newFallecido) => {
    setFallecidos(prevFallecidos => [...prevFallecidos, newFallecido]);
  };

  const onDeleteFallecido = (id) => {
    setFallecidos(prevFallecidos => prevFallecidos.filter(fallecido => fallecido.id !== id));
  };

  const addFuncionarioLesionado = (newFuncionario) => {
    setFuncionariosLesionados(prev => [...prev, newFuncionario]);
  };

  const onDeleteFuncionarioLesionado = (id) => {
    setFuncionariosLesionados(prev => prev.filter(f => f.id !== id));
  };

  const addIndemnizacion = (newIndemnizacion) => {
    setIndemnizaciones(prev => [...prev, newIndemnizacion]);
  };

  const onDeleteIndemnizacion = (id) => {
    setIndemnizaciones(prev => prev.filter(i => i.id !== id));
  };

  const updateIndemnizacion = (updatedIndemnizacion) => {
    setIndemnizaciones(prev =>
      prev.map(i =>
        i.id === updatedIndemnizacion.id ? updatedIndemnizacion : i
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <LayoutHeader onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        {activeTab === 'bitacora' && (
          <BitacoraMain
            patients={patients}
            onAddPatient={addPatient}
            onDeletePatient={deletePatient}
            onUpdatePatientStatus={updatePatientStatus}
            onUpdatePatient={updatePatient}
          />
        )}
        {activeTab === 'funcionarios' && (
          <FuncionariosLesionadosMain
            patients={patients}
            funcionariosLesionados={funcionariosLesionados}
            onAddFuncionarioLesionado={addFuncionarioLesionado}
            onDeleteFuncionarioLesionado={onDeleteFuncionarioLesionado}
          />
        )}
        {activeTab === 'fallecidos' && (
          <FallecidosMain
            fallecidos={fallecidos}
            onAddFallecido={addFallecido}
            onDeleteFallecido={onDeleteFallecido}
          />
        )}
        {activeTab === 'indemnizaciones' && (
          <IndemnizacionesMain
            indemnizaciones={indemnizaciones}
            onAddIndemnizacion={addIndemnizacion}
            onDeleteIndemnizacion={onDeleteIndemnizacion}
            onUpdateIndemnizacion={updateIndemnizacion}
          />
        )}
      </main>
    </div>
  );
}
// DONE