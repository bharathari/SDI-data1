import React, { useState } from 'react';
import { Modal, ModalDialog, Typography } from '@mui/joy';

interface DataItem {
  id: number;
  name: string;
}

const MyComponent: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDataItem, setSelectedDataItem] = useState<DataItem | null>(null);
  const dataArray: DataItem[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const handleOpenModal = (dataIndex: number) => {
    setOpenModal(true);
    setSelectedDataItem(dataArray[dataIndex]);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDataItem(null); // Reset selected data on close
  };

  return (
    <div>
      {dataArray.map((dataItem: DataItem, index: number) => (
        <button key={dataItem.id} onClick={() => handleOpenModal(index)}>
          {dataItem.name}
        </button>
      ))}
      <Modal open={openModal} onClose={handleCloseModal}>
        <ModalDialog title="Item Details">
          {selectedDataItem && (
            <>
              <Typography>Selected Item</Typography>
              <Typography>Index: {selectedDataItem.id}</Typography>
              <Typography>Name: {selectedDataItem.name}</Typography>
            </>
          )}
          {/* Add any other modal content based on selectedDataItem */}
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default MyComponent;
