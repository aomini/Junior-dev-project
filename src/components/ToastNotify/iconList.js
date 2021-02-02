import * as Icon from "react-feather"
const icons = {
  success: <Icon.Smile color='yellow' />,
  error: <Icon.Frown color='red' />,
  warning: <Icon.AlertTriangle />,
  close: <Icon.X />,
}

const themes = {
  success: {
    background: "green",
  },
  error: {
    background: "tomato",
  },
  warning: {
    background: "yellow",
  },
}

export { icons, themes }
