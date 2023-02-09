const DatabaseName = 'employeeDetailsDB';
const DatabaseVersion = 1;
const StoreName = 'employeesDetails';

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const idb = async (): Promise<IDBDatabase> => {
  return await new Promise((resolve, reject) => {
    const request = indexedDB.open(DatabaseName, DatabaseVersion);
    request.onsuccess = (event) => {
      resolve((event.target as any).result);
    };
    request.onerror = (event) => {
      reject((event.target as any).error);
    };
    request.onupgradeneeded = (event) => {
      const db = (event.target as any).result;
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!db) {
        reject(new Error('Error while opening the database'));
        return;
      }
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!db.objectStoreNames.contains(StoreName)) {
        const objectStore = db.createObjectStore(StoreName, {
          keyPath: 'id',
        });
        objectStore.createIndex('id' as string, 'id', { unique: true });
        objectStore.createIndex('name' as string, 'name', { unique: false });
        objectStore.createIndex('role', 'role', { unique: false });
        objectStore.createIndex('salary', 'salary', { unique: false });
      }
    };
  });
};

export const addEmployee = async (employee: Employee) => {
  const db = await idb();
  const transaction = db.transaction([StoreName], 'readwrite');
  const objectStore = transaction.objectStore(StoreName);
  return await new Promise<void>((resolve, reject) => {
    const request = objectStore.add(employee);
    request.onsuccess = () => {
      resolve();
    };
    request.onerror = (event) => {
      reject((event.target as any).error);
    };
  });
};

export const getEmployees = async () => {
  const db = await idb();
  const transaction = db.transaction([StoreName], 'readonly');
  const objectStore = transaction.objectStore(StoreName);
  return await new Promise((resolve, reject) => {
    const request = objectStore.getAll();
    request.onsuccess = (event) => {
      resolve((event.target as any).result);
    };
    request.onerror = (event) => {
      reject((event.target as any).error);
    };
  });
};
