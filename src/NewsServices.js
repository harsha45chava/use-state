export const newsByCategory = () =>
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=d958b72590774683af46819760963ff2",
    {
      method: "GET",
    }
  )
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json());
