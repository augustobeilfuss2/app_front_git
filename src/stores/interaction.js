import { defineStore } from 'pinia';


export const useInteractionStore = defineStore('interaction', () =>  {
    
    let componentKey = 0


  
        localStorage.setItem('componentKey', componentKey);
   
    return { componentKey }
  }
)

export default useInteractionStore