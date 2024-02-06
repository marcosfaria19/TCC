// UserManagement.jsx

import UserTable from "../components/template/UserTable";

const UserManagement = () => {
  return (
    <div className="mt-4">
      <h3 className="text-center">Usuários Cadastrados</h3>

      {/* Tabela de animais */}
      <UserTable />
    </div>
  );
};

export default UserManagement;
