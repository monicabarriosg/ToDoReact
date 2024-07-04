 export async function fetchData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
     
        },
        body: JSON.stringify(data), 
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();  
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
    
      return null;
    }
  }
  


////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
 export async function getData(url) {
    try {
      const response = await fetch(url, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
       
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();  
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
     
      return null;
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////
 export async function putData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(data),  
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json(); 
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
     
      return null;
    }
  }
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
 
  export async function deleteData(url) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
    
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();  
      return responseData;
    } catch (error) {
      console.error('Error deleting data:', error);
      
      return null;
    }
  }
  
