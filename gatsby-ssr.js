import React from "react"

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const initProps = {}
  const element = [
    React.createElement(
      "title",
      initProps,
      "🧠 Developers' Brain - Digital garden of mental models"
    ),
  ]
  setHeadComponents([element])
}
