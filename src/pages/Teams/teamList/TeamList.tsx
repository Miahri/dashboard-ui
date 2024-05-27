import React, {FC, useEffect, useState} from 'react';
import s from "./TeamList.module.css";
import {SelectComponent} from "../../../components/select/SelectComponent";
import {ViewToggle} from "../../../components/view/ViewToggle";
import {CardGallery} from "../gallery/CardGallery";
import EnhancedTable from "../../../components/table/EnhancedTable";
import {EmployeesWithIdNPhotoType, TeamsWithIdType, TeamType} from "../../../api/types";
import photo1 from "../../../images/photo1.jpg";
import photo2 from "../../../images/photo2.jpg";
import photo3 from "../../../images/photo3.jpg";
import photo4 from "../../../images/photo4.jpg";
import photo5 from "../../../images/photo5.jpg";
import photo6 from "../../../images/photo6.jpg";
import photo7 from "../../../images/photo7.jpg";
import photo8 from "../../../images/photo8.jpg";
import photo9 from "../../../images/photo9.jpg";
import photo10 from "../../../images/photo10.jpg";
import photo11 from "../../../images/photo11.jpg";
import photo12 from "../../../images/photo12.jpg";
import {v1} from 'uuid';
import {EmployeeInfo} from "../employeeInfo/EmployeeInfo";
import {TeamInfo} from "../teamInfo/TeamInfo";
import c from '../../../styles/CommonStyles.module.css';

const images = [`${photo1}`, `${photo2}`, `${photo3}`, `${photo4}`, `${photo5}`, `${photo6}`,
  `${photo7}`, `${photo8}`, `${photo9}`, `${photo10}`, `${photo11}`, `${photo12}`];

type PropsType = {
  teams: TeamType[]
}

export const TeamList: FC<PropsType> = ({
                                          teams
                                        }) => {
  let teamsDataWithIdNPhoto: TeamsWithIdType[] = teams.map(team => ({
    id: v1(),
    ...team,
    employees: team.employees.map((emp, index) => ({
      id: v1(),
      photo: images[index % images.length],
      ...emp
    }))
  }));

  const titles = teamsDataWithIdNPhoto.map(team => team.title);
  const allEmployees = teamsDataWithIdNPhoto.flatMap(team => team.employees);

  const getUniquePositions = (arr: TeamsWithIdType[]) => {
    const allPositions = arr.flatMap(team => team.employees.map(emp => emp.title));
    const uniquePositions: string[] = [];
    allPositions.forEach(pos => {
      if (!uniquePositions.includes(pos)) {
        uniquePositions.push(pos)
      }
    });
    return uniquePositions
  }

  const filterTeamsByEmployeeTitle = (data: TeamsWithIdType[], targetTitle: string): TeamsWithIdType[] => {
    return data
      .map(team => {
        const filteredEmp = team.employees.filter(employee => employee.title === targetTitle);
        if (filteredEmp.length > 0) {
          return {
            ...team,
            employees: filteredEmp
          };
        } else {
          return null;
        }
      })
      .filter(team => team !== null) as TeamsWithIdType[];
  }

  const [teamsTitles, setTeamsTitles] = useState<string[]>(titles);
  const [empsPositions, setEmpsPositions] = useState<string[]>(getUniquePositions(teamsDataWithIdNPhoto))
  const [alignment, setAlignment] = useState('module');
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [selectedPos, setSelectedPos] = useState<string>('');
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeesWithIdNPhotoType[]>(allEmployees);
  const [selectedEmp, setSelectedEmp] = useState<string>('');
  const [selectedTeamData, setSelectedTeamData] = useState<TeamsWithIdType>({} as TeamsWithIdType)
  const [
    selectedEmployeeData,
    setSelectedEmployeeData
  ] = useState<EmployeesWithIdNPhotoType | null>(null);

  useEffect(() => {
    let filteredData = teamsDataWithIdNPhoto;
    setTeamsTitles(titles);

    if (selectedTeam) {
      filteredData = filteredData.filter(team => team.title === selectedTeam);
      setEmpsPositions(getUniquePositions(filteredData));
      let data = filteredData.find(team => team.title === selectedTeam);
      setSelectedEmp('');
      if(data) {
        setSelectedTeamData(data)
      }
    }

    if (selectedPos) {
      if (!selectedTeam) {
        filteredData = filterTeamsByEmployeeTitle(filteredData, selectedPos);
      } else {
        const foundTeams = filteredData.filter(team => team.title === selectedTeam);
        filteredData = filterTeamsByEmployeeTitle(foundTeams, selectedPos);
      }
    }

    setFilteredEmployees(filteredData.flatMap(team => team.employees))
  }, [selectedTeam, selectedPos, teams]);

  useEffect(() => {
    if(selectedEmp) {
      let data = filteredEmployees.find(emp => emp.id === selectedEmp);
      if(data){
        setSelectedEmployeeData(data)
      }
    }
  }, [selectedEmp]);

  const toggleTableList = () => {
    setTeamsTitles(titles);
    setEmpsPositions(getUniquePositions(teamsDataWithIdNPhoto));
    setSelectedTeam('');
    setSelectedPos('');
    setSelectedEmp('');
    setFilteredEmployees(allEmployees);
  }

  const content = selectedEmp ? <EmployeeInfo employee={selectedEmployeeData}
                                              setSelectedEmp={setSelectedEmp}/>
    : selectedTeam ? <TeamInfo selectedTeamData={selectedTeamData} />
      : <p style={{margin: "0 auto", fontWeight: 'bold', fontSize: "25px"}}>
        Choose team for more information
      </p>

  return (
    <>
      <div className={`${c.container} ${c.content}`}>
        <div className={c.rowContainer}>
          <div className={`${c.horizontalContainer}`} style={{width: "250px"}}>
            <h3>Teams</h3>
            <button className={s.addTeamBtn}>Add new team</button>
          </div>
        </div>
        <div className={c.rowContainer} style={{height: 80}}>
          <div className={`${c.horizontalContainer}`} style={{width: "420px"}}>
            <SelectComponent currentValue={selectedTeam} label={"Team"} options={teamsTitles}
                             setValue={setSelectedTeam}/>
            <SelectComponent currentValue={selectedPos} label={"Position"} options={empsPositions}
                             setValue={setSelectedPos}/>
          </div>
          <div className={`${c.horizontalContainer} ${s.view}`}>
            <button className={s.allBtn} onClick={toggleTableList}>ALL</button>
            <ViewToggle alignment={alignment} setAlignment={setAlignment}/>
          </div>
        </div>
        <div>
          {alignment === 'module' ? <CardGallery employees={filteredEmployees} setSelectedEmp={setSelectedEmp}/>
            : alignment === 'justify' ?
              <EnhancedTable tableData={filteredEmployees} setSelected={setSelectedEmp}/> : ''}
        </div>
      </div>
      <div className={`${c.container} ${c.additionalData}`}>
        {content}
      </div>
    </>
  );
};