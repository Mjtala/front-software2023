import React, { useState, useEffect } from 'react';
import './AdminHomePage.css';
import { useNavigate } from 'react-router-dom';
import PlayerInformation from '../../components/ViewAdmin/PlayerInformation'
import CompanyInformation from '../../components/ViewAdmin/CompanyInformation'
import FieldInformation from '../../components/ViewAdmin/FieldInformation'
import { useLocalStorage } from 'usehooks-ts'


export default function AdminHomePage() {
  const navigate = useNavigate();
  console.log(navigate)


  const [InformationPlayers, setIsOpenInformationPlayers] = useState(true);
  const [InformationCompany, setIsOpenInformationCompany] = useState(false);
  const [InformationFields, setIsOpenInformationFields] = useState(false);
  const [connected] = useLocalStorage("Connected", false);
  const [userConnectedData] = useLocalStorage("UserInfo", null);

  const getData = async () => {

  }

  useEffect(() => {
      if (connected) {
          if (userConnectedData.type === 'admin') {
            navigate("/perfil_admin")
          } 
      } else {
          navigate("/perfil_admin")
      }
      getData()
  }, [])

  const openPlayerInformation = () => {
    setIsOpenInformationPlayers(true);
    setIsOpenInformationCompany(false);
    setIsOpenInformationFields(false);
  }
  const openCompanyInformation = () => {
    setIsOpenInformationPlayers(false);
    setIsOpenInformationCompany(true);
    setIsOpenInformationFields(false);
  }
  const openFieldInformation = () => {
    setIsOpenInformationPlayers(false);
    setIsOpenInformationCompany(false);
    setIsOpenInformationFields(true);
  }

  return (
    <>
      <div>
        <div className="container">
        <div className="profileTable">
          <div className="optionsadmin">
          <h1 className="title">Dashboard Administrador</h1>
              <button className='itemprofile' onClick={openPlayerInformation}>Jugadores</button>
              <button className='itemprofile' onClick={openCompanyInformation}>Empresas</button>
              <button className='itemprofile' onClick={openFieldInformation}>Canchas</button>
          </div>
          <div className="rightbox">
              {InformationPlayers && <PlayerInformation isOpen={InformationPlayers} />}
              {InformationCompany && <CompanyInformation isOpen={InformationCompany} />}
              {InformationFields && <FieldInformation isOpen={InformationFields} />}

          </div>

      </div>
        </div>
      </div>
    </>
  )
}