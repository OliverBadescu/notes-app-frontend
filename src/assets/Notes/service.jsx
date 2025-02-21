function api(path, method = 'GET', body = null) {
    const url = `http://www.localhost:8080/notes-app/note/${path}`;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
      },
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    return fetch(url, options);
  }
  
  async function request(path, method = 'GET', body = null) {
    try {
      const response = await api(path, method, body);
      const data = await response.json().catch(() => null);
  
      if (!response.ok) {
        const errorMessage =
          (data && data.message) || response.statusText || 'Request failed';
        throw new Error(Error `${response.status}: ${errorMessage}`);
      }
  
      return {
        success: true,
        status: response.status,
        body: data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Something went wrong',
      };
    }
  }


 export function getAllUserNotes(userId){
    return request(`getAllUserNotes/${userId}`, 'GET');
  }

  export function deleteNote(noteId){
    return request(`deleteNote/${noteId}`, 'DELETE');
  }

  export function addNote(userId, noteRequest){
    return request(`addNote/${userId}`, 'POST', noteRequest);
  }