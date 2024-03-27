


const dummyApiResponse = {
  showLightAndDarkMode : true,
  showTicTacToeBoard:true,
  showRandomColorGenerator:true,
  showAccordion:false,
  showTreeView:true,
}

export const featureFlagsDataServiceCall = () =>{
  return new Promise((resolve,reject) => {
    if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500)
    else reject("Some error occured Please Try Again")
  })
}