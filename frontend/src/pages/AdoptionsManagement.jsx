// UserManagement.jsx

import AdoptionRequestTable from "../components/template/AdoptionRequestTable";

const AdoptionsManagement = () => {
  return (
    <div className="mt-4">
      <h3 className="text-center">Solicitações de Adoção</h3>

      {/* Tabela de animais */}
      <AdoptionRequestTable />
    </div>
  );
};

export default AdoptionsManagement;
