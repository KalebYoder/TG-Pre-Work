const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }
  catch(error){
    console.log(error);
  }
};

/*Here we construct boilerplate that is similar to, but not identical to, the code in the last exercise.*/
