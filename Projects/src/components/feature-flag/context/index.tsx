import { createContext, useEffect, useState } from "react";
import { featureFlagsDataServiceCall } from "../data";

interface FeatureFlags {
  loading:boolean;
  enabledFlags: Record<string,boolean>
}

const FeatureFlagsContext = createContext<FeatureFlags | null>(null)




export const FeatureFlagGlobalState: React.FC<{children : React.ReactNode}> = ({children}) => {

  const [loading,setLoading] = useState<boolean>(false)
  const [enabledFlags,setEnabledFlags] = useState<Record<string,boolean>>({})

  const fetchFeatureFlags = async () => {



    try {
      setLoading(true)
      const response = await featureFlagsDataServiceCall()
      setEnabledFlags(response)
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
      throw new Error(error)
      
    }
  } 
  useEffect(() => {
    fetchFeatureFlags()
  },[])


  return (
    <FeatureFlagsContext.Provider value={{loading,enabledFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

export default FeatureFlagsContext;
