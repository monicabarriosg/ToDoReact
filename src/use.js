// funcion del metodo POST 
// esta funcion recibe el parametro de URL ya que esta va a ser la API que se se le va a asignar
// esta funcion esta a la espera de una data  
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
// funcion para el metodo GET 
// esta funcion va aceder a la URL que sera la API
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
// funcion para el metodo PUT 
// esta funcion esta al espera de una URL que sera una API 
// esta a la espera de una data 
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
  //funcion para el metodo DELETE
    // esta funcion va a accder a la url que sera la API 
    // y la data que son los datos subidos para eliminarnos 

 export async function deleteData(Url, id) {
    try {
      const url = `${Url}/${id}`; 
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
