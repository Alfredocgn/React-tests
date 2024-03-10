import { useState } from "react";
import data from "./data"
import './styles.css'

type ItemId = string;

interface AccordionData {
  id:ItemId;
  question:string;
  answer:string;
}

export const Accordion : React.FC = () => {

  const [selected,setSelected] =useState<ItemId | null>(null)
  const [enableMultiSelection,setEnableMultiSelection]= useState<boolean>(false)
  const [multiple,setMultiple] = useState<ItemId[]>([])

  const handleSingleSelection = (getCurrentId: string ) =>{

    setSelected(getCurrentId === selected ? null : getCurrentId)

    

  }

  const handleMultipleSelection = (getCurrentId : string) =>{

    const copyMultiple = [...multiple]
    const findIndexOfCurrentItem = copyMultiple.indexOf(getCurrentId)
    if(findIndexOfCurrentItem === -1 ) {
      copyMultiple.push(getCurrentId)
    }else {
      copyMultiple.splice(findIndexOfCurrentItem,1)
    }

    setMultiple(copyMultiple)

  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selector</button>
      <div className="accordion">
        {
          data && data.length > 0 ?  data.map((dataItem : AccordionData)=> {
            return (
              <div className="item">
                <div className="title" onClick={enableMultiSelection ? 
                  () => (handleMultipleSelection(dataItem.id)) : 
                  () => handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1  ? <div className="content">{dataItem.answer}</div> : null
                }

              </div>
            )
          }) : 'Data not found' 
        }

      </div>



    </div>
  )
}
