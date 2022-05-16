import React from 'react';
import { Modal } from 'react-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { taskStarted, taskCompleted } from '../services/DeliveryTaskService';

const convertStartToNiceString = (task) => {
  if (task.startAddress != null) {
    return task.startAddress;
  } else if (task.startParcelMachineLocker != null) {
    return (
      '(PM)' +
      task.startParcelMachineLocker.parcelMachine.address +
      ' Locker: ' +
      task.startParcelMachineLocker.lockerId
    );
  } else if (task.startWarehouse != null) {
    return '(Warehouse)' + task.startWarehouse.address;
  }
};

const convertDestToNiceString = (task) => {
  if (task.destinationAddress != null) {
    return task.startAddress;
  } else if (task.destinationParcelMachineLocker != null) {
    return (
      '(PM)' +
      task.destinationParcelMachineLocker.parcelMachine.address +
      ' Locker: ' +
      task.destinationParcelMachineLocker.lockerId
    );
  } else if (task.destinationWarehouse != null) {
    return '(Warehouse)' + task.destinationWarehouse.address;
  }
};

const getOngoingTaskId = (tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status == 'AWAITING' || tasks[i].status == 'PICKED_UP') {
      return tasks[i].id;
    }
  }
  return -1;
};

function DeliveryTasksModal({ parcel, display, onExit, onUpdate }) {
  const onGoingTaskId =
    parcel != null ? getOngoingTaskId(parcel.deliveryPlan.sort((a, b) => a.order - b.order)) : -1;

  const pickUpTask = async (taskId) => {
    await taskStarted(taskId);
    onUpdate({ key: Math.random() });
  };

  const completeTask = async (taskId) => {
    await taskCompleted(taskId);
    onUpdate({ key: Math.random() });
  };
  return (
    <Modal
      show={display}
      onHide={onExit}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">Custom Modal Styling</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Start</th>
            <th>Destination</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcel != null &&
            parcel.deliveryPlan
              .sort((a, b) => a.order - b.order)
              .map((x) => {
                return (
                  <tr key={x.id}>
                    <td>{x.order}</td>
                    <td>{x.status}</td>
                    <td>{convertStartToNiceString(x)}</td>
                    <td>{convertDestToNiceString(x)}</td>
                    <td>
                      {
                        {
                          AWAITING: (
                            <Button
                              variant="warning"
                              disabled={onGoingTaskId != x.id}
                              onClick={() => {
                                pickUpTask(x.id);
                              }}
                            >
                              PICKED UP
                            </Button>
                          ),
                          PICKED_UP: (
                            <Button
                              variant="success"
                              disabled={onGoingTaskId != x.id}
                              onClick={() => {
                                completeTask(x.id);
                              }}
                            >
                              COMPLETED
                            </Button>
                          ),
                          DELIVERED: (
                            <Button variant="secondary" disabled={true}>
                              DONE
                            </Button>
                          ),
                        }[x.status]
                      }
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </Modal>
  );
}

export default DeliveryTasksModal;
