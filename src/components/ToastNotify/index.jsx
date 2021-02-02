import React, { useState, useEffect } from "react"
import { capitalize } from "../../utilities"
import { icons } from "./iconList"
import Style from "./popup.module.scss"

const ToastNotify = (props) => {
  const { toastList = [], position } = props
  const [list, setList] = useState([])

  useEffect(() => {
    setList([...toastList])
    setTimeout(() => {
      setList([])
    }, 2000)
  }, [toastList])

  return (
    <div className={Style.notificationContainer + ` ${Style[position]}`}>
      {list.length
        ? list.map((toast, i) => (
            <div
              key={i}
              className={`${Style.notification}  ${Style[toast.type]}`}
            >
              <div className={Style.buttonContainer}>
                <button className={Style.notificationButton}>
                  {icons.close}
                </button>
              </div>
              {/* <div className={Style.notificationImage}>{icons[toast.type]}</div> */}
              <div>
                <p className={Style.notificationTitle}>
                  {capitalize(toast.title)}
                </p>
                <p className='notification-message'>{toast.description}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  )
}

export default ToastNotify
