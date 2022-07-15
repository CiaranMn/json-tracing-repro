import { useGraphEmbedderService } from "@blockprotocol/graph/react"

import { useEffect, useRef } from "react";


export const Component = () => {

  const ref = useRef();
  const { graphService } = useGraphEmbedderService(ref);

  return <div ref={ref}>Graph</div>
}
