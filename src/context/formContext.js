import { createContext, useContext, useState } from "react";

export const FormContext = createContext({})

export const FormProvider = ({children}) => {
    const { selectedValue,
        setSelectedValue, listingOption, setListingOption, refundType, setRefundType,routerSelect, setRouterSelect, infoData, setInfoData} = useFormData()

    return <FormContext.Provider value={{ selectedValue,
        setSelectedValue, listingOption, setListingOption, refundType, setRefundType, routerSelect, setRouterSelect, infoData, setInfoData}}>
        {children}
    </FormContext.Provider>
} ;

const useFormData = () => {

    const [infoData, setInfoData] = useState({
        softCap: '',
        hardCap: '',
        perSaleRate: '',
        minimumBuy: '',
        maximumBuy: '',
        liquidity: '',
        listingRate: '',
        liquidityLockup: '',
        startDate: '',
        endDate: '',
        // refundType: '',
        
      });
    const [routerSelect, setRouterSelect] = useState();

    const [refundType, setRefundType] = useState();
    const [selectedValue, setSelectedValue] = useState('MATIC')
    const [listingOption, setListingOption] = useState('Auto Listing')
    return {
        refundType, setRefundType,
        selectedValue,
        setSelectedValue,
        listingOption, setListingOption, routerSelect, setRouterSelect,infoData, setInfoData
    }

}

export const useForm = () => {
    return useContext(FormContext)
}