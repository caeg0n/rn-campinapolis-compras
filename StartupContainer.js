function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: 'Hello from fetched data!' };
      resolve(data);
    }, 2000);
  });
}

const StartupContainer = {
  async init() {
    try {
      console.log('StartupContainer');
      const data = await fetchData();
      console.log('Data fetched:', data);
      console.log('App initialization complete.');
    } catch (error) {
      console.error('An error occurred during app initialization:', error);
    }
  },
};

export default StartupContainer;
