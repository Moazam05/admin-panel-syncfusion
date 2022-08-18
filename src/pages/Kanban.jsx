// React Imports
import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
// Custom Imports
import Header from '../components/Header';
// Dummy Data
import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Kanban' />
      <KanbanComponent
        id='Kanban'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
