


  export const sortingHelper = ({array, type, order}) => {
    if(order === "up"){
        if(type === "number"){
            array.sort((a,b) => b[type] - a[type])
          }
          else if(type === "createdAt" || type === "updatedAt"){
            array.sort((a,b) => {
              const ab = new Date(a[type])
              const bb = new Date(b[type])
              return bb - ab
            })
          }
          else{
            array.sort((a,b) => {
              var nameA = a[type]; 
              var nameB = b[type]; 
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              return 0;
            })
          }
    }else{
        if(type === "number"){
            array.sort((a,b) => a[type] - b[type])
          }
          else if(type === "createdAt" || type === "updatedAt"){
            array.sort((a,b) => {
              const ab = new Date(a[type])
              const bb = new Date(b[type])
              return ab - bb
            })
          }
          else{
            array.sort((a,b) => {
              var nameA = a[type]; 
              var nameB = b[type]; 
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            })
          }
    }

    return array;
  }