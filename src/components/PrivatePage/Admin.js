import React, { useCallback, useState } from "react";
import { adminManageOptions } from "../../ultils/const/navigation-option";
import UserManage from "./Admin/UserManage/UserManage";
import QuizManage from "./Admin/QuizManage/QuizManage";
import "../../resources/scss/admin/admin.scss";
import ModalContainer from "../ModalContainer/ModalContainer";

const settingTabs = [
  {
    id: adminManageOptions.QUESTION,
    title: adminManageOptions.QUESTION,
  },
  {
    id: adminManageOptions.USER,
    title: adminManageOptions.USER,
  },
];

function Admin() {
  const [currentTab, setCurrentTab] = useState(adminManageOptions.QUESTION);

  const renderMainBody = useCallback(() => {
    switch (currentTab) {
      case adminManageOptions.USER:
        return <UserManage />;
      case adminManageOptions.QUESTION:
        return <QuizManage />;

      default:
        return null;
    }
  }, [currentTab]);

  const onTabChange = useCallback(
    (tab) => {
      setCurrentTab(tab);
    },
    [setCurrentTab]
  );

  return (
    <React.Fragment>
      <div className="main-admin-manage">
        <nav className="menu-user-manage">
          {settingTabs.map((setting, key) => (
            <div
              className={`setting-type ${
                setting.id === currentTab ? "selected" : ""
              }`}
              key={key}
              onClick={() => onTabChange(setting.id)}
            >
              {setting.title}
            </div>
          ))}
        </nav>
        {renderMainBody()}
      </div>
      <ModalContainer />
    </React.Fragment>
  );
}

export default Admin;
