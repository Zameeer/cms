import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Papa from 'papaparse'; // Ensure papaparse is correctly installed and declared
import './Dashboard.css';

interface DataItem {
  id: string;
  [key: string]: any; // Allow dynamic properties
}

const Dashboard: React.FC = () => {
  const [dataType, setDataType] = useState<string>('staff'); // Dynamically change based on user selection
  const [data, setData] = useState<DataItem[]>([]); // Array of data items
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editData, setEditData] = useState<DataItem | null>(null); // Data to edit/add
  const [columns, setColumns] = useState<string[]>([]); // Column headers

  // Paths for CSV files
  const csvFilePaths: { [key: string]: string } = {
    staff: '/path-to-your-csv/staff.csv',
    students: '/path-to-your-csv/students.csv',
    courses: '/path-to-your-csv/courses.csv',
    departments: '/path-to-your-csv/departments.csv',
    classes: '/path-to-your-csv/classes.csv',
  };

  // Fetch CSV data and parse it
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvFilePaths[dataType]);
      const reader = response.body?.getReader();
      const result = await reader?.read(); // Read the stream
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result?.value);

      Papa.parse<DataItem>(csv, {
        header: true, // Parse headers
        dynamicTyping: true, // Convert types dynamically
        complete: (results) => {
          setData(results.data); // Store data
          setColumns(Object.keys(results.data[0] || {})); // Set column headers
        },
      });
    };

    fetchData();
  }, [dataType]); // Rerun when dataType changes

  // Handle Add Data
  const handleAdd = () => {
    const newItem: DataItem = columns.reduce((acc, col) => {
      acc[col] = ''; // Set default values as empty strings
      return acc;
    }, { id: '' });
    setEditData(newItem);
    setShowModal(true);
  };

  // Handle Edit Data
  const handleEdit = (item: DataItem) => {
    setEditData(item); // Set item to be edited
    setShowModal(true);
  };

  // Handle Delete Data
  const handleDelete = (id: string) => {
    setData(data.filter((item) => item.id !== id)); // Remove the item
  };

  // Handle Save Data (for both add and edit)
  const handleSave = () => {
    if (editData) {
      if (editData.id) {
        // If editing, replace the existing item
        setData(data.map((item) => (item.id === editData.id ? editData : item)));
      } else {
        // If adding new data, assign a new ID
        const newId = (data.length + 1).toString();
        setData([...data, { ...editData, id: newId }]);
      }
      setShowModal(false); // Close modal
      setEditData(null); // Reset editData
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => setDataType('staff')}>Staff</li>
          <li onClick={() => setDataType('students')}>Students</li>
          <li onClick={() => setDataType('courses')}>Courses</li>
          <li onClick={() => setDataType('departments')}>Departments</li>
          <li onClick={() => setDataType('classes')}>Classes</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>{dataType.charAt(0).toUpperCase() + dataType.slice(1)}</h1>
        <Button variant="primary" onClick={handleAdd}>
          Add {dataType.charAt(0).toUpperCase() + dataType.slice(1)}
        </Button>

        {/* Data Table */}
        <Table striped bordered hover className="data-table mt-4">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col.charAt(0).toUpperCase() + col.slice(1)}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {columns.map((col) => (
                  <td key={col}>{item[col]}</td>
                ))}
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Edit/Add Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editData?.id ? `Edit ${dataType}` : `Add ${dataType}`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {columns.map((col) => (
                <Form.Group controlId={`form${col}`} key={col} className="mb-3">
                  <Form.Label>{col.charAt(0).toUpperCase() + col.slice(1)}</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData?.[col] || ''} // Dynamically set form values
                    onChange={(e) =>
                      setEditData({ ...editData, [col]: e.target.value }) // Update state
                    }
                  />
                </Form.Group>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
