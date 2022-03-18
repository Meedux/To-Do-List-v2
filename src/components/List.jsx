import React from 'react'
import ListItem from './ListItem'
import { motion, AnimatePresence } from 'framer-motion'

const List = ({ data, removeList }) => {
  return (
    //Figure out how to trigger an exit animation without bullshitting the fucking list alignment
    <AnimatePresence>
      <div className="container">
        <div className="row">
            {data.map(item=>(
              <div key={item.id} className="col-md-6"> 
                  <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  >
                  <ListItem  data={item} remove={removeList}/>
                  </motion.div>
              </div>
            ))}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default List