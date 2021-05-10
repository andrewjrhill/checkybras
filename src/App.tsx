import React, { useState } from 'react';
import uniqid from 'uniqid'
import './App.css';
import { Checkbox, Label } from 'theme-ui'

interface DummyData {
  id: string;
  label: string;
}

const dummyData: DummyData[] = [
  {id: uniqid(), label: 'Dobek'},
  {id: uniqid(), label: 'Ruhur'},
  {id: uniqid(), label: 'Obull'},
  {id: uniqid(), label: 'Miomloh'},
  {id: uniqid(), label: 'Knuorgeth'},
  {id: uniqid(), label: 'Thrandaq'},
]

const App: React.FC = () => {
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false)
  const [checkedCheckboxesIds, setCheckedCheckboxesIds] = useState<string[]>([])

  const toggleSelectAll = () => {
    if (selectAllChecked === true) {
      setSelectAllChecked(false)
      setCheckedCheckboxesIds([])
    } else {
      setSelectAllChecked(true)
      setCheckedCheckboxesIds(dummyData.map(dat => dat.id))
    }
  }

  const onChange = (data: DummyData) => {
    if (checkedCheckboxesIds.includes(data.id)) {
      setCheckedCheckboxesIds(checkedCheckboxesIds.filter(id => id !== data.id))
    } else {
      setCheckedCheckboxesIds([...checkedCheckboxesIds, data.id])
    }
  }

  return (
    <div className='App-header'>
      <Label><Checkbox checked={selectAllChecked} onChange={() => toggleSelectAll()} />select all</Label>
      <hr />
      {dummyData.map((data, index) => <Label key={data.id}><Checkbox checked={checkedCheckboxesIds.includes(data.id)} onChange={() => onChange(data)}/>{data.label}</Label>)}
    </div>
  );
}

export default App;
